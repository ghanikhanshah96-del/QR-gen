'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { BLOGS, formatBlogDate } from '@/content/blogs';

const COVER_TONES = {
  url: 'from-brand-600 via-brand-700 to-ink-950',
  text: 'from-ink-700 via-ink-800 to-brand-900',
  wifi: 'from-brand-500 via-brand-700 to-ink-950',
  whatsapp: 'from-brand-600 via-ink-800 to-ink-950',
  'google-review': 'from-brand-400 via-brand-700 to-ink-950',
  vcard: 'from-brand-700 via-ink-800 to-ink-950',
  email: 'from-ink-800 via-brand-800 to-ink-950',
  sms: 'from-brand-800 via-ink-900 to-brand-950',
  phone: 'from-ink-900 via-brand-800 to-ink-950',
  location: 'from-brand-500 via-ink-800 to-brand-950',
  image: 'from-brand-600 via-ink-900 to-brand-950',
  video: 'from-ink-800 via-brand-700 to-ink-950',
  file: 'from-ink-700 via-brand-800 to-ink-950',
};

function BlogCover({ toolId, label }) {
  const tone = COVER_TONES[toolId] || 'from-brand-700 via-brand-800 to-ink-950';
  return (
    <div className={`blog-cover bg-gradient-to-br ${tone}`} aria-hidden="true">
      <div className="blog-cover-grid" />
      <div className="relative z-[1] flex h-full flex-col justify-between p-4">
        <span className="inline-flex size-10 items-center justify-center rounded-xl bg-white/15 text-white backdrop-blur-sm">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path
              d="M4 4h6v6H4V4zm10 0h6v6h-6V4zM4 14h6v6H4v-6zm10 2h2v2h-2v-2zm4-2h2v6h-6v-2h4v-4zM14 14h2v2h-2v-2z"
              fill="currentColor"
            />
          </svg>
        </span>
        <p className="text-sm font-semibold tracking-tight text-white/95">{label}</p>
      </div>
    </div>
  );
}

export default function BlogIndexClient() {
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return BLOGS.filter((post) => {
      if (!q) return true;
      return (
        post.heading.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.category.toLowerCase().includes(q) ||
        post.toolId.toLowerCase().includes(q)
      );
    });
  }, [query]);

  return (
    <div className="site-container py-10 sm:py-14">
      <div className="blog-index-header animate-rise-in">
        <div>
          <h1 className="font-display text-3xl font-semibold tracking-tight text-ink-950 dark:text-white sm:text-4xl">
            EverQR Blog
          </h1>
          <p className="mt-2 text-base text-ink-600 dark:text-ink-300 sm:text-lg">Learn more about QR codes</p>
        </div>

        <div className="blog-index-controls">
          <label className="blog-search" htmlFor="blog-search">
            <span className="sr-only">Search articles</span>
            <input
              id="blog-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search…"
              className="blog-search-input"
            />
            <svg className="blog-search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
              <path d="M20 20l-3.5-3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </label>

          <nav className="blog-cats" aria-label="Blog categories">
            <span className="blog-cat is-active">All</span>
          </nav>
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="panel mt-10 p-8 text-center animate-fade-in">
          <p className="font-semibold text-ink-950 dark:text-white">No articles match your search</p>
          <p className="mt-2 text-sm text-ink-600 dark:text-ink-300">Try another keyword.</p>
          <button type="button" className="btn-secondary mt-5" onClick={() => setQuery('')}>
            Clear search
          </button>
        </div>
      ) : (
        <ul className="blog-grid mt-10">
          {filtered.map((post, i) => (
            <li key={post.slug} className="animate-rise-in" style={{ animationDelay: `${Math.min(i, 9) * 45}ms` }}>
              <article className="blog-post-card">
                <Link href={`/blogs/${post.slug}/`} className="block overflow-hidden rounded-[1rem]">
                  <BlogCover toolId={post.toolId} label={post.category} />
                </Link>
                <div className="mt-4 flex flex-1 flex-col px-1 pb-1">
                  <p className="blog-badge">{post.category}</p>
                  <h2 className="mt-3 text-lg font-semibold leading-snug tracking-tight text-ink-950 dark:text-white sm:text-xl">
                    <Link href={`/blogs/${post.slug}/`} className="transition hover:text-brand-700 dark:hover:text-brand-300">
                      {post.heading}
                    </Link>
                  </h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-600 dark:text-ink-300">
                    {post.excerpt}
                    {post.excerpt.trim().endsWith('.') ? '' : '.'} […]
                  </p>
                  <div className="mt-5 flex items-center justify-between gap-3 border-t pt-4" style={{ borderColor: 'var(--border)' }}>
                    <time className="text-xs text-ink-400" dateTime={post.date}>
                      {formatBlogDate(post.date)}
                    </time>
                    <Link href={`/blogs/${post.slug}/`} className="blog-read-more">
                      Read more
                    </Link>
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
