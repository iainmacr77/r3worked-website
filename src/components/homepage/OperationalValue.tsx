const VALUE_BLOCKS = [
  {
    title: "Fewer missed calls",
    description:
      "Every inbound call is answered — peak hour, after hours, weekends. No voicemail black holes.",
  },
  {
    title: "Cleaner service flow",
    description:
      "Staff stay on the floor or with patients. Routine scheduling no longer fragments the working day.",
  },
  {
    title: "Safer escalation",
    description:
      "Edge cases reach the right human with context. Nothing is lost in translation or dropped mid-queue.",
  },
  {
    title: "After-hours capture",
    description:
      "Demand that arrives outside business hours is captured and queued — not lost to a generic voicemail.",
  },
  {
    title: "Operational visibility",
    description:
      "Every call is logged with intent, outcome, and timestamp. The operating picture is always current.",
  },
];

export function OperationalValue() {
  return (
    <section className="w-full bg-ink px-6 py-24 md:px-16 md:py-32">
      <div className="mx-auto w-full max-w-7xl">
        {/* Section heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="font-jetbrains text-[10px] font-semibold uppercase tracking-[0.22em] text-peach/30">
            Why This Matters
          </p>
          <h2 className="type-h2-serif mt-4 text-peach">
            What callers experience as simple, teams feel as relief.
          </h2>
          <p className="type-lead mx-auto mt-4 max-w-[48ch] text-peach/45">
            One call handled well protects far more than the phone line.
          </p>
        </div>

        {/* Value grid */}
        <div className="grid gap-px overflow-hidden rounded-[2rem] border border-white/[0.06] bg-white/[0.04] sm:grid-cols-2 lg:grid-cols-3">
          {VALUE_BLOCKS.map((block, i) => (
            <article
              key={block.title}
              className={`bg-ink p-8 transition-colors duration-300 hover:bg-[#232336] md:p-9 ${
                i === VALUE_BLOCKS.length - 1 && VALUE_BLOCKS.length % 3 === 2
                  ? "sm:col-span-2 lg:col-span-1"
                  : ""
              }`}
            >
              <h3 className="text-lg font-semibold tracking-tight text-peach">
                {block.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-peach/45">
                {block.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
