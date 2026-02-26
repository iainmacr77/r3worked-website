import { Navbar } from "@/components/ui/Navbar";
import { Hero } from "@/components/ui/Hero";
import {
  TranscriptTypewriter,
  ReservationShuffler,
  ProtocolScheduler,
} from "@/components/ui/FeaturesDashboard";
import { Philosophy } from "@/components/ui/Philosophy";
import { TheFramework } from "@/components/ui/TheFramework";
import { Pricing } from "@/components/ui/Pricing";
import { Footer } from "@/components/ui/Footer";
import { WhyLolaCarousel } from "@/components/ui/WhyLolaCarousel";
import { NarrativeBreaker } from "@/components/ui/NarrativeBreaker";
import Link from "next/link";

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
        <div className={cardOnLeft ? "order-2" : "order-1"}>
          <h2 className="mb-4 font-outfit text-4xl font-semibold text-ink md:text-5xl">
            {title}
          </h2>
          <p className="mb-6 max-w-[40ch] font-outfit text-lg text-charcoal md:text-xl">
            {body}
          </p>
          <ul className="mb-6 space-y-3 font-outfit text-charcoal">
            {bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-3 text-base md:text-lg">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-coral" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
          <Link
            href="#hear-lola"
            className="font-jetbrains text-sm uppercase tracking-widest text-coral transition-opacity hover:opacity-80"
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
    <section id="features" className="w-full bg-peach px-6 py-20 md:px-16 md:py-24">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2 className="mb-5 max-w-[14ch] font-playfair text-4xl italic text-ink md:text-6xl">
            The phone never stops. Service does.
          </h2>
          <p className="mb-6 max-w-[42ch] font-outfit text-lg text-charcoal md:text-xl">
            Every ring pulls staff off the floor. Every missed call is revenue — and you don’t even know why they called.
          </p>
          <div className="space-y-2 font-outfit text-charcoal">
            <p>Argh — the phone is ringing and we’re in the weeds.</p>
            <p>Argh — my floor manager is spelling names again.</p>
            <p>Argh — we missed calls during peak service.</p>
          </div>
        </div>

        <div className="min-w-0">
          <WhyLolaCarousel />
        </div>
      </div>
    </section>
  );
}

function HowLolaWorksSection() {
  const steps = [
    {
      phase: "Phase 01",
      title: "Connect",
      body: "Forward your line and set routing rules.",
    },
    {
      phase: "Phase 02",
      title: "Learn",
      body: "Upload menus and policies. Lola learns fast.",
    },
    {
      phase: "Phase 03",
      title: "Operate",
      body: "24/7 triage, bookings, and escalations.",
    },
  ];

  return (
    <section className="w-full bg-peach px-6 py-20 md:px-16 md:py-24">
      <div className="mx-auto w-full max-w-7xl">
        <h2 className="mb-10 font-playfair text-4xl italic text-ink md:text-5xl">
          How Lola Works
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <article
              key={step.phase}
              className="rounded-[2rem] border border-charcoal/10 bg-white/75 p-7 shadow-[0_18px_48px_rgba(30,30,46,0.08)]"
            >
              <p className="mb-4 font-jetbrains text-xs uppercase tracking-widest text-coral">
                {step.phase}
              </p>
              <h3 className="mb-3 font-outfit text-3xl font-semibold text-ink">
                {step.title}
              </h3>
              <p className="font-outfit text-charcoal">{step.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function HearLolaSection({ audioSrc }: { audioSrc: string }) {
  return (
    <section id="hear-lola" className="w-full bg-ink px-6 py-20 md:px-16 md:py-24">
      <div className="mx-auto w-full max-w-5xl rounded-[2rem] border border-charcoal bg-charcoal/30 p-8 shadow-[0_24px_64px_rgba(0,0,0,0.35)] backdrop-blur-sm md:p-10">
        <h2 className="mb-3 font-playfair text-4xl italic text-peach md:text-5xl">
          Hear Lola in action
        </h2>
        <p className="mb-8 max-w-[60ch] font-outfit text-lg text-peach/80">
          A real booking flow — reservation, kid-friendly question, dietary note — handled in under 30 seconds.
        </p>
        <div className="rounded-2xl border border-peach/15 bg-ink/60 p-5">
          <div className="mb-3 flex items-center justify-between">
            <p className="font-outfit text-base text-peach">Saturday Dinner Booking Demo</p>
            <p className="font-jetbrains text-xs uppercase tracking-widest text-peach/60">
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

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col bg-ink scroll-smooth">
      <Navbar />
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
        cardOnLeft={false}
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
      <HowLolaWorksSection />
      <HearLolaSection audioSrc="/audio/lola-demo-placeholder.mp3" />
      <Philosophy />
      <TheFramework />
      <Pricing />
      <Footer />
    </main>
  );
}
