import Link from "next/link";

export function FinalCta() {
  return (
    <section
      id="final-cta"
      className="bg-[#F7F3EE] px-6 py-24 md:px-10 md:py-32"
    >
      <div className="mx-auto max-w-[78rem]">
        <div className="relative overflow-hidden rounded-[2.25rem] border border-[#161616]/7 bg-[linear-gradient(180deg,rgba(255,255,255,0.74),rgba(250,246,240,0.96))] px-6 py-10 shadow-[0_30px_90px_rgba(68,47,33,0.08),inset_0_1px_0_rgba(255,255,255,0.8)] md:px-10 md:py-14">
          <div className="pointer-events-none absolute -right-12 top-0 h-40 w-40 rounded-full bg-[#D96B4F]/10 blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 left-0 h-32 w-32 rounded-full bg-white/70 blur-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
            <div className="space-y-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#7E3F35]/72">
                Final CTA
              </p>
              <h2 className="max-w-[11ch] text-4xl font-semibold tracking-[-0.05em] text-[#161616] md:text-5xl">
                Start with a homepage review.
              </h2>
              <p className="max-w-[39rem] text-base leading-8 text-[#2A2A2A]/72 md:text-lg">
                Send over the current site and get a clear view of what should
                be reworked first, where leads are being lost, and what a
                sharper front could look like.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="#hero"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#D96B4F]/24 bg-[linear-gradient(135deg,rgba(255,255,255,0.86)_0%,rgba(245,236,230,0.94)_100%)] px-6 py-3 text-sm font-semibold tracking-[0.04em] text-[#161616] shadow-[inset_0_1px_0_rgba(255,255,255,0.78),0_12px_28px_rgba(90,60,42,0.09)] transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-0.5 hover:border-[#D96B4F]/34"
              >
                Get a homepage review
              </Link>
              <Link
                href="#before-after-showcase"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#161616]/10 bg-white/56 px-6 py-3 text-sm font-semibold tracking-[0.04em] text-[#161616] shadow-[inset_0_1px_0_rgba(255,255,255,0.62),0_10px_24px_rgba(90,60,42,0.05)] transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-0.5 hover:border-[#161616]/16"
              >
                See a rework example
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
