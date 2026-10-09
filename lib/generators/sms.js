import { combineCountryPhone } from '../validation/phone.js';
import { DEFAULT_COUNTRY } from '../data/countries.js';
import { sanitizeText } from '../validation/sanitize.js';

export function buildSmsPayload(fields) {
  const phone = combineCountryPhone(fields.countryCode || DEFAULT_COUNTRY.dial, fields.phone);
  if (!phone.ok) {
    return { ok: false, error: phone.error, empty: !String(fields.phone || '').trim() };
  }
  const message = sanitizeText(fields.message || '', 500).trim();
  // sms: URI — widely supported; body via ?body= or &body=
  let payload = `sms:${phone.value}`;
  if (message) payload += `?body=${encodeURIComponent(message)}`;
  return { ok: true, payload, empty: false };
}
