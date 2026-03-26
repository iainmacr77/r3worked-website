"use client";

import Link from "next/link";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";

function EditorialVisual({ scrollProgress }: { scrollProgress: MotionValue<number> }) {
  const smoothProgress = useSpring(scrollProgress, {
    stiffness: 80,
    damping: 20,
    mass: 0.5,
  });

  // Card 1: Audit
  const opacity1 = useTransform(smoothProgress, [0, 0.25, 0.35], [1, 1, 0]);
  const y1 = useTransform(smoothProgress, [0, 0.25, 0.35], [0, 0, -50]);
  const scale1 = useTransform(smoothProgress, [0, 0.25, 0.35], [1, 1, 0.95]);

  // Card 2: Reworking
  const opacity2 = useTransform(smoothProgress, [0.25, 0.35, 0.6, 0.7], [0, 1, 1, 0]);
  const y2 = useTransform(smoothProgress, [0.25, 0.35, 0.6, 0.7], [50, 0, 0, -50]);
  const scale2 = useTransform(smoothProgress, [0.25, 0.35, 0.6, 0.7], [1.05, 1, 1, 0.95]);

  // Card 3: System Active
  const opacity3 = useTransform(smoothProgress, [0.6, 0.7, 0.8], [0, 1, 1]);
  const y3 = useTransform(smoothProgress, [0.6, 0.7, 0.8], [50, 0, 0]);
  const scale3 = useTransform(smoothProgress, [0.6, 0.7, 0.8], [1.05, 1, 1]);

  return (
    <div className="relative w-full max-w-[34rem] aspect-[4/5] mx-auto lg:ml-auto select-none pointer-events-none mt-10 lg:mt-0 flex items-center justify-center">
      {/* Structural base grid */}
      <div className="absolute inset-x-4 sm:inset-x-8 inset-y-16 border border-[#161616]/10 rounded-sm">
        <div className="absolute inset-x-0 top-1/3 border-t border-[#161616]/5" />
        <div className="absolute inset-x-0 top-2/3 border-t border-[#161616]/5" />
        <div className="absolute inset-y-0 left-1/2 border-l border-[#161616]/5" />
      </div>

      {/* Card 1: The Foundation / Audit */}
      <motion.div
        style={{ opacity: opacity1, y: y1, scale: scale1 }}
        className="absolute w-[85%] sm:w-[80%] aspect-[4/3] bg-[#F7F3EE] border border-[#161616] p-6 sm:p-8 shadow-[8px_8px_0px_#161616] flex flex-col"
      >
        <div className="flex justify-between items-center mb-10 border-b border-[#161616] pb-4">
          <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#161616]">FREE REVIEW</div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#161616]" />
        </div>
        <div className="flex-1 border border-[#161616]/10 bg-white relative overflow-hidden flex flex-col p-4 shadow-sm">
           <div className="w-full flex justify-between items-end mb-4">
             <div className="space-y-1.5">
               <div className="w-12 h-1 bg-[#161616]/20" />
               <div className="w-8 h-1 bg-[#161616]/20" />
             </div>
             <div className="text-[10px] font-mono font-bold text-[#161616]/40 tracking-widest">SCAN IN PROGRESS</div>
           </div>
           
           <div className="flex-1 border border-[#161616]/10 relative group bg-[#FAFAFA]">
              {/* Scanning reticle / grid effect */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(22,22,22,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(22,22,22,0.03)_1px,transparent_1px)] bg-[size:12px_12px]" />
              
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 border border-[#161616]/20 rounded-full flex items-center justify-center">
                 <div className="w-1 h-1 bg-[#161616]/40 rounded-full" />
                 {/* Crosshairs */}
                 <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-[#161616]/10" />
                 <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px bg-[#161616]/10" />
              </div>
           </div>
        </div>
      </motion.div>

      {/* Card 2: The Rework */}
      <motion.div
        style={{ opacity: opacity2, y: y2, scale: scale2 }}
        className="absolute w-[85%] sm:w-[80%] aspect-[4/3] bg-[#F7F3EE] border border-[#161616] p-6 sm:p-8 shadow-[8px_8px_0px_#B86B5C] flex flex-col z-10"
      >
        <div className="flex justify-between items-center mb-8 border-b border-[#161616] pb-4">
          <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#161616]">FRICTION-FREE DESIGN & REBUILD</div>
          <div className="animate-pulse w-2.5 h-2.5 rounded-full bg-[#B86B5C]" />
        </div>
        <div className="flex-1 flex flex-col gap-4">
           {/* Abstract input state (cluttered/messy) */}
           <div className="flex gap-2 opacity-40 px-2 pt-2">
              <div className="w-1/4 h-8 border border-[#161616]/20 bg-white" />
              <div className="w-1/2 h-8 border border-[#161616]/20 bg-[#161616]/5" />
              <div className="w-1/4 h-8 border border-[#161616]/20 bg-white" />
           </div>
           
           {/* Transformation arrow/divider */}
           <div className="flex justify-center -my-1">
              <div className="w-px h-6 bg-[#B86B5C]/40" />
           </div>

           {/* Abstract output state (clean/structured) */}
           <div className="flex-1 border border-[#B86B5C]/30 bg-[#B86B5C]/5 p-3 flex flex-col gap-2 shadow-inner">
             <div className="w-full h-3 bg-white border border-[#161616]/10 shadow-sm rounded-[1px]" />
             <div className="flex gap-2 flex-1">
               <div className="w-2/3 h-full bg-white border border-[#161616]/10 shadow-sm rounded-[1px]" />
               <div className="w-1/3 h-full bg-[#B86B5C]/15 border border-[#B86B5C]/20 shadow-sm rounded-[1px]" />
             </div>
           </div>
        </div>
      </motion.div>

      {/* Card 3: The Result / System Active */}
      <motion.div
        style={{ opacity: opacity3, y: y3, scale: scale3 }}
        className="absolute w-[85%] sm:w-[80%] aspect-[4/3] bg-[#F7F3EE] border border-[#161616] p-6 sm:p-8 shadow-[8px_8px_0px_#D96B4F] flex flex-col z-20"
      >
        <div className="flex justify-between items-center mb-8 border-b border-[#161616] pb-4">
          <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#161616]">ONGOING SUPPORT</div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#D96B4F]" />
        </div>
        <div className="flex-1 flex flex-col justify-between border border-[#161616]/10 bg-white p-4 shadow-sm relative overflow-hidden">
           {/* Top nav abstract */}
           <div className="flex justify-between items-center pb-3 border-b border-[#161616]/5">
             <div className="flex items-center gap-2">
                <div className="animate-pulse w-1.5 h-1.5 rounded-full bg-[#D96B4F]" />
                <div className="text-[9px] font-mono font-bold tracking-widest text-[#161616]/60">SYS_OPS</div>
             </div>
             <div className="w-8 h-1 bg-[#161616]/10" />
           </div>
           
           {/* Server/metrics rows */}
           <div className="space-y-4 mt-4 mb-2">
             <div className="space-y-1.5">
               <div className="flex justify-between items-end">
                 <div className="w-10 h-1 bg-[#161616]/20" />
                 <div className="text-[8px] font-mono text-[#161616]/40">UPTIME</div>
               </div>
               <div className="w-full h-1.5 bg-[#161616]/5 overflow-hidden">
                 <div className="w-full h-full bg-[#161616]/20" />
               </div>
             </div>

             <div className="space-y-1.5">
               <div className="flex justify-between items-end">
                 <div className="w-14 h-1 bg-[#161616]/20" />
                 <div className="text-[8px] font-mono text-[#D96B4F]/80">ROUTING</div>
               </div>
               <div className="w-full h-1.5 bg-[#161616]/5 overflow-hidden">
                 <div className="w-[85%] h-full bg-[#D96B4F]/50" />
               </div>
             </div>
           </div>
        </div>
      </motion.div>
      
    </div>
  );
}

export function HomepageHero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  return (
    // A tall container to allow for scroll duration
    // h-[300vh] provides 2 viewports (200vh) of actual scroll distance before the next section pulls up.
    <section
      id="hero"
      ref={sectionRef}
      className="relative bg-[#F7F3EE] pb-12 pt-24 sm:pb-14 sm:pt-28 lg:h-[250vh] lg:py-0"
    >
      
      {/* 
        This is the sticky viewport. 
        It locks to the top of the screen while the parent section scrolls past.
      */}
      <div className="flex w-full items-start justify-center lg:sticky lg:top-0 lg:h-screen lg:items-center lg:overflow-hidden">
        
        {/* Premium ambient grid wrapper so it stays fixed relative to the screen content */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.04] bg-[linear-gradient(rgba(22,22,22,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(22,22,22,0.1)_1px,transparent_1px)] bg-[size:64px_64px] bg-center" />

        <div className="w-full px-6 md:px-10">
          <div className="relative z-10 mx-auto flex h-full w-full max-w-[84rem] flex-col gap-8 lg:grid lg:max-h-[900px] lg:grid-cols-[minmax(0,1.14fr)_minmax(22rem,0.86fr)] lg:items-center lg:gap-10 xl:grid-cols-[minmax(0,1.08fr)_minmax(24rem,0.92fr)] xl:gap-12">
            
            {/* Left: Text Content (Static) */}
            <div className="contents lg:relative lg:flex lg:w-full lg:max-w-[41rem] lg:min-h-[42.5rem] lg:flex-col lg:justify-center lg:pr-4 xl:max-w-[43rem]">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="order-1"
              >
                <p className="type-eyebrow text-[#B86B5C]">
                  COMMERCIAL REWORK FOR SERVICE BRANDS
                </p>
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.1, ease: [0.2, 0.65, 0.3, 0.9] }}
                className="order-2 mt-3.5 max-w-[12.5ch] font-sans font-bold text-[#161616] text-[clamp(2.8rem,9vw,3.85rem)] leading-[0.99] tracking-[-0.055em] text-balance md:mt-4 md:text-[clamp(3.5rem,6.7vw,4.6rem)] xl:text-[4.75rem]"
              >
                <span className="block">Sharper websites.</span>
                <span className="block">
                  Better lead <span className="inline-block">capture.</span>
                </span>
                <span className="block">Automated flows.</span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2, ease: [0.2, 0.65, 0.3, 0.9] }}
                className="type-support order-3 mt-3.5 max-w-[32rem] text-[#2A2A2A]/80 md:mt-4 md:max-w-[34rem] lg:max-w-[32rem] xl:max-w-[34rem]"
              >
                We rebuild underperforming service websites into commercial systems that look sharper, capture better leads and move enquiries straight into your existing workflow.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3, ease: [0.2, 0.65, 0.3, 0.9] }}
                className="order-5 mt-6 flex flex-col items-stretch gap-3.5 sm:mt-8 sm:flex-row sm:items-center sm:gap-4 lg:mt-14 lg:items-start xl:mt-16"
              >
                <Link
                  href="#final-cta"
                  className="inline-flex h-14 w-full items-center justify-center rounded-full bg-[#161616] px-8 text-[13px] font-bold uppercase tracking-[0.1em] text-[#F7F3EE] shadow-[0_12px_24px_rgba(22,22,22,0.12)] transition-[transform,background] duration-300 hover:-translate-y-0.5 hover:bg-[#2A2A2A] sm:w-auto"
                >
                  GET A REVIEW
                </Link>

                <Link
                  href="#before-after-showcase"
                  className="group inline-flex h-14 w-full items-center justify-center rounded-full border border-[#161616]/10 bg-transparent px-8 text-[13px] font-bold uppercase tracking-[0.1em] text-[#161616] transition-[transform,background] duration-300 hover:bg-[#161616]/5 sm:w-auto"
                >
                  SEE OUR WORK
                  <span className="ml-3 block transform transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </motion.div>
            </div>

            {/* Right: Premium Editorial Visual (Scroll Animated) */}
            <div className="order-4 lg:order-none">
              <EditorialVisual scrollProgress={scrollYProgress} />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
