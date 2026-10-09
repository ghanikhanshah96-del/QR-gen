import Link from 'next/link';
import { PATHS } from '@/lib/config';

const TOOL_LINKS = [
  { href: '/url-qr-code/', label: 'URL' },
  { href: '/wifi-qr-code/', label: 'WiFi' },
  { href: '/whatsapp-qr-code/', label: 'WhatsApp' },
  { href: '/google-review-qr-code/', label: 'Google Review' },
  { href: '/vcard-qr-code/', label: 'vCard' },
  { href: '/email-qr-code/', label: 'Email' },
  { href: '/image-to-qr-code/', label: 'Image' },
  { href: '/video-to-qr-code/', label: 'Video' },
  { href: '/file-qr-code/', label: 'File' },
];

const LEARN_LINKS = [
  { href: '/guides/what-is-a-qr-code/', label: 'What is a QR code?' },
  { href: '/guides/static-vs-dynamic-qr-codes/', label: 'Static vs dynamic' },
  { href: '/guides/do-qr-codes-expire/', label: 'Do QR codes expire?' },
  { href: '/guides/qr-code-security/', label: 'QR security' },
  { href: PATHS.blogs, label: 'Blog' },
  { href: '/faq.html', label: 'FAQ' },
];

const COMPANY_LINKS = [
  { href: '/about.html', label: 'About' },
  { href: '/privacy-policy.html', label: 'Privacy' },
  { href: '/terms.html', label: 'Terms' },
  { href: '/accessibility.html', label: 'Accessibility' },
  { href: '/contact.html', label: 'Contact' },
];

function FooterLink({ href, children }) {
  return (
    <Link
      href={href}
      className="text-sm text-ink-600 transition duration-200 hover:text-brand-700 dark:text-ink-300 dark:hover:text-brand-300"
    >
      {children}
    </Link>
  );
}

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-10 border-t sm:mt-14" style={{ borderColor: 'var(--border)', background: 'var(--surface-strong)' }}>
      <div className="site-container py-10 sm:py-12">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_repeat(3,minmax(0,0.7fr))] lg:gap-8">
          <div className="max-w-sm space-y-4">
            <Link href="/" className="inline-flex items-center gap-2.5" aria-label="GenerateQRFast home">
              <span
                className="inline-flex size-9 items-center justify-center rounded-lg bg-brand-600 text-white"
                aria-hidden="true"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M4 4h6v6H4V4zm10 0h6v6h-6V4zM4 14h6v6H4v-6zm10 2h2v2h-2v-2zm4-2h2v6h-6v-2h4v-4zM14 14h2v2h-2v-2z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              <span className="text-lg font-bold tracking-tight text-ink-950 dark:text-white">GenerateQRFast</span>
            </Link>
            <p className="text-sm leading-relaxed text-ink-600 dark:text-ink-300">
              Free static QR codes generated in your browser. Private, permanent, and ready to download.
            </p>
            <Link href="/#generator-app" className="btn-primary inline-flex text-sm">
              Create a QR code
            </Link>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-500 dark:text-ink-400">Tools</p>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5 sm:grid-cols-1">
              {TOOL_LINKS.map((item) => (
                <li key={item.href}>
                  <FooterLink href={item.href}>{item.label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-500 dark:text-ink-400">Learn</p>
            <ul className="mt-4 space-y-2.5">
              {LEARN_LINKS.map((item) => (
                <li key={item.href}>
                  <FooterLink href={item.href}>{item.label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-500 dark:text-ink-400">Company</p>
            <ul className="mt-4 space-y-2.5">
              {COMPANY_LINKS.map((item) => (
                <li key={item.href}>
                  <FooterLink href={item.href}>{item.label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t" style={{ borderColor: 'var(--border)', background: 'var(--surface-soft)' }}>
        <div className="site-container flex flex-col gap-2 py-4 text-xs text-ink-500 dark:text-ink-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} GenerateQRFast</p>
          <p>Static QR codes do not expire and do not depend on our servers.</p>
        </div>
      </div>
    </footer>
  );
}
