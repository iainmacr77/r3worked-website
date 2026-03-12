import type { ReactNode } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CalendarSync,
  Clock3,
  PhoneCall,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";
import { Footer } from "@/components/ui/Footer";
import { Navbar } from "@/components/ui/Navbar";
import { SectionHeading } from "@/components/typography/SectionHeading";
import { RightSlideOverlayPair } from "@/components/medical/RightSlideOverlayPair";
import { MedicalConversationFeature } from "@/components/medical/MedicalConversationFeature";
import { MedicalCapacityFeature } from "@/components/medical/MedicalCapacityFeature";
import { WhyLolaCarousel, type PainSlide } from "@/components/ui/WhyLolaCarousel";
import { NarrativeBreaker } from "@/components/ui/NarrativeBreaker";

const POSITIONING_CARDS = [
  {
    title: "Voice booking layer",
    body: "Lola answers the phone, speaks naturally, and handles routine scheduling without forcing a new way of working onto the clinic.",
  },
  {
    title: "Front-desk overflow",
    body: "New bookings, reschedules, cancellations, waitlist callbacks, and repetitive non-clinical questions stop piling up on reception.",
  },
  {
    title: "Clinic-ready context",
    body: "Lola captures a high-level reason for visit so staff are prepared, without drifting into diagnosis or clinical guidance.",
  },
  {
    title: "Measured operation",
    body: "Bookings handled, slots recovered, after-hours capture, escalations, and receptionist time returned are all visible and auditable.",
  },
];

const WHY_LOLA_SLIDES: PainSlide[] = [
  {
    signal: "Peak Load",
    headline: "Routine calls still consume clinic capacity.",
    body: "Bookings, reschedules, callbacks, and admin questions create a steady demand layer that keeps landing on reception.",
  },
  {
    signal: "Front Desk Strain",
    headline: "Reception is doing far more than answering the phone.",
    body: "Check-ins, scheduling, messages, and patient flow all collide at the desk at the same time.",
  },
  {
    signal: "Access Friction",
    headline: "When the line clogs, access feels worse.",
    body: "Patients wait longer, call back later, or drift elsewhere even when the clinic is technically open.",
  },
  {
    signal: "Diary Leakage",
    headline: "Open slots and late changes quietly erode the day.",
    body: "Cancellations, missed callbacks, and unfilled gaps turn into avoidable waste and slower access.",
  },
];

const HANDLED_ITEMS = [
  "New bookings, reschedules, and cancellations",
  "Waitlist and callback offers when slots reopen",
  "Non-clinical FAQs like arrival time, forms, fees, directions, and late policy",
  "High-level reason-for-visit capture so the clinic is prepared",
];

const ROUTED_ITEMS = [
  "Clinical questions and requests for medical advice",
  "Anything that needs staff judgment or clinical interpretation",
  "Receptionist-confirm workflows when your team wants final approval before confirmation",
  "Escalations that should remain with the clinic team",
];

const CONNECT_SETUP = [
  {
    badge: "Connection path",
    title: "Map the clinic's scheduling reality",
    body: "Lola is fitted around the diary you already run. Existing booking systems stay central, while simpler clinics can start cleanly with Google Calendar.",
  },
  {
    badge: "Clinic rules",
    title: "Configure hours, policies, and appointment logic",
    body: "Booking types, provider rules, buffers, FAQs, and handoff conditions are set up first so routine calls can be handled consistently.",
  },
  {
    badge: "Safety option",
    title: "Choose the clinic's approval mode",
    body: "If you want tighter control, Lola can capture intent and proposed changes, then pause final confirmation until reception approves.",
  },
];

const CONNECT_OPERATION = [
  {
    badge: "Live handling",
    title: "Reception stays with the patient in front of them",
    body: "Once live, Lola absorbs the repeat scheduling traffic that usually fractures the day, so the front desk can stay focused on the clinic floor.",
  },
  {
    badge: "Access",
    title: "Diary gaps get recovered while they still matter",
    body: "When a slot opens, Lola can work the waitlist and callback layer quickly instead of leaving recovery dependent on manual outbound chasing.",
  },
  {
    badge: "Auditability",
    title: "Live actions stay visible and auditable",
    body: "Bookings, changes, cancellations, notes, and escalations are logged with timestamps and outcomes so the clinic can verify exactly what happened.",
  },
];

const STORY_SECTIONS = [
  {
    eyebrow: "CALL HANDLING",
    title: "Routine calls feel handled, not merely answered.",
    body: "Patients can speak naturally. Lola keeps the booking conversation moving, confirms the outcome cleanly, and captures enough context for the clinic to be ready.",
    bullets: [
      "Natural language scheduling rather than rigid menu trees",
      "High-level visit context recorded without drifting into clinical advice",
      "Non-clinical policy questions answered instantly",
      "Clear handoff when the conversation crosses the clinical line",
    ],
    cardOnLeft: false,
    graphic: <MedicalConversationFeature />,
  },
  {
    eyebrow: "CAPACITY",
    title: "A tighter diary without more reception chasing.",
    body: "Lola helps clinics recover lost capacity by turning cancellations, after-hours intent, and waitlist demand into a more controlled booking flow.",
    bullets: [
      "Recovered slots instead of dead gaps sitting untouched",
      "After-hours requests captured while the practice is closed",
      "Waitlist and callback demand surfaced while the opportunity still matters",
      "Fewer manual back-and-forth calls to stabilise the day",
    ],
    cardOnLeft: true,
    graphic: <MedicalCapacityFeature />,
  },
];

const PROOF_STEPS = [
  {
    label: "01",
    title: "Routine handled cleanly",
    body: "A patient asks to move an appointment. Lola offers the next available times, confirms the new slot, and updates the booking.",
  },
  {
    label: "02",
    title: "Context captured at the right level",
    body: "Lola asks for a short reason for visit so the team is prepared, without attempting to interpret symptoms or advise the patient.",
  },
  {
    label: "03",
    title: "Clinical boundary stays with the clinic",
    body: "If the caller asks for medical advice or anything clinical, Lola stops there and routes the call to reception or staff.",
  },
];

const METRIC_CARDS = [
  { label: "Call answer rate", value: "97%", detail: "Routine booking demand answered across open and after-hours windows." },
  { label: "After-hours capture", value: "26", detail: "Booking intents that would otherwise have landed in voicemail or nowhere." },
  { label: "Recovered slots", value: "38", detail: "Cancelled appointments rebooked into live capacity this month." },
  { label: "Escalation rate", value: "11%", detail: "A visible handoff measure that proves clinical questions stayed with staff." },
  { label: "Reception minutes saved", value: "19h", detail: "Time returned to the front desk from routine phone handling." },
];

const OUTCOME_LOG = [
  "08:14 Reschedule completed · Dr Shah · confirmed by caller",
  "10:05 Clinical question escalated · routed to reception in 14s",
  "12:42 Cancellation recovered · waitlist patient booked into open slot",
  "18:26 After-hours booking captured · queued into tomorrow's diary",
];

const PLANS = [
  {
    name: "Starter",
    audience: "For solo or lower-complexity clinics",
    accent: "Google Calendar path",
    items: [
      "Voice handling for bookings, reschedules, and cancellations",
      "Non-clinical FAQ coverage",
      "High-level reason-for-visit capture",
      "Fastest path to a live booking layer",
    ],
    featured: false,
  },
  {
    name: "Practice",
    audience: "For established clinics and busy reception teams",
    accent: "Most clinics start here",
    items: [
      "Existing scheduling system compatibility",
      "Receptionist confirm mode",
      "After-hours capture and waitlist recovery",
      "Audit trail plus operational metrics",
    ],
    featured: true,
  },
  {
    name: "Multi-Provider",
    audience: "For larger diaries, providers, and service lines",
    accent: "Richer routing and reporting",
    items: [
      "Multi-provider booking logic",
      "Advanced call outcome segmentation",
      "Expanded metrics and exports",
      "Implementation scoped to more complex operations",
    ],
    featured: false,
  },
];

function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate flex min-h-[100svh] w-full items-end overflow-hidden bg-ink md:min-h-screen"
    >
      {/* 1. Base photo — doctor on the right, near-sharp and lightly toned (no blur on subject) */}
      <div className="absolute inset-0 z-0">
        <picture>
          <source srcSet="/images/medical-hero-doctor.webp" type="image/webp" />
          <img
            src="/images/medical-hero-doctor.png"
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover object-right brightness-[0.9] saturate-[0.92] contrast-[1.02]"
          />
        </picture>
      </div>
      {/* 2. Dark overlay — strong left for text, steep falloff so right side opens up around the doctor */}
      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r from-[#08111d]/92 from-0% via-[#0a1320]/65 via-38% to-[#0d1622]/22 to-100%"
        aria-hidden="true"
      />
      {/* 3. Green orb — upper-right corner only, off the face (ambient corner light) */}
      <div
        className="pointer-events-none absolute inset-0 z-[2] bg-[radial-gradient(28%_28%_at_96%_4%,rgba(124,226,208,0.16)_0%,rgba(124,226,208,0.05)_50%,transparent_72%)]"
        aria-hidden="true"
      />
      {/* 4. Subtle fill — lower-left soft light */}
      <div
        className="pointer-events-none absolute inset-0 z-[3] bg-[radial-gradient(34%_34%_at_14%_72%,rgba(255,255,255,0.08)_0%,transparent_72%)]"
        aria-hidden="true"
      />
      {/* 5. Vignette — left-weighted so doctor side stays clearer */}
      <div
        className="pointer-events-none absolute inset-0 z-[4] bg-[radial-gradient(ellipse_70%_80%_at_32%_50%,transparent_35%,rgba(8,11,29,0.28)_100%)]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto flex w-[95%] max-w-7xl px-6 pb-16 pt-28 md:pb-24">
        <div className="max-w-3xl text-peach">
          <p className="font-jetbrains text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8de5d5]">
            FOR MEDICAL
          </p>
          <h1 className="mt-5 flex flex-col gap-2 md:gap-2.5">
            <span className="font-outfit text-4xl font-bold tracking-[-0.02em] text-white drop-shadow-[0_3px_14px_rgba(8,8,14,0.45)] md:text-6xl lg:text-7xl">
              A quieter front desk
            </span>
            <span className="type-display text-[#9aeee0] drop-shadow-[0_5px_16px_rgba(8,8,14,0.42)]">
              Starts with Lola
            </span>
          </h1>
          <p className="type-lead mt-6 max-w-[56ch] text-peach/88">
            Lola handles bookings, reschedules, cancellations, and non-clinical FAQs by voice — so reception can run the clinic.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4 md:mt-10 lg:mt-16">
            <Link
              href="/book"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#69d9c3]/55 bg-ink px-7 py-3 text-sm font-semibold tracking-[0.08em] text-peach shadow-[0_0_0_1px_rgba(94,223,201,0.22),0_10px_26px_rgba(64,194,172,0.2)] transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_0_1px_rgba(94,223,201,0.35),0_14px_34px_rgba(64,194,172,0.28)] active:translate-y-0 active:scale-[0.98]"
            >
              Book Demo
            </Link>
            <Link
              href="#framework"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#fff5f0]/45 bg-[rgba(255,245,240,0.12)] px-7 py-3 text-sm font-medium tracking-[0.04em] text-peach shadow-[inset_0_1px_0_rgba(255,255,255,0.28),0_8px_20px_rgba(16,16,28,0.28)] backdrop-saturate-150 transition-transform duration-300 hover:-translate-y-0.5 hover:bg-[rgba(255,245,240,0.17)] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.34),0_12px_28px_rgba(16,16,28,0.34)] active:translate-y-0 active:scale-[0.98]"
            >
              See How It Works
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function PositioningSection() {
  return (
    <section
      id="features"
      className="section-offset relative -mt-24 w-full overflow-hidden bg-[#08111b] px-6 pb-20 pt-44 md:-mt-28 md:px-16 md:pb-24 md:pt-52"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-64 bg-[linear-gradient(180deg,#070A10_0%,rgba(7,10,16,0.98)_24%,rgba(7,11,18,0.9)_48%,rgba(8,17,27,0.6)_78%,rgba(8,17,27,0)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.008),rgba(255,255,255,0.035)_34%,rgba(255,255,255,0.02)_100%)]" />
        <div className="absolute left-[-6%] top-28 h-64 w-64 rounded-full bg-[#8de5d5]/10 blur-[120px]" />
        <div className="absolute right-[-4%] top-[34%] h-80 w-80 rounded-full bg-[#8de5d5]/8 blur-[150px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(141,229,213,0.05),transparent_36%)]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <SectionHeading
          eyebrow="WHAT LOLA IS"
          eyebrowClassName="text-[#8de5d5] tracking-[0.2em]"
          title="A voice booking layer added to the clinic you already run."
          subtitle="This is not a clinical AI assistant and it is not a rip-and-replace project. Lola sits around real clinic operations, takes routine phone pressure off the desk, and makes the outcome measurable."
          titleClassName="type-h2 max-w-[14ch] text-peach"
          subtitleClassName="max-w-[58ch] text-peach/80"
        />

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {POSITIONING_CARDS.map((card) => (
            <article
              key={card.title}
              className="rounded-[1.75rem] border border-white/10 bg-white/[0.045] p-6 shadow-[0_24px_60px_rgba(0,0,0,0.28)] backdrop-blur-md transition-[border-color,box-shadow,transform,background-color] duration-300 ease-out hover:border-white/20 hover:-translate-y-0.5 hover:bg-white/[0.055] hover:shadow-[0_28px_64px_rgba(0,0,0,0.32),0_0_0_1px_rgba(255,255,255,0.06)]"
            >
              <h3 className="text-2xl font-semibold tracking-tight text-white">
                {card.title}
              </h3>
              <p className="mt-3 text-peach/76">{card.body}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
          <BoundaryLane
            eyebrow="Handled confidently"
            title="Routine scheduling and non-clinical communication stay with Lola."
            icon={<PhoneCall className="h-5 w-5" />}
            items={HANDLED_ITEMS}
          />
          <BoundaryLane
            eyebrow="Safely routed back"
            title="Anything clinical stays with reception and the clinic team."
            icon={<ShieldCheck className="h-5 w-5" />}
            items={ROUTED_ITEMS}
            accent
          />
        </div>
      </div>
    </section>
  );
}

function WhyLolaSection() {
  return (
    <section className="w-full bg-white px-6 py-20 md:px-16 md:py-24">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mx-auto max-w-4xl">
          <SectionHeading
            eyebrowClassName="text-[#156e60] tracking-[0.2em]"
            title="The phone keeps pulling reception away from the clinic."
            subtitle="Bookings, changes, FAQs, and callbacks all compete with the patient standing in front of the desk."
            className="justify-items-center text-center"
            titleClassName="type-h2-serif max-w-[18ch] text-center text-charcoal"
            subtitleClassName="max-w-[42ch] text-center text-charcoal/82"
          />
        </div>

        <div className="relative left-1/2 mt-10 w-screen min-w-0 -translate-x-1/2 px-6 md:px-16">
          <div className="w-full">
            <WhyLolaCarousel
              slides={WHY_LOLA_SLIDES}
              ariaLabel="Medical front desk pain points"
              variant="medical"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function MedicalNarrativeBreaker() {
  return (
    <NarrativeBreaker
      headline="Lola books, reschedules, routes — and respects the clinical line."
      subheadlinePrefix="The "
      subheadlineHighlight="booking layer that protects reception"
      subheadlineSuffix=" without crossing into clinical advice."
      eyebrowDotClassName="bg-mint"
      subheadlineHighlightClassName="text-[#9aeee0]"
      ariaLabel="Medical narrative transition"
    />
  );
}

function BoundaryLane({
  eyebrow,
  title,
  items,
  icon,
  accent = false,
}: {
  eyebrow: string;
  title: string;
  items: string[];
  icon: ReactNode;
  accent?: boolean;
}) {
  return (
    <article
      className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-6 shadow-[0_26px_74px_rgba(0,0,0,0.3)] backdrop-blur-md transition-[border-color,box-shadow,transform,background-color] duration-300 ease-out hover:border-white/20 hover:-translate-y-0.5 hover:bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.04))] hover:shadow-[0_28px_64px_rgba(0,0,0,0.32),0_0_0_1px_rgba(255,255,255,0.06)] md:p-7"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-jetbrains text-[10px] uppercase tracking-[0.16em] text-[#8de5d5]">
            {eyebrow}
          </p>
          <h3 className="mt-3 max-w-[18ch] text-3xl font-semibold tracking-tight text-white">
            {title}
          </h3>
        </div>
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.055] text-[#8de5d5]">
          {icon}
        </div>
      </div>

      <ul className="mt-6 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-peach/78">
            <span className="mt-1.5 inline-block h-2 w-2 rounded-full bg-[#30c0a5]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

function StoryFeatureSection({
  eyebrow,
  title,
  body,
  bullets,
  cardOnLeft,
  children,
}: {
  eyebrow: string;
  title: string;
  body: string;
  bullets: string[];
  cardOnLeft: boolean;
  children: ReactNode;
}) {
  return (
    <section className="w-full bg-white px-6 py-20 md:px-16 md:py-24">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className={cardOnLeft ? "order-1" : "order-2"}>
          <div className="mx-auto h-[460px] w-full max-w-[580px] min-w-0 sm:h-[520px] lg:h-[560px] [&>*]:h-full [&>*]:min-h-0 [&>*]:w-full [&>*]:flex-shrink-0">
            {children}
          </div>
        </div>
        <div className={`${cardOnLeft ? "order-2" : "order-1"} section-header`}>
          <p className="font-jetbrains text-[10px] uppercase tracking-[0.18em] text-[#156e60]">
            {eyebrow}
          </p>
          <h2 className="type-h2 max-w-[13ch] text-ink">{title}</h2>
          <p className="type-lead max-w-[52ch] text-charcoal">{body}</p>
          <ul className="type-body max-w-[62ch] space-y-3 text-charcoal">
            {bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-3">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-[#30c0a5]" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function ProofSection() {
  return (
    <section className="w-full bg-[#08111b] px-6 py-20 md:px-16 md:py-24">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 shadow-[0_26px_74px_rgba(0,0,0,0.32)] backdrop-blur-md">
          <SectionHeading
            eyebrow="PROOF OF BEHAVIOUR"
            eyebrowClassName="text-[#8de5d5] tracking-[0.2em]"
            title="How Lola sounds on the line."
            subtitle="The point is not theatrical AI conversation. The point is a calm, useful call that gets the booking work done and stops at the clinical boundary."
            titleClassName="type-h2-serif max-w-[11ch] text-peach"
            subtitleClassName="max-w-[46ch] text-peach/80"
          />

          <div className="mt-8 space-y-4">
            {PROOF_STEPS.map((step) => (
              <article
                key={step.label}
                className="rounded-[1.5rem] border border-white/10 bg-[#0d1825]/80 p-5"
              >
                <p className="font-jetbrains text-[10px] uppercase tracking-[0.16em] text-[#8de5d5]">
                  {step.label}
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-peach/76">
                  {step.body}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-6 shadow-[0_26px_74px_rgba(0,0,0,0.3)] backdrop-blur-md">
          <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
            <div>
              <p className="font-jetbrains text-[10px] uppercase tracking-[0.16em] text-white/52">
                SAMPLE CALL SHAPE
              </p>
              <p className="mt-2 text-xl font-semibold text-white">
                Booking completed. Clinical advice deferred to staff.
              </p>
            </div>
            <div className="rounded-full border border-[#90e8d8]/28 bg-[#90e8d8]/10 px-3 py-1.5 text-[10px] uppercase tracking-[0.14em] text-[#9df2e4]">
              Safe routing
            </div>
          </div>

          <div className="mt-5 space-y-4">
            <TranscriptBubble
              speaker="Patient"
              text="Hi, I need to move my Thursday appointment to next week."
              patient
            />
            <TranscriptBubble
              speaker="Lola"
              text="I can move that to Tuesday at 10:20 or Wednesday at 15:40. Which would you prefer?"
            />
            <TranscriptBubble
              speaker="Patient"
              text="Wednesday please. It is for a follow-up on my shoulder."
              patient
            />
            <TranscriptBubble
              speaker="Lola"
              text="Done. I have moved the appointment and noted shoulder follow-up so the clinic is prepared."
            />
            <TranscriptBubble
              speaker="Patient"
              text="Should I be worried that it still hurts at night?"
              patient
            />
            <TranscriptBubble
              speaker="Lola"
              text="I cannot give medical advice, but I can route you to reception now so the clinic team can help."
            />
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            <ProofChip icon={<CalendarSync className="h-4 w-4" />} label="Reschedule completed" />
            <ProofChip icon={<Stethoscope className="h-4 w-4" />} label="Clinical question escalated" />
            <ProofChip icon={<ShieldCheck className="h-4 w-4" />} label="Boundary respected" />
          </div>
        </div>
      </div>
    </section>
  );
}

function TranscriptBubble({
  speaker,
  text,
  patient = false,
}: {
  speaker: string;
  text: string;
  patient?: boolean;
}) {
  return (
    <div className={`flex ${patient ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[90%] rounded-[1.5rem] border px-4 py-3 ${
          patient
            ? "border-[#8de5d5]/16 bg-[#8de5d5]/10 text-peach"
            : "border-white/10 bg-white/[0.055] text-white"
        }`}
      >
        <p className="font-jetbrains text-[10px] uppercase tracking-[0.14em] text-white/48">
          {speaker}
        </p>
        <p className="mt-2 text-sm leading-relaxed">{text}</p>
      </div>
    </div>
  );
}

function ProofChip({
  icon,
  label,
}: {
  icon: ReactNode;
  label: string;
}) {
  return (
    <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.045] px-3 py-3 text-sm text-peach/78">
      <span className="text-[#8fe8d8]">{icon}</span>
      <span>{label}</span>
    </div>
  );
}

function ControlRoomSection() {
  return (
    <section
      id="metrics"
      className="section-offset w-full bg-[#08111b] px-6 py-20 md:px-16 md:py-24"
    >
      <div className="mx-auto w-full max-w-7xl rounded-[2.3rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-7 shadow-[0_30px_82px_rgba(0,0,0,0.38)] backdrop-blur-md md:p-9">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionHeading
              eyebrow="CLINIC CONTROL ROOM"
              eyebrowClassName="text-[#8de5d5] tracking-[0.2em]"
              title="A calm picture of access, pressure, and handoff."
              subtitle="Clinic owners should be able to see whether the phone was answered, whether lost capacity was recovered, and whether the clinical boundary held. That is the value layer."
              titleClassName="type-h2 max-w-[12ch] text-peach"
              subtitleClassName="max-w-[40ch] text-peach/80"
            />

            <div className="mt-8 rounded-[1.75rem] border border-[#8be6d6]/22 bg-[#8be6d6]/10 p-5">
              <p className="font-jetbrains text-[10px] uppercase tracking-[0.14em] text-[#9ef1e3]">
                Leadership readout
              </p>
              <p className="mt-3 text-sm leading-relaxed text-peach/82">
                A healthy escalation rate is not a failure signal here. It is
                proof that clinical and uncertain calls stayed with staff rather
                than drifting into automation.
              </p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            <article className="rounded-[1.6rem] border border-white/10 bg-[#0c1621]/84 p-5 md:col-span-2 xl:col-span-1">
              <p className="font-jetbrains text-[10px] uppercase tracking-[0.14em] text-white/52">
                Answer rate
              </p>
              <p className="mt-3 text-6xl font-semibold tracking-[-0.05em] text-white">
                97%
              </p>
              <p className="mt-3 text-sm leading-relaxed text-peach/74">
                Routine booking demand captured across open and after-hours
                windows, without asking staff to stretch the day further.
              </p>
            </article>

            {METRIC_CARDS.slice(1).map((metric) => (
              <article
                key={metric.label}
                className="rounded-[1.6rem] border border-white/10 bg-white/[0.045] p-5"
              >
                <p className="font-jetbrains text-[10px] uppercase tracking-[0.14em] text-white/52">
                  {metric.label}
                </p>
                <p className="mt-3 text-4xl font-semibold tracking-tight text-[#9af0e1]">
                  {metric.value}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-peach/74">
                  {metric.detail}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-8 rounded-[1.8rem] border border-white/10 bg-[#0c1622]/82 p-5">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
            <p className="font-jetbrains text-[10px] uppercase tracking-[0.14em] text-white/52">
              Outcome log
            </p>
            <div className="flex items-center gap-2 text-sm text-peach/64">
              <Clock3 className="h-4 w-4 text-[#8ee7d7]" />
              Timestamped actions and escalation tags
            </div>
          </div>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {OUTCOME_LOG.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/8 bg-white/[0.04] px-4 py-3 text-sm text-peach/76"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
  return (
    <section
      id="pricing"
      className="section-offset w-full bg-[#08111b] px-6 py-20 md:px-16 md:py-24"
    >
      <div className="mx-auto w-full max-w-7xl">
        <SectionHeading
          eyebrow="PRICING"
          eyebrowClassName="text-[#8de5d5] tracking-[0.2em]"
          title="Clinic plans shaped around operational complexity."
          subtitle="The difference between tiers is not marketing fluff. It is scheduling complexity, routing depth, and how much control and reporting your clinic needs."
          titleClassName="type-h2-serif max-w-[12ch] text-peach"
          subtitleClassName="max-w-[54ch] text-peach/80"
        />

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {PLANS.map((plan) => (
            <article
              key={plan.name}
              className={`rounded-[2rem] border p-6 shadow-[0_22px_62px_rgba(0,0,0,0.28)] ${
                plan.featured
                  ? "border-[#92eadb]/34 bg-[linear-gradient(180deg,rgba(144,232,216,0.14),rgba(255,255,255,0.06))]"
                  : "border-white/10 bg-white/[0.045]"
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-jetbrains text-[10px] uppercase tracking-[0.14em] text-[#8de5d5]">
                    {plan.accent}
                  </p>
                  <h3 className="mt-3 text-3xl font-semibold tracking-tight text-white">
                    {plan.name}
                  </h3>
                  <p className="mt-3 max-w-[28ch] text-sm leading-relaxed text-peach/74">
                    {plan.audience}
                  </p>
                </div>
                {plan.featured ? (
                  <span className="rounded-full border border-[#92eadb]/34 bg-[#92eadb]/12 px-3 py-1.5 font-jetbrains text-[10px] uppercase tracking-[0.12em] text-[#a4f4e7]">
                    Recommended
                  </span>
                ) : null}
              </div>

              <ul className="mt-6 space-y-3 text-peach/82">
                {plan.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-[#88ead8]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/book"
                className={`mt-8 inline-flex min-h-11 items-center rounded-full px-5 py-2.5 text-sm font-semibold transition-transform duration-300 hover:-translate-y-0.5 ${
                  plan.featured
                    ? "bg-[#92eadb] text-ink"
                    : "border border-white/14 bg-white/[0.06] text-white"
                }`}
              >
                Book a demo
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-7 shadow-[0_22px_62px_rgba(0,0,0,0.26)] md:flex md:items-center md:justify-between md:gap-8">
          <div className="max-w-2xl">
            <p className="font-jetbrains text-[10px] uppercase tracking-[0.18em] text-[#8de5d5]">
              FINAL STEP
            </p>
            <h3 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              See Lola against your actual reception flow.
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-peach/76 md:text-base">
              We will map your booking logic, handoff rules, and current diary
              setup clearly. The question is not whether clinics need more AI.
              It is whether routine phone pressure should still be sitting on
              reception.
            </p>
          </div>
          <Link
            href="/book"
            className="mt-6 inline-flex min-h-12 items-center rounded-full bg-[#95edde] px-6 py-3 text-sm font-semibold text-ink transition-transform duration-300 hover:-translate-y-0.5 md:mt-0"
          >
            Book a medical demo
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
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
      <WhyLolaSection />
      <MedicalNarrativeBreaker />
      <PositioningSection />

      {STORY_SECTIONS.map((section) => (
        <StoryFeatureSection
          key={section.title}
          eyebrow={section.eyebrow}
          title={section.title}
          body={section.body}
          bullets={section.bullets}
          cardOnLeft={section.cardOnLeft}
        >
          {section.graphic}
        </StoryFeatureSection>
      ))}

      <RightSlideOverlayPair
        id="framework"
        heading="How Lola fits your clinic."
        subheading="First define the operating model: where Lola sits, where reception stays in control, and how the diary remains the source of truth. Then configure the connections, rules, and guardrails so live operation feels calm rather than disruptive."
        setupCards={CONNECT_SETUP}
        operationCards={CONNECT_OPERATION}
      />

      <ProofSection />
      <ControlRoomSection />
      <PricingSection />
      <Footer />
    </main>
  );
}
