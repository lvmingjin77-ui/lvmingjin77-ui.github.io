import type { ReactNode } from "react";

type SectionHeadingProps = {
  children: ReactNode;
};

/** 左侧彩色条 + 区块主标题（替代小号 eyebrow 文案） */
export function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <div className="flex items-start gap-4 sm:gap-5">
      <span
        className="mt-[0.35em] h-12 w-1.5 shrink-0 rounded-full bg-gradient-to-b from-accent via-accent to-accent-muted sm:h-14 dark:from-accent-light dark:via-accent-light dark:to-accent/55"
        aria-hidden
      />
      <h2 className="max-w-4xl font-display text-display-lg text-canvas-ink dark:text-[#f2f1ee]">{children}</h2>
    </div>
  );
}
