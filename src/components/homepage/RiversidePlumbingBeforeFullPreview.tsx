import { cn } from "@/lib/utils";

type RiversidePlumbingBeforeFullPreviewProps = {
  className?: string;
};

export function RiversidePlumbingBeforeFullPreview({
  className,
}: RiversidePlumbingBeforeFullPreviewProps) {
  return (
    <div
      className={cn("w-full overflow-hidden bg-white text-[#111827]", className)}
      style={{
        fontFamily:
          'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      }}
    >
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-8 py-5">
          <div className="text-xl font-extrabold uppercase tracking-tight text-slate-800">
            Riverside Plumbing
          </div>
          <div className="flex items-center gap-6">
            <span className="hidden text-sm font-semibold text-slate-600 md:inline">
              Call: 0208 123 0000
            </span>
            <span className="rounded bg-slate-800 px-5 py-2 text-xs font-bold uppercase tracking-widest text-white">
              Contact
            </span>
          </div>
        </div>
      </header>

      <main>
        <section className="bg-slate-50 px-8 py-14">
          <div className="mx-auto max-w-6xl">
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
              Plumbers in London
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-600">
              We do all plumbing jobs. Fast service. Competitive prices. Call now
              for a quote.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded bg-slate-800 px-6 py-3 text-xs font-bold uppercase tracking-widest text-white">
                Get a quote
              </span>
              <span className="rounded border border-slate-300 bg-white px-6 py-3 text-xs font-bold uppercase tracking-widest text-slate-700">
                Our services
              </span>
            </div>
          </div>
        </section>

        <section className="bg-white px-8 py-16">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-extrabold text-slate-900">
                Get in touch
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Fill out the form and we will get back to you as soon as possible.
              </p>
              <div className="mt-8 space-y-4 border border-slate-200 bg-slate-50 p-6">
                <div>
                  <p className="mb-1 text-xs font-bold uppercase tracking-widest text-slate-500">
                    Name
                  </p>
                  <div className="border border-slate-300 bg-white p-3 text-sm text-slate-400">
                    Your name
                  </div>
                </div>
                <div>
                  <p className="mb-1 text-xs font-bold uppercase tracking-widest text-slate-500">
                    Email
                  </p>
                  <div className="border border-slate-300 bg-white p-3 text-sm text-slate-400">
                    you@example.com
                  </div>
                </div>
                <div>
                  <p className="mb-1 text-xs font-bold uppercase tracking-widest text-slate-500">
                    Phone
                  </p>
                  <div className="border border-slate-300 bg-white p-3 text-sm text-slate-400">
                    07xxx xxxxxx
                  </div>
                </div>
                <div>
                  <p className="mb-1 text-xs font-bold uppercase tracking-widest text-slate-500">
                    Message
                  </p>
                  <div className="min-h-[140px] border border-slate-300 bg-white p-3 text-sm text-slate-400">
                    Please type your message here...
                  </div>
                </div>
                <div className="rounded bg-slate-800 px-5 py-3 text-center text-xs font-bold uppercase tracking-widest text-white">
                  Send
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="border border-slate-200 bg-white p-8">
                <h3 className="text-lg font-extrabold text-slate-900">
                  Services
                </h3>
                <ul className="mt-4 space-y-2 text-sm text-slate-600">
                  <li>- Boiler repairs</li>
                  <li>- Leaks</li>
                  <li>- Bathroom installs</li>
                  <li>- Blocked drains</li>
                  <li>- Emergency callouts</li>
                </ul>
              </div>
              <div className="border border-slate-200 bg-white p-8">
                <h3 className="text-lg font-extrabold text-slate-900">
                  Coverage
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  Serving London and surrounding areas.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

