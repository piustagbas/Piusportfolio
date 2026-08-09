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
  { title: "Frontend", items: skills.frontend },
  { title: "Mobile", items: skills.mobile },
  { title: "Backend", items: skills.backend },
  { title: "Quality Assurance", items: skills.quality },
  { title: "Tooling", items: skills.tools },
];

export function Skills() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="skills" className="relative px-5 py-20 sm:px-8 sm:py-28">
      <div className="relative mx-auto max-w-6xl">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-accent">
              Skills
            </p>
            <h2 className="font-display text-balance text-4xl font-bold tracking-tight text-ink sm:text-5xl">
              Stack that spans build and verify.
            </h2>
          </div>
        </Reveal>

        <div className="mt-14 space-y-12">
          {groups.map((group, groupIndex) => (
            <Reveal key={group.title} delay={0.05 * groupIndex}>
              <div>
                <h3 className="mb-5 text-center font-display text-xl font-bold text-ink sm:text-left sm:text-2xl">
                  {group.title}
                </h3>
                <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                  {group.items.map((item, itemIndex) => {
                    const Icon = skillIcons[item] ?? Code2;

                    return (
                      <motion.li
                        key={item}
                        initial={reduceMotion ? false : { opacity: 0.001, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.05, margin: "40px 0px" }}
                        transition={{
                          duration: 0.4,
                          delay: Math.min(0.04 * itemIndex, 0.2),
                          ease: [0.22, 1, 0.36, 1],
                        }}
                      >
                        <div className="surface-card group flex h-full min-h-[8.5rem] flex-col items-center justify-center px-4 py-6 text-center">
                          <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-sand text-slate transition-colors duration-300 group-hover:bg-teal group-hover:text-white">
                            <Icon size={22} />
                          </span>
                          <span className="font-display text-sm font-semibold text-ink sm:text-base">
                            {item}
                          </span>
                        </div>
                      </motion.li>
                    );
                  })}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
