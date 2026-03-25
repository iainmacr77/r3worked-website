"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const REBUILD_MOVES = [
  {
    number: "01",
    category: "TRUST",
    title: "Credibility at first glance",
    weak: "The site feels dated and abandoned. Visitors leave before they read a single line.",
    strong: "A composed, modern front that earns attention and trust within the first three seconds.",
    signalBefore: 1,
    signalAfter: 5,
  },
  {
    number: "02",
    category: "HIERARCHY",
    title: "A clear reading path",
    weak: "Everything on the page competes for attention. The eye has nowhere to settle.",
    strong: "A deliberate visual flow — headline to proof to action — so visitors always know where to look next.",
    signalBefore: 1,
    signalAfter: 5,
  },
  {
    number: "03",
    category: "CLARITY",
    title: "Say what you actually do",
    weak: "Vague taglines, invisible services, no sense of location or specialism.",
    strong: "Specific, confident messaging that tells visitors exactly what\u2019s on offer, where, and why it matters.",
    signalBefore: 2,
    signalAfter: 5,
  },
  {
    number: "04",
    category: "ACTION",
    title: "One clear next step",
    weak: "Scattered contact options and buried forms. No obvious path from interest to enquiry.",
    strong: "A singular, prominent call to action that makes the next step feel obvious and safe.",
    signalBefore: 1,
    signalAfter: 5,
  },
  {
    number: "05",
    category: "PROOF",
    title: "Show the evidence",
    weak: "No reviews, no project shots, no accreditations. Nothing to back up the claims.",
    strong: "Real work, real testimonials, real credentials \u2014 placed exactly where trust is being formed.",
    signalBefore: 0,
    signalAfter: 4,
  },
  {
    number: "06",
    category: "CAPTURE",
    title: "Don\u2019t lose the lead",
    weak: "A generic contact form buried in the footer. Serious enquiries vanish into silence.",
    strong: "Intentional capture points, structured form fields, and instant confirmation on every submission.",
    signalBefore: 1,
    signalAfter: 5,
  },
  {
    number: "07",
    category: "MOBILE",
    title: "The other half of your traffic",
    weak: "A desktop layout squeezed onto a phone. Buttons overlap, text is unreadable, nothing works.",
    strong: "Mobile-first structure that reads cleanly, flows naturally, and converts on every screen size.",
    signalBefore: 1,
    signalAfter: 4,
  },
];

export function RebuildBreakdown() {
  return (
    <section
      id="the-rework"
      className="bg-[#F7F3EE] px-6 py-24 md:px-10 md:py-32 border-t border-[#161616]/5"
    >
      <div className="mx-auto max-w-[84rem]">
        {/* Header */}
        <div className="mb-16 md:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="type-eyebrow text-[#B86B5C]"
          >
            The Rework
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="mt-6 type-h2 text-[#161616]"
          >
            Weak signal to strong.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="type-support mt-6 max-w-[38rem] text-[#2A2A2A]/70"
          >
            Seven strategic moves behind the transformation. Not
            cosmetics&nbsp;&mdash; commercial architecture.
          </motion.p>
        </div>

        {/* Moves */}
        <div>
          {REBUILD_MOVES.map((move, index) => (
            <MoveRow
              key={move.number}
              move={move}
              isLast={index === REBUILD_MOVES.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Single move row                                                    */
/* ------------------------------------------------------------------ */

type Move = (typeof REBUILD_MOVES)[number];

function MoveRow({ move, isLast }: { move: Move; isLast: boolean }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-12%" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
      transition={{ duration: 0.7, ease: [0.2, 0.65, 0.3, 0.9] }}
      className={`relative py-10 md:py-14 ${
        !isLast ? "border-b border-[#161616]/6" : ""
      }`}
    >
      {/* Large watermark number */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-4 select-none text-[7rem] md:text-[10rem] font-bold tabular-nums leading-none tracking-[-0.06em] text-[#161616]/[0.025]"
      >
        {move.number}
      </div>

      <div className="relative z-10">
        {/* Number + category badge */}
        <div className="mb-6 flex items-center gap-4">
          <span className="text-[1.6rem] md:text-[2rem] font-bold tabular-nums leading-none tracking-[-0.04em] text-[#161616]/[0.14]">
            {move.number}
          </span>
          <span className="type-eyebrow rounded-full border border-[#D96B4F]/15 bg-[#D96B4F]/5 px-3.5 py-1.5 text-[#D96B4F]">
            {move.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="type-h3 mb-8 text-[#161616] md:mb-10">{move.title}</h3>

        {/* Signal pair — side-by-side on desktop, stacked on mobile */}
        <div className="grid gap-8 md:grid-cols-2 md:gap-16">
          {/* Weak signal */}
          <div className="border-l-2 border-[#161616]/8 pl-5 md:pl-6">
            <div className="mb-3 flex items-center gap-3">
              <span className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#161616]/25">
                Weak signal
              </span>
              <SignalMeter level={move.signalBefore} variant="weak" />
            </div>
            <p className="type-body-sm max-w-[34ch] text-[#2A2A2A]/40">
              {move.weak}
            </p>
          </div>

          {/* Strong signal */}
          <div className="border-l-2 border-[#D96B4F] pl-5 md:pl-6">
            <div className="mb-3 flex items-center gap-3">
              <span className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#D96B4F]/70">
                Strong signal
              </span>
              <SignalMeter level={move.signalAfter} variant="strong" />
            </div>
            <p className="type-body-sm max-w-[34ch] text-[#161616]">
              {move.strong}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Signal-strength dots                                               */
/* ------------------------------------------------------------------ */

function SignalMeter({
  level,
  variant,
  max = 5,
}: {
  level: number;
  variant: "weak" | "strong";
  max?: number;
}) {
  return (
    <div
      className="flex gap-[5px]"
      role="img"
      aria-label={`Signal strength ${level} of ${max}`}
    >
      {Array.from({ length: max }, (_, i) => (
        <div
          key={i}
          className={
            i < level
              ? variant === "weak"
                ? "h-[7px] w-[7px] rounded-full bg-[#161616]/15"
                : "h-[7px] w-[7px] rounded-full bg-[#D96B4F]"
              : "h-[7px] w-[7px] rounded-full bg-[#161616]/6"
          }
        />
      ))}
    </div>
  );
}
