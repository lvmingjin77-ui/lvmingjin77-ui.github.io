import { useCallback, useEffect, useState } from "react";
import type { Lang } from "./locales";
import { messages } from "./locales";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { NewsSection } from "./components/NewsSection";
import { WorkBento } from "./components/WorkBento";
import { ResearchSection } from "./components/ResearchSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { SiteFooter } from "./components/SiteFooter";

const THEME_KEY = "pp-theme";
const LANG_KEY = "pp-lang";

function getInitialTheme(): "light" | "dark" {
  const saved = localStorage.getItem(THEME_KEY);
  if (saved === "light" || saved === "dark") return saved;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function getInitialLang(): Lang {
  const saved = localStorage.getItem(LANG_KEY);
  if (saved === "zh" || saved === "en") return saved;
  return navigator.language.toLowerCase().startsWith("zh") ? "zh" : "en";
}

export default function App() {
  const [theme, setTheme] = useState<"light" | "dark">(() => getInitialTheme());
  const [lang, setLang] = useState<Lang>(() => getInitialLang());
  const t = messages[lang];

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
    document.title = t.meta.title;
    let description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!description) {
      description = document.createElement("meta");
      description.name = "description";
      document.head.appendChild(description);
    }
    description.content = t.meta.description;
    localStorage.setItem(LANG_KEY, lang);
  }, [lang, t.meta.description, t.meta.title]);

  const toggleLang = useCallback(() => {
    setLang((l) => (l === "zh" ? "en" : "zh"));
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.defaultPrevented) return;
      const tag = (e.target as HTMLElement)?.tagName?.toLowerCase();
      if (tag === "input" || tag === "textarea") return;
      if (e.key === "l" || e.key === "L") toggleLang();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [toggleLang]);

  return (
    <div className="min-h-screen bg-canvas text-base text-ink">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-24 focus:z-[100] focus:border focus:border-ink focus:bg-canvas focus:px-4 focus:py-2 focus:font-mono focus:text-sm focus:uppercase focus:tracking-wider focus:text-ink"
      >
        {lang === "zh" ? "跳到主内容" : "Skip to content"}
      </a>

      <Header
        lang={lang}
        theme={theme}
        t={t}
        onToggleLang={toggleLang}
        onToggleTheme={() => setTheme((x) => (x === "dark" ? "light" : "dark"))}
      />

      <main id="main">
        <HeroSection t={t} />
        <NewsSection t={t} />
        <ResearchSection t={t} />
        <WorkBento t={t} />
        <ExperienceSection t={t} />
        <SiteFooter t={t} />
      </main>
    </div>
  );
}
