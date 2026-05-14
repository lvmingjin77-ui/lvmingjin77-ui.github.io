import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import type { Messages } from "../locales";

type ResearchSectionProps = {
  t: Messages;
};

export function ResearchSection({ t }: ResearchSectionProps) {
  const { research: r } = t;
  return (
    <section id="research" className="scroll-mt-20 border-b border-canvas-ink/[0.08] py-12 dark:border-white/[0.08] sm:py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading>{r.headline}</SectionHeading>
        </Reveal>

        <ul className="mt-8 w-full space-y-7">
          {r.papers.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06}>
              <li>
                <article className="surface-card surface-card-hover p-6 sm:p-8">
                  <div
                    className={`relative z-[1] flex flex-col gap-8 ${p.imageSrc ? "lg:flex-row lg:items-center lg:gap-10" : ""}`}
                  >
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="rounded-md bg-accent-faint px-2 py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.08em] text-accent-muted dark:bg-accent-light/10 dark:text-accent-light">
                          {p.venue}
                        </span>
                        <span className="rounded-md border border-canvas-ink/[0.12] px-2 py-1 font-mono text-[11px] font-medium uppercase tracking-[0.1em] text-canvas-ink/50 dark:border-white/[0.12] dark:text-[#8f8b85]">
                          {p.authorRole}
                        </span>
                      </div>

                      <h3 className="mt-5 font-display text-[1.4rem] font-semibold leading-[1.28] tracking-tight text-canvas-ink dark:text-[#f2f1ee] sm:text-[1.65rem]">
                        {p.href ? (
                          <a
                            href={p.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-balance underline decoration-transparent underline-offset-[5px] transition-colors hover:text-accent hover:decoration-accent/45 dark:hover:text-accent-light dark:hover:decoration-accent-light/50"
                          >
                            {p.title}
                          </a>
                        ) : (
                          <span className="text-balance">{p.title}</span>
                        )}
                      </h3>

                      <p
                        className={`mt-5 text-[1.0625rem] leading-[1.75] text-canvas-ink/76 dark:text-[#bcb8b2] ${p.imageSrc ? "max-w-none" : "max-w-prose"}`}
                      >
                        {p.summary}
                      </p>

                      {p.href && p.linkText ? (
                        <p className="mt-6">
                          <a
                            href={p.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-lg border border-accent/20 bg-accent/[0.06] px-4 py-2.5 font-mono text-xs font-semibold tracking-wide text-accent transition-[border-color,background-color,color,transform] hover:border-accent/35 hover:bg-accent/[0.1] hover:text-accent-muted dark:border-accent-light/25 dark:bg-accent-light/[0.06] dark:text-accent-light dark:hover:border-accent-light/45 dark:hover:bg-accent-light/[0.1] dark:hover:text-[#f4f4f5]"
                          >
                            {p.linkText}
                          </a>
                        </p>
                      ) : null}
                    </div>

                    {p.imageSrc ? (
                      <figure className="mx-auto w-full max-w-md shrink-0 lg:mx-0 lg:w-[min(42%,22rem)] xl:w-[min(38%,26rem)]">
                        {p.href ? (
                          <a
                            href={p.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block overflow-hidden rounded-xl border border-canvas-ink/[0.1] bg-gradient-to-br from-white/50 to-surface/90 shadow-sm transition-opacity hover:opacity-95 dark:border-white/[0.1] dark:from-white/[0.06] dark:to-surface-dark/90"
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
                        ) : (
                          <div className="overflow-hidden rounded-xl border border-canvas-ink/[0.1] bg-gradient-to-br from-white/50 to-surface/90 dark:border-white/[0.1] dark:from-white/[0.06] dark:to-surface-dark/90">
                            <img
                              src={p.imageSrc}
                              alt={p.imageAlt ?? ""}
                              width={800}
                              height={600}
                              loading="lazy"
                              decoding="async"
                              className="h-auto w-full object-contain"
                            />
                          </div>
                        )}
                      </figure>
                    ) : null}
                  </div>
                </article>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
