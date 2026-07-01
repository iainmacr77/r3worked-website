"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
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
} from "./StoryWidgets";

function GradientSeam({ direction }: { direction: "to-dark" | "to-light" }) {
  const background =
    direction === "to-dark"
      ? "linear-gradient(180deg, #F7F3EE 0%, #161616 100%)"
      : "linear-gradient(180deg, #161616 0%, #F7F3EE 100%)";
  return <div style={{ background }} className="h-20 w-full sm:h-28" aria-hidden="true" />;
}

function BeatEyebrow({ children, dark }: { children: ReactNode; dark?: boolean }) {
  return (
    <p
      className="type-eyebrow"
      style={{ color: dark ? "#D96B4F" : "#B86B5C" }}
    >
      {children}
    </p>
  );
}

function BeatHeading({ children, dark }: { children: ReactNode; dark?: boolean }) {
  return (
    <h2
      className="mt-4 max-w-[14ch] text-[clamp(2.1rem,3.6vw+1rem,3.6rem)] font-bold leading-[1.03] tracking-[-0.03em] text-balance"
      style={{ color: dark ? "#F7F3EE" : "#161616" }}
    >
      {children}
    </h2>
  );
}

function BeatShell({
  eyebrow,
  heading,
  dark,
  children,
}: {
  eyebrow: string;
  heading: string;
  dark?: boolean;
  children: ReactNode;
}) {
  return (
    <div
      className="px-6 py-20 sm:py-24 md:px-10 lg:min-h-[85vh] lg:py-0"
      style={{ background: dark ? "#161616" : "#F7F3EE" }}
    >
      <div className="mx-auto grid w-full max-w-[84rem] items-center gap-12 lg:min-h-[85vh] lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] xl:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: EASE }}
        >
          <BeatEyebrow dark={dark}>{eyebrow}</BeatEyebrow>
          <BeatHeading dark={dark}>{heading}</BeatHeading>
        </motion.div>

        <div>{children}</div>
      </div>
    </div>
  );
}

export function LeadRescueStoryHero() {
  return (
    <section id="hero" className="relative w-full overflow-hidden">
      {/* Beat 1 — the problem */}
      <div className="relative overflow-hidden bg-[#F7F3EE] px-6 pb-20 pt-28 sm:pt-32 md:px-10 lg:min-h-screen lg:pb-24 lg:pt-36">
        <div className="pointer-events-none absolute inset-0 opacity-[0.04] bg-[linear-gradient(rgba(22,22,22,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(22,22,22,0.1)_1px,transparent_1px)] bg-[size:64px_64px] bg-center" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-[radial-gradient(ellipse_at_top,rgba(217,107,79,0.12),transparent_64%)]" />

        <div className="relative z-10 mx-auto grid w-full max-w-[84rem] gap-12 lg:grid-cols-[minmax(0,0.92fr)_minmax(26rem,1.08fr)] lg:items-center xl:gap-16">
          <div className="max-w-[44rem]">
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE }}
              className="type-eyebrow text-[#B86B5C]"
            >
              {BEAT1.eyebrow}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.08, ease: EASE }}
              className="mt-5 max-w-[10ch] font-sans text-[clamp(3.35rem,10vw,5.9rem)] font-bold leading-[0.94] tracking-[-0.055em] text-[#161616] text-balance md:mt-6"
            >
              {BEAT1.heading}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.16, ease: EASE }}
              className="type-support mt-6 max-w-[38rem] text-[#2A2A2A]/78"
            >
              {BEAT1.support}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.24, ease: EASE }}
              className="mt-8 flex flex-col items-stretch gap-3.5 sm:flex-row sm:items-center"
            >
              <Link
                href="#final-cta"
                className="inline-flex h-14 w-full items-center justify-center rounded-full bg-[#161616] px-8 text-[13px] font-bold uppercase tracking-[0.1em] text-[#F7F3EE] shadow-[0_12px_24px_rgba(22,22,22,0.12)] transition-[transform,background] duration-300 hover:-translate-y-0.5 hover:bg-[#2A2A2A] sm:w-auto"
              >
                {BEAT1.primaryCta}
              </Link>

              <Link
                href="#enquiry-capture"
                className="group inline-flex h-14 w-full items-center justify-center rounded-full border border-[#161616]/10 bg-white/35 px-8 text-[13px] font-bold uppercase tracking-[0.1em] text-[#161616] shadow-[inset_0_1px_0_rgba(255,255,255,0.72)] transition-[transform,background] duration-300 hover:-translate-y-0.5 hover:bg-white/60 sm:w-auto"
              >
                {BEAT1.secondaryCta}
                <ArrowRight
                  className="ml-3 transition-transform group-hover:translate-x-1"
                  size={15}
                  strokeWidth={2.4}
                  aria-hidden="true"
                />
              </Link>
            </motion.div>
          </div>

          {/* Oversized "lost enquiry" chaos fragments — the problem, made visible */}
          <div className="relative mx-auto h-[26rem] w-full max-w-[30rem] lg:h-[30rem]">
            <ChaosFragment
              kind="call"
              label="Missed call — no one answered"
              className="left-[4%] top-[6%]"
              rotate={-7}
              delay={0}
            />
            <ChaosFragment
              kind="form"
              label="Quote form — left half-finished"
              className="right-[2%] top-[32%]"
              rotate={5}
              delay={0.12}
            />
            <ChaosFragment
              kind="message"
              label="WhatsApp enquiry — no reply for 3 days"
              className="left-[14%] bottom-[4%]"
              rotate={-3}
              delay={0.24}
            />
          </div>
        </div>
      </div>

      {/* Beat 2 — web form captured (still light, still the customer's world) */}
      <BeatShell eyebrow={BEAT2_FORM.eyebrow} heading={BEAT2_FORM.heading}>
        <FormToLeadSequence fields={BEAT2_FORM.fields} leadCard={BEAT2_FORM.leadCard} />
      </BeatShell>

      <GradientSeam direction="to-dark" />

      {/* Beat 3 — WhatsApp/email alert (entering the control room) */}
      <BeatShell eyebrow={BEAT3_ALERT.eyebrow} heading={BEAT3_ALERT.heading} dark>
        <div className="mx-auto flex max-w-md flex-col items-center gap-6">
          <PhoneMockup dark>
            <div className="flex h-full flex-col justify-end p-3 pb-8">
              <WhatsAppNotification {...BEAT3_ALERT.notification} />
            </div>
          </PhoneMockup>
          <EmailAlertCard {...BEAT3_ALERT.email} />
        </div>
      </BeatShell>

      {/* Beat 4 — missed-call rescue, clearly coming soon */}
      <BeatShell eyebrow={BEAT4_MISSED_CALL.eyebrow} heading={BEAT4_MISSED_CALL.heading} dark>
        <div className="mx-auto flex max-w-md flex-col items-center gap-6">
          <PhoneMockup dark>
            <MissedCallScreen caller={BEAT4_MISSED_CALL.caller} />
          </PhoneMockup>
          <ComingSoonModule
            title={BEAT4_MISSED_CALL.comingSoon.title}
            steps={BEAT4_MISSED_CALL.comingSoon.steps}
          />
        </div>
      </BeatShell>

      {/* Beat 5 — lead log / dashboard */}
      <BeatShell eyebrow={BEAT5_DASHBOARD.eyebrow} heading={BEAT5_DASHBOARD.heading} dark>
        <DashboardTiles tiles={BEAT5_DASHBOARD.tiles} />
      </BeatShell>

      {/* Beat 6 — review loop */}
      <BeatShell eyebrow={BEAT6_REVIEW.eyebrow} heading={BEAT6_REVIEW.heading} dark>
        <ReviewFlowSequence
          prompt={BEAT6_REVIEW.prompt}
          positive={BEAT6_REVIEW.positive}
          reviewPrompt={BEAT6_REVIEW.reviewPrompt}
        />
      </BeatShell>

      <GradientSeam direction="to-light" />

      {/* Beat 7 — website uplift, compact bridge to the existing showcase */}
      <div className="bg-[#F7F3EE] px-6 py-16 sm:py-20 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mx-auto flex max-w-[54rem] flex-col items-center gap-4 text-center"
        >
          <h2 className="max-w-[22ch] text-[clamp(1.8rem,2.8vw+1rem,2.75rem)] font-bold leading-[1.05] tracking-[-0.03em] text-[#161616] text-balance">
            {BEAT7_UPLIFT.heading}
          </h2>
          <p className="max-w-[42ch] text-[#2A2A2A]/72">{BEAT7_UPLIFT.support}</p>
          <Link
            href={BEAT7_UPLIFT.href}
            className="group mt-2 inline-flex h-12 items-center justify-center gap-2 rounded-full border border-[#161616]/10 bg-white/60 px-6 text-[13px] font-bold uppercase tracking-[0.1em] text-[#161616] shadow-[inset_0_1px_0_rgba(255,255,255,0.72)] transition-[transform,background] duration-300 hover:-translate-y-0.5 hover:bg-white"
          >
            {BEAT7_UPLIFT.cta}
            <ArrowRight
              className="transition-transform group-hover:translate-x-1"
              size={15}
              strokeWidth={2.4}
              aria-hidden="true"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
