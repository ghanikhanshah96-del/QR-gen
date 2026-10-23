'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';

/**
 * QR Code Repair: upload a blurry/damaged QR image → clean it up and decode it (lib/repair/decode.js)
 * → show what it contains → recreate a sharp QR with the same content for PNG/SVG/JPG download.
 * Everything runs in the browser; the image never leaves the device.
 */

const ECC_OPTIONS = [
  { id: 'L', label: 'L', hint: '7%' },
  { id: 'M', label: 'M', hint: '15%' },
  { id: 'Q', label: 'Q', hint: '25%' },
  { id: 'H', label: 'H', hint: '30%' },
];

const MAX_BYTES = 15 * 1024 * 1024;

export default function QrRepairApp() {
  const [phase, setPhase] = useState('idle'); // idle | working | done | failed | error
  const [step, setStep] = useState(null);
  const [message, setMessage] = useState('');
  const [originalUrl, setOriginalUrl] = useState('');
  const [cleanedUrl, setCleanedUrl] = useState('');
  const [result, setResult] = useState(null);
  const [info, setInfo] = useState(null);
  const [dragOver, setDragOver] = useState(false);
  const [copied, setCopied] = useState(false);
  const [design, setDesign] = useState({ foreground: '#111827', background: '#ffffff', ecc: 'M', size: 1024 });

  const inputRef = useRef(null);
  const previewRef = useRef(null);
  const qrRef = useRef(null);
  const libRef = useRef(null);

  const handleFile = useCallback(async (file) => {
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      setPhase('error');
      setMessage('Please choose an image file (PNG, JPG, WebP, GIF, or a screenshot).');
      return;
    }
    if (file.size > MAX_BYTES) {
      setPhase('error');
      setMessage('That image is larger than 15 MB. Please use a smaller photo or screenshot.');
      return;
    }

    setOriginalUrl((old) => {
      if (old) URL.revokeObjectURL(old);
      return URL.createObjectURL(file);
    });
    setCleanedUrl('');
    setResult(null);
    setInfo(null);
    setCopied(false);
    setPhase('working');
    setStep({ index: 0, total: 1, label: 'Loading the QR reader…' });

    try {
      const { fileToCanvas, repairAndDecode, describeContent } = await import('@/lib/repair/decode.js');
      const canvas = await fileToCanvas(file);
      const out = await repairAndDecode(canvas, setStep);
      if (!out.ok) {
        setPhase('failed');
        return;
      }
      if (!out.text) {
        setPhase('error');
        setMessage('We found the QR code, but it contains binary data that cannot be recreated as text.');
        return;
      }
      setResult(out);
      setInfo(describeContent(out.text));
      setCleanedUrl(out.fix === 'Read the original image' ? '' : out.canvas.toDataURL('image/png'));
      // Start the new code at the original's error correction level when we know it.
      const lvl = String(out.ecLevel || '').toUpperCase();
      if (['L', 'M', 'Q', 'H'].includes(lvl)) setDesign((d) => ({ ...d, ecc: lvl }));
      setPhase('done');
    } catch (err) {
      console.error('QR repair failed', err);
      setPhase('error');
      setMessage('Something went wrong while reading the image. Please try again or use a different photo.');
    }
  }, []);

  // Paste an image from the clipboard (Ctrl/Cmd + V) anywhere on the page.
  useEffect(() => {
    const onPaste = (e) => {
      const item = [...(e.clipboardData?.items || [])].find((i) => i.type.startsWith('image/'));
      if (item) handleFile(item.getAsFile());
    };
    window.addEventListener('paste', onPaste);
    return () => window.removeEventListener('paste', onPaste);
  }, [handleFile]);

  useEffect(() => () => originalUrl && URL.revokeObjectURL(originalUrl), [originalUrl]);

  // Render / update the recreated QR whenever the result or design changes.
  useEffect(() => {
    if (phase !== 'done' || !result?.text || !previewRef.current) return;
    let cancelled = false;
    (async () => {
      if (!libRef.current) {
        const [stylingMod, engine] = await Promise.all([import('qr-code-styling'), import('@/lib/core/qr-engine.js')]);
        engine.setQrCodeStyling(stylingMod.default || stylingMod);
        libRef.current = { QRCodeStyling: stylingMod.default || stylingMod, engine };
      }
      if (cancelled) return;
      const { QRCodeStyling, engine } = libRef.current;
      const { DEFAULT_DESIGN } = await import('@/lib/constants.js');
      const { options } = engine.buildStylingOptions({
        payload: result.text,
        design: {
          ...DEFAULT_DESIGN,
          size: design.size,
          foreground: design.foreground,
          background: design.background,
          errorCorrectionLevel: design.ecc,
        },
      });
      qrRef.current = new QRCodeStyling(options);
      previewRef.current.replaceChildren();
      qrRef.current.append(previewRef.current);
      const canvas = previewRef.current.querySelector('canvas');
      if (canvas) {
        canvas.style.width = '100%';
        canvas.style.height = 'auto';
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [phase, result, design]);

  async function download(kind) {
    if (!qrRef.current) return;
    const exp = await import('@/lib/core/qr-export.js');
    const state = { name: 'repaired-qr-code', design: { background: design.background } };
    if (kind === 'png') await exp.exportPng(qrRef.current, state);
    if (kind === 'svg') await exp.exportSvg(qrRef.current, state);
    if (kind === 'jpg') await exp.exportJpg(qrRef.current, state);
  }

  async function copyText() {
    try {
      await navigator.clipboard.writeText(result.text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard blocked; the text is still selectable */
    }
  }

  function reset() {
    setPhase('idle');
    setResult(null);
    setInfo(null);
    setCleanedUrl('');
    setOriginalUrl((old) => {
      if (old) URL.revokeObjectURL(old);
      return '';
    });
    if (inputRef.current) inputRef.current.value = '';
  }

  const busy = phase === 'working';

  return (
    <section id="qr-repair-app" className="site-container pb-8 pt-5 sm:pb-12 sm:pt-6">
      <div className="editor-shell">
        {/* Left: upload + what we found */}
        <div className="workspace-panel animate-rise-in">
          <div className="space-y-6 p-5 sm:p-6">
            <div>
              <h2 className="text-base font-semibold tracking-tight text-ink-950 dark:text-white sm:text-lg">
                Upload your QR code
              </h2>
              <p className="mt-1 text-sm text-ink-500 dark:text-ink-400">
                A photo, screenshot, or scan. Blurry, small, low-contrast, or slightly damaged codes are OK.
              </p>
            </div>

            <label
              htmlFor="qr-repair-file"
              onDragOver={(e) => {
                e.preventDefault();
                setDragOver(true);
              }}
              onDragLeave={() => setDragOver(false)}
              onDrop={(e) => {
                e.preventDefault();
                setDragOver(false);
                handleFile(e.dataTransfer.files?.[0]);
              }}
              className={`flex min-h-[180px] cursor-pointer flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed p-6 text-center transition ${
                dragOver
                  ? 'border-brand-500 bg-brand-50 dark:bg-brand-950/40'
                  : 'border-ink-200 hover:border-brand-400 hover:bg-brand-50/50 dark:border-ink-700 dark:hover:bg-brand-950/30'
              } ${busy ? 'pointer-events-none opacity-60' : ''}`}
            >
              {originalUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={originalUrl} alt="Uploaded QR code" className="max-h-40 rounded-lg object-contain" />
              ) : (
                <span className="grid size-12 place-items-center rounded-full bg-brand-100 text-brand-700 dark:bg-brand-950 dark:text-brand-300" aria-hidden="true">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path d="M12 16V4m0 0l-5 5m5-5l5 5M4 16v3a1 1 0 001 1h14a1 1 0 001-1v-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              )}
              <span className="text-sm font-semibold text-ink-900 dark:text-white">
                {originalUrl ? 'Choose a different image' : 'Drop an image here, or click to browse'}
              </span>
              <span className="text-xs text-ink-500 dark:text-ink-400">You can also paste a screenshot (Ctrl/Cmd + V). Max 15 MB.</span>
              <input
                ref={inputRef}
                id="qr-repair-file"
                type="file"
                accept="image/*"
                className="sr-only"
                onChange={(e) => handleFile(e.target.files?.[0])}
              />
            </label>

            {busy && step ? (
              <div className="rounded-lg border px-4 py-3 text-sm" style={{ borderColor: 'var(--border)', background: 'var(--surface-soft)' }} role="status">
                <p className="font-semibold text-ink-900 dark:text-white">Repairing… step {step.index} of {step.total}</p>
                <p className="mt-0.5 text-ink-600 dark:text-ink-300">{step.label}</p>
                <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-ink-100 dark:bg-ink-800">
                  <div className="h-full rounded-full bg-brand-500 transition-all" style={{ width: `${(step.index / step.total) * 100}%` }} />
                </div>
              </div>
            ) : null}

            {phase === 'failed' ? (
              <div className="space-y-3 rounded-xl border border-amber-300 bg-amber-50 p-4 text-sm text-amber-900 dark:border-amber-700/60 dark:bg-amber-950/40 dark:text-amber-200" role="alert">
                <p className="font-semibold">We couldn&apos;t read this QR code.</p>
                <p>We tried every cleanup step. Try one of these:</p>
                <ul className="list-disc space-y-1 pl-5">
                  <li>Crop the image closer to the QR code.</li>
                  <li>Take a new photo straight-on, in good light, without glare.</li>
                  <li>Use a larger or less compressed version of the image.</li>
                </ul>
                <p>
                  If a big part of the code is torn, covered, or missing, the information may be lost for good. If you know what
                  the code should contain, you can{' '}
                  <Link href="/" className="font-semibold underline">
                    create a new QR code
                  </Link>
                  .
                </p>
              </div>
            ) : null}

            {phase === 'error' ? (
              <p className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800 dark:border-red-900 dark:bg-red-950/40 dark:text-red-200" role="alert">
                {message}
              </p>
            ) : null}

            {phase === 'done' && result ? (
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-600 px-3 py-1 text-xs font-semibold text-white dark:bg-brand-500 dark:text-ink-950">
                    <svg width="12" height="12" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                      <path d="M5 10.5l3.2 3.2L15 7" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    QR code read
                  </span>
                  <span className="pill">{info?.label}</span>
                  {result.ecLevel ? <span className="text-xs text-ink-500 dark:text-ink-400">Error correction: {result.ecLevel}</span> : null}
                </div>
                <p className="text-sm text-ink-600 dark:text-ink-300">
                  <strong className="text-ink-900 dark:text-white">What fixed it:</strong> {result.fix}
                  {result.attempts > 1 ? ` (after ${result.attempts} tries)` : ''}.
                </p>

                <div>
                  <p className="field-label">{info?.summary}</p>
                  <pre className="max-h-48 overflow-auto whitespace-pre-wrap break-all rounded-lg border px-3 py-2.5 text-sm text-ink-900 dark:text-ink-100" style={{ borderColor: 'var(--border)', background: 'var(--surface-soft)' }}>
                    {result.text}
                  </pre>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <button type="button" className="btn-secondary text-xs" onClick={copyText}>
                      {copied ? 'Copied!' : 'Copy content'}
                    </button>
                    {info?.type === 'url' ? (
                      <a href={result.text} target="_blank" rel="noopener noreferrer nofollow" className="btn-secondary text-xs">
                        Open link
                      </a>
                    ) : null}
                    <button type="button" className="btn-secondary text-xs" onClick={reset}>
                      Repair another
                    </button>
                  </div>
                  {info?.type === 'url' ? (
                    <p className="field-hint mt-2">Check the web address above before opening it. QR codes can point to scam sites.</p>
                  ) : null}
                </div>

                {cleanedUrl ? (
                  <div className="grid grid-cols-2 gap-3">
                    <figure className="rounded-lg border p-2 text-center" style={{ borderColor: 'var(--border)' }}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={originalUrl} alt="Original upload" className="mx-auto max-h-32 object-contain" />
                      <figcaption className="mt-1 text-xs text-ink-500 dark:text-ink-400">Your upload</figcaption>
                    </figure>
                    <figure className="rounded-lg border p-2 text-center" style={{ borderColor: 'var(--border)' }}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={cleanedUrl} alt="Cleaned image that was read" className="mx-auto max-h-32 object-contain" />
                      <figcaption className="mt-1 text-xs text-ink-500 dark:text-ink-400">After cleanup</figcaption>
                    </figure>
                  </div>
                ) : null}
              </div>
            ) : null}
          </div>
        </div>

        {/* Right: recreated QR */}
        <aside className="sticky-preview" aria-label="Recreated QR code and downloads">
          <div className="preview-panel animate-preview-in">
            <div className="preview-header">
              <p className="text-sm font-semibold text-ink-950 dark:text-white">New clean QR code</p>
              <p className="text-xs text-ink-500 dark:text-ink-400">Same content, sharp and ready to print</p>
            </div>
            <div className="space-y-4 p-5 sm:p-6">
              {phase === 'done' && result ? (
                <>
                  <div className="qr-preview-frame" ref={previewRef} role="img" aria-label="Recreated QR code" />
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="field-label" htmlFor="repair-fg">
                        QR color
                      </label>
                      <input
                        id="repair-fg"
                        type="color"
                        className="color-input"
                        value={design.foreground}
                        onChange={(e) => setDesign((d) => ({ ...d, foreground: e.target.value }))}
                      />
                    </div>
                    <div>
                      <label className="field-label" htmlFor="repair-bg">
                        Background
                      </label>
                      <input
                        id="repair-bg"
                        type="color"
                        className="color-input"
                        value={design.background}
                        onChange={(e) => setDesign((d) => ({ ...d, background: e.target.value }))}
                      />
                    </div>
                  </div>
                  <div>
                    <p className="field-label">Error correction</p>
                    <div className="grid grid-cols-4 gap-2" role="group" aria-label="Error correction level">
                      {ECC_OPTIONS.map((o) => (
                        <button
                          key={o.id}
                          type="button"
                          className="type-chip justify-center"
                          aria-pressed={design.ecc === o.id}
                          onClick={() => setDesign((d) => ({ ...d, ecc: o.id }))}
                          title={`Recovers about ${o.hint} damage`}
                        >
                          {o.label}
                        </button>
                      ))}
                    </div>
                    <p className="field-hint">Higher levels survive more damage. H is best for print.</p>
                  </div>
                  <div className="space-y-2.5">
                    <p className="text-sm font-semibold text-ink-900 dark:text-ink-100">Download</p>
                    <div className="grid grid-cols-3 gap-2">
                      <button type="button" className="btn-download" onClick={() => download('png')}>
                        PNG
                      </button>
                      <button type="button" className="btn-secondary" onClick={() => download('svg')}>
                        SVG
                      </button>
                      <button type="button" className="btn-secondary" onClick={() => download('jpg')}>
                        JPG
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <div className="grid min-h-[260px] place-items-center rounded-xl border-2 border-dashed p-6 text-center" style={{ borderColor: 'var(--border)' }}>
                  <p className="max-w-[16rem] text-sm text-ink-500 dark:text-ink-400">
                    {busy ? 'Reading your QR code…' : 'Upload a QR image and your new, clean QR code will appear here.'}
                  </p>
                </div>
              )}
              <p className="text-center text-xs leading-relaxed text-ink-500 dark:text-ink-400">
                Your image is processed in this browser and never uploaded.
              </p>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
