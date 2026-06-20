"use client";

import { motion } from "framer-motion";
import { openSource, blogs } from "@/lib/data";
import { ScribbleUnderline } from "./Doodles";

export function Extras() {
  return (
    <section className="relative mx-auto max-w-5xl px-5 py-20">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        {/* Open source */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="relative mb-8 inline-block font-marker text-2xl sm:text-3xl">
            Open Source
            <ScribbleUnderline
              className="absolute -bottom-3 left-0 h-4 w-full"
              color="var(--color-marker-blue)"
            />
          </h3>
          <ul className="space-y-4">
            {openSource.map((o, i) => (
              <li
                key={i}
                className="flex gap-3 font-hand text-lg text-ink/85"
              >
                <span className="text-marker-blue" aria-hidden>
                  ➜
                </span>
                <span>{o}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Blogs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h3 className="relative mb-8 inline-block font-marker text-2xl sm:text-3xl">
            From My Notebook
            <ScribbleUnderline
              className="absolute -bottom-3 left-0 h-4 w-full"
              color="var(--color-marker-red)"
            />
          </h3>
          <ul className="space-y-4">
            {blogs.map((b, i) => (
              <li key={i}>
                <a
                  href={b.link ?? "#"}
                  className="group flex items-start gap-3 font-hand text-lg text-ink/85 hover:text-ink"
                >
                  <span className="text-marker-red" aria-hidden>
                    ✎
                  </span>
                  <span className="underline decoration-marker-red/40 decoration-2 underline-offset-4 group-hover:decoration-marker-red">
                    {b.title}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
