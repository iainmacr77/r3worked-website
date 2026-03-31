import { cn } from "@/lib/utils";

type RiversidePlumbingAfterFullPreviewProps = {
  className?: string;
};

export function RiversidePlumbingAfterFullPreview({
  className,
}: RiversidePlumbingAfterFullPreviewProps) {
  return (
    <div
      className={cn("w-full overflow-hidden bg-white text-slate-900", className)}
      style={{
        fontFamily:
          'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      }}
    >
      <header className="sticky top-0 z-20 border-b border-slate-100 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-screen-2xl items-center justify-between px-8 py-6">
          <div className="text-2xl font-black tracking-tight text-slate-950">
            Riverside<span className="text-emerald-600">.</span>
          </div>
          <nav
            className="hidden items-center gap-10 md:flex"
            aria-label="Riverside Plumbing navigation"
          >
            {["Services", "Areas", "Pricing", "Reviews"].map((label) => (
              <span key={label} className="font-semibold text-slate-600">
                {label}
              </span>
            ))}
          </nav>
          <div className="flex items-center gap-6">
            <span className="hidden font-bold tracking-tight text-slate-900 lg:block">
              0208 123 0000
            </span>
            <span className="rounded-full bg-slate-950 px-6 py-3 text-xs font-black uppercase tracking-[0.18em] text-white shadow-sm">
              Get a quote
            </span>
          </div>
        </div>
      </header>

      <main>
        <section className="px-8 pb-10 pt-10 md:pt-14">
          <div className="mx-auto grid max-w-screen-2xl grid-cols-1 items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-emerald-600">
                London plumbers • fast response
              </p>
              <h1 className="mt-6 text-5xl font-black leading-[1.05] tracking-tight text-slate-950 md:text-6xl">
                Easy to enquire.
                <br />
                Easy to quote.
              </h1>
              <p className="mt-6 max-w-xl text-xl leading-relaxed text-slate-600">
                Clear pricing, tidy work, and a quote form that captures what
                matters first time.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <span className="rounded-full bg-emerald-600 px-8 py-4 text-xs font-black uppercase tracking-[0.18em] text-white shadow-[0_18px_44px_rgba(16,185,129,0.18)]">
                  Request a quote
                </span>
                <span className="rounded-full border border-slate-200 bg-white px-8 py-4 text-xs font-black uppercase tracking-[0.18em] text-slate-700">
                  See services
                </span>
              </div>

              <div className="mt-12 flex flex-wrap gap-8 text-[11px] font-black uppercase tracking-[0.22em] text-slate-500">
                {["Gas Safe partners", "Insured", "Same‑week slots"].map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-slate-100 bg-white p-10 shadow-2xl">
              <div className="mb-7 flex items-end justify-between gap-6">
                <div>
                  <span className="text-xs font-black uppercase tracking-[0.22em] text-slate-400">
                    Quote request
                  </span>
                  <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-950">
                    Quick quote form
                  </h2>
                </div>
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                  ~2 mins
                </span>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <Field label="Name" value="Aisha K." />
                  <div className="space-y-3">
                    <Label>Contact preference</Label>
                    <div className="flex flex-wrap gap-2">
                      <Pill active>Call</Pill>
                      <Pill>Email</Pill>
                      <Pill>WhatsApp</Pill>
                    </div>
                  </div>
                </div>

                <Field label="Phone number" value="07xxx xxxxxx" />

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <Select
                    label="Job type"
                    value="Boiler repair"
                    options={["Boiler repair", "Leak", "Bathroom", "Blocked drain"]}
                  />
                  <Field label="Postcode" value="SW11 2XX" />
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <Upload label="Upload photos" helper="Optional, speeds up quoting." />
                  <Textarea
                    label="Short description"
                    value="Boiler losing pressure. Not urgent, but want a quote this week."
                  />
                </div>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <span className="inline-flex w-full items-center justify-center rounded-full bg-slate-950 px-8 py-4 text-xs font-black uppercase tracking-[0.18em] text-white shadow-sm sm:w-auto">
                    Request quote
                  </span>
                  <p className="text-xs leading-relaxed text-slate-500">
                    We reply within 1 business day.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function Label({ children }: { children: string }) {
  return (
    <label className="text-xs font-black uppercase tracking-widest text-slate-400">
      {children}
    </label>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div className="space-y-3">
      <Label>{label}</Label>
      <div className="w-full border-0 border-b-2 border-slate-200 bg-slate-50 p-4 font-semibold text-slate-950">
        {value}
      </div>
    </div>
  );
}

function Select({
  label,
  value,
  options,
}: {
  label: string;
  value: string;
  options: string[];
}) {
  return (
    <div className="space-y-3">
      <Label>{label}</Label>
      <div className="flex items-center justify-between border-0 border-b-2 border-slate-200 bg-slate-50 p-4 font-semibold text-slate-950">
        <span>{value ?? options[0]}</span>
        <span className="text-slate-400" aria-hidden="true">
          ▾
        </span>
      </div>
    </div>
  );
}

function Textarea({ label, value }: { label: string; value: string }) {
  return (
    <div className="space-y-3">
      <Label>{label}</Label>
      <div className="min-h-[96px] w-full border-0 border-b-2 border-slate-200 bg-slate-50 p-4 font-semibold text-slate-950">
        <span className="text-slate-700">{value}</span>
      </div>
    </div>
  );
}

function Upload({ label, helper }: { label: string; helper: string }) {
  return (
    <div className="space-y-3">
      <Label>{label}</Label>
      <div className="flex min-h-[96px] items-center justify-center rounded-lg border border-dashed border-slate-200 bg-white p-4 text-center">
        <div>
          <p className="text-sm font-semibold text-slate-600">Drag or tap to add</p>
          <p className="mt-1 text-xs text-slate-500">{helper}</p>
        </div>
      </div>
    </div>
  );
}

function Pill({ children, active }: { children: string; active?: boolean }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1.5 text-[11px] font-black uppercase tracking-[0.18em]",
        active
          ? "border-slate-950/18 bg-slate-950 text-white shadow-[0_10px_22px_rgba(15,23,42,0.12)]"
          : "border-slate-200 bg-white text-slate-600"
      )}
    >
      {children}
    </span>
  );
}

