"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { WavyDivider } from "./WavyDivider";

const TRUST_STATEMENTS = [
  "Missed forms become missed jobs",
  "Slow replies lose serious enquiries",
  "Every lead should be logged",
  "Completed jobs should become reviews",
  "Website enquiries routed faster",
  "Missed-call rescue coming soon",
  "Lead Rescue for trades and local services",
];

const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function TrustTicker() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TRUST_STATEMENTS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-[#F5F2EA] px-6 py-10 md:py-14 overflow-hidden">
      <WavyDivider />
      <WavyDivider edge="bottom" />
      <div className="mx-auto flex items-center justify-center text-center">
        <div className="relative w-full h-[2.8rem] md:h-[3rem] flex items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ x: 40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -30, opacity: 0 }}
              transition={{ duration: 0.45, ease: EASE_OUT }}
              className="absolute inset-0 flex flex-col items-center justify-center"
            >
              <div className="w-6 h-[1.5px] bg-[#D96B4F]/35 mb-3" />
              <p className="text-[0.78rem] md:text-[1.05rem] lg:text-[1.2rem] font-semibold uppercase tracking-[0.1em] md:tracking-[0.13em] text-[#161616]/70 whitespace-nowrap">
                {TRUST_STATEMENTS[activeIndex]}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
