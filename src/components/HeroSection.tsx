import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { Messages } from "../locales";
import { resolveProfileLink } from "../locales";
import { SITE_EMAIL, WECHAT_QR_SRC } from "../constants";
import { ProfilePhoto } from "./ProfilePhoto";

type HeroSectionProps = {
  t: Messages;
};

export function HeroSection({ t }: HeroSectionProps) {
  const reduce = useReducedMotion();
  const [showWechat, setShowWechat] = useState(false);
  const profileLinks = t.hero.profileLinks.map((link) => resolveProfileLink(link, SITE_EMAIL));
  const emailLink = profileLinks.find((link) => link.label.toLowerCase() === "email");
  const iconLinks = profileLinks.filter((link) => link.label.toLowerCase() !== "email");
  const wechat = t.hero.contactItems.find((item) => item.label.toLowerCase() === "wechat" || item.label === "微信");
  const about = t.hero.about;

  return (
    <section id="about" className="bg-canvas pt-24 pb-6 sm:pt-28 sm:pb-8">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="grid w-full min-w-0 grid-cols-1 gap-6 lg:grid-cols-[18rem_minmax(0,1fr)] lg:gap-8">
          <motion.aside
            className="surface-card mx-auto max-w-[22rem] p-5 lg:sticky lg:top-24 lg:mx-0 lg:max-w-none"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.42 }}
          >
            <ProfilePhoto name={t.hero.name} alt={t.hero.photoAlt} />

            <div className="mt-4 text-center">
              <h1 className="font-display text-2xl font-semibold text-ink">{t.hero.name}</h1>
              <p className="mt-2 text-sm leading-relaxed text-ink/72">{t.hero.status}</p>
            </div>

            {emailLink ? (
              <div className="mt-5 border-t border-line pt-4">
                <p className="font-mono text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-muted">Email</p>
                <a
                  href={emailLink.href}
                  target={emailLink.href.startsWith("https://") ? "_blank" : undefined}
                  rel={emailLink.href.startsWith("https://") ? "noopener noreferrer" : undefined}
                  className="mt-1 block break-all font-mono text-sm font-semibold text-ink underline decoration-line underline-offset-4 transition hover:text-accent hover:decoration-accent/40"
                >
                  {emailLink.value}
                </a>
              </div>
            ) : null}

            <div className="mt-4 flex flex-wrap justify-center gap-2 border-t border-line pt-4">
              {iconLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target={link.href.startsWith("https://") ? "_blank" : undefined}
                  rel={link.href.startsWith("https://") ? "noopener noreferrer" : undefined}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line bg-canvas text-ink transition hover:border-accent/40 hover:text-accent"
                  aria-label={link.label}
                  title={link.label}
                >
                  <ProfileIcon label={link.label} />
                </a>
              ))}
              {wechat ? (
                <button
                  type="button"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line bg-canvas text-ink transition hover:border-accent/40 hover:text-accent"
                  aria-label={wechat.label}
                  title={`${wechat.label}: ${wechat.value}`}
                  onClick={() => setShowWechat(true)}
                >
                  <WechatIcon />
                </button>
              ) : null}
            </div>
          </motion.aside>

          <div className="w-full min-w-0 space-y-4">
            <motion.section
              className="surface-card p-5 sm:p-7"
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.46, delay: 0.04 }}
            >
              <p className="font-mono text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-accent">About</p>
              <h2 className="mt-3 font-display text-3xl font-semibold text-ink">{about.headline}</h2>
              <div className="mt-4 max-w-3xl space-y-4 text-base leading-relaxed text-ink/78">
                {about.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <p className="mt-4">
                <a
                  href={about.labHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-sm font-semibold text-accent underline decoration-accent/25 underline-offset-4 transition hover:decoration-accent/55"
                >
                  {about.labLabel}
                </a>
              </p>

              <div className="mt-6 grid gap-5 border-t border-line pt-5 md:grid-cols-3">
                {t.hero.skillGroups.map((group) => (
                  <section key={group.label} className="min-w-0">
                    <h3 className="font-mono text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-muted">{group.label}</h3>
                    <ul className="mt-2 flex min-w-0 flex-wrap gap-1.5">
                      {group.items.map((item) => (
                        <li key={item} className="max-w-full rounded border border-line bg-canvas px-2 py-1 font-mono text-[0.78rem] leading-none text-ink/78">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </section>
                ))}
              </div>
            </motion.section>

            <motion.section
              className="surface-card grid gap-6 p-5 sm:p-6 lg:grid-cols-[1fr_15rem]"
              initial={reduce ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.42, delay: 0.16 }}
            >
              <div>
                <h2 className="font-mono text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-muted">Highlights</h2>
                <ul className="mt-3 space-y-2.5">
                  {t.hero.highlights.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-relaxed text-ink/80">
                      <span className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <aside className="border-l-0 border-line lg:border-l lg:pl-6">
                <h2 className="font-mono text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-muted">Info</h2>
                <dl className="mt-3 grid grid-cols-1 gap-3">
                  {t.hero.quickFacts.map((fact) => (
                    <div key={fact.label} className="border-t border-line pt-2">
                      <dt className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-muted">{fact.label}</dt>
                      <dd className="mt-1 text-sm font-medium text-ink">{fact.value}</dd>
                    </div>
                  ))}
                </dl>
              </aside>
            </motion.section>
          </div>
        </div>
      </div>

      {showWechat ? (
        <div className="fixed inset-0 z-[80] flex items-center justify-center bg-ink/55 px-4" role="dialog" aria-modal="true" aria-label="WeChat QR code">
          <div className="w-full max-w-sm rounded-lg bg-surface p-4 shadow-lg">
            <div className="flex items-center justify-between gap-4 border-b border-line pb-3">
              <p className="font-display text-lg font-semibold text-ink">{wechat?.label ?? "WeChat"}</p>
              <button type="button" className="rounded border border-line px-2 py-1 text-sm text-ink" onClick={() => setShowWechat(false)}>
                Close
              </button>
            </div>
            <img src={WECHAT_QR_SRC} alt="WeChat QR code" width={900} height={1169} className="mt-4 h-auto w-full rounded border border-line" />
          </div>
        </div>
      ) : null}
    </section>
  );
}

function ProfileIcon({ label }: { label: string }) {
  const normalized = label.toLowerCase();
  if (normalized.includes("github")) return <GithubIcon />;
  if (normalized.includes("arxiv")) return <PaperIcon />;
  if (normalized.includes("cv")) return <FileIcon />;
  return <LinkIcon />;
}

function FileIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <path d="M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7z" />
      <path d="M14 2v5h5M8 13h8M8 17h6" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.42-4.04-1.42-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.08 1.83 2.82 1.3 3.5.99.11-.78.42-1.3.76-1.6-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.57A12 12 0 0 0 12 .5Z" />
    </svg>
  );
}

function PaperIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v17H6.5A2.5 2.5 0 0 1 4 17.5z" />
      <path d="M4 17.5A2.5 2.5 0 0 1 6.5 15H20M8 7h8M8 11h6" />
    </svg>
  );
}

function LinkIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <path d="M10 13a5 5 0 0 0 7.07 0l2-2a5 5 0 0 0-7.07-7.07l-1.15 1.15" />
      <path d="M14 11a5 5 0 0 0-7.07 0l-2 2a5 5 0 0 0 7.07 7.07l1.15-1.15" />
    </svg>
  );
}

function WechatIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <path d="M10.5 5.5C6.36 5.5 3 8.02 3 11.13c0 1.78 1.1 3.36 2.8 4.39L5.2 18l2.65-1.34c.84.22 1.74.34 2.68.34 4.14 0 7.5-2.52 7.5-5.63S14.64 5.5 10.5 5.5Z" />
      <path d="M15.2 12.7c3.26.26 5.8 2.25 5.8 4.67 0 1.35-.79 2.57-2.05 3.42L19.4 23l-2.1-1.12c-.66.16-1.37.25-2.1.25-2.74 0-5.05-1.23-5.73-2.9" />
      <path d="M8 10h.01M13 10h.01" />
    </svg>
  );
}
