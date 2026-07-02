"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  BEAT1,
  BEAT2_FORM,
  BEAT3_ALERT,
  BEAT4_MISSED_CALL,
  BEAT5_DASHBOARD,
  BEAT6_REVIEW,
  BEAT7_UPLIFT,
} from "./storyData";
import {
  ChaosFragment,
  ComingSoonModule,
  DashboardTiles,
  EASE,
  EmailAlertCard,
  FormToLeadSequence,
  MissedCallScreen,
  PhoneMockup,
  ReviewFlowSequence,
  WhatsAppNotification,
  WebsiteUpliftCard,
} from "./StoryWidgets";

function GradientSeam({ direction }: { direction: "to-dark" | "to-light" }) {
  // Eased visual seam to transition light/dark panels elegantly
  const background =
    direction === "to-dark"
      ? "linear-gradient(180deg, #F7F3EE 0%, #1c1c1f 30%, #161616 100%)"
      : "linear-gradient(180deg, #161616 0%, #1c1c1f 70%, #F7F3EE 100%)";
  return <div style={{ background }} className="h-24 w-full sm:h-36 relative z-10" aria-hidden="true" />;
}

function BeatEyebrow({ children, dark }: { children: ReactNode; dark?: boolean }) {
  return (
    <span
      className="inline-block text-[11px] font-extrabold uppercase tracking-[0.2em] px-3.5 py-1 rounded-full border"
      style={{
        color: dark ? "var(--color-coral)" : "var(--color-deep-clay)",
        borderColor: dark ? "rgba(217,107,79,0.25)" : "rgba(169,79,61,0.15)",
        background: dark ? "rgba(217,107,79,0.06)" : "rgba(169,79,61,0.04)",
      }}
    >
      {children}
    </span>
  );
}

function BeatHeading({ children, dark }: { children: ReactNode; dark?: boolean }) {
  return (
    <h2
      className="mt-6 max-w-[14ch] text-[clamp(2.5rem,4.5vw+1rem,4.3rem)] font-bold leading-[0.96] tracking-[-0.04em] text-balance"
      style={{ color: dark ? "#F7F3EE" : "#161616" }}
    >
      {children}
    </h2>
  );
}

interface BeatShellProps {
  eyebrow: string;
  heading: string;
  support?: string;
  dark?: boolean;
  children: ReactNode;
  id?: string;
  className?: string;
  gridOpacity?: number;
  gridSize?: number;
  glow?: ReactNode;
}

function BeatShell({
  eyebrow,
  heading,
  support,
  dark,
  children,
  id,
  className,
  gridOpacity = 0.03,
  gridSize = 56,
  glow,
}: BeatShellProps) {
  return (
    <div
      id={id}
      className={cn(
        "relative overflow-hidden px-6 py-24 sm:py-32 md:px-10 lg:min-h-[85vh] lg:py-0 flex items-center",
        dark ? "bg-[#161616] text-[#F7F3EE]" : "bg-[#F7F3EE] text-[#161616]",
        className
      )}
    >
      {/* Dynamic Grid Pattern */}
      <div
        className="pointer-events-none absolute inset-0 bg-center"
        style={{
          opacity: gridOpacity,
          backgroundImage: dark
            ? `linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)`
            : `linear-gradient(rgba(22,22,22,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(22,22,22,0.08) 1px, transparent 1px)`,
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
          <BeatEyebrow dark={dark}>{eyebrow}</BeatEyebrow>
          <BeatHeading dark={dark}>{heading}</BeatHeading>
          {support && (
            <p className={cn("mt-6 text-base leading-relaxed text-pretty max-w-[38rem]", dark ? "text-white/70" : "text-[#2A2A2A]/75")}>
              {support}
            </p>
          )}
        </motion.div>

        <div className="w-full flex justify-center items-center">{children}</div>
      </div>
    </div>
  );
}

export function LeadRescueStoryHero() {
  return (
    <section id="hero" className="relative w-full overflow-hidden">
      {/* Beat 1 — Lost enquiries graveyard */}
      <div className="relative overflow-hidden bg-[#F7F3EE] px-6 pb-24 pt-28 sm:pt-36 md:px-10 lg:min-h-screen lg:pb-28 lg:pt-40 flex items-center">
        {/* Soft grid background */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.04] bg-[linear-gradient(rgba(22,22,22,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(22,22,22,0.12)_1px,transparent_1px)] bg-[size:64px_64px] bg-center" />
        
        {/* Dramatic ambient warm illumination */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_35%,rgba(217,107,79,0.08),transparent_55%),radial-gradient(circle_at_80%_65%,rgba(231,222,210,0.45),transparent_60%)]" />
        
        <div className="pointer-events-none absolute inset-x-0 top-0 h-96 bg-[radial-gradient(ellipse_at_top,rgba(217,107,79,0.12),transparent_70%)]" />

        <div className="relative z-10 mx-auto grid w-full max-w-[84rem] gap-12 lg:grid-cols-[minmax(0,0.92fr)_minmax(26rem,1.08fr)] lg:items-center xl:gap-16">
          <div className="max-w-[46rem]">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE }}
            >
              <BeatEyebrow>{BEAT1.eyebrow}</BeatEyebrow>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.08, ease: EASE }}
              className="mt-6 max-w-[12ch] font-sans text-[clamp(3.3rem,8vw,5.6rem)] font-extrabold leading-[0.94] tracking-[-0.05em] text-[#161616] text-balance"
            >
              {BEAT1.heading}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.16, ease: EASE }}
              className="mt-6 max-w-[36rem] text-lg font-medium leading-relaxed text-[#2A2A2A]/80 text-pretty"
            >
              {BEAT1.support}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.24, ease: EASE }}
              className="mt-10 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center"
            >
              <Link
                href="#final-cta"
                className="inline-flex h-14 w-full items-center justify-center rounded-full bg-[#161616] px-8 text-[13px] font-bold uppercase tracking-[0.15em] text-[#F7F3EE] shadow-[0_12px_28px_rgba(22,22,22,0.15)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2A2A2A] hover:shadow-[0_16px_36px_rgba(22,22,22,0.22)] sm:w-auto"
              >
                {BEAT1.primaryCta}
              </Link>

              <Link
                href="#enquiry-capture"
                className="group inline-flex h-14 w-full items-center justify-center rounded-full border border-[#161616]/10 bg-white/40 backdrop-blur-md px-8 text-[13px] font-bold uppercase tracking-[0.15em] text-[#161616] shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/60 sm:w-auto"
              >
                {BEAT1.secondaryCta}
                <ArrowRight
                  className="ml-3 transition-transform group-hover:translate-x-1.5"
                  size={15}
                  strokeWidth={2.4}
                  aria-hidden="true"
                />
              </Link>
            </motion.div>
          </div>

          {/* Premium floating graveyard widgets */}
          <div className="relative mx-auto h-[28rem] w-full max-w-[32rem] lg:h-[32rem]">
            <ChaosFragment
              kind="call"
              label="Missed call — no reply"
              className="left-[2%] top-[4%]"
              rotate={-6}
              delay={0.1}
            />
            <ChaosFragment
              kind="form"
              label="Quote form — abandoned"
              className="right-[2%] top-[28%]"
              rotate={4}
              delay={0.2}
            />
            <ChaosFragment
              kind="message"
              label="WhatsApp — unanswered for 3 days"
              className="left-[8%] bottom-[6%]"
              rotate={-3}
              delay={0.3}
            />
          </div>
        </div>
      </div>

      {/* Beat 2 — Web Form Captured */}
      <BeatShell
        eyebrow={BEAT2_FORM.eyebrow}
        heading={BEAT2_FORM.heading}
        gridSize={48}
        gridOpacity={0.03}
        glow={
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(217,107,79,0.06),transparent_55%)]" />
        }
      >
        <FormToLeadSequence fields={BEAT2_FORM.fields} leadCard={BEAT2_FORM.leadCard} />
      </BeatShell>

      <GradientSeam direction="to-dark" />

      {/* Beat 3 — Owner WhatsApp / Email alerted */}
      <BeatShell
        eyebrow={BEAT3_ALERT.eyebrow}
        heading={BEAT3_ALERT.heading}
        dark
        gridSize={56}
        gridOpacity={0.03}
        glow={
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_75%_50%,rgba(37,211,102,0.12),transparent_50%)]" />
        }
      >
        <div className="relative w-full max-w-lg mx-auto flex flex-col items-center gap-8 py-4">
          <PhoneMockup dark>
            <div className="flex h-full flex-col justify-end p-4 pb-10">
              <WhatsAppNotification {...BEAT3_ALERT.notification} />
            </div>
          </PhoneMockup>
          <EmailAlertCard {...BEAT3_ALERT.email} />
        </div>
      </BeatShell>

      {/* Beat 4 — Missed-call AI answering rescue */}
      <BeatShell
        eyebrow={BEAT4_MISSED_CALL.eyebrow}
        heading={BEAT4_MISSED_CALL.heading}
        dark
        gridSize={64}
        gridOpacity={0.03}
        glow={
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_75%_50%,rgba(245,158,11,0.08),transparent_50%)]" />
        }
      >
        <div className="relative w-full max-w-lg mx-auto flex flex-col items-center gap-8 py-4">
          <PhoneMockup dark>
            <MissedCallScreen caller={BEAT4_MISSED_CALL.caller} />
          </PhoneMockup>
          <ComingSoonModule
            title={BEAT4_MISSED_CALL.comingSoon.title}
            steps={BEAT4_MISSED_CALL.comingSoon.steps}
          />
        </div>
      </BeatShell>

      {/* Beat 5 — Lead dashboard */}
      <BeatShell
        eyebrow={BEAT5_DASHBOARD.eyebrow}
        heading={BEAT5_DASHBOARD.heading}
        dark
        gridSize={48}
        gridOpacity={0.02}
        glow={
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_75%_50%,rgba(217,107,79,0.04),transparent_60%)]" />
        }
      >
        <DashboardTiles tiles={BEAT5_DASHBOARD.tiles} />
      </BeatShell>

      {/* Beat 6 — Review loop */}
      <BeatShell
        eyebrow={BEAT6_REVIEW.eyebrow}
        heading={BEAT6_REVIEW.heading}
        dark
        gridSize={56}
        gridOpacity={0.03}
        glow={
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_75%_50%,rgba(66,133,244,0.08)_0%,rgba(251,188,4,0.06)_40%,transparent_70%)]" />
        }
      >
        <ReviewFlowSequence
          prompt={BEAT6_REVIEW.prompt}
          positive={BEAT6_REVIEW.positive}
          reviewPrompt={BEAT6_REVIEW.reviewPrompt}
        />
      </BeatShell>

      <GradientSeam direction="to-light" />

      {/* Beat 7 — Website Rebuild / Uplift Bridge */}
      <BeatShell
        eyebrow="WEBSITE UPLIFT"
        heading={BEAT7_UPLIFT.heading}
        support={BEAT7_UPLIFT.support}
        gridSize={56}
        gridOpacity={0.03}
        glow={
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_75%_50%,rgba(217,107,79,0.05),transparent_60%)]" />
        }
      >
        <div className="w-full flex flex-col items-center gap-8">
          <WebsiteUpliftCard />
          <motion.div 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              href={BEAT7_UPLIFT.href}
              className="group inline-flex h-13 items-center justify-center gap-3 rounded-full border border-[#161616]/10 bg-white/70 backdrop-blur-sm px-7 text-[13px] font-bold uppercase tracking-[0.12em] text-[#161616] shadow-[0_4px_16px_rgba(22,22,22,0.04),inset_0_1px_0_rgba(255,255,255,0.8)] transition-all duration-300 hover:bg-white hover:border-[#161616]/20 hover:shadow-[0_8px_24px_rgba(22,22,22,0.08)]"
            >
              {BEAT7_UPLIFT.cta}
              <ArrowRight
                className="transition-transform group-hover:translate-x-1.5"
                size={15}
                strokeWidth={2.4}
                aria-hidden="true"
              />
            </Link>
          </motion.div>
        </div>
      </BeatShell>
    </section>
  );
}
