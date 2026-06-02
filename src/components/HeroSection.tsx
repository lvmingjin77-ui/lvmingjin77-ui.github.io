import { motion, useReducedMotion } from "framer-motion";
import type { Messages } from "../locales";
import { resolveHeroEmailRow, resolveProfileLink } from "../locales";
import { SITE_EMAIL } from "../constants";
import { ProfilePhoto } from "./ProfilePhoto";

type HeroSectionProps = {
  t: Messages;
};

export function HeroSection({ t }: HeroSectionProps) {
  const reduce = useReducedMotion();
  const profileLinks = t.hero.profileLinks.map((link) => resolveProfileLink(link, SITE_EMAIL));
  const emails = t.hero.emailsBlock.items.map((row) => resolveHeroEmailRow(row, SITE_EMAIL));

  return (
    <section id="about" className="border-b border-line bg-canvas pt-24 pb-12 sm:pt-28 sm:pb-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-[14rem_1fr] lg:gap-12">
          <motion.aside
            className="max-w-[17rem] lg:max-w-none"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.42 }}
          >
            <ProfilePhoto name={t.hero.name} alt={t.hero.photoAlt} />

            <div className="mt-5 border-t border-line pt-5">
              <p className="font-display text-xl font-semibold text-ink">{t.hero.name}</p>
              <p className="mt-1 text-sm leading-relaxed text-muted">{t.hero.role}</p>
              <p className="mt-3 text-sm leading-relaxed text-ink/72">{t.hero.status}</p>
            </div>

            <dl className="mt-5 space-y-2.5 text-sm">
              {profileLinks.map((link) => {
                const external = link.href.startsWith("https://");
                return (
                  <div key={`${link.label}-${link.href}`} className="grid grid-cols-[4rem_1fr] gap-3">
                    <dt className="font-mono text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-muted">{link.label}</dt>
                    <dd className="min-w-0">
                      <a
                        href={link.href}
                        target={external ? "_blank" : undefined}
                        rel={external ? "noopener noreferrer" : undefined}
                        className="break-words font-medium text-ink underline decoration-line underline-offset-4 transition hover:text-accent hover:decoration-accent/40"
                      >
                        {link.value}
                      </a>
                    </dd>
                  </div>
                );
              })}
            </dl>
          </motion.aside>

          <div className="min-w-0">
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.46, delay: 0.04 }}
            >
              <p className="font-mono text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-accent">
                {t.hero.researchFocus.label}
              </p>
              <h1 className="mt-3 max-w-4xl font-display text-display-hero font-semibold text-ink">{t.hero.name}</h1>
              <p className="mt-4 max-w-3xl text-xl font-medium leading-relaxed text-ink sm:text-2xl">{t.hero.lede}</p>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-ink/78">{t.hero.blurb}</p>
            </motion.div>

            <motion.div
              className="mt-7 grid gap-5 border-y border-line py-5 md:grid-cols-3"
              initial={reduce ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.42, delay: 0.1 }}
            >
              {t.hero.skillGroups.map((group) => (
                <section key={group.label} className="min-w-0">
                  <h2 className="font-mono text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-muted">{group.label}</h2>
                  <ul className="mt-2 flex flex-wrap gap-1.5">
                    {group.items.map((item) => (
                      <li key={item} className="rounded border border-line bg-surface px-2 py-1 font-mono text-[0.78rem] leading-none text-ink/78">
                        {item}
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </motion.div>

            <motion.div
              className="mt-6 grid gap-6 lg:grid-cols-[1fr_16rem]"
              initial={reduce ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.42, delay: 0.16 }}
            >
              <section>
                <h2 className="font-mono text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-muted">Highlights</h2>
                <ul className="mt-3 space-y-2.5">
                  {t.hero.highlights.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-relaxed text-ink/80">
                      <span className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <aside className="border-l-0 border-line lg:border-l lg:pl-6">
                <h2 className="font-mono text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-muted">{t.hero.contactIntro}</h2>
                <div className="mt-3 space-y-3 text-sm">
                  {emails.map((email) => (
                    <a
                      key={email.value}
                      href={email.href}
                      target={email.href.startsWith("https://") ? "_blank" : undefined}
                      rel={email.href.startsWith("https://") ? "noopener noreferrer" : undefined}
                      className="block break-all font-mono text-ink underline decoration-line underline-offset-4 transition hover:text-accent hover:decoration-accent/40"
                    >
                      {email.value}
                    </a>
                  ))}
                </div>
                <dl className="mt-5 grid grid-cols-1 gap-3">
                  {t.hero.quickFacts.map((fact) => (
                    <div key={fact.label} className="border-t border-line pt-2">
                      <dt className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-muted">{fact.label}</dt>
                      <dd className="mt-1 text-sm font-medium text-ink">{fact.value}</dd>
                    </div>
                  ))}
                </dl>
              </aside>
            </motion.div>

            <motion.p
              className="mt-6 border-l-2 border-accent pl-4 text-sm leading-relaxed text-ink/74"
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.22 }}
            >
              {t.hero.availability}
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
