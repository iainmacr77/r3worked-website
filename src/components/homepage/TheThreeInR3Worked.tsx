const THREE_LAYERS = [
  {
    label: "01",
    title: "Website uplift",
    body: "Sharper hierarchy, cleaner trust signals, and a stronger first impression.",
  },
  {
    label: "02",
    title: "Lead capture",
    body: "Better quote paths, clearer forms, and fewer missed enquiries.",
  },
  {
    label: "03",
    title: "Smarter follow-up",
    body: "Instant acknowledgements, client alerts, and cleaner lead handling behind the scenes.",
  },
];

export function TheThreeInR3Worked() {
  return (
    <section
      id="the-3"
      className="bg-[#F7F3EE] px-6 py-24 md:px-10 md:py-32"
    >
      <div className="mx-auto flex max-w-[78rem] flex-col gap-12">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-end">
          <div className="space-y-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#7E3F35]/72">
              The 3 in the name
            </p>
            <h2 className="max-w-[10ch] text-4xl font-semibold tracking-[-0.05em] text-[#161616] md:text-5xl">
              The 3 in R3WORKED.
            </h2>
          </div>

          <p className="max-w-[40rem] text-base leading-8 text-[#2A2A2A]/72 md:text-lg">
            Three practical layers. One sharper commercial front.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {THREE_LAYERS.map((layer) => (
            <article
              key={layer.label}
              className="group relative overflow-hidden rounded-[1.9rem] border border-[#161616]/7 bg-[linear-gradient(180deg,rgba(255,255,255,0.72),rgba(251,248,243,0.94))] p-7 shadow-[0_18px_48px_rgba(68,47,33,0.05),inset_0_1px_0_rgba(255,255,255,0.72)] transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-[#161616]/10 hover:shadow-[0_24px_60px_rgba(68,47,33,0.08),inset_0_1px_0_rgba(255,255,255,0.78)] md:p-8"
            >
              <div className="absolute inset-x-7 top-0 h-px bg-[linear-gradient(90deg,rgba(217,107,79,0.42),rgba(217,107,79,0))] md:inset-x-8" />
              <div className="flex h-full flex-col">
                <div className="flex items-center justify-between gap-4 border-b border-[#161616]/7 pb-6">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#7E3F35]/76">
                    {layer.label}
                  </span>
                  <span className="h-2 w-2 rounded-full bg-[#D96B4F]/70" />
                </div>

                <div className="flex flex-1 flex-col pt-7">
                  <h3 className="max-w-[12ch] text-[1.7rem] font-semibold tracking-[-0.04em] text-[#161616]">
                    {layer.title}
                  </h3>
                  <p className="mt-6 max-w-[28ch] text-base leading-8 text-[#2A2A2A]/70">
                    {layer.body}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
