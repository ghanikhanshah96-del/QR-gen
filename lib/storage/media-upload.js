/**
 * Encrypted media hosting for Image/Video/File QR codes.
 * The browser encrypts each file, app/api/uploads approves it, and the encrypted bytes go
 * straight to Firebase Storage. The key stays in the QR link, so the server cannot read files.
 */

import { sealFile } from './file-crypto.js';

export const MEDIA_HOST = {
  name: 'GenerateQRFast encrypted storage',
  maxImageBytes: 15 * 1024 * 1024,
  maxVideoBytes: 50 * 1024 * 1024,
  maxFileBytes: 25 * 1024 * 1024,
};

/** Room for the IV, auth tag and encrypted file name that encryption adds to each file. */
export const SEALED_OVERHEAD_BYTES = 2048;

/** Shown wherever an uploaded file is used: the QR link itself is what grants access. */
export const UPLOAD_PRIVACY_NOTICE =
  'Your file is encrypted before upload and the link does not expire. Anyone with this QR code can open the file, so share it with care. We cannot recover the file if you lose the QR code.';

// Public by design: these identify the web app and reCAPTCHA site, they grant no access.
const FIREBASE_WEB_CONFIG = {
  apiKey: 'AIzaSyAKMd3dGFy2hNhO0buCIC3kFDdlV7YeZSo',
  appId: '1:913644642080:web:d6959aa9d33a78123ac145',
  projectId: 'generateqrfast',
};
const RECAPTCHA_SITE_KEY = '6Leg5gguAAAAAA4-b7bnoW_i60eBRrS3khKjkW3N';

const IMAGE_TYPES = new Set([
  'image/png',
  'image/jpeg',
  'image/jpg',
  'image/webp',
  'image/gif',
  'image/svg+xml',
]);

const VIDEO_TYPES = new Set([
  'video/mp4',
  'video/webm',
  'video/quicktime',
  'video/x-msvideo',
  'video/mpeg',
  'video/ogg',
]);

const FILE_TYPES = new Set([
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'application/vnd.ms-excel',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  'application/vnd.ms-powerpoint',
  'application/vnd.openxmlformats-officedocument.presentationml.presentation',
  'application/rtf',
  'application/vnd.oasis.opendocument.text',
  'text/plain',
  'text/csv',
  'text/rtf',
  'application/json',
  'application/xml',
  'text/xml',
  // ZIP archives: browsers/OSes report several MIME types for the same .zip file.
  'application/zip',
  'application/x-zip-compressed',
  'application/x-zip',
  'multipart/x-zip',
]);

const FILE_EXT =
  /\.(pdf|docx?|xlsx?|pptx?|txt|csv|rtf|odt|json|xml|zip)$/i;

export function validateMediaFile(file, kind = 'image') {
  if (!file) return { ok: false, error: 'No file selected.' };

  if (kind === 'image') {
    if (!IMAGE_TYPES.has(file.type) && !/\.(png|jpe?g|gif|webp|svg)$/i.test(file.name)) {
      return { ok: false, error: 'Use PNG, JPG, WebP, GIF, or SVG.' };
    }
    if (file.size > MEDIA_HOST.maxImageBytes) {
      return { ok: false, error: 'Image must be under 15 MB.' };
    }
  } else if (kind === 'video') {
    if (!VIDEO_TYPES.has(file.type) && !/\.(mp4|webm|mov|avi|mkv|m4v)$/i.test(file.name)) {
      return { ok: false, error: 'Use MP4, WebM, or MOV video.' };
    }
    if (file.size > MEDIA_HOST.maxVideoBytes) {
      return { ok: false, error: 'Video must be under 50 MB.' };
    }
  } else if (kind === 'file') {
    if (!FILE_TYPES.has(file.type) && !FILE_EXT.test(file.name)) {
      return { ok: false, error: 'Use PDF, DOC, DOCX, TXT, CSV, RTF, XLS, PPT, ZIP, or similar.' };
    }
    if (file.size > MEDIA_HOST.maxFileBytes) {
      return { ok: false, error: 'File must be under 25 MB.' };
    }
  } else {
    return { ok: false, error: 'Unsupported upload type.' };
  }

  return { ok: true };
}

let appCheck;

/** Loads Firebase only when someone uploads, so other pages stay light. */
async function appCheckHeaders() {
  if (window.location.hostname === 'localhost') return {};
  const [{ initializeApp }, { initializeAppCheck, ReCaptchaEnterpriseProvider, getToken }] = await Promise.all([
    import('firebase/app'),
    import('firebase/app-check'),
  ]);
  appCheck ||= initializeAppCheck(initializeApp(FIREBASE_WEB_CONFIG), {
    provider: new ReCaptchaEnterpriseProvider(RECAPTCHA_SITE_KEY),
    isTokenAutoRefreshEnabled: false,
  });
  const { token } = await getToken(appCheck);
  return { 'X-Firebase-AppCheck': token };
}

function shareOrigin() {
  const { hostname, origin } = window.location;
  return hostname === 'localhost' ? origin : 'https://generateqrfast.com';
}

/**
 * Encrypt a file, upload it, and return the https link for the QR code.
 * @param {File} file
 * @param {'image'|'video'|'file'} kind
 */
export async function uploadMediaForQr(file, kind) {
  const { sealed, key } = await sealFile(file);

  let approval;
  try {
    approval = await fetch('/api/uploads/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', ...(await appCheckHeaders()) },
      body: JSON.stringify({ kind, size: sealed.size }),
    });
  } catch {
    throw new Error('Upload failed. Check your connection, or paste a URL instead.');
  }

  const approved = await approval.json().catch(() => ({}));
  if (!approval.ok) {
    throw new Error(approved.error || 'Upload is unavailable right now. Try again shortly.');
  }

  let stored;
  try {
    stored = await fetch(approved.uploadUrl, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/octet-stream', ...approved.headers },
      body: sealed,
    });
  } catch {
    throw new Error('Upload failed. Check your connection, or paste a URL instead.');
  }
  if (!stored.ok) {
    throw new Error(`Upload failed (${stored.status}). Try again or paste a URL.`);
  }

  return {
    url: `${shareOrigin()}/f/${approved.id}/#${key}`,
    provider: MEDIA_HOST.name,
    fileName: file.name,
    fileSize: file.size,
    mimeType: file.type,
  };
}
