import { createHash } from 'node:crypto';
import { cert, getApps, initializeApp } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { getStorage } from 'firebase-admin/storage';
import { createRemoteJWKSet, jwtVerify } from 'jose';

const BUCKET = 'generateqrfast.firebasestorage.app';
const PROJECT_NUMBER = '913644642080';
const WEB_APP_ID = '1:913644642080:web:d6959aa9d33a78123ac145';

// Verified here because firebase-admin/app-check crashes on Vercel: its jwks-rsa
// dependency require()s the ESM-only jose package (ERR_REQUIRE_ESM).
const APP_CHECK_KEYS = createRemoteJWKSet(new URL('https://firebaseappcheck.googleapis.com/v1/jwks'));

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
    const { payload } = await jwtVerify(token, APP_CHECK_KEYS, {
      algorithms: ['RS256'],
      issuer: `https://firebaseappcheck.googleapis.com/${PROJECT_NUMBER}`,
      audience: `projects/${PROJECT_NUMBER}`,
    });
    return payload.sub === WEB_APP_ID;
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
