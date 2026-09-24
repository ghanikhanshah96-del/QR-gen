/**
 * Site-wide configuration. Update SITE.url before production deploy.
 */
export const SITE = {
  name: 'GenerateQRFast',
  legalName: 'GenerateQRFast',
  tagline: 'Free QR Code Generator Online',
  description:
    'Create free QR codes for URLs, WiFi, text, WhatsApp, contacts, email, SMS, locations, images, videos and more.',
  url: 'https://generateqrfast.com',
  locale: 'en_US',
  twitter: '@generateqrfast',
  contactEmail: 'hello@generateqrfast.com',
  version: '1.0.0',
};

export const PATHS = {
  home: '/',
  saved: '/saved-designs/',
  guides: '/guides/',
  privacy: '/privacy-policy/',
  terms: '/terms/',
  about: '/about/',
  contact: '/contact/',
  faq: '/faq/',
  accessibility: '/accessibility/',
  security: '/security/',
};

export const STORAGE_KEYS = {
  theme: 'generateqrfast.theme',
  recentType: 'generateqrfast.recentType',
  editorPrefs: 'generateqrfast.editorPrefs',
  uiState: 'generateqrfast.uiState',
  consent: 'generateqrfast.consent',
};

export const IDB = {
  name: 'generateqrfast',
  version: 1,
  stores: {
    designs: 'designs',
  },
};

export const LIMITS = {
  maxLogoBytes: 2 * 1024 * 1024,
  maxProjectBytes: 5 * 1024 * 1024,
  maxTextLength: 2000,
  maxWifiPassword: 63,
  maxWifiSsid: 32,
  minQrSize: 128,
  maxQrSize: 2048,
  defaultQrSize: 512,
};
