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
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

export const EASE: [number, number, number, number] = [0.2, 0.65, 0.3, 0.9];

// ── Phone frame ──────────────────────────────────────────────────────────

export function PhoneMockup({
  children,
  className,
  dark = false,
}: {
  children: ReactNode;
  className?: string;
  dark?: boolean;
}) {
  return (
    <div className={cn("relative mx-auto w-[280px] sm:w-[320px]", className)}>
      <div
        className="relative overflow-hidden rounded-[2.75rem] border-[6px] border-[#3A3A3A] shadow-[0_0_0_1px_rgba(247,243,238,0.08),0_40px_90px_rgba(0,0,0,0.45)]"
        style={{ aspectRatio: "9 / 19" }}
      >
        <div className="absolute left-1/2 top-0 z-20 h-6 w-28 -translate-x-1/2 rounded-b-2xl bg-[#3A3A3A]" />
        <div
          className={cn(
            "relative h-full w-full overflow-hidden",
            dark ? "bg-[#161616]" : "bg-[#F7F3EE]"
          )}
        >
          {children}
        </div>
      </div>
    </div>
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
      initial={{ opacity: 0, y: -16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, ease: EASE }}
      className="rounded-2xl border border-[#161616]/8 bg-white p-4 shadow-[0_16px_40px_rgba(22,22,22,0.12)]"
    >
      <div className="flex items-start gap-3">
        <div
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
          style={{ background: "var(--color-whatsapp)" }}
        >
          <MessageSquare size={18} className="text-white" aria-hidden="true" />
        </div>
        <div className="min-w-0">
          <p
            className="text-[10px] font-bold uppercase tracking-[0.14em]"
            style={{ color: "var(--color-whatsapp)" }}
          >
            {label}
          </p>
          <p className="mt-1 text-sm font-bold leading-snug text-[#161616]">{title}</p>
          <p className="mt-1 text-xs font-semibold text-[#D96B4F]">{action} →</p>
        </div>
      </div>
    </motion.div>
  );
}

export function EmailAlertCard({ label, subject }: { label: string; subject: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, delay: 0.15, ease: EASE }}
      className="flex items-center gap-3 rounded-2xl border border-[#161616]/8 bg-white/90 p-4 shadow-[0_12px_30px_rgba(22,22,22,0.08)]"
    >
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#161616]/6">
        <Mail size={16} className="text-[#161616]/60" aria-hidden="true" />
      </div>
      <div className="min-w-0">
        <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-[#161616]/40">
          {label}
        </p>
        <p className="mt-0.5 truncate text-xs font-semibold text-[#161616]">{subject}</p>
      </div>
    </motion.div>
  );
}

// ── Missed call screen (beat 4) ─────────────────────────────────────────

export function MissedCallScreen({ caller }: { caller: string }) {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-4 px-6 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#D96B4F]/15">
        <PhoneMissed size={26} className="text-[#D96B4F]" aria-hidden="true" />
      </div>
      <div>
        <p className="text-lg font-bold text-[#F7F3EE]">{caller}</p>
        <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-[#D96B4F]">
          Missed call
        </p>
      </div>
    </div>
  );
}

// ── Coming soon (beat 4) ─────────────────────────────────────────────────

export function ComingSoonBadge({ children = "Coming soon" }: { children?: ReactNode }) {
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em]"
      style={{
        color: "var(--color-status-pending)",
        borderColor: "color-mix(in srgb, var(--color-status-pending) 35%, transparent)",
        background: "color-mix(in srgb, var(--color-status-pending) 14%, transparent)",
      }}
    >
      <span
        className="h-1.5 w-1.5 rounded-full"
        style={{ background: "var(--color-status-pending)" }}
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
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, delay: 0.15, ease: EASE }}
      className="rounded-2xl border border-[#F7F3EE]/12 bg-[#F7F3EE]/[0.04] p-5"
    >
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm font-bold text-[#F7F3EE]">{title}</p>
        <ComingSoonBadge>COMING SOON</ComingSoonBadge>
      </div>
      <ol className="mt-4 space-y-2.5">
        {steps.map((step, i) => (
          <li key={step} className="flex items-center gap-3 text-sm text-[#F7F3EE]/62">
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#F7F3EE]/15 text-[10px] font-bold text-[#F7F3EE]/50">
              {i + 1}
            </span>
            {step}
          </li>
        ))}
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
  const [showLead, setShowLead] = useState(false);

  useEffect(() => {
    if (!inView) return;
    const timer = setTimeout(() => setShowLead(true), reduceMotion ? 0 : 1500);
    return () => clearTimeout(timer);
  }, [inView, reduceMotion]);

  return (
    <div ref={ref} className="mx-auto w-full max-w-md">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: EASE }}
        className="rounded-[1.75rem] border border-[#161616]/8 bg-white p-6 shadow-[0_24px_60px_rgba(22,22,22,0.08)] sm:p-8"
      >
        <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#B86B5C]">
          Get a quote
        </p>
        <div className="mt-4 space-y-3">
          {fields.map((field) => (
            <div
              key={field.label}
              className="rounded-xl border border-[#161616]/8 bg-[#F7F3EE] px-4 py-3"
            >
              <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#161616]/40">
                {field.label}
              </p>
              <p className="mt-0.5 text-sm font-semibold text-[#161616]">{field.value}</p>
            </div>
          ))}
        </div>
        <div className="mt-5 inline-flex h-11 items-center justify-center rounded-full bg-[#161616] px-6 text-[12px] font-bold uppercase tracking-[0.1em] text-[#F7F3EE]">
          Submit
        </div>
      </motion.div>

      <AnimatePresence>
        {showLead ? (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="mt-4 flex items-center gap-3 rounded-2xl border p-4 shadow-[0_16px_40px_rgba(22,22,22,0.1)]"
            style={{
              borderColor: "color-mix(in srgb, var(--color-status-live) 30%, transparent)",
              background: "color-mix(in srgb, var(--color-status-live) 7%, white)",
            }}
          >
            <div
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
              style={{ background: "color-mix(in srgb, var(--color-status-live) 16%, transparent)" }}
            >
              <CheckCircle2 size={18} style={{ color: "var(--color-status-live)" }} aria-hidden="true" />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-bold text-[#161616]">{leadCard.title}</p>
              <p className="truncate text-xs text-[#161616]/55">{leadCard.meta}</p>
            </div>
            <span
              className="ml-auto shrink-0 rounded-full px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.12em]"
              style={{
                color: "var(--color-status-live)",
                background: "color-mix(in srgb, var(--color-status-live) 12%, transparent)",
              }}
            >
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
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {tiles.map((tile, i) => (
        <motion.div
          key={tile.label}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: i * 0.08, ease: EASE }}
          className="rounded-2xl border border-[#F7F3EE]/10 bg-[#F7F3EE]/[0.05] p-5"
        >
          <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#F7F3EE]/45">
            {tile.label}
          </p>
          <p className="mt-2 text-xl font-bold text-[#F7F3EE]">{tile.value}</p>
        </motion.div>
      ))}
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

  useEffect(() => {
    if (!inView) return;
    if (reduceMotion) {
      const t = setTimeout(() => setStage(2), 0);
      return () => clearTimeout(t);
    }
    const t1 = setTimeout(() => setStage(1), 800);
    const t2 = setTimeout(() => setStage(2), 1700);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [inView, reduceMotion]);

  return (
    <div
      ref={ref}
      className="mx-auto w-full max-w-md rounded-[1.75rem] border border-[#161616]/8 bg-white p-6 text-center shadow-[0_24px_60px_rgba(22,22,22,0.08)] sm:p-8"
    >
      <p className="text-lg font-bold text-[#161616]">{prompt}</p>
      <div className="mt-4 flex justify-center gap-1.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={28}
            className={stage >= 1 ? "fill-current" : ""}
            style={{ color: "var(--color-google-yellow)" }}
            aria-hidden="true"
          />
        ))}
      </div>
      <AnimatePresence>
        {stage >= 2 ? (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="mt-5 rounded-2xl border p-4"
            style={{
              borderColor: "color-mix(in srgb, var(--color-google-blue) 30%, transparent)",
              background: "color-mix(in srgb, var(--color-google-blue) 6%, white)",
            }}
          >
            <p className="text-sm font-semibold text-[#161616]">{reviewPrompt}</p>
            <div
              className="mt-3 inline-flex h-9 items-center justify-center rounded-full px-4 text-[11px] font-bold uppercase tracking-[0.1em] text-white"
              style={{ background: "var(--color-google-blue)" }}
            >
              Leave a review
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

// ── Beat 1 chaos fragments ────────────────────────────────────────────────

const CHAOS_ICONS: Record<"call" | "form" | "message", LucideIcon> = {
  call: PhoneMissed,
  form: FileText,
  message: MessageSquare,
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

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8, delay, ease: EASE }}
      className={cn(
        "absolute flex w-[170px] flex-col gap-2.5 rounded-2xl border border-[#161616]/10 bg-white/75 p-4 shadow-[0_20px_50px_rgba(22,22,22,0.08)] backdrop-blur-sm sm:w-[210px]",
        className
      )}
      style={{ rotate }}
    >
      <motion.div
        animate={reduceMotion ? undefined : { y: [0, -12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay }}
        className="flex flex-col gap-2.5"
      >
        <Icon size={24} className="text-[#161616]/35" aria-hidden="true" />
        <p className="text-xs font-semibold leading-snug text-[#161616]/45">{label}</p>
      </motion.div>
    </motion.div>
  );
}
