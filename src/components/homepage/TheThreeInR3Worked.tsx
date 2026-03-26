"use client";

import { useRef, type MouseEvent } from "react";
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";

const THREE_LAYERS = [
  {
    label: "01",
    title: "Website uplift",
    body: "Make the website look more trustworthy, more professional, and easier for the right customer to act on.",
    targetId: "before-after-showcase",
  },
  {
    label: "02",
    title: "Enquiry capture",
    body: "Make it easier for people to get in touch properly, request a quote, and stop good enquiries going missing.",
    targetId: "rebuild-breakdown",
  },
  {
    label: "03",
    title: "Lead follow-up",
    body: "Help you respond faster, stay organised, and keep new enquiries from going cold once they come in.",
    targetId: "lead-capture-layer",
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
      className="light-section-seam relative bg-[#F7F3EE] px-6 py-24 md:px-10 md:py-32 overflow-hidden"
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
            The <span className="text-[#D96B4F]">3</span> in R<span className="text-[#D96B4F]">3</span>WORKED.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="type-support mt-6 max-w-[32rem] text-[#2A2A2A]/70"
          >
            Three practical layers that make your website look better, capture more enquiries, and help you stay on top of them.
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

function StepItem({
  layer,
}: {
  layer: { label: string; title: string; body: string; targetId: string };
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });
  const handleNavigate = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const target = document.getElementById(layer.targetId);
    if (!target) return;

    target.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", `#${layer.targetId}`);
  };

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
        <motion.a
          href={`#${layer.targetId}`}
          onClick={handleNavigate}
          whileHover={{ y: -4 }}
          className="premium-card relative flex h-full w-full max-w-[42rem] flex-col overflow-hidden p-8 transition-[border-color,box-shadow,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-[#D96B4F]/40 hover:shadow-[0_36px_96px_rgba(72,50,37,0.12),0_14px_32px_rgba(72,50,37,0.06),inset_0_1px_0_rgba(255,255,255,0.86)] focus-visible:border-[#D96B4F]/55 focus-visible:shadow-[0_36px_96px_rgba(72,50,37,0.12),0_14px_32px_rgba(72,50,37,0.06),inset_0_1px_0_rgba(255,255,255,0.86)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D96B4F]/15 md:p-12"
          aria-label={`Read more about ${layer.title.toLowerCase()}`}
        >
          {/* Abstract numbering background */}
          <div className="absolute bottom-[-1.2rem] right-16 w-[7.2rem] text-right text-[12rem] font-bold tabular-nums text-[#161616]/[0.02] tracking-[-0.08em] pointer-events-none select-none leading-none md:bottom-[-1.5rem] md:right-20">
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
            
            <p className="type-body-sm max-w-[31ch] text-[#2A2A2A]/78">
              {layer.body}
            </p>

            <span className="mt-8 inline-flex w-fit items-center rounded-full bg-[#161616] px-4 py-2 text-[0.63rem] font-semibold uppercase tracking-[0.16em] text-[#F7F3EE] shadow-[0_8px_16px_rgba(22,22,22,0.14)]">
              Read more
            </span>
          </div>
        </motion.a>
      </div>
    </motion.div>
  );
}
