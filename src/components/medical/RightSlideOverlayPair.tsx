"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { SectionHeading } from "@/components/typography/SectionHeading";
import { cn } from "@/lib/utils";

type OverlayCard = {
  title: string;
  body: string;
  badge?: string;
};

function ConnectionMapCard() {
  const flowRows = [
    { label: "New booking", outcome: "Handled by Lola" },
    { label: "Cancellation", outcome: "Slot reopened" },
    { label: "Clinical question", outcome: "Reception handoff" },
    { label: "After-hours caller", outcome: "Captured" },
  ];

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[2rem] border border-[#8addcc]/35 bg-[linear-gradient(180deg,rgba(255,255,255,0.86),rgba(247,253,251,0.8))] p-5 shadow-[0_24px_54px_rgba(30,30,46,0.09),inset_0_1px_0_rgba(255,255,255,0.7)] backdrop-blur-xl",
        "min-h-[320px] md:min-h-[360px] flex flex-col"
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#89dbc9]/10 via-transparent to-[#6ed4be]/08" />
      <div className="pointer-events-none absolute right-[-12%] top-[-4%] h-40 w-40 rounded-full bg-[#7de2d0]/18 blur-3xl" />
      <div className="relative z-10 flex flex-1 flex-col">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="font-jetbrains text-[10px] uppercase tracking-[0.16em] text-charcoal/52">
              OPERATING MODEL
            </p>
            <p className="mt-2 text-lg font-semibold text-ink">
              Added around the clinic, not dropped on top of it.
            </p>
          </div>
          <span className="rounded-full border border-[#7fd8c6]/15 bg-[#89dbc9]/20 px-2.5 py-1 font-jetbrains text-[10px] font-medium uppercase tracking-[0.12em] text-[#156e60]">
            Clinical -&gt; Reception
          </span>
        </div>

        <div className="mt-5 flex flex-1 flex-col gap-4 sm:gap-5">
          <div className="flex flex-wrap items-center gap-2">
            <div className="rounded-xl border border-charcoal/12 bg-charcoal/5 px-3 py-2 font-jetbrains text-[11px] font-medium text-charcoal/90">
              Patient calls
            </div>
            <span className="text-charcoal/40" aria-hidden>
              →
            </span>
            <div className="rounded-xl border border-[#6ed4be]/40 bg-[#89dbc9]/20 px-3 py-2 font-jetbrains text-[11px] font-medium text-[#156e60]">
              Lola Voice Layer
            </div>
          </div>
          <div className="flex items-center gap-2 pl-1">
            <span className="h-px w-4 flex-shrink-0 bg-charcoal/25" />
            <span className="font-jetbrains text-[10px] uppercase tracking-wider text-charcoal/50">
              connects to
            </span>
          </div>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            <div className="rounded-xl border border-charcoal/12 bg-white/80 px-3 py-2.5 font-jetbrains text-[11px] text-charcoal/85 shadow-[0_4px_12px_rgba(0,0,0,0.04)]">
              <span className="font-medium">Existing booking system</span>
              <span className="mt-0.5 block text-[10px] text-charcoal/55">
                Practice software / PMS
              </span>
            </div>
            <div className="rounded-xl border border-[#8addcc]/40 bg-[#89dbc9]/12 px-3 py-2.5 font-jetbrains text-[11px] text-charcoal/85">
              <span className="font-medium">Google Calendar</span>
              <span className="mt-0.5 block text-[10px] text-charcoal/55">
                Simpler practices
              </span>
            </div>
          </div>

          <div className="rounded-[1.4rem] border border-charcoal/10 bg-white/72 p-4">
            <div className="mb-3 flex items-center justify-between">
              <p className="font-jetbrains text-[10px] uppercase tracking-[0.14em] text-charcoal/52">
                Example outcomes
              </p>
              <span className="text-[11px] text-charcoal/42">Routine + safe</span>
            </div>
            <div className="space-y-2.5">
              {flowRows.map((row) => (
                <div
                  key={row.label}
                  className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 rounded-xl border border-charcoal/8 bg-white/84 px-3 py-2.5 text-sm text-charcoal/82"
                >
                  <span>{row.label}</span>
                  <span className="rounded-full border border-[#7fd8c6]/20 bg-[#89dbc9]/16 px-2.5 py-1 font-jetbrains text-[10px] uppercase tracking-[0.12em] text-[#156e60]">
                    {row.outcome}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2 border-t border-charcoal/8 pt-4">
          {["Missed calls prevented", "Recovered slots", "After-hours captured"].map((label) => (
            <span
              key={label}
              className="rounded-lg border border-[#83dcca]/30 bg-white/60 px-2 py-1 font-jetbrains text-[10px] text-charcoal/75"
            >
              {label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function OverlayPanel({
  title,
  subtitle,
  cards,
}: {
  title: string;
  subtitle: string;
  cards: OverlayCard[];
}) {
  return (
    <article className="w-full rounded-[2.1rem] border border-[#8addcc]/38 bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(247,253,251,0.88))] p-6 shadow-[0_24px_58px_rgba(30,30,46,0.1)] md:p-8">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="font-jetbrains text-[11px] uppercase tracking-[0.14em] text-[#1e8a78]">
            {title}
          </p>
          <p className="mt-3 max-w-[62ch] text-charcoal">{subtitle}</p>
        </div>
        <div className="rounded-full border border-[#8addcc]/34 bg-white/80 px-3 py-1.5 font-jetbrains text-[10px] uppercase tracking-[0.12em] text-charcoal/56">
          Clinic-safe workflow
        </div>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-3">
        {cards.map((card, index) => (
          <div
            key={card.title}
            className="rounded-[1.45rem] border border-[#83dcca]/42 bg-white/90 p-5 shadow-[0_16px_30px_rgba(30,30,46,0.08)]"
          >
            <div className="flex items-center justify-between gap-3">
              {card.badge ? (
                <p className="font-jetbrains text-[10px] uppercase tracking-[0.12em] text-[#1e8a78]">
                  {card.badge}
                </p>
              ) : <span />}
              <span className="font-jetbrains text-[10px] uppercase tracking-[0.14em] text-charcoal/38">
                0{index + 1}
              </span>
            </div>
            <h3 className="mt-2 font-outfit text-2xl font-semibold text-ink">{card.title}</h3>
            <p className="mt-3 text-charcoal">{card.body}</p>
          </div>
        ))}
      </div>
    </article>
  );
}

export function RightSlideOverlayPair({
  id = "connect",
  heading,
  subheading,
  setupCards,
  operationCards,
}: {
  id?: string;
  heading: string;
  subheading: string;
  setupCards: OverlayCard[];
  operationCards: OverlayCard[];
}) {
  const stackRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: stackRef,
    offset: ["start start", "end end"],
  });

  // Same core pattern as Restaurants framework stack: sticky full-screen layers with z-index.
  // Medical variant changes the incoming panel motion to horizontal right->left coverage.
  const targetX = useTransform(scrollYProgress, [0.14, 0.56], ["100%", "0%"]);
  const smoothX = useSpring(targetX, { stiffness: 120, damping: 28, mass: 0.85 });
  const surfaceY = useTransform(scrollYProgress, [0, 0.18], [16, 0]);
  const surfaceYSmooth = useSpring(surfaceY, { stiffness: 140, damping: 30, mass: 0.8 });
  const baseDim = useTransform(scrollYProgress, [0.14, 0.56], [1, 0.84]);
  const baseBlur = useTransform(scrollYProgress, [0.14, 0.56], ["blur(0px)", "blur(2px)"]);

  return (
    <section id={id} className="section-offset w-full bg-medical-soft-blue px-6 pt-12 pb-20 md:px-16 md:pt-16 md:pb-24">
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="min-w-0">
            <SectionHeading
              eyebrow="HOW IT FITS"
              eyebrowClassName="text-[#156e60] tracking-[0.2em]"
              title={heading}
              titleClassName="type-h2-serif text-charcoal max-w-[14ch]"
              subtitle={subheading}
              subtitleClassName="text-charcoal/88 max-w-[42ch] text-base md:text-lg leading-relaxed mt-2"
              className="flex flex-col"
            />
            <p className="mt-4 max-w-[42ch] font-outfit text-sm leading-relaxed text-charcoal/80 md:text-base">
              The setup layer decides how Lola should behave. The live operation
              layer then carries the daily phone load, while clinical or
              uncertain calls stay with the clinic team.
            </p>
          </div>
          <div className="min-w-0 lg:pl-2">
            <ConnectionMapCard />
          </div>
        </div>
      </div>

      <motion.div
        ref={stackRef}
        style={prefersReducedMotion ? undefined : { y: surfaceYSmooth }}
        className="relative mx-auto mt-12 hidden w-full max-w-7xl min-h-[190svh] md:block"
      >
        <div className="pointer-events-none absolute inset-x-10 -top-3 h-5 bg-gradient-to-b from-[#74d8c5]/18 to-transparent blur-md" />
        <div className="sticky top-0 z-10 flex h-[100svh] items-center py-6">
          <motion.div
            style={prefersReducedMotion ? undefined : { opacity: baseDim, filter: baseBlur }}
            className="w-full"
          >
            <OverlayPanel
              title="Lola Setup"
              subtitle="Connection, policies, and guardrails are established first."
              cards={setupCards}
            />
          </motion.div>
        </div>
        <div className="-mt-[100svh] sticky top-0 z-20 flex h-[100svh] items-center overflow-hidden py-6">
          <motion.div
            style={prefersReducedMotion ? undefined : { x: smoothX }}
            className="relative w-full"
          >
            {/* Glass edge + wake for iOS-like incoming sheet */}
            <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-[2px] bg-white/88 shadow-[0_0_22px_rgba(255,255,255,0.7)]" />
            <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-10 -translate-x-full bg-gradient-to-l from-white/52 via-white/14 to-transparent blur-sm" />
            <OverlayPanel
              title="Lola Operation"
              subtitle="Once live, Lola becomes the working layer around the diary."
              cards={operationCards}
            />
          </motion.div>
        </div>
      </motion.div>

      <div className="mx-auto mt-7 grid w-full max-w-7xl grid-cols-1 gap-5 md:hidden">
        <OverlayPanel
          title="Lola Setup"
          subtitle="Connection, policies, and guardrails are established first."
          cards={setupCards}
        />
        <OverlayPanel
          title="Lola Operation"
          subtitle="The live call-handling layer then takes over."
          cards={operationCards}
        />
      </div>
    </section>
  );
}
