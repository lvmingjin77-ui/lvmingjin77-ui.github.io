import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import type { Messages } from "../locales";

type SiteFooterProps = {
  t: Messages;
};

export function SiteFooter({ t }: SiteFooterProps) {
  return (
    <footer id="contact" className="scroll-mt-20 bg-canvas pb-12 pt-3 sm:pb-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal y={16}>
          <div className="surface-card overflow-hidden">
            <div className="border-b border-line px-4 py-3 sm:px-5">
              <SectionHeading label="Contact">{t.contact.label}</SectionHeading>
            </div>
            <div className="p-4 sm:p-5">
              {t.contact.line.trim() ? <p className="max-w-3xl text-sm leading-relaxed text-ink/78">{t.contact.line}</p> : null}
              <dl className="mt-6 grid gap-4 sm:grid-cols-3">
                {t.contact.footerChannels.map((ch) => {
                  const openExternal = ch.href.startsWith("https://");
                  return (
                    <div key={ch.href + ch.label} className="min-w-0">
                      <dt className="font-mono text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-muted">{ch.label}</dt>
                      <dd className="mt-2">
                        <a
                          href={ch.href}
                          title={openExternal ? t.contact.emailWebComposeHint : undefined}
                          target={openExternal ? "_blank" : undefined}
                          rel={openExternal ? "noopener noreferrer" : undefined}
                          className="break-all font-mono text-sm font-medium text-ink underline decoration-line underline-offset-4 transition hover:text-accent hover:decoration-accent/40"
                        >
                          {ch.value}
                        </a>
                      </dd>
                    </div>
                  );
                })}
              </dl>
              <p className="mt-8 border-t border-line pt-4 font-mono text-[0.72rem] text-muted">
                © 2026 Mingjin Lü. {t.contact.lastUpdated}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
