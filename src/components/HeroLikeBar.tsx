import { motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { LIKE_STORAGE_KEY } from "../constants";
import { decrementLikeCount, fetchLikeCount, incrementLikeCount } from "../lib/likeCounter";

type HeroLikeBarProps = {
  likeButton: string;
  unlikeButton: string;
  totalSuffix: string;
  unavailableHint: string;
};

function formatCount(count: number) {
  const locale = document.documentElement.lang.startsWith("zh") ? "zh-CN" : "en";
  return new Intl.NumberFormat(locale).format(count);
}

function readHasLiked(): boolean {
  try {
    return localStorage.getItem(LIKE_STORAGE_KEY) === "1";
  } catch {
    return false;
  }
}

function HeartIcon({ filled, className }: { filled: boolean; className?: string }) {
  return (
    <svg
      className={className ?? `h-4 w-4 ${filled ? "text-white" : "text-canvas-ink/65 dark:text-[#b5b1ab]"}`}
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.318 6.318a4.5 4.5 0 0 1 6.364 0L12 7.636l1.318-1.318a4.5 4.5 0 1 1 6.364 6.364L12 20.364l-7.682-7.682a4.5 4.5 0 0 1 0-6.364z"
      />
    </svg>
  );
}

export function HeroLikeBar({ likeButton, unlikeButton, totalSuffix, unavailableHint }: HeroLikeBarProps) {
  const reduce = useReducedMotion();
  const [count, setCount] = useState<number | null>(null);
  const [hasLiked, setHasLiked] = useState(readHasLiked);
  const [busy, setBusy] = useState(false);
  const [unavailable, setUnavailable] = useState(false);

  useEffect(() => {
    let cancelled = false;
    void (async () => {
      const value = await fetchLikeCount();
      if (cancelled) return;
      if (value === null) {
        setUnavailable(true);
        setCount(0);
      } else {
        setCount(value);
        setUnavailable(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const onToggle = useCallback(async () => {
    if (busy) return;
    setBusy(true);
    setUnavailable(false);

    const nextHasLiked = !hasLiked;
    const value = nextHasLiked ? await incrementLikeCount() : await decrementLikeCount();

    setBusy(false);

    if (value === null) {
      setUnavailable(true);
      return;
    }

    setCount(value);
    setHasLiked(nextHasLiked);
    try {
      if (nextHasLiked) {
        localStorage.setItem(LIKE_STORAGE_KEY, "1");
      } else {
        localStorage.removeItem(LIKE_STORAGE_KEY);
      }
    } catch {
      /* ignore */
    }
  }, [busy, hasLiked]);

  const actionLabel = hasLiked ? unlikeButton : likeButton;
  const displayCount = count ?? 0;

  return (
    <motion.div className="mt-6 w-full">
      <button
        type="button"
        onClick={() => void onToggle()}
        disabled={busy || (unavailable && count === null)}
        aria-pressed={hasLiked}
        aria-label={actionLabel}
        aria-busy={busy}
        className="group relative w-full overflow-hidden rounded-xl border border-canvas-ink/[0.09] bg-gradient-to-br from-white/80 via-surface/90 to-surface px-3.5 py-3 text-left shadow-[0_1px_0_rgba(20,20,24,0.05),0_8px_24px_-14px_rgba(20,20,24,0.12)] transition-[border-color,box-shadow,transform] duration-300 hover:border-accent/25 hover:shadow-[0_1px_0_rgba(67,56,202,0.08),0_12px_28px_-12px_rgba(67,56,202,0.18)] active:scale-[0.98] disabled:pointer-events-none disabled:opacity-60 dark:border-white/[0.09] dark:from-white/[0.06] dark:via-surface-dark/95 dark:to-surface-dark dark:shadow-[0_1px_0_rgba(255,255,255,0.04),0_10px_28px_-12px_rgba(0,0,0,0.55)] dark:hover:border-accent-light/25 dark:hover:shadow-[0_1px_0_rgba(165,180,252,0.1),0_14px_32px_-10px_rgba(0,0,0,0.55)]"
      >
        <span
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent opacity-70 dark:via-accent-light/35"
          aria-hidden
        />
        <span
          className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-accent/[0.09] opacity-60 blur-2xl transition-opacity duration-300 group-hover:opacity-90 dark:bg-accent-light/[0.08]"
          aria-hidden
        />

        <span className="relative flex items-center gap-3">
          <motion.span
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border shadow-sm transition-colors duration-300 ${
              hasLiked
                ? "border-accent bg-accent dark:border-accent-light dark:bg-accent"
                : "border-canvas-ink/[0.12] bg-canvas/90 group-hover:border-accent/30 group-hover:bg-accent/5 dark:border-white/[0.14] dark:bg-canvas-ink/40 dark:group-hover:border-accent-light/35 dark:group-hover:bg-accent-light/10"
            }`}
            animate={reduce ? undefined : hasLiked ? { scale: [1, 1.12, 1] } : { scale: 1 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <HeartIcon filled={hasLiked} />
          </motion.span>

          <span className="min-w-0 flex-1">
            <span className="block font-display text-[1.3125rem] font-semibold leading-none tabular-nums tracking-tight text-canvas-ink dark:text-[#ebe9e6]">
              {count === null ? "…" : formatCount(displayCount)}
            </span>
            <span className="mt-1 block text-[0.8125rem] leading-snug text-canvas-ink/55 dark:text-[#9a968f]">
              {unavailable ? unavailableHint : totalSuffix}
            </span>
          </span>
        </span>

        <span className="relative mt-2.5 flex items-center justify-center gap-1.5 border-t border-canvas-ink/[0.07] pt-2 dark:border-white/[0.07]">
          <span
            className={`h-1 w-1 shrink-0 rounded-full transition-colors ${hasLiked ? "bg-accent dark:bg-accent-light" : "bg-canvas-ink/25 dark:bg-white/20"}`}
            aria-hidden
          />
          <span
            className={`text-[0.8125rem] font-medium tracking-wide transition-colors ${
              hasLiked ? "text-accent dark:text-accent-light" : "text-canvas-ink/60 group-hover:text-accent dark:text-[#a5a19a] dark:group-hover:text-accent-light"
            }`}
          >
            {busy ? "…" : actionLabel}
          </span>
        </span>
      </button>
    </motion.div>
  );
}
