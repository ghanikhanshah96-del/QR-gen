import { SITE } from '@/lib/config';

export const dynamic = 'force-static';

export default function robots() {
  const base = SITE.url.replace(/\/$/, '');
  return {
    // Named groups requested by Google Ads: some ad crawlers ignore the * group.
    rules: [
      '*',
      'Googlebot',
      'Googlebot-Image',
      'Mediapartners-Google',
      'Google-Display-Ads-Bot',
      'bingbot',
    ].map((userAgent) => ({ userAgent, allow: '/' })),
    sitemap: `${base}/sitemap.xml`,
  };
}