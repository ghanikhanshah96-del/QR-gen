import { SITE } from '@/lib/config';
import { TOOLS } from '@/content/tools';
import { GUIDES } from '@/content/guides';
import { BLOGS } from '@/content/blogs';
import { LEGAL_PAGES } from '@/content/legal';

export const dynamic = 'force-static';

export default function sitemap() {
  const lastModified = new Date();
  const base = SITE.url.replace(/\/$/, '');

  const entries = [
    { url: `${base}/`, lastModified },
    ...TOOLS.map((t) => ({ url: `${base}/${t.dir}/`, lastModified })),
    { url: `${base}/guides/`, lastModified },
    ...GUIDES.map((g) => ({ url: `${base}/guides/${g.dir}/`, lastModified })),
    { url: `${base}/blogs/`, lastModified },
    ...BLOGS.map((b) => ({ url: `${base}/blogs/${b.slug}/`, lastModified })),
    ...LEGAL_PAGES.map((p) => ({ url: `${base}/${p.file}/`, lastModified })),
    { url: `${base}/templates/`, lastModified },
  ];

  return entries;
}
