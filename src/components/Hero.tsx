"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import { profile } from "@/lib/data";

export function Hero() {
  const reduceMotion = useReducedMotion();
  const fullTitle = `${profile.firstName} ${profile.lastName}`;
  const [typed, setTyped] = useState(reduceMotion ? fullTitle : "");

  useEffect(() => {
    if (reduceMotion) {
      setTyped(fullTitle);
      return;
    }

    let index = 0;
    setTyped("");
    const id = window.setInterval(() => {
      index += 1;
      setTyped(fullTitle.slice(0, index));
      if (index >= fullTitle.length) {
        window.clearInterval(id);
      }
    }, 55);

    return () => window.clearInterval(id);
  }, [fullTitle, reduceMotion]);

  return (
    <section
      id="top"
      className="relative min-h-[100svh] overflow-hidden text-white"
      aria-label="Introduction"
    >
      <div
        className={`hero-plane absolute inset-0 ${reduceMotion ? "" : "md:animate-drift"}`}
        aria-hidden
      />

      <div className="relative mx-auto flex min-h-[100svh] max-w-4xl flex-col items-center justify-center px-5 pb-16 pt-28 text-center sm:px-8">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0.001, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="portrait-ring mb-7"
        >
          <div className="portrait-circle">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={profile.portrait}
              alt={`${profile.firstName} ${profile.lastName}`}
              width={144}
              height={144}
              className="h-full w-full object-cover object-center"
              decoding="async"
            />
          </div>
        </motion.div>

        <motion.p
          initial={reduceMotion ? false : { opacity: 0.001, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-teal sm:text-base"
        >
          {profile.role}
        </motion.p>

        <h1 className="font-display text-[clamp(2.6rem,9vw,5.5rem)] font-bold leading-[1.05] tracking-[-0.03em]">
          Welcome to{" "}
          <span className="block text-white">
            {typed}
            <span
              className={`ml-1 inline-block h-[0.9em] w-[3px] translate-y-[0.08em] bg-teal ${
                typed.length < fullTitle.length ? "animate-pulse" : "opacity-0"
              }`}
              aria-hidden
            />
          </span>
        </h1>

        <motion.p
          initial={reduceMotion ? false : { opacity: 0.001, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="mt-6 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0.001, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.25 }}
          className="mt-9 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center"
        >
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-teal px-8 py-3.5 text-sm font-bold text-ink transition-transform duration-300 hover:scale-[1.03] hover:bg-teal-deep hover:text-white sm:text-base"
          >
            {profile.resumeLabel}
            <ArrowDownRight size={18} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border border-white/55 bg-white/10 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20 sm:text-base"
          >
            Get in touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}
