"use client";

import { Reveal } from "@/components/Reveal";

export function About() {
  return (
    <section id="about" className="relative px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-16">
        <Reveal>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-teal">
            About
          </p>
          <h2 className="font-display text-balance text-4xl font-bold tracking-tight text-ink sm:text-5xl lg:text-6xl">
            Building software that ships clean.
          </h2>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="space-y-5 text-base leading-relaxed text-ink-soft sm:text-lg">
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
