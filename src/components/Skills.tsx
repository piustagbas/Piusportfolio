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

const skillMeta: Record<
  string,
  { icon: LucideIcon; tone: string; glow: string }
> = {
  React: {
    icon: Code2,
    tone: "from-[#60a5fa]/30 via-white to-[#2563eb]/12",
    glow: "hover:shadow-[0_16px_36px_rgba(37,99,235,0.28)]",
  },
  "Next.js": {
    icon: Layers,
    tone: "from-[#0f172a]/12 via-white to-[#2563eb]/15",
    glow: "hover:shadow-[0_16px_36px_rgba(15,23,42,0.18)]",
  },
  TypeScript: {
    icon: FileCode2,
    tone: "from-[#3178c6]/25 via-white to-[#2563eb]/12",
    glow: "hover:shadow-[0_16px_36px_rgba(49,120,198,0.25)]",
  },
  "HTML/CSS": {
    icon: Layout,
    tone: "from-[#e34f26]/18 via-white to-[#2563eb]/12",
    glow: "hover:shadow-[0_16px_36px_rgba(227,79,38,0.2)]",
  },
  "Responsive UI": {
    icon: MonitorSmartphone,
    tone: "from-[#2563eb]/22 via-white to-[#93c5fd]/20",
    glow: "hover:shadow-[0_16px_36px_rgba(37,99,235,0.28)]",
  },
  "React Native": {
    icon: Smartphone,
    tone: "from-[#61dafb]/28 via-white to-[#2563eb]/14",
    glow: "hover:shadow-[0_16px_36px_rgba(97,218,251,0.28)]",
  },
  Expo: {
    icon: Layers,
    tone: "from-[#000020]/10 via-white to-[#2563eb]/14",
    glow: "hover:shadow-[0_16px_36px_rgba(15,23,42,0.18)]",
  },
  "Cross-platform Apps": {
    icon: MonitorSmartphone,
    tone: "from-[#22d3ee]/20 via-white to-[#2563eb]/12",
    glow: "hover:shadow-[0_16px_36px_rgba(34,211,238,0.24)]",
  },
  "Mobile UI": {
    icon: Smartphone,
    tone: "from-[#818cf8]/22 via-white to-[#2563eb]/12",
    glow: "hover:shadow-[0_16px_36px_rgba(129,140,248,0.24)]",
  },
  Java: {
    icon: Braces,
    tone: "from-[#f89820]/20 via-white to-[#1d4ed8]/12",
    glow: "hover:shadow-[0_16px_36px_rgba(248,152,32,0.22)]",
  },
  "Spring Boot": {
    icon: Server,
    tone: "from-[#6db33f]/20 via-white to-[#2563eb]/10",
    glow: "hover:shadow-[0_16px_36px_rgba(109,179,63,0.24)]",
  },
  "C#": {
    icon: SquareTerminal,
    tone: "from-[#68217a]/16 via-white to-[#2563eb]/12",
    glow: "hover:shadow-[0_16px_36px_rgba(104,33,122,0.18)]",
  },
  "Node.js": {
    icon: Network,
    tone: "from-[#68a063]/22 via-white to-[#2563eb]/10",
    glow: "hover:shadow-[0_16px_36px_rgba(104,160,99,0.24)]",
  },
  "REST APIs": {
    icon: Globe,
    tone: "from-[#2563eb]/22 via-white to-[#93c5fd]/18",
    glow: "hover:shadow-[0_16px_36px_rgba(37,99,235,0.28)]",
  },
  "Manual Testing": {
    icon: Bug,
    tone: "from-[#f59e0b]/18 via-white to-[#2563eb]/10",
    glow: "hover:shadow-[0_16px_36px_rgba(245,158,11,0.22)]",
  },
  "Test Automation": {
    icon: TestTubes,
    tone: "from-[#22c55e]/18 via-white to-[#2563eb]/12",
    glow: "hover:shadow-[0_16px_36px_rgba(34,197,94,0.22)]",
  },
  Selenium: {
    icon: ShieldCheck,
    tone: "from-[#43b02a]/20 via-white to-[#1e3a8a]/10",
    glow: "hover:shadow-[0_16px_36px_rgba(67,176,42,0.22)]",
  },
  "API Testing": {
    icon: Network,
    tone: "from-[#ff6c37]/18 via-white to-[#2563eb]/12",
    glow: "hover:shadow-[0_16px_36px_rgba(255,108,55,0.22)]",
  },
  "Test Planning": {
    icon: Workflow,
    tone: "from-[#2563eb]/20 via-white to-[#a5b4fc]/16",
    glow: "hover:shadow-[0_16px_36px_rgba(37,99,235,0.26)]",
  },
  "Regression Suites": {
    icon: ShieldCheck,
    tone: "from-[#1d4ed8]/20 via-white to-[#93c5fd]/16",
    glow: "hover:shadow-[0_16px_36px_rgba(29,78,216,0.24)]",
  },
  Git: {
    icon: GitBranch,
    tone: "from-[#f05033]/18 via-white to-[#2563eb]/10",
    glow: "hover:shadow-[0_16px_36px_rgba(240,80,51,0.2)]",
  },
  Postman: {
    icon: Globe,
    tone: "from-[#ff6c37]/20 via-white to-[#2563eb]/10",
    glow: "hover:shadow-[0_16px_36px_rgba(255,108,55,0.22)]",
  },
  "CI/CD": {
    icon: Workflow,
    tone: "from-[#2563eb]/22 via-white to-[#60a5fa]/16",
    glow: "hover:shadow-[0_16px_36px_rgba(37,99,235,0.28)]",
  },
  SQL: {
    icon: Database,
    tone: "from-[#336791]/20 via-white to-[#2563eb]/12",
    glow: "hover:shadow-[0_16px_36px_rgba(51,103,145,0.22)]",
  },
  "Agile / Scrum": {
    icon: Layers,
    tone: "from-[#2563eb]/18 via-white to-[#86efac]/12",
    glow: "hover:shadow-[0_16px_36px_rgba(37,99,235,0.24)]",
  },
};

const groups = [
  { title: "Frontend", items: skills.frontend, bar: "bg-[#60a5fa]" },
  { title: "Mobile", items: skills.mobile, bar: "bg-[#22d3ee]" },
  { title: "Backend", items: skills.backend, bar: "bg-[#6db33f]" },
  { title: "Quality Assurance", items: skills.quality, bar: "bg-[#f59e0b]" },
  { title: "Tooling", items: skills.tools, bar: "bg-[#2563eb]" },
];

function getMeta(item: string) {
  return (
    skillMeta[item] ?? {
      icon: Code2,
      tone: "from-teal/20 via-white to-sand/40",
      glow: "hover:shadow-[0_16px_36px_rgba(37,99,235,0.22)]",
    }
  );
}

export function Skills() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="skills" className="relative overflow-hidden px-5 py-20 sm:px-8 sm:py-28">
      <div
        className="pointer-events-none absolute -left-24 top-20 h-64 w-64 rounded-full bg-[#60a5fa]/20 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-16 bottom-10 h-72 w-72 rounded-full bg-[#2563eb]/15 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl">
        <Reveal>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-teal">
            Skills
          </p>
          <h2 className="font-display max-w-2xl text-balance text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            Stack that spans build and verify.
          </h2>
        </Reveal>

        <div className="mt-14 space-y-12">
          {groups.map((group, groupIndex) => (
            <Reveal key={group.title} delay={0.06 * groupIndex}>
              <div>
                <div className="mb-5 flex items-center gap-3">
                  <span
                    className={`h-2.5 w-2.5 rounded-full ${group.bar}`}
                    aria-hidden
                  />
                  <h3 className="font-display text-xl font-bold text-ink sm:text-2xl">
                    {group.title}
                  </h3>
                  <span
                    className={`h-px flex-1 bg-gradient-to-r ${group.bar}/50 to-transparent`}
                    aria-hidden
                  />
                </div>

                <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 lg:gap-4">
                  {group.items.map((item, itemIndex) => {
                    const meta = getMeta(item);
                    const Icon = meta.icon;

                    return (
                      <motion.li
                        key={item}
                        initial={reduceMotion ? false : { opacity: 0.001, y: 14 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.05, margin: "40px 0px" }}
                        transition={{
                          duration: 0.4,
                          delay: Math.min(0.04 * itemIndex, 0.2),
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        whileHover={
                          reduceMotion ? undefined : { y: -6, scale: 1.03 }
                        }
                      >
                        <div
                          className={`group relative flex h-full min-h-[7rem] flex-col items-center justify-center overflow-hidden rounded-2xl border border-white/80 bg-gradient-to-br ${meta.tone} px-3 py-5 text-center shadow-[0_8px_24px_rgba(26,43,74,0.08)] transition-all duration-300 hover:border-teal/35 ${meta.glow} sm:min-h-[7.75rem]`}
                        >
                          <span
                            className="absolute -right-4 -top-4 h-16 w-16 rounded-full bg-white/50 blur-xl transition-opacity group-hover:opacity-90"
                            aria-hidden
                          />
                          <span className="relative mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/80 text-teal shadow-sm ring-1 ring-line transition-colors group-hover:bg-teal group-hover:text-white">
                            <Icon size={18} />
                          </span>
                          <span className="relative font-display text-sm font-semibold text-ink sm:text-base">
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
