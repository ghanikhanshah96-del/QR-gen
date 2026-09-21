import Link from 'next/link';
import { BLOGS, getBlogBySlug } from '@/content/blogs';
import { getToolById } from '@/content/tools';

export function generateStaticParams() {
  return BLOGS.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blogs/${post.slug}/` },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) {
    return (
      <div className="site-container py-16">
        <h1 className="section-title">Post not found</h1>
        <Link className="btn-primary mt-6 inline-flex" href="/blogs/">
          All blogs
        </Link>
      </div>
    );
  }

  const tool = getToolById(post.toolId);

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
            <Link className="hover:text-brand-700" href="/blogs/">
              Blog
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="font-medium text-ink-800">{post.heading}</li>
        </ol>
      </nav>

      <article className="mx-auto mt-6 max-w-3xl">
        {tool ? (
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-700">
            {tool.h1.replace(' Generator', '')}
          </p>
        ) : null}
        <h1 className="font-display text-3xl font-semibold tracking-tight text-ink-950 dark:text-white sm:text-4xl">
          {post.heading}
        </h1>
        <p className="mt-3 text-sm text-ink-500 dark:text-ink-400">{post.date}</p>
        <div
          className="mt-6 space-y-4 leading-relaxed text-ink-700 dark:text-ink-300 [&_a]:text-brand-800 [&_a]:underline dark:[&_a]:text-brand-300 [&_h2]:mt-8 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-ink-950 dark:[&_h2]:text-white [&_li]:ml-1 [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-5 [&_strong]:text-ink-950 dark:[&_strong]:text-white [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <div className="mt-10 flex flex-wrap gap-3">
          {tool ? (
            <Link className="btn-primary" href={`/${tool.dir}/`}>
              Open {tool.h1.replace(' Generator', '')} tool
            </Link>
          ) : (
            <Link className="btn-primary" href="/">
              Create a free QR code
            </Link>
          )}
          <Link className="btn-secondary" href="/blogs/">
            More blogs
          </Link>
        </div>
      </article>
    </div>
  );
}
