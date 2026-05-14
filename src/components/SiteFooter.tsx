import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import type { Messages } from "../locales";

type SiteFooterProps = {
  t: Messages;
};

export function SiteFooter({ t }: SiteFooterProps) {
  return (
    <footer id="contact" className="scroll-mt-20 bg-canvas pb-12 pt-14 dark:bg-canvas-ink sm:pb-14 sm:pt-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading>{t.contact.label}</SectionHeading>
          <p className="mt-6 w-full max-w-none text-xl leading-relaxed text-canvas-ink/88 dark:text-[#c9c6c0] sm:text-[1.35rem]">{t.contact.line}</p>
          <dl className="mt-8 grid gap-6 sm:grid-cols-3 sm:gap-8">
            {t.contact.footerChannels.map((ch) => {
              const openExternal = ch.href.startsWith("https://");
              return (
              <div key={ch.href + ch.label} className="min-w-0">
                <dt className="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-canvas-ink/52 dark:text-[#9a968f]">{ch.label}</dt>
                <dd className="mt-2">
                  <a
                    href={ch.href}
                    title={openExternal ? t.contact.emailWebComposeHint : undefined}
                    target={openExternal ? "_blank" : undefined}
                    rel={openExternal ? "noopener noreferrer" : undefined}
                    className="break-all font-mono text-[0.95rem] font-medium leading-snug text-canvas-ink underline decoration-canvas-ink/25 underline-offset-[3px] transition hover:text-accent hover:decoration-accent/40 dark:text-[#e8e6e3] dark:decoration-white/20 dark:hover:text-accent-light dark:hover:decoration-accent-light/45 sm:text-base"
                  >
                    {ch.value}
                  </a>
                </dd>
              </div>
              );
            })}
          </dl>
        </Reveal>
      </div>
    </footer>
  );
}
