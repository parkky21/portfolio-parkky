import { profile } from "@/lib/data";

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
        <a
          href="#top"
          className="font-marker text-lg sm:text-xl text-ink"
        >
          {profile.name.split(" ")[0]}
          <span className="text-marker-blue">.</span>
        </a>

        <nav className="flex items-center gap-4 sm:gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative font-hand text-base sm:text-lg text-ink/80 hover:text-ink transition-colors"
            >
              {l.label}
              <span className="pointer-events-none absolute -bottom-1 left-0 h-[3px] w-0 rounded-full bg-marker-blue transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
