import type { Metadata } from "next";
import { SiteNavbar } from "@/components/site/SiteNavbar";
import { Hero } from "@/components/ui/Hero";
import {
  TranscriptTypewriter,
  ReservationShuffler,
  ProtocolScheduler,
} from "@/components/ui/FeaturesDashboard";
import { Philosophy } from "@/components/ui/Philosophy";
import { TheFramework } from "@/components/ui/TheFramework";
import { PricingControlRoom } from "@/components/sections/PricingControlRoom";
import { SiteFooter } from "@/components/site/SiteFooter";
import { WhyLolaCarousel } from "@/components/ui/WhyLolaCarousel";
import { NarrativeBreaker } from "@/components/ui/NarrativeBreaker";
import { SectionHeading } from "@/components/typography/SectionHeading";
import Link from "next/link";
import { createSiteMetadata } from "@/lib/site-metadata";

export const metadata: Metadata = createSiteMetadata({
  title: "Hey Lola Restaurants | Voice Operations for Restaurants",
  description:
    "Lola handles restaurant bookings, changes, and policy questions by voice so service teams stay on the floor and demand gets captured cleanly.",
});

type StorySectionProps = {
  title: string;
  body: string;
  bullets: string[];
  cardOnLeft?: boolean;
  children: React.ReactNode;
};

function StorySection({
  title,
  body,
  bullets,
  cardOnLeft = true,
  children,
}: StorySectionProps) {
  return (
    <section className="w-full bg-peach px-6 py-20 md:px-16 md:py-24">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className={cardOnLeft ? "order-1" : "order-2"}>
          <div className="mx-auto h-[440px] w-full max-w-[560px] min-w-0 sm:h-[500px] lg:h-[560px] [&>*]:h-full [&>*]:min-h-0 [&>*]:w-full [&>*]:flex-shrink-0">
            {children}
          </div>
        </div>
        <div className={`${cardOnLeft ? "order-2" : "order-1"} section-header`}>
          <h2 className="type-h2 text-ink">
            {title}
          </h2>
          <p className="type-lead text-charcoal">
            {body}
          </p>
          <ul className="type-body max-w-[68ch] space-y-3 text-charcoal">
            {bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-3">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-coral" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
          <Link
            href="#hear-lola"
            className="type-eyebrow text-coral transition-opacity hover:opacity-80"
          >
            Hear Lola →
          </Link>
        </div>
      </div>
    </section>
  );
}

function WhyLolaSection() {
  return (
    <section id="features" className="section-offset w-full bg-peach px-6 py-20 md:px-16 md:py-24">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mx-auto max-w-4xl">
          <SectionHeading
            title="The phone never stops. Service does."
            subtitle="Every ring pulls staff off the floor. Every missed call is revenue — and you don't even know why they called."
            className="justify-items-center text-center"
            titleClassName="type-h2-serif max-w-[16ch] text-center"
            subtitleClassName="text-center"
          />
        </div>
        <div className="relative left-1/2 mt-10 w-screen min-w-0 -translate-x-1/2 px-6 md:px-16">
          <div className="w-full">
            <WhyLolaCarousel />
          </div>
        </div>
      </div>
    </section>
  );
}

function HearLolaSection({ audioSrc }: { audioSrc: string }) {
  return (
    <section id="hear-lola" className="section-offset w-full bg-ink px-6 py-20 md:px-16 md:py-24">
      <div className="mx-auto w-full max-w-5xl rounded-[2rem] border border-charcoal bg-charcoal/30 p-8 shadow-[0_24px_64px_rgba(0,0,0,0.35)] backdrop-blur-sm md:p-10">
        <SectionHeading
          className="mb-8"
          title="Hear Lola in action"
          subtitle="A real booking flow — reservation, kid-friendly question, dietary note — handled in under 30 seconds."
          titleClassName="type-h2-serif text-peach"
          subtitleClassName="text-peach/80"
        />
        <div className="rounded-2xl border border-peach/15 bg-ink/60 p-5">
          <div className="mb-3 flex items-center justify-between">
            <p className="type-body max-w-none text-peach">Saturday Dinner Booking Demo</p>
            <p className="type-eyebrow text-peach/60">
              00:30
            </p>
          </div>
          <audio controls className="w-full" src={audioSrc}>
            Your browser does not support the audio element.
          </audio>
        </div>
      </div>
    </section>
  );
}

export default function RestaurantsPage() {
  return (
    <main className="flex min-h-screen w-full flex-col bg-ink scroll-smooth">
      <SiteNavbar tone="dark" />
      <Hero />
      <WhyLolaSection />
      <NarrativeBreaker />
      <StorySection
        title="Natural Conversation"
        body="Guests speak normally. Lola detects intent and handles it in one flow."
        bullets={[
          "Make, amend, or cancel reservations",
          "Running late — hold my table",
          "FAQs: corkage, parking, kids, dress code",
          "Edge cases: suppliers, complaints, manager requests",
        ]}
        cardOnLeft={false}
      >
        <TranscriptTypewriter />
      </StorySection>
      <StorySection
        title="Booking Intelligence"
        body="Every call becomes clean ops — captured, tagged, and ready for service."
        bullets={[
          "Dietary notes & preferences captured",
          "VIP guests flagged",
          "Waitlist opportunities converted",
          "Ops timeline your team can trust",
        ]}
        cardOnLeft
      >
        <ReservationShuffler />
      </StorySection>
      <StorySection
        title="Capacity Maximizer"
        body="Turns availability into revenue: smarter allocations, fewer conflicts, faster turnarounds."
        bullets={[
          "Live availability via booking system API",
          "Fewer double bookings / conflicts",
          "Better table-size matching",
          "Less host-stand chaos",
        ]}
        cardOnLeft={false}
      >
        <ProtocolScheduler />
      </StorySection>
      <HearLolaSection audioSrc="/audio/lola-demo-placeholder.mp3" />
      <Philosophy />
      <TheFramework />
      <PricingControlRoom />
      <SiteFooter />
    </main>
  );
}
