"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Quote } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { testimonials } from "@/lib/data";

export function Testimonials() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="testimonials" className="relative px-5 py-20 sm:px-8 sm:py-28">
      <div className="absolute inset-0 bg-sand/40" aria-hidden />
      <div className="relative mx-auto max-w-6xl">
        <Reveal>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-teal">
            Testimonials
          </p>
          <h2 className="font-display max-w-2xl text-balance text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            What collaborators say.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3 lg:gap-6">
          {testimonials.map((item, index) => (
            <Reveal key={item.name} delay={0.08 * index}>
              <motion.article
                whileHover={reduceMotion ? undefined : { y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
                className="flex h-full flex-col rounded-2xl border border-line bg-fog p-6 shadow-[0_10px_30px_rgba(26,43,74,0.06)] sm:p-7"
              >
                <Quote className="mb-4 text-teal" size={28} aria-hidden />
                <p className="flex-1 text-base leading-relaxed text-ink-soft">
                  “{item.quote}”
                </p>
                <div className="mt-6 border-t border-line pt-5">
                  <p className="font-display text-lg font-bold text-ink">
                    {item.name}
                  </p>
                  <p className="mt-1 text-sm font-medium text-teal">{item.role}</p>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
