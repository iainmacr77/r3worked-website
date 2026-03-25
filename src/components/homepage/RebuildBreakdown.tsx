"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
    strong: "A deliberate visual flow \u2014 headline to proof to action \u2014 so visitors always know where to look next.",
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

const slideVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? 50 : -50,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (dir: number) => ({
    x: dir > 0 ? -50 : 50,
    opacity: 0,
  }),
};

export function RebuildBreakdown() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const move = REBUILD_MOVES[currentIndex];
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === REBUILD_MOVES.length - 1;

  const goNext = useCallback(() => {
    if (currentIndex < REBUILD_MOVES.length - 1) {
      setDirection(1);
      setCurrentIndex((i) => i + 1);
    }
  }, [currentIndex]);

  const goPrev = useCallback(() => {
    if (currentIndex > 0) {
      setDirection(-1);
      setCurrentIndex((i) => i - 1);
    }
  }, [currentIndex]);

  return (
    <div className="bg-[#F7F3EE] px-6 pb-24 md:px-10 md:pb-32">
      <div className="mx-auto max-w-[84rem]">
        <div
          className="relative overflow-hidden rounded-[2rem] border border-[#161616]/[0.06] bg-[linear-gradient(135deg,rgba(255,255,255,0.88),rgba(247,243,238,0.82))] p-8 shadow-[0_20px_60px_rgba(72,50,37,0.06),0_8px_20px_rgba(72,50,37,0.03),inset_0_1px_0_rgba(255,255,255,0.85)] backdrop-blur-[12px] md:p-12 lg:p-16"
          role="region"
          aria-roledescription="carousel"
          aria-label="Transformation analysis"
        >
          {/* Slide area */}
          <div className="relative min-h-[22rem] md:min-h-[16rem]">
            <AnimatePresence mode="wait" initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 320, damping: 32 },
                  opacity: { duration: 0.2 },
                }}
                className="absolute inset-0"
                role="group"
                aria-roledescription="slide"
                aria-label={`Move ${currentIndex + 1} of ${REBUILD_MOVES.length}: ${move.category}`}
              >
                {/* Large watermark number */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-4 right-0 select-none text-[8rem] font-bold tabular-nums leading-none tracking-[-0.06em] text-[#161616]/[0.025] md:text-[12rem]"
                >
                  {move.number}
                </div>

                <div className="relative z-10">
                  {/* Number + category badge */}
                  <div className="mb-5 flex items-center gap-4">
                    <span className="text-[1.4rem] font-bold tabular-nums leading-none tracking-[-0.04em] text-[#161616]/[0.14] md:text-[1.8rem]">
                      {move.number}
                    </span>
                    <span className="type-eyebrow rounded-full border border-[#D96B4F]/15 bg-[#D96B4F]/5 px-3.5 py-1.5 text-[#D96B4F]">
                      {move.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="type-h3 mb-8 text-[#161616]">
                    {move.title}
                  </h3>

                  {/* Signal pair */}
                  <div className="grid gap-6 md:grid-cols-2 md:gap-14">
                    {/* Weak signal */}
                    <div className="border-l-2 border-[#161616]/8 pl-5">
                      <div className="mb-2.5 flex items-center gap-3">
                        <span className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#161616]/25">
                          Weak signal
                        </span>
                        <SignalMeter
                          level={move.signalBefore}
                          variant="weak"
                        />
                      </div>
                      <p className="type-body-sm max-w-[34ch] text-[#2A2A2A]/40">
                        {move.weak}
                      </p>
                    </div>

                    {/* Strong signal */}
                    <div className="border-l-2 border-[#D96B4F] pl-5">
                      <div className="mb-2.5 flex items-center gap-3">
                        <span className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#D96B4F]/70">
                          Strong signal
                        </span>
                        <SignalMeter
                          level={move.signalAfter}
                          variant="strong"
                        />
                      </div>
                      <p className="type-body-sm max-w-[34ch] text-[#161616]">
                        {move.strong}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation controls */}
          <div className="relative z-20 mt-10 flex items-center justify-center gap-5">
            <NavArrow
              direction="prev"
              onClick={goPrev}
              disabled={isFirst}
            />
            <span className="min-w-[4.5rem] select-none text-center text-[0.7rem] font-semibold tabular-nums uppercase tracking-[0.2em] text-[#161616]/25">
              {String(currentIndex + 1).padStart(2, "0")}
              <span className="mx-1 text-[#161616]/12">/</span>
              {String(REBUILD_MOVES.length).padStart(2, "0")}
            </span>
            <NavArrow
              direction="next"
              onClick={goNext}
              disabled={isLast}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Arrow button                                                       */
/* ------------------------------------------------------------------ */

function NavArrow({
  direction,
  onClick,
  disabled,
}: {
  direction: "prev" | "next";
  onClick: () => void;
  disabled: boolean;
}) {
  const Icon = direction === "prev" ? ChevronLeft : ChevronRight;
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={direction === "prev" ? "Previous move" : "Next move"}
      className="group flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-[#C8BFB1]/40 bg-gradient-to-b from-white to-[#F3ECE1] shadow-[0_1px_3px_rgba(22,22,22,0.05),0_4px_10px_rgba(22,22,22,0.04),inset_0_1px_0_rgba(255,255,255,0.9)] transition-all duration-300 hover:border-[#161616]/16 hover:shadow-[0_2px_6px_rgba(22,22,22,0.08),0_8px_18px_rgba(22,22,22,0.05)] disabled:pointer-events-none disabled:opacity-25"
    >
      <Icon
        size={16}
        strokeWidth={2}
        className="text-[#161616]/50 transition-colors group-hover:text-[#161616]/80"
      />
    </button>
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
