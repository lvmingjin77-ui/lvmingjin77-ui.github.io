import { useState } from "react";
import type { Lang, Messages } from "../locales";

type HeaderProps = {
  lang: Lang;
  theme: "light" | "dark";
  t: Messages;
  onToggleLang: () => void;
  onToggleTheme: () => void;
};

export function Header({ lang, theme, t, onToggleLang, onToggleTheme }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#experience", label: t.nav.experience },
    { href: "#work", label: t.nav.work },
    { href: "#research", label: t.nav.research },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <>
      <header className="print:hidden fixed left-0 right-0 top-0 z-50 border-b border-canvas-ink/[0.07] bg-canvas/90 backdrop-blur-xl dark:border-white/[0.07] dark:bg-canvas-ink/90">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <a href="#" className="flex items-center gap-2 outline-offset-4">
            <span className="flex h-8 w-8 items-center justify-center border border-canvas-ink/12 bg-surface font-mono text-[13px] font-bold leading-none tracking-tight text-canvas-ink dark:border-white/12 dark:bg-surface-dark dark:text-[#e8e6e3]">
              M
            </span>
          </a>

          <nav className="hidden items-center gap-8 font-mono text-sm font-semibold uppercase tracking-[0.12em] text-canvas-ink/58 dark:text-[#9a968f] lg:flex">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="outline-offset-4 transition-colors hover:text-accent dark:hover:text-accent-light">
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onToggleTheme}
              className="rounded border border-canvas-ink/12 p-2 text-canvas-ink transition-colors hover:border-accent/35 hover:text-accent dark:border-white/12 dark:text-[#e8e6e3] dark:hover:border-accent-light/40 dark:hover:text-accent-light"
              aria-label={theme === "dark" ? "Light mode" : "Dark mode"}
            >
              {theme === "dark" ? <SunIcon /> : <MoonIcon />}
            </button>
            <button
              type="button"
              onClick={onToggleLang}
              className="rounded border border-canvas-ink/12 px-3 py-2 font-mono text-sm font-semibold uppercase tracking-wider text-canvas-ink dark:border-white/12 dark:text-[#e8e6e3]"
            >
              {lang === "zh" ? "EN" : "中文"}
            </button>
            <button
              type="button"
              className="rounded border border-canvas-ink/12 p-2 text-canvas-ink lg:hidden dark:border-white/12 dark:text-[#e8e6e3]"
              aria-label="Menu"
              onClick={() => setOpen(true)}
            >
              <MenuIcon />
            </button>
          </div>
        </div>
      </header>

      {open ? (
        <div className="print:hidden fixed inset-0 z-[60] bg-canvas dark:bg-canvas-ink lg:hidden">
          <div className="flex justify-end p-4">
            <button type="button" className="border border-canvas-ink/12 p-2 dark:border-white/12" aria-label="Close" onClick={() => setOpen(false)}>
              <CloseIcon />
            </button>
          </div>
          <nav className="flex flex-col gap-1 px-8 pt-2 font-display text-2xl font-medium tracking-tight text-canvas-ink dark:text-[#f2f1ee]">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="border-b border-canvas-ink/[0.08] py-4 dark:border-white/[0.08]">
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      ) : null}
    </>
  );
}

function SunIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <circle cx="12" cy="12" r="3.5" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}
