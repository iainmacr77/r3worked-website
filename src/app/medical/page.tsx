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

const HERO_SIGNALS = [
  "Works with existing scheduling systems",
  "Google Calendar path for simpler clinics",
  "After-hours booking demand captured",
  "Clinical questions routed back to reception",
];

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
    title: "Fit the current diary first",
    body: "Lola connects around the scheduling reality you already have. Existing booking systems remain the primary path, while simpler clinics can start cleanly with Google Calendar.",
  },
  {
    badge: "Clinic rules",
    title: "Hours, policies, and appointment logic",
    body: "Booking types, provider rules, buffers, FAQs, and handoff conditions are configured up front so routine calls can be handled consistently.",
  },
  {
    badge: "Safety option",
    title: "Receptionist confirm mode",
    body: "If you want tighter control, Lola can capture intent and proposed changes, then hold final confirmation until reception approves.",
  },
];

const CONNECT_OPERATION = [
  {
    badge: "Live handling",
    title: "Routine calls stop bottlenecking reception",
    body: "The front desk can focus on patients in front of them while Lola absorbs the repeat scheduling traffic that usually fractures the day.",
  },
  {
    badge: "Access",
    title: "Diary gaps get recovered faster",
    body: "When a slot opens, Lola can work the waitlist and callback layer quickly instead of leaving recovery dependent on outbound chasing.",
  },
  {
    badge: "Auditability",
    title: "Every action leaves a record",
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
      className="relative isolate overflow-hidden bg-ink px-6 pb-18 pt-28 md:px-16 md:pb-24 md:pt-34"
    >
      <div className="absolute inset-0 bg-[linear-gradient(140deg,#08111d_0%,#0f1b2d_38%,#0a1019_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(42%_44%_at_76%_20%,rgba(124,226,208,0.18)_0%,rgba(124,226,208,0.08)_42%,transparent_76%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(34%_34%_at_14%_72%,rgba(255,255,255,0.08)_0%,transparent_72%)]" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1.08fr)_minmax(420px,0.92fr)] lg:items-end">
        <div className="max-w-3xl text-peach">
          <p className="font-jetbrains text-[11px] uppercase tracking-[0.24em] text-[#8de5d5]">
            FOR MEDICAL
          </p>
          <h1 className="mt-5 max-w-[11ch] font-outfit text-[clamp(3.2rem,8vw,6.9rem)] font-semibold leading-[0.94] tracking-[-0.04em] text-white">
            Reception pressure eases.
            <span className="mt-3 block type-h2-serif text-[#9aeee0] md:mt-4">
              Clinic control returns.
            </span>
          </h1>
          <p className="type-lead mt-7 max-w-[58ch] text-peach/86">
            Lola is the voice booking and front-desk overflow layer for clinics.
            It handles new bookings, reschedules, cancellations, waitlist
            callbacks, after-hours capture, and non-clinical questions, then
            routes any clinical question straight back to reception.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href="/book"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#80e4d2]/50 bg-[#9af0df]/12 px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(23,162,140,0.2)] transition-transform duration-300 hover:-translate-y-0.5"
            >
              Book a medical demo
            </Link>
            <Link
              href="#framework"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/16 bg-white/[0.04] px-6 py-3 text-sm font-medium text-peach/88 transition-colors hover:bg-white/[0.08]"
            >
              See how it fits
            </Link>
          </div>

          <div className="mt-10 grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-2">
            {HERO_SIGNALS.map((signal) => (
              <div
                key={signal}
                className="rounded-2xl border border-white/10 bg-white/[0.045] px-4 py-3 text-sm text-peach/82 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-sm"
              >
                <span className="mr-2 inline-block h-2 w-2 rounded-full bg-[#82e7d5]" />
                {signal}
              </div>
            ))}
          </div>
        </div>

        <div className="relative lg:pb-3">
          <HeroSurface />
        </div>
      </div>
    </section>
  );
}

function HeroSurface() {
  const callRows = [
    { time: "08:02", label: "New patient booking", status: "Booked" },
    { time: "08:11", label: "Reschedule request", status: "Moved" },
    { time: "08:19", label: "Clinical question", status: "Reception" },
    { time: "18:42", label: "After-hours voicemail risk", status: "Captured" },
  ];

  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-5 shadow-[0_28px_90px_rgba(0,0,0,0.36)] backdrop-blur-xl md:p-6">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(56%_48%_at_86%_12%,rgba(132,240,220,0.17)_0%,transparent_68%)]" />
      <div className="pointer-events-none absolute -left-14 bottom-6 h-44 w-44 rounded-full bg-[#7ee4d2]/12 blur-3xl" />

      <div className="relative z-10 flex items-center justify-between gap-4 border-b border-white/10 pb-4">
        <div>
          <p className="font-jetbrains text-[10px] uppercase tracking-[0.18em] text-white/55">
            MEDICAL FLOW SNAPSHOT
          </p>
          <p className="mt-2 text-xl font-semibold text-white">
            Routine demand handled. Clinical boundary intact.
          </p>
        </div>
        <div className="rounded-full border border-[#8fe9d8]/30 bg-[#8fe9d8]/10 px-3 py-1.5 font-jetbrains text-[10px] uppercase tracking-[0.14em] text-[#9df1e2]">
          No medical advice
        </div>
      </div>

      <div className="relative z-10 mt-5 grid gap-4 md:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-[1.6rem] border border-white/10 bg-[#0b1421]/72 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
          <div className="mb-3 flex items-center justify-between">
            <p className="font-jetbrains text-[10px] uppercase tracking-[0.14em] text-white/52">
              Incoming day flow
            </p>
            <span className="text-xs text-white/42">Live handling lane</span>
          </div>
          <div className="space-y-2.5">
            {callRows.map((row) => (
              <div
                key={`${row.time}-${row.label}`}
                className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 rounded-2xl border border-white/8 bg-white/[0.04] px-3 py-3"
              >
                <span className="font-jetbrains text-[10px] text-white/48">{row.time}</span>
                <span className="text-sm text-white/84">{row.label}</span>
                <span className="rounded-full border border-white/10 bg-white/[0.08] px-2.5 py-1 text-[10px] uppercase tracking-[0.12em] text-[#97ecde]">
                  {row.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4">
          <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.05] p-4">
            <p className="font-jetbrains text-[10px] uppercase tracking-[0.14em] text-white/55">
              Today
            </p>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <MetricTile value="94%" label="answered" />
              <MetricTile value="7" label="after-hours captured" />
              <MetricTile value="3" label="slots recovered" />
              <MetricTile value="2" label="clinical escalations" />
            </div>
          </div>
          <div className="rounded-[1.6rem] border border-[#8ae7d6]/18 bg-[#8ae7d6]/10 p-4 text-sm leading-relaxed text-peach/84">
            Lola sits in front of routine scheduling demand, keeps the diary
            moving, and leaves clinical judgment with the clinic team.
          </div>
        </div>
      </div>
    </div>
  );
}

function MetricTile({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#09111b]/64 px-3 py-3">
      <p className="text-2xl font-semibold tracking-tight text-white">{value}</p>
      <p className="mt-1 text-[11px] uppercase tracking-[0.12em] text-white/42">
        {label}
      </p>
    </div>
  );
}

function PositioningSection() {
  return (
    <section
      id="features"
      className="section-offset w-full bg-medical-soft-blue px-6 py-20 md:px-16 md:py-24"
    >
      <div className="mx-auto w-full max-w-7xl">
        <SectionHeading
          eyebrow="WHAT LOLA IS"
          eyebrowClassName="text-[#156e60] tracking-[0.2em]"
          title="A voice booking layer added to the clinic you already run."
          subtitle="This is not a clinical AI assistant and it is not a rip-and-replace project. Lola sits around real clinic operations, takes routine phone pressure off the desk, and makes the outcome measurable."
          titleClassName="type-h2-serif max-w-[14ch] text-charcoal"
          subtitleClassName="max-w-[58ch] text-charcoal/84"
        />

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {POSITIONING_CARDS.map((card) => (
            <article
              key={card.title}
              className="rounded-[1.75rem] border border-[#8addcc]/35 bg-white/78 p-6 shadow-[0_18px_48px_rgba(18,28,40,0.08)] backdrop-blur-md"
            >
              <h3 className="text-2xl font-semibold tracking-tight text-ink">
                {card.title}
              </h3>
              <p className="mt-3 text-charcoal/82">{card.body}</p>
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
      className={[
        "rounded-[2rem] border p-6 shadow-[0_20px_54px_rgba(18,28,40,0.08)] md:p-7",
        accent
          ? "border-[#9ae4d6]/46 bg-[linear-gradient(180deg,rgba(233,253,247,0.96),rgba(219,247,239,0.88))]"
          : "border-[#d8ddd7] bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(248,250,248,0.92))]",
      ].join(" ")}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-jetbrains text-[10px] uppercase tracking-[0.16em] text-[#156e60]">
            {eyebrow}
          </p>
          <h3 className="mt-3 max-w-[18ch] text-3xl font-semibold tracking-tight text-ink">
            {title}
          </h3>
        </div>
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#8ee6d5]/45 bg-white/75 text-[#156e60]">
          {icon}
        </div>
      </div>

      <ul className="mt-6 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-charcoal/84">
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
    <section className="w-full bg-medical-soft-blue px-6 py-20 md:px-16 md:py-24">
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
        heading="Fits the clinic you already run."
        subheading="Setup is about connection, rules, and guardrails. Once that is in place, Lola becomes a calm operational layer around the diary rather than another system the team has to fight."
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
