import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import type { Messages } from "../locales";

type ResearchSectionProps = {
  t: Messages;
};

export function ResearchSection({ t }: ResearchSectionProps) {
  const { research: r } = t;
  return (
    <section id="research" className="scroll-mt-20 bg-canvas py-3">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal y={16}>
          <div className="surface-card overflow-hidden">
            <div className="border-b border-line px-4 py-3 sm:px-5">
              <SectionHeading label={r.label}>{r.headline}</SectionHeading>
              <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted">{r.intro}</p>
            </div>

            <ol className="divide-y divide-line">
              {r.papers.map((p) => (
                <li key={p.title}>
                  <article className="p-4 sm:p-5">
                    <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,26rem)] lg:items-center">
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2 font-mono text-[0.72rem] font-semibold uppercase tracking-[0.1em]">
                          <span className="text-accent">{p.year}</span>
                          <span className="text-muted">/</span>
                          <span className="text-muted">{p.authorRole}</span>
                          <span className="text-muted">/</span>
                          <span className="text-muted">{p.venue}</span>
                        </div>

                        <h3 className="mt-2 font-display text-xl font-semibold leading-snug text-ink sm:text-2xl">
                          {p.href ? (
                            <a
                              href={p.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="underline decoration-transparent underline-offset-4 transition hover:text-accent hover:decoration-accent/40"
                            >
                              {p.title}
                            </a>
                          ) : (
                            p.title
                          )}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-ink/72">{p.authors}</p>
                        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-ink/82">{p.summary}</p>

                        <ul className="mt-4 flex flex-wrap gap-2">
                          {p.links.map((link) => (
                            <li key={link.href}>
                              <a
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex rounded border border-accent/25 px-2.5 py-1 font-mono text-[0.75rem] font-semibold uppercase tracking-[0.08em] text-accent transition hover:border-accent hover:bg-accent/5"
                              >
                                {link.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {p.imageSrc ? (
                        <a
                          href={p.href ?? p.imageSrc}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block w-full overflow-hidden rounded-md border border-line bg-canvas"
                        >
                          <img
                            src={p.imageSrc}
                            alt={p.imageAlt ?? ""}
                            width={800}
                            height={600}
                            loading="lazy"
                            decoding="async"
                            className="h-auto w-full object-contain"
                          />
                        </a>
                      ) : null}
                    </div>
                  </article>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
