import { combineCountryPhone } from '../validation/phone.js';
import { sanitizeText } from '../validation/sanitize.js';
import { DEFAULT_COUNTRY } from '../data/countries.js';

export function buildWhatsappPayload(fields) {
  const phone = combineCountryPhone(fields.countryCode || DEFAULT_COUNTRY.dial, fields.phone);
  if (!phone.ok) {
    return {
      ok: false,
      error: phone.error,
      empty: !String(fields.phone || '').trim(),
    };
  }
  const message = sanitizeText(fields.message || '', 500).trim();
  let payload = `https://wa.me/${phone.digits}`;
  if (message) payload += `?text=${encodeURIComponent(message)}`;
  return { ok: true, payload, empty: false };
}
