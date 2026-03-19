"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";

const THREE_LAYERS = [
  {
    label: "01",
    title: "Website uplift",
    body: "Sharper hierarchy, cleaner trust signals, and a stronger first impression.",
  },
  {
    label: "02",
    title: "Enquiry capture",
    body: "Better quote paths, clearer forms, and fewer missed enquiries.",
  },
  {
    label: "03",
    title: "Lead handling",
    body: "Instant acknowledgements, client alerts, and cleaner lead handling behind the scenes.",
  },
];

export function TheThreeInR3Worked() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Line drawing animation
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 20,
    mass: 0.5,
  });

  const lineHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="the-3"
      className="relative bg-[#F7F3EE] px-6 py-24 md:px-10 md:py-32 overflow-hidden"
    >
      <div className="mx-auto max-w-[84rem]">
        
        {/* Section Header */}
        <div className="mb-20 max-w-[42rem]">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="type-eyebrow text-[#B86B5C]"
          >
            The System
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="mt-6 type-h2 text-[#161616]"
          >
            The 3 in R3WORKED.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="mt-6 type-body text-[#2A2A2A]/70 max-w-[32rem]"
          >
            Three practical, interconnected layers. One sharper commercial front.
          </motion.p>
        </div>

        {/* Connected System Flow */}
        <div ref={containerRef} className="relative mx-auto mt-24">
          
          {/* Vertical Connecting Line (Desktop) */}
          <div className="absolute left-[34px] top-10 bottom-10 w-px bg-[#161616]/5 hidden md:block">
            <motion.div 
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-[#D96B4F]/80 to-[#C87968]/80 origin-top"
            />
          </div>

          <div className="flex flex-col gap-8 md:gap-16">
            {THREE_LAYERS.map((layer) => {
              return (
                <StepItem 
                  key={layer.label} 
                  layer={layer} 
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function StepItem({ layer }: { layer: { label: string, title: string, body: string } }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] }}
      className="relative flex flex-col md:flex-row items-stretch gap-6 md:gap-16 group"
    >
      {/* Node / Indicator */}
      <div className="md:w-[70px] flex md:justify-center pt-8 md:pt-0 items-start md:items-center relative z-10 shrink-0">
        <div className="w-[18px] h-[18px] rounded-full bg-[#F7F3EE] border-2 border-[#D96B4F] flex items-center justify-center shadow-[0_0_0_6px_rgba(247,243,238,1)] transition-transform duration-500 group-hover:scale-125">
          <div className="w-1.5 h-1.5 rounded-full bg-[#161616]" />
        </div>
        {/* Mobile connection line */}
        <div className="absolute left-[9px] top-[50px] bottom-[-24px] w-px bg-[#161616]/10 md:hidden" />
      </div>

      {/* Content Card */}
      <div className="flex-1 w-full">
        <div className="premium-card relative p-8 md:p-12 overflow-hidden w-full max-w-[42rem]">
          {/* Abstract numbering background */}
          <div className="absolute -right-6 -bottom-10 text-[12rem] font-bold text-[#161616]/[0.02] tracking-tighter pointer-events-none select-none leading-none">
            {layer.label}
          </div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-8">
              <span className="type-eyebrow text-[#D96B4F] px-4 py-1.5 rounded-full border border-[#D96B4F]/20 bg-[#D96B4F]/5">
                Phase {layer.label}
              </span>
            </div>
            
            <h3 className="type-h3 text-[#161616] mb-4">
              {layer.title}
            </h3>
            
            <p className="type-body text-[#2A2A2A]/80 max-w-[28rem]">
              {layer.body}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
