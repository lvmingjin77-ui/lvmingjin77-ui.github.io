import { useState } from "react";
import { PROFILE_PHOTO_SRC } from "../constants";

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
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className="flex aspect-[4/5] w-[10.5rem] shrink-0 items-center justify-center rounded-2xl border-2 border-canvas-ink/12 bg-surface font-display text-3xl font-semibold text-canvas-ink/50 dark:border-white/12 dark:bg-surface-dark dark:text-[#8f8b85] sm:w-[11.5rem]"
        aria-hidden
      >
        {initialsFrom(name)}
      </div>
    );
  }

  return (
    <img
      src={PROFILE_PHOTO_SRC}
      alt={alt}
      width={184}
      height={230}
      className="aspect-[4/5] w-[10.5rem] shrink-0 rounded-2xl border-2 border-canvas-ink/12 object-cover shadow-md dark:border-white/12 sm:w-[11.5rem]"
      onError={() => setFailed(true)}
    />
  );
}
