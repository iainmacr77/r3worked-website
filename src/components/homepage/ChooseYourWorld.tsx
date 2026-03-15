import Link from "next/link";
import { ArrowRight } from "lucide-react";

const VERTICALS = [
  {
    name: "Restaurants",
    href: "/restaurants",
    eyebrow: "For Restaurants",
    headline: "Every call answered. Every booking captured.",
    description:
      "Lola takes reservations, handles changes, answers policy questions, and protects service — so your team stays on the floor.",
    points: [
      "Capture bookings by voice, naturally",
      "Handle changes and cancellations",
      "Protect staff time during service",
      "Recover demand after hours",
    ],
    accent: {
      cardClass: "shell-glass-card shell-glass-card--coral",
      dot: "bg-coral",
      eyebrow: "text-coral/70",
      ctaClass: "shell-glass-btn shell-glass-btn--coral",
      glow: "bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(255,107,107,0.06),transparent_70%)]",
    },
  },
  {
    name: "Medical",
    href: "/medical",
    eyebrow: "For Medical",
    headline: "Routine calls handled. Clinical line held.",
    description:
      "Lola manages bookings, reschedules, and non-clinical FAQs — while routing anything clinical safely back to reception.",
    points: [
      "Manage bookings and reschedules",
      "Reduce reception pressure",
      "Route clinical exceptions safely",
      "Improve access and after-hours capture",
    ],
    accent: {
      cardClass: "shell-glass-card shell-glass-card--mint",
      dot: "bg-[#34D399]",
      eyebrow: "text-[#34D399]/70",
      ctaClass: "shell-glass-btn shell-glass-btn--mint",
      glow: "bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(52,211,153,0.06),transparent_70%)]",
    },
  },
];

export function ChooseYourWorld() {
  return (
    <section className="w-full bg-[#FAFAF8] px-6 py-24 md:px-16 md:py-32">
      <div className="mx-auto w-full max-w-7xl">
        {/* Section heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="font-jetbrains text-[10px] font-semibold uppercase tracking-[0.22em] text-charcoal/35">
            Choose Your World
          </p>
          <h2 className="type-h2-serif mt-4 text-ink">
            Two industries. One voice layer.
          </h2>
        </div>

        {/* Vertical cards */}
        <div className="grid gap-6 lg:grid-cols-2">
          {VERTICALS.map((v) => (
            <Link
              key={v.name}
              href={v.href}
              className={`group relative overflow-hidden rounded-[2rem] ${v.accent.cardClass} p-8 md:p-10`}
            >
              {/* Subtle accent glow at top */}
              <div
                className={`pointer-events-none absolute inset-0 ${v.accent.glow} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
              />

              <div className="relative z-10">
                <p
                  className={`font-jetbrains text-[10px] font-semibold uppercase tracking-[0.18em] ${v.accent.eyebrow}`}
                >
                  {v.eyebrow}
                </p>
                <h3 className="mt-5 max-w-[18ch] text-3xl font-semibold tracking-tight text-ink md:text-4xl">
                  {v.headline}
                </h3>
                <p className="mt-4 max-w-[42ch] text-sm leading-relaxed text-charcoal/60">
                  {v.description}
                </p>

                <ul className="mt-8 space-y-3">
                  {v.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 text-charcoal/70"
                    >
                      <span
                        className={`mt-1.5 inline-block h-1.5 w-1.5 rounded-full ${v.accent.dot}`}
                      />
                      <span className="text-sm">{point}</span>
                    </li>
                  ))}
                </ul>

                <div
                  className={`mt-10 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-ink ${v.accent.ctaClass}`}
                >
                  Explore {v.name}
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
