import BlogIndexClient from '@/components/BlogIndexClient';

export const metadata = {
  title: { absolute: 'GenerateQRFast Blog — QR Code Guides, Privacy & Security Tips' },
  description: 'GenerateQRFast blog: practical guides on creating, sharing, and scanning QR codes safely.',
  alternates: { canonical: '/blogs/' },
};

export default function BlogsIndexPage() {
  return <BlogIndexClient />;
}
