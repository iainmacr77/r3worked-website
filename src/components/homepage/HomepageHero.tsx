"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

/* ─── Floating intent fragments — sparse, editorial, not diagrammatic ─── */
const INTENT_FRAGMENTS = [
  { text: "Book dinner for four", accent: "coral" },
  { text: "Move my appointment to Friday", accent: "mint" },
  { text: "Table at 8?", accent: "coral" },
  { text: "Any openings this week?", accent: "mint" },
  { text: "Find me a good salon nearby", accent: "blue" },
  { text: "Cancel tomorrow morning", accent: "mint" },
];

function FloatingFragments() {
  const [visibleSet, setVisibleSet] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleSet((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const accentMap: Record<string, string> = {
    coral: "border-coral/25 text-charcoal/50",
    mint: "border-[#34D399]/25 text-charcoal/50",
    blue: "border-[#1081F2]/25 text-charcoal/50",
  };

  return (
    <div className="mx-auto mt-20 flex max-w-3xl flex-wrap items-center justify-center gap-3 md:mt-24">
      {INTENT_FRAGMENTS.map((frag, i) => {
        const groupIndex = Math.floor(i / 2);
        const isVisible = groupIndex === visibleSet;
        return (
          <span
            key={frag.text}
            className={`rounded-full border px-5 py-2.5 font-outfit text-[13px] tracking-wide transition-all duration-[1200ms] ease-out ${
              accentMap[frag.accent]
            } ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-2"
            }`}
          >
            &ldquo;{frag.text}&rdquo;
          </span>
        );
      })}
    </div>
  );
}

/* ─── Subtle routing traces — thin horizontal lines implying flow ─── */
function RoutingTraces() {
  return (
    <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-48 overflow-hidden opacity-[0.07]">
      {[20, 35, 55, 70, 85].map((top) => (
        <div
          key={top}
          className="absolute h-px w-full"
          style={{
            top: `${top}%`,
            background: `linear-gradient(90deg, transparent 0%, rgba(16,129,242,0.5) ${15 + top * 0.3}%, rgba(255,107,107,0.3) 50%, rgba(52,211,153,0.4) ${70 + top * 0.2}%, transparent 100%)`,
          }}
        />
      ))}
    </div>
  );
}

/* ─── HERO ─── */
export function HomepageHero() {
  return (
    <section
      id="hero"
      className="relative isolate flex w-full min-h-[100svh] flex-col items-center justify-center overflow-hidden bg-[#FAFAF8] md:min-h-screen"
    >
      {/* Very subtle warm tint */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(255,245,240,0.5)_0%,transparent_70%)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex w-[95%] max-w-5xl flex-col items-center px-6 pt-32 pb-16 text-center md:pt-40 md:pb-24">
        {/* Eyebrow */}
        <p className="font-jetbrains text-[10px] font-semibold uppercase tracking-[0.25em] text-charcoal/40">
          The Voice Operating Layer
        </p>

        {/* Headline — editorial scale */}
        <h1 className="mt-8 md:mt-10">
          <span className="block font-outfit text-5xl font-bold tracking-[-0.03em] text-ink md:text-7xl lg:text-8xl">
            One voice layer
          </span>
          <span className="mt-1 block type-display text-ink/80 md:mt-2">
            for the real world.
          </span>
        </h1>

        {/* Subcopy */}
        <p className="type-lead mx-auto mt-8 max-w-[50ch] text-charcoal/65 md:mt-10">
          Lola answers naturally, captures intent, and moves bookings, questions, and service requests into the right business flow — starting with restaurants and clinics.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 md:mt-12">
          <Link
            href="/restaurants"
            className="shell-glass-btn shell-glass-btn--coral group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-semibold tracking-wide text-ink"
          >
            <span className="h-2 w-2 rounded-full bg-coral/60 transition-colors group-hover:bg-coral" />
            Explore Restaurants
          </Link>
          <Link
            href="/medical"
            className="shell-glass-btn shell-glass-btn--mint group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-semibold tracking-wide text-ink"
          >
            <span className="h-2 w-2 rounded-full bg-[#34D399]/60 transition-colors group-hover:bg-[#34D399]" />
            Explore Medical
          </Link>
        </div>

        {/* Tertiary */}
        <p className="mt-6 font-jetbrains text-[10px] uppercase tracking-[0.18em] text-charcoal/25">
          More verticals ahead. Same Lola.
        </p>

        {/* Floating intent fragments */}
        <FloatingFragments />
      </div>

      {/* Subtle routing traces at bottom of hero */}
      <RoutingTraces />
    </section>
  );
}
