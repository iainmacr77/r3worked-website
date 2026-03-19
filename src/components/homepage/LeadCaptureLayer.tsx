import { HomepageSectionShell } from "@/components/homepage/HomepageSectionShell";

const FLOW_STEPS = [
  "Quote or enquiry form submitted",
  "Acknowledgement email sent to the lead",
  "Client notification delivered instantly",
  "Lead logged into a simple visible record",
];

export function LeadCaptureLayer() {
  return (
    <HomepageSectionShell
      id="lead-capture-layer"
      eyebrow="Behind the scenes"
      title="Lead handling layer placeholder."
      description="This section is held for the operational story: how R3WORKED connects the visible website front to cleaner submissions, instant responses, and simple lead logging."
      dark
    >
      <div className="grid gap-5 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]">
        <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] md:p-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#F7F3EE]/48">
            Planned flow
          </p>
          <div className="mt-6 space-y-3">
            {FLOW_STEPS.map((step, index) => (
              <div
                key={step}
                className="grid grid-cols-[auto_1fr] gap-4 rounded-[1.25rem] border border-white/8 bg-white/[0.03] px-4 py-4"
              >
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#D96B4F]/88">
                  0{index + 1}
                </span>
                <p className="text-sm leading-7 text-[#F7F3EE]/74">{step}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(217,107,79,0.14),transparent_38%),linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-6 shadow-[0_22px_60px_rgba(0,0,0,0.18),inset_0_1px_0_rgba(255,255,255,0.08)] md:p-8">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-[1.4rem] border border-white/8 bg-black/10 p-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#F7F3EE]/42">
                Lead
              </p>
              <p className="mt-8 text-sm leading-7 text-[#F7F3EE]/70">
                Thank-you and next-step acknowledgement.
              </p>
            </div>
            <div className="rounded-[1.4rem] border border-white/8 bg-black/10 p-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#F7F3EE]/42">
                Client
              </p>
              <p className="mt-8 text-sm leading-7 text-[#F7F3EE]/70">
                Clean alert with the details that matter.
              </p>
            </div>
            <div className="rounded-[1.4rem] border border-white/8 bg-black/10 p-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#F7F3EE]/42">
                Record
              </p>
              <p className="mt-8 text-sm leading-7 text-[#F7F3EE]/70">
                Simple visible logging for day-one clarity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </HomepageSectionShell>
  );
}
