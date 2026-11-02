import { NextResponse } from 'next/server';
import { adminBucket, adminDb, isFileId, objectPath } from '@/lib/server/firebase-admin';

const READ_LINK_MS = 60 * 60 * 1000;

function reply(body, status = 200) {
  return NextResponse.json(body, { status, headers: { 'Cache-Control': 'no-store' } });
}

/** Gives the viewer page a short-lived link to the encrypted bytes. The key never comes here. */
export async function GET(_request, { params }) {
  const { id } = await params;
  if (!isFileId(id)) return reply({ error: 'File not found.' }, 404);

  try {
    const doc = await adminDb().doc(`files/${id}`).get();
    if (!doc.exists) return reply({ error: 'File not found.' }, 404);

    const [url] = await adminBucket()
      .file(objectPath(id))
      .getSignedUrl({ version: 'v4', action: 'read', expires: Date.now() + READ_LINK_MS });
    return reply({ url, size: doc.get('size') });
  } catch (err) {
    console.error('File lookup failed:', err);
    return reply({ error: 'This file is unavailable right now.' }, 503);
  }
}
