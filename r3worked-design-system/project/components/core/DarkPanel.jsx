import React from "react";

export function DarkPanel({ children, className, style }) {
  return (
    <div
      className={className}
      style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: "var(--radius-3xl)",
        border: "1px solid var(--r3-ink)",
        background: "var(--r3-ink)",
        boxShadow: "var(--shadow-sticker-coral)",
        padding: "1.25rem",
        ...style,
      }}
    >
      {children}
    </div>
  );
}
