import React from "react";

export function SegmentedToggle({ options, value, onChange, className }) {
  const activeIndex = options.findIndex((o) => o.value === value);
  return (
    <div
      role="tablist"
      className={className}
      style={{
        position: "relative",
        display: "inline-grid",
        gridTemplateColumns: `repeat(${options.length}, minmax(0,1fr))`,
        alignItems: "center",
        borderRadius: 14,
        border: "1px solid var(--r3-sand-line)",
        background: "linear-gradient(to bottom, #fff, #F3ECE1)",
        padding: 5,
        boxShadow: "0 1px 2px rgba(22,22,22,0.05), 0 6px 14px rgba(22,22,22,0.05), inset 0 1px 0 rgba(255,255,255,0.95)",
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 5,
          bottom: 5,
          left: 5,
          width: `calc((100% - 10px) / ${options.length})`,
          transform: `translateX(calc(${activeIndex} * 100%))`,
          borderRadius: 10,
          background: "linear-gradient(to bottom, #1E1D1B, #141312)",
          boxShadow: "0 2px 4px rgba(22,22,22,0.14), 0 8px 18px rgba(22,22,22,0.18)",
          transition: "transform 380ms cubic-bezier(0.25,0.46,0.45,0.94)",
        }}
      />
      {options.map((o) => {
        const active = o.value === value;
        return (
          <button
            key={o.value}
            type="button"
            role="tab"
            aria-selected={active}
            onClick={() => onChange(o.value)}
            style={{
              position: "relative",
              zIndex: 1,
              minWidth: "7rem",
              padding: "12px 20px",
              borderRadius: 10,
              border: "none",
              background: "transparent",
              cursor: "pointer",
              fontFamily: "var(--font-sans)",
              fontSize: "0.68rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.18em",
              color: active ? "#F3EDE4" : "#3D3A35",
              transition: "color 300ms ease",
            }}
          >
            {o.label}
          </button>
        );
      })}
    </div>
  );
}
