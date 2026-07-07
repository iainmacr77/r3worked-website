import { HomepageFooter } from "@/components/homepage/HomepageFooter";
import { HomepageNavbar } from "@/components/homepage/HomepageNavbar";

export type LegalSection = {
  heading: string;
  body: React.ReactNode;
};

export function LegalPage({
  eyebrow,
  title,
  updated,
  intro,
  sections,
}: {
  eyebrow: string;
  title: string;
  updated: string;
  intro?: React.ReactNode;
  sections: LegalSection[];
}) {
  return (
    <main className="flex min-h-screen w-full flex-col bg-[#F5F2EA] text-[#161616]">
      <HomepageNavbar />

      <section className="w-full px-6 pb-24 pt-32 md:px-10 md:pb-32 md:pt-40">
        <div className="mx-auto max-w-[46rem]">
          <p className="type-eyebrow inline-flex rounded-full border border-[#D96B4F]/20 bg-[#D96B4F]/5 px-4 py-1.5 text-[#B86B5C]">
            {eyebrow}
          </p>
          <h1 className="mt-6 type-section-heading-serif text-[#161616]">
            {title}
          </h1>
          <p className="mt-4 text-sm text-[#2A2A2A]/50">
            Last updated {updated}
          </p>

          {intro ? (
            <div className="type-body-sm mt-8 text-[#2A2A2A]/75">{intro}</div>
          ) : null}

          <div className="mt-14 flex flex-col gap-12">
            {sections.map((section) => (
              <div key={section.heading}>
                <h2 className="text-[1.15rem] font-semibold text-[#161616]">
                  {section.heading}
                </h2>
                <div className="type-body-sm mt-3 flex flex-col gap-3 text-[#2A2A2A]/75">
                  {section.body}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <HomepageFooter />
    </main>
  );
}
