import * as React from "react";

export interface StatusPillProps {
  /** Which operational state this represents. Drives color + default label. */
  status?:
    | "received"
    | "routed"
    | "logged"
    | "live"
    | "follow-up-ready"
    | "coming-soon"
    | "missed-call"
    | "pending"
    | "inactive";
  /** Override the default label text (e.g. custom copy) while keeping the status color. */
  label?: string;
  /** Animate the status dot with a soft pulse — use for genuinely live/real-time states only. */
  pulse?: boolean;
  /** Use the dark-panel background variant. */
  dark?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export interface IconTileProps {
  /** Icon name, see Icon component. */
  name: string;
  tone?: "coral" | "live" | "ink";
  size?: number;
}
