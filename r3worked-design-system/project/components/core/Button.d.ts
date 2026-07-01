import * as React from "react";

export interface ButtonProps {
  children: React.ReactNode;
  /** Visual style. primary = solid ink, accent = solid coral, ghost = glass outline (light bg), ghost-dark = outline (dark bg). */
  variant?: "primary" | "accent" | "ghost" | "ghost-dark";
  size?: "sm" | "md";
  /** Optional icon name (see Icon component) rendered before/after the label. */
  iconLeft?: string;
  iconRight?: string;
  /** Render as a different element, e.g. "a" for a link-styled button. Default "button". */
  as?: React.ElementType;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  href?: string;
}
