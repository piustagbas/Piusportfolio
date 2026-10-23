"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <section id="projects" className="section-band relative px-5 py-20 sm:px-8 sm:py-28">
      <div className="relative mx-auto max-w-6xl">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-accent">
              Projects
            </p>
            <h2 className="font-display text-balance text-4xl font-bold tracking-tight text-ink sm:text-5xl">
              Selected work across product and quality.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">
              Client delivery, product tooling, and quality-minded systems.
            </p>
          </div>
        </Reveal>

        <ul className="mt-14 grid gap-8 sm:gap-9 md:grid-cols-2 md:gap-x-8 md:gap-y-10 lg:gap-x-10 lg:gap-y-12">
          {projects.map((project, index) => {
            const isExternal = Boolean(project.link);
            const href = project.link ?? "#contact";
            const featured = index === 0;

            return (
              <Reveal
                key={project.name}
                delay={Math.min(0.04 * index, 0.12)}
                as="li"
                className={featured ? "md:col-span-2 md:mb-2" : undefined}
              >
                <a
                  href={href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  className={`project-card group relative flex h-full overflow-hidden ${
                    featured ? "flex-col lg:flex-row" : "flex-col"
                  }`}
                >
                  <div
                    className={`relative overflow-hidden bg-slate ${
                      featured
                        ? "aspect-[16/10] lg:aspect-auto lg:w-[48%] lg:min-h-[300px]"
                        : "aspect-[16/10]"
                    }`}
                  >
                    <Image
                      src={project.image}
                      alt={project.imageAlt}
                      fill
                      sizes={
                        featured
                          ? "(max-width: 1024px) 100vw, 48vw"
                          : "(max-width: 768px) 100vw, 50vw"
                      }
                      className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                      priority={index === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#051d40]/45 via-transparent to-transparent" />
                    {isExternal && (
                      <span className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-[#051d40]/55 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-sm">
                        Live site
                      </span>
                    )}
                  </div>

                  <div
                    className={`relative flex flex-1 flex-col ${
                      featured ? "p-7 sm:p-8" : "p-6 sm:p-7"
                    }`}
                  >
                    <div className="mb-3 flex items-start justify-between gap-3">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                          0{index + 1}
                        </p>
                        <h3
                          className={`mt-1.5 font-display font-bold tracking-tight text-ink transition-colors group-hover:text-slate ${
                            featured ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl"
                          }`}
                        >
                          {project.name}
                        </h3>
                      </div>
                      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line bg-white/70 text-ink transition-all duration-300 group-hover:border-teal/40 group-hover:bg-teal group-hover:text-white">
                        <ArrowUpRight size={18} />
                      </span>
                    </div>

                    <p className="flex-1 text-base leading-relaxed text-ink-soft">
                      {project.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span key={tech} className="stack-chip">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <p className="mt-5 text-sm font-semibold text-slate transition-colors group-hover:text-teal-deep">
                      {isExternal ? "Open welcome page" : "Discuss this build"}
                      <span className="ml-1 inline-block transition-transform duration-300 group-hover:translate-x-0.5">
                        →
                      </span>
                    </p>
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
