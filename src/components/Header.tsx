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
    { href: "#about", label: t.nav.about },
    { href: "#research", label: t.nav.research },
    { href: "#work", label: t.nav.work },
    { href: "#experience", label: t.nav.experience },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <>
      <header className="print:hidden fixed left-0 right-0 top-0 z-50 border-b border-line bg-canvas/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <a href="#about" className="flex min-w-0 items-baseline gap-2 outline-offset-4">
            <span className="font-display text-base font-semibold text-ink">Mingjin Lü</span>
            <span className="hidden font-mono text-[0.68rem] uppercase tracking-[0.14em] text-muted sm:inline">Academic Homepage</span>
          </a>

          <nav className="hidden items-center gap-6 font-mono text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-muted lg:flex">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="outline-offset-4 transition hover:text-accent">
                {l.label}
              </a>
            ))}
            <a href="/简历-吕明锦.pdf" className="rounded border border-accent/25 px-2.5 py-1.5 text-accent transition hover:border-accent hover:bg-accent/5">
              {t.nav.cv}
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onToggleTheme}
              className="rounded border border-line p-2 text-ink transition hover:border-accent/35 hover:text-accent"
              aria-label={theme === "dark" ? "Light mode" : "Dark mode"}
            >
              {theme === "dark" ? <SunIcon /> : <MoonIcon />}
            </button>
            <button
              type="button"
              onClick={onToggleLang}
              className="rounded border border-line px-3 py-2 font-mono text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-ink transition hover:border-accent/35 hover:text-accent"
            >
              {lang === "zh" ? "EN" : "中文"}
            </button>
            <button
              type="button"
              className="rounded border border-line p-2 text-ink lg:hidden"
              aria-label="Menu"
              onClick={() => setOpen(true)}
            >
              <MenuIcon />
            </button>
          </div>
        </div>
      </header>

      {open ? (
        <div className="print:hidden fixed inset-0 z-[60] bg-canvas lg:hidden">
          <div className="flex items-center justify-between border-b border-line px-4 py-3">
            <span className="font-display text-base font-semibold text-ink">Mingjin Lü</span>
            <button type="button" className="rounded border border-line p-2 text-ink" aria-label="Close" onClick={() => setOpen(false)}>
              <CloseIcon />
            </button>
          </div>
          <nav className="flex flex-col px-6 pt-3 font-display text-2xl font-semibold text-ink">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="border-b border-line py-4">
                {l.label}
              </a>
            ))}
            <a href="/简历-吕明锦.pdf" onClick={() => setOpen(false)} className="border-b border-line py-4 text-accent">
              {t.nav.cv}
            </a>
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
