"use client";

import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

const PAIN_CHIPS_LANE_1 = [
  "Missed calls become lost bookings.",
  "Cancellations leave dead air.",
  "Reschedules consume the day.",
  "After-hours demand disappears.",
];

const PAIN_CHIPS_LANE_2 = [
  "Reception becomes a bottleneck.",
  "Same questions. All day.",
  "Patients churn when access feels hard.",
  "Diary gaps hide in plain sight.",
];

const chipBaseClass =
  "group/chip relative shrink-0 overflow-hidden rounded-full border border-white/60 bg-white/40 px-6 py-3 text-[15px] font-medium tracking-[0.01em] text-[#22453f] shadow-[0_8px_32px_rgba(21,110,96,0.08)] backdrop-blur-xl transition-[transform,border-color,background-color,box-shadow] duration-500 hover:scale-[1.03] hover:border-white/90 hover:bg-white/60 hover:shadow-[0_12px_40px_rgba(21,110,96,0.12)]";

export function PainTicker({ className }: { className?: string }) {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return (
      <div
        className={cn("flex flex-wrap justify-center gap-3 py-4", className)}
        role="list"
        aria-label="Common reception pain points"
      >
        {[...PAIN_CHIPS_LANE_1, ...PAIN_CHIPS_LANE_2].map((text) => (
          <span key={text} role="listitem" className={cn(chipBaseClass, "inline-flex")}>
            {text}
          </span>
        ))}
      </div>
    );
  }

  return (
    <div
      className={cn(
        "group/ticker relative w-full overflow-hidden py-6",
        "[mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]",
        className,
      )}
      aria-hidden
    >
      <div className="flex flex-col gap-5">
        {/* Lane 1: Right to Left */}
        <div className="flex w-max items-center gap-4 will-change-transform animate-[pain-ticker-rtl_45s_linear_infinite] group-hover/ticker:[animation-play-state:paused]">
          {[...PAIN_CHIPS_LANE_1, ...PAIN_CHIPS_LANE_1, ...PAIN_CHIPS_LANE_1].map((text, i) => (
            <div key={`l1-${i}`} className={chipBaseClass}>
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-1000 group-hover/chip:translate-x-full" />
              <span className="relative z-10">{text}</span>
            </div>
          ))}
        </div>

        {/* Lane 2: Left to Right */}
        <div className="flex w-max items-center gap-4 pl-12 will-change-transform animate-[pain-ticker-ltr_50s_linear_infinite] group-hover/ticker:[animation-play-state:paused]">
          {[...PAIN_CHIPS_LANE_2, ...PAIN_CHIPS_LANE_2, ...PAIN_CHIPS_LANE_2].map((text, i) => (
            <div key={`l2-${i}`} className={chipBaseClass}>
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-1000 group-hover/chip:translate-x-full" />
              <span className="relative z-10">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
