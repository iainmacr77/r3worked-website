import Link from "next/link";
import { Footer } from "@/components/ui/Footer";
import { Navbar } from "@/components/ui/Navbar";
import { SectionHeading } from "@/components/typography/SectionHeading";

const CLINIC_PAIN_POINTS = [
  "Peak-hour phone pileups while reception is checking in patients",
  "Reschedules and cancellations creating expensive diary gaps",
  "No-shows and late arrivals forcing same-day slot reshuffles",
  "After-hours booking intent missed when lines go unanswered",
  "Triage boundary risk when callers ask for medical advice",
  "Multi-provider complexity across doctors, dentists, and procedure types",
];

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

const METRIC_CARDS = [
  { label: "Call answer rate", value: "97%", detail: "Across open + after-hours windows" },
  { label: "Avg time to answer", value: "4.8s", detail: "No hold queue for scheduling intents" },
  { label: "Recovered slots", value: "38", detail: "Cancelled slots rebooked this month" },
  { label: "After-hours bookings", value: "26", detail: "Captured outside reception hours" },
  { label: "Escalation rate", value: "11%", detail: "Clinical questions routed to reception" },
  { label: "Reception minutes saved", value: "19h", detail: "Proxy from calls handled by Lola" },
];

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

function ClinicPainSection() {
  return (
    <section id="pain" className="section-offset w-full bg-peach px-6 py-20 md:px-16 md:py-24">
      <div className="mx-auto w-full max-w-7xl">
        <SectionHeading
          title="Clinics do not lose patients from lack of demand."
          subtitle="They lose momentum in the space between ringing phones, full reception desks, and fragmented scheduling tools."
          titleClassName="type-h2-serif max-w-[18ch]"
        />
        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {CLINIC_PAIN_POINTS.map((point) => (
            <article
              key={point}
              className="rounded-[1.6rem] border border-charcoal/12 bg-white/70 p-5 shadow-[0_16px_30px_rgba(30,30,46,0.08)]"
            >
              <p className="font-outfit text-lg leading-snug text-ink">{point}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ScopeAndTrustSection() {
  return (
    <section className="w-full bg-ink px-6 py-20 md:px-16 md:py-24">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-6 lg:grid-cols-2">
        <article className="rounded-[2rem] border border-white/12 bg-gradient-to-br from-white/[0.12] via-white/[0.06] to-white/[0.025] p-7 shadow-[0_24px_56px_rgba(0,0,0,0.45)] md:p-8">
          <p className="font-jetbrains text-[11px] uppercase tracking-[0.16em] text-peach/68">
            Scope
          </p>
          <h3 className="mt-3 font-outfit text-3xl font-semibold leading-tight text-peach">
            What Lola handles confidently
          </h3>
          <ul className="mt-5 space-y-3">
            {TRUST_SCOPE.map((item) => (
              <li key={item} className="flex items-start gap-3 text-peach/86">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-[#69d9c3]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>
        <article className="rounded-[2rem] border border-white/12 bg-gradient-to-br from-white/[0.08] via-white/[0.03] to-white/[0.015] p-7 shadow-[0_24px_56px_rgba(0,0,0,0.45)] md:p-8">
          <p className="font-jetbrains text-[11px] uppercase tracking-[0.16em] text-peach/68">
            Trust Boundary
          </p>
          <h3 className="mt-3 font-outfit text-3xl font-semibold leading-tight text-peach">
            No medical advice, ever
          </h3>
          <p className="mt-5 max-w-[52ch] text-peach/84">
            Lola never diagnoses and never provides clinical guidance. If a caller
            asks a clinical question, reports symptoms, or needs a script/results
            discussion, the call is escalated to your reception protocol
            immediately.
          </p>
          <div className="mt-6 rounded-2xl border border-[#69d9c3]/40 bg-[#69d9c3]/12 p-4 text-sm text-peach">
            Escalation examples: urgent symptoms, medication concerns, test
            results, treatment questions.
          </div>
        </article>
      </div>
    </section>
  );
}

function ConnectSection() {
  return (
    <section id="connect" className="section-offset w-full bg-[#f8fffd] px-6 py-20 md:px-16 md:py-24">
      <div className="mx-auto w-full max-w-7xl">
        <SectionHeading
          eyebrow="HOW IT CONNECTS"
          title="Built for real clinic operations."
          subtitle="Lola plugs into your existing scheduling reality first, then adds control."
          titleClassName="type-h2"
        />
        <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {CONNECT_FLOW.map((step) => (
            <article
              key={step.title}
              className="rounded-[1.75rem] border border-[#8addcc]/35 bg-white p-6 shadow-[0_18px_36px_rgba(30,30,46,0.08)]"
            >
              <h3 className="font-outfit text-2xl font-semibold text-ink">{step.title}</h3>
              <p className="mt-3 text-charcoal">{step.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function LightContrastSection() {
  return (
    <section className="w-full bg-[#effcf8] px-6 py-20 md:px-16 md:py-24">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-5 lg:grid-cols-3">
        {[
          {
            title: "Clean reception desk flow",
            body: "Front desk handles people in front of them while Lola handles the queue on the phone.",
          },
          {
            title: "Diary gaps recovered faster",
            body: "When cancellations happen, Lola can immediately rebook into newly opened slots.",
          },
          {
            title: "After-hours capture",
            body: "Booking intent is not lost when the practice is closed.",
          },
        ].map((item) => (
          <article
            key={item.title}
            className="rounded-[1.75rem] border border-[#83dcca]/45 bg-white p-6 shadow-[0_18px_36px_rgba(30,30,46,0.08)]"
          >
            <p className="font-jetbrains text-[11px] uppercase tracking-[0.14em] text-[#1e8a78]">
              Clinic clarity
            </p>
            <h3 className="mt-3 font-outfit text-2xl font-semibold text-ink">{item.title}</h3>
            <p className="mt-3 text-charcoal">{item.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function ConversationCard() {
  return (
    <article className="relative overflow-hidden rounded-[2rem] border border-white/12 bg-[#0B0E13] p-7 shadow-[0_26px_65px_rgba(2,6,23,0.55)]">
      <h3 className="font-outfit text-2xl font-semibold text-white">
        Scheduling + escalation in one flow
      </h3>
      <div className="mt-5 space-y-3 rounded-2xl border border-white/10 bg-charcoal/30 p-4 font-jetbrains text-sm text-peach/95">
        <p>
          Caller: Can I move my cleaning and checkup to Friday after 15:00?
        </p>
        <p className="text-peach/80">
          Lola: Yes. Dr. Meyer has 15:20 and 16:10 open. Which slot should I hold?
        </p>
        <p>Caller: Also my extraction site is painful and swelling.</p>
        <p className="rounded-xl border border-[#6fdcca]/35 bg-[#6fdcca]/14 px-3 py-2 text-white">
          Lola: I&apos;m transferring you to reception now so the clinical team can
          assist safely.
        </p>
      </div>
    </article>
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
      <ClinicPainSection />
      <ScopeAndTrustSection />
      <ConnectSection />
      <LightContrastSection />
      <section className="w-full bg-ink px-6 py-20 md:px-16 md:py-24">
        <div className="mx-auto w-full max-w-7xl">
          <ConversationCard />
        </div>
      </section>
      <HearLolaSection />
      <PricingScaffold />
      <Footer />
    </main>
  );
}
