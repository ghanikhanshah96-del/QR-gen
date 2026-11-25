import { Fraunces, Plus_Jakarta_Sans } from 'next/font/google';
import Script from 'next/script';
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
        {/* Second Google verification code, added Nov 2026. Keep both: each proves ownership for a different Google account or property. */}
        <meta name="google-site-verification" content="_URCBapTEtkuv4odz-i_SCbkU2PxSlfwZjAjPJpZkXI" />
        {/* Google AdSense site verification. */}
        <meta name="google-adsense-account" content="ca-pub-8270477962353734" />
        {/* Google AdSense code, as a real <script> tag in the server HTML so the AdSense site
            verification can find it. AdSense inserts a second <script> into <head> before React
            hydrates, so no other React-rendered <script> may live in <head> (React would try to
            match it against AdSense's tag and report a hydration mismatch). */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8270477962353734"
          crossOrigin="anonymous"
        />
      </head>
      <body className="flex min-h-screen flex-col">
        {/* Theme setup. Kept in <body>, not <head>: see the AdSense note above. Inline scripts go
            through next/script: a raw inline <script> makes React warn ("Encountered a script
            tag…") whenever it re-renders the layout in the browser. */}
        <Script id="theme-init" strategy="beforeInteractive">
          {themeInitScript}
        </Script>
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        {/* Google tag (gtag.js) — Google Analytics 4 */}
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
        <Script id="ga-init" strategy="afterInteractive">
          {gaInitScript}
        </Script>
      </body>
    </html>
  );
}
