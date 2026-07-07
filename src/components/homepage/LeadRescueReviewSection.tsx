"use client";

import { motion } from "framer-motion";
import { LeadCaptureForm } from "@/components/forms/LeadCaptureForm";
import { WavyDivider } from "@/components/homepage/WavyDivider";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const REASSURANCES = [
  "We check where calls, forms and messages are slipping through",
  "You get a short, honest report — no jargon, no hard sell",
  "Free, and usually back with you within one working day",
];

export function LeadRescueReviewSection() {
  return (
    <section
      id="lead-rescue-review"
      className="light-section-seam bg-[#F5F2EA] px-6 py-24 md:px-10 md:py-32 scroll-mt-20"
    >
      <WavyDivider />
      <div className="mx-auto max-w-[84rem]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: EASE }}
          className="relative overflow-hidden rounded-[2.5rem] bg-[#161616] p-8 sm:p-10 md:p-16 premium-border shadow-[0_24px_64px_rgba(22,22,22,0.12)]"
        >
          {/* Subtle architectural lines inside */}
          <div className="absolute inset-0 opacity-[0.2] bg-[linear-gradient(rgba(245,242,234,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(245,242,234,0.08)_1px,transparent_1px)] bg-[size:64px_64px]" />
          <div className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(ellipse_at_top,rgba(240,164,66,0.1),transparent_60%)]" />

          <div className="relative z-10 grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-20">
            {/* Left: pitch */}
            <div>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: 0.15, duration: 0.6 }}
                className="type-eyebrow inline-flex rounded-full border border-[#F0A442]/20 bg-[#F0A442]/5 px-4 py-1.5 text-[#F0A442]"
              >
                Free Lead Rescue Review
              </motion.p>

              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: 0.25, duration: 0.6 }}
                className="mt-6 type-section-heading-serif text-[#F7F3EE]"
              >
                Find out where enquiries are leaking.
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: 0.35, duration: 0.6 }}
                className="type-support mt-6 max-w-[34rem] text-[#F7F3EE]/70"
              >
                Tell us where to look — it takes 30 seconds. We&apos;ll show you
                where leads are being lost and what R3WORKED should catch first.
              </motion.p>

              <ul className="mt-10 flex flex-col gap-4">
                {REASSURANCES.map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ delay: 0.45 + index * 0.1, duration: 0.5 }}
                    className="flex items-start gap-3"
                  >
                    <div className="mt-[0.55rem] h-[6px] w-[6px] shrink-0 rounded-full bg-[#F0A442]" />
                    <span className="text-[0.92rem] leading-relaxed text-[#F7F3EE]/60">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Right: the form itself */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: 0.3, duration: 0.7, ease: EASE }}
            >
              <LeadCaptureForm variant="dark" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
