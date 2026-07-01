import React from "react";
import { Icon } from "../icons/Icon.jsx";

const VARIANT_STYLE = {
  primary: {
    background: "var(--action-primary-bg)",
    color: "var(--action-primary-fg)",
    border: "1px solid transparent",
    boxShadow: "var(--shadow-button-primary)",
  },
  accent: {
    background: "var(--r3-coral)",
    color: "#FFFFFF",
    border: "1px solid transparent",
    boxShadow: "var(--shadow-button-accent)",
  },
  ghost: {
    background: "rgba(255,255,255,0.35)",
    color: "var(--text-primary)",
    border: "1px solid var(--border-hairline)",
    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.72)",
  },
  "ghost-dark": {
    background: "transparent",
    color: "var(--text-primary-inverse)",
    border: "1px solid var(--border-hairline-inverse)",
    boxShadow: "none",
  },
};

const VARIANT_HOVER = {
  primary: { background: "var(--action-primary-bg-hover)" },
  accent: { filter: "brightness(1.05)" },
  ghost: { background: "rgba(255,255,255,0.6)" },
  "ghost-dark": { background: "rgba(247,243,238,0.1)" },
};

const SIZE_STYLE = {
  sm: { height: 44, padding: "0 20px", fontSize: "0.68rem" },
  md: { height: 56, padding: "0 32px", fontSize: "0.8rem" },
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  iconRight,
  iconLeft,
  as: As = "button",
  className,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const base = VARIANT_STYLE[variant] || VARIANT_STYLE.primary;
  const hoverStyle = hover ? VARIANT_HOVER[variant] : null;

  return (
    <As
      className={className}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
        borderRadius: "var(--radius-pill)",
        fontFamily: "var(--font-sans)",
        fontWeight: 700,
        textTransform: "uppercase",
        letterSpacing: "0.1em",
        whiteSpace: "nowrap",
        cursor: "pointer",
        transition: "transform 300ms ease, background 300ms ease, box-shadow 300ms ease",
        transform: hover ? "translateY(-2px)" : "translateY(0)",
        textDecoration: "none",
        ...base,
        ...SIZE_STYLE[size],
        ...hoverStyle,
        ...style,
      }}
      {...rest}
    >
      {iconLeft ? <Icon name={iconLeft} size={14} strokeWidth={2.4} /> : null}
      {children}
      {iconRight ? <Icon name={iconRight} size={14} strokeWidth={2.4} /> : null}
    </As>
  );
}
