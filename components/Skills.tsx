"use client";

import { motion } from "framer-motion";
import { skillGroups } from "@/lib/data";

export function Skills() {
  return (
    <section id="skills" className="relative mx-auto max-w-5xl px-5 py-24">

      {/* Section header */}
      <motion.div
        className="mb-16"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
      >
        <p className="font-hand text-sm uppercase tracking-[0.2em] text-ink/40 mb-2">
          the toolkit
        </p>
        <h2 className="font-marker text-4xl sm:text-5xl text-ink">
          Skills
        </h2>
        {/* single thin rule — no sketch wobble */}
        <div className="mt-5 h-px w-full bg-ink/12" />
      </motion.div>

      {/* Skill rows */}
      <div className="divide-y divide-ink/10">
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.label}
            className="grid grid-cols-1 gap-4 py-7 sm:grid-cols-[200px_1fr] sm:gap-8 sm:py-8"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
          >
            {/* Category label */}
            <p className="font-hand text-sm font-bold uppercase tracking-widest text-ink/40 sm:pt-0.5">
              {group.label}
            </p>

            {/* Pills */}
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-sm border border-ink/20 bg-transparent px-3 py-1 font-hand text-[15px] text-ink/80 transition-colors hover:border-ink/60 hover:text-ink"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* closing rule */}
      <div className="mt-0 h-px w-full bg-ink/12" />
    </section>
  );
}
