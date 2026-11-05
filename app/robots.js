
import { SITE } from '@/lib/config';

export const dynamic = 'force-static';

export default function robots() {
  const base = SITE.url.replace(/\/$/, '');

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
      },
      {
        userAgent: 'Googlebot-Image',
        allow: '/',
      },
      {
        userAgent: 'Mediapartners-Google',
        allow: '/',
      },
      {
        userAgent: 'Google-Display-Ads-Bot',
        allow: '/',
      },
      {
        userAgent: 'bingbot',
        allow: '/',
      },
    ],
    sitemap: `${base}/sitemap.xml`,
  };
}
