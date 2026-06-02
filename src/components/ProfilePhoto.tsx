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
        className="flex aspect-[4/5] w-44 shrink-0 items-center justify-center rounded-lg border border-line bg-surface font-display text-3xl font-semibold text-muted sm:w-48"
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
      className="aspect-[4/5] w-44 shrink-0 rounded-lg border border-line object-cover shadow-sm sm:w-48"
      onError={() => setFailed(true)}
    />
  );
}
