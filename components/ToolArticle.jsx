/**
 * Long-form SEO article for tool pages and the home page. Server-rendered (no
 * client JS) so all text is in the static HTML. Content lives in content/articles.js.
 *
 * Section shape: { heading, blocks, variant? }
 * Block types:
 * - 'string'                     paragraph
 * - ['a', 'b']                   checklist grid
 * - { steps: [...] }             numbered steps
 * - { cards: [{ title, body }] } grid of sub-topic cards (body: string or blocks)
 * - { note: string | string[] }  highlighted callout (flows, example labels, sample values)
 * - { chips: [...] }             short example phrases shown as quoted pills
 * - { h3: string }               sub-heading inside a section
 * variant: 'tips' renders each paragraph as a numbered tip card
 */

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="size-4 shrink-0">
      <path
        d="M5 10.5l3.2 3.2L15 7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const softBox = { borderColor: 'var(--border)', background: 'var(--surface-soft)' };

function Checklist({ items }) {
  return (
    <ul className="grid gap-2 sm:grid-cols-2">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-center gap-2.5 rounded-lg border px-3 py-2.5 text-sm font-medium text-ink-800 dark:text-ink-100"
          style={softBox}
        >
          <span className="grid size-6 shrink-0 place-items-center rounded-full bg-brand-100 text-brand-700 dark:bg-brand-950 dark:text-brand-300">
            <CheckIcon />
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}

function Steps({ items }) {
  return (
    <ol className="space-y-2.5">
      {items.map((item, i) => (
        <li
          key={item}
          className="flex items-start gap-3 rounded-lg border px-3 py-2.5"
          style={softBox}
        >
          <span className="grid size-6 shrink-0 place-items-center rounded-full bg-brand-600 text-xs font-bold text-white dark:bg-brand-500 dark:text-ink-950">
            {i + 1}
          </span>
          <span className="pt-0.5 text-sm font-medium text-ink-800 dark:text-ink-100">{item}</span>
        </li>
      ))}
    </ol>
  );
}

function Cards({ items }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {items.map((card) => (
        <div key={card.title} className="rounded-xl border p-4" style={softBox}>
          <h3 className="text-sm font-semibold text-ink-950 dark:text-white">{card.title}</h3>
          <div className="mt-1.5 space-y-2 text-sm leading-relaxed text-ink-600 dark:text-ink-300">
            {(Array.isArray(card.body) ? card.body : [card.body]).map((b, i) => (
              <Block key={i} block={b} compact />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function Note({ lines, compact }) {
  const list = Array.isArray(lines) ? lines : [lines];
  return (
    <div
      className={`rounded-lg border-l-4 border-brand-500 bg-brand-50 font-semibold text-brand-900 dark:bg-brand-950/60 dark:text-brand-100 ${
        compact ? 'px-3 py-2 text-sm' : 'px-4 py-3'
      }`}
    >
      {list.map((line) => (
        <p key={line}>{line}</p>
      ))}
    </div>
  );
}

function Chips({ items }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((item) => (
        <li
          key={item}
          className="rounded-full border border-brand-200 bg-brand-50 px-3.5 py-1.5 text-sm font-semibold text-brand-800 dark:border-brand-800 dark:bg-brand-950/60 dark:text-brand-200"
        >
          “{item}”
        </li>
      ))}
    </ul>
  );
}

function Block({ block, lead = false, compact = false }) {
  if (typeof block === 'string') {
    if (compact) return <p>{block}</p>;
    return (
      <p
        className={
          lead
            ? 'text-base leading-relaxed text-ink-800 dark:text-ink-100 sm:text-[17px]'
            : 'leading-relaxed text-ink-600 dark:text-ink-300'
        }
      >
        {block}
      </p>
    );
  }
  if (Array.isArray(block)) return <Checklist items={block} />;
  if (block.steps) return <Steps items={block.steps} />;
  if (block.cards) return <Cards items={block.cards} />;
  if (block.note) return <Note lines={block.note} compact={compact} />;
  if (block.chips) return <Chips items={block.chips} />;
  if (block.h3) {
    return (
      <h3 className="pt-2 text-lg font-semibold tracking-tight text-ink-950 dark:text-white">
        {block.h3}
      </h3>
    );
  }
  return null;
}

function TipCards({ tips }) {
  return (
    <ol className="grid gap-3 sm:grid-cols-2">
      {tips.map((tip, i) => (
        <li key={i} className="rounded-xl border p-4" style={softBox}>
          <span className="text-xs font-bold uppercase tracking-[0.12em] text-brand-700 dark:text-brand-300">
            Tip {i + 1}
          </span>
          <p className="mt-1.5 text-sm leading-relaxed text-ink-700 dark:text-ink-300">{tip}</p>
        </li>
      ))}
    </ol>
  );
}

function SectionBody({ section }) {
  if (section.variant === 'tips') {
    return <TipCards tips={section.blocks.filter((b) => typeof b === 'string')} />;
  }

  return (
    <div className="space-y-4">
      {section.blocks.map((block, i) => (
        <Block key={i} block={block} lead={i === 0} />
      ))}
    </div>
  );
}

/** showToc: set false to hide the "On this page" sidebar (used on the home page). */
export default function ToolArticle({ sections, showToc = true }) {
  const items = sections.map((s, i) => ({
    ...s,
    id: slugify(s.heading),
    num: String(i + 1).padStart(2, '0'),
  }));

  return (
    <section className="site-container pb-14" aria-label="Guide">
      <div className={showToc ? 'grid gap-8 lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-10' : ''}>
        {showToc ? (
          <nav aria-label="On this page" className="hidden lg:block">
            <div className="panel sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-500 dark:text-ink-400">
                On this page
              </p>
              <ol className="mt-3 space-y-0.5">
                {items.map((s) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="flex gap-2.5 rounded-md px-2 py-1.5 text-sm text-ink-600 transition hover:bg-brand-50 hover:text-brand-800 dark:text-ink-300 dark:hover:bg-brand-950/50 dark:hover:text-brand-200"
                    >
                      <span className="font-semibold tabular-nums text-ink-400">{s.num}</span>
                      <span>{s.heading}</span>
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </nav>
        ) : null}

        <div className="space-y-5">
          {items.map((s) => (
            <article key={s.id} id={s.id} className="panel scroll-mt-24 p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-brand-600 text-sm font-bold text-white dark:bg-brand-500 dark:text-ink-950">
                  {s.num}
                </span>
                <h2 className="pt-1 text-xl font-semibold tracking-tight text-ink-950 dark:text-white sm:text-2xl">
                  {s.heading}
                </h2>
              </div>
              <div className="mt-5 sm:pl-14">
                <SectionBody section={s} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
