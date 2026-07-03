"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import { useReducedMotion } from "framer-motion";

const PAPER = "#F5F2EA";
const INK = "#171309";
const COPPER = "#C4601F";
const COPPER_BRIGHT = "#E8853F";
const MUTED = "#8B8171";
const SERIF = "Georgia, 'Times New Roman', serif";
const SANS = "Helvetica, Arial, sans-serif";
const STAGE_WIDTH = 1920;
const STAGE_HEIGHT = 1080;
const DURATION = 25;

const RING_TIMES = [1.9, 3] as const;
const MISSED_CALL_AT = 4.3;
const PHONE_SRC = { x: 1360, y: 510 };
const CATCH_PT = { x: 610, y: 560 };

const smoothStep = (t: number, a: number, b: number) => {
  const x = Math.max(0, Math.min(1, (t - a) / (b - a)));
  return x * x * (3 - 2 * x);
};

const lerp = (a: number, b: number, m: number) => a + (b - a) * m;

function drawWaves(
  ctx: CanvasRenderingContext2D,
  t: number,
  width: number,
  height: number
) {
  ctx.clearRect(0, 0, width, height);

  const dark = smoothStep(t, 7.7, 8.5) - smoothStep(t, 15.3, 16.1);
  const capture = smoothStep(t, 11.5, 13.2);
  const calm3 = smoothStep(t, 16.2, 17.7);
  const ampScene1 = lerp(16, 5, smoothStep(t, 4.8, 5.9));
  const ampScene2 = lerp(56, 9, capture);
  const amp = lerp(ampScene1, ampScene2, dark) * lerp(1, 0.6, calm3);
  const spread = lerp(1, lerp(1.08, 0.3, capture), dark);
  const fq = lerp(1, 1.9, dark);
  const lines = 40;
  const cy = height * 0.52;

  for (let i = 0; i < lines; i++) {
    const fi = i / (lines - 1);
    const yBase = cy + (fi - 0.5) * height * 0.8 * spread;
    const centerWeight = 1 - Math.abs(fi - 0.5) * 2;
    const alpha = lerp(0.05 + 0.09 * centerWeight, 0.1 + 0.42 * centerWeight, dark);
    const r = Math.round(lerp(23, lerp(196, 232, capture * centerWeight), dark));
    const g = Math.round(lerp(19, lerp(96, 133, capture * centerWeight), dark));
    const b = Math.round(lerp(12, lerp(31, 63, capture * centerWeight), dark));

    ctx.strokeStyle = `rgba(${r},${g},${b},${alpha})`;
    ctx.lineWidth = lerp(1, 1.6, dark * centerWeight);
    ctx.beginPath();

    for (let x = -10; x <= width + 10; x += 8) {
      let offset =
        Math.sin(x * 0.0038 * fq + t * 1.1 + i * 0.71) * 0.9 +
        Math.sin(x * 0.0091 * fq - t * 0.75 + i * 1.37) * 0.55 +
        Math.sin(x * 0.0142 * fq + t * 1.9 + i * 2.9) * 0.35;

      offset *= amp;

      if (t < 10) {
        for (const ringTime of RING_TIMES) {
          const age = t - ringTime;
          if (age > 0 && age < 2.6) {
            const dx = x - PHONE_SRC.x;
            const dy = yBase - PHONE_SRC.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const radius = age * 520;
            const wave =
              Math.exp(-((distance - radius) ** 2) / 7200) * 30 * (1 - age / 2.6);
            offset += wave * (dy === 0 ? 1 : dy / Math.max(distance, 40));
          }
        }
      }

      if (t > 11.2 && t < 13) {
        const age = t - 11.2;
        const dx = x - CATCH_PT.x;
        const dy = yBase - CATCH_PT.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const radius = (1 - smoothStep(age, 0, 1.4)) * 900;
        const wave =
          Math.exp(-((distance - radius) ** 2) / 5200) * 44 * (1 - age / 1.7);
        offset += wave * (dy === 0 ? 1 : dy / Math.max(distance, 40));
      }

      if (x === -10) {
        ctx.moveTo(x, yBase + offset);
      } else {
        ctx.lineTo(x, yBase + offset);
      }
    }

    ctx.stroke();
  }

  if (t > 11.2 && t < 12.8) {
    const age = t - 11.2;
    const radius = (1 - smoothStep(age, 0, 1.4)) * 620 + 8;

    ctx.strokeStyle = `rgba(232,133,63,${0.7 * (1 - age / 1.6)})`;
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.arc(CATCH_PT.x, CATCH_PT.y, Math.max(radius, 2), 0, Math.PI * 2);
    ctx.stroke();
  }
}

function useIntroClock(duration: number, onComplete: () => void, play: boolean) {
  const [time, setTime] = useState(() => (play ? 0 : duration));
  const completeRef = useRef(false);
  const onCompleteRef = useRef(onComplete);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    completeRef.current = false;

    if (!play) {
      const timeout = window.setTimeout(() => {
        setTime(duration);
        if (!completeRef.current) {
          completeRef.current = true;
          onCompleteRef.current();
        }
      }, 0);
      return () => clearTimeout(timeout);
    }

    let frame = 0;
    const startedAt = performance.now();

    const tick = (now: number) => {
      const next = Math.min((now - startedAt) / 1000, duration);
      setTime(next);

      if (next >= duration) {
        if (!completeRef.current) {
          completeRef.current = true;
          onCompleteRef.current();
        }
        return;
      }

      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [duration, play]);

  return time;
}

function useCoverScale() {
  const ref = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const measure = () => {
      const rect = element.getBoundingClientRect();
      setScale(Math.max(rect.width / STAGE_WIDTH, rect.height / STAGE_HEIGHT));
    };

    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(element);
    window.addEventListener("resize", measure);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  return { ref, scale };
}

function fadeIO(localTime: number, duration: number, inDuration: number, outDuration: number) {
  return Math.min(
    smoothStep(localTime, 0, inDuration),
    smoothStep(duration - localTime, 0, outDuration)
  );
}

function spriteVisible(time: number, start: number, end: number) {
  return time >= start && time <= end;
}

function getSprite(time: number, start: number, end: number) {
  return {
    localTime: Math.max(0, time - start),
    duration: end - start,
  };
}

function WaveField({ time }: { time: number }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    drawWaves(ctx, time, STAGE_WIDTH, STAGE_HEIGHT);
  }, [time]);

  return (
    <canvas
      ref={ref}
      width={STAGE_WIDTH}
      height={STAGE_HEIGHT}
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
    />
  );
}

function Label({
  text,
  color = MUTED,
  style,
}: {
  text: string;
  color?: string;
  style?: CSSProperties;
}) {
  return (
    <div
      style={{
        color,
        fontFamily: SANS,
        fontSize: 24,
        fontWeight: 700,
        letterSpacing: "0.28em",
        textTransform: "uppercase",
        ...style,
      }}
    >
      {text}
    </div>
  );
}

function Fade({
  children,
  localTime,
  duration,
  inDuration = 0.6,
  outDuration = 0.5,
  rise = 26,
  style,
}: {
  children: ReactNode;
  localTime: number;
  duration: number;
  inDuration?: number;
  outDuration?: number;
  rise?: number;
  style: CSSProperties;
}) {
  const opacity = fadeIO(localTime, duration, inDuration, outDuration);
  const y = (1 - smoothStep(localTime, 0, inDuration)) * rise;

  return (
    <div
      style={{
        position: "absolute",
        opacity,
        transform: `translateY(${y}px)`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

function CallIcon({ rotation }: { rotation: number }) {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 24 24"
      aria-hidden="true"
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <path
        d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.4.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .7-.2 1l-2.3 2.2z"
        fill="#fff"
      />
    </svg>
  );
}

function CallButton({
  bg,
  rotation,
  label,
  pulse = 0,
}: {
  bg: string;
  rotation: number;
  label: string;
  pulse?: number;
}) {
  return (
    <div style={{ alignItems: "center", display: "flex", flexDirection: "column", gap: 8 }}>
      <div
        style={{
          alignItems: "center",
          background: bg,
          borderRadius: 99,
          boxShadow: pulse ? `0 0 0 ${pulse * 10}px rgba(59,163,85,0.18)` : "none",
          display: "flex",
          height: 68,
          justifyContent: "center",
          transform: `scale(${1 + pulse * 0.08})`,
          width: 68,
        }}
      >
        <CallIcon rotation={rotation} />
      </div>
      <div style={{ color: "rgba(245,242,234,0.6)", fontSize: 15 }}>{label}</div>
    </div>
  );
}

function RingingPhone({
  time,
  localTime,
  duration,
}: {
  time: number;
  localTime: number;
  duration: number;
}) {
  const opacity = fadeIO(localTime, duration, 0.55, 0.5);
  const missed = time > MISSED_CALL_AT;
  const width = 320;
  const height = 650;
  let pulse = 0;

  for (const ringTime of RING_TIMES) {
    const age = time - ringTime;
    if (age > 0 && age < 0.9) {
      pulse = Math.max(pulse, Math.sin((age / 0.9) * Math.PI));
    }
  }

  if (missed) pulse = 0;

  return (
    <div
      style={{
        height,
        left: 1200,
        opacity,
        perspective: 1700,
        position: "absolute",
        top: 185,
        transform: `translateY(${(1 - smoothStep(localTime, 0, 0.55)) * 34}px)`,
        width,
      }}
    >
      <div
        style={{
          background: "#0B0A08",
          borderRadius: 52,
          boxShadow:
            "0 44px 90px rgba(23,19,9,0.34), 0 14px 30px rgba(23,19,9,0.22)",
          inset: 0,
          padding: 10,
          position: "absolute",
          transform: "rotateY(-13deg) rotateX(3.5deg)",
          transformStyle: "preserve-3d",
        }}
      >
        <div
          style={{
            background: "#050403",
            borderRadius: 53,
            inset: -1,
            position: "absolute",
            transform: "translateZ(-18px)",
          }}
        />
        <div
          style={{
            background:
              "linear-gradient(105deg, #353028 0%, #14110D 45%, #0C0A07 100%)",
            borderRadius: 53,
            inset: -1,
            position: "absolute",
            transform: "translateZ(-9px)",
          }}
        />
        <div
          style={{
            background:
              "linear-gradient(105deg, #565044 0%, #26221C 26%, #16130F 58%, #3E382F 88%, #57503F 100%)",
            borderRadius: 52,
            inset: 0,
            position: "absolute",
          }}
        />
        <div
          style={{
            background: "#0B0A08",
            borderRadius: 49,
            inset: 3,
            position: "absolute",
          }}
        />
        <div
          style={{
            background:
              "linear-gradient(180deg, transparent, rgba(255,255,255,0.30) 18%, rgba(255,255,255,0.30) 82%, transparent)",
            borderRadius: 2,
            bottom: 8,
            position: "absolute",
            right: 1,
            top: 8,
            width: 2,
          }}
        />
        <div
          style={{
            background:
              "linear-gradient(180deg, transparent, rgba(255,255,255,0.10) 20%, rgba(255,255,255,0.10) 80%, transparent)",
            borderRadius: 2,
            bottom: 10,
            left: 1,
            position: "absolute",
            top: 10,
            width: 1.5,
          }}
        />
        <div
          style={{
            background: "linear-gradient(90deg, #4A443A, #211D18)",
            borderRadius: "3px 0 0 3px",
            boxShadow: "-1px 1px 2px rgba(0,0,0,0.5)",
            height: 30,
            left: -5,
            position: "absolute",
            top: 128,
            width: 5,
          }}
        />
        <div
          style={{
            background: "linear-gradient(90deg, #4A443A, #211D18)",
            borderRadius: "3px 0 0 3px",
            boxShadow: "-1px 1px 2px rgba(0,0,0,0.5)",
            height: 58,
            left: -5,
            position: "absolute",
            top: 186,
            width: 5,
          }}
        />
        <div
          style={{
            background: "linear-gradient(90deg, #4A443A, #211D18)",
            borderRadius: "3px 0 0 3px",
            boxShadow: "-1px 1px 2px rgba(0,0,0,0.5)",
            height: 58,
            left: -5,
            position: "absolute",
            top: 258,
            width: 5,
          }}
        />
        <div
          style={{
            background: "linear-gradient(90deg, #211D18, #4A443A)",
            borderRadius: "0 3px 3px 0",
            boxShadow: "1px 1px 2px rgba(0,0,0,0.5)",
            height: 92,
            position: "absolute",
            right: -5,
            top: 208,
            width: 5,
          }}
        />
        <div
          style={{
            background: "linear-gradient(180deg, #1B1813 0%, #12100C 100%)",
            borderRadius: 44,
            fontFamily: SANS,
            inset: 10,
            overflow: "hidden",
            position: "absolute",
          }}
        >
          <div
            style={{
              background: "#000",
              borderRadius: 99,
              height: 28,
              left: "50%",
              position: "absolute",
              top: 14,
              transform: "translateX(-50%)",
              width: 96,
            }}
          />

          {!missed && (
            <div
              style={{
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                inset: 0,
                paddingTop: 84,
                position: "absolute",
              }}
            >
              <div
                style={{
                  color: "rgba(245,242,234,0.5)",
                  fontSize: 17,
                  fontWeight: 600,
                  letterSpacing: "0.18em",
                }}
              >
                INCOMING CALL
              </div>
              <div
                style={{
                  color: PAPER,
                  fontSize: 32,
                  fontWeight: 700,
                  letterSpacing: "-0.01em",
                  marginTop: 14,
                }}
              >
                07700 900 416
              </div>
              <div style={{ color: "rgba(245,242,234,0.55)", fontSize: 19, marginTop: 8 }}>
                New customer &middot; Mobile
              </div>
              <div
                style={{
                  alignItems: "center",
                  background: "rgba(196,96,31,0.18)",
                  border: "1px solid rgba(232,133,63,0.35)",
                  borderRadius: 99,
                  boxShadow: `0 0 0 ${pulse * 12}px rgba(232,133,63,${
                    0.14 * pulse
                  })`,
                  color: COPPER_BRIGHT,
                  display: "flex",
                  fontFamily: SERIF,
                  fontSize: 40,
                  height: 104,
                  justifyContent: "center",
                  marginTop: 42,
                  transform: `scale(${1 + pulse * 0.06})`,
                  width: 104,
                }}
              >
                ?
              </div>
              <div
                style={{
                  bottom: 54,
                  display: "flex",
                  justifyContent: "space-between",
                  left: 0,
                  padding: "0 44px",
                  position: "absolute",
                  right: 0,
                }}
              >
                <CallButton bg="#C43B2A" rotation={135} label="Decline" />
                <CallButton bg="#3BA355" rotation={0} label="Accept" />
              </div>
            </div>
          )}

          <div
            style={{
              background:
                "linear-gradient(115deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.025) 26%, transparent 44%)",
              borderRadius: 44,
              inset: 0,
              pointerEvents: "none",
              position: "absolute",
              zIndex: 2,
            }}
          />

          {missed && (
            <div
              style={{
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                gap: 14,
                inset: 0,
                justifyContent: "center",
                position: "absolute",
              }}
            >
              <div
                style={{
                  alignItems: "center",
                  background: "rgba(196,59,42,0.16)",
                  border: "1px solid rgba(196,59,42,0.5)",
                  borderRadius: 99,
                  color: "#E06452",
                  display: "flex",
                  fontSize: 34,
                  height: 74,
                  justifyContent: "center",
                  width: 74,
                }}
              >
                &times;
              </div>
              <div
                style={{
                  color: "#E06452",
                  fontSize: 24,
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                }}
              >
                Missed Call
              </div>
              <div style={{ color: "rgba(245,242,234,0.5)", fontSize: 18 }}>
                07700 900 416 &middot; just now
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function Chip({
  children,
  show,
  bright,
}: {
  children: ReactNode;
  show: boolean;
  bright?: boolean;
}) {
  return (
    <div
      style={{
        background: bright ? COPPER_BRIGHT : "rgba(232,133,63,0.12)",
        border: "1px solid rgba(232,133,63,0.4)",
        borderRadius: 99,
        color: bright ? INK : COPPER_BRIGHT,
        fontSize: 23,
        fontWeight: 600,
        opacity: show ? 1 : 0,
        padding: "10px 20px",
        transform: `translateY(${show ? 0 : 10}px)`,
        transition: "opacity 0.4s, transform 0.4s",
      }}
    >
      {children}
    </div>
  );
}

function AlertCard({ localTime, duration }: { localTime: number; duration: number }) {
  const opacity = fadeIO(localTime, duration, 0.6, 0.5);
  const y = (1 - smoothStep(localTime, 0, 0.65)) * 36;

  return (
    <div
      style={{
        backdropFilter: "blur(6px)",
        background: "rgba(255,254,251,0.06)",
        border: "1px solid rgba(232,133,63,0.45)",
        borderRadius: 22,
        fontFamily: SANS,
        left: 330,
        opacity,
        padding: "36px 42px",
        position: "absolute",
        top: 400,
        transform: `translateY(${y}px)`,
        width: 560,
      }}
    >
      <div style={{ alignItems: "center", display: "flex", justifyContent: "space-between" }}>
        <div
          style={{
            color: COPPER_BRIGHT,
            fontSize: 21,
            fontWeight: 700,
            letterSpacing: "0.24em",
          }}
        >
          NEW LEAD
        </div>
        <div style={{ color: "rgba(245,242,234,0.55)", fontSize: 22 }}>07:42</div>
      </div>
      <div style={{ color: PAPER, fontFamily: SERIF, fontSize: 52, marginTop: 18 }}>
        James Whitfield
      </div>
      <div style={{ color: "rgba(245,242,234,0.7)", fontSize: 26, marginTop: 8 }}>
        Roof repair &middot; M20, Manchester
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 26 }}>
        <Chip show={localTime > 0.9}>&#10003; Missed call rescued</Chip>
        <Chip show={localTime > 1.4}>&#10003; Web form captured</Chip>
        <Chip show={localTime > 1.85} bright>
          &rarr; Sent to your phone
        </Chip>
      </div>
    </div>
  );
}

const TICKS = [
  ["Captured", "Web form + call, one record", 0.45],
  ["Alerted", "On your phone in seconds", 1.05],
  ["Logged", "Impossible to lose", 1.65],
  ["Follow-up ready", "Next step already visible", 2.25],
] as const;

function LogCard({ localTime, duration }: { localTime: number; duration: number }) {
  const opacity = fadeIO(localTime, duration, 0.6, 0.5);

  return (
    <div
      style={{
        background: "#FFFEFB",
        borderRadius: 22,
        boxShadow: "0 24px 70px rgba(23,19,9,0.12)",
        fontFamily: SANS,
        left: 190,
        opacity,
        padding: "20px 44px",
        position: "absolute",
        top: 300,
        transform: `translateY(${(1 - smoothStep(localTime, 0, 0.6)) * 30}px)`,
        width: 600,
      }}
    >
      {TICKS.map(([title, sub, at], index) => {
        const on = localTime > at;

        return (
          <div
            key={title}
            style={{
              alignItems: "center",
              borderBottom: index < 3 ? "1px solid rgba(23,19,9,0.08)" : "none",
              display: "flex",
              gap: 24,
              opacity: on ? 1 : 0.22,
              padding: "24px 0",
              transition: "opacity 0.45s",
            }}
          >
            <div
              style={{
                alignItems: "center",
                background: on ? COPPER : "rgba(23,19,9,0.06)",
                borderRadius: 99,
                color: "#FFFEFB",
                display: "flex",
                flex: "none",
                fontSize: 24,
                fontWeight: 700,
                height: 44,
                justifyContent: "center",
                transform: `scale(${on ? 1 : 0.7})`,
                transition: "transform 0.4s, background 0.4s",
                width: 44,
              }}
            >
              &#10003;
            </div>
            <div>
              <div style={{ color: INK, fontSize: 30, fontWeight: 700 }}>{title}</div>
              <div style={{ color: MUTED, fontSize: 23, marginTop: 4 }}>{sub}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function FinalLine({ localTime }: { localTime: number }) {
  const opacity = smoothStep(localTime, 0, 0.6);
  const scale = lerp(0.965, 1, smoothStep(localTime, 0, 0.85));

  return (
    <div
      style={{
        alignItems: "center",
        bottom: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        left: 0,
        opacity,
        position: "absolute",
        right: 0,
        top: 0,
        transform: `scale(${scale})`,
      }}
    >
      <div
        style={{
          color: INK,
          fontFamily: SERIF,
          fontSize: 128,
          letterSpacing: "-0.01em",
          lineHeight: 1.05,
          textAlign: "center",
        }}
      >
        Never miss
        <br />
        another lead.
      </div>
      <div
        style={{
          color: COPPER,
          fontFamily: SANS,
          fontSize: 26,
          fontWeight: 700,
          letterSpacing: "0.26em",
          marginTop: 40,
          opacity: smoothStep(localTime, 0.45, 1.1),
          textTransform: "uppercase",
        }}
      >
        Calls &middot; Forms &middot; Follow-ups
      </div>
    </div>
  );
}

function SceneRoot({ time }: { time: number }) {
  const dark = smoothStep(time, 7.7, 8.5) - smoothStep(time, 15.3, 16.1);

  return (
    <div
      style={{
        fontFamily: SANS,
        inset: 0,
        overflow: "hidden",
        position: "absolute",
      }}
    >
      <div style={{ background: INK, inset: 0, opacity: dark, position: "absolute" }} />
      <WaveField time={time} />

      {spriteVisible(time, 0.4, 5.5) && (
        <Fade {...getSprite(time, 0.4, 5.5)} style={{ left: 190, top: 250 }}>
          <Label text="7:02 AM Tuesday" />
          <div
            style={{
              color: INK,
              fontFamily: SERIF,
              fontSize: 120,
              letterSpacing: "-0.01em",
              lineHeight: 1.02,
              marginTop: 26,
            }}
          >
            You&apos;re on
            <br />
            the tools.
          </div>
        </Fade>
      )}

      {spriteVisible(time, 1.4, 7.6) && (
        <RingingPhone time={time} {...getSprite(time, 1.4, 7.6)} />
      )}

      {spriteVisible(time, 5.65, 8.1) && (
        <Fade
          {...getSprite(time, 5.65, 8.1)}
          inDuration={0.45}
          outDuration={0.4}
          rise={0}
          style={{ left: 190, top: 300, width: 780 }}
        >
          <div
            style={{
              color: INK,
              fontFamily: SERIF,
              fontSize: 108,
              letterSpacing: "-0.01em",
              lineHeight: 1.03,
            }}
          >
            Missed call.
            <br />
            <span style={{ color: "#B3341F" }}>Missed job.</span>
          </div>
        </Fade>
      )}

      {spriteVisible(time, 8.6, 11.5) && (
        <Fade {...getSprite(time, 8.6, 11.5)} style={{ left: 0, right: 0, textAlign: "center", top: 380 }}>
          <Label text="Not anymore" color={COPPER_BRIGHT} />
          <div
            style={{
              color: PAPER,
              fontFamily: SERIF,
              fontSize: 116,
              lineHeight: 1.04,
              marginTop: 26,
            }}
          >
            Every ring.
            <br />
            Every form.
          </div>
        </Fade>
      )}

      {spriteVisible(time, 11.7, 15.4) && <AlertCard {...getSprite(time, 11.7, 15.4)} />}

      {spriteVisible(time, 12, 15.4) && (
        <Fade {...getSprite(time, 12, 15.4)} style={{ left: 1050, top: 470, width: 720 }}>
          <div style={{ color: PAPER, fontFamily: SERIF, fontSize: 130 }}>Caught.</div>
          <div
            style={{
              color: "rgba(245,242,234,0.6)",
              fontFamily: SANS,
              fontSize: 28,
              marginTop: 14,
            }}
          >
            Before your competitor&apos;s phone even rings.
          </div>
        </Fade>
      )}

      {spriteVisible(time, 16.1, 20.3) && <LogCard {...getSprite(time, 16.1, 20.3)} />}

      {spriteVisible(time, 16.4, 20.3) && (
        <Fade {...getSprite(time, 16.4, 20.3)} style={{ left: 950, top: 400, width: 800 }}>
          <Label text="Back at the office" />
          <div
            style={{
              color: INK,
              fontFamily: SERIF,
              fontSize: 96,
              lineHeight: 1.05,
              marginTop: 24,
            }}
          >
            While you
            <br />
            kept working.
          </div>
        </Fade>
      )}

      {spriteVisible(time, 20.6, DURATION) && <FinalLine {...getSprite(time, 20.6, DURATION)} />}
    </div>
  );
}

export function LeadRescueIntroFilm({ onComplete }: { onComplete: () => void }) {
  const reducedMotion = useReducedMotion();
  const { ref, scale } = useCoverScale();
  const complete = useCallback(() => onComplete(), [onComplete]);
  const time = useIntroClock(DURATION, complete, reducedMotion !== true);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden bg-[#F5F2EA]">
      <div
        style={{
          height: STAGE_HEIGHT,
          left: "50%",
          position: "absolute",
          top: "50%",
          transform: `translate(-50%, -50%) scale(${scale})`,
          transformOrigin: "center",
          width: STAGE_WIDTH,
        }}
      >
        <SceneRoot time={time} />
      </div>
    </div>
  );
}
