/**
 * QR Code Repair — browser-only decoding with image cleanup.
 *
 * Tries the uploaded image as-is, then a series of cleanup passes (white border, enlarge,
 * contrast, black & white, sharpen, denoise) until ZXing can read the code. Nothing is uploaded:
 * the image is processed on a <canvas> and decoded by ZXing (WebAssembly) in this tab.
 *
 * Honest limit: this only works while QR error correction can still recover the data
 * (roughly 7% damage at level L up to 30% at level H). Beyond that the data is gone.
 */

// Self-hosted WASM (copied from node_modules/zxing-wasm/dist/reader). Keep the version in the
// file name in sync with package.json so browsers never use a stale cached copy.
const WASM_URL = '/vendor/zxing/zxing_reader-3.1.4.wasm';
const MAX_SIDE = 2000; // larger photos are scaled down first (faster, and ZXing prefers it)

let readerPromise = null;

function getReader() {
  if (!readerPromise) {
    readerPromise = import('zxing-wasm/reader').then((mod) => {
      mod.prepareZXingModule({
        overrides: {
          locateFile: (path, prefix) => (path.endsWith('.wasm') ? WASM_URL : prefix + path),
        },
      });
      return mod;
    });
  }
  return readerPromise;
}

/* ---------- canvas helpers ---------- */

function makeCanvas(w, h) {
  const c = document.createElement('canvas');
  c.width = Math.max(1, Math.round(w));
  c.height = Math.max(1, Math.round(h));
  return c;
}

function ctx2d(canvas) {
  return canvas.getContext('2d', { willReadFrequently: true });
}

/** Draw an image/canvas onto a new canvas at a given scale, optional white padding (fraction). */
function redraw(source, { scale = 1, pad = 0, smooth = true } = {}) {
  const w = source.width * scale;
  const h = source.height * scale;
  const p = Math.round(Math.max(w, h) * pad);
  const c = makeCanvas(w + p * 2, h + p * 2);
  const ctx = ctx2d(c);
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, c.width, c.height);
  ctx.imageSmoothingEnabled = smooth;
  ctx.imageSmoothingQuality = 'high';
  ctx.drawImage(source, p, p, w, h);
  return c;
}

function grayscale(data) {
  const g = new Uint8ClampedArray(data.length / 4);
  for (let i = 0, j = 0; i < data.length; i += 4, j++) {
    // Treat transparent pixels as white (common for PNG QR codes with no background).
    const a = data[i + 3] / 255;
    const lum = 0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2];
    g[j] = lum * a + 255 * (1 - a);
  }
  return g;
}

function writeGray(canvas, gray) {
  const ctx = ctx2d(canvas);
  const img = ctx.createImageData(canvas.width, canvas.height);
  for (let i = 0, j = 0; j < gray.length; i += 4, j++) {
    img.data[i] = img.data[i + 1] = img.data[i + 2] = gray[j];
    img.data[i + 3] = 255;
  }
  ctx.putImageData(img, 0, 0);
  return canvas;
}

function readGray(canvas) {
  const { data } = ctx2d(canvas).getImageData(0, 0, canvas.width, canvas.height);
  return grayscale(data);
}

/** Stretch contrast between the 2nd and 98th percentile. */
function contrast(canvas) {
  const g = readGray(canvas);
  const hist = new Uint32Array(256);
  for (const v of g) hist[v]++;
  const lowCut = g.length * 0.02;
  const highCut = g.length * 0.98;
  let lo = 0;
  let hi = 255;
  for (let i = 0, acc = 0; i < 256; i++) {
    acc += hist[i];
    if (acc >= lowCut) { lo = i; break; }
  }
  for (let i = 0, acc = 0; i < 256; i++) {
    acc += hist[i];
    if (acc >= highCut) { hi = i; break; }
  }
  const range = Math.max(1, hi - lo);
  for (let i = 0; i < g.length; i++) g[i] = ((g[i] - lo) * 255) / range;
  return writeGray(makeCanvas(canvas.width, canvas.height), g);
}

/** Black & white using Otsu's threshold. */
function threshold(canvas) {
  const g = readGray(canvas);
  const hist = new Uint32Array(256);
  for (const v of g) hist[v]++;
  const total = g.length;
  let sum = 0;
  for (let i = 0; i < 256; i++) sum += i * hist[i];
  let sumB = 0;
  let wB = 0;
  let best = 0;
  let t = 128;
  for (let i = 0; i < 256; i++) {
    wB += hist[i];
    if (!wB) continue;
    const wF = total - wB;
    if (!wF) break;
    sumB += i * hist[i];
    const mB = sumB / wB;
    const mF = (sum - sumB) / wF;
    const between = wB * wF * (mB - mF) ** 2;
    if (between > best) { best = between; t = i; }
  }
  for (let i = 0; i < g.length; i++) g[i] = g[i] > t ? 255 : 0;
  return writeGray(makeCanvas(canvas.width, canvas.height), g);
}

/** 3x3 convolution on grayscale. */
function convolve(canvas, kernel, divisor = 1) {
  const { width: w, height: h } = canvas;
  const g = readGray(canvas);
  const out = new Uint8ClampedArray(g.length);
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      let acc = 0;
      for (let ky = -1; ky <= 1; ky++) {
        const yy = Math.min(h - 1, Math.max(0, y + ky));
        for (let kx = -1; kx <= 1; kx++) {
          const xx = Math.min(w - 1, Math.max(0, x + kx));
          acc += g[yy * w + xx] * kernel[(ky + 1) * 3 + (kx + 1)];
        }
      }
      out[y * w + x] = acc / divisor;
    }
  }
  return writeGray(makeCanvas(w, h), out);
}

const sharpen = (c) => convolve(c, [0, -1, 0, -1, 5, -1, 0, -1, 0]);
const blur = (c) => convolve(c, [1, 2, 1, 2, 4, 2, 1, 2, 1], 16);

/* ---------- decoding ---------- */

const BASE_OPTIONS = {
  formats: ['QRCode', 'MicroQRCode'],
  tryHarder: true,
  tryRotate: true,
  tryInvert: true,
  tryDownscale: true,
  maxNumberOfSymbols: 1,
};

/**
 * Cleanup passes, cheapest first. Each returns { canvas, options } or null (skip).
 * `label` is shown to the user when that pass is the one that worked.
 */
function buildPasses(base) {
  const small = Math.max(base.width, base.height) < 600;
  const up = small ? Math.min(4, 1000 / Math.max(base.width, base.height)) : 1;
  return [
    { label: 'Read the original image', run: () => ({ canvas: base }) },
    { label: 'Added a white border (quiet zone)', run: () => ({ canvas: redraw(base, { pad: 0.12 }) }) },
    small && { label: 'Enlarged a small image', run: () => ({ canvas: redraw(base, { scale: up, pad: 0.12 }) }) },
    { label: 'Boosted contrast', run: () => ({ canvas: contrast(redraw(base, { scale: up, pad: 0.12 })) }) },
    {
      label: 'Converted to black & white',
      run: () => ({ canvas: threshold(contrast(redraw(base, { scale: up, pad: 0.12 }))) }),
    },
    {
      label: 'Sharpened a blurry image',
      run: () => ({ canvas: threshold(sharpen(contrast(redraw(base, { scale: up, pad: 0.12 })))) }),
    },
    {
      label: 'Removed noise and grain',
      run: () => ({ canvas: threshold(blur(contrast(redraw(base, { scale: up, pad: 0.12 })))) }),
    },
    {
      label: 'Used deep denoising',
      run: () => ({ canvas: contrast(redraw(base, { scale: up, pad: 0.12 })), options: { tryDenoise: true } }),
    },
    {
      label: 'Used a different black & white method',
      run: () => ({ canvas: contrast(redraw(base, { scale: up, pad: 0.12 })), options: { binarizer: 'GlobalHistogram' } }),
    },
    {
      label: 'Used a fixed black & white cut-off',
      run: () => ({ canvas: contrast(redraw(base, { scale: up, pad: 0.12 })), options: { binarizer: 'FixedThreshold' } }),
    },
    {
      label: 'Enlarged pixels without smoothing',
      run: () => ({ canvas: redraw(base, { scale: Math.max(2, up), pad: 0.12, smooth: false }) }),
    },
  ].filter(Boolean);
}

/** Load a File/Blob into a canvas, scaled so the longest side is at most MAX_SIDE. */
export async function fileToCanvas(file) {
  const bitmap = await createImageBitmap(file);
  const scale = Math.min(1, MAX_SIDE / Math.max(bitmap.width, bitmap.height));
  const c = makeCanvas(bitmap.width * scale, bitmap.height * scale);
  const ctx = ctx2d(c);
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, c.width, c.height);
  ctx.drawImage(bitmap, 0, 0, c.width, c.height);
  bitmap.close?.();
  return c;
}

/**
 * Try to read a QR code from a canvas, cleaning the image step by step.
 * @param {HTMLCanvasElement} base
 * @param {(step: {index:number,total:number,label:string}) => void} [onStep]
 * @returns {Promise<{ok:true,text:string,bytes:Uint8Array,ecLevel:string,version:string,format:string,fix:string,attempts:number,canvas:HTMLCanvasElement} | {ok:false,attempts:number}>}
 */
export async function repairAndDecode(base, onStep) {
  const { readBarcodes } = await getReader();
  const passes = buildPasses(base);
  for (let i = 0; i < passes.length; i++) {
    const pass = passes[i];
    onStep?.({ index: i + 1, total: passes.length, label: pass.label });
    // Let the browser paint the progress text between heavy passes.
    await new Promise((r) => setTimeout(r, 0));
    const prepared = pass.run();
    if (!prepared) continue;
    const { canvas, options } = prepared;
    const imageData = ctx2d(canvas).getImageData(0, 0, canvas.width, canvas.height);
    const results = await readBarcodes(imageData, { ...BASE_OPTIONS, ...options });
    const hit = results.find((r) => r.isValid && (r.text || r.bytes?.length));
    if (hit) {
      return {
        ok: true,
        text: hit.text,
        bytes: hit.bytes,
        ecLevel: hit.ecLevel || '',
        version: hit.version || '',
        format: hit.format,
        fix: pass.label,
        attempts: i + 1,
        canvas,
      };
    }
  }
  return { ok: false, attempts: passes.length };
}

/* ---------- content type ---------- */

/** Classify decoded QR text so the UI can describe it in plain words. */
export function describeContent(text) {
  const t = String(text || '').trim();
  const lower = t.toLowerCase();
  if (/^https?:\/\//i.test(t)) {
    let host = '';
    try {
      host = new URL(t).hostname;
    } catch {
      /* not a valid URL */
    }
    return { type: 'url', label: 'Website link', summary: host ? `Opens ${host}` : 'Opens a web address' };
  }
  if (lower.startsWith('wifi:')) {
    const ssid = /(?:^|;)S:((?:\\.|[^;])*)/i.exec(t.slice(5))?.[1]?.replace(/\\(.)/g, '$1') || '';
    const sec = /(?:^|;)T:([^;]*)/i.exec(t.slice(5))?.[1] || '';
    return {
      type: 'wifi',
      label: 'WiFi network',
      summary: ssid ? `Joins “${ssid}”${sec && sec.toLowerCase() !== 'nopass' ? ` (${sec})` : ''}` : 'Joins a WiFi network',
    };
  }
  if (lower.startsWith('begin:vcard') || lower.startsWith('mecard:')) {
    const name = /(?:^|\n)FN:(.*)/i.exec(t)?.[1]?.trim() || /N:([^;]*)/i.exec(t)?.[1]?.trim() || '';
    return { type: 'vcard', label: 'Contact card', summary: name ? `Saves contact “${name}”` : 'Saves a contact' };
  }
  if (lower.startsWith('mailto:') || lower.startsWith('matmsg:')) {
    return { type: 'email', label: 'Email', summary: 'Opens an email draft' };
  }
  if (lower.startsWith('tel:')) return { type: 'phone', label: 'Phone number', summary: `Calls ${t.slice(4)}` };
  if (lower.startsWith('smsto:') || lower.startsWith('sms:')) {
    return { type: 'sms', label: 'Text message', summary: 'Opens a text message draft' };
  }
  if (lower.startsWith('geo:')) return { type: 'location', label: 'Map location', summary: 'Opens a map location' };
  return { type: 'text', label: 'Plain text', summary: 'Shows text when scanned' };
}
