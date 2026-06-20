"use client";

import { motion } from "framer-motion";
import { skillGroups } from "@/lib/data";
import { ScribbleUnderline } from "./Doodles";

const accents = [
  "var(--color-marker-blue)",
  "var(--color-marker-green)",
  "var(--color-marker-orange)",
  "var(--color-marker-purple)",
  "var(--color-marker-red)",
  "var(--color-marker-blue)",
];

export function Skills() {
  return (
    <section id="skills" className="relative mx-auto max-w-6xl px-5 py-24">
      <div className="mb-16 text-center">
        <h2 className="relative inline-block font-marker text-4xl sm:text-5xl">
          My Toolbox
          <ScribbleUnderline
            className="absolute -bottom-4 left-0 h-5 w-full"
            color="var(--color-marker-green)"
          />
        </h2>
        <p className="mx-auto mt-8 max-w-lg font-hand text-lg text-ink/70">
          The pens, markers &amp; highlighters I reach for.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {skillGroups.map((group, i) => {
          const accent = accents[i % accents.length];
          return (
            <motion.div
              key={group.label}
              className="relative p-6"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: (i % 2) * 0.08 }}
            >
              <svg
                className="sketch pointer-events-none absolute inset-0 h-full w-full"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                aria-hidden
              >
                <rect
                  x="2"
                  y="2"
                  width="96"
                  height="96"
                  rx="3"
                  fill="#ffffff"
                  stroke={accent}
                  strokeWidth="2.5"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>

              <div className="relative">
                <h3
                  className="mb-4 font-marker text-xl"
                  style={{ color: accent }}
                >
                  {group.label}
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border-2 px-3 py-1 font-hand text-sm font-bold text-ink"
                      style={{ borderColor: accent }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
