"use client";

import { Reveal } from "@/components/Reveal";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-teal">
            Experience
          </p>
          <h2 className="font-display max-w-2xl text-balance text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            Dual strength: delivery and quality.
          </h2>
        </Reveal>

        <div className="mt-14 space-y-0 border-t border-line">
          {experience.map((item, index) => (
            <Reveal key={item.title} delay={0.1 * index} as="article">
              <div className="grid gap-6 border-b border-line py-10 md:grid-cols-[0.9fr_1.4fr] md:gap-12">
                <div>
                  <h3 className="font-display text-2xl font-bold text-ink sm:text-3xl">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm font-medium uppercase tracking-[0.16em] text-teal">
                    {item.period}
                  </p>
                </div>
                <div>
                  <p className="text-base leading-relaxed text-ink-soft sm:text-lg">
                    {item.summary}
                  </p>
                  <ul className="mt-5 space-y-3">
                    {item.points.map((point) => (
                      <li
                        key={point}
                        className="flex gap-3 text-base text-ink-soft"
                      >
                        <span
                          className="mt-2 h-1.5 w-1.5 shrink-0 bg-teal"
                          aria-hidden
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
