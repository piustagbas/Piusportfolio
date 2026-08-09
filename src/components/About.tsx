"use client";

import { Reveal } from "@/components/Reveal";

export function About() {
  return (
    <section id="about" className="relative px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
        <Reveal>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-accent">
            About
          </p>
          <h2 className="font-display text-balance text-4xl font-bold tracking-tight text-ink sm:text-5xl lg:text-6xl">
            Building software that ships clean.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="surface-card space-y-5 p-6 text-base leading-relaxed text-ink-soft sm:p-8 sm:text-lg">
            <p>
              I am Pius Lucky — a fullstack developer with hands-on software
              quality assurance experience. I care about both crafting features
              and verifying they behave correctly under real use.
            </p>
            <p>
              On the engineering side I work across React and Next.js for the
              web, React Native and Expo for mobile, and Java, Spring Boot, C#,
              and Node.js on the backend. On the quality side I combine careful
              manual testing with automation so regressions are caught before
              users ever see them.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
