import React from "react";

export function SurfaceCard({ children, tight = false, className, style }) {
  return (
    <div
      className={className}
      style={{
        borderRadius: tight ? "var(--radius-lg)" : "var(--radius-xl)",
        border: "1px solid var(--border-hairline-soft)",
        background: "var(--surface-card)",
        boxShadow: "var(--shadow-card-tight)",
        padding: tight ? "1rem" : "1.25rem",
        ...style,
      }}
    >
      {children}
    </div>
  );
}
