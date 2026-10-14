/** @type {import('next').NextConfig} */
const nextConfig = {
  // Not a static export: Vercel runs app/api/contact (Resend). Pages are still pre-rendered at build time.
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  async redirects() {
    // Old tool addresses → new ones (permanent, so Google moves rankings to the new URLs).
    return [
      { source: '/text-qr-code', destination: '/text-qr-code-generator/', permanent: true },
      { source: '/wifi-qr-code', destination: '/wifi-qr-code-generator/', permanent: true },
      { source: '/whatsapp-qr-code', destination: '/whatsapp-qr-code-generator/', permanent: true },
      { source: '/google-review-qr-code', destination: '/google-review-qr-code-generator/', permanent: true },
      { source: '/vcard-qr-code', destination: '/vcard-qr-code-generator/', permanent: true },
      { source: '/email-qr-code', destination: '/email-qr-code-generator/', permanent: true },
      { source: '/sms-qr-code', destination: '/sms-qr-code-generator/', permanent: true },
      { source: '/phone-number-qr-code', destination: '/qr-code-generator-phone-number/', permanent: true },
    ];
  },
  // Keep legacy .html URLs working alongside clean paths where both existed.
};

export default nextConfig;
