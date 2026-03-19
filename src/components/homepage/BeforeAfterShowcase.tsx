import { HomepageSectionShell } from "@/components/homepage/HomepageSectionShell";

const BEFORE_AFTER_POINTS = [
  "Clear before/after comparison surface",
  "Commercial rationale beside the visual shift",
  "Proof that the uplift is more than cosmetic",
];

export function BeforeAfterShowcase() {
  return (
    <HomepageSectionShell
      id="before-after-showcase"
      eyebrow="Before / After showcase"
      title="Rework examples are coming next."
      description="This section is reserved for side-by-side homepage rework comparisons that show what changed, why it changed, and how the commercial front improved."
      className="bg-[#FCFAF6]"
    >
      <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_22rem]">
        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-[2rem] border border-[#161616]/7 bg-[#E7DED2]/45 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.35)] md:p-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#2A2A2A]/46">
              Before
            </p>
            <div className="mt-6 h-[22rem] rounded-[1.4rem] border border-dashed border-[#161616]/12 bg-white/45" />
          </div>

          <div className="rounded-[2rem] border border-[#161616]/7 bg-[linear-gradient(180deg,rgba(255,255,255,0.7),rgba(251,248,243,0.95))] p-6 shadow-[0_18px_48px_rgba(68,47,33,0.05),inset_0_1px_0_rgba(255,255,255,0.76)] md:p-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#7E3F35]/76">
              After
            </p>
            <div className="mt-6 h-[22rem] rounded-[1.4rem] border border-dashed border-[#D96B4F]/18 bg-white/70" />
          </div>
        </div>

        <aside className="rounded-[2rem] border border-[#161616]/7 bg-white/58 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.74)] md:p-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#7E3F35]/72">
            Planned content
          </p>
          <div className="mt-6 space-y-4">
            {BEFORE_AFTER_POINTS.map((point) => (
              <div
                key={point}
                className="rounded-[1.2rem] border border-[#161616]/7 px-4 py-4 text-sm leading-7 text-[#2A2A2A]/70"
              >
                {point}
              </div>
            ))}
          </div>
        </aside>
      </div>
    </HomepageSectionShell>
  );
}
