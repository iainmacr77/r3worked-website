"use client";

import { Fragment, useEffect, useRef, useState, type ReactNode } from "react";
import {
  motion,
  AnimatePresence,
  animate,
  useInView,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "framer-motion";
import {
  AudioLines,
  CheckCircle2,
  FileText,
  Mail,
  MessageSquare,
  Phone,
  PhoneMissed,
  Smartphone,
  Sparkles,
  Star,
  User,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

export const EASE: [number, number, number, number] = [0.2, 0.65, 0.3, 0.9];

// ── Phone mockup ──────────────────────────────────────────────────────────

export function PhoneMockup({
  children,
  className,
  dark = false,
  vibrate = false,
}: {
  children: ReactNode;
  className?: string;
  dark?: boolean;
  vibrate?: boolean;
}) {
  const reduceMotion = useReducedMotion();

  const vibrateAnimation =
    vibrate && !reduceMotion
      ? {
          x: [0, -2, 2, -2, 2, -1, 1, -1, 1, 0],
          rotate: [0, -0.4, 0.4, -0.4, 0.4, -0.2, 0.2, -0.1, 0.1, 0],
        }
      : { x: 0, rotate: 0 };

  const transition =
    vibrate && !reduceMotion
      ? { duration: 0.45, repeat: Infinity, repeatType: "mirror" as const }
      : { duration: 0.2 };

  return (
    <motion.div
      animate={vibrateAnimation}
      transition={transition}
      className={cn("relative w-[185px] sm:w-[205px]", className)}
    >
      {/* Metallic outer frame */}
      <div
        className="relative overflow-hidden rounded-[2.6rem] border-[8px] border-[#2e2e30] bg-[#161616] shadow-[0_0_0_2px_rgba(255,255,255,0.05),0_30px_70px_rgba(0,0,0,0.55),inset_0_0_8px_rgba(255,255,255,0.12)]"
        style={{ aspectRatio: "9 / 19.3" }}
      >
        {/* Dynamic island */}
        <div className="absolute left-1/2 top-2.5 z-30 flex h-5 w-20 -translate-x-1/2 items-center justify-end rounded-full border border-white/5 bg-[#1c1c1d] px-2.5">
          <div className="h-1.5 w-1.5 rounded-full bg-[#0a0a0c]" />
        </div>

        {/* Glass reflection */}
        <div className="pointer-events-none absolute inset-0 z-20 bg-[linear-gradient(135deg,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0)_55%,rgba(255,255,255,0.03)_100%)]" />

        <div
          className={cn(
            "relative flex h-full w-full flex-col overflow-hidden pt-9",
            dark ? "bg-[#101012]" : "bg-[#F5F2EA]"
          )}
        >
          {children}
        </div>
      </div>

      {/* Hardware buttons */}
      <div className="absolute -left-2 top-20 h-10 w-[2.5px] rounded-r bg-[#2e2e30]" />
      <div className="absolute -left-2 top-32 h-8 w-[2.5px] rounded-r bg-[#2e2e30]" />
      <div className="absolute -right-2 top-24 h-12 w-[2.5px] rounded-l bg-[#2e2e30]" />
    </motion.div>
  );
}

// ── Beat 1 — the leak: live enquiry feed bleeding jobs ───────────────────

type LossChannel = "call" | "form" | "message";

const LOSS_CHANNEL_META: Record<
  LossChannel,
  { icon: LucideIcon; label: string; iconClass: string; tileClass: string }
> = {
  call: {
    icon: PhoneMissed,
    label: "Phone call",
    iconClass: "text-[#D96B4F]",
    tileClass: "bg-[#D96B4F]/10 border-[#D96B4F]/25",
  },
  form: {
    icon: FileText,
    label: "Web form",
    iconClass: "text-[#C08A2E]",
    tileClass: "bg-[#C08A2E]/10 border-[#C08A2E]/25",
  },
  message: {
    icon: MessageSquare,
    label: "WhatsApp",
    iconClass: "text-[#2E7D5B]",
    tileClass: "bg-[#2E7D5B]/10 border-[#2E7D5B]/25",
  },
};

const gbp = (value: number) => `£${value.toLocaleString("en-GB")}`;

export function LostLeadFeed({
  feedLabel,
  statusLabel,
  tag,
  counterLabel,
  footnote,
  leads,
}: {
  feedLabel: string;
  statusLabel: string;
  tag: string;
  counterLabel: string;
  footnote: string;
  leads: readonly {
    job: string;
    area: string;
    value: number;
    channel: LossChannel;
    lostVia: string;
  }[];
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const reduceMotion = useReducedMotion();

  // step 2i → lead i arrives (live); step 2i+1 → lead i flips to lost.
  const finalStep = leads.length * 2;
  const [step, setStep] = useState(0);
  const done = step >= finalStep;

  useEffect(() => {
    if (!inView) return;
    if (reduceMotion) {
      const settle = setTimeout(() => setStep(finalStep), 0);
      return () => clearTimeout(settle);
    }
    const interval = setInterval(() => {
      setStep((prev) => {
        if (prev >= finalStep) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 1300);
    return () => clearInterval(interval);
  }, [inView, reduceMotion, finalStep]);

  // Animated lost-revenue tally
  const total = leads.reduce((sum, lead) => sum + lead.value, 0);
  const tally = useMotionValue(0);
  const tallyText = useTransform(tally, (v) => gbp(Math.round(v)));

  useEffect(() => {
    if (!done) return;
    if (reduceMotion) {
      tally.set(total);
      return;
    }
    const controls = animate(tally, total, { duration: 1.3, ease: EASE });
    return () => controls.stop();
  }, [done, reduceMotion, tally, total]);

  return (
    <div ref={ref} className="relative mx-auto w-full max-w-[26rem]">
      {/* Feed header */}
      <div className="mb-4 flex items-center justify-between px-1">
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500/60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500" />
          </span>
          <span className="whitespace-nowrap text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#161616]/70">
            {feedLabel}
          </span>
        </div>
        <span className="shrink-0 whitespace-nowrap rounded-full border border-red-500/20 bg-red-500/5 px-2.5 py-0.5 text-[9px] font-extrabold uppercase tracking-[0.12em] text-red-600/80">
          {statusLabel}
        </span>
      </div>

      {/* Enquiry cards — min-h reserves the sequence's final height so the
          page doesn't grow underneath scroll-linked sections further down */}
      <div className="flex min-h-[29rem] flex-col gap-3">
        {leads.map((lead, i) => {
          const arrived = step >= i * 2;
          const lost = step >= i * 2 + 1;
          if (!arrived) return null;
          const meta = LOSS_CHANNEL_META[lead.channel];
          const Icon = meta.icon;

          return (
            <motion.div
              key={lead.job}
              layout
              initial={reduceMotion ? false : { opacity: 0, y: -28, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ type: "spring", stiffness: 220, damping: 24 }}
              className={cn(
                "relative overflow-hidden rounded-[1.4rem] border p-4 backdrop-blur-md transition-colors duration-500",
                lost
                  ? "border-[#161616]/8 bg-white/45 shadow-[0_8px_20px_rgba(22,22,22,0.03)]"
                  : "border-[#D96B4F]/30 bg-white/85 shadow-[0_1px_2px_rgba(0,0,0,0.05),0_10px_24px_rgba(217,107,79,0.08),0_28px_56px_rgba(22,22,22,0.08)]"
              )}
            >
              <div className={cn("flex items-start gap-3.5 transition-opacity duration-500", lost && "opacity-55")}>
                <div
                  className={cn(
                    "flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border shadow-inner",
                    meta.tileClass
                  )}
                >
                  <Icon size={16} className={meta.iconClass} aria-hidden="true" />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-baseline justify-between gap-3">
                    <p
                      className={cn(
                        "truncate text-[13px] font-extrabold text-[#161616]",
                        lost && "line-through decoration-red-500/50 decoration-2"
                      )}
                    >
                      {lead.job}
                    </p>
                    <p
                      className={cn(
                        "shrink-0 text-[13px] font-extrabold tabular-nums tracking-tight",
                        lost
                          ? "text-[#161616]/40 line-through decoration-red-500/50 decoration-2"
                          : "text-[#161616]"
                      )}
                    >
                      {gbp(lead.value)}
                    </p>
                  </div>
                  <p className="mt-0.5 text-[11px] font-semibold text-[#161616]/45">
                    {meta.label} · {lead.area}
                  </p>
                </div>
              </div>

              {/* Live: draining response window. Lost: what happened. */}
              <div className="mt-3 pl-[3.1rem]">
                {lost ? (
                  <motion.div
                    initial={reduceMotion ? false : { opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center justify-between gap-3"
                  >
                    <p className="text-[10px] font-bold text-[#161616]/45">{lead.lostVia}</p>
                    <span className="shrink-0 rounded-full border border-red-500/25 bg-red-500/8 px-2.5 py-0.5 text-[8px] font-extrabold uppercase tracking-[0.12em] text-red-600">
                      Gone elsewhere
                    </span>
                  </motion.div>
                ) : (
                  <div className="flex items-center gap-2.5">
                    <div className="h-1 flex-1 overflow-hidden rounded-full bg-[#161616]/6">
                      <motion.div
                        initial={{ scaleX: 1 }}
                        animate={reduceMotion ? { scaleX: 1 } : { scaleX: 0 }}
                        transition={{ duration: 1.2, ease: "linear" }}
                        style={{ originX: 0 }}
                        className="h-full rounded-full bg-gradient-to-r from-[#D96B4F] to-red-500"
                      />
                    </div>
                    <span className="shrink-0 text-[8px] font-extrabold uppercase tracking-[0.12em] text-[#D96B4F]">
                      Waiting for a reply
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}

        {/* Lost revenue tally */}
        <AnimatePresence>
          {done && (
            <motion.div
              layout
              initial={reduceMotion ? false : { opacity: 0, y: 20, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ type: "spring", stiffness: 180, damping: 22, delay: 0.15 }}
              className="relative overflow-hidden rounded-[1.4rem] border border-white/10 bg-[#161616] p-5 shadow-[0_1px_2px_rgba(0,0,0,0.2),0_16px_36px_rgba(22,22,22,0.28),inset_0_1px_0_rgba(255,255,255,0.06)]"
            >
              <div className="pointer-events-none absolute -right-10 -top-12 h-32 w-32 rounded-full bg-red-500/10 blur-3xl" />
              <p className="text-[9px] font-extrabold uppercase tracking-[0.2em] text-white/45">
                {counterLabel}
              </p>
              <motion.p className="mt-1.5 text-[2rem] font-extrabold leading-none tracking-[-0.03em] text-[#D96B4F] tabular-nums">
                {tallyText}
              </motion.p>
              <p className="mt-2 text-[11px] font-semibold text-white/50">{footnote}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <p className="mt-3 px-1 text-right text-[9px] font-bold uppercase tracking-[0.12em] text-[#161616]/30">
        {tag}
      </p>
    </div>
  );
}

// ── Beat 2 — form → lead card → alert launch ─────────────────────────────

export function FormToLeadSequence({
  fields,
  leadCard,
  alertCaption,
}: {
  fields: readonly { label: string; value: string }[];
  leadCard: { title: string; meta: string; status: string };
  alertCaption: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const reduceMotion = useReducedMotion();

  const [typedValues, setTypedValues] = useState<string[]>(fields.map(() => ""));
  const [activeField, setActiveField] = useState<number>(0);
  const [isTypingDone, setIsTypingDone] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [leadStage, setLeadStage] = useState<"hidden" | "overlay" | "flying" | "sent">(
    "hidden"
  );

  useEffect(() => {
    if (!inView || reduceMotion || isTypingDone) return;
    if (activeField >= fields.length) return;

    let charIdx = 0;
    let text = "";
    const target = fields[activeField].value;

    const interval = setInterval(() => {
      if (charIdx < target.length) {
        text += target[charIdx];
        setTypedValues((prev) => {
          const next = [...prev];
          next[activeField] = text;
          return next;
        });
        charIdx++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          if (activeField < fields.length - 1) {
            setActiveField((prev) => prev + 1);
          } else {
            setIsTypingDone(true);
            setTimeout(() => {
              setIsSubmitting(true);
              setTimeout(() => {
                setIsSubmitting(false);
                setLeadStage("overlay");
                setTimeout(() => setLeadStage("flying"), 1600);
                setTimeout(() => setLeadStage("sent"), 2500);
              }, 800);
            }, 500);
          }
        }, 300);
      }
    }, 35);

    return () => clearInterval(interval);
  }, [activeField, inView, reduceMotion, isTypingDone, fields]);

  // Reduced motion: settle everything immediately
  useEffect(() => {
    if (!inView) return;
    if (reduceMotion) {
      setTypedValues(fields.map((f) => f.value));
      setIsTypingDone(true);
      setLeadStage("sent");
    }
  }, [inView, reduceMotion, fields]);

  return (
    <div ref={ref} className="relative mx-auto w-full max-w-md lg:max-w-lg">
      <div
        className="absolute -inset-3 rounded-[2.4rem] bg-gradient-to-tr from-[#D96B4F]/12 to-stone-200/5 blur-xl transition-opacity duration-1000"
        style={{ opacity: inView ? 1 : 0 }}
      />

      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 30 }}
        animate={
          inView
            ? {
                opacity: leadStage === "overlay" || leadStage === "flying" ? 0.45 : 1,
                y: 0,
                scale: leadStage === "overlay" || leadStage === "flying" ? 0.985 : 1,
              }
            : {}
        }
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="relative z-10 rounded-[2.2rem] border border-[#161616]/10 bg-white/95 p-6 shadow-[0_1px_2px_rgba(0,0,0,0.05),0_10px_24px_rgba(22,22,22,0.05),0_32px_64px_rgba(22,22,22,0.09),inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur-sm sm:p-8"
      >
        <div className="mb-5 flex items-center justify-between border-b border-[#161616]/5 pb-4">
          <div>
            <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#D96B4F]">
              Quote Form
            </p>
            <p className="text-sm font-bold text-[#161616]">Interactive Simulator</p>
          </div>
          <span className="flex h-2.5 w-2.5 animate-pulse rounded-full bg-[#D96B4F]" />
        </div>

        <div className="space-y-4">
          {fields.map((field, idx) => {
            const isFieldActive = idx === activeField && !isTypingDone;
            return (
              <div
                key={field.label}
                className={cn(
                  "rounded-2xl border px-4 py-3 transition-all duration-300",
                  isFieldActive
                    ? "border-[#D96B4F] bg-[#D96B4F]/[0.02] shadow-[0_0_0_3px_rgba(217,107,79,0.08),0_0_18px_rgba(217,107,79,0.1)]"
                    : "border-[#161616]/8 bg-[#F5F2EA]/50"
                )}
              >
                <p className="text-[9px] font-extrabold uppercase tracking-[0.14em] text-[#161616]/40">
                  {field.label}
                </p>
                <div className="mt-0.5 flex min-h-[20px] items-center">
                  <p className="text-[13px] font-bold text-[#161616]">{typedValues[idx]}</p>
                  {isFieldActive && (
                    <motion.span
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                      className="ml-1 inline-block h-3.5 w-1 rounded-full bg-[#D96B4F]"
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-6 flex items-center justify-between">
          <motion.button
            animate={isSubmitting ? { scale: 0.96 } : { scale: 1 }}
            className={cn(
              "inline-flex h-12 w-32 items-center justify-center rounded-full text-[11px] font-bold uppercase tracking-[0.15em] shadow-md transition-all duration-300",
              isSubmitting
                ? "cursor-not-allowed bg-[#161616]/40 text-[#F7F3EE]"
                : isTypingDone
                  ? "cursor-pointer bg-[#D96B4F] text-[#F7F3EE] hover:-translate-y-0.5 hover:bg-[#c45a3f] hover:shadow-lg"
                  : "cursor-not-allowed bg-[#161616]/20 text-[#161616]/50"
            )}
          >
            {isSubmitting ? (
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-[#F7F3EE] border-t-transparent" />
            ) : (
              "Submit Quote"
            )}
          </motion.button>

          {leadStage === "sent" ? (
            <motion.span
              initial={reduceMotion ? false : { opacity: 0, x: 8 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-1.5 text-[10px] font-bold text-emerald-700/90"
            >
              <MessageSquare size={11} className="text-[#25D366]" aria-hidden="true" />
              {alertCaption} →
            </motion.span>
          ) : (
            <span className="text-[10px] font-semibold italic text-[#161616]/40">
              {!isTypingDone
                ? "Customer typing..."
                : isSubmitting
                  ? "Sending lead..."
                  : leadStage !== "hidden"
                    ? "Lead captured"
                    : "Ready to submit"}
            </span>
          )}
        </div>
      </motion.div>

      {/* Lead card pops over the form, holds a beat, then flies off toward
          the owner — picked up by the phone in the next section */}
      <AnimatePresence>
        {(leadStage === "overlay" || leadStage === "flying") && (
          <div className="pointer-events-none absolute inset-0 z-30 flex items-center justify-center px-4">
            <motion.div
              initial={{ opacity: 0, y: 28, scale: 0.92 }}
              animate={
                leadStage === "overlay"
                  ? { opacity: 1, x: 0, y: 0, scale: 1, rotate: 0 }
                  : { opacity: 0, x: 560, y: -60, scale: 0.85, rotate: 6 }
              }
              exit={{ opacity: 0 }}
              transition={
                leadStage === "overlay"
                  ? { type: "spring", stiffness: 240, damping: 22 }
                  : { duration: 0.7, ease: [0.55, 0, 0.85, 0.4] }
              }
              className="w-full max-w-[24rem] rounded-2xl border p-5 backdrop-blur-md"
              style={{
                borderColor: "rgba(46,125,91,0.3)",
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.97) 0%, rgba(240,249,244,0.99) 100%)",
                boxShadow:
                  "0 2px 4px rgba(0,0,0,0.05), 0 24px 60px rgba(22,22,22,0.18), 0 0 40px rgba(37,211,102,0.12)",
              }}
            >
              <div className="flex items-center gap-3.5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/10 shadow-inner">
                  <CheckCircle2 size={20} className="text-emerald-600" aria-hidden="true" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[9px] font-extrabold uppercase tracking-[0.14em] text-emerald-600">
                    Lead Captured
                  </p>
                  <p className="mt-0.5 truncate text-[14px] font-bold text-[#161616]">
                    {leadCard.title}
                  </p>
                  <p className="truncate text-[11px] font-medium text-[#161616]/50">
                    {leadCard.meta}
                  </p>
                </div>
                <span className="shrink-0 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-[9px] font-extrabold uppercase tracking-[0.12em] text-emerald-700 shadow-sm">
                  {leadCard.status}
                </span>
              </div>

              <div className="mt-3.5 flex items-center gap-2 border-t border-emerald-600/10 pt-3">
                <span
                  className="flex h-6 w-6 items-center justify-center rounded-lg"
                  style={{ background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)" }}
                >
                  <MessageSquare size={12} className="text-white" aria-hidden="true" />
                </span>
                <span className="text-[10px] font-bold text-emerald-700/85">
                  {alertCaption} →
                </span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ── Beat 3 — alert flight: captured lead flies to the owner's phone ──────

export function WhatsAppNotification({
  label,
  title,
  action,
}: {
  label: string;
  title: string;
  action: string;
}) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: -45, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ type: "spring", stiffness: 240, damping: 24 }}
      className="relative z-10 rounded-2xl border border-white/10 bg-[#1e1e20]/95 p-3.5 shadow-[0_16px_36px_rgba(0,0,0,0.45),inset_0_1px_1px_rgba(255,255,255,0.1)] backdrop-blur-md"
    >
      <div className="flex items-start gap-3">
        <div
          className="relative flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-xl"
          style={{ background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)" }}
        >
          <MessageSquare size={17} className="text-white" aria-hidden="true" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.25),transparent)]" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between">
            <p className="text-[9px] font-extrabold uppercase tracking-[0.14em] text-[#25D366]">
              {label}
            </p>
            <span className="text-[9px] font-medium text-white/35">now</span>
          </div>
          <p className="mt-1 text-[12px] font-bold leading-snug text-white">{title}</p>
          <p className="mt-1.5 flex cursor-pointer items-center gap-1 text-[10px] font-bold text-emerald-400 hover:text-emerald-300">
            {action} <span className="text-[11px]">➔</span>
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export function EmailAlertCard({ label, subject }: { label: string; subject: string }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, x: -30, y: 10 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ type: "spring", stiffness: 200, damping: 22 }}
      className="flex w-full max-w-[280px] items-center gap-3.5 rounded-2xl border border-[#161616]/10 bg-white/90 p-4 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_16px_36px_rgba(22,22,22,0.08),inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur-md"
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#161616]/8 bg-[#F5F2EA] shadow-inner">
        <Mail size={17} className="text-[#161616]/60" aria-hidden="true" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-[9px] font-extrabold uppercase tracking-[0.16em] text-[#161616]/40">
          {label}
        </p>
        <p className="mt-0.5 truncate text-[12px] font-bold text-[#161616]/85">{subject}</p>
      </div>
      <div className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-[#4285F4]" />
    </motion.div>
  );
}

export function AlertFlightScene({
  origin,
  notification,
  email,
}: {
  origin: { label: string; name: string; meta: string };
  notification: { label: string; title: string; action: string };
  email: { label: string; subject: string };
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.35 });
  const reduceMotion = useReducedMotion();
  const [stage, setStage] = useState<"idle" | "flying" | "landed" | "email">("idle");

  useEffect(() => {
    if (!inView) return;
    if (reduceMotion) {
      const settle = setTimeout(() => setStage("email"), 0);
      return () => clearTimeout(settle);
    }
    const timers = [
      setTimeout(() => setStage("flying"), 600),
      setTimeout(() => setStage("landed"), 2050),
      setTimeout(() => setStage("email"), 2800),
    ];
    return () => timers.forEach(clearTimeout);
  }, [inView, reduceMotion]);

  const landed = stage === "landed" || stage === "email";

  return (
    <div
      ref={ref}
      className="relative mx-auto flex w-full max-w-[34rem] flex-col items-center gap-6 sm:block sm:h-[470px]"
    >
      {/* Dashed flight path */}
      <svg
        className="absolute inset-0 hidden h-full w-full sm:block"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        fill="none"
        aria-hidden="true"
      >
        <motion.path
          d="M 20 26 C 38 4, 60 4, 74 30"
          stroke="rgba(18,140,126,0.45)"
          strokeWidth={1.5}
          strokeDasharray="3 5"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={inView ? { pathLength: 1, opacity: 1 } : {}}
          transition={{ duration: reduceMotion ? 0 : 0.9, ease: "easeInOut", delay: 0.2 }}
        />
      </svg>

      {/* Origin: the captured lead */}
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 18 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ type: "spring", stiffness: 180, damping: 22 }}
        className="relative w-[240px] rounded-2xl border border-emerald-600/25 bg-white/85 p-4 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_16px_36px_rgba(46,125,91,0.1),inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur-md sm:absolute sm:left-0 sm:top-[14%] sm:w-[210px]"
      >
        <div className="flex items-center gap-2">
          <CheckCircle2 size={13} className="text-emerald-600" aria-hidden="true" />
          <p className="text-[9px] font-extrabold uppercase tracking-[0.16em] text-emerald-700">
            {origin.label}
          </p>
        </div>
        <p className="mt-2 text-[13px] font-bold text-[#161616]">{origin.name}</p>
        <p className="mt-0.5 text-[11px] font-medium text-[#161616]/50">{origin.meta}</p>
      </motion.div>

      {/* The flying WhatsApp message */}
      {stage === "flying" && (
        <motion.div
          initial={{ left: "20%", top: "24%", scale: 0.6, opacity: 0, rotate: 0 }}
          animate={{
            left: ["20%", "36%", "56%", "68%"],
            top: ["24%", "5%", "6%", "26%"],
            scale: [0.7, 1, 1, 0.85],
            opacity: [0, 1, 1, 0],
            rotate: [0, 10, 16, 22],
          }}
          transition={{ duration: 1.45, ease: "easeInOut", times: [0, 0.3, 0.7, 1] }}
          className="absolute z-30 hidden h-11 w-11 items-center justify-center rounded-2xl sm:flex"
          style={{
            background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
            boxShadow: "0 12px 32px rgba(37,211,102,0.5), 0 0 20px rgba(37,211,102,0.3)",
          }}
          aria-hidden="true"
        >
          <MessageSquare size={18} className="text-white" />
        </motion.div>
      )}

      {/* The owner's phone */}
      <div className="relative sm:absolute sm:bottom-0 sm:right-[4%]">
        {/* Green ripple radiating on landing */}
        {landed && !reduceMotion && (
          <div className="pointer-events-none absolute left-1/2 top-14 z-0 -translate-x-1/2" aria-hidden="true">
            {[0, 0.7].map((delay) => (
              <motion.span
                key={delay}
                initial={{ scale: 0.5, opacity: 0.55 }}
                animate={{ scale: 2.4, opacity: 0 }}
                transition={{
                  duration: 2.2,
                  delay,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
                className="absolute -left-16 -top-16 h-32 w-32 rounded-full border border-[#25D366]/50 bg-[#25D366]/10"
              />
            ))}
          </div>
        )}

        <PhoneMockup dark className="relative z-10">
          <div className="flex h-full flex-col px-3 pt-4">
            <div className="text-center">
              <p className="text-[26px] font-extrabold tracking-tight text-white/90">07:42</p>
              <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-white/35">
                Thursday 2 July
              </p>
            </div>
            <div className="mt-5">
              {landed && <WhatsAppNotification {...notification} />}
            </div>
          </div>
        </PhoneMockup>
      </div>

      {/* Email backup alert — slot height reserved on mobile so the card's
          arrival never shifts the page */}
      <div className="relative min-h-[4.5rem] w-full max-w-[280px] sm:absolute sm:bottom-[4%] sm:left-0 sm:min-h-0 sm:w-auto">
        {stage === "email" && <EmailAlertCard {...email} />}
      </div>
    </div>
  );
}

// ── Beat 4 — missed call → AI rescue (one integrated scene) ──────────────

export function ComingSoonBadge({ children = "Coming soon" }: { children?: ReactNode }) {
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[9px] font-extrabold uppercase tracking-[0.16em]"
      style={{
        color: "var(--color-status-pending)",
        borderColor: "rgba(192,138,46,0.3)",
        background: "rgba(192,138,46,0.1)",
      }}
    >
      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber-500" />
      {children}
    </span>
  );
}

type RescuePhase = "idle" | "ringing" | "missed" | "answer" | "type" | "steps" | "done";

export function MissedCallRescue({
  caller,
  transcript,
  comingSoon,
}: {
  caller: string;
  transcript: string;
  comingSoon: {
    badge: string;
    title: string;
    answerLine: string;
    steps: readonly string[];
  };
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const reduceMotion = useReducedMotion();

  const [phase, setPhase] = useState<RescuePhase>("idle");
  const [typed, setTyped] = useState("");
  const [stepsDone, setStepsDone] = useState(0);

  // Master timeline
  useEffect(() => {
    if (!inView) return;
    if (reduceMotion) {
      setPhase("done");
      setTyped(transcript);
      setStepsDone(comingSoon.steps.length);
      return;
    }
    setPhase("ringing");
    const timers = [
      setTimeout(() => setPhase("missed"), 2400),
      setTimeout(() => setPhase("answer"), 3200),
      setTimeout(() => setPhase("type"), 4400),
    ];
    return () => timers.forEach(clearTimeout);
  }, [inView, reduceMotion, transcript, comingSoon.steps.length]);

  // Transcript typing
  useEffect(() => {
    if (phase !== "type") return;
    let i = 0;
    let settle: ReturnType<typeof setTimeout> | undefined;
    const interval = setInterval(() => {
      i++;
      setTyped(transcript.slice(0, i));
      if (i >= transcript.length) {
        clearInterval(interval);
        settle = setTimeout(() => setPhase("steps"), 350);
      }
    }, 20);
    return () => {
      clearInterval(interval);
      if (settle) clearTimeout(settle);
    };
  }, [phase, transcript]);

  // Steps checking off
  useEffect(() => {
    if (phase !== "steps") return;
    let n = 0;
    const interval = setInterval(() => {
      n++;
      setStepsDone(n);
      if (n >= comingSoon.steps.length) {
        clearInterval(interval);
        setPhase("done");
      }
    }, 500);
    return () => clearInterval(interval);
  }, [phase, comingSoon.steps.length]);

  const aiActive = phase === "answer" || phase === "type";
  const showPanel = phase !== "idle" && phase !== "ringing";
  const showTranscript = phase === "type" || phase === "steps" || phase === "done";

  return (
    <div
      ref={ref}
      className="relative mx-auto flex w-full max-w-[36rem] flex-col items-center lg:block lg:h-[480px]"
    >
      {/* The phone that nobody could answer */}
      <div className="lg:absolute lg:left-0 lg:top-1/2 lg:-translate-y-1/2">
        <PhoneMockup dark vibrate={phase === "ringing"} className="-rotate-3">
          <div className="flex h-full flex-col justify-between px-4 pb-8 pt-4 text-center text-white">
            <AnimatePresence mode="wait">
              {phase === "ringing" || phase === "idle" ? (
                <motion.div
                  key="ringing"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-1 flex-col justify-between"
                >
                  <div className="pt-2">
                    <p className="animate-pulse text-[9px] font-extrabold uppercase tracking-[0.2em] text-[#C08A2E]">
                      Incoming Call
                    </p>
                    <p className="mt-1.5 text-lg font-extrabold tracking-tight">{caller}</p>
                    <p className="mt-0.5 text-[10px] font-semibold text-white/50">Mobile</p>
                  </div>

                  <div className="relative mx-auto flex h-20 w-20 items-center justify-center">
                    <motion.div
                      animate={reduceMotion ? undefined : { scale: [1, 1.4, 1] }}
                      transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute inset-0 rounded-full border border-amber-500/30 bg-amber-500/10"
                    />
                    <div className="z-10 flex h-13 w-13 items-center justify-center rounded-full border border-amber-300/30 bg-gradient-to-br from-amber-400 to-[#D96B4F] shadow-lg">
                      <User size={22} className="text-white" />
                    </div>
                  </div>

                  <div className="flex items-center justify-around px-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-red-500/20 bg-red-600 shadow-lg">
                      <Phone size={15} className="rotate-[135deg]" />
                    </div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-green-400/20 bg-green-500 shadow-lg">
                      <Phone size={15} />
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="missed"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 180, damping: 20 }}
                  className="flex flex-1 flex-col items-center justify-center gap-4"
                >
                  <div className="relative flex h-16 w-16 items-center justify-center">
                    <div
                      className="absolute inset-0 animate-ping rounded-full border border-red-500/20 bg-red-500/10"
                      style={{ animationDuration: "2.5s" }}
                    />
                    <div className="z-10 flex h-12 w-12 items-center justify-center rounded-full border border-red-500/30 bg-red-500/15 shadow-inner">
                      <PhoneMissed size={18} className="text-red-500" />
                    </div>
                  </div>
                  <div>
                    <p className="text-[9px] font-extrabold uppercase tracking-[0.2em] text-[#D96B4F]">
                      Missed Call
                    </p>
                    <p className="mt-1 text-base font-extrabold tracking-tight">{caller}</p>
                    <p className="mt-0.5 text-[10px] font-semibold text-white/40">Just now</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </PhoneMockup>
      </div>

      {/* The AI rescue panel emerging from the missed call. Always mounted
          (revealed via opacity) so the page height never shifts under
          scroll-linked sections further down. */}
      <motion.div
        initial={false}
        animate={
          showPanel
            ? { opacity: 1, x: 0, scale: 1 }
            : { opacity: 0, x: reduceMotion ? 0 : 30, scale: reduceMotion ? 1 : 0.97 }
        }
        transition={{ type: "spring", stiffness: 160, damping: 22 }}
        className="relative z-10 -mt-14 w-full max-w-[22rem] lg:absolute lg:right-0 lg:top-1/2 lg:mt-0 lg:-translate-y-1/2"
      >
            <div className="relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-[#1c1c1f]/95 p-5 shadow-[0_1px_2px_rgba(0,0,0,0.3),0_24px_56px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-md">
              <div className="pointer-events-none absolute -right-14 -top-14 h-36 w-36 rounded-full bg-amber-500/8 blur-3xl" />

              <div className="mb-4 flex items-center justify-between gap-3 border-b border-white/5 pb-3.5">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl border border-amber-500/20 bg-amber-500/10">
                    <AudioLines size={15} className="text-amber-500" />
                  </div>
                  <p className="text-[13px] font-extrabold tracking-wide text-white">
                    {comingSoon.title}
                  </p>
                </div>
                <ComingSoonBadge>{comingSoon.badge}</ComingSoonBadge>
              </div>

              {/* Live waveform while the AI answers */}
              <div className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.03] px-3.5 py-2.5">
                <div className="flex h-6 items-center gap-[3px]" aria-hidden="true">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <motion.span
                      key={i}
                      animate={
                        aiActive && !reduceMotion
                          ? { scaleY: [0.25, 1, 0.35] }
                          : { scaleY: 0.3 + ((i * 7) % 5) * 0.12 }
                      }
                      transition={
                        aiActive && !reduceMotion
                          ? {
                              duration: 0.85,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: i * 0.07,
                            }
                          : { duration: 0.4 }
                      }
                      className="h-full w-[3px] origin-center rounded-full bg-gradient-to-t from-amber-600 to-amber-400"
                    />
                  ))}
                </div>
                <p className="text-[10px] font-bold text-white/60">{comingSoon.answerLine}</p>
              </div>

              {/* Transcript typing itself */}
              {showTranscript && (
                <motion.div
                  initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-3 rounded-xl border border-white/5 bg-white/[0.03] p-3.5 text-left shadow-inner"
                >
                  <div className="mb-1.5 flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-500" />
                    <span className="text-[8px] font-extrabold uppercase tracking-[0.16em] text-white/40">
                      AI Transcribing
                    </span>
                  </div>
                  <p className="text-[11px] font-semibold italic leading-relaxed text-white/80">
                    &quot;{typed}
                    {phase === "type" && (
                      <motion.span
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ duration: 0.7, repeat: Infinity }}
                        className="ml-0.5 inline-block h-3 w-[2px] rounded-full bg-amber-400 align-middle"
                      />
                    )}
                    &quot;
                  </p>
                </motion.div>
              )}

              {/* Rescue steps checking off */}
              <ol className="mt-3 space-y-2">
                {comingSoon.steps.map((step, i) => {
                  const isChecked = i < stepsDone;
                  return (
                    <li
                      key={step}
                      className={cn(
                        "flex items-center gap-3 rounded-xl border px-3 py-2 transition-all duration-300",
                        isChecked
                          ? "border-[#C08A2E]/25 bg-[#C08A2E]/[0.05]"
                          : "border-white/5 bg-white/[0.01]"
                      )}
                    >
                      <span
                        className={cn(
                          "flex h-5 w-5 shrink-0 items-center justify-center rounded-md border text-[9px] font-extrabold shadow-inner transition-all duration-300",
                          isChecked
                            ? "border-[#C08A2E] bg-[#C08A2E] text-white"
                            : "border-white/10 bg-white/5 text-white/35"
                        )}
                      >
                        {isChecked ? "✓" : i + 1}
                      </span>
                      <span
                        className={cn(
                          "text-[11px] font-bold tracking-wide transition-colors duration-300",
                          isChecked ? "text-white" : "text-white/40"
                        )}
                      >
                        {step}
                      </span>
                    </li>
                  );
                })}
              </ol>
            </div>
      </motion.div>
    </div>
  );
}

// ── Beat 5 — lead rescue log / control center ────────────────────────────

export function DashboardTiles({
  tiles,
  timeline,
}: {
  tiles: readonly { label: string; value: string }[];
  timeline: readonly string[];
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const reduceMotion = useReducedMotion();

  return (
    <div
      ref={ref}
      className="relative mx-auto w-full max-w-[54rem] overflow-hidden rounded-3xl border border-white/10 bg-[#1c1c1e] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.3),0_24px_70px_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.05)] backdrop-blur-md"
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.15)_1px,transparent_1px)] bg-[size:24px_24px] opacity-[0.03]" />
      <div className="absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-[#D96B4F]/10 blur-3xl" />

      {/* Header bar */}
      <div className="mb-5 flex flex-col justify-between gap-4 border-b border-white/5 pb-4 sm:flex-row sm:items-center">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-[#D96B4F]">
            <Smartphone size={18} />
          </div>
          <div>
            <p className="text-[9px] font-extrabold uppercase tracking-[0.2em] text-[#D96B4F]">
              Control Center
            </p>
            <h3 className="text-[13px] font-extrabold text-white">Lead Rescue Log</h3>
          </div>
        </div>

        <div className="flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-3 py-1 shadow-inner">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
          <span className="text-[9px] font-extrabold uppercase tracking-[0.12em] text-emerald-400">
            Live Listening Active
          </span>
        </div>
      </div>

      <div className="relative z-10 grid grid-cols-1 gap-6 md:grid-cols-[1.1fr_0.9fr]">
        {/* Enquiries feed */}
        <div className="space-y-3">
          <p className="px-1 text-[9px] font-extrabold uppercase tracking-[0.16em] text-white/40">
            Enquiries Feed
          </p>

          {/* Active lead with rescue timeline */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: -15 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ type: "spring", stiffness: 140, damping: 20, delay: 0.1 }}
            className="rounded-2xl border border-[#D96B4F]/30 bg-[#D96B4F]/[0.05] p-4 shadow-[0_0_0_1px_rgba(217,107,79,0.08),0_8px_20px_rgba(0,0,0,0.2),0_0_28px_rgba(217,107,79,0.08),inset_0_1px_0_rgba(255,255,255,0.02)]"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <h4 className="text-[13px] font-bold text-white">James Whitfield</h4>
                  <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2 py-0.5 text-[8px] font-bold uppercase tracking-wider text-emerald-400">
                    New lead
                  </span>
                </div>
                <p className="mt-0.5 text-[11px] font-medium text-white/60">
                  Roof repair · M20 Manchester
                </p>
              </div>
              <div className="shrink-0 text-right">
                <span className="block text-[10px] font-semibold text-white/40">Just now</span>
                <span className="mt-1 block text-[11px] font-bold text-[#D96B4F]">M20</span>
              </div>
            </div>

            {/* Rescue timeline */}
            <div className="mt-4 flex items-start">
              {timeline.map((label, i) => (
                <Fragment key={label}>
                  {i > 0 && (
                    <div className="relative mx-1.5 mt-2 h-[2px] flex-1 overflow-hidden rounded bg-white/10">
                      <motion.div
                        initial={reduceMotion ? false : { scaleX: 0 }}
                        animate={inView ? { scaleX: 1 } : {}}
                        style={{ originX: 0 }}
                        transition={{ duration: 0.45, delay: 0.5 + i * 0.45, ease: EASE }}
                        className="h-full bg-emerald-500/70"
                      />
                    </div>
                  )}
                  <div className="flex flex-col items-center gap-1.5">
                    <motion.div
                      initial={reduceMotion ? false : { scale: 0 }}
                      animate={inView ? { scale: 1 } : {}}
                      transition={{
                        type: "spring",
                        stiffness: 320,
                        damping: 18,
                        delay: 0.35 + i * 0.45,
                      }}
                      className="flex h-4.5 w-4.5 items-center justify-center rounded-full border border-emerald-500/40 bg-emerald-500/15"
                    >
                      <span className="text-[8px] font-extrabold text-emerald-400">✓</span>
                    </motion.div>
                    <span className="whitespace-nowrap text-[8px] font-bold uppercase tracking-wide text-white/45">
                      {label}
                    </span>
                  </div>
                </Fragment>
              ))}
            </div>
          </motion.div>

          {/* Background lead */}
          <div className="flex items-center justify-between gap-4 rounded-2xl border border-white/5 bg-white/[0.02] p-4 opacity-50">
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <h4 className="text-[13px] font-bold text-white">Sarah Jenkins</h4>
                <span className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[8px] font-bold uppercase tracking-wider text-white/50">
                  Logged
                </span>
              </div>
              <p className="mt-0.5 text-[11px] font-medium text-white/60">
                Kitchen extension · SK8 Cheadle
              </p>
            </div>
            <div className="shrink-0 text-right">
              <span className="block text-[10px] font-semibold text-white/40">1 hr ago</span>
            </div>
          </div>
        </div>

        {/* Analysis tiles */}
        <div className="space-y-4">
          <p className="px-1 text-[9px] font-extrabold uppercase tracking-[0.16em] text-white/40">
            Lead Analysis
          </p>
          <div className="grid grid-cols-2 gap-3">
            {tiles.map((tile, i) => (
              <motion.div
                key={tile.label}
                initial={reduceMotion ? false : { opacity: 0, y: 15 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="rounded-2xl border border-white/5 bg-white/[0.02] p-4 shadow-sm"
              >
                <p className="text-[9px] font-extrabold uppercase tracking-[0.14em] text-white/35">
                  {tile.label}
                </p>
                <p className="mt-1.5 text-base font-extrabold tracking-wide text-white">
                  {tile.value}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="flex items-center justify-between gap-3 rounded-2xl border border-white/5 bg-gradient-to-r from-[#D96B4F]/10 to-amber-500/10 p-4 shadow-inner">
            <div className="min-w-0">
              <p className="text-[9px] font-extrabold uppercase tracking-[0.14em] text-amber-500">
                Capture Ratio
              </p>
              <h4 className="mt-0.5 text-[15px] font-extrabold text-white">
                100% Leads Rescued
              </h4>
            </div>
            <Sparkles size={17} className="shrink-0 animate-pulse text-amber-500" />
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Beat 6 — review conversation ─────────────────────────────────────────

const SPARKLE_BURST = [
  { x: -44, y: -30, delay: 0 },
  { x: 38, y: -42, delay: 0.05 },
  { x: -20, y: -52, delay: 0.1 },
  { x: 52, y: -14, delay: 0.12 },
  { x: -54, y: 6, delay: 0.16 },
  { x: 20, y: -58, delay: 0.2 },
] as const;

export function ReviewConversation({
  prompt,
  positive,
  reviewPrompt,
}: {
  prompt: string;
  positive: string;
  reviewPrompt: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const reduceMotion = useReducedMotion();

  const [stage, setStage] = useState(0); // 1 ask · 2 stars · 3 reply · 4 review card
  const [starCount, setStarCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduceMotion) {
      setStage(4);
      setStarCount(5);
      return;
    }
    const timers = [
      setTimeout(() => setStage(1), 300),
      setTimeout(() => setStage(2), 1100),
    ];
    return () => timers.forEach(clearTimeout);
  }, [inView, reduceMotion]);

  useEffect(() => {
    if (stage !== 2 || reduceMotion) return;
    let count = 0;
    let settle: ReturnType<typeof setTimeout> | undefined;
    const interval = setInterval(() => {
      count++;
      setStarCount(count);
      if (count >= 5) {
        clearInterval(interval);
        settle = setTimeout(() => setStage(3), 450);
      }
    }, 220);
    return () => {
      clearInterval(interval);
      if (settle) clearTimeout(settle);
    };
  }, [stage, reduceMotion]);

  useEffect(() => {
    if (stage !== 3 || reduceMotion) return;
    const timer = setTimeout(() => setStage(4), 750);
    return () => clearTimeout(timer);
  }, [stage, reduceMotion]);

  return (
    <div
      ref={ref}
      className="relative mx-auto w-full max-w-md overflow-hidden rounded-[2rem] border border-white/10 bg-[#1c1c1e] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.3),0_24px_60px_rgba(0,0,0,0.35),inset_0_1px_1px_rgba(255,255,255,0.05)] backdrop-blur-md sm:p-7"
    >
      <div className="pointer-events-none absolute -inset-10 bg-[radial-gradient(circle_at_center,rgba(251,188,4,0.05),transparent_60%)]" />

      {/* Thread header */}
      <div className="mb-5 flex items-center gap-2.5 border-b border-white/5 pb-4">
        <div className="flex h-8 w-8 items-center justify-center rounded-xl border border-white/10 bg-white/5">
          <MessageSquare size={14} className="text-white/60" />
        </div>
        <div>
          <p className="text-[9px] font-extrabold uppercase tracking-[0.18em] text-white/40">
            After the job
          </p>
          <p className="text-[12px] font-bold text-white">Automatic follow-up</p>
        </div>
      </div>

      {/* Conversation */}
      <div className="min-h-[9.5rem] space-y-3.5">
        <AnimatePresence>
          {stage >= 1 && (
            <motion.div
              key="ask"
              initial={reduceMotion ? false : { opacity: 0, y: 14, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ type: "spring", stiffness: 240, damping: 22 }}
              className="ml-auto w-fit max-w-[80%] rounded-2xl rounded-br-md bg-[#D96B4F] px-4 py-2.5 shadow-[0_8px_20px_rgba(217,107,79,0.25)]"
            >
              <p className="text-[13px] font-bold text-white">{prompt}</p>
            </motion.div>
          )}

          {stage >= 2 && (
            <motion.div
              key="reply"
              initial={reduceMotion ? false : { opacity: 0, y: 14, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ type: "spring", stiffness: 240, damping: 22 }}
              className="mr-auto w-fit max-w-[85%] rounded-2xl rounded-bl-md border border-white/10 bg-white/[0.05] px-4 py-3 shadow-inner"
            >
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => {
                  const isFilled = i < starCount;
                  return (
                    <motion.span
                      key={i}
                      animate={
                        isFilled && !reduceMotion
                          ? { scale: [1, 1.35, 1], rotate: [0, 10, 0] }
                          : { scale: 1 }
                      }
                      transition={{ type: "tween", duration: 0.42, ease: "easeInOut" }}
                      className="inline-flex"
                    >
                      <Star
                        size={20}
                        className={cn(
                          "transition-colors duration-200",
                          isFilled ? "fill-[#FBBC04] text-[#FBBC04]" : "text-white/20"
                        )}
                        aria-hidden="true"
                      />
                    </motion.span>
                  );
                })}
              </div>
              {stage >= 3 && (
                <motion.p
                  initial={reduceMotion ? false : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-1.5 text-[13px] font-bold text-white/90"
                >
                  {positive}
                </motion.p>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Google review prompt — the slot is always reserved so the card's
          arrival never shifts the page height */}
      <div className="mt-5 min-h-[10.5rem]">
        {stage >= 4 && (
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 25, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="relative overflow-visible"
          >
            {/* Premium sparkle burst */}
            {!reduceMotion && (
              <div
                className="pointer-events-none absolute right-8 top-0 z-20"
                aria-hidden="true"
              >
                {SPARKLE_BURST.map(({ x, y, delay }, i) => (
                  <motion.span
                    key={i}
                    initial={{ x: 0, y: 0, scale: 0, opacity: 1 }}
                    animate={{ x, y, scale: [0, 1, 0.4], opacity: [1, 1, 0] }}
                    transition={{ duration: 0.9, delay: 0.2 + delay, ease: "easeOut" }}
                    className="absolute h-1.5 w-1.5 rounded-full"
                    style={{
                      background: ["#4285F4", "#EA4335", "#FBBC04", "#34A853"][i % 4],
                    }}
                  />
                ))}
              </div>
            )}

            <div
              className="relative overflow-hidden rounded-2xl border border-[#4285F4]/20 p-5 shadow-inner"
              style={{
                background:
                  "linear-gradient(135deg, rgba(30,30,32,0.95) 0%, rgba(24,24,26,0.98) 100%)",
              }}
            >
              <div className="absolute left-0 right-0 top-0 flex h-1">
                <div className="h-full w-1/4 bg-[#4285F4]" />
                <div className="h-full w-1/4 bg-[#EA4335]" />
                <div className="h-full w-1/4 bg-[#FBBC04]" />
                <div className="h-full w-1/4 bg-[#34A853]" />
              </div>

              <p className="pr-4 text-left text-[13px] font-bold leading-snug text-white/90">
                {reviewPrompt}
              </p>

              <div className="mt-4 flex items-center justify-between border-t border-white/5 pt-4">
                <div className="flex items-center gap-1.5">
                  <div className="flex h-5 w-5 items-center justify-center rounded-md bg-[#4285F4] text-[12px] font-black text-white shadow-sm">
                    G
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-white/30">
                    Google Review
                  </span>
                </div>

                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <div
                    className="inline-flex h-9 cursor-pointer items-center justify-center rounded-full px-5 text-[10px] font-bold uppercase tracking-[0.12em] text-white shadow-lg"
                    style={{ background: "linear-gradient(90deg, #4285F4 0%, #357ae8 100%)" }}
                  >
                    Leave a review
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
