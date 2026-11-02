/**
 * Browser-side file encryption for hosted Image/Video/File QR codes.
 * The key only ever lives in the URL fragment, which browsers never send to a server.
 * Sealed format: 12-byte IV + AES-256-GCM of (4-byte meta length + meta JSON + file bytes).
 * app/f/[id]/route.js opens this format in its inline script; keep the two in step.
 */

const IV_BYTES = 12;
const LENGTH_BYTES = 4;
const MAX_NAME_LENGTH = 200;

function toBase64Url(bytes) {
  return btoa(String.fromCharCode(...bytes))
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');
}

function fromBase64Url(text) {
  const binary = atob(text.replace(/-/g, '+').replace(/_/g, '/'));
  return Uint8Array.from(binary, (c) => c.charCodeAt(0));
}

/**
 * Encrypt a file with a new random key.
 * @param {File} file
 * @returns {Promise<{ sealed: Blob, key: string }>} key is base64url, for the URL fragment
 */
export async function sealFile(file) {
  const meta = new TextEncoder().encode(
    JSON.stringify({ name: String(file.name || 'file').slice(0, MAX_NAME_LENGTH), type: file.type || '' })
  );
  const body = new Uint8Array(await file.arrayBuffer());

  const plain = new Uint8Array(LENGTH_BYTES + meta.length + body.length);
  new DataView(plain.buffer).setUint32(0, meta.length);
  plain.set(meta, LENGTH_BYTES);
  plain.set(body, LENGTH_BYTES + meta.length);

  const rawKey = crypto.getRandomValues(new Uint8Array(32));
  const iv = crypto.getRandomValues(new Uint8Array(IV_BYTES));
  const cryptoKey = await crypto.subtle.importKey('raw', rawKey, 'AES-GCM', false, ['encrypt']);
  const cipher = await crypto.subtle.encrypt({ name: 'AES-GCM', iv }, cryptoKey, plain);

  return {
    sealed: new Blob([iv, cipher], { type: 'application/octet-stream' }),
    key: toBase64Url(rawKey),
  };
}

/**
 * Decrypt bytes produced by sealFile. Throws if the key is wrong or the data was changed.
 * @param {ArrayBuffer} sealedBuffer
 * @param {string} key base64url key from the URL fragment
 * @returns {Promise<{ name: string, type: string, bytes: Uint8Array }>}
 */
export async function openFile(sealedBuffer, key) {
  const sealed = new Uint8Array(sealedBuffer);
  const cryptoKey = await crypto.subtle.importKey('raw', fromBase64Url(key), 'AES-GCM', false, ['decrypt']);
  const plain = new Uint8Array(
    await crypto.subtle.decrypt(
      { name: 'AES-GCM', iv: sealed.subarray(0, IV_BYTES) },
      cryptoKey,
      sealed.subarray(IV_BYTES)
    )
  );

  const metaLength = new DataView(plain.buffer).getUint32(0);
  const meta = JSON.parse(new TextDecoder().decode(plain.subarray(LENGTH_BYTES, LENGTH_BYTES + metaLength)));
  return { name: meta.name, type: meta.type, bytes: plain.subarray(LENGTH_BYTES + metaLength) };
}
