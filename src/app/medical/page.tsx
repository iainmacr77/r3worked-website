import Link from "next/link";
import type { ReactNode } from "react";
import { Footer } from "@/components/ui/Footer";
import { Navbar } from "@/components/ui/Navbar";
import { SectionHeading } from "@/components/typography/SectionHeading";

type StorySectionProps = {
  title: string;
  body: string;
  bullets: string[];
  cardOnLeft?: boolean;
  children: ReactNode;
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
          <h2 className="type-h2 text-ink">{title}</h2>
          <p className="type-lead text-charcoal">{body}</p>
          <ul className="type-body max-w-[68ch] space-y-3 text-charcoal">
            {bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-3">
                <span
                  data-medical-dot
                  className="mt-1 inline-block h-2 w-2 rounded-full bg-[#76d8c6]"
                />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
          <Link
            href="#hear-lola"
            className="type-eyebrow text-[#28b8a0] transition-opacity hover:opacity-80"
          >
            Hear Lola →
          </Link>
        </div>
      </div>
    </section>
  );
}

function MedicalHero() {
  return (
    <section
      id="hero"
      className="relative isolate flex w-full min-h-[100svh] items-end overflow-hidden bg-ink md:min-h-screen"
    >
      <div className="absolute inset-0 z-0 bg-[linear-gradient(145deg,#101725_8%,#112539_42%,#0b1c2f_100%)]" />
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(48%_40%_at_78%_72%,rgba(118,216,198,0.2)_0%,rgba(118,216,198,0.02)_60%,transparent_80%)]" />
      <div className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-b from-[#0b1120]/70 via-[#112439]/56 to-[#101b2a]/78" />

      <div className="relative z-10 mx-auto flex w-[95%] max-w-7xl px-6 pb-16 pt-28 md:pb-24">
        <div className="max-w-3xl text-peach">
          <h1 className="flex flex-col gap-2 md:gap-2.5">
            <span className="font-outfit text-4xl font-bold uppercase tracking-[0.18em] text-white md:text-6xl lg:text-7xl">
              CALM CLINIC FLOW
            </span>
            <span className="type-display text-[#90e4d6]">Starts with Lola</span>
          </h1>
          <p className="type-lead mt-6 max-w-[56ch] text-peach/88">
            Lola handles appointment scheduling calls from end to end so your
            front desk can focus on patients in the room.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4 md:mt-10 lg:mt-16">
            <a
              href="#pricing"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#76d8c6]/55 bg-ink px-7 py-3 text-sm font-semibold tracking-[0.08em] text-peach shadow-[0_0_0_1px_rgba(118,216,198,0.22),0_10px_26px_rgba(55,192,170,0.2)] transition-transform duration-300 hover:-translate-y-0.5"
            >
              Book Demo
            </a>
            <a
              href="#framework"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#fff5f0]/45 bg-[rgba(255,245,240,0.12)] px-7 py-3 text-sm font-medium tracking-[0.04em] text-peach"
            >
              See Clinical Workflow
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyLolaSection() {
  const items = [
    {
      title: "Calls answered consistently",
      body: "Book, reschedule, and cancel requests are handled instantly without waiting on hold.",
    },
    {
      title: "Clinical questions get escalated",
      body: "Symptoms, results, scripts, and medical concerns route straight to your receptionist queue.",
    },
    {
      title: "Calendar stays in sync",
      body: "Google Calendar is treated as the scheduling source of truth with clean slot selection.",
    },
  ];

  return (
    <section
      id="features"
      className="section-offset w-full bg-peach px-6 py-20 md:px-16 md:py-24"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="mx-auto max-w-4xl">
          <SectionHeading
            title="The phone never stops. Patient flow should."
            subtitle="Lola handles scheduling requests and routes clinical matters to the right human team member."
            className="justify-items-center text-center"
            titleClassName="type-h2-serif max-w-[18ch] text-center"
            subtitleClassName="text-center"
          />
        </div>
        <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.title}
              className="rounded-[1.75rem] border border-charcoal/12 bg-white/70 p-6 shadow-[0_18px_36px_rgba(30,30,46,0.08)]"
            >
              <div className="mb-4 inline-flex items-center rounded-full bg-ink/90 px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-[#92e5d7]">
                Clinic Ops
              </div>
              <h3 className="font-outfit text-2xl font-semibold text-ink">{item.title}</h3>
              <p className="mt-3 text-charcoal">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function MedicalNarrativeBreaker() {
  return (
    <section className="relative w-full overflow-hidden bg-[#070f18] px-6 py-20 md:px-16 md:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#08111d_0%,#0e1d2c_42%,#0a1623_100%)]" />
      <div className="pointer-events-none absolute -left-12 top-12 h-72 w-72 rounded-full bg-[#8fe3d5]/30 blur-[120px]" />
      <div className="pointer-events-none absolute right-[-8%] top-[16%] h-96 w-96 rounded-full bg-[#5fcfbe]/25 blur-[150px]" />
      <div className="relative mx-auto w-full max-w-7xl rounded-[2rem] border border-white/12 bg-white/[0.03] p-7 shadow-[0_34px_70px_rgba(0,0,0,0.5)] backdrop-blur-sm md:p-10">
        <p className="mb-4 inline-flex items-center gap-2 whitespace-nowrap font-jetbrains text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-white/70">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#75d9c7]" aria-hidden />
          <span>WHAT LOLA DOES FOR CLINICS</span>
        </p>
        <h2 className="max-w-[26ch] font-outfit text-3xl font-semibold leading-tight text-white md:text-5xl">
          Lola schedules appointments quickly, then escalates medical questions
          to your receptionist team.
        </h2>
        <p className="mt-6 max-w-[56ch] font-outfit text-lg leading-relaxed text-white/88 md:text-2xl">
          It protects staff focus, keeps your diary accurate, and makes each call
          end with a clear next step.
        </p>
      </div>
    </section>
  );
}

function ClinicalTranscriptCard() {
  return (
    <div className="relative flex flex-col overflow-hidden rounded-[2rem] bg-[#0B0E13] p-8 shadow-[0_26px_65px_rgba(2,6,23,0.55)] ring-1 ring-white/10">
      <div className="pointer-events-none absolute -right-14 -top-14 h-40 w-40 rounded-full bg-[rgba(118,216,198,0.32)] blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-white/[0.06]" />
      <div className="relative z-10">
        <div className="mb-3 flex items-start justify-between gap-4">
          <h3 className="font-outfit text-xl font-semibold text-white">
            Scheduling Conversation
          </h3>
          <span className="rounded-full bg-charcoal/40 px-3 py-1.5 text-[10px] uppercase tracking-widest text-peach">
            Live
          </span>
        </div>
        <div className="space-y-3 rounded-2xl border border-white/10 bg-charcoal/30 p-4 font-jetbrains text-sm text-peach/95">
          <p>
            <span className="text-peach/60">Caller:</span> Can I move my Thursday
            appointment to Friday?
          </p>
          <p>
            <span className="text-[#93e6d8]">Lola:</span> Yes, Dr. Adams has 09:40
            and 11:10 available. Which works best?
          </p>
          <p>
            <span className="text-peach/60">Caller:</span> Also, my chest pain has
            gotten worse.
          </p>
          <p className="rounded-xl border border-[#76d8c6]/35 bg-[#76d8c6]/12 px-3 py-2 text-white">
            <span className="text-[#9beedf]">Lola:</span> I&apos;ll transfer this to
            reception immediately so they can assist.
          </p>
        </div>
      </div>
    </div>
  );
}

function DiaryGridCard() {
  return (
    <div className="relative flex flex-col overflow-hidden rounded-[2rem] bg-[#0B0E13] p-8 shadow-[0_26px_65px_rgba(2,6,23,0.55)] ring-1 ring-white/10">
      <div className="pointer-events-none absolute -left-14 -top-14 h-40 w-40 rounded-full bg-[rgba(118,216,198,0.24)] blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-white/[0.06]" />
      <div className="relative z-10">
        <div className="mb-3 flex items-start justify-between gap-4">
          <h3 className="font-outfit text-xl font-semibold text-white">
            Diary Grid + Appointments
          </h3>
          <span className="rounded-full bg-charcoal/40 px-3 py-1.5 text-[10px] uppercase tracking-widest text-peach">
            Google Calendar
          </span>
        </div>
        <p className="max-w-[34ch] text-sm text-white/75">
          Slot availability is read from Google Calendar before confirming every
          booking action.
        </p>
      </div>
      <div className="relative z-10 mt-5 flex-1 rounded-2xl border border-white/10 bg-white/95 p-4">
        <div className="mb-3 grid grid-cols-5 gap-2 text-center text-[10px] uppercase tracking-[0.11em] text-charcoal/70">
          <span>Mon</span>
          <span>Tue</span>
          <span>Wed</span>
          <span>Thu</span>
          <span>Fri</span>
        </div>
        <div className="grid grid-cols-5 gap-2">
          {Array.from({ length: 20 }).map((_, idx) => {
            const highlighted = [2, 7, 13, 14, 18].includes(idx);
            return (
              <div
                key={idx}
                className={`h-9 rounded-lg border text-[11px] ${
                  highlighted
                    ? "border-[#66ccb9] bg-[#d8f5ef] text-[#0f5f53]"
                    : "border-charcoal/12 bg-peach/45 text-charcoal/65"
                } flex items-center justify-center`}
              >
                {highlighted ? "Booked" : "Open"}
              </div>
            );
          })}
        </div>
        <div className="mt-4 space-y-2.5">
          <div className="rounded-xl border border-[#66ccb9]/35 bg-[#66ccb9]/12 px-3 py-2 text-sm text-charcoal">
            09:40 Follow-up • Confirmed
          </div>
          <div className="rounded-xl border border-[#66ccb9]/35 bg-[#66ccb9]/12 px-3 py-2 text-sm text-charcoal">
            11:10 New patient • Forms pending
          </div>
          <div className="rounded-xl border border-charcoal/15 bg-white px-3 py-2 text-sm text-charcoal">
            14:20 Rescheduled from Thu
          </div>
        </div>
      </div>
    </div>
  );
}

function ClinicPoliciesCard() {
  const policies = [
    ["Late policy", "Over 15 mins may need rebooking"],
    ["Arrival time", "Arrive 10 mins before appointment"],
    ["New patient forms", "Complete online before visit"],
    ["Medical aid", "Selected plans accepted"],
    ["Provider preference", "Request doctor by name"],
  ];
  const routing = [
    "Intent: Clinical question -> receptionist escalation",
    "Intent: Results / script renewal -> receptionist callback queue",
    "Intent: Billing query -> accounts desk transfer",
    "Intent: Urgent symptoms -> immediate receptionist handoff",
  ];

  return (
    <div className="relative flex flex-col overflow-hidden rounded-[2rem] bg-[#0B0E13] p-8 shadow-[0_26px_65px_rgba(2,6,23,0.55)] ring-1 ring-white/10">
      <div className="pointer-events-none absolute -right-14 -bottom-16 h-44 w-44 rounded-full bg-[rgba(102,204,185,0.24)] blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-white/[0.06]" />
      <div className="relative z-10">
        <h3 className="font-outfit text-xl font-semibold text-white">
          Policies & Routing Rules
        </h3>
        <div className="mt-4 space-y-2">
          {policies.map(([name, value]) => (
            <div
              key={name}
              className="flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm"
            >
              <span className="text-peach/92">{name}</span>
              <span className="text-right text-peach/70">{value}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 space-y-2">
          {routing.map((item) => (
            <p
              key={item}
              className="rounded-xl border border-[#76d8c6]/35 bg-[#76d8c6]/10 px-3 py-2 text-sm text-peach"
            >
              {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

function HearLolaSection({ audioSrc }: { audioSrc: string }) {
  return (
    <section
      id="hear-lola"
      className="section-offset w-full bg-ink px-6 py-20 md:px-16 md:py-24"
    >
      <div className="mx-auto w-full max-w-5xl rounded-[2rem] border border-charcoal bg-charcoal/30 p-8 shadow-[0_24px_64px_rgba(0,0,0,0.35)] backdrop-blur-sm md:p-10">
        <SectionHeading
          className="mb-8"
          title="Hear Lola in action"
          subtitle="Scheduling-focused call flow: appointment booking, policy clarification, and escalation to reception when clinical input is needed."
          titleClassName="type-h2-serif text-peach"
          subtitleClassName="text-peach/80"
        />
        <div className="rounded-2xl border border-peach/15 bg-ink/60 p-5">
          <div className="mb-3 flex items-center justify-between">
            <p className="type-body max-w-none text-peach">Clinic Appointment Demo</p>
            <p className="type-eyebrow text-peach/60">00:30</p>
          </div>
          <audio controls className="w-full" src={audioSrc}>
            Your browser does not support the audio element.
          </audio>
        </div>
      </div>
    </section>
  );
}

function MedicalPhilosophy() {
  return (
    <section className="w-full bg-peach px-6 py-32 md:px-16 md:py-48">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-16 md:gap-24">
        <h2 className="type-h2-serif text-charcoal/60">
          Traditional reception asks:
          <br />
          <span className="italic text-ink font-semibold">
            &quot;Who can pick up this ringing phone?&quot;
          </span>
        </h2>
        <h2 className="type-h2-serif text-ink sm:text-right">
          We ask:
          <br />
          <span className="italic font-bold text-[#2cbca3]">
            &quot;What if every scheduling call ended with certainty?&quot;
          </span>
        </h2>
      </div>
    </section>
  );
}

function MedicalFramework() {
  const phases = [
    {
      title: "Phase 01: Clinic Setup",
      body: "Route your public clinic number to Lola, connect Google Calendar, and define escalation lines for clinical or urgent intents.",
    },
    {
      title: "Phase 02: Scheduling Operations",
      body: "Lola books, reschedules, and cancels appointments while holding a clean audit trail for each caller interaction.",
    },
    {
      title: "Phase 03: Policies + Routing",
      body: "Late arrivals, new patient forms, medical aid acceptance, and provider preference are answered from your approved policy set.",
    },
    {
      title: "Phase 04: Receptionist Confirm Mode",
      body: "Optional mode lets reception review and confirm appointments before final patient confirmation for higher-control clinics.",
    },
  ];

  return (
    <section id="framework" className="section-offset relative w-full bg-ink px-6 py-20 md:px-16 md:py-24">
      <div className="mx-auto w-full max-w-7xl space-y-5">
        {phases.map((phase) => (
          <article
            key={phase.title}
            className="rounded-[2rem] border border-white/12 bg-gradient-to-br from-white/[0.1] via-white/[0.05] to-white/[0.03] p-7 text-peach shadow-[0_24px_55px_rgba(0,0,0,0.45)] md:p-8"
          >
            <h3 className="type-h2 text-peach">{phase.title}</h3>
            <p className="type-body mt-3 max-w-[70ch] text-peach/84">{phase.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function MedicalPricing() {
  return (
    <section id="pricing" className="section-offset w-full bg-ink px-6 py-20 md:px-16 md:py-24">
      <div className="mx-auto w-full max-w-7xl rounded-[2rem] border border-white/12 bg-white/[0.04] p-8 shadow-[0_28px_64px_rgba(0,0,0,0.4)] md:p-10">
        <SectionHeading
          eyebrow="PRICING"
          title="Pricing designed for clinic scheduling load."
          subtitle="Scale from a single practice to multi-provider diaries with optional receptionist-confirm controls."
          titleClassName="type-h2 text-peach"
          subtitleClassName="text-peach/80"
        />
        <div className="mt-7 grid grid-cols-1 gap-4 md:grid-cols-3">
          {[
            ["Core Schedule", "For single-provider clinics"],
            ["Schedule + Routing", "Includes receptionist escalation paths"],
            ["Multi-Provider", "Cross-clinic diary orchestration"],
          ].map(([name, detail]) => (
            <article
              key={name}
              className="rounded-2xl border border-white/12 bg-ink/50 p-5"
            >
              <h3 className="font-outfit text-xl text-peach">{name}</h3>
              <p className="mt-2 text-peach/72">{detail}</p>
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
  );
}

export default function MedicalPage() {
  return (
    <main
      data-vertical="medical"
      className="flex min-h-screen w-full scroll-smooth flex-col bg-ink [&_[data-medical-accent]]:text-[#73d8c4]"
    >
      <Navbar />
      <MedicalHero />
      <WhyLolaSection />
      <MedicalNarrativeBreaker />
      <StorySection
        title="Natural Scheduling Conversation"
        body="Patients speak naturally. Lola handles scheduling actions and escalates clinical queries to reception."
        bullets={[
          "Book, reschedule, or cancel appointments",
          "Clinic policy FAQs: late policy, arrival time, forms",
          "Clinical questions are transferred to receptionist",
          "Urgent symptoms route immediately for human follow-up",
        ]}
        cardOnLeft={false}
      >
        <ClinicalTranscriptCard />
      </StorySection>
      <StorySection
        title="Google Calendar Scheduling Layer"
        body="Lola reads and writes against your diary for reliable slot control and cleaner appointment outcomes."
        bullets={[
          "Google Calendar highlighted as core schedule layer",
          "Live slot checks before confirmation",
          "Optional receptionist-confirm mode for stricter workflows",
          "Reschedules stay auditable and clean",
        ]}
        cardOnLeft
      >
        <DiaryGridCard />
      </StorySection>
      <StorySection
        title="Policies + Intent Routing"
        body="Clinic policies and routing intents give callers clear answers while protecting your clinical team."
        bullets={[
          "Late policy, forms, medical aid, provider preference covered",
          "Results and script renewals routed to reception desk",
          "Billing requests go to accounts workflow",
          "Urgent symptom intent escalates immediately",
        ]}
        cardOnLeft={false}
      >
        <ClinicPoliciesCard />
      </StorySection>
      <HearLolaSection audioSrc="/audio/lola-demo-placeholder.mp3" />
      <MedicalPhilosophy />
      <MedicalFramework />
      <MedicalPricing />
      <Footer />
    </main>
  );
}
