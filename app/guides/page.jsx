import Link from 'next/link';
import { GUIDES } from '@/content/guides';

export const metadata = {
  title: 'QR Code Guides | EverQR',
  description: 'Practical guides on QR codes, printing, security, and business use cases.',
  alternates: { canonical: '/guides/' },
};

export default function GuidesIndexPage() {
  return (
    <div className="site-container py-10 sm:py-14">
      <div className="max-w-3xl animate-rise-in">
        <p className="pill">Learn</p>
        <h1 className="mt-4 font-display text-3xl font-semibold text-ink-950 dark:text-white">Guides</h1>
        <p className="mt-2 text-ink-600 dark:text-ink-300">
          Clear, practical articles — written for humans, not keyword stuffing.
        </p>
      </div>
      <ul className="mt-8 grid gap-3 sm:grid-cols-2">
        {GUIDES.map((g, i) => (
          <li key={g.dir} className="animate-rise-in" style={{ animationDelay: `${Math.min(i, 8) * 40}ms` }}>
            <Link className="blog-card" href={`/guides/${g.dir}/`}>
              <span className="font-semibold text-ink-900 dark:text-white">{g.heading}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
