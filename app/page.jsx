import GeneratorApp from '@/components/GeneratorApp';
import ToolGrid from '@/components/ToolGrid';

export const metadata = {
  title: { absolute: `Free QR Code Generator Online | GenerateQRFast` },
  description:
    'Create free QR codes for URLs, WiFi, text, WhatsApp, contacts, email, SMS, locations, images, videos and more. No signup, no watermark.',
  alternates: { canonical: '/' },
};

export default function HomePage() {
  return (
    <>
      <section className="site-container pt-6 sm:pt-8">
        <div className="animate-rise-in">
          <h1 className="text-2xl font-bold tracking-tight text-ink-950 dark:text-white sm:text-3xl">
            Free QR Code Generator
          </h1>
          <p className="mt-1.5 max-w-2xl text-sm text-ink-600 dark:text-ink-300 sm:text-base">
            Create static QR codes in your browser — free, private, no watermark.
          </p>
        </div>
      </section>

      <GeneratorApp key="home" initialType="url" lockType={false} showTypeSelect />

      <section className="site-container border-t py-10 sm:py-12" style={{ borderColor: 'var(--border)' }}>
        <div className="animate-rise-in">
          <h2 className="text-lg font-semibold tracking-tight text-ink-950 dark:text-white">More QR tools</h2>
          <p className="muted mt-1 text-sm">URL, WiFi, WhatsApp, vCard, image, video, and more.</p>
        </div>
        <div className="mt-6 animate-rise-in stagger-1">
          <ToolGrid />
        </div>
      </section>
    </>
  );
}
