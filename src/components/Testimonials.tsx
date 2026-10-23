"use client";

import { ExternalLink, Quote } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { featuredTestimonial, testimonials } from "@/lib/data";

export function Testimonials() {
  return (
    <section id="testimonials" className="relative px-5 py-20 sm:px-8 sm:py-28">
      <div
        className="absolute inset-0 bg-gradient-to-b from-[#dceaf7]/90 via-[#e8f2fb]/85 to-[#d7e8f6]/90"
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-accent">
              Testimonials
            </p>
            <h2 className="font-display text-balance text-4xl font-bold tracking-tight text-ink sm:text-5xl">
              What collaborators say.
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-7 sm:gap-8 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <Reveal key={item.name} delay={0.05 * index}>
              <article className="surface-card relative flex h-full flex-col overflow-hidden p-6 sm:p-7">
                <span
                  className="pointer-events-none absolute -right-2 -top-3 font-display text-7xl font-bold leading-none text-teal/[0.07]"
                  aria-hidden
                >
                  ”
                </span>
                <span className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-full border border-teal/20 bg-teal/10 text-teal">
                  <Quote size={18} aria-hidden />
                </span>
                <p className="flex-1 text-base leading-relaxed text-ink-soft">
                  “{item.quote}”
                </p>
                <div className="mt-6 flex items-center gap-3 border-t border-line pt-5">
                  <span className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border border-line bg-sand">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.photo}
                      alt=""
                      className="h-full w-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </span>
                  <div>
                    <p className="font-display text-lg font-bold tracking-tight text-ink">
                      {item.name}
                    </p>
                    <p className="mt-0.5 text-sm font-semibold text-accent">
                      {item.role}
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <aside className="surface-card mx-auto mt-10 max-w-2xl p-5 sm:mt-12 sm:p-7">
          <div className="flex flex-col items-center text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              Platform recognition
            </p>
            <h3 className="mt-2 font-display text-2xl font-bold tracking-tight text-ink">
              {featuredTestimonial.company}
            </h3>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-ink-soft sm:text-base">
              {featuredTestimonial.caption}
            </p>

            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${featuredTestimonial.screenshot}?v=4`}
              alt={featuredTestimonial.screenshotAlt}
              width={960}
              height={443}
              className="mt-5 block h-auto w-full max-w-[520px] rounded-xl border border-line bg-[#1a1d21] shadow-md sm:max-w-[560px]"
            />

            <a
              href={featuredTestimonial.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center justify-center gap-2 text-sm font-semibold text-slate transition-colors hover:text-teal-deep"
            >
              Join Mercor via my referral
              <ExternalLink size={15} aria-hidden />
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
}
