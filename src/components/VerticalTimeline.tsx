import type { TimelineEntry } from "../locales";

export function VerticalTimeline({ entries }: { entries: TimelineEntry[] }) {
  return (
    <ul className="mt-4 space-y-0">
      {entries.map((e, i) => (
        <li key={`${e.period}-${e.title}`} className="relative flex gap-4 pb-6 last:pb-0">
          <div className="flex w-6 shrink-0 flex-col items-center pt-1">
            <span className="z-[1] h-3 w-3 shrink-0 rounded-full border-2 border-canvas bg-accent dark:border-canvas-ink dark:bg-accent-light" />
            {i < entries.length - 1 ? (
              <span className="mt-1 min-h-[1.5rem] w-px flex-1 bg-canvas-ink/15 dark:bg-white/12" aria-hidden />
            ) : null}
          </div>
          <div className="min-w-0 flex-1">
            <p className="font-mono text-sm font-semibold uppercase tracking-[0.1em] text-accent-muted dark:text-accent-light/90 sm:text-base">{e.period}</p>
            <p className="mt-1 font-display text-lg font-semibold leading-snug tracking-tight text-canvas-ink dark:text-[#f2f1ee] sm:text-xl">{e.title}</p>
            {e.detailBlocks && e.detailBlocks.length > 0 ? (
              <div className="mt-3 space-y-4">
                {e.detailBlocks.map((b) => (
                  <div
                    key={b.label}
                    className="rounded-r-md border-l-2 border-accent/50 bg-canvas-ink/[0.025] py-2.5 pl-3.5 pr-1 dark:border-accent-light/45 dark:bg-white/[0.03] sm:pl-4"
                  >
                    <p className="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-canvas-ink/50 dark:text-[#8f8b85] sm:text-[0.8125rem]">
                      {b.label}
                    </p>
                    <p className="mt-1.5 text-[1.02rem] leading-relaxed text-canvas-ink/76 dark:text-[#b8b4ae]">{b.text}</p>
                  </div>
                ))}
              </div>
            ) : e.detail ? (
              <p className="mt-2.5 text-[1.02rem] leading-relaxed text-canvas-ink/76 dark:text-[#b8b4ae]">{e.detail}</p>
            ) : null}
          </div>
        </li>
      ))}
    </ul>
  );
}
