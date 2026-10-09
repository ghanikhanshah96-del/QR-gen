import Link from 'next/link';
import { BLOGS, getBlogBySlug, formatBlogDate } from '@/content/blogs';
import { getToolById } from '@/content/tools';
import { SITE } from '@/lib/config';

// Only the pages listed below exist; any other address is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return BLOGS.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) return {};
  return {
    title: { absolute: post.title },
    description: post.description,
    alternates: { canonical: `/blogs/${post.slug}/` },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.description,
      url: `/blogs/${post.slug}/`,
      publishedTime: post.date,
      images: post.image ? [{ url: post.image.og, width: post.image.width, height: post.image.height, alt: post.image.alt }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: post.image ? [post.image.og] : [],
    },
  };
}

function slugify(text) {
  return text
    .replace(/<[^>]+>/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

function stripTags(html) {
  return html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
}

/** Split the post HTML at each <h2> into an intro + numbered sections. */
function splitSections(html) {
  const parts = html.split(/<h2>(.*?)<\/h2>/);
  const sections = [];
  for (let i = 1; i < parts.length; i += 2) {
    const heading = parts[i];
    const body = parts[i + 1]
      .trim()
      .replace(/<p><strong>How to reduce the risk:<\/strong>/g, '<p class="blog-callout"><strong>How to reduce the risk:</strong>');
    sections.push({ heading, id: slugify(heading), html: body });
  }
  return { intro: parts[0].trim(), sections };
}

/** FAQ sections are written as <h3>question</h3><p>answer</p> pairs. */
function parseFaq(html) {
  return [...html.matchAll(/<h3>(.*?)<\/h3>\s*<p>([\s\S]*?)<\/p>/g)].map((m) => ({ q: m[1], a: m[2] }));
}

const isFaq = (heading) => /frequently asked/i.test(heading);
const isFinal = (heading) => /final thoughts/i.test(heading);
const pad = (n) => String(n).padStart(2, '0');

function TocList({ sections }) {
  return (
    <ol className="space-y-0.5">
      {sections.map((s, i) => (
        <li key={s.id}>
          <a
            href={`#${s.id}`}
            className="flex gap-2.5 rounded-md px-2 py-1.5 text-sm text-ink-600 transition hover:bg-brand-50 hover:text-brand-800 dark:text-ink-300 dark:hover:bg-brand-950/50 dark:hover:text-brand-200"
          >
            <span className="font-semibold tabular-nums text-ink-400">{pad(i + 1)}</span>
            <span>{s.heading}</span>
          </a>
        </li>
      ))}
    </ol>
  );
}

function SectionCard({ section, num }) {
  const faq = isFaq(section.heading) ? parseFaq(section.html) : null;
  return (
    <section id={section.id} className="panel scroll-mt-24 p-6 sm:p-8">
      <div className="flex items-start gap-4">
        <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-brand-600 text-sm font-bold text-white dark:bg-brand-500 dark:text-ink-950">
          {pad(num)}
        </span>
        <h2 className="pt-1 text-xl font-semibold tracking-tight text-ink-950 dark:text-white sm:text-2xl">{section.heading}</h2>
      </div>
      <div className="mt-5 sm:pl-14">
        {faq ? (
          <div className="space-y-3">
            {faq.map((item, i) => (
              <details key={item.q} className="blog-faq" open={i === 0}>
                <summary>
                  <span className="blog-faq-q" aria-hidden="true">
                    Q
                  </span>
                  <h3 className="flex-1">{item.q}</h3>
                  <span className="blog-faq-icon" aria-hidden="true">
                    +
                  </span>
                </summary>
                <p className="blog-faq-a" dangerouslySetInnerHTML={{ __html: item.a }} />
              </details>
            ))}
          </div>
        ) : (
          <div className="blog-prose" dangerouslySetInnerHTML={{ __html: section.html }} />
        )}
      </div>
    </section>
  );
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) return null;

  const tool = getToolById(post.toolId);
  const { intro, sections } = splitSections(post.content);
  const minutes = Math.max(1, Math.round(stripTags(post.content).split(' ').length / 220));
  const faqSection = sections.find((s) => isFaq(s.heading));
  const ctaHref = tool ? `/${tool.dir}/` : '/';
  const ctaLabel = tool ? `Open ${tool.h1.replace(' Generator', '')} tool` : 'Create a free QR code';

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: post.heading,
      description: post.description,
      datePublished: post.date,
      image: post.image ? `${SITE.url}${post.image.og}` : undefined,
      author: { '@type': 'Organization', name: SITE.name, url: SITE.url },
      publisher: { '@type': 'Organization', name: SITE.name, url: SITE.url },
      mainEntityOfPage: `${SITE.url}/blogs/${post.slug}/`,
    },
    faqSection
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: parseFaq(faqSection.html).map((f) => ({
            '@type': 'Question',
            name: f.q,
            acceptedAnswer: { '@type': 'Answer', text: stripTags(f.a) },
          })),
        }
      : null,
  ].filter(Boolean);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <header className="blog-hero">
        <div className="site-container pb-10 pt-8 sm:pb-14 sm:pt-10">
          <nav className="text-sm text-ink-500 dark:text-ink-400" aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link className="hover:text-brand-700 dark:hover:text-brand-300" href="/">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link className="hover:text-brand-700 dark:hover:text-brand-300" href="/blogs/">
                  Blog
                </Link>
              </li>
            </ol>
          </nav>

          <div className="mt-6 grid items-center gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:gap-12">
            <div className="animate-rise-in">
              <p className="pill">{tool ? tool.h1.replace(' Generator', '') : post.category}</p>
              <h1 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight text-ink-950 dark:text-white sm:text-4xl lg:text-[2.75rem]">
                {post.heading}
              </h1>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-600 dark:text-ink-300 sm:text-lg">{post.description}</p>
              <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-ink-500 dark:text-ink-400">
                <span className="inline-flex items-center gap-2">
                  <span className="grid size-7 place-items-center rounded-full bg-brand-600 text-[11px] font-bold text-white dark:bg-brand-500 dark:text-ink-950">
                    GQ
                  </span>
                  <span className="font-medium text-ink-700 dark:text-ink-200">{SITE.name}</span>
                </span>
                <span aria-hidden="true">•</span>
                <time dateTime={post.date}>{formatBlogDate(post.date)}</time>
                <span aria-hidden="true">•</span>
                <span>{minutes} min read</span>
              </div>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link className="btn-primary" href={ctaHref}>
                  {ctaLabel}
                </Link>
                {faqSection ? (
                  <a className="btn-secondary" href={`#${faqSection.id}`}>
                    Jump to FAQs
                  </a>
                ) : null}
              </div>
            </div>

            {post.image ? (
              <div className="animate-preview-in">
                <img
                  src={post.image.src}
                  alt={post.image.alt}
                  width={post.image.width}
                  height={post.image.height}
                  className="h-auto w-full rounded-2xl shadow-panel ring-1 ring-black/5 dark:ring-white/10"
                />
              </div>
            ) : null}
          </div>
        </div>
      </header>

      <div className="site-container pb-16 pt-10">
        <div className="grid gap-8 lg:grid-cols-[16rem_minmax(0,1fr)] lg:gap-10">
          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-4">
              <nav aria-label="On this page" className="panel max-h-[calc(100vh-16rem)] overflow-y-auto p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-500 dark:text-ink-400">On this page</p>
                <div className="mt-3">
                  <TocList sections={sections} />
                </div>
              </nav>
              <div className="rounded-xl bg-gradient-to-br from-brand-600 to-brand-900 p-4 text-white">
                <p className="text-sm font-semibold">Create a QR code safely</p>
                <p className="mt-1 text-xs leading-relaxed text-white/80">Free, no account, generated on your device.</p>
                <Link
                  href={ctaHref}
                  className="mt-3 inline-flex rounded-lg bg-white px-3 py-1.5 text-xs font-semibold text-brand-800 hover:bg-brand-50"
                >
                  Start now →
                </Link>
              </div>
            </div>
          </aside>

          <div className="min-w-0 space-y-5">
            <details className="panel p-4 lg:hidden">
              <summary className="cursor-pointer text-sm font-semibold text-ink-900 dark:text-white">On this page</summary>
              <div className="mt-3">
                <TocList sections={sections} />
              </div>
            </details>

            <div className="panel p-6 sm:p-8">
              <div className="blog-prose blog-intro" dangerouslySetInnerHTML={{ __html: intro }} />
            </div>

            {sections.map((s, i) =>
              isFinal(s.heading) ? (
                <section
                  key={s.id}
                  id={s.id}
                  className="scroll-mt-24 overflow-hidden rounded-2xl bg-gradient-to-br from-brand-700 via-brand-800 to-ink-950 p-6 text-white sm:p-10"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-200">{pad(i + 1)} · Conclusion</p>
                  <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight sm:text-3xl">{s.heading}</h2>
                  <div className="blog-prose blog-prose-invert mt-5" dangerouslySetInnerHTML={{ __html: s.html }} />
                  <Link
                    href={ctaHref}
                    className="mt-7 inline-flex items-center rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-brand-800 hover:bg-brand-50"
                  >
                    {ctaLabel}
                  </Link>
                </section>
              ) : (
                <SectionCard key={s.id} section={s} num={i + 1} />
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
}
