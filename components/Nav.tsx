"use client";

import { playSound } from "@/lib/sound";
import { profile } from "@/lib/data";
import { MuteToggle } from "./MuteToggle";

const links = [
  { href: "#path", label: "the path" },
  { href: "#projects", label: "projects" },
  { href: "#skills", label: "skills" },
  { href: "#contact", label: "say hi" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">

        {/* Logo */}
        <a
          href="#top"
          className="font-marker text-lg text-ink sm:text-xl"
          onMouseEnter={() => playSound("tick")}
          onClick={() => playSound("click")}
        >
          {profile.nickname || profile.name.split(" ")[0]}
          <span className="text-marker-blue">.</span>
        </a>

        {/* Desktop nav links — hidden on mobile */}
        <nav className="hidden items-center gap-6 sm:flex sm:gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative font-hand text-lg text-ink/80 transition-colors hover:text-ink"
              onMouseEnter={() => playSound("tick")}
              onClick={() => playSound("click")}
            >
              {l.label}
              <span className="pointer-events-none absolute -bottom-1 left-0 h-[3px] w-0 rounded-full bg-marker-blue transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <MuteToggle />
        </nav>

        {/* Mobile: mute toggle only */}
        <div className="sm:hidden">
          <MuteToggle />
        </div>
      </div>
    </header>
  );
}
