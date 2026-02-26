export function Hero() {
  return (
    <section id="hero" className="relative isolate flex w-full min-h-[100svh] items-end overflow-hidden bg-ink md:min-h-screen">
      <div className="absolute inset-0 z-0 bg-[#141420]" />

      <video
        className="absolute inset-0 z-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/video/hero-poster.jpg"
        aria-hidden="true"
      >
        <source src="/video/hero.webm" type="video/webm" />
        <source src="/video/hero.mp4" type="video/mp4" />
      </video>

      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-[#11111d]/78 via-[#1E1E2E]/58 to-[#1E1E2E]/66" />
      <div className="pointer-events-none absolute inset-0 z-[2] bg-[radial-gradient(120%_90%_at_50%_52%,transparent_56%,rgba(20,20,32,0.28)_78%,rgba(15,15,26,0.58)_100%)]" />
      <div className="pointer-events-none absolute inset-0 z-[3] bg-[radial-gradient(42%_36%_at_73%_68%,rgba(255,107,107,0.16)_0%,rgba(255,245,240,0.1)_36%,rgba(255,107,107,0.05)_58%,transparent_78%)]" />
      <div className="pointer-events-none absolute inset-0 z-[4] opacity-[0.035] mix-blend-soft-light bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.26)_0.6px,transparent_0.8px)] [background-size:4px_4px]" />

      <div className="relative z-10 mx-auto flex w-[95%] max-w-7xl px-6 pb-16 pt-28 md:pb-24">
        <div className="max-w-3xl text-peach">
          <h1 className="flex flex-col gap-2 md:gap-2.5">
            <span className="font-outfit text-4xl font-bold uppercase tracking-[0.18em] text-white drop-shadow-[0_3px_14px_rgba(8,8,14,0.45)] md:text-6xl lg:text-7xl">
              SEAMLESS SERVICE
            </span>
            <span className="font-playfair text-5xl italic leading-[1.04] text-[#ff9b92] drop-shadow-[0_5px_16px_rgba(8,8,14,0.42)] md:text-7xl lg:text-[6.5rem]">
              Starts with Lola
            </span>
          </h1>

          <div className="mt-8 flex flex-wrap items-center gap-4 md:mt-10 lg:mt-16">
            <a
              href="#pricing"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#ff6b6b]/55 bg-ink px-7 py-3 text-sm font-semibold tracking-[0.08em] text-peach shadow-[0_0_0_1px_rgba(255,107,107,0.2),0_10px_26px_rgba(255,82,82,0.2)] transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_0_1px_rgba(255,107,107,0.35),0_14px_34px_rgba(255,82,82,0.28)] active:translate-y-0 active:scale-[0.98] active:shadow-[0_0_0_1px_rgba(255,107,107,0.3),0_8px_20px_rgba(255,82,82,0.18)]"
            >
              Book Demo
            </a>
            <a
              href="#framework"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#fff5f0]/45 bg-[rgba(255,245,240,0.12)] px-7 py-3 text-sm font-medium tracking-[0.04em] text-peach shadow-[inset_0_1px_0_rgba(255,255,255,0.28),0_8px_20px_rgba(16,16,28,0.28)] backdrop-saturate-150 transition-transform duration-300 hover:-translate-y-0.5 hover:bg-[rgba(255,245,240,0.17)] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.34),0_12px_28px_rgba(16,16,28,0.34)] active:translate-y-0 active:scale-[0.98] active:shadow-[inset_0_1px_0_rgba(255,255,255,0.22),0_6px_16px_rgba(16,16,28,0.26)]"
            >
              See How It Works
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
