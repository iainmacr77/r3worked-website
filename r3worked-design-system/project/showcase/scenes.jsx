// R3WORKED — "Stop losing enquiries" brand story
// Three scenes: 01 Lead capture, 02 Website uplift, 03 Review retrieval.
// Built on the animations.jsx timeline engine. Reads {Stage, Sprite,
// TextSprite, RectSprite, ImageSprite, useSprite, useTime, Easing,
// interpolate} from window (set by animations.jsx, loaded first).

const { Sprite, useSprite, Easing, interpolate } = window;

/* ---------------------------------------------------------------- */
/*  Shared visual atoms                                              */
/* ---------------------------------------------------------------- */

function TitleCard({ eyebrow, headline, sub }) {
  const { localTime } = useSprite();
  const fade = interpolate([0, 0.45, 1.5, 2], [0, 1, 1, 0], Easing.easeOutCubic)(localTime);
  const rise = interpolate([0, 0.45], [16, 0], Easing.easeOutCubic)(localTime);
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 18,
        opacity: fade,
        transform: `translateY(${rise}px)`,
        background: "var(--r3-porcelain)",
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-sans)",
          fontWeight: 700,
          fontSize: 20,
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: "var(--r3-coral-muted)",
        }}
      >
        {eyebrow}
      </span>
      <span
        style={{
          fontFamily: "var(--font-sans)",
          fontWeight: 700,
          fontSize: 64,
          letterSpacing: "-0.03em",
          color: "var(--r3-ink)",
          textAlign: "center",
          maxWidth: 900,
        }}
      >
        {headline}
      </span>
    </div>
  );
}

function FlowLine({ x1, y1, x2, y2, opacity = 0.4 }) {
  const cx = (x1 + x2) / 2;
  return (
    <svg style={{ position: "absolute", inset: 0, overflow: "visible", pointerEvents: "none" }}>
      <path
        d={`M${x1} ${y1} C ${cx} ${y1}, ${cx} ${y2}, ${x2} ${y2}`}
        stroke="var(--r3-coral)"
        strokeOpacity={opacity}
        strokeWidth={3}
        strokeDasharray="7 9"
        fill="none"
      >
        <animate attributeName="stroke-dashoffset" from="0" to="-32" dur="1s" repeatCount="indefinite" />
      </path>
    </svg>
  );
}

function StatusChip({ x, y, status, color, label }) {
  return (
    <div
      style={{
        position: "absolute",
        left: x,
        top: y,
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        borderRadius: 999,
        padding: "8px 16px",
        fontFamily: "var(--font-sans)",
        fontSize: 13,
        fontWeight: 700,
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        color,
        border: `1.5px solid ${color}55`,
        background: `${color}1F`,
        opacity: status ? 1 : 0,
        transition: "opacity 300ms ease",
        whiteSpace: "nowrap",
      }}
    >
      <span style={{ width: 8, height: 8, borderRadius: "50%", background: color }} />
      {label}
    </div>
  );
}

function BrowserWindow({ x, y, w, h, chrome = true, children, bg = "#fff" }) {
  return (
    <div
      style={{
        position: "absolute",
        left: x,
        top: y,
        width: w,
        height: h,
        borderRadius: 18,
        overflow: "hidden",
        background: bg,
        border: "1px solid rgba(22,22,22,0.1)",
        boxShadow: "0 30px 70px rgba(22,22,22,0.14)",
      }}
    >
      {chrome ? (
        <div
          style={{
            height: 34,
            display: "flex",
            alignItems: "center",
            gap: 7,
            padding: "0 14px",
            borderBottom: "1px solid rgba(22,22,22,0.06)",
            background: "#fafafa",
          }}
        >
          <span style={{ width: 9, height: 9, borderRadius: "50%", background: "#e2b93b" }} />
          <span style={{ width: 9, height: 9, borderRadius: "50%", background: "#e2673b" }} />
          <span style={{ width: 9, height: 9, borderRadius: "50%", background: "#63b96a" }} />
        </div>
      ) : null}
      <div style={{ position: "relative", width: "100%", height: chrome ? h - 34 : h }}>{children}</div>
    </div>
  );
}

function PhoneShell({ x, y, w = 220, h = 440, children }) {
  return (
    <div
      style={{
        position: "absolute",
        left: x,
        top: y,
        width: w,
        height: h,
        borderRadius: 34,
        background: "var(--r3-ink)",
        padding: 10,
        boxShadow: "0 30px 70px rgba(22,22,22,0.2)",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          borderRadius: 26,
          background: "var(--r3-porcelain)",
          overflow: "hidden",
        }}
      >
        {children}
      </div>
    </div>
  );
}

function EngineChip({ x, y, statusLabel, statusColor }) {
  return (
    <div
      style={{
        position: "absolute",
        left: x,
        top: y,
        width: 210,
        borderRadius: 20,
        background: "var(--r3-ink)",
        padding: "16px 18px",
        boxShadow: "6px 6px 0px var(--r3-coral-muted)",
      }}
    >
      <p style={{ margin: 0, fontFamily: "var(--font-sans)", fontSize: 10, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--r3-coral)" }}>
        R3WORKED
      </p>
      <p style={{ margin: "4px 0 10px", fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 600, color: "var(--r3-porcelain)" }}>
        Lead Rescue Engine
      </p>
      <span
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 6,
          borderRadius: 999,
          padding: "5px 10px",
          fontFamily: "var(--font-sans)",
          fontSize: 10,
          fontWeight: 700,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: statusColor,
          background: `${statusColor}22`,
        }}
      >
        <span style={{ width: 6, height: 6, borderRadius: "50%", background: statusColor }} />
        {statusLabel}
      </span>
    </div>
  );
}

/* ---------------------------------------------------------------- */
/*  Scene 01 — Lead capture                                          */
/* ---------------------------------------------------------------- */

function Scene1Lead() {
  const { localTime } = useSprite();
  const sceneOpacity = interpolate([0, 0.5, 7.4, 8], [0, 1, 1, 0], Easing.linear)(localTime);

  const engineStatus =
    localTime < 3.2 ? { label: "Received", color: "var(--r3-coral)" }
    : localTime < 5.4 ? { label: "Routed", color: "var(--r3-status-live)" }
    : { label: "Logged", color: "var(--r3-status-live)" };

  const formChars = Math.floor(interpolate([1.2, 3.8], [0, 24], Easing.linear)(localTime));
  const formText = "Kitchen extension, BS6".slice(0, Math.max(0, formChars));

  const ringOpacity = interpolate([1.8, 2.2, 3.4, 3.8], [0, 1, 1, 0], Easing.linear)(localTime);
  const alertSlide = interpolate([5.2, 5.8], [40, 0], Easing.easeOutCubic)(localTime);
  const alertOpacity = interpolate([5.2, 5.7], [0, 1], Easing.easeOutCubic)(localTime);

  return (
    <div style={{ position: "absolute", inset: 0, opacity: sceneOpacity, background: "var(--r3-porcelain)" }}>
      <div className="r3-grid-overlay" style={{ position: "absolute" }} />

      <div
        style={{
          position: "absolute",
          top: 46,
          left: 90,
          fontFamily: "var(--font-sans)",
          fontWeight: 700,
          fontSize: 15,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "var(--r3-coral-muted)",
          opacity: interpolate([0, 0.4], [0, 1])(localTime),
        }}
      >
        Phase 01 — Catch every enquiry
      </div>

      {/* Web form source */}
      <BrowserWindow x={80} y={160} w={470} h={320}>
        <div style={{ padding: 26 }}>
          <span style={{ fontFamily: "var(--font-sans)", fontSize: 11, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--r3-coral)" }}>
            Quick quote request
          </span>
          <p style={{ margin: "10px 0 18px", fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: 22, color: "var(--r3-ink)" }}>
            Describe the job
          </p>
          <div style={{ borderRadius: 10, border: "1px solid rgba(22,22,22,0.12)", background: "#fff", padding: "14px 16px", minHeight: 26, fontFamily: "var(--font-sans)", fontSize: 15, color: "var(--r3-ink)" }}>
            {formText}
            <span style={{ opacity: localTime % 0.6 < 0.3 && localTime < 4 ? 1 : 0 }}>|</span>
          </div>
          <div
            style={{
              marginTop: 20,
              display: "inline-flex",
              borderRadius: 999,
              padding: "10px 22px",
              fontFamily: "var(--font-sans)",
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#fff",
              background: "var(--r3-coral)",
              opacity: interpolate([3.9, 4.2], [0, 1])(localTime),
            }}
          >
            Send enquiry
          </div>
        </div>
      </BrowserWindow>

      {/* Missed call source */}
      <PhoneShell x={610} y={140} w={210} h={360}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", gap: 16, padding: "0 14px", textAlign: "center" }}>
          <div
            style={{
              width: 60,
              height: 60,
              borderRadius: "50%",
              background: "color-mix(in srgb, var(--r3-status-pending) 15%, transparent)",
              border: "2px solid var(--r3-status-pending)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              opacity: ringOpacity,
              transform: `scale(${1 + (1 - ringOpacity) * 0.3})`,
              flexShrink: 0,
            }}
          >
            <span style={{ fontFamily: "var(--font-sans)", fontSize: 24, color: "var(--r3-status-pending)" }}>☎</span>
          </div>
          <p style={{ margin: 0, fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: 13, color: "var(--r3-ink)" }}>Missed call</p>
          <span
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 9,
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "var(--r3-coral)",
              border: "1px solid color-mix(in srgb, var(--r3-coral) 35%, transparent)",
              background: "color-mix(in srgb, var(--r3-coral) 10%, transparent)",
              borderRadius: 999,
              padding: "5px 10px",
              lineHeight: 1.4,
            }}
          >
            Voice answering<br/>coming soon
          </span>
        </div>
      </PhoneShell>

      <FlowLine x1={550} y1={310} x2={655} y2={620} opacity={0.35} />
      <FlowLine x1={715} y1={500} x2={775} y2={620} opacity={0.35} />

      <EngineChip x={650} y={620} statusLabel={engineStatus.label} statusColor={engineStatus.color} />

      <FlowLine x1={860} y1={660} x2={1240} y2={340} opacity={0.35} />

      {/* Alert outcome */}
      <PhoneShell x={1210} y={140} w={210} h={400}>
        <div style={{ padding: 18 }}>
          <p style={{ margin: "6px 0 14px", fontFamily: "var(--font-sans)", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-muted)" }}>
            9:41
          </p>
          <div
            style={{
              borderRadius: 14,
              background: "#fff",
              border: "1px solid rgba(22,22,22,0.08)",
              boxShadow: "0 10px 24px rgba(22,22,22,0.08)",
              padding: 14,
              transform: `translateY(${alertSlide}px)`,
              opacity: alertOpacity,
            }}
          >
            <span style={{ fontFamily: "var(--font-sans)", fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--r3-status-live)" }}>
              WhatsApp · R3WORKED
            </span>
            <p style={{ margin: "8px 0 0", fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 600, color: "var(--r3-ink)" }}>
              New enquiry — kitchen extension quote. Respond within 5 min.
            </p>
          </div>
        </div>
      </PhoneShell>
    </div>
  );
}

/* ---------------------------------------------------------------- */
/*  Scene 02 — Website uplift                                        */
/* ---------------------------------------------------------------- */

function DatedHomepage() {
  return (
    <div style={{ position: "absolute", inset: 0, background: "#e7e4de", padding: 24, fontFamily: "Georgia, serif" }}>
      <div style={{ height: 30, background: "#cfcbc2", marginBottom: 18, width: "40%" }} />
      <div style={{ height: 16, background: "#d8d4cb", marginBottom: 10, width: "70%" }} />
      <div style={{ height: 16, background: "#d8d4cb", marginBottom: 10, width: "55%" }} />
      <div style={{ height: 16, background: "#d8d4cb", marginBottom: 26, width: "62%" }} />
      <div style={{ display: "flex", gap: 12 }}>
        <div style={{ width: 90, height: 26, background: "#b7b2a5" }} />
        <div style={{ width: 90, height: 26, background: "#b7b2a5" }} />
      </div>
      <div style={{ marginTop: 30, display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10 }}>
        <div style={{ height: 60, background: "#d8d4cb" }} />
        <div style={{ height: 60, background: "#d8d4cb" }} />
        <div style={{ height: 60, background: "#d8d4cb" }} />
      </div>
    </div>
  );
}

function ReworkedHomepage() {
  return (
    <div style={{ position: "absolute", inset: 0, background: "var(--r3-porcelain)", padding: 28 }}>
      <div className="r3-grid-overlay" style={{ position: "absolute" }} />
      <span style={{ position: "relative", fontFamily: "var(--font-sans)", fontSize: 10, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--r3-coral-muted)" }}>
        Collins Construction
      </span>
      <p style={{ position: "relative", margin: "8px 0 6px", fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: 30, lineHeight: 1.05, color: "var(--r3-ink)", letterSpacing: "-0.02em" }}>
        Quality work,<br /><span style={{ color: "var(--r3-coral)" }}>properly quoted.</span>
      </p>
      <p style={{ position: "relative", margin: "0 0 16px", maxWidth: 260, fontFamily: "var(--font-sans)", fontSize: 12, color: "var(--text-secondary)" }}>
        Trusted local builders serving Greater Manchester. Free site visits, honest pricing.
      </p>
      <div
        style={{
          position: "relative",
          display: "inline-flex",
          borderRadius: 999,
          padding: "9px 20px",
          fontFamily: "var(--font-sans)",
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: "#fff",
          background: "var(--r3-coral)",
        }}
      >
        Get a quote
      </div>
      <div
        style={{
          position: "absolute",
          right: 0,
          bottom: 0,
          width: "48%",
          height: "62%",
          borderRadius: "16px 0 0 0",
          overflow: "hidden",
        }}
      >
        <img
          src="../assets/imagery/collins-after-hero.webp"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
    </div>
  );
}

function Scene2Uplift() {
  const { localTime } = useSprite();
  const sceneOpacity = interpolate([0, 0.5, 7.4, 8], [0, 1, 1, 0], Easing.linear)(localTime);
  const wipe = interpolate([1.8, 5.2], [0, 100], Easing.easeInOutCubic)(localTime);
  const ctaPulse = 1 + Math.sin(Math.max(0, localTime - 5.6) * 3.2) * (localTime > 5.6 ? 0.05 : 0);

  return (
    <div style={{ position: "absolute", inset: 0, opacity: sceneOpacity, background: "var(--r3-porcelain)" }}>
      <div
        style={{
          position: "absolute",
          top: 46,
          left: 90,
          fontFamily: "var(--font-sans)",
          fontWeight: 700,
          fontSize: 15,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "var(--r3-coral-muted)",
          opacity: interpolate([0, 0.4], [0, 1])(localTime),
        }}
      >
        Phase 02 — A website that looks the part
      </div>

      <BrowserWindow x={280} y={140} w={1040} h={620} bg="#e7e4de">
        <div style={{ position: "absolute", inset: 0, clipPath: `inset(0 ${100 - wipe}% 0 0)` }}>
          <ReworkedHomepage />
        </div>
        <div style={{ position: "absolute", inset: 0, clipPath: `inset(0 0 0 ${wipe}%)` }}>
          <DatedHomepage />
        </div>
        <div
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: `${wipe}%`,
            width: 3,
            background: "var(--r3-coral)",
            boxShadow: "0 0 16px rgba(217,107,79,0.5)",
          }}
        />
      </BrowserWindow>

      <div
        style={{
          position: "absolute",
          left: 280,
          top: 790,
          fontFamily: "var(--font-sans)",
          fontSize: 13,
          fontWeight: 600,
          color: "var(--text-secondary)",
          opacity: interpolate([5.6, 6.1], [0, 1])(localTime),
          transform: `scale(${ctaPulse})`,
        }}
      >
        Same business — clearer structure, stronger trust, a homepage that gives people a reason to enquire.
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------- */
/*  Scene 03 — Review retrieval                                      */
/* ---------------------------------------------------------------- */

function ReviewCard({ x, y, delay, initials, quote }) {
  const { localTime } = useSprite();
  const t = localTime - delay;
  const rise = interpolate([0, 0.5], [24, 0], Easing.easeOutCubic)(t);
  const op = interpolate([0, 0.5], [0, 1], Easing.easeOutCubic)(t);
  return (
    <div
      style={{
        position: "absolute",
        left: x,
        top: y,
        width: 260,
        borderRadius: 14,
        background: "#fff",
        border: "1px solid rgba(22,22,22,0.08)",
        boxShadow: "0 10px 26px rgba(22,22,22,0.08)",
        padding: 16,
        opacity: op,
        transform: `translateY(${rise}px)`,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
        <div
          style={{
            width: 30,
            height: 30,
            borderRadius: "50%",
            background: "var(--r3-stone)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "var(--font-sans)",
            fontWeight: 700,
            fontSize: 11,
            color: "var(--r3-ink)",
          }}
        >
          {initials}
        </div>
        <span style={{ color: "#E2A93B", fontSize: 13, letterSpacing: 1 }}>★★★★★</span>
      </div>
      <p style={{ margin: 0, fontFamily: "var(--font-sans)", fontSize: 12, color: "var(--text-secondary)" }}>{quote}</p>
    </div>
  );
}

function Scene3Reviews() {
  const { localTime } = useSprite();
  const sceneOpacity = interpolate([0, 0.5, 7.4, 8], [0, 1, 1, 0], Easing.linear)(localTime);
  const msgSlide = interpolate([1.6, 2.2], [40, 0], Easing.easeOutCubic)(localTime);
  const msgOp = interpolate([1.6, 2.1], [0, 1], Easing.easeOutCubic)(localTime);
  const rating = interpolate([3.6, 6.8], [4.6, 4.9], Easing.easeOutCubic)(localTime).toFixed(1);
  const countUp = Math.floor(interpolate([3.6, 6.8], [0, 12], Easing.easeOutCubic)(localTime));

  return (
    <div style={{ position: "absolute", inset: 0, opacity: sceneOpacity, background: "var(--r3-porcelain)" }}>
      <div
        style={{
          position: "absolute",
          top: 46,
          left: 90,
          fontFamily: "var(--font-sans)",
          fontWeight: 700,
          fontSize: 15,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "var(--r3-coral-muted)",
          opacity: interpolate([0, 0.4], [0, 1])(localTime),
        }}
      >
        Phase 03 — Turn finished jobs into 5-star reviews
      </div>

      {/* Job complete card */}
      <div
        style={{
          position: "absolute",
          left: 90,
          top: 150,
          width: 300,
          borderRadius: 20,
          background: "var(--r3-ink)",
          padding: 22,
          boxShadow: "6px 6px 0px var(--r3-coral-muted)",
          opacity: interpolate([0.3, 0.8], [0, 1])(localTime),
        }}
      >
        <span style={{ fontFamily: "var(--font-sans)", fontSize: 10, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--r3-status-live)" }}>
          Job complete
        </span>
        <p style={{ margin: "8px 0 0", fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: 18, color: "var(--r3-porcelain)" }}>
          Riverside Roofing
        </p>
        <p style={{ margin: "4px 0 0", fontFamily: "var(--font-sans)", fontSize: 12, color: "rgba(247,243,238,0.55)" }}>
          Full re-roof — signed off today
        </p>
      </div>

      <FlowLine x1={390} y1={220} x2={520} y2={220} opacity={0.35} />

      {/* Phone with review-request message */}
      <PhoneShell x={520} y={100} w={200} h={400}>
        <div style={{ padding: 16 }}>
          <p style={{ margin: "6px 0 14px", fontFamily: "var(--font-sans)", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-muted)" }}>
            9:41
          </p>
          <div
            style={{
              borderRadius: 14,
              background: "#fff",
              border: "1px solid rgba(22,22,22,0.08)",
              boxShadow: "0 10px 24px rgba(22,22,22,0.08)",
              padding: 14,
              transform: `translateY(${msgSlide}px)`,
              opacity: msgOp,
            }}
          >
            <span style={{ fontFamily: "var(--font-sans)", fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--r3-coral)" }}>
              Riverside Roofing
            </span>
            <p style={{ margin: "8px 0 0", fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 600, color: "var(--r3-ink)" }}>
              Thanks for choosing us! Mind leaving a quick Google review?
            </p>
          </div>
        </div>
      </PhoneShell>

      {/* Rating counter */}
      <div
        style={{
          position: "absolute",
          left: 800,
          top: 150,
          borderRadius: 20,
          background: "#fff",
          border: "1px solid rgba(22,22,22,0.08)",
          boxShadow: "0 20px 50px rgba(22,22,22,0.08)",
          padding: "22px 28px",
          opacity: interpolate([3.2, 3.7], [0, 1])(localTime),
        }}
      >
        <span style={{ fontFamily: "var(--font-sans)", fontSize: 10, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--text-muted)" }}>
          Google reviews
        </span>
        <p style={{ margin: "6px 0 0", fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: 40, color: "var(--r3-ink)", letterSpacing: "-0.02em" }}>
          {rating} <span style={{ color: "#E2A93B", fontSize: 22 }}>★</span>
        </p>
        <span
          style={{
            display: "inline-flex",
            marginTop: 8,
            borderRadius: 999,
            padding: "5px 12px",
            fontFamily: "var(--font-sans)",
            fontSize: 11,
            fontWeight: 700,
            color: "var(--r3-status-live)",
            background: "var(--r3-status-live-dim)",
          }}
        >
          +{countUp} new this month
        </span>
      </div>

      <ReviewCard x={1080} y={150} delay={4.2} initials="JW" quote="On time, tidy, and the quote matched the invoice." />
      <ReviewCard x={1080} y={330} delay={4.7} initials="AM" quote="Sent photos before and after — really reassuring." />
      <ReviewCard x={1080} y={510} delay={5.2} initials="TS" quote="Booked the quote in two minutes flat." />
    </div>
  );
}

/* ---------------------------------------------------------------- */
/*  Outro                                                             */
/* ---------------------------------------------------------------- */

function Outro() {
  const { localTime } = useSprite();
  const op = interpolate([0, 0.6], [0, 1], Easing.easeOutCubic)(localTime);
  const rise = interpolate([0, 0.6], [14, 0], Easing.easeOutCubic)(localTime);
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        background: "var(--r3-ink)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 20,
        opacity: op,
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-sans)",
          fontWeight: 600,
          fontSize: 44,
          textTransform: "uppercase",
          letterSpacing: "-0.06em",
          color: "var(--r3-porcelain)",
          transform: `translateY(${rise}px)`,
        }}
      >
        R<span style={{ color: "var(--r3-coral)" }}>3</span>WORKED
      </span>
      <span
        style={{
          fontFamily: "var(--font-sans)",
          fontWeight: 500,
          fontSize: 20,
          color: "rgba(247,243,238,0.7)",
          transform: `translateY(${rise}px)`,
        }}
      >
        Stop losing enquiries.
      </span>
    </div>
  );
}

/* ---------------------------------------------------------------- */
/*  Root                                                              */
/* ---------------------------------------------------------------- */

function LeadRescueStory() {
  return (
    <>
      <Sprite start={0} end={1.9}><TitleCard eyebrow="Phase 01" headline="Catch every enquiry." /></Sprite>
      <Sprite start={1.6} end={9.6}><Scene1Lead /></Sprite>

      <Sprite start={9.6} end={11.5}><TitleCard eyebrow="Phase 02" headline="A website that looks the part." /></Sprite>
      <Sprite start={11.2} end={19.2}><Scene2Uplift /></Sprite>

      <Sprite start={19.2} end={21.1}><TitleCard eyebrow="Phase 03" headline="Turn finished jobs into 5-star reviews." /></Sprite>
      <Sprite start={20.8} end={28.8}><Scene3Reviews /></Sprite>

      <Sprite start={28.8} end={32}><Outro /></Sprite>
    </>
  );
}

window.LeadRescueStory = LeadRescueStory;
