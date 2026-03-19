"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowRight, CheckCircle2, Bell, Database } from "lucide-react";

const FLOW_STEPS = [
  {
    icon: <CheckCircle2 size={16} className="text-[#D96B4F]" />,
    title: "Enquiry Captured",
    desc: "Clear paths lead to clean form submissions.",
  },
  {
    icon: <CheckCircle2 size={16} className="text-[#D96B4F]" />,
    title: "Lead Acknowledged",
    desc: "Instant, professional email sent back to the prospect.",
  },
  {
    icon: <Bell size={16} className="text-[#D96B4F]" />,
    title: "Client Notified",
    desc: "The right details land straight in your inbox.",
  },
  {
    icon: <Database size={16} className="text-[#D96B4F]" />,
    title: "Record Logged",
    desc: "A simple, visible record for day-one clarity.",
  },
];

export function LeadCaptureLayer() {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 20
  });

  const yTransform = useTransform(smoothProgress, [0, 1], [40, -40]);

  return (
    <section id="lead-capture-layer" className="bg-[#161616] px-6 py-24 md:px-10 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-[84rem]" ref={ref}>
        {/* Header */}
        <div className="mb-20 max-w-[48rem]">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="type-eyebrow text-[#D96B4F]"
          >
            Behind the scenes
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="mt-6 type-h2 text-[#F7F3EE]"
          >
            A clean commercial system.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="mt-6 type-body text-[#F7F3EE]/70"
          >
            The visible website is only part of the offer. We ensure the lead doesn&apos;t vanish into a black hole—cleanly capturing, routing, and logging every serious enquiry.
          </motion.p>
        </div>

        {/* Visual Systems Flow */}
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-center">
          
          {/* Timeline / Steps */}
          <div className="relative border-l border-[#2A2A2A] pl-8 space-y-12">
            {FLOW_STEPS.map((step, index) => (
              <motion.div 
                key={step.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="relative"
              >
                {/* Node */}
                <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-[#161616] border-2 border-[#2A2A2A] flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#D96B4F]" />
                </div>
                
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-[#2A2A2A]/50 border border-[#2A2A2A] flex items-center justify-center">
                    {step.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-[#F7F3EE]">{step.title}</h3>
                </div>
                <p className="text-[#F7F3EE]/60 text-sm leading-relaxed max-w-[24rem]">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Abstract Operations UI representation */}
          <motion.div 
            style={{ y: yTransform }}
            className="relative bg-[#2A2A2A]/20 border border-[#2A2A2A] rounded-[2rem] p-6 shadow-2xl overflow-hidden min-h-[400px]"
          >
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(42,42,42,0.4)_0%,rgba(22,22,22,0.8)_100%)] z-0" />
            <div className="absolute top-0 inset-x-0 h-32 bg-[radial-gradient(ellipse_at_top_right,rgba(217,107,79,0.1),transparent_60%)] z-0" />

            <div className="relative z-10 flex flex-col gap-4">
              <div className="flex items-center justify-between border-b border-[#2A2A2A] pb-4 mb-2">
                <div className="text-[10px] font-bold uppercase tracking-widest text-[#F7F3EE]/50">R3WORKED Ledger</div>
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#2A2A2A]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#2A2A2A]" />
                  <div className="w-2.5 h-2.5 rounded-full border border-[#2A2A2A]" />
                </div>
              </div>

              {/* Fake Log Entries */}
              {[1, 2, 3].map((entry, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + (idx * 0.1) }}
                  className="bg-[#161616] p-4 rounded-[1rem] border border-[#2A2A2A]/60 flex items-center justify-between"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 rounded-full bg-[#D96B4F]" />
                    <div>
                      <div className="text-sm font-medium text-[#F7F3EE] mb-1">New Quote Request</div>
                      <div className="text-xs text-[#F7F3EE]/40 uppercase tracking-wide">Website Front</div>
                    </div>
                  </div>
                  <div className="text-[#F7F3EE]/30 text-xs font-mono">
                    Handoff: Clean
                  </div>
                </motion.div>
              ))}

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
