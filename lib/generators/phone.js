import { combineCountryPhone } from '../validation/phone.js';
import { DEFAULT_COUNTRY } from '../data/countries.js';

export function buildPhonePayload(fields) {
  const phone = combineCountryPhone(fields.countryCode || DEFAULT_COUNTRY.dial, fields.phone);
  if (!phone.ok) {
    return { ok: false, error: phone.error, empty: !String(fields.phone || '').trim() };
  }
  return { ok: true, payload: `tel:${phone.value}`, empty: false };
}
