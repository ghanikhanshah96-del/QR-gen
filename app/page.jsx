import Link from 'next/link';
import GeneratorApp from '@/components/GeneratorApp';
import ToolArticle from '@/components/ToolArticle';
import FaqList from '@/components/FaqList';
import { HOME } from '@/content/home';
import { getToolById } from '@/content/tools';

export const metadata = {
  title: { absolute: `Free QR Code Generator Online | GenerateQRFast` },
  description:
    'Create free QR codes for URLs, WiFi, text, WhatsApp, contacts, email, SMS, images, videos, and more.',
  alternates: { canonical: '/' },
};

export default function HomePage() {
  return (
    <>
      <section className="site-container pt-6 sm:pt-8">
        <div className="animate-rise-in">
          <h1 className="text-2xl font-bold tracking-tight text-ink-950 dark:text-white sm:text-3xl">{HOME.h1}</h1>
          <div className="mt-1.5 max-w-3xl space-y-1 text-sm text-ink-600 dark:text-ink-300 sm:text-base">
            {HOME.intro.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      <GeneratorApp key="home" initialType="url" lockType={false} showTypeSelect />

      <section className="site-container border-t py-10 sm:py-12" style={{ borderColor: 'var(--border)' }}>
        <h2 className="section-title">{HOME.toolsHeading}</h2>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {HOME.tools.map((t) => {
            const tool = getToolById(t.id);
            return (
              <Link key={t.id} href={tool ? `/${tool.dir}/` : '/'} className="tool-card">
                <span className="tool-card-icon" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M4 4h6v6H4V4zm10 0h6v6h-6V4zM4 14h6v6H4v-6zm10 2h2v2h-2v-2zm4-2h2v6h-6v-2h4v-4zM14 14h2v2h-2v-2z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                <h3 className="font-semibold text-ink-950 dark:text-white">{t.name}</h3>
                <p className="mt-1 text-sm text-ink-600 dark:text-ink-300">{t.text}</p>
              </Link>
            );
          })}
        </div>
      </section>

      <ToolArticle sections={HOME.article} />

      <section className="site-container pb-12">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <div className="mt-6">
          <FaqList items={HOME.faqs} />
        </div>
      </section>

      <section className="site-container pb-16">
        <div className="panel flex flex-col items-start gap-4 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div>
            <h2 className="text-xl font-semibold tracking-tight text-ink-950 dark:text-white sm:text-2xl">
              {HOME.cta.heading}
            </h2>
            <p className="mt-1.5 max-w-2xl text-ink-600 dark:text-ink-300">{HOME.cta.text}</p>
          </div>
          <a href="#generator-app" className="btn-primary shrink-0">
            Create QR code
          </a>
        </div>
      </section>
    </>
  );
}
