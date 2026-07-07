"use client";

import { useState, useSyncExternalStore, type ReactNode } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Magnetic } from "@/components/ui/Magnetic";
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
  visualFirst?: boolean;
}

function BeatShell({
  eyebrow,
  heading,
  support,
  children,
  id,
  className,
  headingClassName,
  gridOpacity = 0,
  gridSize = 56,
  glow,
  visualFirst = false,
}: BeatShellProps) {
  return (
    <div
      id={id}
      className={cn(
        "relative overflow-hidden px-6 py-24 sm:py-32 md:px-10 lg:min-h-[85vh] lg:py-0 flex items-center bg-[#F5F2EA] text-[#161616]",
        className
      )}
    >
      {/* Dynamic Grid Pattern */}
      {gridOpacity > 0 && (
        <div
          className="pointer-events-none absolute inset-0 bg-center"
          style={{
            opacity: gridOpacity,
            backgroundImage: `linear-gradient(rgba(22,22,22,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(22,22,22,0.08) 1px, transparent 1px)`,
            backgroundSize: `${gridSize}px ${gridSize}px`,
          }}
        />
      )}

      {/* Atmospheric noise backdrop */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.015] bg-repeat bg-[url('data:image/svg+xml,%3Csvg%20viewBox=%220%200%20200%20200%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter%20id=%22noiseFilter%22%3E%3CfeTurbulence%20type=%22fractalNoise%22%20baseFrequency=%220.8%22%20numOctaves=%223%22%20stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect%20width=%22100%25%22%20height=%22100%25%22%20filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')]" />

      {/* Radial Spotlights / Atmospheric Glows */}
      {glow}

      <div
        className={cn(
          "relative z-10 mx-auto grid w-full max-w-[84rem] items-center gap-12 lg:min-h-[85vh] xl:gap-16",
          visualFirst
            ? "lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]"
            : "lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]"
        )}
      >
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: EASE }}
          className={cn("max-w-[32rem] lg:max-w-none", visualFirst && "lg:order-2")}
        >
          <BeatEyebrow>{eyebrow}</BeatEyebrow>
          <BeatHeading className={headingClassName}>{heading}</BeatHeading>
          {support && (
            <p className="mt-6 max-w-[36rem] text-[1rem] font-medium leading-[1.58] text-pretty text-[#2A2A2A]/70 sm:text-[1.0625rem] lg:text-[1.16rem]">
              {support}
            </p>
          )}
        </motion.div>

        <div
          className={cn(
            "flex w-full items-center justify-center",
            visualFirst && "lg:order-1"
          )}
        >
          {children}
        </div>
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
          className="pointer-events-none absolute inset-0 z-40 flex items-center justify-center px-6 pb-24 pt-28 sm:pt-36 md:px-10 lg:pb-28 lg:pt-40"
        >
          <div className="pointer-events-auto flex w-full max-w-[42rem] translate-y-[14rem] flex-col items-stretch gap-3 sm:w-auto sm:max-w-none sm:translate-y-[13rem] sm:flex-row sm:items-center sm:justify-center sm:gap-4 md:translate-y-[12.25rem] lg:translate-y-[11.75rem]">
            <Magnetic className="w-full sm:w-auto">
              <Link
                href="#lead-rescue-review"
                className="inline-flex h-14 w-full items-center justify-center rounded-full bg-[#161616] px-8 text-[13px] font-bold uppercase tracking-[0.15em] text-[#F7F3EE] shadow-[0_12px_28px_rgba(22,22,22,0.15)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2A2A2A] hover:shadow-[0_16px_36px_rgba(22,22,22,0.22)] sm:w-auto"
              >
                {BEAT1.primaryCta}
              </Link>
            </Magnetic>

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
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/**
 * The non-canvas hero: real DOM flow, text wraps naturally at any width.
 * Used on mobile/tablet (where the animated film's fixed 1920x1080 stage
 * cover-scales in ways that overflow narrow, tall viewports) and for anyone
 * with prefers-reduced-motion, regardless of screen size.
 */
function StaticHero() {
  return (
    <div className="flex w-full flex-col items-center px-6 py-28 text-center sm:pt-36 md:px-10">
      <BeatEyebrow>{"CALLS · FORMS · FOLLOW-UPS"}</BeatEyebrow>
      <h1 className="type-section-heading-serif mt-6 max-w-[16ch] text-[#161616]">
        Never miss another lead.
      </h1>
      <p className="type-support mt-6 max-w-[36rem] text-[#2A2A2A]/70">
        Every enquiry captured, every owner alerted, every next step tracked.
      </p>

      <div className="mt-10 flex w-full max-w-[28rem] flex-col items-stretch gap-3 sm:w-auto sm:max-w-none sm:flex-row sm:items-center sm:justify-center sm:gap-4">
        <Magnetic className="w-full sm:w-auto">
          <Link
            href="#lead-rescue-review"
            className="inline-flex h-14 w-full items-center justify-center rounded-full bg-[#161616] px-8 text-[13px] font-bold uppercase tracking-[0.15em] text-[#F7F3EE] shadow-[0_12px_28px_rgba(22,22,22,0.15)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2A2A2A] hover:shadow-[0_16px_36px_rgba(22,22,22,0.22)] sm:w-auto"
          >
            {BEAT1.primaryCta}
          </Link>
        </Magnetic>

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
  );
}

function subscribeToDesktopQuery(callback: () => void) {
  const query = window.matchMedia("(min-width: 768px)");
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
}

function getIsDesktopSnapshot() {
  return window.matchMedia("(min-width: 768px)").matches;
}

function getIsDesktopServerSnapshot() {
  return false; // SSR always renders the static hero; desktop upgrades after mount.
}

/** The homepage hero — problem statement plus the live enquiry leak. */
export function LeadRescueStoryHero() {
  const [introFilmComplete, setIntroFilmComplete] = useState(false);
  const isDesktop = useSyncExternalStore(
    subscribeToDesktopQuery,
    getIsDesktopSnapshot,
    getIsDesktopServerSnapshot
  );
  const reducedMotion = useReducedMotion();

  const useAnimatedHero = isDesktop && reducedMotion !== true;

  return (
    <section id="hero" className="relative w-full overflow-hidden">
      {useAnimatedHero ? (
        <div className="relative flex min-h-[calc(100vh+2rem)] items-center overflow-hidden bg-[#F5F2EA] px-6 pb-24 pt-28 sm:pt-36 md:px-10 lg:pb-28 lg:pt-40">
          <h1 className="sr-only">Never miss another lead.</h1>
          <LeadRescueIntroFilm onComplete={() => setIntroFilmComplete(true)} />
          <HeroFilmCtas show={introFilmComplete} />
        </div>
      ) : (
        <StaticHero />
      )}
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
        support={BEAT2_FORM.support}
        gridSize={48}
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
        support={BEAT3_ALERT.support}
        visualFirst
        gridSize={56}
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
        support={BEAT4_MISSED_CALL.support}
        gridSize={64}
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
        support={BEAT5_DASHBOARD.support}
        visualFirst
        gridSize={48}
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
        support={BEAT6_REVIEW.support}
        gridSize={56}
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
