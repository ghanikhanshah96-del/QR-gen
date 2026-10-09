/** @type {import('next').NextConfig} */
const nextConfig = {
  // Not a static export: Vercel runs app/api/contact (Resend). Pages are still pre-rendered at build time.
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Keep legacy .html URLs working alongside clean paths where both existed.
};

export default nextConfig;
