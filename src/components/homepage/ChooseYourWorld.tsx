import Link from "next/link";
import { ArrowRight } from "lucide-react";

const SECTIONS = [
  {
    name: "Restaurants",
    href: "/restaurants",
    eyebrow: "Restaurants",
    title: "Bookings caught. Service protected.",
    description:
      "Lola handles bookings and changes without pulling the floor back into phone duty.",
    accentDot: "bg-coral",
    accentText: "text-[#E77F74]",
    ctaLabel: "Explore Restaurants",
  },
  {
    name: "Medical",
    href: "/medical",
    eyebrow: "Medical",
    title: "Reception lighter. Boundary intact.",
    description:
      "Routine admin demand moves cleanly, while anything clinical stays clearly with staff.",
    accentDot: "bg-[#8DE5D5]",
    accentText: "text-[#74D8C5]",
    ctaLabel: "Explore Medical",
  },
];

export function ChooseYourWorld() {
  return (
    <section className="w-full bg-[#FAFAF8] px-6 py-24 md:px-16 md:py-32">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="font-jetbrains text-[10px] font-semibold uppercase tracking-[0.22em] text-charcoal/42">
            Live today
          </p>
          <h2 className="type-h2-serif mt-4 text-ink">
            Where Lola is already working.
          </h2>
          <p className="mx-auto mt-5 max-w-[40ch] text-sm leading-relaxed text-charcoal/56 md:text-[15px]">
            Two live operating environments, one shared voice layer.
          </p>
        </div>

        <div className="border-y border-black/8 lg:grid lg:grid-cols-2">
          {SECTIONS.map((section) => {
            const content = (
              <article
                className="group relative flex h-full flex-col bg-transparent px-0 py-9 transition-colors duration-300 hover:bg-[#F7F5F0] md:py-11 lg:px-9"
              >
                <div className="flex h-full flex-col">
                  <div className="flex items-center gap-3">
                    <span className={`h-2.5 w-2.5 rounded-full ${section.accentDot}`} />
                    <span className="h-px w-12 bg-black/12 transition-colors duration-300 group-hover:bg-black/18" />
                  </div>
                  <p className={`font-jetbrains text-[10px] font-semibold uppercase tracking-[0.18em] ${section.accentText}`}>
                    <span className="sr-only">{section.name}</span>
                    <span className="mt-4 inline-block">{section.eyebrow}</span>
                  </p>
                  <h3 className="mt-5 max-w-[13ch] text-[1.95rem] font-semibold tracking-[-0.035em] text-ink md:text-[2.12rem]">
                    {section.title}
                  </h3>
                  <p className="mt-3.5 max-w-[31ch] text-sm leading-relaxed text-charcoal/60 md:text-[15px]">
                    {section.description}
                  </p>

                  <div className="mt-auto pt-12">
                    <div className="h-px bg-[linear-gradient(90deg,rgba(30,30,46,0.14),rgba(30,30,46,0.03))] opacity-80 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>

                  <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-ink">
                    <span>{section.ctaLabel}</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </div>
                </div>
              </article>
            );

            return (
              <Link
                key={section.name}
                href={section.href}
                className="block border-t border-black/8 first:border-t-0 lg:border-t-0 lg:border-l lg:first:border-l-0 lg:border-black/8"
              >
                {content}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
