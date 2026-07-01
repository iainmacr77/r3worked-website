import React from "react";
import { Icon } from "../icons/Icon.jsx";

/* Operational status system — small system indicators only, never dominant. */
const STATUS_MAP = {
  received: { label: "Received", color: "var(--r3-coral)", dot: "var(--r3-coral)" },
  routed: { label: "Routed", color: "var(--r3-status-live)", dot: "var(--r3-status-live)" },
  logged: { label: "Logged", color: "var(--r3-status-live)", dot: "var(--r3-status-live)" },
  live: { label: "Live", color: "var(--r3-status-live)", dot: "var(--r3-status-live)" },
  "follow-up-ready": { label: "Follow-up ready", color: "var(--r3-status-live)", dot: "var(--r3-status-live)" },
  "coming-soon": { label: "Coming soon", color: "var(--r3-coral)", dot: "var(--r3-coral)" },
  "missed-call": { label: "Missed call", color: "var(--r3-status-pending)", dot: "var(--r3-status-pending)" },
  pending: { label: "Pending", color: "var(--r3-status-pending)", dot: "var(--r3-status-pending)" },
  inactive: { label: "Inactive", color: "var(--r3-status-inactive)", dot: "var(--r3-status-inactive)" },
};

export function StatusPill({ status = "received", label, pulse = false, dark = false, className, style }) {
  const cfg = STATUS_MAP[status] || STATUS_MAP.received;
  const text = label || cfg.label;
  return (
    <span
      className={className}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        borderRadius: "var(--radius-pill)",
        padding: "6px 14px",
        fontFamily: "var(--font-sans)",
        fontSize: "0.62rem",
        fontWeight: 700,
        textTransform: "uppercase",
        letterSpacing: "0.15em",
        color: cfg.color,
        background: dark ? "rgba(247,243,238,0.05)" : `color-mix(in srgb, ${cfg.color} 10%, transparent)`,
        border: `1px solid color-mix(in srgb, ${cfg.color} 25%, transparent)`,
        ...style,
      }}
    >
      <span
        style={{
          width: 6,
          height: 6,
          borderRadius: "50%",
          background: cfg.dot,
          animation: pulse ? "r3-pulse 1.6s ease-in-out infinite" : "none",
        }}
      />
      {text}
      <style>{`@keyframes r3-pulse { 0%,100% { opacity: 1; transform: scale(1);} 50% { opacity: 0.45; transform: scale(0.85);} }`}</style>
    </span>
  );
}

export function IconTile({ name, tone = "coral", size = 36 }) {
  const toneColor = tone === "coral" ? "var(--r3-coral)" : tone === "live" ? "var(--r3-status-live)" : "var(--text-primary)";
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: "var(--radius-md)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: `color-mix(in srgb, ${toneColor} 8%, transparent)`,
        border: `1px solid color-mix(in srgb, ${toneColor} 15%, transparent)`,
        flexShrink: 0,
      }}
    >
      <Icon name={name} size={size * 0.42} color={toneColor} strokeWidth={2} />
    </div>
  );
}

export const STATUS_NAMES = Object.keys(STATUS_MAP);
