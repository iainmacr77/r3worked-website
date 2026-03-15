const STEPS = [
  {
    number: "01",
    title: "Answers naturally",
    description:
      "Lola picks up the call, speaks like a human, and makes the caller feel heard from the first second.",
  },
  {
    number: "02",
    title: "Captures intent",
    description:
      "Booking, rescheduling, cancellation, question, or edge case — Lola identifies what the caller needs.",
  },
  {
    number: "03",
    title: "Resolves the routine",
    description:
      "Standard requests are completed inside the business system: slot found, booking confirmed, change made.",
  },
  {
    number: "04",
    title: "Routes the rest",
    description:
      "Anything that needs human judgment is escalated cleanly — with context, without delay.",
  },
];

export function HowLolaWorks() {
  return (
    <section className="w-full bg-white px-6 py-24 md:px-16 md:py-32">
      <div className="mx-auto w-full max-w-7xl">
        {/* Section heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="font-jetbrains text-[10px] font-semibold uppercase tracking-[0.22em] text-charcoal/35">
            Under The Hood
          </p>
          <h2 className="type-h2-serif mt-4 text-ink">
            Four steps. Every call.
          </h2>
          <p className="type-lead mx-auto mt-4 max-w-[48ch] text-charcoal/60">
            Whether it&apos;s a restaurant or a clinic, Lola follows the same disciplined loop.
          </p>
        </div>

        {/* Steps */}
        <div className="grid gap-px overflow-hidden rounded-[2rem] border border-ink/[0.06] bg-ink/[0.04] sm:grid-cols-2 xl:grid-cols-4">
          {STEPS.map((step, i) => (
            <article
              key={step.number}
              className="group relative bg-white p-8 transition-colors duration-300 hover:bg-[#FAFAF8] md:p-9"
            >
              {/* Step number */}
              <span className="font-jetbrains text-[11px] font-bold tracking-[0.14em] text-charcoal/25">
                {step.number}
              </span>

              {/* Title */}
              <h3 className="mt-5 text-xl font-semibold tracking-tight text-ink">
                {step.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-sm leading-relaxed text-charcoal/60">
                {step.description}
              </p>

              {/* Connecting arrow between steps (desktop only) */}
              {i < STEPS.length - 1 && (
                <div className="pointer-events-none absolute right-0 top-1/2 hidden h-px w-4 -translate-y-1/2 translate-x-1/2 bg-ink/[0.08] xl:block" />
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
