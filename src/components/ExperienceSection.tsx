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
    <section id="experience" className="scroll-mt-20 bg-canvas py-3">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal y={16}>
          <div className="surface-card overflow-hidden">
            <div className="border-b border-line px-4 py-3 sm:px-5">
              <SectionHeading label={x.label}>{x.headline}</SectionHeading>
              <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted">{x.stack}</p>
            </div>

            <div>
              <div className="grid lg:grid-cols-2">
                <section className="p-4 sm:p-5 lg:border-r lg:border-line">
                  <h3 className="border-b border-line pb-3 font-display text-lg font-semibold text-ink">{x.education.section}</h3>
                  <VerticalTimeline entries={x.education.entries} />
                </section>
                <section className="border-t border-line p-4 sm:p-5 lg:border-t-0">
                  <h3 className="border-b border-line pb-3 font-display text-lg font-semibold text-ink">{x.career.section}</h3>
                  <VerticalTimeline entries={x.career.entries} />
                </section>
              </div>

              {x.belief.trim() ? (
                <p className="border-t border-line bg-canvas/65 px-4 py-4 text-sm leading-relaxed text-ink/76 sm:px-5">{x.belief}</p>
              ) : null}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
