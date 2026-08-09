"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import { profile } from "@/lib/data";

export function Hero() {
  const reduceMotion = useReducedMotion();

  const brandWords = [profile.firstName.toUpperCase(), profile.lastName.toUpperCase()];

  return (
    <section
      id="top"
      className="relative min-h-[100svh] overflow-hidden text-white"
      aria-label="Introduction"
    >
      <div className="hero-plane absolute inset-0 animate-drift" aria-hidden />
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.18), transparent 35%), radial-gradient(circle at 80% 70%, rgba(37,99,235,0.42), transparent 40%)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pb-16 pt-28 sm:px-8 sm:pb-20 lg:justify-center lg:pb-24">
        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-4 max-w-xl text-sm font-medium uppercase tracking-[0.22em] text-white/75 sm:text-base"
        >
          {profile.role}
        </motion.p>

        <h1 className="font-display text-[clamp(3.4rem,12vw,8.5rem)] font-bold leading-[0.9] tracking-[-0.04em]">
          {brandWords.map((word, index) => (
            <motion.span
              key={word}
              className="block"
              initial={reduceMotion ? false : { opacity: 0, y: 48 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.18 + index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-6 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
        >
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-teal px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-teal-deep sm:text-base"
          >
            {profile.resumeLabel}
            <ArrowDownRight size={18} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border border-white/40 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10 sm:text-base"
          >
            Get in touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}
