"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Bell,
  ClipboardCheck,
  FileText,
  MessageSquare,
  PhoneMissed,
  Star,
} from "lucide-react";

const LEAD_RESCUE_CARDS = [
  {
    icon: FileText,
    title: "Website enquiry captured",
    body: "Clearer forms and quote paths catch the job before it drifts.",
    meta: "Web form",
  },
  {
    icon: Bell,
    title: "Instant alert sent",
    body: "WhatsApp and email notifications get the lead in front of you fast.",
    meta: "WhatsApp / email",
  },
  {
    icon: ClipboardCheck,
    title: "Lead logged",
    body: "Every enquiry is recorded with the key details and next action.",
    meta: "Dashboard",
  },
  {
    icon: Star,
    title: "Review follow-up",
    body: "Completed jobs trigger feedback first, then a Google review request.",
    meta: "Post-job",
  },
];

export function HomepageHero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-[#F7F3EE] px-6 pb-20 pt-28 sm:pt-32 md:px-10 lg:min-h-screen lg:pb-24 lg:pt-36"
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] bg-[linear-gradient(rgba(22,22,22,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(22,22,22,0.1)_1px,transparent_1px)] bg-[size:64px_64px] bg-center" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-[radial-gradient(ellipse_at_top,rgba(217,107,79,0.12),transparent_64%)]" />

      <div className="relative z-10 mx-auto grid w-full max-w-[84rem] gap-12 lg:grid-cols-[minmax(0,0.92fr)_minmax(26rem,1.08fr)] lg:items-center xl:gap-16">
        <div className="max-w-[44rem]">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.2, 0.65, 0.3, 0.9] }}
            className="type-eyebrow text-[#B86B5C]"
          >
            LEAD RESCUE FOR TRADES &amp; LOCAL SERVICE BUSINESSES
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.08, ease: [0.2, 0.65, 0.3, 0.9] }}
            className="mt-5 max-w-[10ch] font-sans text-[clamp(3.35rem,10vw,5.9rem)] font-bold leading-[0.94] tracking-[-0.055em] text-[#161616] text-balance md:mt-6"
          >
            Stop losing enquiries.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.16, ease: [0.2, 0.65, 0.3, 0.9] }}
            className="type-support mt-6 max-w-[38rem] text-[#2A2A2A]/78"
          >
            R3WORKED captures website enquiries and missed calls, sends instant
            WhatsApp/email alerts, logs every lead, and helps turn completed
            jobs into more Google reviews.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.24, ease: [0.2, 0.65, 0.3, 0.9] }}
            className="mt-8 flex flex-col items-stretch gap-3.5 sm:flex-row sm:items-center"
          >
            <Link
              href="#final-cta"
              className="inline-flex h-14 w-full items-center justify-center rounded-full bg-[#161616] px-8 text-[13px] font-bold uppercase tracking-[0.1em] text-[#F7F3EE] shadow-[0_12px_24px_rgba(22,22,22,0.12)] transition-[transform,background] duration-300 hover:-translate-y-0.5 hover:bg-[#2A2A2A] sm:w-auto"
            >
              Stop losing enquiries
            </Link>

            <Link
              href="#enquiry-capture"
              className="group inline-flex h-14 w-full items-center justify-center rounded-full border border-[#161616]/10 bg-white/35 px-8 text-[13px] font-bold uppercase tracking-[0.1em] text-[#161616] shadow-[inset_0_1px_0_rgba(255,255,255,0.72)] transition-[transform,background] duration-300 hover:-translate-y-0.5 hover:bg-white/60 sm:w-auto"
            >
              See how it works
              <ArrowRight
                className="ml-3 transition-transform group-hover:translate-x-1"
                size={15}
                strokeWidth={2.4}
                aria-hidden="true"
              />
            </Link>
          </motion.div>
        </div>

        <LeadRescueCommandCentre />
      </div>
    </section>
  );
}

function LeadRescueCommandCentre() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.18, ease: [0.2, 0.65, 0.3, 0.9] }}
      className="relative mx-auto w-full max-w-[42rem] lg:ml-auto"
      aria-label="Lead Rescue dashboard preview"
    >
      <div className="absolute -inset-4 rounded-[2.25rem] border border-[#161616]/5 bg-white/30 shadow-[0_28px_90px_rgba(72,50,37,0.09)]" />

      <div className="relative overflow-hidden rounded-[1.65rem] border border-[#161616] bg-[#161616] p-4 shadow-[8px_8px_0px_#B86B5C] sm:p-5">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#F7F3EE]/10 pb-4">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#D96B4F]">
              Lead Rescue
            </p>
            <p className="mt-1 text-sm font-semibold text-[#F7F3EE]">
              Enquiry control room
            </p>
          </div>

          <div className="inline-flex items-center gap-2 rounded-full border border-[#F7F3EE]/10 bg-[#F7F3EE]/5 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#F7F3EE]/64">
            <span className="h-1.5 w-1.5 rounded-full bg-[#D96B4F]" />
            Routing
          </div>
        </div>

        <div className="mt-4 rounded-2xl border border-[#F7F3EE]/10 bg-[#F7F3EE] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] sm:p-5">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#D96B4F]">
                New serious enquiry
              </p>
              <h2 className="mt-2 text-[1.35rem] font-bold leading-tight tracking-[-0.03em] text-[#161616] sm:text-[1.55rem]">
                Kitchen extension quote
              </h2>
              <p className="mt-2 max-w-[26rem] text-sm leading-6 text-[#2A2A2A]/58">
                Source captured, owner alerted, lead logged, next step visible.
              </p>
            </div>

            <div className="rounded-xl border border-[#161616]/8 bg-white px-4 py-3 text-right shadow-[0_8px_22px_rgba(22,22,22,0.04)]">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#161616]/35">
                Response target
              </p>
              <p className="mt-1 text-2xl font-bold tracking-[-0.04em] text-[#161616]">
                5 min
              </p>
            </div>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {LEAD_RESCUE_CARDS.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className="rounded-xl border border-[#161616]/7 bg-white p-4 shadow-[0_8px_24px_rgba(22,22,22,0.035)]"
                >
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#D96B4F]/12 bg-[#D96B4F]/8">
                      <Icon size={15} className="text-[#D96B4F]" aria-hidden="true" />
                    </div>
                    <span className="rounded-full bg-[#161616]/[0.04] px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.14em] text-[#161616]/38">
                      {card.meta}
                    </span>
                  </div>
                  <h3 className="text-[0.92rem] font-bold leading-snug text-[#161616]">
                    {card.title}
                  </h3>
                  <p className="mt-1.5 text-[0.78rem] leading-5 text-[#2A2A2A]/58">
                    {card.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-4 grid gap-3 rounded-2xl border border-[#F7F3EE]/10 bg-[#F7F3EE]/[0.04] p-4 sm:grid-cols-[auto_1fr_auto] sm:items-center">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#D96B4F]/20 bg-[#D96B4F]/10">
            <PhoneMissed size={17} className="text-[#D96B4F]" aria-hidden="true" />
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <p className="text-sm font-bold text-[#F7F3EE]">
                Missed-call rescue
              </p>
              <span className="rounded-full border border-[#D96B4F]/25 bg-[#D96B4F]/10 px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.15em] text-[#D96B4F]">
                Coming soon
              </span>
            </div>
            <p className="mt-1 text-[0.78rem] leading-5 text-[#F7F3EE]/48">
              AI voice answering for overflow and missed calls.
            </p>
          </div>
          <MessageSquare
            size={18}
            className="hidden text-[#F7F3EE]/24 sm:block"
            aria-hidden="true"
          />
        </div>
      </div>
    </motion.div>
  );
}
