import React from "react";

export function SectionHeading({ eyebrow, title, description, dark = false, align = "left", maxTitle = "14ch", maxDescription = "42rem" }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", textAlign: align, alignItems: align === "center" ? "center" : "flex-start" }}>
      {eyebrow ? (
        <p
          className="type-eyebrow"
          style={{ color: dark ? "var(--text-eyebrow-inverse)" : "var(--text-eyebrow)", margin: 0 }}
        >
          {eyebrow}
        </p>
      ) : null}
      {title ? (
        <h2
          className="type-h2"
          style={{ color: dark ? "var(--text-primary-inverse)" : "var(--text-primary)", margin: 0, maxWidth: maxTitle }}
        >
          {title}
        </h2>
      ) : null}
      {description ? (
        <p
          className="type-support"
          style={{ color: dark ? "var(--text-secondary-inverse)" : "var(--text-secondary)", margin: 0, maxWidth: maxDescription }}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
