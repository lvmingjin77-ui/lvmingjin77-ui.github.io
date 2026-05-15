import { motion, useReducedMotion } from "framer-motion";
import type { Messages } from "../locales";
import { resolveContactItem, resolveHeroEmailRow } from "../locales";
import { SITE_EMAIL } from "../constants";
import { HeroLikeBar } from "./HeroLikeBar";
import { ProfilePhoto } from "./ProfilePhoto";

type HeroSectionProps = {
  t: Messages;
};

export function HeroSection({ t }: HeroSectionProps) {
  const reduce = useReducedMotion();
  const contacts = t.hero.contactItems.map((c) => resolveContactItem(c, SITE_EMAIL));
  const phone = contacts[0];
  const wechat = contacts[1];
  const resume = contacts[2];
  const showLede = t.hero.lede.trim().length > 0;
  const showBlurb = t.hero.blurb.trim().length > 0;
  const showIntroBlock = showLede || showBlurb;
  const focusItems = t.hero.researchFocus.items;

  return (
    <section className="relative border-b border-canvas-ink/[0.08] bg-mesh-light pt-24 pb-14 dark:border-white/[0.08] dark:bg-mesh-dark sm:pt-28 sm:pb-16">
      <div className="pointer-events-none absolute inset-0 grain opacity-45 dark:opacity-65" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-12">
          <motion.div
            className="flex shrink-0 flex-col items-center gap-0 lg:-mt-1 lg:items-start"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ProfilePhoto name={t.hero.name} alt={t.hero.photoAlt} />
            <div
              className="mx-auto mt-7 w-[10.5rem] border-t-2 border-accent/55 pt-5 text-balance text-center sm:w-[11.5rem] dark:border-accent-light/45 lg:mx-0 lg:text-left"
              aria-label={t.hero.researchFocus.label}
            >
              <p className="font-mono text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-canvas-ink/58 dark:text-[#9a968f]">
                {t.hero.researchFocus.label}
              </p>
              <ul className="mt-3 list-none space-y-2.5">
                {focusItems.map((line) => (
                  <li
                    key={line}
                    className="font-display text-[1.0625rem] font-semibold leading-snug tracking-tight text-canvas-ink dark:text-[#ebe9e6]"
                  >
                    {line}
                  </li>
                ))}
              </ul>
              <HeroLikeBar
                likeButton={t.hero.likeBar.likeButton}
                unlikeButton={t.hero.likeBar.unlikeButton}
                totalSuffix={t.hero.likeBar.totalSuffix}
                unavailableHint={t.hero.likeBar.unavailableHint}
              />
            </div>
          </motion.div>

          <div className="min-w-0 flex-1">
            <motion.p
              className="font-mono text-sm font-medium uppercase tracking-[0.14em] text-accent-muted dark:text-accent-light/88 sm:text-[0.95rem]"
              initial={reduce ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
            >
              {t.hero.status}
            </motion.p>
            <motion.h1
              className="mt-2 font-display text-display-hero text-canvas-ink dark:text-[#f2f1ee]"
              initial={reduce ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.04 }}
            >
              {t.hero.name}
            </motion.h1>
            {showLede ? (
              <motion.p
                className="mt-4 text-pretty font-display text-2xl font-medium leading-snug tracking-tight text-canvas-ink/92 dark:text-[#e8e6e3]/95 sm:text-3xl"
                initial={reduce ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.08 }}
              >
                {t.hero.lede}
              </motion.p>
            ) : null}
            {showBlurb ? (
              <motion.p
                className="mt-4 max-w-3xl text-lg leading-relaxed text-canvas-ink/78 dark:text-[#c4c1bc]"
                initial={reduce ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.12 }}
              >
                {t.hero.blurb}
              </motion.p>
            ) : null}
            <motion.div
              className={`grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-6 lg:grid-cols-3 lg:gap-x-12 ${showIntroBlock ? "mt-3" : "mt-4"}`}
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.15 }}
            >
              {t.hero.skillGroups.map((group, i) => (
                <div
                  key={group.label}
                  className={
                    i > 0
                      ? "border-t border-canvas-ink/[0.08] pt-6 sm:border-t-0 sm:pt-0 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0 dark:border-white/[0.08]"
                      : undefined
                  }
                >
                  <p className="flex items-center gap-2.5 font-display text-[1.0625rem] font-semibold leading-none tracking-tight text-canvas-ink dark:text-[#ebe9e6]">
                    <span className="h-3.5 w-0.5 shrink-0 rounded-full bg-accent/75 dark:bg-accent-light/80" aria-hidden />
                    {group.label}
                  </p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li key={item}>
                        <span className="inline-block rounded-md border border-canvas-ink/[0.1] bg-white/50 px-2.5 py-1 font-mono text-[0.8125rem] font-medium leading-none tracking-wide text-canvas-ink/78 dark:border-white/[0.1] dark:bg-white/[0.05] dark:text-[#c4c1bc]">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>

            <motion.div
              className="mt-8 border-t border-canvas-ink/[0.1] pt-6 dark:border-white/[0.1]"
              initial={reduce ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.18 }}
            >
              <p className="font-mono text-sm font-semibold uppercase tracking-[0.12em] text-canvas-ink/62 dark:text-[#a8a49e] sm:text-[0.95rem]">
                {t.hero.contactIntro}
              </p>
              <dl className="mt-5 grid grid-cols-1 gap-x-10 gap-y-7 sm:grid-cols-2">
                <div className="min-w-0">
                  <dt className="font-mono text-sm font-semibold uppercase tracking-[0.08em] text-canvas-ink/52 dark:text-[#9a968f]">{t.hero.emailsBlock.label}</dt>
                  <dd className="mt-2 flex flex-col gap-2">
                    {t.hero.emailsBlock.items.map((row, i) => {
                      const r = resolveHeroEmailRow(row, SITE_EMAIL);
                      const openGmail = r.href.startsWith("https://");
                      return (
                        <a
                          key={i}
                          href={r.href}
                          title={openGmail ? t.contact.emailWebComposeHint : undefined}
                          target={openGmail ? "_blank" : undefined}
                          rel={openGmail ? "noopener noreferrer" : undefined}
                          className="w-fit max-w-full break-all font-mono text-base font-medium text-canvas-ink underline decoration-canvas-ink/20 underline-offset-[3px] transition hover:text-accent hover:decoration-accent/40 dark:text-[#e8e6e3] dark:decoration-white/20 dark:hover:text-accent-light dark:hover:decoration-accent-light/40"
                        >
                          {r.value}
                        </a>
                      );
                    })}
                  </dd>
                </div>
                {phone && wechat && resume ? (
                  <>
                    <div className="min-w-0">
                      <dt className="font-mono text-sm font-semibold uppercase tracking-[0.08em] text-canvas-ink/52 dark:text-[#9a968f]">{phone.label}</dt>
                      <dd className="mt-2 text-lg font-medium text-canvas-ink dark:text-[#e8e6e3]">
                        {phone.href ? (
                          <a href={phone.href} className="underline decoration-canvas-ink/20 underline-offset-4 transition hover:text-accent hover:decoration-accent/40 dark:decoration-white/20 dark:hover:text-accent-light dark:hover:decoration-accent-light/40">
                            {phone.value}
                          </a>
                        ) : (
                          <span>{phone.value}</span>
                        )}
                      </dd>
                    </div>
                    <div className="min-w-0">
                      <dt className="font-mono text-sm font-semibold uppercase tracking-[0.08em] text-canvas-ink/52 dark:text-[#9a968f]">{wechat.label}</dt>
                      <dd className="mt-2 text-lg font-medium text-canvas-ink dark:text-[#e8e6e3]">
                        <span>{wechat.value}</span>
                      </dd>
                    </div>
                    <div className="min-w-0">
                      <dt className="font-mono text-sm font-semibold uppercase tracking-[0.08em] text-canvas-ink/52 dark:text-[#9a968f]">{resume.label}</dt>
                      <dd className="mt-2 text-lg font-medium text-canvas-ink dark:text-[#e8e6e3]">
                        {resume.href ? (
                          <a href={resume.href} className="underline decoration-canvas-ink/20 underline-offset-4 transition hover:text-accent hover:decoration-accent/40 dark:decoration-white/20 dark:hover:text-accent-light dark:hover:decoration-accent-light/40">
                            {resume.value}
                          </a>
                        ) : (
                          <span>{resume.value}</span>
                        )}
                      </dd>
                    </div>
                  </>
                ) : null}
              </dl>
            </motion.div>

            <motion.p
              className="mt-8 border-l-2 border-accent pl-4 text-lg leading-relaxed text-canvas-ink/72 dark:border-accent-light dark:text-[#a8a49e]"
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
