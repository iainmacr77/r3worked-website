"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import {
  MousePointerClick,
  Route,
  ClipboardList,
  UserCheck,
  Phone,
  Camera,
  ArrowRight,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Capture-stage steps                                                */
/* ------------------------------------------------------------------ */
const CAPTURE_STEPS = [
  {
    icon: MousePointerClick,
    number: "01",
    title: "Clear CTA placement",
    desc: "Prominent, intentional buttons placed where buying intent peaks.",
  },
  {
    icon: Route,
    number: "02",
    title: "Shorter enquiry path",
    desc: "Fewer clicks from interest to submission. No buried forms.",
  },
  {
    icon: ClipboardList,
    number: "03",
    title: "Better job detail captured",
    desc: "Structured fields that capture what matters — job type, area, photos.",
  },
  {
    icon: UserCheck,
    number: "04",
    title: "Serious leads guided through",
    desc: "A qualifying flow that separates tyre-kickers from real prospects.",
  },
];

/* ------------------------------------------------------------------ */
/*  Form field pills / chips                                           */
/* ------------------------------------------------------------------ */
const JOB_TYPES = ["Flat roof", "Pitched roof", "Guttering", "Chimney", "Leak repair"];
const CONTACT_METHODS = [
  { label: "Call", icon: Phone },
  { label: "Email", icon: null },
  { label: "WhatsApp", icon: null },
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
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

  const yTransform = useTransform(smoothProgress, [0, 1], [40, -40]);

  return (
    <section
      id="lead-capture-layer"
      className="bg-[#161616] px-6 py-24 md:px-10 md:py-32 overflow-hidden"
    >
      <div className="mx-auto max-w-[84rem]" ref={ref}>
        {/* ───────── Header ───────── */}
        <div className="mb-20 max-w-[48rem]">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="type-eyebrow text-[#D96B4F]"
          >
            Phase 02
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="mt-6 type-h2 text-[#F7F3EE]"
          >
            A clearer path to enquiry.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="type-support mt-6 text-[#F7F3EE]/70 max-w-[40rem]"
          >
            We structure the page, calls to action and form flow so serious
            prospects know exactly what to do next — and are more likely to
            actually do it.
          </motion.p>
        </div>

        {/* ───────── Two-column layout ───────── */}
        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-16 lg:gap-20 items-start">
          {/* ── Left: Capture funnel steps ── */}
          <div className="relative pl-8">
            {/* Vertical thread */}
            <div className="absolute left-[9px] top-2 bottom-2 w-px bg-gradient-to-b from-[#D96B4F]/60 via-[#D96B4F]/20 to-transparent" />

            <div className="space-y-14">
              {CAPTURE_STEPS.map((step, index) => {
                const Icon = step.icon;
                return (
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
                    {/* Timeline node */}
                    <div className="absolute -left-[31px] top-1.5 w-[18px] h-[18px] rounded-full bg-[#161616] border-2 border-[#D96B4F]/50 flex items-center justify-center shadow-[0_0_0_4px_#161616]">
                      <div className="w-[6px] h-[6px] rounded-full bg-[#D96B4F]" />
                    </div>

                    {/* Step content */}
                    <div className="flex items-start gap-4">
                      <div className="mt-0.5 w-9 h-9 rounded-xl bg-[#D96B4F]/[0.08] border border-[#D96B4F]/15 flex items-center justify-center shrink-0">
                        <Icon size={16} className="text-[#D96B4F]" />
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-1.5">
                          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#D96B4F]/50 tabular-nums">
                            {step.number}
                          </span>
                          <h3 className="text-[1.05rem] font-semibold text-[#F7F3EE] leading-tight">
                            {step.title}
                          </h3>
                        </div>
                        <p className="text-[#F7F3EE]/55 text-sm leading-relaxed max-w-[26rem]">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* ── Right: Stylised enquiry UI concept ── */}
          <motion.div
            style={{ y: yTransform }}
            className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-[#2A2A2A]"
          >
            {/* Background layers */}
            <div className="absolute inset-0 bg-[linear-gradient(160deg,rgba(42,42,42,0.5)_0%,rgba(22,22,22,0.95)_100%)] z-0" />
            <div className="absolute top-0 inset-x-0 h-44 bg-[radial-gradient(ellipse_at_top_center,rgba(217,107,79,0.12),transparent_70%)] z-0" />
            <div className="absolute bottom-0 inset-x-0 h-32 bg-[radial-gradient(ellipse_at_bottom_center,rgba(217,107,79,0.06),transparent_70%)] z-0" />

            <div className="relative z-10 flex flex-col">
              {/* ─ Landing page hero snippet ─ */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.7 }}
                className="px-6 pt-7 pb-5 md:px-8 md:pt-8"
              >
                {/* Browser chrome dots */}
                <div className="flex items-center gap-1.5 mb-6">
                  <div className="w-[7px] h-[7px] rounded-full bg-[#F7F3EE]/10" />
                  <div className="w-[7px] h-[7px] rounded-full bg-[#F7F3EE]/10" />
                  <div className="w-[7px] h-[7px] rounded-full bg-[#F7F3EE]/10" />
                  <div className="ml-3 h-[18px] w-[140px] rounded-full bg-[#F7F3EE]/[0.04] border border-[#F7F3EE]/[0.06]" />
                </div>

                {/* Hero headline */}
                <div className="mb-1">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#D96B4F]/60">
                    Collins Roofing
                  </span>
                </div>
                <h4 className="text-[1.4rem] md:text-[1.7rem] font-bold text-[#F7F3EE] leading-[1.15] tracking-[-0.02em] mb-2">
                  Your roof, sorted
                  <br />
                  <span className="text-[#D96B4F]">properly.</span>
                </h4>
                <p className="text-[#F7F3EE]/40 text-xs leading-relaxed max-w-[28ch] mb-5">
                  Trusted local roofers serving Bristol and&nbsp;Bath. Free inspections, honest quotes.
                </p>

                {/* CTA buttons */}
                <div className="flex flex-wrap gap-2.5">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.55 }}
                    className="inline-flex items-center gap-2 rounded-full bg-[#D96B4F] px-5 py-2.5 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-white shadow-[0_4px_20px_rgba(217,107,79,0.35)]"
                  >
                    Request a Quote
                    <ArrowRight size={12} strokeWidth={2.5} />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.65 }}
                    className="inline-flex items-center gap-2 rounded-full border border-[#F7F3EE]/15 bg-[#F7F3EE]/[0.04] px-5 py-2.5 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-[#F7F3EE]/70"
                  >
                    <Phone size={11} strokeWidth={2.5} />
                    Call Now
                  </motion.div>
                </div>
              </motion.div>

              {/* ─ Divider ─ */}
              <div className="mx-6 md:mx-8 border-t border-[#F7F3EE]/[0.06]" />

              {/* ─ Quote request form panel ─ */}
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.7 }}
                className="px-6 pt-5 pb-7 md:px-8 md:pb-8"
              >
                <div className="flex items-center justify-between mb-5">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#F7F3EE]/40">
                    Quick Quote Request
                  </span>
                  <span className="text-[10px] font-medium text-[#D96B4F]/50 tracking-wide">
                    2 min
                  </span>
                </div>

                {/* Form fields grid */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {/* Name */}
                  <FormField label="Name" value="James Whitfield" delay={0.6} />
                  {/* Postcode */}
                  <FormField label="Area / Postcode" value="BS6 7AA" delay={0.65} />
                </div>

                {/* Job type chips */}
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 }}
                  className="mb-4"
                >
                  <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#F7F3EE]/30 mb-2 block">
                    Type of job
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {JOB_TYPES.map((job, i) => (
                      <span
                        key={job}
                        className={`inline-flex items-center rounded-full px-3 py-1.5 text-[0.65rem] font-medium tracking-wide transition-colors ${
                          i === 0
                            ? "bg-[#D96B4F]/15 text-[#D96B4F] border border-[#D96B4F]/25"
                            : "bg-[#F7F3EE]/[0.04] text-[#F7F3EE]/40 border border-[#F7F3EE]/[0.06]"
                        }`}
                      >
                        {job}
                      </span>
                    ))}
                  </div>
                </motion.div>

                {/* Describe issue */}
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.75 }}
                  className="mb-4"
                >
                  <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#F7F3EE]/30 mb-2 block">
                    Describe the issue
                  </span>
                  <div className="rounded-xl bg-[#F7F3EE]/[0.03] border border-[#F7F3EE]/[0.06] px-4 py-3 min-h-[3.5rem]">
                    <span className="text-[0.75rem] text-[#F7F3EE]/25 leading-relaxed">
                      Leak around the chimney flashing, needs inspection…
                    </span>
                  </div>
                </motion.div>

                {/* Upload + contact row */}
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 }}
                  className="grid grid-cols-2 gap-3 mb-5"
                >
                  {/* Upload photos */}
                  <div>
                    <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#F7F3EE]/30 mb-2 block">
                      Upload photos
                    </span>
                    <div className="rounded-xl bg-[#F7F3EE]/[0.03] border border-dashed border-[#F7F3EE]/[0.08] px-4 py-3 flex items-center gap-2.5">
                      <Camera
                        size={14}
                        className="text-[#F7F3EE]/25 shrink-0"
                      />
                      <span className="text-[0.68rem] text-[#F7F3EE]/25">
                        Drag or tap to add
                      </span>
                    </div>
                  </div>

                  {/* Preferred contact */}
                  <div>
                    <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#F7F3EE]/30 mb-2 block">
                      Contact preference
                    </span>
                    <div className="flex gap-1.5">
                      {CONTACT_METHODS.map((method, i) => (
                        <span
                          key={method.label}
                          className={`inline-flex items-center justify-center gap-1.5 rounded-full px-3 py-[7px] text-[0.62rem] font-semibold uppercase tracking-wider ${
                            i === 0
                              ? "bg-[#D96B4F]/15 text-[#D96B4F] border border-[#D96B4F]/25"
                              : "bg-[#F7F3EE]/[0.04] text-[#F7F3EE]/35 border border-[#F7F3EE]/[0.06]"
                          }`}
                        >
                          {method.icon && (
                            <method.icon size={10} strokeWidth={2.5} />
                          )}
                          {method.label}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Submit button */}
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.85 }}
                  className="flex items-center justify-between"
                >
                  <div className="inline-flex items-center gap-2.5 rounded-full bg-[#D96B4F] px-6 py-3 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-white shadow-[0_6px_24px_rgba(217,107,79,0.3)]">
                    Send Enquiry
                    <ArrowRight size={13} strokeWidth={2.5} />
                  </div>
                  <span className="text-[10px] text-[#F7F3EE]/20 hidden sm:inline">
                    Instant confirmation
                  </span>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Form field helper                                                  */
/* ------------------------------------------------------------------ */
function FormField({
  label,
  value,
  delay,
}: {
  label: string;
  value: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
    >
      <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#F7F3EE]/30 mb-2 block">
        {label}
      </span>
      <div className="rounded-xl bg-[#F7F3EE]/[0.03] border border-[#F7F3EE]/[0.06] px-4 py-2.5">
        <span className="text-[0.78rem] text-[#F7F3EE]/60 font-medium">
          {value}
        </span>
      </div>
    </motion.div>
  );
}
