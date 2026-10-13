import Link from 'next/link';
import { GUIDES } from '@/content/guides';

// Only the pages listed below exist; any other address is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return GUIDES.map((g) => ({ slug: g.dir }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const guide = GUIDES.find((g) => g.dir === slug);
  if (!guide) return {};
  return {
    title: { absolute: guide.title },
    description: guide.description,
    alternates: { canonical: `/guides/${guide.dir}/` },
  };
}

export default async function GuidePage({ params }) {
  const { slug } = await params;
  const guide = GUIDES.find((g) => g.dir === slug);
  if (!guide) {
    return (
      <div className="site-container py-16">
        <h1 className="section-title">Guide not found</h1>
        <Link className="btn-primary mt-6 inline-flex" href="/guides/">
          All guides
        </Link>
      </div>
    );
  }

  return (
    <div className="site-container py-10 sm:py-14">
      <nav className="text-sm text-ink-500" aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-2">
          <li>
            <Link className="hover:text-brand-700" href="/">
              Home
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link className="hover:text-brand-700" href="/guides/">
              Guides
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="font-medium text-ink-800">{guide.heading}</li>
        </ol>
      </nav>
      {/* Full container width so text lines up with the navbar. */}
      <article className="mt-6">
        <h1 className="font-display text-3xl font-semibold tracking-tight text-ink-950 dark:text-white sm:text-4xl">{guide.heading}</h1>
        <div
          className="mt-6 space-y-4 leading-relaxed text-ink-700 dark:text-ink-300 [&_a]:font-semibold [&_a]:text-brand-800 [&_a]:underline dark:[&_a]:text-brand-300 [&_h2]:pt-4 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-ink-950 dark:[&_h2]:text-white [&_strong]:text-ink-950 dark:[&_strong]:text-white [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5"
          dangerouslySetInnerHTML={{ __html: guide.content }}
        />
        <p className="mt-10">
          <Link className="btn-primary" href="/">
            Create a free QR code
          </Link>
        </p>
      </article>
    </div>
  );
}
