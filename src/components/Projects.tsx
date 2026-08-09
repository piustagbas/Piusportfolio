"use client";

import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <section id="projects" className="relative px-5 py-20 sm:px-8 sm:py-28">
      <div className="relative mx-auto max-w-6xl">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-accent">
              Projects
            </p>
            <h2 className="font-display text-balance text-4xl font-bold tracking-tight text-ink sm:text-5xl">
              Selected work across product and quality.
            </h2>
          </div>
        </Reveal>

        <ul className="mt-12 grid gap-5 md:grid-cols-2 lg:gap-6">
          {projects.map((project, index) => {
            const isExternal = Boolean(project.link);
            const href = project.link ?? "#contact";

            return (
              <Reveal key={project.name} delay={0.06 * index} as="li">
                <a
                  href={href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  className="surface-card group relative flex h-full flex-col overflow-hidden"
                >
                  <div className="h-36 bg-gradient-to-br from-slate via-[#123a66] to-teal/80 sm:h-40" />
                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <div className="mb-3 flex items-start justify-between gap-3">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                          0{index + 1}
                        </p>
                        <h3 className="mt-2 font-display text-2xl font-bold text-ink transition-colors group-hover:text-slate">
                          {project.name}
                        </h3>
                      </div>
                      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sand text-ink transition-colors group-hover:bg-teal group-hover:text-white">
                        <ArrowUpRight size={18} />
                      </span>
                    </div>
                    <p className="flex-1 text-base leading-relaxed text-ink-soft">
                      {project.description}
                    </p>
                    <p className="mt-5 text-sm font-semibold text-slate">
                      {project.stack.join(" · ")}
                    </p>
                    {isExternal && (
                      <p className="mt-3 text-sm font-semibold text-teal">
                        Live site · Open project
                      </p>
                    )}
                  </div>
                </a>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
