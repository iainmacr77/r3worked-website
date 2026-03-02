"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  animate,
  motion,
  useMotionValue,
  useMotionValueEvent,
  useReducedMotion,
  useSpring,
  type Variants,
} from "framer-motion";
import { ChevronDown, Check } from "lucide-react";
import { SectionHeading } from "@/components/typography/SectionHeading";
import { cn } from "@/lib/utils";

const BOOKING_INTENT_RATE = 0.3; // % of missed calls that are booking-intent calls
const BOOKING_CONVERSION_RATE = 0.35; // % of booking-intent calls converted when answered by Lola
const AVG_HANDLE_TIME_MINUTES = 2.2; // average minutes a host spends per handled call
const DAYS_PER_MONTH = 30;

type Plan = {
  name: string;
  price: string;
  payback: string;
  includes: string[];
  featured?: boolean;
};

const PLANS: Plan[] = [
  {
    name: "Recover",
    price: "R950",
    payback: "Payback: fast",
    includes: ["500 AI minutes", "Core routing", "Booking transcripts"],
  },
  {
    name: "Recover + Automate",
    price: "R2,500",
    payback: "Typical payback: < 7 days",
    includes: ["Unlimited AI minutes", "Advanced routing", "Transcripts + metrics"],
    featured: true,
  },
  {
    name: "Recover at Scale",
    price: "Custom",
    payback: "Typical payback: < 7 days",
    includes: ["Multi-location orchestration", "API workflows", "Dedicated success lead"],
  },
];

const PROOF_CHIPS = [
  "Calls answered: 97%",
  "Bookings created: 32",
  "Amendments handled: 18",
  "Running late updates: 7",
  "Complaints escalated: 4",
];

function AnimatedNumber({
  value,
  format,
  className,
}: {
  value: number;
  format: (value: number) => string;
  className?: string;
}) {
  const prefersReducedMotion = useReducedMotion();
  const motionValue = useMotionValue(value);
  const [displayValue, setDisplayValue] = useState(value);

  useMotionValueEvent(motionValue, "change", (latest) => {
    setDisplayValue(latest);
  });

  useEffect(() => {
    if (prefersReducedMotion) {
      motionValue.set(value);
      return;
    }
    const controls = animate(motionValue, value, {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    });
    return () => controls.stop();
  }, [motionValue, prefersReducedMotion, value]);

  return <span className={className}>{format(displayValue)}</span>;
}

function SliderField({
  id,
  label,
  min,
  max,
  step = 1,
  value,
  onChange,
  valueLabel,
}: {
  id: string;
  label: string;
  min: number;
  max: number;
  step?: number;
  value: number;
  onChange: (value: number) => void;
  valueLabel: string;
}) {
  return (
    <div className="space-y-2.5">
      <div className="flex items-center justify-between gap-3">
        <label htmlFor={id} className="font-outfit text-sm text-peach/84">
          {label}
        </label>
        <motion.span
          key={value}
          initial={{ scale: 0.98, opacity: 0.85 }}
          animate={{ scale: [0.98, 1.06, 1], opacity: 1 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="inline-flex min-w-[78px] justify-center rounded-full border border-white/14 bg-white/[0.06] px-3 py-1 font-jetbrains text-[11px] font-semibold tracking-[0.08em] text-peach/88"
        >
          {valueLabel}
        </motion.span>
      </div>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        className="h-1.5 w-full cursor-pointer appearance-none rounded-full bg-white/14 accent-coral focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral/60 focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
      />
    </div>
  );
}

export function PricingControlRoom() {
  const prefersReducedMotion = useReducedMotion();
  const matrixRef = useRef<HTMLDivElement>(null);
  const [matrixOpen, setMatrixOpen] = useState(false);
  const [callsPerNight, setCallsPerNight] = useState(120);
  const [missedPct, setMissedPct] = useState(25);
  const [avgBookingValue, setAvgBookingValue] = useState(1200);

  const parallaxX = useMotionValue(0);
  const parallaxY = useMotionValue(0);
  const springX = useSpring(parallaxX, { stiffness: 48, damping: 22, mass: 0.8 });
  const springY = useSpring(parallaxY, { stiffness: 48, damping: 22, mass: 0.8 });

  useEffect(() => {
    if (prefersReducedMotion) return;
    const handleMouseMove = (event: MouseEvent) => {
      const xRatio = event.clientX / window.innerWidth - 0.5;
      const yRatio = event.clientY / window.innerHeight - 0.5;
      parallaxX.set(xRatio * 18);
      parallaxY.set(yRatio * 12);
    };
    const handleScroll = () => {
      const scrollY = window.scrollY;
      parallaxY.set(Math.max(-10, Math.min(10, scrollY * 0.015)));
    };
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [parallaxX, parallaxY, prefersReducedMotion]);

  const results = useMemo(() => {
    const missedCallsPerNight = callsPerNight * (missedPct / 100);
    const recoveredCallsMonth = missedCallsPerNight * DAYS_PER_MONTH;
    const bookingsRecoveredMonth =
      recoveredCallsMonth * BOOKING_INTENT_RATE * BOOKING_CONVERSION_RATE;
    const revenueRecoveredMonth = bookingsRecoveredMonth * avgBookingValue;
    const hostHoursReclaimedMonth =
      (recoveredCallsMonth * AVG_HANDLE_TIME_MINUTES) / 60;

    return {
      bookingsRecoveredMonth,
      revenueRecoveredMonth,
      hostHoursReclaimedMonth,
      recoveredCallsMonth,
    };
  }, [avgBookingValue, callsPerNight, missedPct]);

  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], staggerChildren: 0.1 },
    },
  };

  const childVariants: Variants = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section
      id="pricing"
      className="section-offset relative w-full overflow-hidden bg-ink px-6 py-20 md:px-16 md:py-24"
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-20 h-64 w-64 -translate-x-1/2 rounded-full bg-coral/12 blur-[96px]"
        style={{ x: springX, y: springY }}
      />
      <div className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:radial-gradient(rgba(255,255,255,0.45)_0.6px,transparent_0.6px)] [background-size:3px_3px]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent" />

      <motion.div
        variants={containerVariants}
        initial={prefersReducedMotion ? "show" : "hidden"}
        whileInView="show"
        viewport={{ once: true, amount: 0.22 }}
        className="mx-auto w-full max-w-7xl space-y-8"
      >
        <motion.div variants={childVariants} className="section-header max-w-4xl">
          <SectionHeading
            eyebrow="PRICING"
            title="Pricing that pays for itself."
            subtitle="Stop paying for missed calls. Start measuring recovered revenue."
            titleClassName="type-h2 text-peach"
            subtitleClassName="text-peach/82"
          />
          <p className="type-body mt-4 max-w-[72ch] text-peach/70">
            Every missed call is either lost revenue or a staff interruption. Lola turns it into tracked recovery.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 xl:grid-cols-12">
          <motion.article
            variants={childVariants}
            className="pricing-panel relative overflow-hidden rounded-[2rem] border border-white/14 bg-gradient-to-br from-white/[0.12] via-white/[0.06] to-white/[0.025] p-6 shadow-[0_30px_70px_rgba(0,0,0,0.45)] backdrop-blur-xl xl:col-span-7 md:p-7"
          >
            <span className="pointer-events-none absolute inset-0 pricing-scanline" />
            <div className="pointer-events-none absolute right-[-8%] top-[15%] h-48 w-48 rounded-full bg-coral/14 blur-[88px]" />
            <div className="relative space-y-6">
              <div className="space-y-2">
                <p className="font-jetbrains text-[11px] uppercase tracking-[0.16em] text-peach/66">
                  ROI SIMULATOR
                </p>
                <h3 className="font-outfit text-2xl font-semibold tracking-tight text-peach md:text-[2rem]">
                  Your phone bill is not the cost. Missed calls are.
                </h3>
              </div>

              <div className="space-y-4 rounded-2xl border border-white/12 bg-ink/40 p-4 md:p-5">
                <SliderField
                  id="calls-per-night"
                  label="Calls per night"
                  min={20}
                  max={500}
                  value={callsPerNight}
                  onChange={setCallsPerNight}
                  valueLabel={`${callsPerNight}`}
                />
                <SliderField
                  id="missed-without-lola"
                  label="% missed without Lola"
                  min={0}
                  max={60}
                  value={missedPct}
                  onChange={setMissedPct}
                  valueLabel={`${missedPct}%`}
                />
                <SliderField
                  id="avg-booking-value"
                  label="Avg booking value"
                  min={400}
                  max={4000}
                  step={50}
                  value={avgBookingValue}
                  onChange={setAvgBookingValue}
                  valueLabel={`R${avgBookingValue.toLocaleString("en-ZA")}`}
                />
              </div>

              <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
                <div className="rounded-2xl border border-white/12 bg-ink/42 p-4 min-h-[104px]">
                  <p className="font-jetbrains text-[10px] uppercase tracking-[0.13em] text-peach/62">
                    Bookings recovered / month
                  </p>
                  <AnimatedNumber
                    value={results.bookingsRecoveredMonth}
                    format={(number) => Math.round(number).toLocaleString("en-ZA")}
                    className="mt-2 block font-outfit text-3xl font-semibold tracking-tight text-peach"
                  />
                </div>
                <div className="rounded-2xl border border-white/12 bg-ink/42 p-4 min-h-[104px]">
                  <p className="font-jetbrains text-[10px] uppercase tracking-[0.13em] text-peach/62">
                    Revenue recovered / month
                  </p>
                  <AnimatedNumber
                    value={results.revenueRecoveredMonth}
                    format={(number) =>
                      `R${Math.round(number).toLocaleString("en-ZA")}`
                    }
                    className="mt-2 block font-outfit text-3xl font-semibold tracking-tight text-peach"
                  />
                </div>
                <div className="rounded-2xl border border-white/12 bg-ink/42 p-4 min-h-[104px]">
                  <p className="font-jetbrains text-[10px] uppercase tracking-[0.13em] text-peach/62">
                    Host hours reclaimed / month
                  </p>
                  <AnimatedNumber
                    value={results.hostHoursReclaimedMonth}
                    format={(number) => number.toFixed(1)}
                    className="mt-2 block font-outfit text-3xl font-semibold tracking-tight text-peach"
                  />
                </div>
              </div>

              <p className="font-outfit text-xs text-peach/64">
                Illustrative estimates. We&apos;ll calibrate with your real call logs.
              </p>

              <details className="group rounded-xl border border-white/12 bg-ink/35 px-4 py-3">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 font-jetbrains text-[11px] uppercase tracking-[0.12em] text-peach/72">
                  Assumptions
                  <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
                </summary>
                <div className="mt-3 space-y-1.5 font-outfit text-sm text-peach/72">
                  <p>Recovered calls = calls per night × missed % × 30 days.</p>
                  <p>Booking intent rate: {(BOOKING_INTENT_RATE * 100).toFixed(0)}% of missed calls.</p>
                  <p>Conversion rate: {(BOOKING_CONVERSION_RATE * 100).toFixed(0)}% when answered by Lola.</p>
                  <p>Host hours = calls handled by Lola × {AVG_HANDLE_TIME_MINUTES} minutes ÷ 60.</p>
                  <p className="text-peach/58">
                    Calls handled by Lola / month: {Math.round(results.recoveredCallsMonth).toLocaleString("en-ZA")}
                  </p>
                </div>
              </details>
            </div>
          </motion.article>

          <motion.aside
            variants={childVariants}
            className="grid grid-cols-1 gap-3 xl:col-span-5"
          >
            {PLANS.map((plan) => (
              <article
                key={plan.name}
                className={cn(
                  "rounded-[1.5rem] border p-5 backdrop-blur-xl",
                  "bg-gradient-to-br from-white/[0.1] via-white/[0.055] to-white/[0.025]",
                  "border-white/14 shadow-[0_20px_45px_rgba(0,0,0,0.36)]",
                  plan.featured &&
                    "relative z-10 border-coral/28 shadow-[0_30px_60px_rgba(0,0,0,0.42),0_0_0_1px_rgba(255,107,107,0.22)]"
                )}
              >
                <p className="font-outfit text-xl font-medium text-peach">{plan.name}</p>
                <p className="mt-1 font-outfit text-sm text-peach/70">{plan.payback}</p>
                <p className="mt-4 font-playfair text-3xl italic text-peach">
                  From {plan.price}
                  <span className="ml-1 font-outfit text-sm not-italic text-peach/68">
                    / mo
                  </span>
                </p>
                <ul className="mt-4 space-y-2">
                  {plan.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-peach/82">
                      <Check className="mt-0.5 h-4 w-4 flex-none text-coral" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}

            <div className="mt-1 flex flex-wrap items-center gap-4 rounded-2xl border border-white/12 bg-white/[0.03] p-4">
              <Link
                href="/book"
                className="inline-flex items-center justify-center rounded-full border border-coral/36 bg-coral px-5 py-2.5 font-outfit text-sm font-medium text-white shadow-[0_12px_24px_rgba(255,107,107,0.28)] transition-transform hover:scale-[1.01]"
              >
                Book a demo
              </Link>
              <button
                type="button"
                className="type-eyebrow text-coral transition-opacity hover:opacity-80"
                onClick={() => {
                  setMatrixOpen(true);
                  matrixRef.current?.scrollIntoView({
                    behavior: prefersReducedMotion ? "auto" : "smooth",
                    block: "start",
                  });
                }}
              >
                See full feature matrix
              </button>
            </div>
          </motion.aside>
        </div>

        <motion.div
          variants={childVariants}
          className="rounded-[1.25rem] border border-white/14 bg-gradient-to-r from-white/[0.08] via-white/[0.05] to-white/[0.03] p-3 shadow-[0_14px_30px_rgba(0,0,0,0.26)]"
        >
          <div className="flex gap-2 overflow-x-auto pb-1">
            {PROOF_CHIPS.map((chip, index) => (
              <motion.span
                key={chip}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
                whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: index * 0.08, duration: 0.45, ease: "easeOut" }}
                className="inline-flex shrink-0 items-center rounded-full border border-white/14 bg-ink/48 px-3 py-1.5 font-jetbrains text-[10px] uppercase tracking-[0.12em] text-peach/74 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
              >
                {chip}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.div
          ref={matrixRef}
          variants={childVariants}
          className="rounded-[1.5rem] border border-white/12 bg-white/[0.03] p-4 md:p-5"
        >
          <button
            type="button"
            onClick={() => setMatrixOpen((previous) => !previous)}
            className="flex w-full items-center justify-between rounded-xl border border-white/10 bg-ink/35 px-4 py-3 text-left"
            aria-expanded={matrixOpen}
            aria-controls="pricing-feature-matrix"
          >
            <span className="font-jetbrains text-[11px] uppercase tracking-[0.14em] text-peach/78">
              Feature matrix
            </span>
            <ChevronDown
              className={cn(
                "h-4 w-4 text-peach/78 transition-transform",
                matrixOpen && "rotate-180"
              )}
            />
          </button>
          {matrixOpen ? (
            <div id="pricing-feature-matrix" className="mt-3 overflow-x-auto">
              <table className="w-full min-w-[560px] border-separate border-spacing-y-2 text-sm">
                <thead>
                  <tr className="text-left font-jetbrains text-[10px] uppercase tracking-[0.12em] text-peach/64">
                    <th className="px-3">Capability</th>
                    <th className="px-3">Recover</th>
                    <th className="px-3">Recover + Automate</th>
                    <th className="px-3">Recover at Scale</th>
                  </tr>
                </thead>
                <tbody className="font-outfit text-peach/82">
                  {[
                    ["AI minutes", "500", "Unlimited", "Unlimited"],
                    ["Routing", "Core", "Advanced intent", "Cross-site routing"],
                    ["Transcripts", "Included", "Included + analytics", "Included + API export"],
                    ["Metrics", "Baseline", "Control room", "Multi-location control room"],
                    ["Support", "Standard", "Priority", "Dedicated success lead"],
                  ].map((row) => (
                    <tr key={row[0]}>
                      <td className="rounded-l-xl border border-white/10 bg-ink/40 px-3 py-2.5">{row[0]}</td>
                      <td className="border-y border-white/10 bg-ink/40 px-3 py-2.5">{row[1]}</td>
                      <td className="border-y border-white/10 bg-ink/40 px-3 py-2.5">{row[2]}</td>
                      <td className="rounded-r-xl border border-white/10 bg-ink/40 px-3 py-2.5">{row[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : null}
        </motion.div>
      </motion.div>

      <style jsx>{`
        .pricing-scanline {
          opacity: 0;
          background: linear-gradient(
            180deg,
            transparent 42%,
            rgba(255, 255, 255, 0.12) 50%,
            transparent 58%
          );
          transform: translateY(-110%);
          animation: pricingScanline 8s ease-in-out infinite;
          mix-blend-mode: screen;
        }

        @keyframes pricingScanline {
          0% {
            opacity: 0;
            transform: translateY(-110%);
          }
          9% {
            opacity: 0.25;
          }
          18% {
            opacity: 0;
            transform: translateY(160%);
          }
          100% {
            opacity: 0;
            transform: translateY(160%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .pricing-scanline {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
