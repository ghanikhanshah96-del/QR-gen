import { buildStylingOptions, getQrCodeStyling } from './qr-engine.js';
import { debounce } from '../utils/debounce.js';

/**
 * Live QR preview renderer bound to a container element.
 */
export function createQrRenderer(container) {
  let instance = null;
  let lastPayload = '';
  let lastDesignKey = '';
  let lastHadLogo = false;

  const renderNow = (state) => {
    const QRCodeStyling = getQrCodeStyling();
    if (!QRCodeStyling || !container) return { ok: false, error: 'QR library not loaded.' };

    const payload = state.status?.valid ? state.payload : '';
    const effectivePayload = payload || 'https://generateqrfast.com';
    const { options, warnings } = buildStylingOptions({
      payload: effectivePayload,
      design: state.design,
    });

    // Dim preview when invalid / empty
    container.style.opacity = state.status?.valid ? '1' : '0.45';
    container.setAttribute('aria-busy', 'false');

    const designKey = JSON.stringify({ ...options, data: effectivePayload });
    if (instance && designKey === lastDesignKey) {
      return { ok: true, warnings, instance };
    }

    const hasLogo = Boolean(options.image);
    // Recreate when a logo is removed — library merge alone can leave a stale image.
    const mustRecreate = !instance || (lastHadLogo && !hasLogo);

    if (mustRecreate) {
      instance = new QRCodeStyling(options);
      container.replaceChildren();
      instance.append(container);
    } else if (lastPayload !== effectivePayload || designKey !== lastDesignKey) {
      instance.update(options);
    }

    lastPayload = effectivePayload;
    lastDesignKey = designKey;
    lastHadLogo = hasLogo;
    return { ok: true, warnings, instance };
  };

  const render = debounce((state) => renderNow(state), 120);

  return {
    render,
    renderNow,
    getInstance() {
      return instance;
    },
    destroy() {
      instance = null;
      lastPayload = '';
      lastDesignKey = '';
      lastHadLogo = false;
      container?.replaceChildren();
    },
  };
}
