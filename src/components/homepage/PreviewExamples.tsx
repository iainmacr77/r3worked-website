"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const PREVIEW_CARDS = [
  {
    title: "Roofing Company",
    desc: "From cluttered trade site to premium local authority.",
    accent: "bg-[#D96B4F]"
  },
  {
    title: "Bespoke Builder",
    desc: "Elevating the digital finish to match the physical work.",
    accent: "bg-[#2A2A2A]"
  },
  {
    title: "Hidden Gem",
    desc: "Structuring the layout to handle high-value enquiries.",
    accent: "bg-[#B86B5C]"
  },
];

export function PreviewExamples() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="preview-examples" className="bg-[#F7F3EE] px-6 py-24 md:px-10 md:py-32 border-t border-[#161616]/5">
      <div className="mx-auto max-w-[84rem]" ref={ref}>
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-[38rem]">
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.6 }}
              className="type-eyebrow text-[#B86B5C]"
            >
              Concept Previews
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 type-h2 text-[#161616]"
            >
              Seeing the hidden potential.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 type-body text-[#2A2A2A]/70"
            >
              Before we write a single line of production code, we draft tailored homepage concepts. We find the aesthetic and structural potential your business already has, and make it visible.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="shrink-0"
          >
            <button className="flex items-center gap-2 group text-sm font-semibold text-[#161616] hover:text-[#D96B4F] transition-colors">
              Request a concept
              <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </motion.div>
        </div>

        {/* Concept Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PREVIEW_CARDS.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.2 + (idx * 0.15), ease: [0.2, 0.65, 0.3, 0.9] }}
              className="group cursor-pointer rounded-[2rem] border border-[#161616]/5 bg-white overflow-hidden shadow-[0_12px_24px_rgba(22,22,22,0.03)] hover:shadow-[0_24px_48px_rgba(22,22,22,0.08)] transition-all duration-500 hover:-translate-y-1"
            >
              {/* Concept Visual Area */}
              <div className="relative h-[220px] bg-[#E7DED2]/30 border-b border-[#161616]/5 overflow-hidden">
                {/* Architectural / Blueprint Lines */}
                <div className="absolute inset-0 opacity-[0.4] bg-[linear-gradient(rgba(22,22,22,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(22,22,22,0.06)_1px,transparent_1px)] bg-[size:24px_24px]" />
                
                {/* Abstract UI representation */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[120%] bg-white rounded-t-xl shadow-lg border border-[#161616]/10 transform transition-transform duration-700 group-hover:-translate-y-[55%]">
                  {/* Wireframe header */}
                  <div className="h-10 border-b border-[#161616]/5 flex items-center px-4 justify-between">
                    <div className="w-8 h-2 bg-[#2A2A2A] rounded-sm" />
                    <div className="flex gap-2">
                      <div className="w-4 h-1 bg-[#161616]/10 rounded-sm" />
                      <div className="w-4 h-1 bg-[#161616]/10 rounded-sm" />
                    </div>
                  </div>
                  {/* Hero lines */}
                  <div className="p-6 pb-2 space-y-4">
                    <div className="w-3/4 h-6 bg-[#2A2A2A] rounded-sm" />
                    <div className="w-1/2 h-6 bg-[#2A2A2A] rounded-sm" />
                    <div className="flex gap-3 mt-6">
                      <div className={`w-1/3 h-8 rounded-full ${card.accent} opacity-90`} />
                      <div className="w-1/4 h-8 rounded-full border border-[#161616]/20 bg-transparent" />
                    </div>
                  </div>
                  {/* Flow lines */}
                  <div className="p-6 grid grid-cols-3 gap-2">
                    <div className="h-16 bg-[#161616]/5 rounded-lg border border-[#161616]/5" />
                    <div className="h-16 bg-[#161616]/5 rounded-lg border border-[#161616]/5" />
                    <div className="h-16 bg-[#161616]/5 rounded-lg border border-[#161616]/5" />
                  </div>
                </div>

                {/* Overlaid Label */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full border border-[#161616]/10 shadow-sm flex items-center gap-1.5 transition-transform duration-500 group-hover:scale-110">
                  <div className={`w-1.5 h-1.5 rounded-full ${card.accent}`} />
                  <span className="text-[9px] font-bold uppercase tracking-widest text-[#161616]">Concept</span>
                </div>
              </div>

              {/* Text Area */}
              <div className="p-8">
                <h3 className="text-xl font-semibold text-[#161616] tracking-tight">{card.title}</h3>
                <p className="mt-3 text-[#2A2A2A]/70 text-sm leading-relaxed max-w-[20rem]">
                  {card.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
