import React from "react";

export function Wordmark({ size = "1.2rem", className, style }) {
  return (
    <span
      aria-label="R3WORKED"
      className={className}
      style={{
        display: "inline-flex",
        alignItems: "baseline",
        fontFamily: "var(--font-sans)",
        fontWeight: 600,
        textTransform: "uppercase",
        letterSpacing: "-0.075em",
        color: "var(--text-primary)",
        fontSize: size,
        ...style,
      }}
    >
      <span>R</span>
      <span style={{ color: "var(--r3-coral)" }}>3</span>
      <span>WORKED</span>
    </span>
  );
}
