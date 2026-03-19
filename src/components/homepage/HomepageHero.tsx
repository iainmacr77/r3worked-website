"use client";

import Link from "next/link";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

function EditorialVisual() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    mass: 0.5,
  });

  const y1 = useTransform(smoothProgress, [0, 1], [0, -40]);
  const y2 = useTransform(smoothProgress, [0, 1], [0, -80]);
  const y3 = useTransform(smoothProgress, [0, 1], [0, -120]);

  return (
    <div ref={containerRef} className="relative w-full max-w-[34rem] aspect-[4/5] mx-auto lg:ml-auto select-none pointer-events-none mt-12 lg:mt-0">
      {/* Structural base grid */}
      <div className="absolute inset-0 border border-[#161616]/10 rounded-sm">
        <div className="absolute inset-x-0 top-1/3 border-t border-[#161616]/5" />
        <div className="absolute inset-x-0 top-2/3 border-t border-[#161616]/5" />
        <div className="absolute inset-y-0 left-1/2 border-l border-[#161616]/5" />
      </div>

      {/* Card 1: The Foundation */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-[10%] left-[5%] w-[70%] bg-[#F7F3EE] border border-[#161616] p-6 shadow-[8px_8px_0px_#161616]"
      >
        <div className="flex justify-between items-center mb-12 border-b border-[#161616] pb-4">
          <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#161616]">Audit</div>
          <div className="w-2 h-2 rounded-full bg-[#161616]" />
        </div>
        <div className="space-y-3">
          <div className="w-full h-1 bg-[#161616]/20" />
          <div className="w-4/5 h-1 bg-[#161616]/20" />
          <div className="w-2/3 h-1 bg-[#161616]/20" />
        </div>
      </motion.div>

      {/* Card 2: The Rework */}
      <motion.div
        style={{ y: y2 }}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="absolute top-[35%] right-[5%] w-[80%] bg-white border border-[#161616]/10 p-8 shadow-[0_24px_48px_rgba(22,22,22,0.08)] backdrop-blur-sm"
      >
        <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#B86B5C] mb-6 inline-flex px-3 py-1 bg-[#B86B5C]/10 rounded-full">
          Reworking
        </div>
        <div className="w-1/2 h-4 bg-[#161616] mb-4" />
        <div className="w-full h-16 bg-[#161616]/5 mb-6 rounded-sm border border-[#161616]/5" />
        <div className="flex gap-4">
          <div className="w-1/3 h-8 bg-[#161616] flex items-center justify-center">
             <div className="w-1/2 h-1 bg-white/50" />
          </div>
          <div className="w-1/3 h-8 border border-[#161616]/20" />
        </div>
      </motion.div>

      {/* Card 3: The Result */}
      <motion.div
        style={{ y: y3 }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 1, ease: [0.2, 0.65, 0.3, 0.9] }}
        className="absolute bottom-0 left-[15%] right-[-5%] bg-[#161616] p-8 text-white premium-shadow"
      >
        <div className="flex items-center gap-4 mb-8">
          <div className="w-3 h-3 bg-[#D96B4F] rounded-full shrink-0" />
          <div className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#F7F3EE]/60">System Active</div>
        </div>
        <div className="text-2xl font-light tracking-tight leading-tight mb-8">
          High-intent leads cleanly captured and seamlessly logged.
        </div>
        <div className="w-full h-[1px] bg-[#F7F3EE]/10 mb-6" />
        <div className="flex justify-between items-center text-[10px] font-mono uppercase tracking-widest text-[#F7F3EE]/40">
          <span>Target Acquired</span>
          <span>Log 4920</span>
        </div>
      </motion.div>
      
    </div>
  );
}

export function HomepageHero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-[#F7F3EE]">
      {/* Premium ambient grid - highly restrained */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] bg-[linear-gradient(rgba(22,22,22,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(22,22,22,0.1)_1px,transparent_1px)] bg-[size:64px_64px] bg-center" />

      <div className="relative z-10 mx-auto grid min-h-[100svh] w-full max-w-[84rem] items-center gap-12 pt-40 pb-24 px-6 md:px-10 lg:grid-cols-2 lg:gap-20">
        
        {/* Left: Text Content */}
        <div className="max-w-[44rem] flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="type-eyebrow text-[#B86B5C]">
              Commercial Website Architecture
            </p>
          </motion.div>

          {/* Type tracking tightened (-0.05em) and leading reduced (0.95) */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.2, 0.65, 0.3, 0.9] }}
            className="mt-6 font-sans font-bold text-[#161616] text-[clamp(3.5rem,6vw+1rem,5.5rem)] leading-[0.92] tracking-[-0.05em] text-balance"
          >
            Sharper fronts.<br />
            Clearer intent.<br />
            Better systems.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.2, 0.65, 0.3, 0.9] }}
            className="mt-8 text-[clamp(1.125rem,1.5vw+0.5rem,1.375rem)] leading-[1.5] tracking-[-0.01em] text-[#2A2A2A]/80 max-w-[34rem] font-medium"
          >
            We rebuild underperforming service websites into precision digital assets. Capturing intent with absolute clarity and logging it directly into your workflow.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.2, 0.65, 0.3, 0.9] }}
            className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-5"
          >
            <Link
              href="#final-cta"
              className="inline-flex h-14 items-center justify-center bg-[#161616] text-[#F7F3EE] px-8 rounded-full text-[13px] font-bold uppercase tracking-[0.1em] transition-all duration-300 hover:bg-[#2A2A2A] hover:-translate-y-0.5 shadow-[0_12px_24px_rgba(22,22,22,0.12)]"
            >
              Start a review
            </Link>

            <Link
              href="#before-after-showcase"
              className="group inline-flex h-14 items-center justify-center bg-transparent text-[#161616] px-8 rounded-full text-[13px] font-bold uppercase tracking-[0.1em] transition-all duration-300 hover:bg-[#161616]/5 border border-[#161616]/10"
            >
              See the work
              <span className="ml-3 block transform transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </motion.div>
        </div>

        {/* Right: Premium Editorial Visual */}
        <EditorialVisual />
      </div>
    </section>
  );
}
