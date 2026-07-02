"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, AnimatePresence, useInView, useReducedMotion } from "framer-motion";
import {
  CheckCircle2,
  FileText,
  Mail,
  MessageSquare,
  PhoneMissed,
  Star,
  Phone,
  Globe,
  Sparkles,
  Smartphone,
  Check,
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

  // Vibration animations for Beat 4 (Missed Call)
  const vibrateAnimation = vibrate && !reduceMotion
    ? {
        x: [0, -2, 2, -2, 2, -1, 1, -1, 1, 0],
        rotate: [0, -0.4, 0.4, -0.4, 0.4, -0.2, 0.2, -0.1, 0.1, 0],
      }
    : {};

  const transition = vibrate && !reduceMotion
    ? {
        duration: 0.45,
        repeat: Infinity,
        repeatType: "mirror" as const,
      }
    : {};

  return (
    <motion.div
      animate={vibrateAnimation}
      transition={transition}
      className={cn("relative mx-auto w-[290px] sm:w-[330px]", className)}
    >
      {/* Sleek metallic dark outer frame with premium bezel */}
      <div
        className="relative overflow-hidden rounded-[2.85rem] border-[9px] border-[#2e2e30] bg-[#161616] shadow-[0_0_0_2px_rgba(255,255,255,0.05),0_30px_70px_rgba(0,0,0,0.55),inset_0_0_8px_rgba(255,255,255,0.12)]"
        style={{ aspectRatio: "9 / 19.3" }}
      >
        {/* Dynamic Notch / Island */}
        <div className="absolute left-1/2 top-3 z-30 h-5.5 w-24 -translate-x-1/2 rounded-full bg-[#1c1c1d] border border-white/5 flex items-center justify-end px-3">
          <div className="h-1.5 w-1.5 rounded-full bg-[#0a0a0c]" />
        </div>

        {/* Speaker grid */}
        <div className="absolute left-1/2 top-1.5 z-30 h-0.5 w-10 -translate-x-1/2 rounded-full bg-[#0f0f10]" />

        {/* Screen Glass Reflection overlay */}
        <div className="pointer-events-none absolute inset-0 z-25 bg-[linear-gradient(135deg,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0)_55%,rgba(255,255,255,0.03)_100%)]" />

        <div
          className={cn(
            "relative h-full w-full overflow-hidden pt-10 flex flex-col",
            dark ? "bg-[#111113]" : "bg-[#F7F3EE]"
          )}
        >
          {children}
        </div>
      </div>

      {/* Hardware Buttons details */}
      <div className="absolute -left-2.5 top-24 h-12 w-[2.5px] rounded-r bg-[#2e2e30]" />
      <div className="absolute -left-2.5 top-40 h-10 w-[2.5px] rounded-r bg-[#2e2e30]" />
      <div className="absolute -right-2.5 top-32 h-14 w-[2.5px] rounded-l bg-[#2e2e30]" />
    </motion.div>
  );
}

// ── Notification / email cards (beat 3) ─────────────────────────────────

export function WhatsAppNotification({
  label,
  title,
  action,
}: {
  label: string;
  title: string;
  action: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -45, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ type: "spring", stiffness: 240, damping: 24, delay: 0.2 }}
      className="rounded-2xl border border-white/10 bg-[#1e1e20]/95 p-4 shadow-[0_16px_36px_rgba(0,0,0,0.45),inset_0_1px_1px_rgba(255,255,255,0.1)] relative z-10 backdrop-blur-md"
    >
      <div className="flex items-start gap-3.5">
        <div
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)" }}
        >
          <MessageSquare size={19} className="text-white" aria-hidden="true" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.25),transparent)]" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between">
            <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#25D366]">
              {label}
            </p>
            <span className="text-[9px] text-white/35 font-medium">now</span>
          </div>
          <p className="mt-1 text-[13px] font-bold leading-snug text-white">{title}</p>
          <p className="mt-1.5 text-[11px] font-bold text-emerald-400 flex items-center gap-1 cursor-pointer hover:text-emerald-300">
            {action} <span className="text-[12px]">➔</span>
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export function EmailAlertCard({ label, subject }: { label: string; subject: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 45, y: 15, rotate: 1 }}
      whileInView={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ type: "spring", stiffness: 200, damping: 22, delay: 0.45 }}
      className="flex items-center gap-3.5 rounded-2xl border border-white/5 bg-[#1a1a1c]/80 backdrop-blur-md p-4 w-full max-w-[280px] sm:max-w-[320px] shadow-[0_12px_30px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.06)]"
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 border border-white/10 shadow-inner">
        <Mail size={17} className="text-white/70" aria-hidden="true" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-[9px] font-extrabold uppercase tracking-[0.16em] text-white/40">
          {label}
        </p>
        <p className="mt-0.5 truncate text-[12px] font-bold text-white/90">{subject}</p>
      </div>
      <div className="h-2 w-2 rounded-full bg-[#4285F4] animate-pulse shrink-0" />
    </motion.div>
  );
}

// ── Missed call screen (beat 4) ─────────────────────────────────────────

export function MissedCallScreen({ caller }: { caller: string }) {
  const [callState, setCallState] = useState<"ringing" | "missed">("ringing");

  useEffect(() => {
    const timer = setTimeout(() => {
      setCallState("missed");
    }, 2800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-full flex flex-col justify-between py-10 px-6 text-center text-white relative">
      <AnimatePresence mode="wait">
        {callState === "ringing" ? (
          <motion.div
            key="ringing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex-1 flex flex-col justify-between"
          >
            <div className="pt-6">
              <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#C08A2E] animate-pulse">
                Incoming Call
              </p>
              <p className="mt-2 text-2xl font-extrabold tracking-tight">{caller}</p>
              <p className="text-xs text-white/50 font-semibold mt-1">Mobile</p>
            </div>

            {/* Glowing caller avatar ring */}
            <div className="relative mx-auto my-auto flex h-24 w-24 items-center justify-center">
              <motion.div
                animate={{ scale: [1, 1.4, 1] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 rounded-full bg-amber-500/10 border border-amber-500/30"
              />
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                className="absolute inset-2 rounded-full bg-amber-500/15 border border-amber-500/40"
              />
              <div className="h-16 w-16 rounded-full bg-gradient-to-br from-amber-400 to-[#D96B4F] flex items-center justify-center shadow-lg border border-amber-300/30 z-10">
                <User size={26} className="text-white" />
              </div>
            </div>

            {/* Accept/Decline action triggers */}
            <div className="flex justify-around items-center px-4">
              <div className="flex flex-col items-center gap-1.5 cursor-pointer">
                <div className="h-12 w-12 rounded-full bg-red-600 border border-red-500/20 flex items-center justify-center shadow-lg">
                  <Phone size={18} className="rotate-[135deg]" />
                </div>
                <span className="text-[9px] font-bold uppercase tracking-wider text-white/40">Decline</span>
              </div>
              <div className="flex flex-col items-center gap-1.5 cursor-pointer">
                <div className="h-12 w-12 rounded-full bg-green-500 border border-green-400/20 flex items-center justify-center shadow-lg">
                  <Phone size={18} />
                </div>
                <span className="text-[9px] font-bold uppercase tracking-wider text-white/40">Accept</span>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="missed"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 180, damping: 20 }}
            className="flex-1 flex flex-col justify-between"
          >
            <div className="pt-6">
              <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#D96B4F]">
                Missed Call
              </p>
              <p className="mt-2 text-2xl font-extrabold tracking-tight">{caller}</p>
              <p className="text-xs text-white/40 font-semibold mt-1">Just now</p>
            </div>

            <div className="relative mx-auto my-auto flex h-20 w-20 items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-red-500/10 border border-red-500/20 animate-ping" style={{ animationDuration: "2.5s" }} />
              <div className="h-14 w-14 rounded-full bg-red-500/15 border border-red-500/30 flex items-center justify-center shadow-inner z-10">
                <PhoneMissed size={22} className="text-red-500" />
              </div>
            </div>

            {/* Voicemail transcription preview */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-3.5 text-left shadow-inner"
            >
              <div className="flex items-center gap-1.5 mb-1.5">
                <div className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" />
                <span className="text-[8px] font-extrabold uppercase tracking-[0.16em] text-white/40">AI Transcribing</span>
              </div>
              <p className="text-[11px] font-semibold italic text-white/80 leading-relaxed">
                &quot;Hey, got a leak on the extension roof in Manchester M20, need a quote this week please...&quot;
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ── Coming soon (beat 4) ─────────────────────────────────────────────────

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
      <span
        className="h-1.5 w-1.5 rounded-full bg-amber-500 animate-pulse"
      />
      {children}
    </span>
  );
}

export function ComingSoonModule({
  title,
  steps,
}: {
  title: string;
  steps: readonly string[];
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const reduceMotion = useReducedMotion();
  const [activeStep, setActiveStep] = useState<number>(-1);

  useEffect(() => {
    if (!inView) return;
    if (reduceMotion) {
      setActiveStep(steps.length - 1);
      return;
    }

    let current = 0;
    const interval = setInterval(() => {
      if (current < steps.length) {
        setActiveStep(current);
        current++;
      } else {
        clearInterval(interval);
      }
    }, 750);

    return () => clearInterval(interval);
  }, [inView, reduceMotion, steps.length]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ type: "spring", stiffness: 120, damping: 22, delay: 0.15 }}
      className="relative w-full rounded-[2rem] border border-white/10 bg-[#1e1e20]/80 p-5 backdrop-blur-md shadow-[0_20px_45px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.05)] overflow-hidden"
    >
      <div className="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-amber-500/5 blur-3xl pointer-events-none" />

      <div className="flex items-center justify-between gap-3 border-b border-white/5 pb-3 mb-4">
        <p className="text-sm font-extrabold text-white tracking-wide">{title}</p>
        <ComingSoonBadge />
      </div>

      <ol className="space-y-3">
        {steps.map((step, i) => {
          const isDone = i <= activeStep;
          const isActive = i === activeStep;
          return (
            <motion.li
              key={step}
              animate={isActive ? { scale: 1.01 } : { scale: 1 }}
              className={cn(
                "flex items-center gap-3.5 rounded-xl border px-3.5 py-2.5 transition-all duration-300",
                isDone
                  ? "border-[#C08A2E]/20 bg-[#C08A2E]/[0.03]"
                  : "border-white/5 bg-white/[0.01]"
              )}
            >
              <div
                className={cn(
                  "flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border text-[10px] font-extrabold transition-all duration-300 shadow-inner",
                  isDone
                    ? "border-[#C08A2E] bg-[#C08A2E] text-white"
                    : "border-white/10 text-white/35 bg-white/5"
                )}
              >
                {isDone ? (
                  <Check size={11} strokeWidth={3} />
                ) : (
                  i + 1
                )}
              </div>
              <p
                className={cn(
                  "text-[12px] font-bold tracking-wide transition-colors duration-300",
                  isDone ? "text-white" : "text-white/40"
                )}
              >
                {step}
              </p>
              {isActive && (
                <span className="ml-auto flex h-2 w-2 rounded-full bg-amber-500 animate-ping" />
              )}
            </motion.li>
          );
        })}
      </ol>
    </motion.div>
  );
}

// ── Form → lead card sequence (beat 2) ──────────────────────────────────

export function FormToLeadSequence({
  fields,
  leadCard,
}: {
  fields: readonly { label: string; value: string }[];
  leadCard: { title: string; meta: string; status: string };
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const reduceMotion = useReducedMotion();

  const [typedValues, setTypedValues] = useState<string[]>(fields.map(() => ""));
  const [activeField, setActiveField] = useState<number>(0);
  const [isTypingDone, setIsTypingDone] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showLead, setShowLead] = useState(false);

  useEffect(() => {
    if (!inView || reduceMotion || isTypingDone) return;
    if (activeField >= fields.length) return;

    let charIdx = 0;
    let text = "";
    const target = fields[activeField].value;

    const interval = setInterval(() => {
      if (charIdx < target.length) {
        text += target[charIdx];
        setTypedValues(prev => {
          const next = [...prev];
          next[activeField] = text;
          return next;
        });
        charIdx++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          if (activeField < fields.length - 1) {
            setActiveField(prev => prev + 1);
          } else {
            setIsTypingDone(true);
            setTimeout(() => {
              setIsSubmitting(true);
              setTimeout(() => {
                setIsSubmitting(false);
                setShowLead(true);
              }, 800);
            }, 500);
          }
        }, 300);
      }
    }, 35);

    return () => clearInterval(interval);
  }, [activeField, inView, reduceMotion, isTypingDone, fields]);

  // Reduced motion setup
  useEffect(() => {
    if (!inView) return;
    if (reduceMotion) {
      setTypedValues(fields.map(f => f.value));
      setIsTypingDone(true);
      setShowLead(true);
    }
  }, [inView, reduceMotion, fields]);

  return (
    <div ref={ref} className="mx-auto w-full max-w-md relative">
      <div className="absolute -inset-2 bg-gradient-to-tr from-[#D96B4F]/10 to-stone-200/5 rounded-[2.2rem] blur-xl opacity-0 transition-opacity duration-1000" style={{ opacity: inView ? 1 : 0 }} />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="relative z-10 rounded-[2.2rem] border border-[#161616]/10 bg-white/95 p-6 shadow-[0_24px_60px_rgba(22,22,22,0.08),inset_0_1px_0_rgba(255,255,255,0.9)] sm:p-8 backdrop-blur-sm"
      >
        <div className="flex items-center justify-between border-b border-[#161616]/5 pb-4 mb-5">
          <div>
            <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#D96B4F]">
              Quote Form
            </p>
            <p className="text-sm font-bold text-[#161616]">Interactive Simulator</p>
          </div>
          <span className="flex h-2.5 w-2.5 rounded-full bg-[#D96B4F] animate-pulse" />
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
                    ? "border-[#D96B4F] bg-[#D96B4F]/[0.02] shadow-[0_0_12px_rgba(217,107,79,0.08)]"
                    : "border-[#161616]/8 bg-[#F7F3EE]/50"
                )}
              >
                <p className="text-[9px] font-extrabold uppercase tracking-[0.14em] text-[#161616]/40">
                  {field.label}
                </p>
                <div className="flex items-center min-h-[20px] mt-0.5">
                  <p className="text-[13px] font-bold text-[#161616]">
                    {typedValues[idx]}
                  </p>
                  {isFieldActive && (
                    <motion.span
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                      className="ml-1 h-3.5 w-1 bg-[#D96B4F] rounded-full inline-block"
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-6 flex items-center justify-between">
          <motion.button
            animate={isSubmitting ? { scale: 0.96 } : {}}
            className={cn(
              "inline-flex h-12 w-32 items-center justify-center rounded-full text-[11px] font-bold uppercase tracking-[0.15em] transition-all duration-300 shadow-md",
              isSubmitting
                ? "bg-[#161616]/40 text-[#F7F3EE] cursor-not-allowed"
                : isTypingDone
                  ? "bg-[#D96B4F] text-[#F7F3EE] hover:bg-[#c45a3f] hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
                  : "bg-[#161616]/20 text-[#161616]/50 cursor-not-allowed"
            )}
          >
            {isSubmitting ? (
              <span className="h-4 w-4 rounded-full border-2 border-[#F7F3EE] border-t-transparent animate-spin" />
            ) : "Submit Quote"}
          </motion.button>

          <span className="text-[10px] font-semibold text-[#161616]/40 italic">
            {!isTypingDone ? "Customer typing..." : isSubmitting ? "Sending lead..." : "Ready to submit"}
          </span>
        </div>
      </motion.div>

      {/* Slide out Lead Card */}
      <AnimatePresence>
        {showLead ? (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 12, scale: 1 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="absolute left-4 right-4 z-20 flex items-center gap-3.5 rounded-2xl border p-4 shadow-[0_20px_45px_rgba(22,22,22,0.1),inset_0_1px_1px_rgba(255,255,255,0.9)] backdrop-blur-md"
            style={{
              borderColor: "rgba(46,125,91,0.25)",
              background: "linear-gradient(135deg, rgba(255,255,255,0.92) 0%, rgba(240,249,244,0.97) 100%)",
            }}
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 border border-emerald-500/20 shadow-inner">
              <CheckCircle2 size={20} className="text-emerald-600 animate-bounce" aria-hidden="true" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[9px] font-extrabold uppercase tracking-[0.14em] text-emerald-600">
                Lead Captured
              </p>
              <p className="mt-0.5 text-[13px] font-bold text-[#161616] truncate">{leadCard.title}</p>
              <p className="text-[11px] font-medium text-[#161616]/50 truncate">{leadCard.meta}</p>
            </div>
            <span className="shrink-0 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 text-[9px] font-extrabold uppercase tracking-[0.12em] text-emerald-700 shadow-sm">
              {leadCard.status}
            </span>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

// ── Dashboard tiles (beat 5) ─────────────────────────────────────────────

export function DashboardTiles({
  tiles,
}: {
  tiles: readonly { label: string; value: string }[];
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <div ref={ref} className="w-full max-w-[54rem] mx-auto relative rounded-3xl border border-white/10 bg-[#1c1c1e] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.05)] backdrop-blur-md overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.15)_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute -left-20 -bottom-20 h-48 w-48 rounded-full bg-[#D96B4F]/10 blur-3xl" />

      {/* Header bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/5 pb-4 mb-5">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-[#D96B4F]">
            <Smartphone size={18} />
          </div>
          <div>
            <p className="text-[9px] font-extrabold uppercase tracking-[0.2em] text-[#D96B4F]">Control Center</p>
            <h3 className="text-[13px] font-extrabold text-white">Lead Rescue Log</h3>
          </div>
        </div>

        {/* Status indicator */}
        <div className="flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-3 py-1 shadow-inner">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[9px] font-extrabold uppercase tracking-[0.12em] text-emerald-400">Live Listening Active</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-6 relative z-10">
        {/* Enquiries Feed List */}
        <div className="space-y-3">
          <p className="text-[9px] font-extrabold uppercase tracking-[0.16em] text-white/40 px-1">Enquiries Feed</p>

          {/* Active Highlighted Lead Card */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ type: "spring", stiffness: 140, damping: 20, delay: 0.1 }}
            className="rounded-2xl border border-coral/30 bg-[#D96B4F]/[0.05] p-4 flex items-center justify-between gap-4 shadow-[0_8px_20px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.02)]"
          >
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <h4 className="text-[13px] font-bold text-white">James Whitfield</h4>
                <span className="rounded-full bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.2 text-[8px] font-bold uppercase tracking-wider text-emerald-400">New lead</span>
              </div>
              <p className="text-[11px] font-medium text-white/60 mt-0.5">Roof repair · M20 Manchester</p>
              <p className="text-[9px] font-semibold text-[#D96B4F] mt-1.5 flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#D96B4F] animate-ping" /> Alert sent to owner
              </p>
            </div>
            <div className="text-right shrink-0">
              <span className="text-[10px] text-white/40 font-semibold block">Just now</span>
              <span className="text-[11px] text-[#D96B4F] font-bold mt-1 block">M20</span>
            </div>
          </motion.div>

          {/* Secondary background lead rows */}
          <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-4 flex items-center justify-between gap-4 opacity-50">
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <h4 className="text-[13px] font-bold text-white">Sarah Jenkins</h4>
                <span className="rounded-full bg-white/5 border border-white/10 px-2 py-0.2 text-[8px] font-bold uppercase tracking-wider text-white/50">Logged</span>
              </div>
              <p className="text-[11px] font-medium text-white/60 mt-0.5">Kitchen extension · SK8 Cheadle</p>
            </div>
            <div className="text-right shrink-0">
              <span className="text-[10px] text-white/40 font-semibold block">1 hr ago</span>
            </div>
          </div>
        </div>

        {/* Dashboard tiles metrics pane */}
        <div className="space-y-4">
          <p className="text-[9px] font-extrabold uppercase tracking-[0.16em] text-white/40 px-1">Lead Analysis</p>
          <div className="grid grid-cols-2 gap-3">
            {tiles.map((tile, i) => (
              <motion.div
                key={tile.label}
                initial={{ opacity: 0, y: 15 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="rounded-2xl border border-white/5 bg-white/[0.02] p-4 shadow-sm"
              >
                <p className="text-[9px] font-extrabold uppercase tracking-[0.14em] text-white/35">
                  {tile.label}
                </p>
                <p className="mt-1.5 text-base font-extrabold text-white tracking-wide">{tile.value}</p>
              </motion.div>
            ))}
          </div>

          {/* Capture ratio callout */}
          <div className="rounded-2xl bg-gradient-to-r from-coral/10 to-amber-500/10 border border-white/5 p-4 flex items-center justify-between gap-3 shadow-inner">
            <div className="min-w-0">
              <p className="text-[9px] font-extrabold uppercase tracking-[0.14em] text-amber-500">Capture Ratio</p>
              <h4 className="text-[15px] font-extrabold text-white mt-0.5">100% Leads Rescued</h4>
            </div>
            <Sparkles size={17} className="text-amber-500 animate-pulse shrink-0" />
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Review flow sequence (beat 6) ────────────────────────────────────────

export function ReviewFlowSequence({
  prompt,
  reviewPrompt,
}: {
  prompt: string;
  positive: string;
  reviewPrompt: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const reduceMotion = useReducedMotion();
  const [stage, setStage] = useState<0 | 1 | 2>(0);
  const [activeStar, setActiveStar] = useState<number>(0);

  useEffect(() => {
    if (!inView) return;
    if (reduceMotion) {
      setStage(2);
      setActiveStar(5);
      return;
    }

    let starCount = 0;
    const starInterval = setInterval(() => {
      if (starCount < 5) {
        starCount++;
        setActiveStar(starCount);
      } else {
        clearInterval(starInterval);
        setStage(1);
        setTimeout(() => {
          setStage(2);
        }, 800);
      }
    }, 280);

    return () => clearInterval(starInterval);
  }, [inView, reduceMotion]);

  return (
    <div
      ref={ref}
      className="mx-auto w-full max-w-md relative rounded-[2rem] border border-white/10 bg-[#1c1c1e] p-6 text-center shadow-[0_24px_60px_rgba(0,0,0,0.35),inset_0_1px_1px_rgba(255,255,255,0.05)] sm:p-8 backdrop-blur-md overflow-hidden"
    >
      <div className="absolute -inset-10 bg-[radial-gradient(circle_at_center,rgba(251,188,4,0.05),transparent_60%)] pointer-events-none" />

      <h3 className="text-lg font-extrabold text-white tracking-wide">{prompt}</h3>

      {/* Stars rating container */}
      <div className="mt-6 flex justify-center gap-2">
        {Array.from({ length: 5 }).map((_, i) => {
          const isFilled = i < activeStar;
          return (
            <motion.div
              key={i}
              animate={isFilled ? { scale: [1, 1.25, 1], rotate: [0, 8, 0] } : { scale: 1 }}
              transition={{ type: "spring", stiffness: 350, damping: 15 }}
            >
              <Star
                size={32}
                className={cn(
                  "transition-all duration-300",
                  isFilled ? "fill-[#FBBC04] text-[#FBBC04]" : "text-white/20"
                )}
                aria-hidden="true"
              />
            </motion.div>
          );
        })}
      </div>

      <AnimatePresence>
        {stage >= 2 ? (
          <motion.div
            initial={{ opacity: 0, y: 25, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="mt-8 rounded-2xl border border-[#4285F4]/20 p-5 relative overflow-hidden shadow-inner"
            style={{
              background: "linear-gradient(135deg, rgba(30,30,32,0.95) 0%, rgba(24,24,26,0.98) 100%)",
            }}
          >
            {/* Google Brand Color accents */}
            <div className="absolute top-0 left-0 right-0 h-1 flex">
              <div className="h-full w-1/4 bg-[#4285F4]" />
              <div className="h-full w-1/4 bg-[#EA4335]" />
              <div className="h-full w-1/4 bg-[#FBBC04]" />
              <div className="h-full w-1/4 bg-[#34A853]" />
            </div>

            <div className="absolute right-3 top-3 text-[#FBBC04] animate-pulse">
              <Sparkles size={16} />
            </div>

            <p className="text-[13px] font-bold text-white/90 leading-snug pr-4 text-left">
              {reviewPrompt}
            </p>

            <div className="mt-5 flex items-center justify-between border-t border-white/5 pt-4">
              <div className="flex items-center gap-1.5">
                <div className="h-5 w-5 rounded-md bg-[#4285F4] flex items-center justify-center font-black text-white text-[12px] shadow-sm">G</div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-white/30">Google Review</span>
              </div>

              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <div
                  className="inline-flex h-9 items-center justify-center rounded-full px-5 text-[10px] font-bold uppercase tracking-[0.12em] text-white shadow-lg cursor-pointer"
                  style={{ background: "linear-gradient(90deg, #4285F4 0%, #357ae8 100%)" }}
                >
                  Leave a review
                </div>
              </motion.div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

// ── Website Uplift preview (beat 7) ──────────────────────────────────────

export function WebsiteUpliftCard() {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      style={{ transformStyle: "preserve-3d" }}
      whileHover={reduceMotion ? {} : { rotateX: 3, rotateY: -4, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 200, damping: 25 }}
      className="w-full max-w-[420px] mx-auto rounded-2xl border border-[#161616]/10 bg-white shadow-[0_20px_50px_rgba(22,22,22,0.06),inset_0_1px_0_rgba(255,255,255,0.9)] overflow-hidden"
    >
      {/* Browser address bar */}
      <div className="bg-[#F7F3EE] border-b border-[#161616]/8 px-4 py-3 flex items-center gap-2">
        <div className="flex gap-1.5 shrink-0">
          <div className="h-2.5 w-2.5 rounded-full bg-[#161616]/15" />
          <div className="h-2.5 w-2.5 rounded-full bg-[#161616]/15" />
          <div className="h-2.5 w-2.5 rounded-full bg-[#161616]/15" />
        </div>
        <div className="flex-1 bg-white rounded-md border border-[#161616]/5 h-6 flex items-center px-3 justify-between">
          <span className="text-[9px] font-bold text-[#161616]/40 tracking-wider">yourwebsite.co.uk</span>
          <Globe size={10} className="text-[#161616]/30" />
        </div>
      </div>

      <div className="grid grid-cols-2 divide-x divide-[#161616]/8 h-48 relative z-10">
        {/* Left side: BEFORE */}
        <div className="p-4 flex flex-col justify-between bg-stone-100/40 relative">
          <div>
            <span className="inline-flex rounded-full bg-red-100 px-2 py-0.5 text-[8px] font-extrabold uppercase tracking-wide text-red-600 border border-red-200">Before</span>
            <div className="mt-3 space-y-1.5">
              <div className="h-2.5 w-20 bg-stone-400/20 rounded-full" />
              <div className="h-4 w-28 bg-stone-400/30 rounded-full" />
            </div>
            <p className="text-[10px] text-stone-400 font-semibold mt-3 italic leading-snug">&quot;Old website, doesn&apos;t capture quote enquiries...&quot;</p>
          </div>
          <div className="h-7 w-full border border-dashed border-[#161616]/10 rounded-lg flex items-center justify-center text-[8px] text-[#161616]/40 font-bold bg-white/20">
            Form broken (no response)
          </div>
        </div>

        {/* Right side: AFTER */}
        <div className="p-4 flex flex-col justify-between bg-white relative overflow-hidden">
          <div className="absolute -right-8 -bottom-8 h-20 w-20 rounded-full bg-emerald-500/[0.04] blur-xl" />
          <div>
            <span className="inline-flex rounded-full bg-emerald-500/10 px-2 py-0.5 text-[8px] font-extrabold uppercase tracking-wide text-emerald-600 border border-emerald-500/20">After</span>
            <div className="mt-3 space-y-1.5">
              <div className="h-2.5 w-24 bg-coral/30 rounded-full" />
              <div className="h-4 w-32 bg-[#161616] rounded-full" />
            </div>
            <p className="text-[10px] text-[#161616]/70 font-bold mt-3 leading-snug">Sleek, lightning fast design system</p>
          </div>
          <motion.div
            animate={reduceMotion ? {} : { scale: [1, 1.03, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="h-7 w-full bg-emerald-500 border border-emerald-400/20 rounded-lg flex items-center justify-center text-[8px] text-white font-bold uppercase tracking-wider shadow-sm"
          >
            Leads Rescued Live!
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

// ── Beat 1 chaos fragments ────────────────────────────────────────────────

const CHAOS_ICONS: Record<"call" | "form" | "message", LucideIcon> = {
  call: PhoneMissed,
  form: FileText,
  message: MessageSquare,
};

const CHAOS_STYLING = {
  call: {
    colorClass: "text-[#D96B4F]",
    bgClass: "bg-red-500/10 border-red-500/20",
    pillText: "Losing call",
  },
  form: {
    colorClass: "text-amber-500",
    bgClass: "bg-amber-500/10 border-amber-500/20",
    pillText: "Buried lead",
  },
  message: {
    colorClass: "text-emerald-500",
    bgClass: "bg-emerald-500/10 border-emerald-500/20",
    pillText: "Ghosted",
  },
};

export function ChaosFragment({
  kind,
  label,
  className,
  rotate = 0,
  delay = 0,
}: {
  kind: "call" | "form" | "message";
  label: string;
  className?: string;
  rotate?: number;
  delay?: number;
}) {
  const reduceMotion = useReducedMotion();
  const Icon = CHAOS_ICONS[kind];
  const styling = CHAOS_STYLING[kind];

  return (
    <motion.div
      initial={{ opacity: 0, y: 35, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ type: "spring", stiffness: 120, damping: 20, delay }}
      className={cn(
        "absolute flex w-[180px] sm:w-[220px] flex-col gap-3 rounded-[1.5rem] border border-white/60 bg-white/70 p-4 shadow-[0_20px_50px_rgba(22,22,22,0.06),0_1px_0_rgba(255,255,255,0.9),inset_0_0_12px_rgba(255,255,255,0.5)] backdrop-blur-md transition-all duration-300 hover:shadow-[0_25px_60px_rgba(22,22,22,0.12)] hover:-translate-y-1 hover:border-white",
        className
      )}
      style={{ rotate }}
    >
      <motion.div
        animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay }}
        className="flex flex-col gap-2"
      >
        <div className="flex items-center justify-between">
          <div className={cn("flex h-8 w-8 items-center justify-center rounded-xl border shadow-inner", styling.bgClass)}>
            <Icon size={16} className={styling.colorClass} aria-hidden="true" />
          </div>
          <span className="inline-flex items-center rounded-full bg-[#161616]/5 px-2 py-0.5 text-[8px] font-bold uppercase tracking-wider text-[#161616]/60">
            {styling.pillText}
          </span>
        </div>

        <p className="mt-1 text-[11px] font-semibold leading-snug text-[#161616]/75">
          {label}
        </p>

        {/* Fading visual progress bar */}
        <div className="mt-1.5 h-1 w-full bg-[#161616]/5 rounded-full overflow-hidden">
          <div className="h-full w-2/3 bg-red-500/40 rounded-full animate-pulse" />
        </div>
      </motion.div>
    </motion.div>
  );
}
