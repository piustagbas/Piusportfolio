"use client";

import { Quote } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { testimonials } from "@/lib/data";

export function Testimonials() {
  return (
    <section id="testimonials" className="relative px-5 py-20 sm:px-8 sm:py-28">
      <div className="absolute inset-0 bg-sand/70" aria-hidden />
      <div className="relative mx-auto max-w-6xl">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-accent">
              Testimonials
            </p>
            <h2 className="font-display text-balance text-4xl font-bold tracking-tight text-ink sm:text-5xl">
              What collaborators say.
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3 lg:gap-6">
          {testimonials.map((item, index) => (
            <Reveal key={item.name} delay={0.08 * index}>
              <article className="surface-card flex h-full flex-col p-6 sm:p-7">
                <span className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-teal/15 text-teal">
                  <Quote size={22} aria-hidden />
                </span>
                <p className="flex-1 text-base leading-relaxed text-ink-soft">
                  “{item.quote}”
                </p>
                <div className="mt-6 border-t border-line pt-5">
                  <p className="font-display text-lg font-bold text-ink">
                    {item.name}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-accent">{item.role}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
