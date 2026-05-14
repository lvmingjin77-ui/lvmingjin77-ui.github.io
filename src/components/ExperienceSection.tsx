import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import type { Messages } from "../locales";
import { VerticalTimeline } from "./VerticalTimeline";

type ExperienceSectionProps = {
  t: Messages;
};

export function ExperienceSection({ t }: ExperienceSectionProps) {
  const { experience: x } = t;
  return (
    <section id="experience" className="scroll-mt-20 border-b border-canvas-ink/[0.08] py-12 dark:border-white/[0.08] sm:py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading>{x.headline}</SectionHeading>
        </Reveal>

        <div className="mt-8 grid gap-6 lg:grid-cols-2 lg:gap-7">
          <Reveal>
            <div className="surface-card surface-card-hover h-full p-6 sm:p-8">
              <div className="relative z-[1]">
                <h3 className="flex items-center gap-3 border-b border-canvas-ink/[0.1] pb-3.5 font-display text-lg font-semibold tracking-tight text-canvas-ink dark:border-white/[0.1] dark:text-[#f0eeeb] sm:text-xl">
                  <span className="h-1 w-6 shrink-0 rounded-full bg-accent dark:bg-accent-light" aria-hidden />
                  {x.education.section}
                </h3>
                <VerticalTimeline entries={x.education.entries} />
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="surface-card surface-card-hover h-full p-6 sm:p-8">
              <div className="relative z-[1]">
                <h3 className="flex items-center gap-3 border-b border-canvas-ink/[0.1] pb-3.5 font-display text-lg font-semibold tracking-tight text-canvas-ink dark:border-white/[0.1] dark:text-[#f0eeeb] sm:text-xl">
                  <span className="h-1 w-6 shrink-0 rounded-full bg-accent dark:bg-accent-light" aria-hidden />
                  {x.career.section}
                </h3>
                <VerticalTimeline entries={x.career.entries} />
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-8 grid gap-4 border-t border-canvas-ink/[0.1] pt-8 text-base leading-relaxed dark:border-white/[0.1] lg:grid-cols-[1fr_auto] lg:items-start lg:gap-10">
          <p className="text-canvas-ink/80 dark:text-[#c4c1bc]">{x.belief}</p>
          <p className="max-w-xl font-mono text-sm leading-relaxed tracking-wide text-canvas-ink/55 dark:text-[#8f8b85]">{x.stack}</p>
        </div>
      </div>
    </section>
  );
}
