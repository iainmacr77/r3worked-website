"use client";

import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/typography/SectionHeading";

type Plan = {
  name: string;
  descriptor: string;
  commercial: string;
  includes: string[];
  featured?: boolean;
};

const PLANS: Plan[] = [
  {
    name: "Recover",
    descriptor: "For venues focused on missed-call recovery and core booking capture",
    commercial: "Scoped to venue volume",
    includes: [
      "Missed-call recovery and core booking capture",
      "Essential routing for reservations, changes, and key service questions",
      "Transcript visibility across guest conversations",
      "Clean handoff when a manager or host needs to step in",
    ],
  },
  {
    name: "Recover + Automate",
    descriptor:
      "For busy restaurants that need deeper routing, after-hours handling, and operational visibility",
    commercial: "Most venues start here",
    includes: [
      "Deeper routing across bookings, amendments, and edge cases",
      "After-hours handling that still captures live demand",
      "Operational visibility into call outcomes and pressure windows",
      "Built around the service rhythm of a busy floor",
    ],
    featured: true,
  },
  {
    name: "Scale",
    descriptor:
      "For larger groups, multi-site operations, and more advanced workflow needs",
    commercial: "Custom for groups",
    includes: [
      "Multi-site routing and location-aware booking logic",
      "Group reporting across venues, teams, and service periods",
      "Workflow orchestration for approvals, escalations, and exceptions",
      "Structured rollout and advanced operational support",
    ],
  },
];

export function PricingControlRoom() {
  const prefersReducedMotion = useReducedMotion();
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
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-coral/10 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.07),transparent_42%),radial-gradient(circle_at_20%_30%,rgba(255,107,107,0.08),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(141,229,213,0.08),transparent_24%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:radial-gradient(rgba(255,255,255,0.42)_0.6px,transparent_0.6px)] [background-size:3px_3px]"
      />

      <motion.div
        variants={containerVariants}
        initial={prefersReducedMotion ? "show" : "hidden"}
        whileInView="show"
        viewport={{ once: true, amount: 0.22 }}
        className="relative z-10 mx-auto w-full max-w-7xl space-y-8"
      >
        <motion.div variants={childVariants} className="section-header max-w-4xl">
          <SectionHeading
            eyebrow="PRICING"
            title="No two venues lose demand the same way."
            subtitle="Lola is scoped around venue volume, service rhythm, routing complexity, and the level of automation and visibility your team needs."
            titleClassName="type-h2 text-peach"
            subtitleClassName="max-w-[58ch] text-peach/78"
          />
        </motion.div>

        <div className="grid gap-5 lg:grid-cols-3">
          {PLANS.map((plan) => (
            <motion.article
              variants={childVariants}
              key={plan.name}
              className={`relative overflow-hidden rounded-[2rem] border p-6 shadow-[0_24px_60px_rgba(0,0,0,0.34)] backdrop-blur-xl md:p-7 ${
                plan.featured
                  ? "border-coral/18 bg-[linear-gradient(180deg,rgba(255,138,122,0.08),rgba(255,255,255,0.06))] shadow-[0_24px_60px_rgba(0,0,0,0.34),0_0_0_1px_rgba(255,138,122,0.05)]"
                  : "border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))]"
              }`}
            >
              <div
                aria-hidden
                className={`pointer-events-none absolute inset-x-0 top-0 h-px ${
                  plan.featured ? "bg-coral/35" : "bg-white/18"
                }`}
              />
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-jetbrains text-[10px] uppercase tracking-[0.16em] text-coral">
                    {plan.commercial}
                  </p>
                  <h3 className="mt-3 text-3xl font-semibold tracking-tight text-white">
                    {plan.name}
                  </h3>
                </div>
                {plan.featured ? (
                  <span className="rounded-full border border-coral/18 bg-coral/10 px-3 py-1.5 font-jetbrains text-[10px] uppercase tracking-[0.12em] text-coral/90">
                    RECOMMENDED
                  </span>
                ) : null}
              </div>

              <p className="mt-4 max-w-[30ch] text-sm leading-relaxed text-peach/76">
                {plan.descriptor}
              </p>

              <ul className="mt-6 space-y-3 text-peach/82">
                {plan.includes.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1.5 inline-block h-2 w-2 rounded-full bg-coral" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>

        <motion.div
          variants={childVariants}
          className="rounded-[2rem] border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-7 shadow-[0_24px_60px_rgba(0,0,0,0.28)] md:flex md:items-center md:justify-between md:gap-8"
        >
          <div className="max-w-2xl">
            <p className="font-jetbrains text-[10px] uppercase tracking-[0.18em] text-coral">
              Scope the right setup
            </p>
            <h3 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              See how Lola fits your service flow.
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-peach/76 md:text-base">
              We&apos;ll map your call volume, booking rhythm, amendment flow, routing depth, and reporting needs against the right deployment.
            </p>
          </div>
          <Link
            href="/book"
            className="mt-6 inline-flex min-h-12 items-center rounded-full bg-coral px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_26px_rgba(255,107,107,0.28)] transition-transform duration-300 hover:-translate-y-0.5 hover:bg-coral/90 md:mt-0"
          >
            Book a demo
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
