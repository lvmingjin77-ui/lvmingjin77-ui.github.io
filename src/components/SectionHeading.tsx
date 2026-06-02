import type { ReactNode } from "react";

type SectionHeadingProps = {
  children: ReactNode;
  label?: string;
};

export function SectionHeading({ children, label }: SectionHeadingProps) {
  return (
    <div className="min-w-0">
      {label ? <p className="font-mono text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-accent">{label}</p> : null}
      <h2 className="mt-1 font-display text-2xl font-semibold text-ink sm:text-[1.7rem]">{children}</h2>
    </div>
  );
}
