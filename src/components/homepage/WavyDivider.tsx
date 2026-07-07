"use client";

import { motion } from "framer-motion";

const WIDTH = 1440;
const HEIGHT = 16;

/* Same triple-sine pattern as the hero's wave field, sampled once at
   module scope so every divider shares an identical, subtle line. */
function buildPath() {
  const points: string[] = [];
  for (let x = 0; x <= WIDTH; x += 8) {
    const offset =
      Math.sin(x * 0.0038 + 0.71) * 3.2 +
      Math.sin(x * 0.0091 + 1.37) * 1.9 +
      Math.sin(x * 0.0142 + 2.9) * 1.1;
    points.push(`${x},${(HEIGHT / 2 + offset).toFixed(2)}`);
  }
  return `M ${points.join(" L ")}`;
}

const PATH = buildPath();

/**
 * A full-bleed, subtly wavy seam line echoing the hero animation's wave
 * field. Absolutely positioned on the section's edge so the sections'
 * own paddings keep it evenly spaced from the content on both sides.
 * Parent must be positioned (`.light-section-seam` already is).
 */
export function WavyDivider({ edge = "top" }: { edge?: "top" | "bottom" }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-x-0 ${
        edge === "top" ? "top-0" : "bottom-0"
      }`}
    >
      <motion.svg
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5 }}
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        preserveAspectRatio="none"
        className="block h-4 w-full"
      >
        <path
          d={PATH}
          stroke="#161616"
          strokeWidth="1.2"
          strokeOpacity="0.12"
          fill="none"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
      </motion.svg>
    </div>
  );
}
