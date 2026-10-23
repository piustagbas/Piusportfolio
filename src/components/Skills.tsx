"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Braces,
  Bug,
  Code2,
  Database,
  FileCode2,
  GitBranch,
  Globe,
  Layers,
  Layout,
  MonitorSmartphone,
  Network,
  Server,
  ShieldCheck,
  Smartphone,
  SquareTerminal,
  TestTubes,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { skills } from "@/lib/data";

const skillIcons: Record<string, LucideIcon> = {
  React: Code2,
  "Next.js": Layers,
  TypeScript: FileCode2,
  "HTML/CSS": Layout,
  "Responsive UI": MonitorSmartphone,
  "React Native": Smartphone,
  Expo: Layers,
  "Cross-platform Apps": MonitorSmartphone,
  "Mobile UI": Smartphone,
  Java: Braces,
  "Spring Boot": Server,
  "C#": SquareTerminal,
  "Node.js": Network,
  "REST APIs": Globe,
  "Manual Testing": Bug,
  "Test Automation": TestTubes,
  Selenium: ShieldCheck,
  "API Testing": Network,
  "Test Planning": Workflow,
  "Regression Suites": ShieldCheck,
  Git: GitBranch,
  Postman: Globe,
  "CI/CD": Workflow,
  SQL: Database,
  "Agile / Scrum": Layers,
};

const groups = [
  {
    title: "Frontend",
    blurb: "Interfaces that feel fast and clear.",
    items: skills.frontend,
  },
  {
    title: "Mobile",
    blurb: "One codebase, native polish.",
    items: skills.mobile,
  },
  {
    title: "Backend",
    blurb: "APIs built for real traffic.",
    items: skills.backend,
  },
  {
    title: "Quality Assurance",
    blurb: "Catch issues before users do.",
    items: skills.quality,
  },
  {
    title: "Tooling",
    blurb: "Ship with a steady process.",
    items: skills.tools,
  },
];

export function Skills() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="skills" className="section-band relative px-5 py-20 sm:px-8 sm:py-28">
      <div className="relative mx-auto max-w-6xl">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-accent">
              Skills
            </p>
            <h2 className="font-display text-balance text-4xl font-bold tracking-tight text-ink sm:text-5xl">
              Stack that spans build and verify.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">
              From product UI to APIs and test coverage — one coherent toolkit.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {groups.map((group, groupIndex) => (
            <Reveal key={group.title} delay={0.05 * groupIndex}>
              <article className="skill-panel group flex h-full flex-col">
                <div className="mb-5 flex items-start justify-between gap-3 border-b border-line pb-4">
                  <div>
                    <h3 className="font-display text-xl font-bold tracking-tight text-ink sm:text-2xl">
                      {group.title}
                    </h3>
                    <p className="mt-1.5 text-sm text-ink-soft">{group.blurb}</p>
                  </div>
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-teal shadow-[0_0_0_4px_rgba(56,182,255,0.18)]" />
                </div>

                <ul className="flex flex-wrap gap-2.5">
                  {group.items.map((item, itemIndex) => {
                    const Icon = skillIcons[item] ?? Code2;

                    return (
                      <motion.li
                        key={item}
                        initial={reduceMotion ? false : { opacity: 0.001, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.05, margin: "40px 0px" }}
                        transition={{
                          duration: 0.35,
                          delay: Math.min(0.03 * itemIndex, 0.18),
                          ease: [0.22, 1, 0.36, 1],
                        }}
                      >
                        <span className="skill-chip">
                          <Icon size={15} strokeWidth={2.1} aria-hidden />
                          {item}
                        </span>
                      </motion.li>
                    );
                  })}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
