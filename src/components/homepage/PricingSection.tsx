"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

/* ------------------------------------------------------------------ */
/*  Data                                                                */
/* ------------------------------------------------------------------ */
const PRIMARY_INCLUSIONS = [
  "Homepage-led rebuild with up to 5 key pages",
  "Copy refinement and structure cleanup",
  "Mobile optimisation",
  "CTA and form conversion improvements",
  "Enquiry capture setup",
  "SEO fundamentals",
  "AI search readiness",
  "Launch and deployment",
];

const MONTHLY_INCLUSIONS = [
  "Hosting",
  "Maintenance",
  "Routine updates",
  "Form delivery & workflow checks",
  "Lead notification monitoring",
  "Email sending infrastructure",
  "WhatsApp / messaging support",
  "Minor content edits",
  "Support",
];

const ADD_ONS = [
  "Extra pages",
  "Advanced follow-up automation",
  "CRM / GoHighLevel integration",
  "Booking / quoting workflow setup",
  "Additional concept previews",
  "Copywriting support",
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
      className="light-section-seam bg-[#F7F3EE] px-6 py-24 md:px-10 md:py-32 overflow-hidden"
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
            The Offer
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="mt-6 type-h2 text-[#161616]"
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
            We keep the offer clear on purpose: a defined rebuild, a clean
            monthly support layer, and optional add-ons only where they
            genuinely help.
          </motion.p>
        </div>

        {/* ───────── Primary offer card ───────── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.15, duration: 0.7, ease: EASE_OUT }}
        >
          <div className="relative rounded-[1.75rem] bg-[#161616] p-8 md:p-12 lg:p-14 shadow-[6px_6px_0px_#B86B5C] overflow-hidden">
            {/* Watermark */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-8 -right-2 select-none text-[10rem] md:text-[14rem] font-bold leading-none tracking-[-0.06em] text-[#F7F3EE]/[0.02]"
            >
              R3
            </div>

            <div className="relative z-10 grid md:grid-cols-[1fr_1.2fr] gap-10 md:gap-14 lg:gap-20">
              {/* Left: Price block */}
              <div className="flex flex-col">
                <span className="type-eyebrow text-[#D96B4F] mb-6 md:mb-8">
                  Website Rebuild
                </span>

                <div className="mb-6">
                  <AnimatedPrice
                    target={1250}
                    prefix="£"
                    className="text-[4rem] md:text-[5rem] lg:text-[5.5rem] font-bold text-[#F7F3EE] leading-[0.9] tracking-[-0.04em]"
                    accentClassName="text-[#D96B4F]"
                  />
                  <span className="block mt-3 text-[0.72rem] font-semibold text-[#F7F3EE]/30 uppercase tracking-[0.18em]">
                    one-off
                  </span>
                </div>

                <p className="text-[#F7F3EE]/50 text-[0.9rem] leading-relaxed mb-8 md:mb-10 max-w-[30rem]">
                  A homepage-led commercial rebuild designed to make your
                  business look better, capture enquiries better, and convert
                  more serious prospects.
                </p>

                <Link
                  href="/book"
                  className="mt-auto inline-flex w-fit items-center gap-2.5 rounded-full bg-[#D96B4F] px-7 py-3.5 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-white shadow-[0_8px_20px_rgba(217,107,79,0.2)] transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(217,107,79,0.25)]"
                >
                  Start your rebuild
                  <ArrowRight size={14} strokeWidth={2.5} />
                </Link>
              </div>

              {/* Right: Inclusions */}
              <div className="flex flex-col">
                <span className="text-[0.62rem] font-bold uppercase tracking-[0.2em] text-[#F7F3EE]/20 mb-6 md:mb-8 block">
                  What&apos;s included
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                  {PRIMARY_INCLUSIONS.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <div className="w-[6px] h-[6px] rounded-full bg-[#D96B4F] mt-[0.55rem] shrink-0" />
                      <span className="text-[0.88rem] text-[#F7F3EE]/65 leading-relaxed">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ───────── Monthly + Add-ons row ───────── */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-5 mt-5">
          {/* Monthly care */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: 0.2, duration: 0.6, ease: EASE_OUT }}
            className="rounded-2xl bg-gradient-to-br from-[#EDE7DD] via-[#E7DED2] to-[#E2D8CA] border border-[#161616]/[0.06] p-6 md:p-8 shadow-[0_12px_40px_rgba(72,50,37,0.04),inset_0_1px_0_rgba(255,255,255,0.6)]"
          >
            <div className="flex items-start justify-between gap-4 mb-5">
              <span className="type-eyebrow text-[#B86B5C]">
                Site + System Care
              </span>
              <div className="text-right shrink-0">
                <span className="text-[1.8rem] md:text-[2.2rem] font-bold text-[#161616] leading-none tracking-[-0.03em]">
                  <span className="text-[#D96B4F]">£</span>200
                </span>
                <span className="block mt-1 text-[0.6rem] font-semibold text-[#161616]/30 uppercase tracking-[0.15em]">
                  per month
                </span>
              </div>
            </div>

            <p className="text-[#2A2A2A]/55 text-[0.82rem] leading-relaxed mb-5">
              Ongoing support for the live site and its enquiry-handling layer.
            </p>

            <div className="grid grid-cols-2 gap-x-6 gap-y-2.5">
              {MONTHLY_INCLUSIONS.map((item) => (
                <div key={item} className="flex items-center gap-2.5">
                  <div className="w-[5px] h-[5px] rounded-full bg-[#B86B5C]/35 shrink-0" />
                  <span className="text-[0.78rem] text-[#2A2A2A]/55 leading-snug">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Add-ons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: 0.3, duration: 0.6, ease: EASE_OUT }}
            className="rounded-2xl border border-[#161616]/[0.06] bg-white/50 p-6 md:p-8 shadow-[0_8px_30px_rgba(72,50,37,0.03),inset_0_1px_0_rgba(255,255,255,0.8)]"
          >
            <span className="type-eyebrow text-[#B86B5C]/70 mb-2 block">
              Add-ons
            </span>
            <p className="text-[#2A2A2A]/45 text-[0.82rem] leading-relaxed mb-5">
              Available where they genuinely help — not upsold by default.
            </p>

            <div className="grid grid-cols-2 gap-2">
              {ADD_ONS.map((item) => (
                <div
                  key={item}
                  className="relative flex items-center rounded-lg border border-[#161616]/[0.05] bg-[#F7F3EE]/60 py-2.5 pl-4 pr-3.5 overflow-hidden"
                >
                  <div className="absolute left-0 top-[0.4rem] bottom-[0.4rem] w-[2px] rounded-full bg-[#D96B4F]/20" />
                  <span className="text-[0.74rem] font-medium text-[#161616]/50">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

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
            Built for speed, clarity and repeatability — not bloated bespoke
            projects.
          </p>
          <div className="h-px flex-1 max-w-[5rem] bg-gradient-to-l from-transparent to-[#161616]/[0.08]" />
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Animated price counter                                              */
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
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 1400;
    const start = performance.now();

    function step(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setValue(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
  }, [isInView, target]);

  return (
    <span ref={ref} className={className}>
      <span className={accentClassName}>{prefix}</span>
      {value.toLocaleString()}
    </span>
  );
}
