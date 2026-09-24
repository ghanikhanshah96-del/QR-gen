import BlogIndexClient from '@/components/BlogIndexClient';

export const metadata = {
  title: { absolute: 'GenerateQRFast Blog — Free QR Code Tips for Every Tool' },
  description:
    'Practical GenerateQRFast blog posts on URL, WiFi, WhatsApp, vCard, image to QR, video to QR, and more — how to create, print, and share static QR codes.',
  alternates: { canonical: '/blogs/' },
};

export default function BlogsIndexPage() {
  return <BlogIndexClient />;
}
