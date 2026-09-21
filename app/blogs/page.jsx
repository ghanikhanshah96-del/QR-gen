import BlogIndexClient from '@/components/BlogIndexClient';

export const metadata = {
  title: 'EverQR Blog — QR Code Tips for Every Tool',
  description:
    'Practical blog posts on URL, WiFi, WhatsApp, vCard, and more QR tools — how to create, print, and share static QR codes.',
  alternates: { canonical: '/blogs/' },
};

export default function BlogsIndexPage() {
  return <BlogIndexClient />;
}
