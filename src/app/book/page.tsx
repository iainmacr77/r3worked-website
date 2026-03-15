import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HomepageFooter } from "@/components/homepage/HomepageFooter";
import { HomepageNavbar } from "@/components/homepage/HomepageNavbar";
import { createSiteMetadata } from "@/lib/site-metadata";

export const metadata: Metadata = createSiteMetadata({
  title: "Book a Demo | Hey Lola",
  description:
    "Book a Hey Lola demo to see how the voice layer works across restaurants and medical practices.",
});

const DEMO_TRACKS = [
  {
    title: "Restaurants",
    description:
      "See how Lola handles bookings, changes, policy questions, and peak-hour phone pressure.",
    href: "/restaurants",
  },
  {
    title: "Medical",
    description:
      "See how Lola supports booking flow for medical practices while keeping clinical matters with staff.",
    href: "/medical",
  },
];

export default function BookDemoPage() {
  return (
    <main className="flex min-h-screen w-full flex-col bg-[#FAFAF8]">
      <HomepageNavbar />

      <section className="w-full px-6 pb-20 pt-32 md:px-16 md:pb-24 md:pt-40">
        <div className="mx-auto max-w-5xl">
          <p className="font-jetbrains text-[10px] font-semibold uppercase tracking-[0.22em] text-charcoal/42">
            Book Demo
          </p>
          <h1 className="type-h2-serif mt-4 max-w-[12ch] text-ink">
            See Lola against a real operating flow.
          </h1>
          <p className="type-lead mt-6 max-w-[44ch] text-charcoal/60">
            Choose the live environment closest to your team. We will use that
            operating context as the starting point.
          </p>

          <div className="mt-12 grid gap-px overflow-hidden rounded-[2rem] border border-ink/[0.06] bg-ink/[0.04] md:grid-cols-2">
            {DEMO_TRACKS.map((track) => (
              <Link
                key={track.title}
                href={track.href}
                className="group bg-white p-8 transition-colors duration-300 hover:bg-[#F7F5F0] md:p-10"
              >
                <p className="font-jetbrains text-[10px] uppercase tracking-[0.18em] text-charcoal/35">
                  Live today
                </p>
                <h2 className="mt-4 text-[2rem] font-semibold tracking-[-0.03em] text-ink">
                  {track.title}
                </h2>
                <p className="mt-3 max-w-[30ch] text-sm leading-relaxed text-charcoal/58">
                  {track.description}
                </p>
                <p className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-ink">
                  Explore {track.title}
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <HomepageFooter />
    </main>
  );
}
