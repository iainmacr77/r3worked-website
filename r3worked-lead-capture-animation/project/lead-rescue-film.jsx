// Lead Rescue — a 20s, 3-scene film. Premium editorial, procedural signal-wave visual.
const { Stage, Sprite, useTime, useSprite } = window;

const PAPER = '#F5F2EA';
const INK = '#171309';
const COPPER = '#C4601F';
const COPPER_BRIGHT = '#E8853F';
const MUTED = '#8B8171';
const SERIF = "'Instrument Serif', Georgia, serif";
const SANS = "Helvetica, Arial, sans-serif";

const ss = (t, a, b) => { const x = Math.max(0, Math.min(1, (t - a) / (b - a))); return x * x * (3 - 2 * x); };
const lerp = (a, b, m) => a + (b - a) * m;

// ---------------- procedural signal-wave field (the standout component) ----------------
const RING_TIMES = [1.9, 3.0, 4.1];
const PHONE_SRC = { x: 1360, y: 510 };
const CATCH_PT = { x: 610, y: 560 };

function drawWaves(ctx, t, W, H) {
  ctx.clearRect(0, 0, W, H);
  const dark = ss(t, 7.7, 8.5) - ss(t, 15.3, 16.1);
  const capture = ss(t, 11.5, 13.2);
  const calm3 = ss(t, 16.2, 17.7);

  const ampScene1 = lerp(16, 5, ss(t, 5.6, 6.7));
  const ampScene2 = lerp(56, 9, capture);
  const amp = lerp(ampScene1, ampScene2, dark) * lerp(1, 0.6, calm3);
  const spread = lerp(1, lerp(1.08, 0.3, capture), dark);
  const fq = lerp(1, 1.9, dark);

  const L = 40, cy = H * 0.52;
  for (let i = 0; i < L; i++) {
    const fi = i / (L - 1);
    const yBase = cy + (fi - 0.5) * H * 0.8 * spread;
    const cw = 1 - Math.abs(fi - 0.5) * 2; // center weight 0..1
    const alpha = lerp(0.05 + 0.09 * cw, 0.10 + 0.42 * cw, dark);
    const r = Math.round(lerp(23, lerp(196, 232, capture * cw), dark));
    const g = Math.round(lerp(19, lerp(96, 133, capture * cw), dark));
    const b = Math.round(lerp(12, lerp(31, 63, capture * cw), dark));
    ctx.strokeStyle = `rgba(${r},${g},${b},${alpha})`;
    ctx.lineWidth = lerp(1, 1.6, dark * cw);
    ctx.beginPath();
    for (let x = -10; x <= W + 10; x += 8) {
      let off =
        Math.sin(x * 0.0038 * fq + t * 1.1 + i * 0.71) * 0.9 +
        Math.sin(x * 0.0091 * fq - t * 0.75 + i * 1.37) * 0.55 +
        Math.sin(x * 0.0142 * fq + t * 1.9 + i * 2.9) * 0.35;
      off *= amp;
      // scene 1: unanswered rings ripple outward from the phone and die
      if (t < 10) {
        for (const te of RING_TIMES) {
          const age = t - te;
          if (age > 0 && age < 2.6) {
            const dx = x - PHONE_SRC.x, dy = yBase - PHONE_SRC.y;
            const d = Math.sqrt(dx * dx + dy * dy);
            const rad = age * 520;
            const wave = Math.exp(-((d - rad) ** 2) / 7200) * 30 * (1 - age / 2.6);
            off += wave * (dy === 0 ? 1 : dy / Math.max(d, 40));
          }
        }
      }
      // scene 2: the catch — one bright pulse contracts INTO the alert point
      if (t > 11.2 && t < 13.0) {
        const age = t - 11.2;
        const dx = x - CATCH_PT.x, dy = yBase - CATCH_PT.y;
        const d = Math.sqrt(dx * dx + dy * dy);
        const rad = (1 - ss(age, 0, 1.4)) * 900;
        const wave = Math.exp(-((d - rad) ** 2) / 5200) * 44 * (1 - age / 1.7);
        off += wave * (dy === 0 ? 1 : dy / Math.max(d, 40));
      }
      if (x === -10) ctx.moveTo(x, yBase + off); else ctx.lineTo(x, yBase + off);
    }
    ctx.stroke();
  }
  // contracting catch ring
  if (t > 11.2 && t < 12.8) {
    const age = t - 11.2;
    const rad = (1 - ss(age, 0, 1.4)) * 620 + 8;
    ctx.strokeStyle = `rgba(232,133,63,${0.7 * (1 - age / 1.6)})`;
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.arc(CATCH_PT.x, CATCH_PT.y, Math.max(rad, 2), 0, Math.PI * 2);
    ctx.stroke();
  }
}

function WaveField() {
  const t = useTime();
  const ref = React.useRef(null);
  React.useEffect(() => {
    const c = ref.current;
    if (!c) return;
    const ctx = c.getContext('2d');
    ctx.setTransform(0.5, 0, 0, 0.5, 0, 0);
    drawWaves(ctx, t, 1920, 1080);
  }, [t]);
  return <canvas ref={ref} width={960} height={540} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} />;
}

// ---------------- small building blocks ----------------
function fadeIO(lt, dur, inD, outD) {
  return Math.min(ss(lt, 0, inD), ss(dur - lt, 0, outD));
}

function Label({ text, color, style }) {
  return <div style={{ fontFamily: SANS, fontSize: 24, letterSpacing: '0.28em', fontWeight: 700, color: color || MUTED, textTransform: 'uppercase', ...style }}>{text}</div>;
}

function Fade({ children, inD = 0.6, outD = 0.5, rise = 26, style }) {
  const { localTime, duration } = useSprite();
  const o = fadeIO(localTime, duration, inD, outD);
  const y = (1 - ss(localTime, 0, inD)) * rise;
  return <div style={{ position: 'absolute', opacity: o, transform: `translateY(${y}px)`, ...style }}>{children}</div>;
}

// ---------------- scene 1: the ringing phone ----------------
function RingingPhone() {
  const t = useTime();
  const { localTime, duration } = useSprite();
  const o = fadeIO(localTime, duration, 0.55, 0.5);
  const missed = t > 5.3;
  // gentle deterministic pulse near each ring (drives the avatar only)
  let pulse = 0;
  for (const te of RING_TIMES) {
    const a = t - te;
    if (a > 0 && a < 0.9) pulse = Math.max(pulse, Math.sin((a / 0.9) * Math.PI));
  }
  if (missed) pulse = 0;
  const W = 320, H = 650;
  return (
    <div style={{ position: 'absolute', left: 1200, top: 185, width: W, height: H, opacity: o, transform: `translateY(${(1 - ss(localTime, 0, 0.55)) * 34}px)`, perspective: 1700 }}>
      {/* body — slight 3D angle */}
      <div style={{ position: 'absolute', inset: 0, borderRadius: 52, background: '#0B0A08', boxShadow: '0 44px 90px rgba(23,19,9,0.34), 0 14px 30px rgba(23,19,9,0.22)', padding: 10, transform: 'rotateY(-13deg) rotateX(3.5deg)', transformStyle: 'preserve-3d' }}>
        {/* depth slabs — chassis thickness revealed by the tilt */}
        <div style={{ position: 'absolute', inset: -1, borderRadius: 53, background: '#050403', transform: 'translateZ(-18px)' }}></div>
        <div style={{ position: 'absolute', inset: -1, borderRadius: 53, background: 'linear-gradient(105deg, #353028 0%, #14110D 45%, #0C0A07 100%)', transform: 'translateZ(-9px)' }}></div>
        {/* titanium rim */}
        <div style={{ position: 'absolute', inset: 0, borderRadius: 52, background: 'linear-gradient(105deg, #565044 0%, #26221C 26%, #16130F 58%, #3E382F 88%, #57503F 100%)' }}></div>
        <div style={{ position: 'absolute', inset: 3, borderRadius: 49, background: '#0B0A08' }}></div>
        {/* near-edge specular highlight */}
        <div style={{ position: 'absolute', top: 8, bottom: 8, right: 1, width: 2, borderRadius: 2, background: 'linear-gradient(180deg, transparent, rgba(255,255,255,0.30) 18%, rgba(255,255,255,0.30) 82%, transparent)' }}></div>
        <div style={{ position: 'absolute', top: 10, bottom: 10, left: 1, width: 1.5, borderRadius: 2, background: 'linear-gradient(180deg, transparent, rgba(255,255,255,0.10) 20%, rgba(255,255,255,0.10) 80%, transparent)' }}></div>
        {/* side buttons */}
        <div style={{ position: 'absolute', left: -5, top: 128, width: 5, height: 30, borderRadius: '3px 0 0 3px', background: 'linear-gradient(90deg, #4A443A, #211D18)', boxShadow: '-1px 1px 2px rgba(0,0,0,0.5)' }}></div>
        <div style={{ position: 'absolute', left: -5, top: 186, width: 5, height: 58, borderRadius: '3px 0 0 3px', background: 'linear-gradient(90deg, #4A443A, #211D18)', boxShadow: '-1px 1px 2px rgba(0,0,0,0.5)' }}></div>
        <div style={{ position: 'absolute', left: -5, top: 258, width: 5, height: 58, borderRadius: '3px 0 0 3px', background: 'linear-gradient(90deg, #4A443A, #211D18)', boxShadow: '-1px 1px 2px rgba(0,0,0,0.5)' }}></div>
        <div style={{ position: 'absolute', right: -5, top: 208, width: 5, height: 92, borderRadius: '0 3px 3px 0', background: 'linear-gradient(90deg, #211D18, #4A443A)', boxShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}></div>
        {/* screen */}
        <div style={{ position: 'absolute', inset: 10, borderRadius: 44, background: 'linear-gradient(180deg, #1B1813 0%, #12100C 100%)', overflow: 'hidden', fontFamily: SANS }}>
          {/* dynamic island */}
          <div style={{ position: 'absolute', top: 14, left: '50%', transform: 'translateX(-50%)', width: 96, height: 28, borderRadius: 99, background: '#000' }}></div>
          {!missed && (
            <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 84 }}>
              <div style={{ fontSize: 17, letterSpacing: '0.18em', color: 'rgba(245,242,234,0.5)', fontWeight: 600 }}>INCOMING CALL</div>
              <div style={{ fontSize: 32, fontWeight: 700, color: PAPER, marginTop: 14, letterSpacing: '-0.01em' }}>07700 900 416</div>
              <div style={{ fontSize: 19, color: 'rgba(245,242,234,0.55)', marginTop: 8 }}>New customer · Mobile</div>
              {/* avatar */}
              <div style={{ width: 104, height: 104, borderRadius: 99, background: 'rgba(196,96,31,0.18)', border: '1px solid rgba(232,133,63,0.35)', marginTop: 42, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 40, color: COPPER_BRIGHT, fontFamily: SERIF, transform: `scale(${1 + pulse * 0.06})`, boxShadow: `0 0 0 ${pulse * 12}px rgba(232,133,63,${0.14 * pulse})` }}>?</div>
              {/* decline / accept */}
              <div style={{ position: 'absolute', bottom: 54, left: 0, right: 0, display: 'flex', justifyContent: 'space-between', padding: '0 44px' }}>
                <CallBtn bg="#C43B2A" rot={135} label="Decline" />
                <CallBtn bg="#3BA355" rot={0} label="Accept" />
              </div>
            </div>
          )}
          {/* glass sheen */}
          <div style={{ position: 'absolute', inset: 0, borderRadius: 44, background: 'linear-gradient(115deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.025) 26%, transparent 44%)', pointerEvents: 'none', zIndex: 2 }}></div>
          {missed && (
            <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 14 }}>
              <div style={{ width: 74, height: 74, borderRadius: 99, background: 'rgba(196,59,42,0.16)', border: '1px solid rgba(196,59,42,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 34, color: '#E06452' }}>✕</div>
              <div style={{ fontSize: 24, fontWeight: 700, color: '#E06452', letterSpacing: '0.06em' }}>Missed Call</div>
              <div style={{ fontSize: 18, color: 'rgba(245,242,234,0.5)' }}>07700 900 416 · just now</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function CallBtn({ bg, rot, label, pulse = 0 }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
      <div style={{ width: 68, height: 68, borderRadius: 99, background: bg, display: 'flex', alignItems: 'center', justifyContent: 'center', transform: `scale(${1 + pulse * 0.08})`, boxShadow: pulse ? `0 0 0 ${pulse * 10}px rgba(59,163,85,0.18)` : 'none' }}>
        <svg width="30" height="30" viewBox="0 0 24 24" style={{ transform: `rotate(${rot}deg)` }}>
          <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.4.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .7-.2 1l-2.3 2.2z" fill="#fff" />
        </svg>
      </div>
      <div style={{ fontSize: 15, color: 'rgba(245,242,234,0.6)' }}>{label}</div>
    </div>
  );
}

// ---------------- scene 2: the alert card ----------------
function AlertCard() {
  const { localTime, duration } = useSprite();
  const o = fadeIO(localTime, duration, 0.6, 0.5);
  const y = (1 - ss(localTime, 0, 0.65)) * 36;
  return (
    <div style={{ position: 'absolute', left: 330, top: 400, width: 560, opacity: o, transform: `translateY(${y}px)`, background: 'rgba(255,254,251,0.06)', border: '1px solid rgba(232,133,63,0.45)', borderRadius: 22, padding: '36px 42px', fontFamily: SANS, backdropFilter: 'blur(6px)' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ fontSize: 21, letterSpacing: '0.24em', fontWeight: 700, color: COPPER_BRIGHT }}>NEW LEAD</div>
        <div style={{ fontSize: 22, color: 'rgba(245,242,234,0.55)' }}>07:42</div>
      </div>
      <div style={{ fontFamily: SERIF, fontSize: 52, color: PAPER, marginTop: 18 }}>James Whitfield</div>
      <div style={{ fontSize: 26, color: 'rgba(245,242,234,0.7)', marginTop: 8 }}>Roof repair · M20, Manchester</div>
      <div style={{ display: 'flex', gap: 12, marginTop: 26, flexWrap: 'wrap' }}>
        <Chip text="✓ Missed call rescued" show={localTime > 0.9} />
        <Chip text="✓ Web form captured" show={localTime > 1.4} />
        <Chip text="→ Sent to your phone" show={localTime > 1.85} bright />
      </div>
    </div>
  );
}

function Chip({ text, show, bright }) {
  return <div style={{ fontSize: 23, fontWeight: 600, color: bright ? INK : COPPER_BRIGHT, background: bright ? COPPER_BRIGHT : 'rgba(232,133,63,0.12)', border: '1px solid rgba(232,133,63,0.4)', borderRadius: 99, padding: '10px 20px', opacity: show ? 1 : 0, transform: `translateY(${show ? 0 : 10}px)`, transition: 'opacity 0.4s, transform 0.4s' }}>{text}</div>;
}

// ---------------- scene 3: the log ----------------
const TICKS = [
  ['Captured', 'Web form + call, one record', 0.45],
  ['Alerted', 'On your phone in seconds', 1.05],
  ['Logged', 'Impossible to lose', 1.65],
  ['Follow-up ready', 'Next step already visible', 2.25],
];

function LogCard() {
  const { localTime, duration } = useSprite();
  const o = fadeIO(localTime, duration, 0.6, 0.5);
  return (
    <div style={{ position: 'absolute', left: 190, top: 300, width: 600, opacity: o, transform: `translateY(${(1 - ss(localTime, 0, 0.6)) * 30}px)`, background: '#FFFEFB', borderRadius: 22, boxShadow: '0 24px 70px rgba(23,19,9,0.12)', padding: '20px 44px', fontFamily: SANS }}>
      {TICKS.map(([title, sub, at], i) => {
        const on = localTime > at;
        return (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 24, padding: '24px 0', borderBottom: i < 3 ? '1px solid rgba(23,19,9,0.08)' : 'none', opacity: on ? 1 : 0.22, transition: 'opacity 0.45s' }}>
            <div style={{ width: 44, height: 44, borderRadius: 99, flex: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', background: on ? COPPER : 'rgba(23,19,9,0.06)', color: '#FFFEFB', fontSize: 24, fontWeight: 700, transform: `scale(${on ? 1 : 0.7})`, transition: 'transform 0.4s, background 0.4s' }}>✓</div>
            <div>
              <div style={{ fontSize: 30, fontWeight: 700, color: INK }}>{title}</div>
              <div style={{ fontSize: 23, color: MUTED, marginTop: 4 }}>{sub}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ---------------- root ----------------
function Root() {
  const t = useTime();
  const dark = ss(t, 7.7, 8.5) - ss(t, 15.3, 16.1);
  return (
    <div data-screen-label={'t=' + Math.floor(t) + 's'} style={{ position: 'absolute', inset: 0, overflow: 'hidden', fontFamily: SANS }}>
      <div style={{ position: 'absolute', inset: 0, background: INK, opacity: dark }}></div>
      <WaveField />

      {/* Scene 1 — on the tools */}
      <Sprite start={0.4} end={5.5}>
        <Fade style={{ left: 190, top: 250 }}>
          <Label text="7:02 AM · Tuesday" />
          <div style={{ fontFamily: SERIF, fontSize: 120, color: INK, lineHeight: 1.02, marginTop: 26, letterSpacing: '-0.01em' }}>You're on<br />the tools.</div>
        </Fade>
      </Sprite>
      <Sprite start={1.4} end={6.6}><RingingPhone /></Sprite>
      <Sprite start={5.7} end={8.1}>
        <Fade inD={0.35} outD={0.4} rise={0} style={{ left: 0, right: 0, top: 840, textAlign: 'center' }}>
          <div style={{ fontFamily: SERIF, fontSize: 92, color: INK, letterSpacing: '-0.01em' }}>Missed call. <span style={{ color: '#B3341F' }}>Missed job.</span></div>
        </Fade>
      </Sprite>

      {/* Scene 2 — the catch */}
      <Sprite start={8.6} end={11.5}>
        <Fade style={{ left: 0, right: 0, top: 380, textAlign: 'center' }}>
          <Label text="Not anymore" color={COPPER_BRIGHT} />
          <div style={{ fontFamily: SERIF, fontSize: 116, color: PAPER, lineHeight: 1.04, marginTop: 26 }}>Every ring.<br />Every form.</div>
        </Fade>
      </Sprite>
      <Sprite start={11.7} end={15.4}><AlertCard /></Sprite>
      <Sprite start={12.0} end={15.4}>
        <Fade style={{ left: 1050, top: 470, width: 720 }}>
          <div style={{ fontFamily: SERIF, fontSize: 130, color: PAPER }}>Caught.</div>
          <div style={{ fontSize: 28, color: 'rgba(245,242,234,0.6)', marginTop: 14, fontFamily: SANS }}>Before your competitor's phone even rings.</div>
        </Fade>
      </Sprite>

      {/* Scene 3 — while you kept working */}
      <Sprite start={16.1} end={20.3}><LogCard /></Sprite>
      <Sprite start={16.4} end={20.3}>
        <Fade style={{ left: 950, top: 400, width: 800 }}>
          <Label text="Back at the office" />
          <div style={{ fontFamily: SERIF, fontSize: 96, color: INK, lineHeight: 1.05, marginTop: 24 }}>While you<br />kept working.</div>
        </Fade>
      </Sprite>
      <Sprite start={20.6} end={25}>
        <FinalLine />
      </Sprite>
    </div>
  );
}

function FinalLine() {
  const { localTime } = useSprite();
  const o = ss(localTime, 0, 0.6);
  const sc = lerp(0.965, 1, ss(localTime, 0, 0.85));
  return (
    <div style={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', opacity: o, transform: `scale(${sc})` }}>
      <div style={{ fontFamily: SERIF, fontSize: 128, color: INK, textAlign: 'center', lineHeight: 1.05, letterSpacing: '-0.01em' }}>Never miss<br />another lead.</div>
      <div style={{ fontFamily: SANS, fontSize: 26, letterSpacing: '0.26em', fontWeight: 700, color: COPPER, marginTop: 40, textTransform: 'uppercase', opacity: ss(localTime, 0.45, 1.1) }}>Calls · Forms · Follow-ups</div>
    </div>
  );
}

function LeadRescueFilm() {
  return (
    <Stage width={1920} height={1080} duration={25} background={PAPER}>
      <Root />
    </Stage>
  );
}

window.LeadRescueFilm = LeadRescueFilm;
