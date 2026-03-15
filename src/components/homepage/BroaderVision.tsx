"use client";

import { useEffect, useState } from "react";

const FUTURE_CATEGORIES = [
  { label: "Salons", accent: "blue" },
  { label: "Hospitality", accent: "blue" },
  { label: "Local services", accent: "blue" },
  { label: "Wellness", accent: "blue" },
  { label: "Professional services", accent: "blue" },
];

export function BroaderVision() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % FUTURE_CATEGORIES.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-[#FAFAF8] px-6 py-24 md:px-16 md:py-32">
      <div className="mx-auto w-full max-w-4xl text-center">
        {/* Eyebrow */}
        <p className="font-jetbrains text-[10px] font-semibold uppercase tracking-[0.22em] text-[#1081F2]/40">
          The Larger Picture
        </p>

        {/* Headline */}
        <h2 className="type-h2-serif mt-4 text-ink">
          Today, two verticals.{" "}
          <br className="hidden md:block" />
          Tomorrow, the real world.
        </h2>

        <p className="type-lead mx-auto mt-6 max-w-[50ch] text-charcoal/55">
          The same voice layer that powers restaurants and medical today is built to sit across any service that depends on bookings, scheduling, and voice-based demand.
        </p>

        {/* Future category pills with blue accent */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-3">
          {FUTURE_CATEGORIES.map((cat, i) => (
            <span
              key={cat.label}
              className={`rounded-full border px-5 py-2.5 font-outfit text-[13px] tracking-wide transition-all duration-700 ${
                i === activeIndex
                  ? "border-[#1081F2]/25 bg-[#1081F2]/[0.06] text-[#1081F2] scale-105"
                  : "border-ink/[0.06] bg-transparent text-charcoal/30 scale-100"
              }`}
            >
              {cat.label}
            </span>
          ))}
        </div>

        {/* Quiet vision line */}
        <p className="mx-auto mt-14 max-w-[44ch] text-sm leading-relaxed text-charcoal/35">
          Wherever voice demand meets real-world operations, there&apos;s a layer to build.
        </p>
      </div>
    </section>
  );
}
