import Link from "next/link";
import { ArrowRight } from "lucide-react";

const NEWS_ITEMS = [
  {
    category: "Product",
    date: "March 2026",
    title: "Introducing Lola Medical: voice scheduling built for clinics",
    excerpt:
      "The same engine that handles restaurant bookings now manages appointments, reschedules, and clinical escalation flows for medical practices.",
    href: "/news",
  },
  {
    category: "Operations",
    date: "February 2026",
    title: "How after-hours capture recovers demand you never see",
    excerpt:
      "Most businesses lose booking intent outside office hours. We measured what Lola catches — and how much of it converts.",
    href: "/news",
  },
  {
    category: "Platform",
    date: "January 2026",
    title: "The voice layer thesis: why we started with restaurants",
    excerpt:
      "Before Lola was a platform, it was a conviction: that high-volume, high-stakes voice demand deserved a better operating layer.",
    href: "/news",
  },
];

export function LatestNews() {
  return (
    <section className="w-full bg-white px-6 py-24 md:px-16 md:py-32">
      <div className="mx-auto w-full max-w-7xl">
        {/* Section heading */}
        <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="font-jetbrains text-[10px] font-semibold uppercase tracking-[0.22em] text-charcoal/35">
              Latest News
            </p>
            <h2 className="type-h2 mt-3 text-ink">From the team.</h2>
          </div>
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-sm font-medium text-charcoal/50 transition-colors hover:text-ink"
          >
            View all news
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* News cards */}
        <div className="grid gap-px overflow-hidden rounded-[2rem] border border-ink/[0.06] bg-ink/[0.04] md:grid-cols-3">
          {NEWS_ITEMS.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group bg-white p-8 transition-colors duration-300 hover:bg-[#FAFAF8] md:p-9"
            >
              {/* Category + date */}
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-ink/[0.04] px-3 py-1 font-jetbrains text-[9px] font-bold uppercase tracking-[0.14em] text-charcoal/50">
                  {item.category}
                </span>
                <span className="font-jetbrains text-[10px] tracking-[0.1em] text-charcoal/25">
                  {item.date}
                </span>
              </div>

              {/* Title */}
              <h3 className="mt-5 text-lg font-semibold leading-snug tracking-tight text-ink">
                {item.title}
              </h3>

              {/* Excerpt */}
              <p className="mt-3 text-sm leading-relaxed text-charcoal/50">
                {item.excerpt}
              </p>

              {/* CTA */}
              <p className="mt-6 flex items-center gap-2 text-sm font-medium text-charcoal/40 transition-colors group-hover:text-ink">
                Read article
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
