import { randomBytes } from 'node:crypto';

// A route handler, not a page: it skips the root layout, so no Analytics or AdSense can
// load here and read the decryption key in the URL fragment.

const STYLES = `
:root{color-scheme:light dark;--bg:#f6f7f9;--card:#fff;--ink:#14181f;--muted:#5b6472;--line:#dfe3e9;--accent:#2563eb;--bad:#b42318}
@media (prefers-color-scheme:dark){:root{--bg:#0f1319;--card:#181e27;--ink:#eef1f5;--muted:#a3adba;--line:#2b3440;--accent:#6b9cff;--bad:#ff8a7a}}
*{box-sizing:border-box}
body{margin:0;min-height:100vh;display:flex;align-items:center;justify-content:center;padding:16px;background:var(--bg);color:var(--ink);font:16px/1.5 system-ui,-apple-system,"Segoe UI",sans-serif}
main{width:100%;max-width:640px;padding:24px;background:var(--card);border:1px solid var(--line);border-radius:14px;text-align:center}
h1{margin:0 0 8px;font-size:20px;overflow-wrap:anywhere}
p{margin:0;color:var(--muted)}
p.bad{color:var(--bad)}
img,video{display:block;width:100%;max-height:70vh;object-fit:contain;margin:16px 0 0;border-radius:8px}
a.save{display:inline-block;margin-top:16px;padding:10px 18px;border-radius:8px;background:var(--accent);color:#fff;font-weight:600;text-decoration:none}
footer{margin-top:16px;font-size:13px;color:var(--muted)}
[hidden]{display:none}
`;

const SCRIPT = `
(async () => {
  const title = document.getElementById('title');
  const status = document.getElementById('status');
  const show = document.getElementById('show');
  const fail = (message) => {
    title.textContent = 'This file could not be opened';
    status.textContent = message;
    status.className = 'bad';
  };

  const id = location.pathname.split('/').filter(Boolean).pop();
  const key = location.hash.slice(1);
  if (!key) return fail('This link is incomplete. Scan the QR code again.');

  try {
    const info = await fetch('/api/files/' + encodeURIComponent(id) + '/');
    if (info.status === 404) return fail('This file does not exist.');
    if (!info.ok) return fail('The file is unavailable right now. Try again shortly.');
    const { url } = await info.json();

    status.textContent = 'Downloading…';
    const download = await fetch(url);
    if (!download.ok) return fail('The file is unavailable right now. Try again shortly.');
    const sealed = new Uint8Array(await download.arrayBuffer());

    status.textContent = 'Decrypting…';
    const raw = Uint8Array.from(atob(key.replace(/-/g, '+').replace(/_/g, '/')), (c) => c.charCodeAt(0));
    const cryptoKey = await crypto.subtle.importKey('raw', raw, 'AES-GCM', false, ['decrypt']);
    const plain = new Uint8Array(
      await crypto.subtle.decrypt({ name: 'AES-GCM', iv: sealed.subarray(0, 12) }, cryptoKey, sealed.subarray(12))
    );
    const metaLength = new DataView(plain.buffer).getUint32(0);
    const meta = JSON.parse(new TextDecoder().decode(plain.subarray(4, 4 + metaLength)));
    const bytes = plain.subarray(4 + metaLength);

    title.textContent = meta.name;
    status.textContent = '';

    const type = String(meta.type);
    const save = document.createElement('a');
    save.className = 'save';
    save.textContent = 'Download';
    save.download = meta.name;
    save.href = URL.createObjectURL(new Blob([bytes], { type: 'application/octet-stream' }));

    const preview = URL.createObjectURL(new Blob([bytes], { type }));
    if (/^image\\/(png|jpeg|webp|gif|svg\\+xml)$/.test(type)) {
      const img = document.createElement('img');
      img.src = preview;
      img.alt = meta.name;
      show.append(img);
    } else if (/^video\\/(mp4|webm|ogg|quicktime)$/.test(type)) {
      const video = document.createElement('video');
      video.src = preview;
      video.controls = true;
      video.playsInline = true;
      show.append(video);
    }
    show.append(save);
  } catch {
    fail('The link is damaged or the file has changed. Scan the QR code again.');
  }
})();
`;

export async function GET() {
  const nonce = randomBytes(16).toString('base64');

  const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex">
<title>Shared file | GenerateQRFast</title>
<style nonce="${nonce}">${STYLES}</style>
</head>
<body>
<main>
<h1 id="title">Opening your file…</h1>
<p id="status" role="status">Getting the file ready.</p>
<div id="show"></div>
<footer>Decrypted in this browser. GenerateQRFast cannot read this file.</footer>
</main>
<script nonce="${nonce}">${SCRIPT}</script>
</body>
</html>`;

  return new Response(html, {
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'no-store',
      'Referrer-Policy': 'no-referrer',
      'X-Robots-Tag': 'noindex',
      'X-Content-Type-Options': 'nosniff',
      'Content-Security-Policy': [
        "default-src 'none'",
        `script-src 'nonce-${nonce}'`,
        `style-src 'nonce-${nonce}'`,
        "connect-src 'self' https://storage.googleapis.com",
        'img-src blob:',
        'media-src blob:',
        "base-uri 'none'",
        "form-action 'none'",
        "frame-ancestors 'none'",
      ].join('; '),
    },
  });
}
