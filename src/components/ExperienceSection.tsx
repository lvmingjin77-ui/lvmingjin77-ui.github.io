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
    <section id="experience" className="scroll-mt-20 border-b border-line bg-canvas py-12 sm:py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal y={16}>
          <div className="grid gap-6 lg:grid-cols-[13rem_1fr] lg:gap-10">
            <div>
              <SectionHeading label={x.label}>{x.headline}</SectionHeading>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">{x.stack}</p>
            </div>

            <div className="space-y-8">
              <div className="grid gap-5 lg:grid-cols-2">
                <section className="rounded-lg border border-line bg-surface p-4 sm:p-5">
                  <h3 className="border-b border-line pb-3 font-display text-lg font-semibold text-ink">{x.education.section}</h3>
                  <VerticalTimeline entries={x.education.entries} />
                </section>
                <section className="rounded-lg border border-line bg-surface p-4 sm:p-5">
                  <h3 className="border-b border-line pb-3 font-display text-lg font-semibold text-ink">{x.career.section}</h3>
                  <VerticalTimeline entries={x.career.entries} />
                </section>
              </div>

              <p className="border-l-2 border-accent pl-4 text-sm leading-relaxed text-ink/76">{x.belief}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
