"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

const PANEL_KPIS = [
  { label: "Calls received", value: "312" },
  { label: "Answered", value: "97%" },
  { label: "Bookings", value: "32" },
  { label: "Escalated", value: "4" },
] as const;

const SIGNAL_BARS = [
  { time: "18:00", calls: 22, bookings: 9 },
  { time: "19:00", calls: 34, bookings: 12 },
  { time: "20:00", calls: 42, bookings: 16 },
  { time: "21:00", calls: 29, bookings: 11 },
  { time: "22:00", calls: 18, bookings: 7 },
] as const;

const TOP_INTENTS = [
  { label: "Bookings", value: "41%" },
  { label: "Changes", value: "23%" },
  { label: "Running late", value: "12%" },
  { label: "FAQs", value: "18%" },
  { label: "Complaints", value: "6%" },
] as const;

const SIGNAL_TILES = [
  { value: "312", label: "Calls received", detail: "Peak-hour demand, measured." },
  { value: "97%", label: "Calls answered", detail: "No voicemail. No missed revenue." },
  { value: "32", label: "Bookings created", detail: "Captured instantly, confirmed." },
  { value: "18", label: "Amendments handled", detail: "Time + party changes resolved." },
  { value: "7", label: "Running-late updates", detail: "Guests keep you informed." },
  { value: "12", label: "FAQs resolved", detail: "Staff uninterrupted." },
] as const;

const TICKER_ITEMS = [
  "VIP routed",
  "Waitlist converted",
  "Allergen logged",
  "Supplier routed",
  "Review captured",
  "Complaint escalated",
  "Booking confirmed",
] as const;

export function ControlRoomMetrics() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const revealables = Array.from(
      section.querySelectorAll<HTMLElement>("[data-control-reveal]")
    );
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reducedMotion) {
      revealables.forEach((item) => item.classList.add("control-visible"));
      return;
    }

    revealables.forEach((item, index) => {
      item.style.setProperty("--control-delay", `${Math.min(index * 70, 560)}ms`);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          revealables.forEach((item) => item.classList.add("control-visible"));
          observer.disconnect();
        });
      },
      { threshold: 0.22 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative overflow-hidden rounded-[2rem] border border-peach/12 bg-gradient-to-b from-ink via-ink to-[#141422] p-6 md:p-8 lg:p-10"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/6 to-transparent" />
      <div className="pointer-events-none absolute right-[8%] top-[18%] h-52 w-52 rounded-full bg-coral/12 blur-[80px]" />
      <div className="pointer-events-none absolute left-[10%] bottom-[26%] h-40 w-40 rounded-full bg-[#ffd6c6]/8 blur-[64px]" />

      <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
        <div
          data-control-reveal
          className="control-reveal space-y-4 lg:col-span-5 lg:space-y-5"
        >
          <p className="type-eyebrow text-peach/70">PHASE 03</p>
          <h2 className="type-h2 text-peach">The Control Room</h2>
          <p className="type-lead max-w-[34ch] text-peach/82">
            Your phone becomes a dataset. Not just answered — understood.
          </p>
          <p className="font-outfit text-xl font-semibold tracking-tight text-peach md:text-2xl">
            Every ring becomes a data point.
          </p>
          <p className="type-body max-w-[60ch] text-peach/72">
            Calls are classified into intents, resolved with next steps, and turned
            into searchable operational intelligence.
          </p>
        </div>

        <div className="relative lg:col-span-7">
          <div
            data-control-reveal
            className="control-reveal control-panel relative overflow-hidden rounded-[1.65rem] border border-white/14 bg-gradient-to-br from-white/14 via-white/7 to-white/4 p-4 shadow-[0_26px_70px_rgba(0,0,0,0.42)] backdrop-blur-xl md:p-5"
          >
            <div className="mb-4 flex items-center justify-between gap-3 border-b border-white/12 pb-3.5">
              <p className="font-jetbrains text-[11px] font-semibold uppercase tracking-[0.2em] text-peach/88">
                PERFORMANCE PANEL
              </p>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-coral/28 bg-coral/14 px-3 py-1 font-jetbrains text-[10px] font-semibold uppercase tracking-[0.14em] text-coral">
                <span className="h-1.5 w-1.5 rounded-full bg-coral" />
                LIVE
              </span>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
                {PANEL_KPIS.map((kpi) => (
                  <div
                    key={kpi.label}
                    data-control-reveal
                    className={cn(
                      "control-reveal control-kpi rounded-xl border border-white/14 bg-ink/35 px-3 py-2.5",
                      "transition-transform duration-500 ease-out"
                    )}
                  >
                    <p className="font-jetbrains text-[11px] uppercase tracking-[0.14em] text-peach/58">
                      {kpi.label}
                    </p>
                    <p className="mt-1 font-outfit text-lg font-semibold text-peach md:text-xl">
                      {kpi.value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 gap-3 md:grid-cols-12">
                <div className="rounded-2xl border border-white/12 bg-ink/35 p-3.5 md:col-span-7">
                  <p className="font-jetbrains text-[11px] uppercase tracking-[0.14em] text-peach/62">
                    Calls vs bookings (18:00–22:00)
                  </p>
                  <div className="mt-3 flex h-[124px] items-end gap-2 rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent px-2.5 pb-2.5 pt-4">
                    {SIGNAL_BARS.map((point) => (
                      <div key={point.time} className="flex min-w-0 flex-1 items-end justify-center gap-1">
                        <span
                          className="w-[6px] rounded-sm bg-peach/75"
                          style={{ height: `${point.calls}px` }}
                          aria-hidden
                        />
                        <span
                          className="w-[6px] rounded-sm bg-coral/92"
                          style={{ height: `${point.bookings * 2.1}px` }}
                          aria-hidden
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-white/12 bg-ink/35 p-3.5 md:col-span-5">
                  <p className="font-jetbrains text-[11px] uppercase tracking-[0.14em] text-peach/62">
                    Top intents
                  </p>
                  <ul className="mt-3 space-y-1.5">
                    {TOP_INTENTS.map((intent) => (
                      <li
                        key={intent.label}
                        className="flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.03] px-2.5 py-1.5 font-outfit text-sm text-peach/80"
                      >
                        <span>{intent.label}</span>
                        <span className="font-medium text-peach">{intent.value}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <span className="pointer-events-none absolute inset-0 control-scanline" />
          </div>
        </div>
      </div>

      <div className="relative mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {SIGNAL_TILES.map((tile) => (
          <article
            key={tile.label}
            data-control-reveal
            className="control-reveal rounded-2xl border border-white/12 bg-gradient-to-b from-white/8 to-white/[0.03] p-4 shadow-[0_16px_30px_rgba(0,0,0,0.24)]"
          >
            <p className="font-outfit text-3xl font-semibold leading-none tracking-tight text-peach">
              {tile.value}
            </p>
            <p className="mt-2 font-outfit text-base text-peach/88">{tile.label}</p>
            <p className="mt-1.5 font-outfit text-sm text-peach/62">{tile.detail}</p>
          </article>
        ))}
      </div>

      <div
        data-control-reveal
        className="control-reveal relative mt-8 overflow-hidden rounded-full border border-white/12 bg-white/[0.03] py-2"
      >
        <div className="control-ticker-track flex w-max items-center gap-5 px-4">
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, index) => (
            <span
              key={`${item}-${index}`}
              className="font-jetbrains text-[10px] uppercase tracking-[0.12em] text-peach/62"
            >
              {item} •
            </span>
          ))}
        </div>
      </div>

      <style jsx>{`
        .control-reveal {
          opacity: 0;
          transform: translateY(16px);
          filter: blur(6px);
          transition:
            opacity 780ms cubic-bezier(0.22, 1, 0.36, 1),
            transform 820ms cubic-bezier(0.22, 1, 0.36, 1),
            filter 820ms cubic-bezier(0.22, 1, 0.36, 1);
          transition-delay: var(--control-delay, 0ms);
          will-change: transform, opacity, filter;
        }

        .control-visible {
          opacity: 1;
          transform: translateY(0);
          filter: blur(0);
        }

        .control-kpi {
          transform: translateY(10px) scale(0.985);
        }

        .control-visible.control-kpi {
          transform: translateY(0) scale(1);
        }

        .control-scanline {
          opacity: 0;
          background: linear-gradient(
            180deg,
            transparent 40%,
            rgba(255, 255, 255, 0.1) 50%,
            transparent 60%
          );
          mix-blend-mode: screen;
          transform: translateY(-100%);
          animation: controlScanline 2.2s ease-out 640ms 1 forwards;
        }

        .control-ticker-track {
          animation: controlTicker 28s linear infinite;
        }

        @keyframes controlTicker {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        @keyframes controlScanline {
          0% {
            opacity: 0;
            transform: translateY(-100%);
          }
          20% {
            opacity: 0.33;
          }
          100% {
            opacity: 0;
            transform: translateY(145%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .control-reveal {
            opacity: 1;
            transform: none;
            filter: none;
            transition: none;
          }

          .control-ticker-track,
          .control-scanline {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}
