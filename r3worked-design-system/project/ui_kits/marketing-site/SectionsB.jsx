import React from "react";

/* Before/After showcase (simplified), enquiry capture, lead capture dispatch
   board, pricing, final CTA and footer — recreated from the corresponding
   src/components/homepage/*.tsx files. */

export function BeforeAfter({ SegmentedToggle }) {
  const [tab, setTab] = React.useState("after");
  return (
    <section style={{ background: "var(--r3-porcelain)", padding: "80px 40px 56px" }}>
      <div style={{ maxWidth: 1344, margin: "0 auto" }}>
        <p className="type-eyebrow" style={{ color: "#B86B5C", margin: 0 }}>BEFORE / AFTER</p>
        <h2 className="type-h2" style={{ marginTop: 24 }}>From dated and unclear<br />to sharp and credible.</h2>
        <p className="type-support" style={{ marginTop: 24, maxWidth: "38rem", color: "rgba(42,42,42,0.8)" }}>
          Same business. Better structure, better trust, and a homepage that gives people a stronger reason to stay and enquire.
        </p>

        <div style={{ marginTop: 40, borderRadius: 24, overflow: "hidden", border: "1px solid rgba(22,22,22,0.1)", boxShadow: "0 24px 64px rgba(22,22,22,0.1)", position: "relative", aspectRatio: "21/9", background: "#fff" }}>
          <img
            src="../../assets/imagery/collins-after-hero.webp"
            alt="Collins Construction — rebuilt homepage"
            style={{ width: "100%", height: "100%", objectFit: "cover", opacity: tab === "after" ? 1 : 0.28, filter: tab === "after" ? "none" : "grayscale(1)", transition: "opacity 500ms ease, filter 500ms ease" }}
          />
          <div style={{ position: "absolute", left: 20, top: 20, borderRadius: 999, border: "1px solid rgba(22,22,22,0.18)", background: "rgba(255,255,255,0.88)", padding: "8px 16px", fontSize: 11, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase" }}>
            {tab === "after" ? "R3WORKED site" : "Pre-R3WORKED site"}
          </div>
        </div>

        <div style={{ marginTop: 32, display: "flex", justifyContent: "center" }}>
          <SegmentedToggle value={tab} onChange={setTab} options={[{ value: "before", label: "Before" }, { value: "after", label: "After" }]} />
        </div>
      </div>
    </section>
  );
}

const CAPTURE_STEPS = [
  { icon: "mouse-pointer-click", n: "01", title: "Clear CTA placement", desc: "Prominent, intentional buttons placed where buying intent peaks." },
  { icon: "route", n: "02", title: "Shorter path to quote", desc: "Fewer clicks between interest and submission. No buried forms, no dead ends." },
  { icon: "clipboard-list", n: "03", title: "Better enquiry detail", desc: "Structured fields that capture what matters — project type, location, photos." },
  { icon: "user-check", n: "04", title: "Serious leads guided through", desc: "A qualifying flow that separates tyre-kickers from real prospects." },
];

export function EnquiryCapture({ Icon, SectionHeading }) {
  return (
    <section style={{ background: "var(--r3-ink)", padding: "88px 40px" }}>
      <div style={{ maxWidth: 1344, margin: "0 auto" }}>
        <div style={{ marginBottom: 64, maxWidth: 768 }}>
          <SectionHeading dark eyebrow="Phase 02" title="A clearer path to enquiry." description="We structure your website pages, calls-to-action and form flow so serious prospects know exactly what to do next." />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 64 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 36 }}>
            {CAPTURE_STEPS.map((s) => (
              <div key={s.n} style={{ display: "flex", gap: 16 }}>
                <div style={{ width: 36, height: 36, borderRadius: 12, border: "1px solid rgba(217,107,79,0.15)", background: "rgba(217,107,79,0.08)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Icon name={s.icon} size={16} color="var(--r3-coral)" />
                </div>
                <div>
                  <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                    <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.2em", color: "rgba(217,107,79,0.5)" }}>{s.n}</span>
                    <h3 style={{ margin: 0, fontSize: "1.05rem", fontWeight: 600, color: "var(--r3-porcelain)" }}>{s.title}</h3>
                  </div>
                  <p style={{ margin: "6px 0 0", fontSize: "0.85rem", color: "rgba(247,243,238,0.55)", maxWidth: "26rem" }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ borderRadius: 16, overflow: "hidden", border: "1px solid var(--r3-ink)", boxShadow: "6px 6px 0px #B86B5C", background: "var(--r3-porcelain)", padding: 28 }}>
            <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.2em", color: "rgba(217,107,79,0.6)" }}>Collins Construction</span>
            <h4 style={{ margin: "6px 0 0", fontSize: "1.6rem", fontWeight: 700, color: "var(--r3-ink)" }}>Quality work,<br /><span style={{ color: "var(--r3-coral)" }}>properly quoted.</span></h4>
            <p style={{ margin: "12px 0 20px", fontSize: "0.78rem", color: "rgba(22,22,22,0.45)", maxWidth: "28ch" }}>Trusted local builders serving Greater Manchester. Free site visits, honest pricing.</p>
            <div style={{ borderTop: "1px solid rgba(22,22,22,0.08)", paddingTop: 20, display: "flex", gap: 12 }}>
              <div style={{ flex: 1, borderRadius: 999, background: "var(--r3-coral)", color: "#fff", padding: "10px 20px", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", textAlign: "center" }}>Send Enquiry</div>
              <div style={{ flex: 1, borderRadius: 999, border: "1px solid rgba(22,22,22,0.12)", padding: "10px 20px", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", textAlign: "center", color: "rgba(22,22,22,0.55)" }}>Call Now</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const OUTCOMES = [
  { icon: "send", label: "Confirmation sent", detail: "Prospect acknowledged" },
  { icon: "bell", label: "Client alerted", detail: "Notification delivered" },
  { icon: "clipboard-check", label: "Lead recorded", detail: "Logged and structured" },
  { icon: "arrow-right", label: "Follow-up ready", detail: "Next action visible" },
];

export function LeadCapture({ Icon, SectionHeading, SurfaceCard }) {
  return (
    <section style={{ background: "var(--r3-porcelain)", padding: "88px 40px" }}>
      <div style={{ maxWidth: 1344, margin: "0 auto" }}>
        <div style={{ marginBottom: 64, maxWidth: 768 }}>
          <SectionHeading eyebrow="Phase 03" title="From enquiry to organised action." description="Once an enquiry comes in, we confirm receipt, notify the client, log the lead cleanly and create a more reliable path to booked work." />
        </div>
        <div style={{ borderRadius: 16, background: "linear-gradient(135deg, #EDE7DD, #E2D8CA)", border: "1px solid rgba(22,22,22,0.06)", padding: 28, maxWidth: 640, margin: "0 auto" }}>
          <SurfaceCard style={{ marginBottom: 16 }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                <div style={{ width: 34, height: 34, borderRadius: "50%", background: "rgba(217,107,79,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Icon name="user" size={15} color="var(--r3-coral)" />
                </div>
                <div>
                  <span style={{ display: "block", fontSize: "0.84rem", fontWeight: 600 }}>New Enquiry</span>
                  <span style={{ fontSize: "0.68rem", color: "rgba(22,22,22,0.35)" }}>Just now</span>
                </div>
              </div>
              <span style={{ borderRadius: 999, background: "rgba(217,107,79,0.08)", border: "1px solid rgba(217,107,79,0.12)", padding: "4px 10px", fontSize: "0.58rem", fontWeight: 700, textTransform: "uppercase", color: "var(--r3-coral)" }}>Received</span>
            </div>
          </SurfaceCard>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            {OUTCOMES.map((o) => (
              <SurfaceCard key={o.label} tight>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                  <div style={{ width: 26, height: 26, borderRadius: 8, background: "rgba(217,107,79,0.06)", border: "1px solid rgba(217,107,79,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Icon name={o.icon} size={13} color="var(--r3-coral)" />
                  </div>
                  <div style={{ width: 16, height: 16, borderRadius: "50%", background: "rgba(46,125,91,0.12)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Icon name="check" size={9} color="var(--r3-status-live)" strokeWidth={3} />
                  </div>
                </div>
                <p style={{ margin: 0, fontSize: "0.78rem", fontWeight: 600 }}>{o.label}</p>
                <p style={{ margin: "2px 0 0", fontSize: "0.66rem", color: "rgba(22,22,22,0.4)" }}>{o.detail}</p>
              </SurfaceCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const PRIMARY_INCLUSIONS = ["Homepage-led rebuild with up to 5 key pages", "Copy refinement and structure cleanup", "Mobile optimisation", "CTA and form conversion improvements", "Enquiry capture setup", "SEO fundamentals"];

export function Pricing({ Button }) {
  return (
    <section style={{ background: "var(--r3-porcelain)", padding: "88px 40px" }}>
      <div style={{ maxWidth: 1344, margin: "0 auto" }}>
        <p className="type-eyebrow" style={{ color: "#B86B5C", margin: 0 }}>The Offer</p>
        <h2 className="type-h2" style={{ marginTop: 24, marginBottom: 40 }}>Clear pricing. No agency theatre.</h2>
        <div style={{ borderRadius: 28, background: "var(--r3-ink)", padding: 56, boxShadow: "6px 6px 0px #B86B5C", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", bottom: -32, right: -8, fontSize: "12rem", fontWeight: 700, color: "rgba(247,243,238,0.02)", letterSpacing: "-0.06em" }}>R3</div>
          <div style={{ position: "relative", display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 56 }}>
            <div>
              <span className="type-eyebrow" style={{ color: "var(--r3-coral)" }}>Website Rebuild</span>
              <p style={{ margin: "24px 0 0", fontSize: "5rem", fontWeight: 700, color: "var(--r3-porcelain)", letterSpacing: "-0.04em", lineHeight: 0.9 }}>
                <span style={{ color: "var(--r3-coral)" }}>£</span>1,250
              </p>
              <span style={{ display: "block", marginTop: 12, fontSize: "0.72rem", fontWeight: 700, color: "rgba(247,243,238,0.3)", textTransform: "uppercase", letterSpacing: "0.18em" }}>one-off</span>
              <p style={{ margin: "32px 0", fontSize: "0.9rem", color: "rgba(247,243,238,0.5)", maxWidth: "30rem" }}>A homepage-led commercial rebuild designed to make your business look better, capture enquiries better, and convert more serious prospects.</p>
              <Button variant="accent" iconRight="arrow-right">Start your rebuild</Button>
            </div>
            <div>
              <span style={{ display: "block", marginBottom: 24, fontSize: "0.62rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.2em", color: "rgba(247,243,238,0.2)" }}>What's included</span>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                {PRIMARY_INCLUSIONS.map((i) => (
                  <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                    <div style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--r3-coral)", marginTop: 8, flexShrink: 0 }} />
                    <span style={{ fontSize: "0.88rem", color: "rgba(247,243,238,0.65)" }}>{i}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FinalCta({ Button }) {
  return (
    <section style={{ background: "var(--r3-porcelain)", padding: "88px 40px" }}>
      <div style={{ maxWidth: 1344, margin: "0 auto", borderRadius: 40, background: "var(--r3-ink)", padding: "72px 48px", textAlign: "center" }}>
        <span className="type-eyebrow" style={{ display: "inline-flex", color: "var(--r3-coral)", padding: "6px 16px", borderRadius: 999, border: "1px solid rgba(217,107,79,0.2)", background: "rgba(217,107,79,0.05)" }}>Lead Rescue Review</span>
        <h2 className="type-h2" style={{ color: "var(--r3-porcelain)", margin: "24px auto", maxWidth: "20ch" }}>Find out where enquiries are leaking.</h2>
        <p className="type-support" style={{ color: "rgba(247,243,238,0.7)", maxWidth: "36rem", margin: "0 auto 40px" }}>Send your current site and contact flow. We'll show where leads are being lost and what R3WORKED should catch first.</p>
        <div style={{ display: "flex", gap: 16, justifyContent: "center" }}>
          <Button variant="ghost">Start Lead Rescue review</Button>
          <Button variant="ghost-dark">Contact R3WORKED</Button>
        </div>
      </div>
    </section>
  );
}

export function Footer({ Wordmark }) {
  return (
    <footer style={{ borderTop: "1px solid rgba(22,22,22,0.06)", background: "var(--r3-porcelain)", padding: "72px 40px 32px" }}>
      <div style={{ maxWidth: 1248 }}>
        <Wordmark size="1.4rem" />
        <p style={{ marginTop: 16, maxWidth: 480, fontSize: "1rem", lineHeight: 2, color: "rgba(42,42,42,0.72)" }}>
          Lead rescue for trades and local service businesses — capturing website enquiries, follow-ups and reviews in one cleaner system, with missed-call rescue coming soon.
        </p>
        <div style={{ marginTop: 48, paddingTop: 24, borderTop: "1px solid rgba(22,22,22,0.06)", display: "flex", justifyContent: "space-between", fontSize: 11, textTransform: "uppercase", letterSpacing: "0.16em", color: "rgba(42,42,42,0.44)" }}>
          <span>© 2026 R3WORKED</span>
          <span>R3WORKED is a trading name of Auric Consulting Limited.</span>
        </div>
      </div>
    </footer>
  );
}
