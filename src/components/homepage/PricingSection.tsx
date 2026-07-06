"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

/* ------------------------------------------------------------------ */
/*  Data                                                                */
/* ------------------------------------------------------------------ */
const LEAD_RESCUE_INCLUSIONS = [
  "Instant web-form capture",
  "WhatsApp + email alerts",
  "Lead log / control centre",
  "Review follow-up with Google review links",
  "Setup included",
];

const AI_ANSWERING_INCLUSIONS = [
  "Everything in Lead Rescue",
  "AI answers your missed calls",
  "Call summary straight to WhatsApp",
  "Lead logged automatically",
];

const REFRESH_INCLUSIONS = [
  "CTA and form conversion fixes",
  "Mobile optimisation",
  "Enquiry capture wired in",
  "Works with your existing site",
];

const REBUILD_INCLUSIONS = [
  "Homepage-led rebuild with up to 5 key pages",
  "Copy refinement and structure cleanup",
  "Mobile optimisation",
  "CTA and form conversion improvements",
  "Enquiry capture setup",
  "SEO fundamentals",
  "AI search readiness",
  "Launch and deployment",
];

const CARE_INCLUSIONS = [
  "Hosting",
  "Maintenance",
  "Routine updates",
  "Minor content edits",
];

const ADD_ONS = [
  "Extra pages",
  "Advanced follow-up automation",
  "CRM / GoHighLevel",
  "Booking & quoting workflows",
  "Copywriting",
];

/* ------------------------------------------------------------------ */
/*  Shared animation config                                             */
/* ------------------------------------------------------------------ */
const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];

/* ------------------------------------------------------------------ */
/*  Component                                                           */
/* ------------------------------------------------------------------ */
export function PricingSection() {
  return (
    <section
      id="pricing"
      className="light-section-seam bg-[#F5F2EA] px-6 py-24 md:px-10 md:py-32 overflow-hidden"
    >
      <div className="mx-auto max-w-[84rem]">
        {/* ───────── Header ───────── */}
        <div className="mb-16 md:mb-20 max-w-[48rem]">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="type-eyebrow text-[#B86B5C]"
          >
            Pricing
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="mt-6 type-section-heading-serif text-[#161616]"
          >
            Clear pricing. No agency theatre.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="type-support mt-6 text-[#2A2A2A]/70 max-w-[42rem]"
          >
            One system to stop losing leads, from £149 a month. Website work
            only if — and where — you actually need it.
          </motion.p>
        </div>

        {/* ───────── Row 1: Monthly plans ───────── */}
        <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Lead Rescue — the hero card */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.15, duration: 0.7, ease: EASE_OUT }}
            className="relative overflow-hidden rounded-[1.75rem] bg-[#161616] p-8 md:p-12 shadow-[6px_6px_0px_#B86B5C]"
          >
            {/* Watermark */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-8 -right-2 select-none text-[10rem] md:text-[13rem] font-bold leading-none tracking-[-0.06em] text-[#F7F3EE]/[0.02]"
            >
              R3
            </div>

            <div className="relative z-10 flex h-full flex-col">
              <span className="type-eyebrow text-[#D96B4F] mb-6">
                Lead Rescue
              </span>

              <div className="mb-6 flex items-end gap-3">
                <AnimatedPrice
                  target={149}
                  prefix="£"
                  className="text-[3.6rem] md:text-[4.6rem] font-bold text-[#F7F3EE] leading-[0.9] tracking-[-0.04em]"
                  accentClassName="text-[#D96B4F]"
                />
                <span className="pb-1 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#F7F3EE]/30">
                  per month
                </span>
              </div>

              <p className="mb-8 max-w-[30rem] text-[0.9rem] leading-relaxed text-[#F7F3EE]/50">
                The full lead-capture system for businesses that already have a
                solid website. We catch every enquiry, alert you instantly, and
                turn finished jobs into reviews.
              </p>

              <div className="mb-10 grid grid-cols-1 gap-y-3.5 sm:grid-cols-2 sm:gap-x-8">
                {LEAD_RESCUE_INCLUSIONS.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="mt-[0.55rem] h-[6px] w-[6px] shrink-0 rounded-full bg-[#D96B4F]" />
                    <span className="text-[0.88rem] leading-relaxed text-[#F7F3EE]/65">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <Link
                href="#lead-rescue-review"
                className="mt-auto inline-flex w-fit items-center gap-2.5 rounded-full bg-[#D96B4F] px-7 py-3.5 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-white shadow-[0_8px_20px_rgba(217,107,79,0.2)] transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(217,107,79,0.25)]"
              >
                Stop losing leads
                <ArrowRight size={14} strokeWidth={2.5} />
              </Link>
            </div>
          </motion.div>

          {/* Lead Rescue + AI Answering — launching soon */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.25, duration: 0.7, ease: EASE_OUT }}
            className="relative overflow-hidden rounded-[1.75rem] border border-[#161616]/10 bg-[#161616]/[0.03] p-8 md:p-10"
          >
            <div className="flex h-full flex-col">
              <div className="mb-6 flex flex-wrap items-center gap-3">
                <span className="type-eyebrow text-[#B86B5C]">
                  Lead Rescue + AI Answering
                </span>
                <span className="shrink-0 rounded-full border border-[#D96B4F]/25 bg-[#D96B4F]/8 px-2.5 py-0.5 text-[9px] font-extrabold uppercase tracking-[0.12em] text-[#D96B4F]">
                  Launching soon
                </span>
              </div>

              <div className="mb-6 flex items-end gap-3">
                <span className="text-[3.6rem] font-bold leading-[0.9] tracking-[-0.04em] text-[#161616]">
                  <span className="text-[#D96B4F]">£</span>249
                </span>
                <span className="pb-1 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#161616]/30">
                  from / month
                </span>
              </div>

              <p className="mb-8 max-w-[26rem] text-[0.9rem] leading-relaxed text-[#2A2A2A]/55">
                For when you can&apos;t get to the phone. Our AI voice agent
                answers missed calls so the job never walks away.
              </p>

              <div className="mb-10 flex flex-col gap-3.5">
                {AI_ANSWERING_INCLUSIONS.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="mt-[0.55rem] h-[6px] w-[6px] shrink-0 rounded-full bg-[#B86B5C]/50" />
                    <span className="text-[0.88rem] leading-relaxed text-[#2A2A2A]/60">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <Link
                href="#lead-rescue-review"
                className="mt-auto inline-flex w-fit items-center gap-2.5 rounded-full border border-[#161616]/15 bg-white/50 px-7 py-3.5 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-[#161616] transition-[transform,background] duration-300 hover:-translate-y-0.5 hover:bg-white"
              >
                Join the waitlist
                <ArrowRight size={14} strokeWidth={2.5} />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* ───────── Row 2: One-off website work ───────── */}
        <div className="mt-5 grid gap-5 md:grid-cols-2">
          {/* Website refresh */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: 0.2, duration: 0.6, ease: EASE_OUT }}
            className="rounded-2xl border border-[#161616]/[0.06] bg-gradient-to-br from-[#EDE7DD] via-[#E7DED2] to-[#E2D8CA] p-6 md:p-8 shadow-[0_12px_40px_rgba(72,50,37,0.04),inset_0_1px_0_rgba(255,255,255,0.6)]"
          >
            <div className="mb-5 flex items-start justify-between gap-4">
              <div>
                <span className="type-eyebrow text-[#B86B5C]">
                  Website refresh
                </span>
                <p className="mt-2 text-[0.82rem] leading-relaxed text-[#2A2A2A]/55">
                  Your site, fixed for conversion — forms, CTAs and mobile.
                </p>
              </div>
              <div className="shrink-0 text-right">
                <span className="text-[1.8rem] md:text-[2.2rem] font-bold leading-none tracking-[-0.03em] text-[#161616]">
                  <span className="text-[#D96B4F]">£</span>495
                </span>
                <span className="mt-1 block text-[0.6rem] font-semibold uppercase tracking-[0.15em] text-[#161616]/30">
                  one-off
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-y-2.5 sm:grid-cols-2 sm:gap-x-6">
              {REFRESH_INCLUSIONS.map((item) => (
                <div key={item} className="flex items-center gap-2.5">
                  <div className="h-[5px] w-[5px] shrink-0 rounded-full bg-[#B86B5C]/35" />
                  <span className="text-[0.78rem] leading-snug text-[#2A2A2A]/55">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Website rebuild */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: 0.3, duration: 0.6, ease: EASE_OUT }}
            className="rounded-2xl border border-[#161616]/[0.06] bg-gradient-to-br from-[#EDE7DD] via-[#E7DED2] to-[#E2D8CA] p-6 md:p-8 shadow-[0_12px_40px_rgba(72,50,37,0.04),inset_0_1px_0_rgba(255,255,255,0.6)]"
          >
            <div className="mb-5 flex items-start justify-between gap-4">
              <div>
                <span className="type-eyebrow text-[#B86B5C]">
                  Website rebuild
                </span>
                <p className="mt-2 text-[0.82rem] leading-relaxed text-[#2A2A2A]/55">
                  A homepage-led commercial rebuild that captures enquiries
                  properly.
                </p>
              </div>
              <div className="shrink-0 text-right">
                <AnimatedPrice
                  target={1250}
                  prefix="£"
                  className="text-[1.8rem] md:text-[2.2rem] font-bold leading-none tracking-[-0.03em] text-[#161616]"
                  accentClassName="text-[#D96B4F]"
                />
                <span className="mt-1 block text-[0.6rem] font-semibold uppercase tracking-[0.15em] text-[#161616]/30">
                  one-off
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-y-2.5 sm:grid-cols-2 sm:gap-x-6">
              {REBUILD_INCLUSIONS.map((item) => (
                <div key={item} className="flex items-center gap-2.5">
                  <div className="h-[5px] w-[5px] shrink-0 rounded-full bg-[#B86B5C]/35" />
                  <span className="text-[0.78rem] leading-snug text-[#2A2A2A]/55">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <Link
              href="/book"
              className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-[#161616] px-6 py-3 text-[0.68rem] font-semibold uppercase tracking-[0.15em] text-[#F7F3EE] transition-[transform,background] duration-300 hover:-translate-y-0.5 hover:bg-[#2A2A2A]"
            >
              Start your rebuild
              <ArrowRight size={13} strokeWidth={2.5} />
            </Link>
          </motion.div>
        </div>

        {/* ───────── Row 3: Site care + add-ons ───────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ delay: 0.25, duration: 0.6, ease: EASE_OUT }}
          className="mt-5 grid gap-5 rounded-2xl border border-[#161616]/[0.06] bg-white/50 p-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] md:p-8 shadow-[0_8px_30px_rgba(72,50,37,0.03),inset_0_1px_0_rgba(255,255,255,0.8)]"
        >
          {/* Site care & hosting */}
          <div>
            <div className="flex items-start justify-between gap-4">
              <span className="type-eyebrow text-[#B86B5C]/70">
                Site Care &amp; Hosting
              </span>
              <span className="shrink-0 text-[1.3rem] font-bold leading-none tracking-[-0.02em] text-[#161616]">
                +<span className="text-[#D96B4F]">£</span>50
                <span className="ml-1 text-[0.6rem] font-semibold uppercase tracking-[0.12em] text-[#161616]/30">
                  /mo
                </span>
              </span>
            </div>
            <p className="mt-3 text-[0.82rem] leading-relaxed text-[#2A2A2A]/50">
              {CARE_INCLUSIONS.join(" · ")}. For sites we&apos;ve refreshed or
              rebuilt. Already have a good site? You don&apos;t need this.
            </p>
          </div>

          {/* Add-ons */}
          <div>
            <span className="type-eyebrow text-[#B86B5C]/70">Add-ons</span>
            <div className="mt-3 flex flex-wrap gap-2">
              {ADD_ONS.map((item) => (
                <span
                  key={item}
                  className="rounded-lg border border-[#161616]/[0.05] bg-[#F5F2EA]/60 px-3.5 py-2 text-[0.74rem] font-medium text-[#161616]/50"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ───────── Bottom positioning line ───────── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-14 md:mt-16 flex items-center justify-center gap-5"
        >
          <div className="h-px flex-1 max-w-[5rem] bg-gradient-to-r from-transparent to-[#161616]/[0.08]" />
          <p className="text-[0.82rem] text-[#2A2A2A]/35 font-medium text-center">
            Cancel any time. Built for speed, clarity and repeatability — not
            bloated bespoke projects.
          </p>
          <div className="h-px flex-1 max-w-[5rem] bg-gradient-to-l from-transparent to-[#161616]/[0.08]" />
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Animated price counter                                              */
/*  Renders the real figure in the initial (server) markup so crawlers  */
/*  and no-JS readers never see £0; the count-up only runs client-side  */
/*  once in view, and is skipped entirely under reduced motion.         */
/* ------------------------------------------------------------------ */
function AnimatedPrice({
  target,
  prefix,
  className,
  accentClassName,
}: {
  target: number;
  prefix: string;
  className: string;
  accentClassName: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const reducedMotion = useReducedMotion();
  const [value, setValue] = useState(target);

  useEffect(() => {
    if (!isInView || reducedMotion) return;
    const duration = 1400;
    const start = performance.now();

    function step(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setValue(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    }

    setValue(0);
    requestAnimationFrame(step);
  }, [isInView, reducedMotion, target]);

  return (
    <span ref={ref} className={className}>
      <span className={accentClassName}>{prefix}</span>
      {value.toLocaleString("en-GB")}
    </span>
  );
}
