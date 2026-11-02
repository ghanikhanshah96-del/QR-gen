import { randomBytes } from 'node:crypto';
import { NextResponse } from 'next/server';
import { FieldValue } from 'firebase-admin/firestore';
import { adminBucket, adminDb, isAllowedVisitor, objectPath, visitorId } from '@/lib/server/firebase-admin';
import { MEDIA_HOST, SEALED_OVERHEAD_BYTES } from '@/lib/storage/media-upload';

const MB = 1024 * 1024;
const GB = 1024 * MB;

const MAX_TOTAL_BYTES = Number(process.env.UPLOAD_MAX_TOTAL_GB || 50) * GB;
const VISITOR_DAILY_UPLOADS = Number(process.env.UPLOAD_VISITOR_DAILY_COUNT || 20);
const VISITOR_DAILY_BYTES = Number(process.env.UPLOAD_VISITOR_DAILY_MB || 300) * MB;
const UPLOAD_LINK_MS = 15 * 60 * 1000;

const MAX_BYTES_BY_KIND = {
  image: MEDIA_HOST.maxImageBytes,
  video: MEDIA_HOST.maxVideoBytes,
  file: MEDIA_HOST.maxFileBytes,
};

class LimitError extends Error {}

function fail(message, status) {
  return NextResponse.json({ error: message }, { status });
}

/** Reserves space and records the file, so limits hold even when requests arrive together. */
async function reserve(db, id, kind, size, visitor) {
  const day = new Date().toISOString().slice(0, 10);
  const totalRef = db.doc('limits/total');
  const visitorRef = db.doc(`limits/${day}_${visitor}`);

  await db.runTransaction(async (tx) => {
    const [totalDoc, visitorDoc] = await tx.getAll(totalRef, visitorRef);
    const totalBytes = totalDoc.get('bytes') || 0;
    const count = visitorDoc.get('count') || 0;
    const bytes = visitorDoc.get('bytes') || 0;

    if (totalBytes + size > MAX_TOTAL_BYTES) {
      throw new LimitError('Uploads are full right now. Paste your own link instead.');
    }
    if (count + 1 > VISITOR_DAILY_UPLOADS || bytes + size > VISITOR_DAILY_BYTES) {
      throw new LimitError('Daily upload limit reached. Try again tomorrow or paste your own link.');
    }

    tx.set(totalRef, { bytes: totalBytes + size });
    tx.set(visitorRef, { count: count + 1, bytes: bytes + size });
    tx.create(db.doc(`files/${id}`), { kind, size, createdAt: FieldValue.serverTimestamp() });
  });
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return fail('Invalid request.', 400);
  }

  const { kind, size } = body || {};
  const maxBytes = MAX_BYTES_BY_KIND[kind];
  if (!maxBytes || !Number.isInteger(size) || size <= 0 || size > maxBytes + SEALED_OVERHEAD_BYTES) {
    return fail('This file is too large or not supported.', 400);
  }

  if (!(await isAllowedVisitor(request))) {
    return fail('We could not verify this browser. Reload the page and try again.', 403);
  }

  const id = randomBytes(16).toString('base64url');

  try {
    await reserve(adminDb(), id, kind, size, visitorId(request));
  } catch (err) {
    if (err instanceof LimitError) return fail(err.message, 429);
    console.error('Upload approval failed:', err);
    return fail('Upload is unavailable right now. Try again shortly.', 503);
  }

  // The signed headers fix the exact size and stop the link from replacing a finished upload.
  const headers = {
    'x-goog-content-length-range': `${size},${size}`,
    'x-goog-if-generation-match': '0',
  };

  try {
    const [uploadUrl] = await adminBucket()
      .file(objectPath(id))
      .getSignedUrl({
        version: 'v4',
        action: 'write',
        expires: Date.now() + UPLOAD_LINK_MS,
        contentType: 'application/octet-stream',
        extensionHeaders: headers,
      });
    return NextResponse.json({ id, uploadUrl, headers });
  } catch (err) {
    console.error('Upload link failed:', err);
    return fail('Upload is unavailable right now. Try again shortly.', 503);
  }
}
