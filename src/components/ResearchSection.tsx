import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import type { Messages } from "../locales";

type ResearchSectionProps = {
  t: Messages;
};

export function ResearchSection({ t }: ResearchSectionProps) {
  const { research: r } = t;
  return (
    <section id="research" className="scroll-mt-20 border-b border-line bg-canvas py-12 sm:py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal y={16}>
          <div className="grid gap-6 lg:grid-cols-[13rem_1fr] lg:gap-10">
            <div>
              <SectionHeading label={r.label}>{r.headline}</SectionHeading>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">{r.intro}</p>
            </div>

            <ol className="space-y-5">
              {r.papers.map((p) => (
                <li key={p.title}>
                  <article className="rounded-lg border border-line bg-surface p-4 sm:p-5">
                    <div className="grid gap-5 lg:grid-cols-[1fr_13rem] lg:items-start">
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
                          className="block overflow-hidden rounded-md border border-line bg-white"
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
