'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { BLOGS, BLOG_CATEGORIES, formatBlogDate } from '@/content/blogs';

const href = (post) => `/blogs/${post.slug}/`;

/** Cover image, or a branded gradient for posts without one. */
function Cover({ post, className = '' }) {
  if (post.image) {
    return (
      <img
        src={post.image.src}
        alt={post.image.alt}
        width={post.image.width}
        height={post.image.height}
        loading="lazy"
        className={`h-full w-full object-cover transition duration-500 ease-smooth group-hover:scale-[1.03] ${className}`}
      />
    );
  }
  return (
    <div className={`blog-cover bg-gradient-to-br from-brand-700 via-brand-800 to-ink-950 ${className}`} aria-hidden="true">
      <div className="blog-cover-grid" />
    </div>
  );
}

function Meta({ post }) {
  return (
    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-ink-500 dark:text-ink-400">
      <time dateTime={post.date}>{formatBlogDate(post.date)}</time>
      <span aria-hidden="true">•</span>
      <span>{post.category}</span>
    </div>
  );
}

function FeaturedCard({ post }) {
  return (
    <article className="group panel grid overflow-hidden lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)]">
      <Link href={href(post)} className="block aspect-[1200/630] overflow-hidden lg:aspect-auto">
        <Cover post={post} />
      </Link>
      <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
        <p className="pill w-fit">Latest article</p>
        <h2 className="mt-4 font-display text-2xl font-semibold leading-tight tracking-tight text-ink-950 dark:text-white sm:text-3xl">
          <Link href={href(post)} className="transition hover:text-brand-700 dark:hover:text-brand-300">
            {post.heading}
          </Link>
        </h2>
        <p className="mt-3 leading-relaxed text-ink-600 dark:text-ink-300">{post.description}</p>
        <div className="mt-5">
          <Meta post={post} />
        </div>
        <Link href={href(post)} className="btn-primary mt-6 w-fit">
          Read article →
        </Link>
      </div>
    </article>
  );
}

function PostCard({ post }) {
  return (
    <article className="group panel flex h-full flex-col overflow-hidden">
      <Link href={href(post)} className="block aspect-[1200/630] overflow-hidden">
        <Cover post={post} />
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <Meta post={post} />
        <h2 className="mt-2 text-lg font-semibold leading-snug tracking-tight text-ink-950 dark:text-white">
          <Link href={href(post)} className="transition hover:text-brand-700 dark:hover:text-brand-300">
            {post.heading}
          </Link>
        </h2>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-600 dark:text-ink-300">{post.excerpt}</p>
        <Link href={href(post)} className="blog-read-more mt-4 w-fit">
          Read more
        </Link>
      </div>
    </article>
  );
}

export default function BlogIndexClient() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');

  // Newest first.
  const posts = useMemo(() => [...BLOGS].sort((a, b) => b.date.localeCompare(a.date)), []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return posts.filter((post) => {
      if (category !== 'All' && post.category !== category) return false;
      if (!q) return true;
      return [post.heading, post.description, post.excerpt, post.category].some((t) => t.toLowerCase().includes(q));
    });
  }, [posts, query, category]);

  const showFeatured = !query.trim() && category === 'All';
  const [featured, ...rest] = filtered;
  const grid = showFeatured ? rest : filtered;

  return (
    <>
      <header className="blog-hero">
        <div className="site-container py-10 sm:py-14">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="animate-rise-in">
              <h1 className="font-display text-3xl font-semibold tracking-tight text-ink-950 dark:text-white sm:text-4xl">
                GenerateQRFast Blog
              </h1>
              <p className="mt-2 max-w-xl text-base text-ink-600 dark:text-ink-300 sm:text-lg">
                Guides and tips for creating, sharing, and scanning QR codes safely.
              </p>
            </div>
            <label className="blog-search w-full lg:w-72" htmlFor="blog-search">
              <span className="sr-only">Search articles</span>
              <input
                id="blog-search"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search articles…"
                className="blog-search-input"
              />
              <svg className="blog-search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
                <path d="M20 20l-3.5-3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </label>
          </div>

          <div className="mt-6 flex flex-wrap gap-2" role="group" aria-label="Blog categories">
            {['All', ...BLOG_CATEGORIES].map((c) => (
              <button
                key={c}
                type="button"
                className="type-chip"
                aria-pressed={category === c}
                onClick={() => setCategory(c)}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </header>

      <div className="site-container pb-16 pt-10">
        {filtered.length === 0 ? (
          <div className="panel p-8 text-center animate-fade-in">
            <p className="font-semibold text-ink-950 dark:text-white">No articles match your search</p>
            <p className="mt-2 text-sm text-ink-600 dark:text-ink-300">Try another keyword or category.</p>
            <button
              type="button"
              className="btn-secondary mt-5"
              onClick={() => {
                setQuery('');
                setCategory('All');
              }}
            >
              Show all articles
            </button>
          </div>
        ) : (
          <div className="space-y-10">
            {showFeatured && featured ? (
              <div className="animate-rise-in">
                <FeaturedCard post={featured} />
              </div>
            ) : null}

            {grid.length ? (
              <section aria-label={showFeatured ? 'More articles' : 'Articles'}>
                {showFeatured ? (
                  <h2 className="mb-5 text-lg font-semibold tracking-tight text-ink-950 dark:text-white">More articles</h2>
                ) : null}
                <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {grid.map((post, i) => (
                    <li key={post.slug} className="animate-rise-in" style={{ animationDelay: `${Math.min(i, 9) * 45}ms` }}>
                      <PostCard post={post} />
                    </li>
                  ))}
                </ul>
              </section>
            ) : null}
          </div>
        )}
      </div>
    </>
  );
}
