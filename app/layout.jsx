import { Fraunces, Plus_Jakarta_Sans } from 'next/font/google';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import { SITE } from '@/lib/config';
import './globals.css';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-plus-jakarta',
  display: 'swap',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-fraunces',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — ${SITE.tagline}`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  icons: {
    icon: '/icons/favicon-32x32.png',
    apple: '/icons/apple-touch-icon.png',
  },
  manifest: '/manifest.webmanifest',
  openGraph: {
    type: 'website',
    siteName: SITE.name,
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
    url: SITE.url,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
  },
};

const themeInitScript = `
(function () {
  try {
    var key = 'generateqrfast.theme';
    var stored = localStorage.getItem(key);
    var theme = stored === 'dark' || stored === 'light' ? stored : 'light';
    var root = document.documentElement;
    root.dataset.theme = theme;
    root.classList.toggle('dark', theme === 'dark');
  } catch (e) {}
})();
`;

const GA_ID = 'G-RVQW9V2HX9';

const gaInitScript = `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', '${GA_ID}');
`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${fraunces.variable}`} suppressHydrationWarning>
      <head>
        {/* Google Search Console ownership check. Written directly in <head> (not via metadata)
            so it is always in the initial <head>, never streamed into <body>. */}
        <meta name="google-site-verification" content="QqkaJSl8U0i4F8isgE53joiwTOQn1ndq5dVIAiIcbUE" />
        {/* Google tag (gtag.js) — Google Analytics 4 */}
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
        <script dangerouslySetInnerHTML={{ __html: gaInitScript }} />
        {/* Google AdSense */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9309280380486229"
          crossOrigin="anonymous"
        />
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
