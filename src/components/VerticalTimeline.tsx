import type { TimelineEntry } from "../locales";

export function VerticalTimeline({ entries }: { entries: TimelineEntry[] }) {
  return (
    <ol className="mt-4 space-y-4">
      {entries.map((e) => (
        <li key={`${e.period}-${e.title}`} className="grid gap-2 sm:grid-cols-[7.5rem_1fr] sm:gap-4">
          <time className="font-mono text-[0.78rem] font-semibold leading-relaxed text-accent">{e.period}</time>
          <div className="min-w-0">
            <p className="font-display text-base font-semibold leading-snug text-ink">{e.title}</p>
            {e.detailBlocks && e.detailBlocks.length > 0 ? (
              <dl className="mt-3 grid gap-2">
                {e.detailBlocks.map((b) => (
                  <div key={b.label} className="grid gap-1 rounded-md border border-line bg-canvas px-3 py-2 sm:grid-cols-[4.5rem_1fr]">
                    <dt className="font-mono text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-muted">{b.label}</dt>
                    <dd className="text-sm leading-relaxed text-ink/76">{b.text}</dd>
                  </div>
                ))}
              </dl>
            ) : e.detail ? (
              <p className="mt-2 text-sm leading-relaxed text-ink/76">{e.detail}</p>
            ) : null}
          </div>
        </li>
      ))}
    </ol>
  );
}
