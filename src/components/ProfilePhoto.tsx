import { useEffect, useState } from "react";
import { PROFILE_PHOTO_SLIDES } from "../constants";

type ProfilePhotoProps = {
  name: string;
  alt: string;
};

function initialsFrom(name: string) {
  const t = name.trim();
  if (/[\u4e00-\u9fff]/.test(t)) {
    const s = t.replace(/\s/g, "");
    return s.slice(0, 2) || "?";
  }
  const parts = t.split(/\s+/);
  if (parts.length >= 2) return (parts[0]![0]! + parts[parts.length - 1]![0]!).toUpperCase();
  return t.slice(0, 2).toUpperCase() || "?";
}

export function ProfilePhoto({ name, alt }: ProfilePhotoProps) {
  const [index, setIndex] = useState(0);
  const [failed, setFailed] = useState(false);
  const slides = PROFILE_PHOTO_SLIDES;

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 4200);
    return () => window.clearInterval(timer);
  }, [slides.length]);

  if (failed) {
    return (
      <div
        className="flex aspect-[4/5] w-full shrink-0 items-center justify-center rounded-lg border border-line bg-surface font-display text-3xl font-semibold text-muted"
        aria-hidden
      >
        {initialsFrom(name)}
      </div>
    );
  }

  const current = slides[index] ?? slides[0]!;

  return (
    <figure className="w-full">
      <div className="group relative overflow-hidden rounded-lg border border-line bg-canvas">
        <img
          src={current}
          alt={alt}
          width={320}
          height={400}
          className="aspect-[4/5] w-full object-cover"
          onError={() => setFailed(true)}
        />
        <div className="absolute inset-x-2 bottom-2 flex items-center justify-between gap-2 opacity-0 transition group-hover:opacity-100">
          <button
            type="button"
            className="rounded-full bg-white/88 px-2 py-1 text-xs font-semibold text-ink shadow-sm"
            aria-label="Previous profile photo"
            onClick={() => setIndex((i) => (i - 1 + slides.length) % slides.length)}
          >
            Prev
          </button>
          <button
            type="button"
            className="rounded-full bg-white/88 px-2 py-1 text-xs font-semibold text-ink shadow-sm"
            aria-label="Next profile photo"
            onClick={() => setIndex((i) => (i + 1) % slides.length)}
          >
            Next
          </button>
        </div>
      </div>
      <div className="mt-2 flex justify-center gap-1.5" aria-hidden>
        {slides.map((src, i) => (
          <span key={src} className={`h-1.5 w-1.5 rounded-full ${i === index ? "bg-accent" : "bg-line"}`} />
        ))}
      </div>
    </figure>
  );
}
