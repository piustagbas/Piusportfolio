"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { projects } from "@/lib/data";

export function Projects() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="projects" className="relative px-5 py-20 sm:px-8 sm:py-28">
      <div className="absolute inset-0 bg-sand/50" aria-hidden />
      <div className="relative mx-auto max-w-6xl">
        <Reveal>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-teal">
            Projects
          </p>
          <h2 className="font-display max-w-2xl text-balance text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            Selected work across product and quality.
          </h2>
        </Reveal>

        <ul className="mt-12 divide-y divide-line border-y border-line">
          {projects.map((project, index) => {
            const isExternal = Boolean(project.link);
            const href = project.link ?? "#contact";

            return (
              <Reveal key={project.name} delay={0.08 * index} as="li">
                <motion.a
                  href={href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  whileHover={reduceMotion ? undefined : { x: 6 }}
                  transition={{ type: "spring", stiffness: 320, damping: 28 }}
                  className="group grid gap-4 py-8 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)_auto] md:items-center md:gap-8"
                >
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-soft/70">
                      0{index + 1}
                    </p>
                    <h3 className="mt-2 font-display text-2xl font-bold text-ink transition-colors group-hover:text-teal sm:text-3xl">
                      {project.name}
                    </h3>
                    {isExternal && (
                      <p className="mt-2 text-sm font-medium text-teal">
                        Live site · View project
                      </p>
                    )}
                  </div>
                  <div>
                    <p className="text-base leading-relaxed text-ink-soft">
                      {project.description}
                    </p>
                    <p className="mt-3 text-sm font-medium text-slate">
                      {project.stack.join(" · ")}
                    </p>
                  </div>
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line text-ink transition-colors group-hover:border-teal group-hover:bg-teal group-hover:text-white">
                    <ArrowUpRight size={18} />
                  </span>
                </motion.a>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
