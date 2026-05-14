import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import type { Messages } from "../locales";

type WorkBentoProps = {
  t: Messages;
};

export function WorkBento({ t }: WorkBentoProps) {
  const { work } = t;
  return (
    <section id="work" className="scroll-mt-20 border-b border-canvas-ink/[0.08] py-12 dark:border-white/[0.08] sm:py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading>{work.headline}</SectionHeading>
        </Reveal>

        <div className="mt-8 grid w-full gap-6 md:grid-cols-2 md:gap-7">
          {work.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.04}>
              <article className="surface-card surface-card-hover flex h-full flex-col p-6 sm:p-8">
                <div className="relative z-[1] flex h-full min-h-0 flex-col">
                  <span className="inline-flex w-fit rounded-full border border-canvas-ink/[0.1] bg-canvas/50 px-2.5 py-1 font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-canvas-ink/55 dark:border-white/[0.1] dark:bg-canvas-ink/30 dark:text-[#9c9890]">
                    {item.context}
                  </span>
                  <h3 className="mt-4 font-display text-[1.35rem] font-semibold leading-snug tracking-tight text-canvas-ink dark:text-[#f2f1ee] sm:text-2xl">{item.title}</h3>
                  <p className="mt-3 text-[1.05rem] leading-[1.72] text-canvas-ink/78 dark:text-[#bcb8b2]">{item.summary}</p>
                  {item.repoHref ? (
                    <p className="mt-3">
                      <a
                        href={item.repoHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-sm font-semibold text-accent underline decoration-accent/25 underline-offset-4 transition hover:text-accent-muted hover:decoration-accent/50 dark:text-accent-light dark:decoration-accent-light/35 dark:hover:text-canvas"
                      >
                        {item.repoLinkText ?? "GitHub"}
                      </a>
                    </p>
                  ) : null}
                  <ul className="mt-5 space-y-2.5 border-t border-canvas-ink/[0.08] pt-5 dark:border-white/[0.08]">
                    {item.bullets.map((b) => (
                      <li key={b} className="flex gap-3 text-sm leading-relaxed text-canvas-ink/72 dark:text-[#a8a49e]">
                        <span
                          className="mt-[0.45rem] h-1 w-1 shrink-0 rotate-45 bg-accent/80 dark:bg-accent-light/85"
                          aria-hidden
                        />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-auto border-t border-dashed border-canvas-ink/[0.12] pt-4 font-mono text-[11px] leading-relaxed tracking-wide text-canvas-ink/45 dark:border-white/[0.1] dark:text-[#7a7670]">
                    {item.tags.join(" · ")}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}

          <Reveal className="md:col-span-2" delay={work.items.length * 0.04}>
            <article className="relative isolate overflow-hidden rounded-2xl border-2 border-dashed border-accent/40 bg-gradient-to-br from-accent/[0.08] via-canvas/40 to-amber-900/[0.04] px-6 py-7 shadow-none dark:border-accent-light/35 dark:from-accent-light/[0.09] dark:via-canvas-ink/40 dark:to-transparent sm:px-8 sm:py-8">
              <div className="pointer-events-none absolute -right-16 -top-20 h-48 w-48 rounded-full bg-accent/[0.12] blur-3xl dark:bg-accent-light/[0.08]" aria-hidden />
              <div className="relative z-[1] flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between sm:gap-10">
                <div className="min-w-0 max-w-2xl">
                  <span className="inline-flex rounded-md border border-accent/30 bg-accent/10 px-2 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-accent-muted dark:border-accent-light/25 dark:bg-accent-light/10 dark:text-accent-light">
                    {work.toyShelf.badge}
                  </span>
                  <h3 className="mt-3 font-display text-[1.35rem] font-semibold leading-snug tracking-tight text-canvas-ink dark:text-[#f2f1ee] sm:text-2xl">
                    {work.toyShelf.title}
                  </h3>
                  <p className="mt-2 text-[1.05rem] leading-[1.72] text-canvas-ink/76 dark:text-[#bcb8b2]">{work.toyShelf.description}</p>
                </div>
                <ul className="min-w-0 shrink-0 space-y-3 sm:min-w-[14rem]">
                  {work.toyShelf.links.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 font-mono text-sm font-semibold text-accent underline decoration-accent/30 underline-offset-[3px] transition hover:text-accent-muted hover:decoration-accent/55 dark:text-accent-light dark:decoration-accent-light/40 dark:hover:text-canvas"
                      >
                        <span className="text-balance">{link.label}</span>
                        <span aria-hidden className="text-base transition group-hover:translate-x-0.5">
                          →
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
