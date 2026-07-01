import React from "react";

/* ------------------------------------------------------------------ */
/*  R3WORKED — New hero visual concept: "Lead Rescue Engine"           */
/*  Three enquiry sources feed a central routing engine, which fans    */
/*  out to three outcomes. Status cycles RECEIVED -> ROUTED -> LOGGED  */
/*  on a loop; flow lines pulse to show live routing. Missed-call      */
/*  voice answering is clearly marked COMING SOON — never shown live.  */
/* ------------------------------------------------------------------ */

const SOURCES = [
  { icon: "file-text", label: "Web form", sub: "Kitchen extension quote" },
  { icon: "phone-missed", label: "Missed call", sub: "Coming soon", soon: true },
  { icon: "message-square", label: "WhatsApp", sub: "Direct enquiry" },
];

const OUTCOMES = [
  { icon: "bell", label: "Alert sent", sub: "WhatsApp / email", tone: "coral" },
  { icon: "clipboard-check", label: "Lead logged", sub: "Dashboard", tone: "live" },
  { icon: "star", label: "Review queued", sub: "Post-job follow-up", tone: "live" },
];

const CYCLE = ["received", "routed", "logged"];
const CYCLE_LABEL = { received: "Received", routed: "Routed", logged: "Logged" };
const CYCLE_COLOR = { received: "var(--r3-coral)", routed: "var(--r3-status-live)", logged: "var(--r3-status-live)" };

export function RescueEngine({ Icon, StatusPill }) {
  const [step, setStep] = React.useState(0);
  React.useEffect(() => {
    const id = setInterval(() => setStep((s) => (s + 1) % CYCLE.length), 2200);
    return () => clearInterval(id);
  }, []);
  const status = CYCLE[step];

  return (
    <div style={{ position: "relative", width: "100%", maxWidth: 560, margin: "0 auto" }}>
      <style>{`
        @keyframes r3-flow { to { stroke-dashoffset: -24; } }
        @keyframes r3-pop-in { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes r3-engine-pulse { 0%,100% { box-shadow: 0 0 0 0 rgba(217,107,79,0.35); } 50% { box-shadow: 0 0 0 10px rgba(217,107,79,0); } }
        .r3-stagger { animation: r3-pop-in 700ms cubic-bezier(0.2,0.65,0.3,0.9) both; }
      `}</style>

      {/* Row 1: sources */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10 }}>
        {SOURCES.map((s, i) => (
          <SourceChip key={s.label} {...s} delay={i * 0.08} Icon={Icon} />
        ))}
      </div>

      <Connector direction="down" />

      {/* Engine */}
      <div
        className="r3-stagger"
        style={{
          animationDelay: "0.3s",
          position: "relative",
          borderRadius: 20,
          background: "var(--r3-ink)",
          border: "1px solid var(--r3-ink)",
          boxShadow: "var(--shadow-sticker-coral)",
          padding: "18px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 12,
        }}
      >
        <div>
          <p style={{ margin: 0, fontSize: 10, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--r3-coral)" }}>
            Lead Rescue Engine
          </p>
          <p style={{ margin: "4px 0 0", fontWeight: 600, color: "var(--r3-porcelain)", fontSize: "0.95rem" }}>
            Kitchen extension quote
          </p>
        </div>
        <div style={{ textAlign: "right" }}>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 7,
              borderRadius: 999,
              padding: "6px 12px",
              fontSize: "0.62rem",
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: CYCLE_COLOR[status],
              border: `1px solid color-mix(in srgb, ${CYCLE_COLOR[status]} 35%, transparent)`,
              background: `color-mix(in srgb, ${CYCLE_COLOR[status]} 12%, transparent)`,
              transition: "color 300ms ease",
            }}
          >
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: CYCLE_COLOR[status], animation: "r3-pulse 1.4s ease-in-out infinite" }} />
            {CYCLE_LABEL[status]}
          </span>
          <p style={{ margin: "6px 0 0", fontSize: "0.62rem", color: "rgba(247,243,238,0.35)", fontWeight: 600, letterSpacing: "0.08em" }}>
            RESPONSE TARGET: 5 MIN
          </p>
        </div>
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: -1,
            borderRadius: 20,
            animation: "r3-engine-pulse 2.2s ease-in-out infinite",
            pointerEvents: "none",
          }}
        />
      </div>

      <Connector direction="down" fanOut />

      {/* Row 2: outcomes */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10 }}>
        {OUTCOMES.map((o, i) => (
          <OutcomeChip key={o.label} {...o} delay={0.55 + i * 0.1} Icon={Icon} />
        ))}
      </div>
    </div>
  );
}

function Connector({ fanOut = false }) {
  return (
    <svg
      width="100%"
      height="34"
      viewBox="0 0 300 34"
      preserveAspectRatio="none"
      style={{ display: "block", margin: "2px 0" }}
      aria-hidden="true"
    >
      {[50, 150, 250].map((x) => (
        <path
          key={x}
          d={fanOut ? `M150 0 L${x} 34` : `M${x} 0 L150 34`}
          stroke="var(--r3-coral)"
          strokeOpacity="0.35"
          strokeWidth="2"
          strokeDasharray="5 7"
          fill="none"
          style={{ animation: "r3-flow 1.1s linear infinite" }}
        />
      ))}
    </svg>
  );
}

function SourceChip({ icon, label, sub, soon, delay, Icon }) {
  return (
    <div
      className="r3-stagger"
      style={{
        animationDelay: `${delay}s`,
        borderRadius: 14,
        border: "1px solid var(--border-hairline-soft)",
        background: "#fff",
        boxShadow: "var(--shadow-card-tight)",
        padding: "10px 10px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 6,
        textAlign: "center",
        position: "relative",
      }}
    >
      {soon ? (
        <span
          style={{
            position: "absolute",
            top: 6,
            right: 6,
            fontSize: "0.48rem",
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "var(--r3-status-pending)",
            background: "color-mix(in srgb, var(--r3-status-pending) 12%, transparent)",
            border: "1px solid color-mix(in srgb, var(--r3-status-pending) 30%, transparent)",
            borderRadius: 999,
            padding: "2px 6px",
          }}
        >
          Soon
        </span>
      ) : null}
      <div
        style={{
          width: 30,
          height: 30,
          borderRadius: 9,
          background: "color-mix(in srgb, var(--r3-coral) 8%, transparent)",
          border: "1px solid color-mix(in srgb, var(--r3-coral) 15%, transparent)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Icon name={icon} size={14} color="var(--r3-coral)" />
      </div>
      <div>
        <p style={{ margin: 0, fontSize: "0.7rem", fontWeight: 700, color: "var(--text-primary)" }}>{label}</p>
        <p style={{ margin: 0, fontSize: "0.6rem", color: "var(--text-muted)" }}>{sub}</p>
      </div>
    </div>
  );
}

function OutcomeChip({ icon, label, sub, tone, delay, Icon }) {
  const color = tone === "live" ? "var(--r3-status-live)" : "var(--r3-coral)";
  return (
    <div
      className="r3-stagger"
      style={{
        animationDelay: `${delay}s`,
        borderRadius: 14,
        border: "1px solid var(--border-hairline-soft)",
        background: "#fff",
        boxShadow: "var(--shadow-card-tight)",
        padding: "10px 10px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 6,
        textAlign: "center",
      }}
    >
      <div
        style={{
          width: 30,
          height: 30,
          borderRadius: 9,
          background: `color-mix(in srgb, ${color} 8%, transparent)`,
          border: `1px solid color-mix(in srgb, ${color} 15%, transparent)`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Icon name={icon} size={14} color={color} />
      </div>
      <div>
        <p style={{ margin: 0, fontSize: "0.7rem", fontWeight: 700, color: "var(--text-primary)" }}>{label}</p>
        <p style={{ margin: 0, fontSize: "0.6rem", color: "var(--text-muted)" }}>{sub}</p>
      </div>
    </div>
  );
}
