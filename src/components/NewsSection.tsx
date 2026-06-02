import type { Messages } from "../locales";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

type NewsSectionProps = {
  t: Messages;
};

export function NewsSection({ t }: NewsSectionProps) {
  return (
    <section id="news" className="bg-canvas py-3">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal y={16}>
          <div className="surface-card overflow-hidden">
            <div className="border-b border-line px-4 py-3 sm:px-5">
              <SectionHeading label="News">{t.news.headline}</SectionHeading>
            </div>
            <ol className="divide-y divide-line">
              {t.news.items.map((item) => {
                const content = item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-transparent underline-offset-4 transition hover:text-accent hover:decoration-accent/35"
                  >
                    {item.text}
                  </a>
                ) : (
                  item.text
                );
                return (
                  <li key={`${item.date}-${item.text}`} className="grid gap-2 px-4 py-3.5 text-sm sm:grid-cols-[6.5rem_1fr] sm:gap-5 sm:px-5">
                    <time className="font-mono text-[0.8125rem] font-semibold text-muted" dateTime={item.date}>
                      {item.date}
                    </time>
                    <p className="leading-relaxed text-ink/82">{content}</p>
                  </li>
                );
              })}
            </ol>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
