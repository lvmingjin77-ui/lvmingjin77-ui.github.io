import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import type { Messages } from "../locales";

type WorkBentoProps = {
  t: Messages;
};

export function WorkBento({ t }: WorkBentoProps) {
  const { work } = t;
  return (
    <section id="work" className="scroll-mt-20 bg-canvas py-3">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal y={16}>
          <div className="surface-card overflow-hidden">
            <div className="border-b border-line px-4 py-3 sm:px-5">
              <SectionHeading label={work.label}>{work.headline}</SectionHeading>
              <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted">{work.intro}</p>
            </div>

            <div className="divide-y divide-line">
              {work.items.map((item) => (
                <article key={item.title} className="p-4 sm:p-5">
                  <div className="grid gap-4 md:grid-cols-[1fr_12rem] md:gap-6">
                    <div className="min-w-0">
                      <p className="font-mono text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-accent">{item.context}</p>
                      <h3 className="mt-2 font-display text-xl font-semibold leading-snug text-ink">{item.title}</h3>
                      <p className="mt-2 max-w-3xl text-sm leading-relaxed text-ink/80">{item.summary}</p>
                      <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                        {item.bullets.map((b) => (
                          <li key={b} className="flex gap-2.5 text-sm leading-relaxed text-ink/74">
                            <span className="mt-[0.55rem] h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <aside className="border-t border-line pt-3 md:border-l md:border-t-0 md:pl-5 md:pt-0">
                      {item.repoHref ? (
                        <a
                          href={item.repoHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-mono text-[0.78rem] font-semibold uppercase tracking-[0.08em] text-accent underline decoration-accent/25 underline-offset-4 transition hover:decoration-accent/55"
                        >
                          {item.repoLinkText ?? "GitHub"}
                        </a>
                      ) : (
                        <p className="font-mono text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-muted">Internal / Prototype</p>
                      )}
                      <p className="mt-4 font-mono text-[0.75rem] leading-relaxed text-muted">{item.tags.join(" · ")}</p>
                    </aside>
                  </div>
                </article>
              ))}

              <article className="bg-canvas/65 p-4 sm:p-5">
                <div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-start">
                  <div>
                    <p className="font-mono text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-muted">{work.toyShelf.badge}</p>
                    <h3 className="mt-2 font-display text-lg font-semibold text-ink">{work.toyShelf.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink/74">{work.toyShelf.description}</p>
                  </div>
                  <ul className="space-y-2">
                    {work.toyShelf.links.map((link) => (
                      <li key={link.href}>
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-mono text-[0.78rem] font-semibold text-accent underline decoration-accent/25 underline-offset-4 transition hover:decoration-accent/55"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
