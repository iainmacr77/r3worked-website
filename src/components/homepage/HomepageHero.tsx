"use client";

import Link from "next/link";
import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

function HeroVisualFlow() {
  const visualRef = useRef<HTMLDivElement | null>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: visualRef,
    offset: ["start start", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.32,
  });

  const mainY = useTransform(smoothProgress, [0, 1], [24, -18]);
  const mainRotate = useTransform(smoothProgress, [0, 1], [1.2, -1.4]);
  const insetY = useTransform(smoothProgress, [0, 1], [14, -16]);
  const chipY = useTransform(smoothProgress, [0, 1], [20, -12]);
  const gridShift = useTransform(smoothProgress, [0, 1], [0, 56]);
  const drawProgress = useTransform(smoothProgress, [0, 1], [0.05, 1]);

  return (
    <div ref={visualRef} className="relative w-full max-w-[34rem] lg:justify-self-end">
      <div className="pointer-events-none absolute -left-10 top-10 h-36 w-36 rounded-full bg-[#D96B4F]/10 blur-3xl" />
      <div className="pointer-events-none absolute right-4 top-2 h-24 w-24 rounded-full bg-white/60 blur-2xl" />
      <div className="pointer-events-none absolute bottom-6 right-10 h-28 w-28 rounded-full bg-[#A94F3D]/8 blur-3xl" />

      <motion.div
        style={{
          y: reduceMotion ? 0 : mainY,
          rotate: reduceMotion ? 0 : mainRotate,
        }}
        className="relative overflow-hidden rounded-[2.4rem] border border-[#161616]/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.8),rgba(247,243,238,0.96))] p-5 shadow-[0_34px_90px_rgba(72,50,37,0.12),0_12px_28px_rgba(72,50,37,0.06),inset_0_1px_0_rgba(255,255,255,0.82)] md:p-6"
      >
        <div className="absolute inset-[1px] rounded-[calc(2.4rem-1px)] border border-white/60" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(217,107,79,0.14),transparent_36%),linear-gradient(180deg,rgba(255,255,255,0.32),rgba(255,255,255,0))]" />

        <motion.div
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(22,22,22,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(22,22,22,0.08) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
            backgroundPositionY: reduceMotion ? 0 : gridShift,
          }}
        />

        <div className="relative aspect-[0.92]">
          <div className="absolute inset-x-7 top-6 flex items-center justify-between text-[10px] uppercase tracking-[0.18em] text-[#2A2A2A]/46">
            <span>Front-end rework</span>
            <span>Intent flow</span>
          </div>

          <div className="absolute left-[7%] top-[14%] h-[14%] w-[34%] rounded-[1.2rem] border border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.88),rgba(243,236,228,0.88))] shadow-[0_16px_34px_rgba(73,50,36,0.08)]">
            <div className="flex items-center gap-2 border-b border-[#161616]/6 px-4 py-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#D96B4F]/78" />
              <span className="h-1.5 w-1.5 rounded-full bg-[#A94F3D]/36" />
              <span className="h-1.5 w-1.5 rounded-full bg-[#161616]/14" />
              <div className="ml-2 h-2 w-[58%] rounded-full bg-[#161616]/8" />
            </div>
            <div className="px-4 pt-4">
              <div className="h-2.5 w-[52%] rounded-full bg-[#161616]/10" />
              <div className="mt-3 h-10 rounded-[0.95rem] bg-[linear-gradient(135deg,rgba(169,79,61,0.18),rgba(126,63,53,0.08))]" />
            </div>
          </div>

          <div className="absolute right-[7%] top-[18%] h-[48%] w-[58%] overflow-hidden rounded-[1.9rem] border border-white/70 bg-[linear-gradient(145deg,rgba(231,222,210,0.86),rgba(247,243,238,0.92))] shadow-[0_24px_54px_rgba(73,50,36,0.1)]">
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.26),transparent_46%)]" />
            <div className="absolute inset-x-0 top-0 h-[38%] bg-[radial-gradient(circle_at_top_left,rgba(126,63,53,0.22),transparent_55%),linear-gradient(180deg,rgba(169,79,61,0.22),rgba(169,79,61,0.04))]" />
            <div className="absolute inset-x-[12%] top-[17%] h-px bg-[#161616]/10" />
            <div className="absolute inset-x-[18%] top-[28%] h-px bg-[#161616]/10" />
            <div className="absolute left-[12%] right-[12%] top-[28%] h-[34%] rounded-[1.3rem] border border-[#161616]/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.42),rgba(255,255,255,0.12))]" />
            <div className="absolute left-[18%] top-[42%] h-px w-[28%] bg-[#161616]/16" />
            <div className="absolute left-[18%] top-[48%] h-px w-[38%] bg-[#161616]/10" />
            <div className="absolute right-[18%] top-[42%] h-[16%] w-[22%] rounded-[1rem] border border-[#161616]/8 bg-white/24" />
            <svg
              viewBox="0 0 300 220"
              className="absolute inset-0 h-full w-full opacity-[0.28]"
              aria-hidden="true"
            >
              <path
                d="M44 78 L110 40 L168 40 L228 72 L250 72"
                fill="none"
                stroke="rgba(22,22,22,0.26)"
                strokeWidth="1.4"
                strokeLinecap="round"
              />
              <path
                d="M56 88 L100 58 L176 58 L210 88"
                fill="none"
                stroke="rgba(22,22,22,0.18)"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <motion.div
            style={{ y: reduceMotion ? 0 : insetY }}
            className="absolute bottom-[13%] left-[3%] w-[44%] overflow-hidden rounded-[1.55rem] border border-[#161616]/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.84),rgba(247,243,238,0.96))] p-4 shadow-[0_24px_52px_rgba(73,50,36,0.12)]"
          >
            <div className="flex items-center justify-between">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#7E3F35]/72">
                Enquiry path
              </p>
              <span className="h-2 w-2 rounded-full bg-[#D96B4F]/72" />
            </div>
            <div className="mt-4 space-y-3">
              <div className="h-9 rounded-[0.9rem] border border-[#161616]/8 bg-white/64" />
              <div className="h-9 rounded-[0.9rem] border border-[#161616]/8 bg-white/64" />
              <div className="flex items-center justify-between rounded-[1rem] border border-[#D96B4F]/14 bg-[linear-gradient(135deg,rgba(245,236,230,0.9),rgba(255,255,255,0.74))] px-3 py-3">
                <span className="text-[11px] font-medium text-[#161616]/82">
                  Request a quote
                </span>
                <span className="h-2 w-8 rounded-full bg-[#D96B4F]/68" />
              </div>
            </div>
          </motion.div>

          <motion.div
            style={{ y: reduceMotion ? 0 : chipY }}
            className="absolute bottom-[12%] right-[4%] rounded-[1.25rem] border border-[#161616]/8 bg-[rgba(22,22,22,0.92)] px-4 py-3 text-[#F7F3EE] shadow-[0_22px_42px_rgba(22,22,22,0.22)]"
          >
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.16em] text-[#F7F3EE]/54">
                <span className="h-1.5 w-1.5 rounded-full bg-[#D96B4F]" />
                <span>Enquiry received</span>
              </div>
              <div className="text-[10px] uppercase tracking-[0.16em] text-[#F7F3EE]/54">
                Client notified
              </div>
              <div className="text-[10px] uppercase tracking-[0.16em] text-[#F7F3EE]/54">
                Logged cleanly
              </div>
            </div>
          </motion.div>

          <svg
            viewBox="0 0 520 620"
            className="pointer-events-none absolute inset-0 h-full w-full"
            aria-hidden="true"
          >
            <motion.path
              d="M102 120 C132 122 168 132 198 156 C236 186 248 218 278 226 C322 238 346 232 370 250 C402 274 398 324 354 356 C322 380 254 382 210 418 C176 446 164 482 176 528"
              fill="none"
              stroke="rgba(169,79,61,0.34)"
              strokeWidth="18"
              strokeLinecap="round"
              style={{ pathLength: reduceMotion ? 1 : drawProgress }}
            />
            <motion.path
              d="M102 120 C132 122 168 132 198 156 C236 186 248 218 278 226 C322 238 346 232 370 250 C402 274 398 324 354 356 C322 380 254 382 210 418 C176 446 164 482 176 528"
              fill="none"
              stroke="rgba(217,107,79,0.9)"
              strokeWidth="2.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ pathLength: reduceMotion ? 1 : drawProgress }}
            />
            <circle
              cx="102"
              cy="120"
              r="7"
              fill="rgba(217,107,79,0.9)"
              opacity="0.82"
            />
            <circle
              cx="176"
              cy="528"
              r="7"
              fill="rgba(217,107,79,0.9)"
              opacity="0.82"
            />
          </svg>
        </div>
      </motion.div>
    </div>
  );
}

export function HomepageHero() {
  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden bg-[#F7F3EE]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(217,107,79,0.1),transparent_30%),radial-gradient(circle_at_82%_14%,rgba(169,79,61,0.08),transparent_24%),radial-gradient(circle_at_62%_74%,rgba(231,222,210,0.7),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.68),rgba(247,243,238,0.42)_34%,rgba(247,243,238,0.96)_100%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.18] [background-image:linear-gradient(rgba(22,22,22,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(22,22,22,0.04)_1px,transparent_1px)] [background-size:72px_72px]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[linear-gradient(180deg,rgba(255,255,255,0.86),rgba(255,255,255,0))]" />

      <div className="relative z-10 mx-auto grid min-h-[100svh] w-full max-w-[78rem] items-center gap-18 px-6 pb-24 pt-32 md:px-10 md:pb-28 md:pt-40 lg:grid-cols-[minmax(0,1.08fr)_minmax(24rem,0.92fr)] lg:gap-20">
        <div className="max-w-[45rem]">
          <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#7E3F35]/76">
            Sharper commercial fronts
          </p>

          <h1 className="mt-7 max-w-[10.5ch] text-[3.2rem] font-semibold leading-[0.94] tracking-[-0.07em] text-[#161616] md:text-[4.9rem] lg:text-[6.2rem]">
            Sharper websites.
            <br />
            Clearer enquiries.
            <br />
            Better lead handling.
          </h1>

          <p className="mt-8 max-w-[41rem] text-lg leading-8 text-[#2A2A2A]/76 md:text-xl md:leading-9">
            R3WORKED reworks underperforming websites into sharper commercial
            fronts — with clearer enquiry paths and better lead handling behind
            the scenes.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="#final-cta"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#D96B4F]/24 bg-[linear-gradient(135deg,rgba(255,255,255,0.86)_0%,rgba(245,236,230,0.94)_100%)] px-6 py-3 text-sm font-semibold tracking-[0.04em] text-[#161616] shadow-[inset_0_1px_0_rgba(255,255,255,0.78),0_12px_28px_rgba(90,60,42,0.09)] transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-0.5 hover:border-[#D96B4F]/34 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.82),0_16px_32px_rgba(90,60,42,0.12)]"
            >
              Get a homepage review
            </Link>

            <Link
              href="#before-after-showcase"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#161616]/10 bg-white/55 px-6 py-3 text-sm font-semibold tracking-[0.04em] text-[#161616] shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_10px_24px_rgba(90,60,42,0.05)] transition-[transform,box-shadow,border-color,background-color] duration-300 hover:-translate-y-0.5 hover:border-[#161616]/16 hover:bg-white/72 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.68),0_14px_28px_rgba(90,60,42,0.08)]"
            >
              See a rework example
            </Link>
          </div>

          <p className="mt-7 max-w-[42rem] text-[11px] uppercase tracking-[0.18em] text-[#2A2A2A]/44">
            Initially focused on UK roofers. Built for service businesses with
            more value than their current website suggests.
          </p>
        </div>

        <HeroVisualFlow />
      </div>
    </section>
  );
}
