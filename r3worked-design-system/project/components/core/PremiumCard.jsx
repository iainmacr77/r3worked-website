import React from "react";

export function PremiumCard({ children, hoverLift = false, className, style }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      className={className}
      onMouseEnter={() => hoverLift && setHover(true)}
      onMouseLeave={() => hoverLift && setHover(false)}
      style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: "var(--radius-4xl)",
        border: "1px solid var(--border-hairline-soft)",
        background: "var(--surface-card-tinted)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        boxShadow: hover ? "6px 6px 0px var(--r3-coral-muted), 0 20px 60px rgba(72,50,37,0.08), inset 0 1px 0 rgba(255,255,255,0.7)" : "var(--shadow-card-soft)",
        transform: hover ? "translateY(-4px)" : "translateY(0)",
        transition: "box-shadow 500ms cubic-bezier(0.22,1,0.36,1), transform 500ms cubic-bezier(0.22,1,0.36,1)",
        padding: "2rem",
        ...style,
      }}
    >
      {children}
    </div>
  );
}
