"use client";

import { Reveal } from "@/components/Reveal";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-accent">
              Experience
            </p>
            <h2 className="font-display text-balance text-4xl font-bold tracking-tight text-ink sm:text-5xl">
              Dual strength: delivery and quality.
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:gap-6">
          {experience.map((item, index) => (
            <Reveal key={item.title} delay={0.08 * index}>
              <article className="surface-card h-full p-6 sm:p-8">
                <div className="mb-5 flex items-center justify-between gap-3">
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
                    {item.period}
                  </p>
                  <span className="h-px flex-1 bg-line" aria-hidden />
                  <span className="font-display text-sm font-bold text-teal">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                  {item.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">
                  {item.summary}
                </p>
                <ul className="mt-6 space-y-3.5">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-3 text-base text-ink-soft">
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal shadow-[0_0_0_3px_rgba(56,182,255,0.16)]"
                        aria-hidden
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
