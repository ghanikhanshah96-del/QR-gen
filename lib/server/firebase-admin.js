import { createHash } from 'node:crypto';
import { cert, getApps, initializeApp } from 'firebase-admin/app';
import { getAppCheck } from 'firebase-admin/app-check';
import { getFirestore } from 'firebase-admin/firestore';
import { getStorage } from 'firebase-admin/storage';

const BUCKET = 'generateqrfast.firebasestorage.app';

function serviceAccount() {
  return JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY);
}

function app() {
  return getApps()[0] || initializeApp({ credential: cert(serviceAccount()), storageBucket: BUCKET });
}

export const adminDb = () => getFirestore(app());
export const adminBucket = () => getStorage(app()).bucket();

/** Skipped under `next dev`, where the browser has no reCAPTCHA token. */
export async function isAllowedVisitor(request) {
  if (process.env.NODE_ENV === 'development') return true;
  const token = request.headers.get('x-firebase-appcheck');
  if (!token) return false;
  try {
    await getAppCheck(app()).verifyToken(token);
    return true;
  } catch {
    return false;
  }
}

/** One-way visitor id for daily limits, so raw IP addresses are never stored. */
export function visitorId(request) {
  const ip =
    request.headers.get('x-vercel-forwarded-for') ||
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    'unknown';
  return createHash('sha256').update(`${serviceAccount().private_key_id}:${ip}`).digest('hex').slice(0, 32);
}

export function isFileId(id) {
  return /^[A-Za-z0-9_-]{22}$/.test(String(id));
}

export const objectPath = (id) => `uploads/${id}`;
