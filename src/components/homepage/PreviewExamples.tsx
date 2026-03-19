import { HomepageSectionShell } from "@/components/homepage/HomepageSectionShell";

const PREVIEW_CARDS = [
  "Roofing company homepage rework concept",
  "Trust signal and CTA restructuring concept",
  "Quote-path cleanup and mobile-first concept",
];

export function PreviewExamples() {
  return (
    <HomepageSectionShell
      id="preview-examples"
      eyebrow="Concept previews"
      title="Preview examples section placeholder."
      description="This section is reserved for polished concept mock-ups that show how R3WORKED can reframe an existing service-business homepage before a full build begins."
      className="bg-[#FCFAF6]"
    >
      <div className="grid gap-5 md:grid-cols-3">
        {PREVIEW_CARDS.map((card) => (
          <article
            key={card}
            className="rounded-[2rem] border border-[#161616]/7 bg-[linear-gradient(180deg,rgba(255,255,255,0.74),rgba(251,248,243,0.96))] p-6 shadow-[0_18px_48px_rgba(68,47,33,0.05),inset_0_1px_0_rgba(255,255,255,0.74)] md:p-8"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#7E3F35]/72">
              Preview slot
            </p>
            <div className="mt-6 h-[18rem] rounded-[1.5rem] border border-dashed border-[#161616]/10 bg-[#E7DED2]/26" />
            <p className="mt-6 max-w-[22ch] text-base leading-8 text-[#2A2A2A]/70">
              {card}
            </p>
          </article>
        ))}
      </div>
    </HomepageSectionShell>
  );
}
