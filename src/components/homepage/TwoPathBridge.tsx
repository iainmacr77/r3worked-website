"use client";

import Link from "next/link";
import { useRef, type MouseEvent } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const PATHS = [
  {
    label: "A",
    title: "Your website already works.",
    body: "Bolt the Lead Rescue system straight onto your existing site — instant capture, WhatsApp alerts and review follow-up, from £149 a month.",
    ctaLabel: "Start catching leads",
    targetId: "lead-rescue-review",
    primary: true,
  },
  {
    label: "B",
    title: "Your website is part of the problem.",
    body: "We make it credible and conversion-ready first — a focused refresh or a full rebuild — then switch the system on. Three phases, shown below.",
    ctaLabel: "See the transformation",
    targetId: "before-after-showcase",
    primary: false,
  },
] as const;

/**
 * The bridge between "how the system works" (Steps 01–05) and the optional
 * website chapter (Phases 01–03): one goal, two starting points, drawn as a
 * literal fork in the road.
 */
export function TwoPathBridge() {
  const scopeRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Fully-drawn fork is the SSR/no-JS/reduced-motion state; only take it
      // apart and scrub it back in when motion is allowed.
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const tl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: "[data-fork]",
          start: "top 85%",
          end: "bottom 45%",
          scrub: 0.8,
        },
      });

      tl.fromTo(
        "[data-fork-stem]",
        { strokeDashoffset: 1 },
        { strokeDashoffset: 0, duration: 0.3 }
      )
        .fromTo(
          "[data-fork-junction]",
          { scale: 0, transformOrigin: "center center" },
          { scale: 1, duration: 0.08, ease: "back.out(2)" },
          0.26
        )
        .fromTo(
          "[data-fork-branch]",
          { strokeDashoffset: 1 },
          { strokeDashoffset: 0, duration: 0.5 },
          0.34
        )
        .fromTo(
          "[data-fork-node]",
          { scale: 0, transformOrigin: "center center" },
          { scale: 1, duration: 0.12, ease: "back.out(2)", stagger: 0.04 },
          0.82
        );
    },
    { scope: scopeRef }
  );

  return (
    <section
      id="two-paths"
      className="light-section-seam bg-[#F5F2EA] px-6 py-24 md:px-10 md:py-32 overflow-hidden scroll-mt-20"
    >
      <div ref={scopeRef} className="mx-auto max-w-[84rem]">
        {/* Section Header */}
        <div className="max-w-[42rem]">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="type-eyebrow text-[#A87C4F]"
          >
            Two ways in
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="mt-6 type-section-heading-serif text-[#161616]"
          >
            One goal. Two starting points.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="type-support mt-6 max-w-[36rem] text-[#2A2A2A]/70"
          >
            Every client gets the same lead-rescue system. The only question is
            whether your website is ready to feed it.
          </motion.p>
        </div>

        {/* Forking line (desktop) */}
        <div data-fork className="hidden md:block" aria-hidden="true">
          <svg
            viewBox="0 0 800 260"
            fill="none"
            className="mx-auto -mb-2 mt-4 w-full max-w-[52rem]"
          >
            <defs>
              <linearGradient id="fork-stroke" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#C97C2E" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#C87968" stopOpacity="0.9" />
              </linearGradient>
            </defs>

            {/* Ghost track */}
            <path
              d="M400 8 V72"
              stroke="#161616"
              strokeOpacity="0.06"
              strokeWidth="2"
            />
            <path
              d="M400 72 C400 160 180 140 180 236"
              stroke="#161616"
              strokeOpacity="0.06"
              strokeWidth="2"
            />
            <path
              d="M400 72 C400 160 620 140 620 236"
              stroke="#161616"
              strokeOpacity="0.06"
              strokeWidth="2"
            />

            {/* Drawn fork */}
            <path
              data-fork-stem
              d="M400 8 V72"
              stroke="url(#fork-stroke)"
              strokeWidth="2.5"
              strokeLinecap="round"
              pathLength={1}
              strokeDasharray={1}
              strokeDashoffset={0}
            />
            <path
              data-fork-branch
              d="M400 72 C400 160 180 140 180 236"
              stroke="url(#fork-stroke)"
              strokeWidth="2.5"
              strokeLinecap="round"
              pathLength={1}
              strokeDasharray={1}
              strokeDashoffset={0}
            />
            <path
              data-fork-branch
              d="M400 72 C400 160 620 140 620 236"
              stroke="url(#fork-stroke)"
              strokeWidth="2.5"
              strokeLinecap="round"
              pathLength={1}
              strokeDasharray={1}
              strokeDashoffset={0}
            />

            {/* Junction + branch-end nodes */}
            <g data-fork-junction>
              <circle cx="400" cy="72" r="5" fill="#C97C2E" />
            </g>
            <g data-fork-node>
              <circle cx="180" cy="236" r="9" fill="#F5F2EA" stroke="#C97C2E" strokeWidth="2" />
              <circle cx="180" cy="236" r="3" fill="#161616" />
            </g>
            <g data-fork-node>
              <circle cx="620" cy="236" r="9" fill="#F5F2EA" stroke="#C97C2E" strokeWidth="2" />
              <circle cx="620" cy="236" r="3" fill="#161616" />
            </g>
          </svg>
        </div>

        {/* Path cards */}
        <div className="mt-12 grid gap-6 md:mt-0 md:grid-cols-2 md:gap-8 lg:gap-12">
          {PATHS.map((path, index) => (
            <PathCard key={path.label} path={path} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PathCard({
  path,
  index,
}: {
  path: (typeof PATHS)[number];
  index: number;
}) {
  const handleNavigate = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const target = document.getElementById(path.targetId);
    if (!target) return;

    target.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", `#${path.targetId}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.7,
        delay: 0.15 + index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -4 }}
      className="premium-card group relative flex h-full flex-col overflow-hidden p-8 transition-[border-color,box-shadow,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:shadow-[6px_6px_0px_#C97C2E,0_20px_60px_rgba(72,50,37,0.08),inset_0_1px_0_rgba(255,255,255,0.7)] md:p-12"
    >
      {/* Ghost path letter */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-10 right-6 select-none text-[13rem] font-bold leading-none tracking-[-0.08em] text-[#161616]/[0.025]"
      >
        {path.label}
      </div>

      <div className="relative z-10 flex h-full flex-col">
        <span className="type-eyebrow mb-8 w-fit rounded-full border border-[#C97C2E]/20 bg-[#C97C2E]/5 px-4 py-1.5 text-[#C97C2E]">
          Path {path.label}
        </span>

        <h3 className="type-h3 mb-4 text-[#161616]">{path.title}</h3>

        <p className="type-body-sm mb-10 max-w-[38ch] text-[#2A2A2A]/78">
          {path.body}
        </p>

        <Link
          href={`#${path.targetId}`}
          onClick={handleNavigate}
          className={
            path.primary
              ? "mt-auto inline-flex h-12 w-fit items-center gap-2.5 rounded-full bg-[#C97C2E] px-6 text-[0.68rem] font-semibold uppercase tracking-[0.17em] text-white shadow-[0_10px_20px_rgba(201,124,46,0.2)] transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_28px_rgba(201,124,46,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C97C2E]/30"
              : "mt-auto inline-flex h-12 w-fit items-center gap-2.5 rounded-full bg-[#161616] px-6 text-[0.68rem] font-semibold uppercase tracking-[0.17em] text-[#F7F3EE] shadow-[0_10px_18px_rgba(22,22,22,0.14)] transition-[transform,background,box-shadow] duration-300 hover:-translate-y-0.5 hover:bg-[#2A2A2A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C97C2E]/30"
          }
        >
          {path.ctaLabel}
          <ArrowRight
            size={14}
            strokeWidth={2.5}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>
      </div>
    </motion.div>
  );
}
