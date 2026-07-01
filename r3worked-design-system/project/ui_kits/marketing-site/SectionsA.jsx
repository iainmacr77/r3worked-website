import React from "react";

/* Nav + current (production) hero + trust ticker — recreated from
   src/components/homepage/{HomepageNavbar,HomepageHero,TrustTicker}.tsx */

const NAV_LINKS = ["Lead Rescue", "Website Uplift", "Pricing", "Contact"];

export function Nav({ Wordmark, Button }) {
  return (
    <header style={{ position: "sticky", top: 0, zIndex: 50, background: "rgba(247,243,238,0.9)", backdropFilter: "blur(8px)", borderBottom: "1px solid var(--border-hairline-soft)", padding: "14px 40px" }}>
      <div style={{ maxWidth: 1344, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Wordmark size="1.15rem" />
        <nav style={{ display: "flex", gap: 24 }}>
          {NAV_LINKS.map((l) => (
            <span key={l} style={{ fontSize: "0.85rem", fontWeight: 500, color: "var(--text-secondary)" }}>{l}</span>
          ))}
        </nav>
        <Button variant="primary" size="sm">Stop losing enquiries</Button>
      </div>
    </header>
  );
}

const LEAD_RESCUE_CARDS = [
  { icon: "file-text", title: "Website enquiry captured", body: "Clearer forms and quote paths catch the job before it drifts.", meta: "Web form" },
  { icon: "bell", title: "Instant alert sent", body: "WhatsApp and email notifications get the lead in front of you fast.", meta: "WhatsApp / email" },
  { icon: "clipboard-check", title: "Lead logged", body: "Every enquiry is recorded with the key details and next action.", meta: "Dashboard" },
  { icon: "star", title: "Review follow-up", body: "Completed jobs trigger feedback first, then a Google review request.", meta: "Post-job" },
];

export function HeroCurrent({ Button, Icon }) {
  return (
    <section style={{ position: "relative", overflow: "hidden", background: "var(--r3-porcelain)", padding: "56px 40px 80px" }}>
      <div className="r3-grid-overlay" />
      <div style={{ position: "absolute", inset: "0 0 auto 0", height: 192, background: "radial-gradient(ellipse at top, rgba(217,107,79,0.12), transparent 64%)", pointerEvents: "none" }} />
      <div style={{ position: "relative", zIndex: 1, maxWidth: 1344, margin: "0 auto", display: "grid", gridTemplateColumns: "minmax(0,0.92fr) minmax(416px,1.08fr)", gap: 48, alignItems: "center" }}>
        <div style={{ maxWidth: 704 }}>
          <p className="type-eyebrow" style={{ color: "#B86B5C", margin: 0 }}>LEAD RESCUE FOR TRADES &amp; LOCAL SERVICE BUSINESSES</p>
          <h1 style={{ marginTop: 20, marginBottom: 0, fontWeight: 700, fontSize: "5.4rem", lineHeight: 0.94, letterSpacing: "-0.055em", color: "var(--r3-ink)", maxWidth: "10ch" }}>
            Stop losing enquiries.
          </h1>
          <p className="type-support" style={{ marginTop: 24, maxWidth: "38rem", color: "rgba(42,42,42,0.78)" }}>
            R3WORKED captures website enquiries and missed calls, sends instant WhatsApp/email alerts, logs every lead, and helps turn completed jobs into more Google reviews.
          </p>
          <div style={{ marginTop: 32, display: "flex", gap: 14, flexWrap: "wrap" }}>
            <Button variant="primary">Stop losing enquiries</Button>
            <Button variant="ghost" iconRight="arrow-right">See how it works</Button>
          </div>
        </div>

        <div style={{ position: "relative" }}>
          <div style={{ position: "absolute", inset: -16, borderRadius: 36, border: "1px solid rgba(22,22,22,0.05)", background: "rgba(255,255,255,0.3)" }} />
          <div style={{ position: "relative", borderRadius: "1.65rem", border: "1px solid var(--r3-ink)", background: "var(--r3-ink)", padding: 20, boxShadow: "8px 8px 0px #B86B5C" }}>
            <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid rgba(247,243,238,0.1)", paddingBottom: 16 }}>
              <div>
                <p style={{ margin: 0, fontSize: 10, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--r3-coral)" }}>Lead Rescue</p>
                <p style={{ margin: "4px 0 0", fontSize: "0.85rem", fontWeight: 600, color: "var(--r3-porcelain)" }}>Enquiry control room</p>
              </div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, borderRadius: 999, border: "1px solid rgba(247,243,238,0.1)", background: "rgba(247,243,238,0.05)", padding: "6px 12px", fontSize: 10, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(247,243,238,0.64)" }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--r3-coral)" }} />Routing
              </div>
            </div>

            <div style={{ marginTop: 16, borderRadius: 16, border: "1px solid rgba(247,243,238,0.1)", background: "var(--r3-porcelain)", padding: 20 }}>
              <div style={{ display: "flex", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
                <div>
                  <p style={{ margin: 0, fontSize: 10, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--r3-coral)" }}>New serious enquiry</p>
                  <h2 style={{ margin: "8px 0 0", fontSize: "1.45rem", fontWeight: 700, letterSpacing: "-0.03em", color: "var(--r3-ink)" }}>Kitchen extension quote</h2>
                  <p style={{ margin: "8px 0 0", maxWidth: "26rem", fontSize: "0.85rem", color: "rgba(42,42,42,0.58)" }}>Source captured, owner alerted, lead logged, next step visible.</p>
                </div>
                <div style={{ borderRadius: 12, border: "1px solid rgba(22,22,22,0.08)", background: "#fff", padding: "12px 16px", textAlign: "right" }}>
                  <p style={{ margin: 0, fontSize: 10, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(22,22,22,0.35)" }}>Response target</p>
                  <p style={{ margin: "4px 0 0", fontSize: "1.4rem", fontWeight: 700, letterSpacing: "-0.04em", color: "var(--r3-ink)" }}>5 min</p>
                </div>
              </div>

              <div style={{ marginTop: 20, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                {LEAD_RESCUE_CARDS.map((c) => (
                  <div key={c.title} style={{ borderRadius: 12, border: "1px solid rgba(22,22,22,0.07)", background: "#fff", padding: 16 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
                      <div style={{ width: 32, height: 32, borderRadius: 8, border: "1px solid rgba(217,107,79,0.12)", background: "rgba(217,107,79,0.08)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Icon name={c.icon} size={15} color="var(--r3-coral)" />
                      </div>
                      <span style={{ borderRadius: 999, background: "rgba(22,22,22,0.04)", padding: "4px 10px", fontSize: 9, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(22,22,22,0.38)" }}>{c.meta}</span>
                    </div>
                    <h3 style={{ margin: 0, fontSize: "0.92rem", fontWeight: 700, color: "var(--r3-ink)" }}>{c.title}</h3>
                    <p style={{ margin: "6px 0 0", fontSize: "0.78rem", color: "rgba(42,42,42,0.58)" }}>{c.body}</p>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ marginTop: 16, display: "grid", gridTemplateColumns: "auto 1fr", gap: 12, alignItems: "center", borderRadius: 16, border: "1px solid rgba(247,243,238,0.1)", background: "rgba(247,243,238,0.04)", padding: 16 }}>
              <div style={{ width: 40, height: 40, borderRadius: 12, border: "1px solid rgba(217,107,79,0.2)", background: "rgba(217,107,79,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Icon name="phone-missed" size={17} color="var(--r3-coral)" />
              </div>
              <div>
                <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                  <p style={{ margin: 0, fontSize: "0.85rem", fontWeight: 700, color: "var(--r3-porcelain)" }}>Missed-call rescue</p>
                  <span style={{ borderRadius: 999, border: "1px solid rgba(217,107,79,0.25)", background: "rgba(217,107,79,0.1)", padding: "2px 8px", fontSize: 9, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--r3-coral)" }}>Coming soon</span>
                </div>
                <p style={{ margin: "4px 0 0", fontSize: "0.78rem", color: "rgba(247,243,238,0.48)" }}>AI voice answering for overflow and missed calls.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const TRUST_STATEMENTS = ["Missed forms become missed jobs", "Slow replies lose serious enquiries", "Every lead should be logged"];

export function TrustTicker() {
  const [i, setI] = React.useState(0);
  React.useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % TRUST_STATEMENTS.length), 3200);
    return () => clearInterval(id);
  }, []);
  return (
    <div style={{ background: "var(--r3-porcelain-dim)", borderTop: "1px solid rgba(22,22,22,0.05)", borderBottom: "1px solid rgba(22,22,22,0.05)", padding: "36px 24px", textAlign: "center" }}>
      <div style={{ width: 24, height: 1.5, background: "rgba(217,107,79,0.35)", margin: "0 auto 12px" }} />
      <p style={{ margin: 0, fontSize: "1.05rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(22,22,22,0.7)" }}>
        {TRUST_STATEMENTS[i]}
      </p>
    </div>
  );
}

const THREE_LAYERS = [
  { label: "01", title: "Website uplift", body: "Make your business look more trustworthy, more professional and easier for the right customer to act on." },
  { label: "02", title: "Enquiry capture", body: "Guide serious prospects toward the right actions with better calls-to-action, cleaner forms and clearer conversion paths." },
  { label: "03", title: "Follow-up system", body: "Acknowledge new enquiries instantly, notify the client, log the lead cleanly and create a more reliable path from first contact to booked work." },
];

export function TheThree({ PremiumCard, SectionHeading, Button }) {
  return (
    <section style={{ background: "var(--r3-porcelain)", padding: "88px 40px" }}>
      <div style={{ maxWidth: 1344, margin: "0 auto" }}>
        <div style={{ marginBottom: 64, maxWidth: 672 }}>
          <SectionHeading eyebrow="The System" title={<>The <span style={{ color: "var(--r3-coral)" }}>3</span> in R<span style={{ color: "var(--r3-coral)" }}>3</span>WORKED.</>} description="Three practical layers that make your website look better, capture more enquiries, and help you stay on top of them." />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          {THREE_LAYERS.map((l) => (
            <PremiumCard key={l.label} hoverLift style={{ position: "relative" }}>
              <span className="type-eyebrow" style={{ color: "var(--r3-coral)", padding: "6px 16px", borderRadius: 999, border: "1px solid rgba(217,107,79,0.2)", background: "rgba(217,107,79,0.05)" }}>Phase {l.label}</span>
              <h3 className="type-h3" style={{ marginTop: 24, marginBottom: 12 }}>{l.title}</h3>
              <p className="type-body-sm" style={{ maxWidth: "31ch", color: "rgba(42,42,42,0.78)" }}>{l.body}</p>
              <div style={{ marginTop: 24 }}><Button variant="primary" size="sm">Read more</Button></div>
            </PremiumCard>
          ))}
        </div>
      </div>
    </section>
  );
}
