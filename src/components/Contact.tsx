"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { GitHubIcon, LinkedInIcon } from "@/components/SocialIcons";
import { profile } from "@/lib/data";

export function Contact() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="contact" className="px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <Reveal>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-teal">
              Contact
            </p>
            <h2 className="font-display text-balance text-4xl font-bold tracking-tight text-ink sm:text-5xl lg:text-6xl">
              Let’s build something solid together.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
              Open to fullstack and mobile development roles, SQA
              collaborations, and projects that need both strong engineering
              and thoughtful testing.
            </p>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="space-y-5">
              <a
                href={`mailto:${profile.email}`}
                className="group flex items-start gap-4"
              >
                <span className="mt-1 text-teal">
                  <Mail size={20} />
                </span>
                <span>
                  <span className="block text-sm font-semibold uppercase tracking-[0.16em] text-ink-soft">
                    Email
                  </span>
                  <span className="mt-1 block text-lg font-medium text-ink transition-colors group-hover:text-teal">
                    {profile.email}
                  </span>
                </span>
              </a>

              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4"
              >
                <span className="mt-1 text-teal">
                  <GitHubIcon size={20} />
                </span>
                <span>
                  <span className="block text-sm font-semibold uppercase tracking-[0.16em] text-ink-soft">
                    GitHub
                  </span>
                  <span className="mt-1 block text-lg font-medium text-ink transition-colors group-hover:text-teal">
                    github.com/piustagbas
                  </span>
                </span>
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4"
              >
                <span className="mt-1 text-teal">
                  <LinkedInIcon size={20} />
                </span>
                <span>
                  <span className="block text-sm font-semibold uppercase tracking-[0.16em] text-ink-soft">
                    LinkedIn
                  </span>
                  <span className="mt-1 block text-lg font-medium text-ink transition-colors group-hover:text-teal">
                    linkedin.com/in/pius-lucky
                  </span>
                </span>
              </a>

              <div className="flex items-start gap-4">
                <span className="mt-1 text-teal">
                  <MapPin size={20} />
                </span>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-ink-soft">
                    Location
                  </p>
                  <p className="mt-1 text-lg font-medium text-ink">
                    {profile.location}
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap">
                <motion.a
                  href={`mailto:${profile.email}`}
                  whileHover={reduceMotion ? undefined : { scale: 1.02 }}
                  whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                  className="inline-flex items-center justify-center rounded-full bg-teal px-7 py-4 text-base font-semibold text-white transition-colors hover:bg-teal-deep"
                >
                  Start a conversation
                </motion.a>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-line bg-fog px-6 py-4 text-base font-semibold text-ink transition-colors hover:border-teal hover:text-teal"
                >
                  <GitHubIcon size={18} />
                  GitHub
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-line bg-fog px-6 py-4 text-base font-semibold text-ink transition-colors hover:border-teal hover:text-teal"
                >
                  <LinkedInIcon size={18} />
                  LinkedIn
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
