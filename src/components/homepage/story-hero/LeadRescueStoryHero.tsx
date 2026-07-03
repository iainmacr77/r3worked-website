"use client";

import { useState, type ReactNode } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { LeadRescueIntroFilm } from "@/components/homepage/LeadRescueIntroFilm";
import {
  BEAT1,
  BEAT2_FORM,
  BEAT3_ALERT,
  BEAT4_MISSED_CALL,
  BEAT5_DASHBOARD,
  BEAT6_REVIEW,
} from "./storyData";
import {
  AlertFlightScene,
  DashboardTiles,
  EASE,
  FormToLeadSequence,
  MissedCallRescue,
  ReviewConversation,
} from "./StoryWidgets";

function BeatEyebrow({ children }: { children: ReactNode }) {
  return (
    <span
      className="inline-block text-[11px] font-extrabold uppercase tracking-[0.2em] px-3.5 py-1 rounded-full border"
      style={{
        color: "var(--color-deep-clay)",
        borderColor: "rgba(169,79,61,0.15)",
        background: "rgba(169,79,61,0.04)",
      }}
    >
      {children}
    </span>
  );
}

function BeatHeading({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={cn(
        "mt-6 max-w-[13ch] type-section-heading-serif text-[#161616]",
        className
      )}
    >
      {children}
    </h2>
  );
}

interface BeatShellProps {
  eyebrow: string;
  heading: string;
  support?: string;
  children: ReactNode;
  id?: string;
  className?: string;
  headingClassName?: string;
  gridOpacity?: number;
  gridSize?: number;
  glow?: ReactNode;
}

function BeatShell({
  eyebrow,
  heading,
  support,
  children,
  id,
  className,
  headingClassName,
  gridOpacity = 0.03,
  gridSize = 56,
  glow,
}: BeatShellProps) {
  return (
    <div
      id={id}
      className={cn(
        "relative overflow-hidden px-6 py-24 sm:py-32 md:px-10 lg:min-h-[85vh] lg:py-0 flex items-center bg-[#F7F3EE] text-[#161616]",
        className
      )}
    >
      {/* Dynamic Grid Pattern */}
      <div
        className="pointer-events-none absolute inset-0 bg-center"
        style={{
          opacity: gridOpacity,
          backgroundImage: `linear-gradient(rgba(22,22,22,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(22,22,22,0.08) 1px, transparent 1px)`,
          backgroundSize: `${gridSize}px ${gridSize}px`,
        }}
      />

      {/* Atmospheric noise backdrop */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.015] bg-repeat bg-[url('data:image/svg+xml,%3Csvg%20viewBox=%220%200%20200%20200%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter%20id=%22noiseFilter%22%3E%3CfeTurbulence%20type=%22fractalNoise%22%20baseFrequency=%220.8%22%20numOctaves=%223%22%20stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect%20width=%22100%25%22%20height=%22100%25%22%20filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')]" />

      {/* Radial Spotlights / Atmospheric Glows */}
      {glow}

      <div className="relative z-10 mx-auto grid w-full max-w-[84rem] items-center gap-12 lg:min-h-[85vh] lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] xl:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: EASE }}
          className="max-w-[32rem] lg:max-w-none"
        >
          <BeatEyebrow>{eyebrow}</BeatEyebrow>
          <BeatHeading className={headingClassName}>{heading}</BeatHeading>
          {support && (
            <p className="mt-6 text-base leading-relaxed text-pretty max-w-[38rem] text-[#2A2A2A]/75">
              {support}
            </p>
          )}
        </motion.div>

        <div className="w-full flex justify-center items-center">{children}</div>
      </div>
    </div>
  );
}

function HeroFilmCtas({ show }: { show: boolean }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="lead-rescue-film-ctas"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 8 }}
          transition={{ duration: 0.65, ease: EASE }}
          className="pointer-events-none absolute inset-0 z-40 flex items-center px-6 pb-24 pt-28 sm:pt-36 md:px-10 lg:pb-28 lg:pt-40"
        >
          <div className="mx-auto grid w-full max-w-[84rem] gap-12 lg:grid-cols-[minmax(0,0.92fr)_minmax(26rem,1.08fr)] lg:items-center xl:gap-16">
            <div className="max-w-[46rem]">
              <div aria-hidden="true" className="invisible select-none">
                <BeatEyebrow>{BEAT1.eyebrow}</BeatEyebrow>
                <h1 className="mt-6 max-w-[12ch] font-sans text-[clamp(3.3rem,8vw,5.6rem)] font-extrabold leading-[0.94] tracking-[-0.05em] text-[#161616] text-balance">
                  {BEAT1.heading}
                </h1>
                <p className="mt-6 max-w-[36rem] text-lg font-medium leading-relaxed text-[#2A2A2A]/80 text-pretty">
                  {BEAT1.support}
                </p>
              </div>

              <div className="pointer-events-auto mt-10 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">
                <Link
                  href="#final-cta"
                  className="inline-flex h-14 w-full items-center justify-center rounded-full bg-[#161616] px-8 text-[13px] font-bold uppercase tracking-[0.15em] text-[#F7F3EE] shadow-[0_12px_28px_rgba(22,22,22,0.15)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2A2A2A] hover:shadow-[0_16px_36px_rgba(22,22,22,0.22)] sm:w-auto"
                >
                  {BEAT1.primaryCta}
                </Link>

                <Link
                  href="#how-it-works"
                  className="group inline-flex h-14 w-full items-center justify-center rounded-full border border-[#161616]/10 bg-white/40 px-8 text-[13px] font-bold uppercase tracking-[0.15em] text-[#161616] shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/60 sm:w-auto"
                >
                  {BEAT1.secondaryCta}
                  <ArrowRight
                    className="ml-3 transition-transform group-hover:translate-x-1.5"
                    size={15}
                    strokeWidth={2.4}
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/** The homepage hero — problem statement plus the live enquiry leak. */
export function LeadRescueStoryHero() {
  const [introFilmComplete, setIntroFilmComplete] = useState(false);

  return (
    <section id="hero" className="relative w-full overflow-hidden">
      <div className="relative flex min-h-screen items-center overflow-hidden bg-[#F5F2EA] px-6 pb-24 pt-28 sm:pt-36 md:px-10 lg:pb-28 lg:pt-40">
        <h1 className="sr-only">Never miss another lead.</h1>
        <LeadRescueIntroFilm onComplete={() => setIntroFilmComplete(true)} />
        <HeroFilmCtas show={introFilmComplete} />
      </div>
    </section>
  );
}

/** Steps 01–05 — the Lead Rescue scroll story, all in light mode. */
export function LeadRescueStorySteps() {
  return (
    <section id="how-it-works" className="relative w-full overflow-hidden">
      {/* Step 01 — Web Form Captured */}
      <BeatShell
        eyebrow={BEAT2_FORM.eyebrow}
        heading={BEAT2_FORM.heading}
        gridSize={48}
        gridOpacity={0.03}
        glow={
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(217,107,79,0.06),transparent_55%)]" />
        }
      >
        <FormToLeadSequence
          fields={BEAT2_FORM.fields}
          leadCard={BEAT2_FORM.leadCard}
          alertCaption={BEAT2_FORM.alertCaption}
        />
      </BeatShell>

      {/* Step 02 — Owner WhatsApp / Email alerted */}
      <BeatShell
        eyebrow={BEAT3_ALERT.eyebrow}
        heading={BEAT3_ALERT.heading}
        gridSize={56}
        gridOpacity={0.03}
        glow={
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_75%_50%,rgba(37,211,102,0.08),transparent_50%)]" />
        }
      >
        <AlertFlightScene
          origin={BEAT3_ALERT.origin}
          notification={BEAT3_ALERT.notification}
          email={BEAT3_ALERT.email}
        />
      </BeatShell>

      {/* Step 03 — Missed-call AI answering rescue */}
      <BeatShell
        eyebrow={BEAT4_MISSED_CALL.eyebrow}
        heading={BEAT4_MISSED_CALL.heading}
        gridSize={64}
        gridOpacity={0.03}
        glow={
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_75%_50%,rgba(245,158,11,0.07),transparent_50%)]" />
        }
      >
        <MissedCallRescue
          caller={BEAT4_MISSED_CALL.caller}
          transcript={BEAT4_MISSED_CALL.transcript}
          comingSoon={BEAT4_MISSED_CALL.comingSoon}
        />
      </BeatShell>

      {/* Step 04 — Lead dashboard */}
      <BeatShell
        eyebrow={BEAT5_DASHBOARD.eyebrow}
        heading={BEAT5_DASHBOARD.heading}
        gridSize={48}
        gridOpacity={0.02}
        glow={
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_75%_50%,rgba(217,107,79,0.05),transparent_60%)]" />
        }
      >
        <DashboardTiles tiles={BEAT5_DASHBOARD.tiles} timeline={BEAT5_DASHBOARD.timeline} />
      </BeatShell>

      {/* Step 05 — Review loop */}
      <BeatShell
        eyebrow={BEAT6_REVIEW.eyebrow}
        heading={BEAT6_REVIEW.heading}
        gridSize={56}
        gridOpacity={0.03}
        glow={
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_75%_50%,rgba(66,133,244,0.06)_0%,rgba(251,188,4,0.05)_40%,transparent_70%)]" />
        }
      >
        <ReviewConversation
          prompt={BEAT6_REVIEW.prompt}
          positive={BEAT6_REVIEW.positive}
          reviewPrompt={BEAT6_REVIEW.reviewPrompt}
        />
      </BeatShell>
    </section>
  );
}
