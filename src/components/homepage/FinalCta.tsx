"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Magnetic } from "@/components/ui/Magnetic";

export function FinalCta() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="final-cta" className="light-section-seam bg-[#F5F2EA] px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[84rem]" ref={ref}>
        {/* The Premium CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] }}
          className="relative overflow-hidden rounded-[2.5rem] bg-[#161616] p-10 md:p-16 lg:p-24 premium-border shadow-[0_24px_64px_rgba(22,22,22,0.12)]"
        >
          {/* Subtle architectural lines inside */}
          <div className="absolute inset-0 opacity-[0.2] bg-[linear-gradient(rgba(245,242,234,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(245,242,234,0.08)_1px,transparent_1px)] bg-[size:64px_64px]" />
          <div className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(ellipse_at_top,rgba(240,164,66,0.1),transparent_60%)]" />

          {/* Core Content */}
          <div className="relative z-10 flex flex-col items-center text-center max-w-[48rem] mx-auto">
            <motion.p 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="type-eyebrow text-[#F0A442] mb-6 inline-flex px-4 py-1.5 rounded-full border border-[#F0A442]/20 bg-[#F0A442]/5"
            >
              Lead Rescue Review
            </motion.p>
            
            <motion.h2 
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="type-section-heading-serif text-[#F7F3EE] mb-8"
            >
              Find out where enquiries are leaking.
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="type-support text-[#F7F3EE]/70 max-w-[36rem] mb-12"
            >
              Tell us where to look — it takes 30 seconds. We&apos;ll show where
              leads are being lost and what R3WORKED should catch first.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full"
            >
              <Magnetic className="w-full sm:w-auto">
                <Link
                  href="#lead-rescue-review"
                  className="w-full sm:w-auto inline-flex items-center justify-center bg-[#F5F2EA] text-[#161616] px-8 py-4 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 hover:bg-white hover:-translate-y-0.5 shadow-[0_12px_24px_rgba(245,242,234,0.1)]"
                >
                  Start Lead Rescue review
                </Link>
              </Magnetic>

              <Link
                href="/book"
                className="w-full sm:w-auto inline-flex items-center justify-center border border-[#F5F2EA]/20 bg-transparent text-[#F5F2EA] px-8 py-4 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 hover:bg-[#F5F2EA]/10 hover:-translate-y-0.5"
              >
                Contact R3WORKED
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
