import Link from "next/link";
import { Footer } from "@/components/ui/Footer";
import { Navbar } from "@/components/ui/Navbar";
import { SectionHeading } from "@/components/typography/SectionHeading";
import { ClinicMomentumSurface } from "@/components/medical/ClinicMomentumSurface";
import { RightSlideOverlayPair } from "@/components/medical/RightSlideOverlayPair";
import { MedicalConversationFeature } from "@/components/medical/MedicalConversationFeature";
import { MedicalCapacityFeature } from "@/components/medical/MedicalCapacityFeature";

const TRUST_SCOPE = [
  "Book, reschedule, and cancel appointments",
  "Answer policy FAQs: forms, arrival time, late policy, medical aid notes",
  "Escalate clinical questions directly to reception immediately",
];

const CONNECT_FLOW = [
  {
    title: "Google Calendar First",
    body: "Fastest rollout path for solo doctors, dentists, and multi-provider practices. Lola reads and writes availability directly to your calendar layer.",
  },
  {
    title: "Receptionist Confirm Mode",
    body: "Optional confirmation queue: Lola proposes and captures changes, then your receptionist approves before final patient confirmation.",
  },
  {
    title: "Audit Trail by Default",
    body: "Every booking, cancellation, escalation, and note is logged with timestamp, caller context, and outcome.",
  },
];

const CLINIC_CLARITY = [
  {
    badge: "Clinic clarity",
    title: "Clean reception desk flow",
    body: "Front desk handles people in front of them while Lola handles the queue on the phone.",
  },
  {
    badge: "Clinic clarity",
    title: "Diary gaps recovered faster",
    body: "When cancellations happen, Lola can immediately rebook into newly opened slots.",
  },
  {
    badge: "Clinic clarity",
    title: "After-hours capture",
    body: "Booking intent is not lost when the practice is closed.",
  },
];

const METRIC_CARDS = [
  { label: "Call answer rate", value: "97%", detail: "Across open + after-hours windows" },
  { label: "Avg time to answer", value: "4.8s", detail: "No hold queue for scheduling intents" },
  { label: "Recovered slots", value: "38", detail: "Cancelled slots rebooked this month" },
  { label: "After-hours bookings", value: "26", detail: "Captured outside reception hours" },
  { label: "Escalation rate", value: "11%", detail: "Clinical questions routed to reception" },
  { label: "Reception minutes saved", value: "19h", detail: "Proxy from calls handled by Lola" },
];

type StorySectionProps = {
  title: string;
  body: string;
  bullets: string[];
  cardOnLeft?: boolean;
  children: React.ReactNode;
};

function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate flex min-h-[100svh] w-full items-end overflow-hidden bg-ink md:min-h-screen"
    >
      <div className="absolute inset-0 z-0 bg-[linear-gradient(145deg,#101725_8%,#17223a_42%,#0d1628_100%)]" />
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(45%_40%_at_72%_66%,rgba(94,223,201,0.24)_0%,rgba(94,223,201,0.06)_56%,transparent_80%)]" />
      <div className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-b from-[#0b1120]/70 via-[#132038]/56 to-[#101b2a]/78" />

      <div className="relative z-10 mx-auto flex w-[95%] max-w-7xl px-6 pb-16 pt-28 md:pb-24">
        <div className="max-w-4xl text-peach">
          <h1 className="flex flex-col gap-2">
            <span className="font-outfit text-4xl font-bold uppercase tracking-[0.18em] text-white md:text-6xl lg:text-7xl">
              CLINIC CALM
            </span>
            <span className="type-display text-[#8fe8d8]">Starts with Lola</span>
          </h1>
          <p className="type-lead mt-6 max-w-[58ch] text-peach/90">
            For doctors and dentists, Lola handles scheduling conversations end
            to end, then routes clinical questions to reception without crossing
            triage boundaries.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4 md:mt-10 lg:mt-14">
            <a
              href="#connect"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#69d9c3]/55 bg-ink px-7 py-3 text-sm font-semibold tracking-[0.08em] text-peach shadow-[0_0_0_1px_rgba(94,223,201,0.22),0_10px_26px_rgba(64,194,172,0.2)] transition-transform duration-300 hover:-translate-y-0.5"
            >
              See Clinic Flow
            </a>
            <a
              href="#pricing"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#fff5f0]/45 bg-[rgba(255,245,240,0.12)] px-7 py-3 text-sm font-medium tracking-[0.04em] text-peach"
            >
              View Medical Plans
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ConnectSection() {
  return (
    <RightSlideOverlayPair
      heading="Built for real clinic operations."
      subheading="Lola plugs into your existing scheduling reality first, then operations slide in as demand takes over."
      setupCards={CONNECT_FLOW}
      operationCards={CLINIC_CLARITY}
    />
  );
}

function StorySection({
  title,
  body,
  bullets,
  cardOnLeft = true,
  children,
}: StorySectionProps) {
  return (
    <section className="w-full bg-medical-soft-blue px-6 py-20 md:px-16 md:py-24">
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
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-mint" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
          <Link
            href="#hear-lola"
            className="type-eyebrow text-mint transition-opacity hover:opacity-80"
          >
            HEAR LOLA →
          </Link>
        </div>
      </div>
    </section>
  );
}

function HearLolaSection() {
  return (
    <section id="hear-lola" className="section-offset w-full bg-ink px-6 py-20 md:px-16 md:py-24">
      <div className="mx-auto w-full max-w-5xl rounded-[2rem] border border-charcoal bg-charcoal/30 p-8 shadow-[0_24px_64px_rgba(0,0,0,0.35)] backdrop-blur-sm md:p-10">
        <SectionHeading
          className="mb-8"
          title="Hear Lola on a real clinic call"
          subtitle="Appointment request, policy clarification, then a safe escalation to reception."
          titleClassName="type-h2-serif text-peach"
          subtitleClassName="text-peach/80"
        />
        <div className="rounded-2xl border border-peach/15 bg-ink/60 p-5">
          <div className="mb-3 flex items-center justify-between">
            <p className="type-body max-w-none text-peach">Clinic Scheduling Demo</p>
            <p className="type-eyebrow text-peach/60">00:30</p>
          </div>
          <audio controls className="w-full" src="/audio/lola-demo-placeholder.mp3">
            Your browser does not support the audio element.
          </audio>
        </div>
      </div>
    </section>
  );
}

function PricingScaffold() {
  return (
    <>
    <section id="metrics" className="section-offset w-full bg-ink px-6 py-20 md:px-16 md:py-24">
      <div className="mx-auto w-full max-w-7xl">
        <SectionHeading
          eyebrow="CLINIC CONTROL ROOM"
          title="Metrics teams can actually operate from."
          subtitle="Measure scheduling throughput, patient access, and escalation load in one place."
          titleClassName="type-h2 text-peach"
          subtitleClassName="text-peach/80"
        />
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {METRIC_CARDS.map((metric) => (
            <article
              key={metric.label}
              className="rounded-[1.5rem] border border-white/12 bg-gradient-to-br from-white/[0.1] via-white/[0.05] to-white/[0.02] p-5 shadow-[0_20px_44px_rgba(0,0,0,0.36)]"
            >
              <p className="font-jetbrains text-[10px] uppercase tracking-[0.14em] text-peach/65">
                {metric.label}
              </p>
              <p className="mt-2 font-outfit text-4xl font-semibold tracking-tight text-[#98ecdc]">
                {metric.value}
              </p>
              <p className="mt-2 text-sm text-peach/75">{metric.detail}</p>
            </article>
          ))}
        </div>
        <div className="mt-6 rounded-2xl border border-[#77d8c6]/35 bg-[#77d8c6]/12 p-4 text-sm text-peach">
          Booking change counters tracked: created, rescheduled, cancelled, with
          linked outcome logs and escalation tags.
        </div>
      </div>
    </section>

    <section id="pricing" className="section-offset w-full bg-ink px-6 py-20 md:px-16 md:py-24">
      <div className="mx-auto w-full max-w-7xl rounded-[2rem] border border-white/12 bg-white/[0.04] p-8 shadow-[0_28px_64px_rgba(0,0,0,0.4)] md:p-10">
        <SectionHeading
          eyebrow="PRICING"
          title="Clinic plans that scale with complexity."
          subtitle="From one provider to multi-provider routing with strict escalation guardrails."
          titleClassName="type-h2 text-peach"
          subtitleClassName="text-peach/80"
        />
        <div className="mt-7 grid grid-cols-1 gap-4 md:grid-cols-3">
          {[
            {
              name: "Solo Practice",
              tagline: "For a single doctor or dentist",
              items: ["Google Calendar scheduling", "Book/reschedule/cancel", "Core policy FAQs"],
            },
            {
              name: "Practice + Routing",
              tagline: "For busier clinics with reception workflows",
              items: ["Clinical escalation routing", "Receptionist confirm mode", "Booking change audit trail"],
            },
            {
              name: "Multi-Provider",
              tagline: "For multi-provider diaries and service lines",
              items: ["Cross-provider slot logic", "Advanced intent routing", "Control room metrics + exports"],
            },
          ].map((plan) => (
            <article key={plan.name} className="rounded-2xl border border-white/12 bg-ink/50 p-5">
              <h3 className="font-outfit text-xl text-peach">{plan.name}</h3>
              <p className="mt-2 text-sm text-[#9be8d9]">{plan.tagline}</p>
              <ul className="mt-4 space-y-2 text-peach/78">
                {plan.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-[#6edbc9]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/book"
                className="mt-4 inline-flex rounded-full bg-[#2cbca3] px-4 py-2 text-sm font-semibold text-ink"
              >
                Book a demo
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}

export default function MedicalPage() {
  return (
    <main
      data-vertical="medical"
      className="flex min-h-screen w-full scroll-smooth flex-col bg-ink"
    >
      <Navbar />
      <Hero />
      <ClinicMomentumSurface trustScope={TRUST_SCOPE} connectSection={<ConnectSection />}>
        <StorySection
          title="Natural Conversation"
          body="Patients speak normally. Lola understands intent and handles the booking in one clean flow."
          bullets={[
            "New or existing patients - handled appropriately",
            "Book, reschedule, or cancel appointments",
            "Reason for visit captured (so the practice is prepared)",
            "Waitlist + callback when slots open up",
            "FAQs handled (fees, directions, documents, prep instructions)",
          ]}
          cardOnLeft={false}
        >
          <MedicalConversationFeature />
        </StorySection>
        <StorySection
          title="Schedule Maximizer"
          body="Turn cancellations into filled slots - fewer gaps, fewer clashes, smoother days."
          bullets={[
            "Live availability via booking system integration",
            "Waitlist auto-fill when cancellations happen",
            "Fewer clashes / double bookings",
            "Cleaner day flow for reception and clinicians",
          ]}
          cardOnLeft={true}
        >
          <MedicalCapacityFeature />
        </StorySection>
      </ClinicMomentumSurface>
      <HearLolaSection />
      <PricingScaffold />
      <Footer />
    </main>
  );
}
