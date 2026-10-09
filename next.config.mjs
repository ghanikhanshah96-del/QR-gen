/** @type {import('next').NextConfig} */
const nextConfig = {
  // Not a static export: Vercel runs app/api/contact (Resend). Pages are still pre-rendered at build time.
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  async redirects() {
    // The blog has one main article — /blogs/ opens it directly instead of a list page.
    return [{ source: '/blogs', destination: '/blogs/are-free-qr-code-generators-safe/', permanent: false }];
  },
  // Keep legacy .html URLs working alongside clean paths where both existed.
};

export default nextConfig;
