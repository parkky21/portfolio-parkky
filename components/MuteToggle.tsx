"use client";

import { useSoundEnabled } from "./SoundProvider";
import { playSound } from "@/lib/sound";

export function MuteToggle() {
  const { enabled, toggle } = useSoundEnabled();

  function handleClick() {
    if (enabled) playSound("click"); // play one last click before muting
    toggle();
  }

  return (
    <button
      onClick={handleClick}
      aria-label={enabled ? "Mute sounds" : "Unmute sounds"}
      title={enabled ? "Mute sounds" : "Unmute sounds"}
      className="relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-ink/25 bg-white/60 text-base transition-all hover:scale-110 hover:border-ink/60 active:scale-95"
    >
      {enabled ? "🔊" : "🔇"}
    </button>
  );
}
