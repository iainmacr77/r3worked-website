"use client";

import { useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { WhyLolaSection } from "@/components/medical/WhyLolaSection";
import { WhatLolaDoesStatement } from "@/components/medical/WhatLolaDoesStatement";
import { WhatIsLola } from "@/components/medical/WhatIsLola";

type Mode = "reality" | "calm";

const CALL_CHIPS = [
  "New booking request",
  "Reschedule needed",
  "Late arrival warning",
  "After-hours voicemail",
  "Medical advice question",
];

const METRICS = {
  reality: {
    prevented: 4,
    recovered: 2,
    afterHours: 1,
  },
  calm: {
    prevented: 19,
    recovered: 11,
    afterHours: 7,
  },
};

export function ClinicMomentumSurface({
  trustScope,
  children,
  connectSection,
}: {
  trustScope: string[];
  children?: React.ReactNode;
  connectSection?: React.ReactNode;
}) {
  const [mode, setMode] = useState<Mode>("reality");
  const reducedMotion = useReducedMotion();
  const transitionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: transitionRef,
    offset: ["start start", "end end"],
  });

  const incomingX = useTransform(scrollYProgress, [0.14, 0.62], ["100%", "0%"]);
  const incomingXSmooth = useSpring(incomingX, { stiffness: 120, damping: 30, mass: 0.85 });
  const baseScale = useTransform(scrollYProgress, [0.14, 0.62], [1, 0.97]);
  const baseY = useTransform(scrollYProgress, [0.14, 0.62], [0, -18]);
  const baseOpacity = useTransform(scrollYProgress, [0.14, 0.62], [1, 0.64]);
  const baseBlur = useTransform(scrollYProgress, [0.14, 0.62], ["blur(0px)", "blur(6px)"]);

  return (
    <div id="pain" className="w-full flex-col flex">
      <div className="section-offset w-full bg-medical-soft-blue px-6 pb-12 pt-20 md:px-16 md:pb-16 md:pt-24">
        <WhyLolaSection />
      </div>

      <WhatLolaDoesStatement />
      <WhatIsLola />
      {children}
      {connectSection}
      <div className="w-full bg-medical-soft-blue px-6 pb-20 pt-16 md:px-16 md:pb-24 md:pt-20">
        <div ref={transitionRef} className="relative mx-auto hidden min-h-[195svh] w-full max-w-7xl md:block">
          <div className="sticky top-0 z-10 flex h-[100svh] items-center py-6">
            <motion.article
              style={
                reducedMotion
                  ? undefined
                  : { scale: baseScale, y: baseY, opacity: baseOpacity, filter: baseBlur }
              }
              className="relative w-full overflow-hidden rounded-[2rem] border border-[#89dbc9]/45 bg-white/68 p-7 shadow-[0_30px_70px_rgba(18,28,40,0.14)] backdrop-blur-2xl md:p-8"
            >
              <div className="pointer-events-none absolute -left-16 top-10 h-44 w-44 rounded-full bg-[#89dfcf]/24 blur-3xl" />
              <div className="pointer-events-none absolute right-[-4%] bottom-[10%] h-52 w-52 rounded-full bg-[#66ccb9]/18 blur-3xl" />

              <div className="relative z-10 flex items-center justify-between gap-4">
                <div className="inline-flex rounded-full border border-[#7fd8c6]/45 bg-white/72 p-1">
                  <button
                    type="button"
                    onClick={() => setMode("reality")}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${mode === "reality" ? "bg-ink text-peach" : "text-charcoal/75"
                      }`}
                  >
                    Clinic Reality
                  </button>
                  <button
                    type="button"
                    onClick={() => setMode("calm")}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${mode === "calm" ? "bg-[#2cbca3] text-ink" : "text-charcoal/75"
                      }`}
                  >
                    Clinic Calm
                  </button>
                </div>
                <span className="rounded-full border border-[#7fd8c6]/45 bg-[#66ccb9]/14 px-3 py-1.5 font-jetbrains text-[10px] uppercase tracking-[0.14em] text-[#156e60]">
                  Safety rail: clinical advice -&gt; reception
                </span>
              </div>

              <div className="relative z-10 mt-6 grid grid-cols-1 gap-5 lg:grid-cols-2">
                <div className="rounded-[1.4rem] border border-white/70 bg-white/74 p-4">
                  <p className="font-jetbrains text-[11px] uppercase tracking-[0.12em] text-charcoal/65">
                    Incoming call pressure
                  </p>
                  <div className="mt-3 space-y-2">
                    {CALL_CHIPS.map((chip, idx) => (
                      <motion.div
                        key={chip}
                        animate={
                          mode === "reality"
                            ? { x: 0, y: idx * 1.5, opacity: 1, scale: 1 }
                            : { x: 24 + idx * 6, y: -8 + idx * 2, opacity: idx < 2 ? 1 : 0.28, scale: idx < 2 ? 1 : 0.96 }
                        }
                        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                        className="rounded-xl border border-[#9adfcb]/50 bg-white px-3 py-2 text-sm text-charcoal shadow-[0_8px_18px_rgba(18,28,40,0.08)]"
                      >
                        {mode === "calm" && idx === 0 ? "Handled by Lola - " : ""}
                        {chip}
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="rounded-[1.4rem] border border-white/70 bg-white/74 p-4">
                  <p className="font-jetbrains text-[11px] uppercase tracking-[0.12em] text-charcoal/65">
                    Diary surface
                  </p>
                  <div className="mt-3 grid grid-cols-4 gap-2">
                    {Array.from({ length: 16 }).map((_, idx) => {
                      const gaps = [2, 7, 11, 14];
                      const gapRecovered = [2, 7];
                      const isGap = gaps.includes(idx);
                      const recovered = gapRecovered.includes(idx);
                      const bg =
                        mode === "reality"
                          ? isGap
                            ? "bg-coral/18 border-coral/40 text-coral"
                            : "bg-peach/70 border-charcoal/15 text-charcoal"
                          : isGap
                            ? recovered
                              ? "bg-[#6fdcca]/20 border-[#6fdcca]/45 text-[#0f6a5d]"
                              : "bg-peach/70 border-charcoal/15 text-charcoal"
                            : "bg-peach/70 border-charcoal/15 text-charcoal";
                      return (
                        <motion.div
                          key={idx}
                          animate={{ scale: mode === "calm" && isGap && recovered ? 1.03 : 1 }}
                          transition={{ duration: 0.35 }}
                          className={`flex h-11 items-center justify-center rounded-lg border text-[11px] ${bg}`}
                        >
                          {isGap ? (mode === "calm" && recovered ? "Recovered" : "Gap") : "Booked"}
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="relative z-10 mt-5">
                <p className="mb-2 font-jetbrains text-[10px] uppercase tracking-[0.12em] text-charcoal/60">
                  Example metrics
                </p>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                  <MetricPill label="Missed calls prevented" value={METRICS[mode].prevented} />
                  <MetricPill label="Diary gaps recovered" value={METRICS[mode].recovered} />
                  <MetricPill label="After-hours capture" value={METRICS[mode].afterHours} />
                </div>
              </div>
            </motion.article>
          </div>

          <div className="-mt-[100svh] sticky top-0 z-20 flex h-[100svh] items-center overflow-hidden py-6">
            <motion.article
              style={reducedMotion ? undefined : { x: incomingXSmooth }}
              className="relative w-full overflow-hidden rounded-[2rem] border border-white/48 bg-[#eefdf9]/76 p-7 shadow-[0_30px_70px_rgba(18,28,40,0.16)] backdrop-blur-2xl md:p-8"
            >
              {/* Glass edge + wake for iOS-like sheet transition */}
              <div className="pointer-events-none absolute left-0 top-0 h-full w-[2px] bg-white/85 shadow-[0_0_24px_rgba(255,255,255,0.7)]" />
              <div className="pointer-events-none absolute left-0 top-0 h-full w-12 -translate-x-full bg-gradient-to-l from-white/55 via-white/14 to-transparent blur-md" />

              <p className="font-jetbrains text-[11px] uppercase tracking-[0.14em] text-[#1e8a78]">
                Next panel
              </p>
              <h3 className="mt-3 max-w-[20ch] font-outfit text-4xl font-semibold leading-tight text-ink">
                What Lola handles confidently
              </h3>
              <ul className="mt-5 space-y-3">
                {trustScope.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-charcoal">
                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-[#2cbca3]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 rounded-2xl border border-[#69d9c3]/45 bg-white/75 p-4 text-sm text-charcoal">
                Trust boundary: any medical advice request is routed to reception,
                no clinical decisioning in Lola.
              </div>
            </motion.article>
          </div>
        </div>

        <div className="mx-auto mt-10 grid w-full max-w-7xl grid-cols-1 gap-5 md:hidden">
          <article className="rounded-[1.75rem] border border-[#89dbc9]/45 bg-white/80 p-5 shadow-[0_20px_44px_rgba(18,28,40,0.12)]">
            <p className="font-jetbrains text-[10px] uppercase tracking-[0.12em] text-charcoal/60">
              Clinic control surface
            </p>
            <div className="mt-3 inline-flex rounded-full border border-[#7fd8c6]/45 bg-white/72 p-1">
              <button
                type="button"
                onClick={() => setMode("reality")}
                className={`rounded-full px-3 py-1.5 text-xs ${mode === "reality" ? "bg-ink text-peach" : "text-charcoal/75"}`}
              >
                Reality
              </button>
              <button
                type="button"
                onClick={() => setMode("calm")}
                className={`rounded-full px-3 py-1.5 text-xs ${mode === "calm" ? "bg-[#2cbca3] text-ink" : "text-charcoal/75"}`}
              >
                Calm
              </button>
            </div>
            <p className="mt-4 text-sm text-charcoal">
              Mobile keeps the same controls and metrics with a simpler stacked layout.
            </p>
          </article>
        </div>
      </div>
    </div>
  );
}

function MetricPill({ label, value }: { label: string; value: number }) {
  return (
    <motion.div
      key={`${label}-${value}`}
      initial={{ scale: 0.98, opacity: 0.75 }}
      animate={{ scale: [0.98, 1.04, 1], opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="rounded-full border border-[#8addcc]/45 bg-white/78 px-4 py-2.5 shadow-[0_10px_24px_rgba(18,28,40,0.1)]"
    >
      <span className="text-sm text-charcoal/85">{label}</span>
      <span className="ml-2 font-jetbrains text-sm font-semibold text-[#156e60]">{value}</span>
    </motion.div>
  );
}
