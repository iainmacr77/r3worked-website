"use client";

import { useRef, useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useSpring,
  useInView,
  type MotionValue,
} from "framer-motion";
import {
  Send,
  Bell,
  ClipboardCheck,
  ArrowRight,
  User,
  MapPin,
  Briefcase,
  Check,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Follow-up steps (left column)                                       */
/* ------------------------------------------------------------------ */
const FOLLOW_UP_STEPS = [
  {
    number: "01",
    title: "Instant acknowledgement",
    desc: "The prospect receives immediate confirmation their enquiry has landed — no silence, no uncertainty.",
  },
  {
    number: "02",
    title: "Client notified clearly",
    desc: "The business owner sees the lead straight away — with the detail that matters, not buried in noise.",
  },
  {
    number: "03",
    title: "Lead logged properly",
    desc: "Every enquiry is captured in a clean, structured record — visible, searchable, impossible to lose.",
  },
  {
    number: "04",
    title: "Follow-up made easier",
    desc: "With the lead documented and both sides informed, the path from first contact to booked work gets shorter.",
  },
];

/* ------------------------------------------------------------------ */
/*  Dispatch outcomes (right column visual)                             */
/* ------------------------------------------------------------------ */
const DISPATCH_OUTCOMES = [
  {
    icon: Send,
    label: "Confirmation sent",
    detail: "Prospect acknowledged",
  },
  {
    icon: Bell,
    label: "Client alerted",
    detail: "Notification delivered",
  },
  {
    icon: ClipboardCheck,
    label: "Lead recorded",
    detail: "Logged and structured",
  },
  {
    icon: ArrowRight,
    label: "Follow-up ready",
    detail: "Next action visible",
  },
];

/* ------------------------------------------------------------------ */
/*  Activity log entries                                                 */
/* ------------------------------------------------------------------ */
const ACTIVITY_LOG = [
  { time: "12:04:32", event: "Enquiry received" },
  { time: "12:04:32", event: "Confirmation sent to prospect" },
  { time: "12:04:33", event: "Client notification delivered" },
  { time: "12:04:33", event: "Lead logged to record" },
];

/* ------------------------------------------------------------------ */
/*  Component                                                            */
/* ------------------------------------------------------------------ */
export function LeadCaptureLayer() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 20,
  });

  const yTransform = useTransform(smoothProgress, [0, 1], [24, -24]);

  return (
    <section
      id="follow-up-system"
      className="light-section-seam bg-[#F7F3EE] px-6 py-24 md:px-10 md:py-32 overflow-hidden"
    >
      <div className="mx-auto max-w-[84rem]" ref={ref}>
        {/* ───────── Header ───────── */}
        <div className="mb-20 max-w-[48rem]">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="type-eyebrow text-[#B86B5C]"
          >
            Phase 03
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="mt-6 type-h2 text-[#161616]"
          >
            From enquiry to organised action.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="type-support mt-6 text-[#2A2A2A]/70 max-w-[42rem]"
          >
            Once an enquiry comes in, the next steps should be instant and
            obvious — for the prospect and for the business. We confirm receipt,
            notify the client, log the lead cleanly and create a more reliable
            path to booked work.
          </motion.p>
        </div>

        {/* ───────── Two-column layout ───────── */}
        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-16 lg:gap-20 items-center">
          {/* ── Left: Follow-up steps ── */}
          <div className="relative pl-8">
            <div className="absolute left-[9px] top-2 bottom-2 w-px bg-gradient-to-b from-[#D96B4F]/40 via-[#D96B4F]/15 to-transparent" />

            <div className="space-y-14">
              {FOLLOW_UP_STEPS.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    delay: index * 0.14,
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative"
                >
                  <div className="absolute -left-[31px] top-1.5 w-[18px] h-[18px] rounded-full bg-[#F7F3EE] border-2 border-[#D96B4F]/50 flex items-center justify-center shadow-[0_0_0_4px_#F7F3EE]">
                    <div className="w-[6px] h-[6px] rounded-full bg-[#D96B4F]" />
                  </div>

                  <div>
                    <div className="flex items-center gap-3 mb-1.5">
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#D96B4F]/50 tabular-nums">
                        {step.number}
                      </span>
                      <h3 className="text-[1.05rem] font-semibold text-[#161616] leading-tight">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-[#2A2A2A]/60 text-sm leading-relaxed max-w-[28rem]">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ── Right: Dispatch orchestration visual ── */}
          <DispatchBoard yTransform={yTransform} />
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Dispatch Board Visual                                               */
/* ------------------------------------------------------------------ */
function DispatchBoard({ yTransform }: { yTransform: MotionValue<number> }) {
  return (
    <motion.div style={{ y: yTransform }} className="relative">
      <div className="relative overflow-hidden rounded-2xl border border-[#161616]/[0.06] bg-gradient-to-br from-[#EDE7DD] via-[#E7DED2] to-[#E2D8CA] p-6 md:p-8 shadow-[0_34px_90px_rgba(72,50,37,0.06),0_12px_28px_rgba(72,50,37,0.03),inset_0_1px_0_rgba(255,255,255,0.6)]">
        {/* Subtle board surface highlight */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.4)_0%,transparent_60%)]" />

        {/* ─ Enquiry card ─ */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="relative"
        >
          <div className="rounded-xl bg-white border border-[#161616]/[0.07] p-5 shadow-[0_6px_20px_rgba(22,22,22,0.04),0_1px_3px_rgba(22,22,22,0.02),inset_0_1px_0_rgba(255,255,255,0.9)]">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#D96B4F]/12 to-[#D96B4F]/5 border border-[#D96B4F]/10 flex items-center justify-center">
                  <User size={15} className="text-[#D96B4F]" />
                </div>
                <div>
                  <span className="text-[0.84rem] font-semibold text-[#161616] block leading-tight">
                    New Enquiry
                  </span>
                  <span className="text-[0.68rem] text-[#161616]/35 font-medium">
                    Just now
                  </span>
                </div>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#D96B4F]/8 border border-[#D96B4F]/12 px-2.5 py-1 text-[0.58rem] font-bold uppercase tracking-[0.14em] text-[#D96B4F]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D96B4F] animate-pulse" />
                Received
              </span>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-3 border-t border-[#161616]/[0.05]">
              <EnquiryField icon={User} label="Name" value="James Whitfield" />
              <EnquiryField
                icon={Briefcase}
                label="Project"
                value="Extension"
              />
              <EnquiryField icon={MapPin} label="Location" value="BS6 7AA" />
            </div>
          </div>
        </motion.div>

        {/* ─ Routing connector ─ */}
        <div className="relative flex flex-col items-center py-4">
          <div className="h-4 w-px bg-gradient-to-b from-[#D96B4F]/25 to-[#D96B4F]/12" />
          <div className="relative my-1 flex items-center justify-center">
            <div className="w-[18px] h-[18px] rounded-full bg-gradient-to-br from-[#D96B4F]/20 to-[#D96B4F]/10 border border-[#D96B4F]/15 flex items-center justify-center shadow-[0_0_0_4px_rgba(217,107,79,0.04)]">
              <div className="w-[6px] h-[6px] rounded-full bg-[#D96B4F]/60" />
            </div>
            <div className="absolute left-[15%] right-[15%] h-px bg-[#D96B4F]/10" />
          </div>
          <div className="h-3 w-px bg-gradient-to-b from-[#D96B4F]/10 to-transparent" />
        </div>

        {/* ─ 2×2 outcome grid ─ */}
        <div className="grid grid-cols-2 gap-3">
          {DISPATCH_OUTCOMES.map((outcome, i) => {
            const Icon = outcome.icon;
            return (
              <motion.div
                key={outcome.label}
                initial={{ opacity: 0, y: 14, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.4 + i * 0.1,
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group rounded-lg bg-white/90 border border-[#161616]/[0.05] p-4 shadow-[0_2px_10px_rgba(22,22,22,0.02),inset_0_1px_0_rgba(255,255,255,0.8)] transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(22,22,22,0.04)]"
              >
                <div className="flex items-center justify-between mb-2.5">
                  <div className="w-7 h-7 rounded-lg bg-[#D96B4F]/[0.06] border border-[#D96B4F]/10 flex items-center justify-center">
                    <Icon size={13} className="text-[#D96B4F]" />
                  </div>
                  <div className="w-[18px] h-[18px] rounded-full bg-[#2E7D5B]/12 flex items-center justify-center">
                    <Check
                      size={10}
                      className="text-[#2E7D5B]"
                      strokeWidth={3}
                    />
                  </div>
                </div>
                <p className="text-[0.78rem] font-semibold text-[#161616] leading-tight mb-0.5">
                  {outcome.label}
                </p>
                <p className="text-[0.66rem] text-[#161616]/40 leading-relaxed">
                  {outcome.detail}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* ─ Live activity feed ─ */}
        <LiveActivityFeed />
      </div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Live Activity Feed                                                  */
/* ------------------------------------------------------------------ */
function LiveActivityFeed() {
  const [activeIndex, setActiveIndex] = useState(0);
  const feedRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(feedRef, { once: false, margin: "-40px" });

  useEffect(() => {
    if (!isInView) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % ACTIVITY_LOG.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [isInView]);

  const entry = ACTIVITY_LOG[activeIndex];

  return (
    <motion.div
      ref={feedRef}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.85, duration: 0.6 }}
      className="mt-6 pt-5 border-t border-[#161616]/[0.04]"
    >
      <div className="flex items-center gap-3 rounded-xl bg-white/50 border border-[#161616]/[0.05] px-4 py-3 shadow-[0_1px_4px_rgba(22,22,22,0.02),inset_0_1px_0_rgba(255,255,255,0.6)]">
        <div className="flex items-center gap-1.5 shrink-0">
          <span className="relative flex h-[7px] w-[7px]">
            <span className="absolute inset-0 rounded-full bg-[#2E7D5B]/40 animate-ping" />
            <span className="relative inline-flex h-[7px] w-[7px] rounded-full bg-[#2E7D5B]" />
          </span>
          <span className="text-[0.6rem] font-bold uppercase tracking-[0.16em] text-[#2E7D5B]/70">
            Live
          </span>
        </div>

        <div className="w-px h-3.5 bg-[#161616]/[0.06] shrink-0" />

        <div className="relative flex-1 h-[1.2rem] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ y: 14, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -14, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 flex items-center gap-2.5"
            >
              <span className="text-[0.68rem] font-medium tabular-nums text-[#161616]/25 tracking-wide shrink-0">
                {entry.time}
              </span>
              <span className="text-[0.74rem] text-[#161616]/50 font-medium truncate">
                {entry.event}
              </span>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Enquiry field mini-component                                        */
/* ------------------------------------------------------------------ */
function EnquiryField({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
}) {
  return (
    <div>
      <div className="flex items-center gap-1 mb-1">
        <Icon size={10} className="text-[#161616]/25" />
        <span className="text-[0.58rem] font-semibold uppercase tracking-[0.18em] text-[#161616]/30">
          {label}
        </span>
      </div>
      <p className="text-[0.78rem] font-medium text-[#161616]/75">{value}</p>
    </div>
  );
}
