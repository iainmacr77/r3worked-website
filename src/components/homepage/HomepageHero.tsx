import Link from "next/link";

const MEDICAL_MINT = "#8DE5D5";

const HERO_LANES = [
  {
    id: "01",
    accent: "bg-coral",
    surfaceClass: "boundary-lane-glow-left",
    label: "Restaurant demand",
    incoming: "Dinner for four at 8",
    context: "Availability, notes, and house rules checked in one pass.",
    state: "Intent understood",
    resolution: "Confirmed into tonight's service flow",
  },
  {
    id: "02",
    accent: "bg-[#8DE5D5]",
    surfaceClass: "boundary-lane-glow-right",
    label: "Medical admin",
    incoming: "Move my appointment to Friday",
    context: "Scheduling logic handled cleanly while clinical questions stay with staff.",
    state: "Safely routed",
    resolution: "Rescheduled with the right boundary intact",
  },
  {
    id: "03",
    accent: "bg-[#6C84C4]",
    surfaceClass:
      "bg-[linear-gradient(180deg,rgba(7,10,16,0.98),rgba(7,10,16,0.94))]",
    label: "Broader platform",
    incoming: "After-hours demand captured",
    context: "The same layer receives requests, resolves the routine ones, and surfaces exceptions.",
    state: "Always on",
    resolution: "Logged, routed, and ready for the next workflow",
  },
];

function LolaLayerStage() {
  return (
    <div className="relative mt-14 w-full max-w-6xl md:mt-20">
      <div className="pointer-events-none absolute inset-x-0 top-12 h-px bg-[linear-gradient(90deg,transparent,rgba(30,30,46,0.08),transparent)]" />

      <div className="relative overflow-hidden rounded-[2rem] border border-black/6 bg-[linear-gradient(180deg,rgba(252,251,248,0.96),rgba(246,242,236,0.98))] p-5 shadow-[0_26px_80px_rgba(56,45,28,0.08),0_10px_28px_rgba(56,45,28,0.05),inset_0_1px_0_rgba(255,255,255,0.82)] md:rounded-[2.5rem] md:p-7">
        <div className="pointer-events-none absolute inset-[1px] rounded-[calc(2rem-1px)] border border-white/40 md:rounded-[calc(2.5rem-1px)]" />

        <div className="relative z-10 flex flex-col gap-6">
          <div className="flex flex-col gap-4 border-b border-black/6 pb-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="font-jetbrains text-[10px] font-semibold uppercase tracking-[0.22em] text-charcoal/48">
                Lola Layer
              </p>
              <h2 className="mt-3 max-w-[18ch] text-2xl font-semibold tracking-[-0.03em] text-ink md:text-[2.55rem]">
                One surface receiving live demand across real operations.
              </h2>
              <p className="mt-3 max-w-[44ch] text-sm leading-relaxed text-charcoal/58 md:text-[15px]">
                A calmer place for live demand to land.
              </p>
            </div>

            <p className="font-jetbrains text-[10px] uppercase tracking-[0.18em] text-charcoal/34 md:text-right">
              Live now. Built wider.
            </p>
          </div>

          <div className="grid gap-4">
            {HERO_LANES.map((lane, index) => {
              const isPrimary = index === 0;
              const isTertiary = index === 2;

              return (
                <div
                  key={lane.id}
                  className={`grid gap-4 overflow-hidden rounded-[1.75rem] border border-white/12 p-5 text-white shadow-[0_26px_74px_rgba(0,0,0,0.45)] backdrop-blur-md md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.9fr)] md:items-center ${lane.surfaceClass} ${
                    isPrimary ? "md:p-7" : isTertiary ? "opacity-[0.9] md:p-5" : "md:p-6"
                  }`}
                >
                  <div className="flex min-w-0 gap-4">
                    <div className="flex w-8 shrink-0 flex-col items-center gap-3 pt-1">
                      <span
                        className={`h-2.5 w-2.5 rounded-full ${lane.accent}`}
                      />
                      <span className="h-full w-px bg-[linear-gradient(180deg,rgba(255,255,255,0.18),rgba(255,255,255,0))]" />
                    </div>
                    <div className="relative z-10 min-w-0">
                      <p className="font-jetbrains text-[10px] uppercase tracking-[0.18em] text-white/42">
                        {lane.label}
                      </p>
                      <p
                        className={`mt-3 font-semibold tracking-[-0.025em] text-white ${
                          isPrimary
                            ? "text-[1.45rem] md:text-[1.72rem]"
                            : isTertiary
                              ? "text-lg md:text-[1.18rem]"
                              : "text-xl md:text-[1.38rem]"
                        }`}
                      >
                        {lane.incoming}
                      </p>
                      <p
                        className={`mt-2 leading-relaxed ${
                          isTertiary
                            ? "text-[13px] text-white/52"
                            : "text-sm text-white/62"
                        }`}
                      >
                        {lane.context}
                      </p>
                    </div>
                  </div>

                  <div className="relative z-10 border-l border-white/10 pl-4 text-left md:pl-6">
                    <p
                      className={`font-jetbrains text-[10px] uppercase tracking-[0.18em] ${
                        isTertiary ? "text-white/36" : "text-white/45"
                      }`}
                    >
                      {lane.state}
                    </p>
                    <p
                      className={`mt-3 max-w-[22ch] font-semibold tracking-[-0.02em] text-white ${
                        isPrimary
                          ? "text-[1.18rem] md:text-[1.28rem]"
                          : isTertiary
                            ? "text-base text-white/82"
                            : "text-lg"
                      }`}
                    >
                      {lane.resolution}
                    </p>
                    <div className="mt-4 flex items-center justify-between gap-3">
                      <span
                        className={`${
                          isTertiary
                            ? "text-[13px] text-white/48"
                            : "text-sm text-white/62"
                        }`}
                      >
                        Logged end to end
                      </span>
                      <span
                        className={`rounded-full ${lane.accent} ${
                          isPrimary
                            ? "h-2 w-16 opacity-82"
                            : isTertiary
                              ? "h-1.5 w-10 opacity-60"
                              : "h-2 w-14 opacity-78"
                        }`}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="rounded-[1.6rem] border border-black/6 bg-[linear-gradient(180deg,rgba(255,255,255,0.74),rgba(248,244,238,0.92))] px-4 py-4 md:px-5">
            <p className="max-w-[52ch] text-sm leading-relaxed text-charcoal/58">
              A cleaner route from request to outcome.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── HERO ─── */
export function HomepageHero() {
  return (
    <section
      id="hero"
      className="relative isolate flex w-full min-h-[100svh] flex-col items-center justify-center overflow-hidden bg-[#FAFAF8] md:min-h-screen"
    >
      {/* Content */}
      <div className="relative z-10 mx-auto flex w-[95%] max-w-6xl flex-col items-center px-6 pt-32 pb-20 text-center md:pt-40 md:pb-28">
        {/* Eyebrow */}
        <p className="font-jetbrains text-[10px] font-semibold uppercase tracking-[0.25em] text-charcoal/46">
          The Voice Operating Layer
        </p>

        {/* Headline — editorial scale */}
        <h1 className="mt-8 md:mt-10">
          <span className="block font-outfit text-5xl font-bold tracking-[-0.03em] text-ink md:text-7xl lg:text-8xl">
            One voice layer
          </span>
          <span className="mt-1 block type-display text-ink/80 md:mt-2">
            for the real world.
          </span>
        </h1>

        {/* Subcopy */}
        <p className="type-lead mx-auto mt-8 max-w-[48ch] text-charcoal/66 md:mt-9">
          Lola answers naturally, captures intent, and moves bookings, questions, and service requests into the right business flow — starting with restaurants and clinics.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 md:mt-11">
          <Link
            href="/restaurants"
            className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#E77F74]/26 bg-[linear-gradient(135deg,rgba(255,255,255,0.84)_0%,rgba(255,245,240,0.72)_100%)] px-7 py-3 text-sm font-semibold tracking-[0.04em] text-ink shadow-[inset_0_1px_0_rgba(255,255,255,0.72),0_8px_18px_rgba(45,34,17,0.05)] transition-[transform,box-shadow,border-color,background-color] duration-300 hover:-translate-y-0.5 hover:border-[#E77F74]/34 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.76),0_12px_24px_rgba(45,34,17,0.07)] active:translate-y-0 active:scale-[0.98]"
          >
            <span className="h-2 w-2 rounded-full bg-coral/60 transition-colors group-hover:bg-coral" />
            Explore Restaurants
          </Link>
          <Link
            href="/medical"
            className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full border px-7 py-3 text-sm font-semibold tracking-[0.04em] text-ink shadow-[inset_0_1px_0_rgba(255,255,255,0.72),0_8px_18px_rgba(45,34,17,0.05)] transition-[transform,box-shadow,border-color,background-color] duration-300 hover:-translate-y-0.5 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.76),0_12px_24px_rgba(45,34,17,0.07)] active:translate-y-0 active:scale-[0.98]"
            style={{
              borderColor: "rgba(141, 229, 213, 0.24)",
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.84) 0%, rgba(240,252,249,0.72) 100%)",
            }}
          >
            <span
              className="h-2 w-2 rounded-full transition-colors"
              style={{ backgroundColor: `${MEDICAL_MINT}99` }}
            />
            Explore Medical
          </Link>
        </div>

        {/* Tertiary */}
        <p className="mt-6 font-jetbrains text-[10px] uppercase tracking-[0.18em] text-charcoal/30">
          More verticals ahead. Same Lola.
        </p>

        <LolaLayerStage />
      </div>
    </section>
  );
}
