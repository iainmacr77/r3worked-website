/* @ds-bundle: {"format":3,"namespace":"R3WORKEDDesignSystem_b9c054","components":[{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"DarkPanel","sourcePath":"components/core/DarkPanel.jsx"},{"name":"PremiumCard","sourcePath":"components/core/PremiumCard.jsx"},{"name":"SectionHeading","sourcePath":"components/core/SectionHeading.jsx"},{"name":"SegmentedToggle","sourcePath":"components/core/SegmentedToggle.jsx"},{"name":"StatusPill","sourcePath":"components/core/StatusPill.jsx"},{"name":"IconTile","sourcePath":"components/core/StatusPill.jsx"},{"name":"STATUS_NAMES","sourcePath":"components/core/StatusPill.jsx"},{"name":"SurfaceCard","sourcePath":"components/core/SurfaceCard.jsx"},{"name":"Wordmark","sourcePath":"components/core/Wordmark.jsx"},{"name":"Icon","sourcePath":"components/icons/Icon.jsx"},{"name":"ICON_NAMES","sourcePath":"components/icons/Icon.jsx"},{"name":"RescueEngine","sourcePath":"ui_kits/marketing-site/RescueEngine.jsx"},{"name":"Nav","sourcePath":"ui_kits/marketing-site/SectionsA.jsx"},{"name":"HeroCurrent","sourcePath":"ui_kits/marketing-site/SectionsA.jsx"},{"name":"TrustTicker","sourcePath":"ui_kits/marketing-site/SectionsA.jsx"},{"name":"TheThree","sourcePath":"ui_kits/marketing-site/SectionsA.jsx"},{"name":"BeforeAfter","sourcePath":"ui_kits/marketing-site/SectionsB.jsx"},{"name":"EnquiryCapture","sourcePath":"ui_kits/marketing-site/SectionsB.jsx"},{"name":"LeadCapture","sourcePath":"ui_kits/marketing-site/SectionsB.jsx"},{"name":"Pricing","sourcePath":"ui_kits/marketing-site/SectionsB.jsx"},{"name":"FinalCta","sourcePath":"ui_kits/marketing-site/SectionsB.jsx"},{"name":"Footer","sourcePath":"ui_kits/marketing-site/SectionsB.jsx"}],"sourceHashes":{"components/core/Button.jsx":"cf2138ff470d","components/core/DarkPanel.jsx":"98b60d7eca64","components/core/PremiumCard.jsx":"b0abde3534df","components/core/SectionHeading.jsx":"f47de798aa63","components/core/SegmentedToggle.jsx":"fd2299331f2a","components/core/StatusPill.jsx":"99cb05a2acc4","components/core/SurfaceCard.jsx":"43040012a180","components/core/Wordmark.jsx":"b84f6641872d","components/icons/Icon.jsx":"4c4c1074bfee","showcase/animations.jsx":"a8d2a696abaa","showcase/scenes.jsx":"c9edbfebe831","ui_kits/marketing-site/RescueEngine.jsx":"34bbb0b42b5f","ui_kits/marketing-site/SectionsA.jsx":"ce1527c355b3","ui_kits/marketing-site/SectionsB.jsx":"093892ccccc0"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.R3WORKEDDesignSystem_b9c054 = window.R3WORKEDDesignSystem_b9c054 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/DarkPanel.jsx
try { (() => {
function DarkPanel({
  children,
  className,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: "var(--radius-3xl)",
      border: "1px solid var(--r3-ink)",
      background: "var(--r3-ink)",
      boxShadow: "var(--shadow-sticker-coral)",
      padding: "1.25rem",
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { DarkPanel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/DarkPanel.jsx", error: String((e && e.message) || e) }); }

// components/core/PremiumCard.jsx
try { (() => {
function PremiumCard({
  children,
  hoverLift = false,
  className,
  style
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    onMouseEnter: () => hoverLift && setHover(true),
    onMouseLeave: () => hoverLift && setHover(false),
    style: {
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
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { PremiumCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/PremiumCard.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionHeading.jsx
try { (() => {
function SectionHeading({
  eyebrow,
  title,
  description,
  dark = false,
  align = "left",
  maxTitle = "14ch",
  maxDescription = "42rem"
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "1.5rem",
      textAlign: align,
      alignItems: align === "center" ? "center" : "flex-start"
    }
  }, eyebrow ? /*#__PURE__*/React.createElement("p", {
    className: "type-eyebrow",
    style: {
      color: dark ? "var(--text-eyebrow-inverse)" : "var(--text-eyebrow)",
      margin: 0
    }
  }, eyebrow) : null, title ? /*#__PURE__*/React.createElement("h2", {
    className: "type-h2",
    style: {
      color: dark ? "var(--text-primary-inverse)" : "var(--text-primary)",
      margin: 0,
      maxWidth: maxTitle
    }
  }, title) : null, description ? /*#__PURE__*/React.createElement("p", {
    className: "type-support",
    style: {
      color: dark ? "var(--text-secondary-inverse)" : "var(--text-secondary)",
      margin: 0,
      maxWidth: maxDescription
    }
  }, description) : null);
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/core/SegmentedToggle.jsx
try { (() => {
function SegmentedToggle({
  options,
  value,
  onChange,
  className
}) {
  const activeIndex = options.findIndex(o => o.value === value);
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    className: className,
    style: {
      position: "relative",
      display: "inline-grid",
      gridTemplateColumns: `repeat(${options.length}, minmax(0,1fr))`,
      alignItems: "center",
      borderRadius: 14,
      border: "1px solid var(--r3-sand-line)",
      background: "linear-gradient(to bottom, #fff, #F3ECE1)",
      padding: 5,
      boxShadow: "0 1px 2px rgba(22,22,22,0.05), 0 6px 14px rgba(22,22,22,0.05), inset 0 1px 0 rgba(255,255,255,0.95)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      top: 5,
      bottom: 5,
      left: 5,
      width: `calc((100% - 10px) / ${options.length})`,
      transform: `translateX(calc(${activeIndex} * 100%))`,
      borderRadius: 10,
      background: "linear-gradient(to bottom, #1E1D1B, #141312)",
      boxShadow: "0 2px 4px rgba(22,22,22,0.14), 0 8px 18px rgba(22,22,22,0.18)",
      transition: "transform 380ms cubic-bezier(0.25,0.46,0.45,0.94)"
    }
  }), options.map(o => {
    const active = o.value === value;
    return /*#__PURE__*/React.createElement("button", {
      key: o.value,
      type: "button",
      role: "tab",
      "aria-selected": active,
      onClick: () => onChange(o.value),
      style: {
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
        transition: "color 300ms ease"
      }
    }, o.label);
  }));
}
Object.assign(__ds_scope, { SegmentedToggle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SegmentedToggle.jsx", error: String((e && e.message) || e) }); }

// components/core/SurfaceCard.jsx
try { (() => {
function SurfaceCard({
  children,
  tight = false,
  className,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    style: {
      borderRadius: tight ? "var(--radius-lg)" : "var(--radius-xl)",
      border: "1px solid var(--border-hairline-soft)",
      background: "var(--surface-card)",
      boxShadow: "var(--shadow-card-tight)",
      padding: tight ? "1rem" : "1.25rem",
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { SurfaceCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SurfaceCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Wordmark.jsx
try { (() => {
function Wordmark({
  size = "1.2rem",
  className,
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    "aria-label": "R3WORKED",
    className: className,
    style: {
      display: "inline-flex",
      alignItems: "baseline",
      fontFamily: "var(--font-sans)",
      fontWeight: 600,
      textTransform: "uppercase",
      letterSpacing: "-0.075em",
      color: "var(--text-primary)",
      fontSize: size,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", null, "R"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--r3-coral)"
    }
  }, "3"), /*#__PURE__*/React.createElement("span", null, "WORKED"));
}
Object.assign(__ds_scope, { Wordmark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Wordmark.jsx", error: String((e && e.message) || e) }); }

// components/icons/Icon.jsx
try { (() => {
/**
 * Curated subset of Lucide icon path data (stroke-based, 24x24 grid),
 * reproduced from the open-source Lucide icon set (ISC license) — the
 * same icon system used throughout the production R3WORKED codebase via
 * the `lucide-react` package. Only the icons actually used across the
 * R3WORKED marketing site are included here; add more the same way if a
 * new icon is needed (keep the 24x24 stroke grid, 2px stroke, round caps).
 */
const PATHS = {
  "arrow-right": /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m12 5 7 7-7 7"
  })),
  "bell": /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.3 21a1.94 1.94 0 0 0 3.4 0"
  })),
  "check": /*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5"
  }),
  "x": /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m6 6 12 12"
  })),
  "menu": /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("line", {
    x1: "4",
    x2: "20",
    y1: "12",
    y2: "12"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "4",
    x2: "20",
    y1: "6",
    y2: "6"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "4",
    x2: "20",
    y1: "18",
    y2: "18"
  })),
  "send": /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m21.854 2.147-10.94 10.939"
  })),
  "user": /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "7",
    r: "4"
  })),
  "map-pin": /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "10",
    r: "3"
  })),
  "briefcase": /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"
  }), /*#__PURE__*/React.createElement("rect", {
    width: "20",
    height: "14",
    x: "2",
    y: "6",
    rx: "2"
  })),
  "chevron-down": /*#__PURE__*/React.createElement("path", {
    d: "m6 9 6 6 6-6"
  }),
  "camera": /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "13",
    r: "3"
  })),
  "phone": /*#__PURE__*/React.createElement("path", {
    d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.68 1.6l-.468.339a1 1 0 0 0-.316 1.222 14.9 14.9 0 0 0 6.296 6.407"
  }),
  "phone-missed": /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "m22 2-5 5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m17 2 5 5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.684 1.585l-.468.339a1 1 0 0 0-.372 1.293 14.9 14.9 0 0 0 6.29 6.29"
  })),
  "message-square": /*#__PURE__*/React.createElement("path", {
    d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
  }),
  "star": /*#__PURE__*/React.createElement("path", {
    d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"
  }),
  "clipboard-check": /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    width: "8",
    height: "4",
    x: "8",
    y: "2",
    rx: "1"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m9 14 2 2 4-4"
  })),
  "clipboard-list": /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    width: "8",
    height: "4",
    x: "8",
    y: "2",
    rx: "1"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 11h4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 16h4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 11h.01"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 16h.01"
  })),
  "file-text": /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14 2v4a2 2 0 0 0 2 2h4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 9H8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 13H8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 17H8"
  })),
  "route": /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "6",
    cy: "19",
    r: "3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "18",
    cy: "5",
    r: "3"
  })),
  "user-check": /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "9",
    cy: "7",
    r: "4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m16 11 2 2 4-4"
  })),
  "mouse-pointer-click": /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M14 4.1 12 6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m5.1 8-2.9-.8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m6 12-1.9 2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7.2 2.2 8 5.1"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z"
  })),
  "check-circle": /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M21.801 10A10 10 0 1 1 17 3.335"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m9 11 3 3L22 4"
  })),
  "arrow-up-right": /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M7 7h10v10"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7 17 17 7"
  })),
  "plus": /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 5v14"
  }))
};
function Icon({
  name,
  size = 18,
  strokeWidth = 2,
  color = "currentColor",
  className,
  style
}) {
  const path = PATHS[name];
  if (!path) return null;
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: className,
    style: style,
    "aria-hidden": "true"
  }, path);
}
const ICON_NAMES = Object.keys(PATHS);
Object.assign(__ds_scope, { Icon, ICON_NAMES });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/icons/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const VARIANT_STYLE = {
  primary: {
    background: "var(--action-primary-bg)",
    color: "var(--action-primary-fg)",
    border: "1px solid transparent",
    boxShadow: "var(--shadow-button-primary)"
  },
  accent: {
    background: "var(--r3-coral)",
    color: "#FFFFFF",
    border: "1px solid transparent",
    boxShadow: "var(--shadow-button-accent)"
  },
  ghost: {
    background: "rgba(255,255,255,0.35)",
    color: "var(--text-primary)",
    border: "1px solid var(--border-hairline)",
    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.72)"
  },
  "ghost-dark": {
    background: "transparent",
    color: "var(--text-primary-inverse)",
    border: "1px solid var(--border-hairline-inverse)",
    boxShadow: "none"
  }
};
const VARIANT_HOVER = {
  primary: {
    background: "var(--action-primary-bg-hover)"
  },
  accent: {
    filter: "brightness(1.05)"
  },
  ghost: {
    background: "rgba(255,255,255,0.6)"
  },
  "ghost-dark": {
    background: "rgba(247,243,238,0.1)"
  }
};
const SIZE_STYLE = {
  sm: {
    height: 44,
    padding: "0 20px",
    fontSize: "0.68rem"
  },
  md: {
    height: 56,
    padding: "0 32px",
    fontSize: "0.8rem"
  }
};
function Button({
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
  return /*#__PURE__*/React.createElement(As, _extends({
    className: className,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
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
      ...style
    }
  }, rest), iconLeft ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconLeft,
    size: 14,
    strokeWidth: 2.4
  }) : null, children, iconRight ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: 14,
    strokeWidth: 2.4
  }) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/StatusPill.jsx
try { (() => {
/* Operational status system — small system indicators only, never dominant. */
const STATUS_MAP = {
  received: {
    label: "Received",
    color: "var(--r3-coral)",
    dot: "var(--r3-coral)"
  },
  routed: {
    label: "Routed",
    color: "var(--r3-status-live)",
    dot: "var(--r3-status-live)"
  },
  logged: {
    label: "Logged",
    color: "var(--r3-status-live)",
    dot: "var(--r3-status-live)"
  },
  live: {
    label: "Live",
    color: "var(--r3-status-live)",
    dot: "var(--r3-status-live)"
  },
  "follow-up-ready": {
    label: "Follow-up ready",
    color: "var(--r3-status-live)",
    dot: "var(--r3-status-live)"
  },
  "coming-soon": {
    label: "Coming soon",
    color: "var(--r3-coral)",
    dot: "var(--r3-coral)"
  },
  "missed-call": {
    label: "Missed call",
    color: "var(--r3-status-pending)",
    dot: "var(--r3-status-pending)"
  },
  pending: {
    label: "Pending",
    color: "var(--r3-status-pending)",
    dot: "var(--r3-status-pending)"
  },
  inactive: {
    label: "Inactive",
    color: "var(--r3-status-inactive)",
    dot: "var(--r3-status-inactive)"
  }
};
function StatusPill({
  status = "received",
  label,
  pulse = false,
  dark = false,
  className,
  style
}) {
  const cfg = STATUS_MAP[status] || STATUS_MAP.received;
  const text = label || cfg.label;
  return /*#__PURE__*/React.createElement("span", {
    className: className,
    style: {
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
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: "50%",
      background: cfg.dot,
      animation: pulse ? "r3-pulse 1.6s ease-in-out infinite" : "none"
    }
  }), text, /*#__PURE__*/React.createElement("style", null, `@keyframes r3-pulse { 0%,100% { opacity: 1; transform: scale(1);} 50% { opacity: 0.45; transform: scale(0.85);} }`));
}
function IconTile({
  name,
  tone = "coral",
  size = 36
}) {
  const toneColor = tone === "coral" ? "var(--r3-coral)" : tone === "live" ? "var(--r3-status-live)" : "var(--text-primary)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: size,
      height: size,
      borderRadius: "var(--radius-md)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: `color-mix(in srgb, ${toneColor} 8%, transparent)`,
      border: `1px solid color-mix(in srgb, ${toneColor} 15%, transparent)`,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: name,
    size: size * 0.42,
    color: toneColor,
    strokeWidth: 2
  }));
}
const STATUS_NAMES = Object.keys(STATUS_MAP);
Object.assign(__ds_scope, { StatusPill, IconTile, STATUS_NAMES });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StatusPill.jsx", error: String((e && e.message) || e) }); }

// showcase/animations.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)

/* BEGIN USAGE */
// animations.jsx — timeline engine. Exports (on window): Stage, Sprite,
//   TextSprite, ImageSprite, RectSprite, VideoSprite, PlaybackBar,
//   useTime, useTimeline, useSprite, Easing, interpolate, animate, clamp.
//
//   <Stage width={1280} height={720} duration={10} background="#f6f4ef">
//     <Sprite start={0} end={3}>
//       <TextSprite text="Hello" x={100} y={300} size={72} color="#111" />
//     </Sprite>
//     <Sprite start={2} end={8}>
//       <ImageSprite src="hero.png" x={200} y={120} width={640} height={360} kenBurns />
//     </Sprite>
//   </Stage>
//
// Stage({width,height,duration,background,fps,loop,autoplay}) — auto-scales to
//   viewport; scrubber + play/pause + ←/→ seek + space + 0-reset; persists
//   playhead. The canvas is an <svg><foreignObject>, export-ready: Share →
//   Export → Video (or the PlaybackBar's download button) renders it to .mp4.
//   Screenshot tools DOM-rerender (not pixel-capture) and unwrap this wrapper
//   so captures should work — but if one comes back black, that's a capture
//   artifact, not a render bug; trust the live preview.
// Sprite({start,end,keepMounted}) — mounts children only while playhead is in
//   [start,end]. Children read {localTime, progress, duration} via useSprite().
// useTime() → seconds; useTimeline() → {time,duration,playing,setTime,setPlaying}.
// TextSprite({text,x,y,size,color,font,weight,align,entryDur,exitDur}) — fades/scales in+out.
// ImageSprite({src,x,y,width,height,fit,radius,kenBurns,placeholder}) — same, with optional ken-burns.
// RectSprite({x,y,width,height,color,radius}) — solid box with entry/exit.
// VideoSprite({src,start,end,speed,style}) — looped <video> clip synced to the
//   timeline; its audio is mixed into the exported video.
// Easing.{linear,easeIn/Out/InOut Quad/Cubic/Quart/Quint/Expo/Back, …}
// interpolate([t0,t1,…],[v0,v1,…],ease?) → (t)=>v  — piecewise tween.
// animate({from,to,start,end,ease}) → (t)=>v  — single tween.
//
// Build scenes by composing Sprites inside Stage. Absolutely-position elements.
//
// In a .dc.html project, put your scene in a sibling my-scene.jsx (reading
// {Stage, Sprite, useTime, Easing, …} from window is safe) and mount BOTH:
//   <x-import component-from-global-scope="MyScene"
//             from="./animations.jsx ./my-scene.jsx"></x-import>
// The two files in from= load in order, so my-scene.jsx can use the globals
// animations.jsx set.
/* END USAGE */
// ─────────────────────────────────────────────────────────────────────────────

// ── Easing functions (hand-rolled, Popmotion-style) ─────────────────────────
// All easings take t ∈ [0,1] and return eased t ∈ [0,1] (may overshoot for back/elastic).
const Easing = {
  linear: t => t,
  // Quad
  easeInQuad: t => t * t,
  easeOutQuad: t => t * (2 - t),
  easeInOutQuad: t => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t,
  // Cubic
  easeInCubic: t => t * t * t,
  easeOutCubic: t => --t * t * t + 1,
  easeInOutCubic: t => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1,
  // Quart
  easeInQuart: t => t * t * t * t,
  easeOutQuart: t => 1 - --t * t * t * t,
  easeInOutQuart: t => t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t,
  // Expo
  easeInExpo: t => t === 0 ? 0 : Math.pow(2, 10 * (t - 1)),
  easeOutExpo: t => t === 1 ? 1 : 1 - Math.pow(2, -10 * t),
  easeInOutExpo: t => {
    if (t === 0) return 0;
    if (t === 1) return 1;
    if (t < 0.5) return 0.5 * Math.pow(2, 20 * t - 10);
    return 1 - 0.5 * Math.pow(2, -20 * t + 10);
  },
  // Sine
  easeInSine: t => 1 - Math.cos(t * Math.PI / 2),
  easeOutSine: t => Math.sin(t * Math.PI / 2),
  easeInOutSine: t => -(Math.cos(Math.PI * t) - 1) / 2,
  // Back (overshoot)
  easeOutBack: t => {
    const c1 = 1.70158,
      c3 = c1 + 1;
    return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
  },
  easeInBack: t => {
    const c1 = 1.70158,
      c3 = c1 + 1;
    return c3 * t * t * t - c1 * t * t;
  },
  easeInOutBack: t => {
    const c1 = 1.70158,
      c2 = c1 * 1.525;
    return t < 0.5 ? Math.pow(2 * t, 2) * ((c2 + 1) * 2 * t - c2) / 2 : (Math.pow(2 * t - 2, 2) * ((c2 + 1) * (t * 2 - 2) + c2) + 2) / 2;
  },
  // Elastic
  easeOutElastic: t => {
    const c4 = 2 * Math.PI / 3;
    if (t === 0) return 0;
    if (t === 1) return 1;
    return Math.pow(2, -10 * t) * Math.sin((t * 10 - 0.75) * c4) + 1;
  }
};

// ── Core interpolation helpers ──────────────────────────────────────────────

// Clamp a value to [min, max]
const clamp = (v, min, max) => Math.max(min, Math.min(max, v));

// interpolate([0, 0.5, 1], [0, 100, 50], ease?) -> fn(t)
// Popmotion-style: linearly maps t across input keyframes to output values,
// with optional easing per segment (single fn or array of fns).
function interpolate(input, output, ease = Easing.linear) {
  return t => {
    if (t <= input[0]) return output[0];
    if (t >= input[input.length - 1]) return output[output.length - 1];
    for (let i = 0; i < input.length - 1; i++) {
      if (t >= input[i] && t <= input[i + 1]) {
        const span = input[i + 1] - input[i];
        const local = span === 0 ? 0 : (t - input[i]) / span;
        const easeFn = Array.isArray(ease) ? ease[i] || Easing.linear : ease;
        const eased = easeFn(local);
        return output[i] + (output[i + 1] - output[i]) * eased;
      }
    }
    return output[output.length - 1];
  };
}

// animate({from, to, start, end, ease})(t) — simpler single-segment tween.
// Returns `from` before `start`, `to` after `end`.
function animate({
  from = 0,
  to = 1,
  start = 0,
  end = 1,
  ease = Easing.easeInOutCubic
}) {
  return t => {
    if (t <= start) return from;
    if (t >= end) return to;
    const local = (t - start) / (end - start);
    return from + (to - from) * ease(local);
  };
}

// ── Timeline context ────────────────────────────────────────────────────────

const TimelineContext = React.createContext({
  time: 0,
  duration: 10,
  playing: false
});
const useTime = () => React.useContext(TimelineContext).time;
const useTimeline = () => React.useContext(TimelineContext);

// ── Sprite ──────────────────────────────────────────────────────────────────
// Renders children only when the playhead is inside [start, end]. Provides
// a sub-context with `localTime` (seconds since start) and `progress` (0..1).
//
//   <Sprite start={2} end={5}>
//     {({ localTime, progress }) => <Thing x={progress * 100} />}
//   </Sprite>
//
// Or as a plain wrapper — children can call useSprite() themselves.

const SpriteContext = React.createContext({
  localTime: 0,
  progress: 0,
  duration: 0
});
const useSprite = () => React.useContext(SpriteContext);
function Sprite({
  start = 0,
  end = Infinity,
  children,
  keepMounted = false
}) {
  const {
    time
  } = useTimeline();
  const visible = time >= start && time <= end;
  if (!visible && !keepMounted) return null;
  const duration = end - start;
  const localTime = Math.max(0, time - start);
  const progress = duration > 0 && isFinite(duration) ? clamp(localTime / duration, 0, 1) : 0;
  const value = {
    localTime,
    progress,
    duration,
    visible
  };
  return /*#__PURE__*/React.createElement(SpriteContext.Provider, {
    value: value
  }, typeof children === 'function' ? children(value) : children);
}

// ── Sample sprite components ────────────────────────────────────────────────

// TextSprite: fades/slides text in on entry, holds, then fades out on exit.
// Props: text, x, y, size, color, font, entryDur, exitDur, align
function TextSprite({
  text,
  x = 0,
  y = 0,
  size = 48,
  color = '#111',
  font = 'Inter, system-ui, sans-serif',
  weight = 600,
  entryDur = 0.45,
  exitDur = 0.35,
  entryEase = Easing.easeOutBack,
  exitEase = Easing.easeInCubic,
  align = 'left',
  letterSpacing = '-0.01em'
}) {
  const {
    localTime,
    duration
  } = useSprite();
  const exitStart = Math.max(0, duration - exitDur);
  let opacity = 1;
  let ty = 0;
  if (localTime < entryDur) {
    const t = entryEase(clamp(localTime / entryDur, 0, 1));
    opacity = t;
    ty = (1 - t) * 16;
  } else if (localTime > exitStart) {
    const t = exitEase(clamp((localTime - exitStart) / exitDur, 0, 1));
    opacity = 1 - t;
    ty = -t * 8;
  }
  const translateX = align === 'center' ? '-50%' : align === 'right' ? '-100%' : '0';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: x,
      top: y,
      transform: `translate(${translateX}, ${ty}px)`,
      opacity,
      fontFamily: font,
      fontSize: size,
      fontWeight: weight,
      color,
      letterSpacing,
      whiteSpace: 'pre',
      lineHeight: 1.1,
      willChange: 'transform, opacity'
    }
  }, text);
}

// ImageSprite: scales + fades in; optional Ken Burns drift during hold.
function ImageSprite({
  src,
  x = 0,
  y = 0,
  width = 400,
  height = 300,
  entryDur = 0.6,
  exitDur = 0.4,
  kenBurns = false,
  kenBurnsScale = 1.08,
  radius = 12,
  fit = 'cover',
  placeholder = null // {label: string} for striped placeholder
}) {
  const {
    localTime,
    duration
  } = useSprite();
  const exitStart = Math.max(0, duration - exitDur);
  let opacity = 1;
  let scale = 1;
  if (localTime < entryDur) {
    const t = Easing.easeOutCubic(clamp(localTime / entryDur, 0, 1));
    opacity = t;
    scale = 0.96 + 0.04 * t;
  } else if (localTime > exitStart) {
    const t = Easing.easeInCubic(clamp((localTime - exitStart) / exitDur, 0, 1));
    opacity = 1 - t;
    scale = (kenBurns ? kenBurnsScale : 1) + 0.02 * t;
  } else if (kenBurns) {
    const holdSpan = exitStart - entryDur;
    const holdT = holdSpan > 0 ? (localTime - entryDur) / holdSpan : 0;
    scale = 1 + (kenBurnsScale - 1) * holdT;
  }
  const content = placeholder ? /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'repeating-linear-gradient(135deg, #e9e6df 0 10px, #dcd8cf 10px 20px)',
      color: '#6b6458',
      fontFamily: 'JetBrains Mono, ui-monospace, monospace',
      fontSize: 13,
      letterSpacing: '0.04em',
      textTransform: 'uppercase'
    }
  }, placeholder.label || 'image') : /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: fit,
      display: 'block'
    }
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: x,
      top: y,
      width,
      height,
      opacity,
      transform: `scale(${scale})`,
      transformOrigin: 'center',
      borderRadius: radius,
      overflow: 'hidden',
      willChange: 'transform, opacity'
    }
  }, content);
}

// RectSprite: simple rectangle that animates position/size/color via props.
// Useful demo primitive — takes a `render` fn for per-frame customization.
function RectSprite({
  x = 0,
  y = 0,
  width = 100,
  height = 100,
  color = '#111',
  radius = 8,
  entryDur = 0.4,
  exitDur = 0.3,
  render // optional: (ctx) => style overrides
}) {
  const spriteCtx = useSprite();
  const {
    localTime,
    duration
  } = spriteCtx;
  const exitStart = Math.max(0, duration - exitDur);
  let opacity = 1;
  let scale = 1;
  if (localTime < entryDur) {
    const t = Easing.easeOutBack(clamp(localTime / entryDur, 0, 1));
    opacity = clamp(localTime / entryDur, 0, 1);
    scale = 0.4 + 0.6 * t;
  } else if (localTime > exitStart) {
    const t = Easing.easeInQuad(clamp((localTime - exitStart) / exitDur, 0, 1));
    opacity = 1 - t;
    scale = 1 - 0.15 * t;
  }
  const overrides = render ? render(spriteCtx) : {};
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: x,
      top: y,
      width,
      height,
      background: color,
      borderRadius: radius,
      opacity,
      transform: `scale(${scale})`,
      transformOrigin: 'center',
      willChange: 'transform, opacity',
      ...overrides
    }
  });
}

// ── Font inlining ───────────────────────────────────────────────────────────
// Copy every @font-face rule from the page into a <style> inside the svg's
// foreignObject, with font URLs rewritten to data: URLs. Makes the svg
// self-describing so serializing it alone (video export fast path) still
// renders with the right fonts. Sets data-om-fonts-inlined on the svg when
// done so the exporter can wait for it.

function useInlineFontsInto(svgRef) {
  React.useEffect(() => {
    const svg = svgRef.current;
    const host = svg && svg.querySelector('foreignObject > div');
    if (!svg || !host) return;
    let cancelled = false;
    (async () => {
      const rules = [];
      for (const ss of document.styleSheets) {
        let cssRules;
        try {
          cssRules = ss.cssRules;
        } catch {
          // Cross-origin sheet without crossorigin attr (e.g. the standard
          // fonts.googleapis.com <link>) — fetch the CSS text directly and
          // regex-extract the @font-face blocks.
          if (ss.href) {
            try {
              const txt = await fetch(ss.href).then(r => {
                if (!r.ok) throw 0;
                return r.text();
              });
              for (const ff of txt.match(/@font-face\s*{[^}]*}/g) || []) rules.push({
                css: ff,
                base: ss.href
              });
            } catch {}
          }
          continue;
        }
        if (!cssRules) continue;
        for (const r of cssRules) {
          if (r.type === CSSRule.FONT_FACE_RULE) {
            rules.push({
              css: r.cssText,
              base: ss.href || location.href
            });
          }
        }
      }
      const toDataURL = url => fetch(url).then(r => {
        if (!r.ok) throw 0;
        return r.blob();
      }).then(b => new Promise(res => {
        const fr = new FileReader();
        fr.onload = () => res(fr.result);
        fr.onerror = () => res(url);
        fr.readAsDataURL(b);
      })).catch(() => url);
      const parts = await Promise.all(rules.map(async ({
        css,
        base
      }) => {
        const re = /url\((['"]?)([^'")]+)\1\)/g;
        let out = css,
          m;
        while (m = re.exec(css)) {
          const u = m[2];
          if (u.startsWith('data:')) continue;
          let abs;
          try {
            abs = new URL(u, base).href;
          } catch {
            continue;
          }
          out = out.split(m[0]).join(`url("${await toDataURL(abs)}")`);
        }
        return out;
      }));
      if (cancelled || !parts.length) {
        svg.setAttribute('data-om-fonts-inlined', 'true');
        return;
      }
      const style = document.createElement('style');
      style.textContent = parts.join('\n');
      host.insertBefore(style, host.firstChild);
      svg.setAttribute('data-om-fonts-inlined', 'true');
    })();
    return () => {
      cancelled = true;
    };
  }, []);
}
function Stage({
  width = 1280,
  height = 720,
  duration = 10,
  background = '#f6f4ef',
  fps = 60,
  loop = true,
  autoplay = true,
  persistKey = 'animstage',
  children
}) {
  // Props arrive as strings when Stage is mounted via <x-import> (DC
  // projects) — coerce so style={{width}} gets a number React can px-ify.
  width = +width || 1280;
  height = +height || 720;
  duration = +duration || 10;
  fps = +fps || 60;
  if (typeof loop === 'string') loop = loop !== 'false';
  if (typeof autoplay === 'string') autoplay = autoplay !== 'false';
  const [time, setTime] = React.useState(() => {
    try {
      const v = parseFloat(localStorage.getItem(persistKey + ':t') || '0');
      return isFinite(v) ? clamp(v, 0, duration) : 0;
    } catch {
      return 0;
    }
  });
  const [playing, setPlaying] = React.useState(autoplay);
  const [hoverTime, setHoverTime] = React.useState(null);
  const [scale, setScale] = React.useState(1);
  const stageRef = React.useRef(null);
  const canvasRef = React.useRef(null);
  const rafRef = React.useRef(null);
  const lastTsRef = React.useRef(null);

  // Persist playhead
  React.useEffect(() => {
    try {
      localStorage.setItem(persistKey + ':t', String(time));
    } catch {}
  }, [time, persistKey]);

  // Auto-scale to fit viewport
  React.useEffect(() => {
    if (!stageRef.current) return;
    const el = stageRef.current;
    const measure = () => {
      const barH = 44; // playback bar height
      const s = Math.min(el.clientWidth / width, (el.clientHeight - barH) / height);
      setScale(Math.max(0.05, s));
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    window.addEventListener('resize', measure);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, [width, height]);

  // Animation loop
  React.useEffect(() => {
    if (!playing) {
      lastTsRef.current = null;
      return;
    }
    const step = ts => {
      if (lastTsRef.current == null) lastTsRef.current = ts;
      const dt = (ts - lastTsRef.current) / 1000;
      lastTsRef.current = ts;
      setTime(t => {
        let next = t + dt;
        if (next >= duration) {
          if (loop) next = next % duration;else {
            next = duration;
            setPlaying(false);
          }
        }
        return next;
      });
      rafRef.current = requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      lastTsRef.current = null;
    };
  }, [playing, duration, loop]);

  // Keyboard: space = play/pause, ← → = seek
  React.useEffect(() => {
    const onKey = e => {
      if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA')) return;
      if (e.code === 'Space') {
        e.preventDefault();
        setPlaying(p => !p);
      } else if (e.code === 'ArrowLeft') {
        setTime(t => clamp(t - (e.shiftKey ? 1 : 0.1), 0, duration));
      } else if (e.code === 'ArrowRight') {
        setTime(t => clamp(t + (e.shiftKey ? 1 : 0.1), 0, duration));
      } else if (e.key === '0' || e.code === 'Home') {
        setTime(0);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [duration]);

  // Video-export protocol: the exporter dispatches this event per frame;
  // pause + sync the playhead so the capture sees exactly that timestamp.
  React.useEffect(() => {
    const el = canvasRef.current;
    if (!el) return;
    const onSeek = e => {
      setPlaying(false);
      setTime(clamp(e.detail.time, 0, duration));
    };
    el.addEventListener('data-om-seek-to-time-frame', onSeek);
    return () => el.removeEventListener('data-om-seek-to-time-frame', onSeek);
  }, [duration]);

  // Inline @font-face rules into the svg's foreignObject so the svg is
  // self-describing — serializing it alone (for video export) then renders
  // with the right fonts. Sets data-om-fonts-inlined once done.
  useInlineFontsInto(canvasRef);
  const displayTime = hoverTime != null ? hoverTime : time;
  const ctxValue = React.useMemo(() => ({
    time: displayTime,
    duration,
    playing,
    setTime,
    setPlaying
  }), [displayTime, duration, playing]);
  return /*#__PURE__*/React.createElement("div", {
    ref: stageRef,
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      background: '#0a0a0a',
      fontFamily: 'Inter, system-ui, sans-serif'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    ref: canvasRef,
    width: width,
    height: height,
    "data-om-exportable-video-with-duration-secs": duration,
    style: {
      transform: `scale(${scale})`,
      transformOrigin: 'center',
      flexShrink: 0,
      boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("foreignObject", {
    x: "0",
    y: "0",
    width: "100%",
    height: "100%"
  }, /*#__PURE__*/React.createElement("div", {
    xmlns: "http://www.w3.org/1999/xhtml",
    style: {
      width,
      height,
      background,
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(TimelineContext.Provider, {
    value: ctxValue
  }, children))))), /*#__PURE__*/React.createElement(PlaybackBar, {
    time: displayTime,
    actualTime: time,
    duration: duration,
    playing: playing,
    onPlayPause: () => setPlaying(p => !p),
    onReset: () => {
      setTime(0);
    },
    onSeek: t => setTime(t),
    onHover: t => setHoverTime(t)
  }));
}

// ── Playback bar ────────────────────────────────────────────────────────────
// Play/pause, return-to-begin, scrub track, time display.
// Uses fixed-width time fields so layout doesn't thrash.

function PlaybackBar({
  time,
  duration,
  playing,
  onPlayPause,
  onReset,
  onSeek,
  onHover
}) {
  const trackRef = React.useRef(null);
  const [dragging, setDragging] = React.useState(false);
  const timeFromEvent = React.useCallback(e => {
    const rect = trackRef.current.getBoundingClientRect();
    const x = clamp((e.clientX - rect.left) / rect.width, 0, 1);
    return x * duration;
  }, [duration]);
  const onTrackMove = e => {
    if (!trackRef.current) return;
    const t = timeFromEvent(e);
    if (dragging) {
      onSeek(t);
    } else {
      onHover(t);
    }
  };
  const onTrackLeave = () => {
    if (!dragging) onHover(null);
  };
  const onTrackDown = e => {
    setDragging(true);
    const t = timeFromEvent(e);
    onSeek(t);
    onHover(null);
  };
  React.useEffect(() => {
    if (!dragging) return;
    const onUp = () => setDragging(false);
    const onMove = e => {
      if (!trackRef.current) return;
      const t = timeFromEvent(e);
      onSeek(t);
    };
    window.addEventListener('mouseup', onUp);
    window.addEventListener('mousemove', onMove);
    return () => {
      window.removeEventListener('mouseup', onUp);
      window.removeEventListener('mousemove', onMove);
    };
  }, [dragging, timeFromEvent, onSeek]);
  const pct = duration > 0 ? time / duration * 100 : 0;
  const fmt = t => {
    const total = Math.max(0, t);
    const m = Math.floor(total / 60);
    const s = Math.floor(total % 60);
    const cs = Math.floor(total * 100 % 100);
    return `${String(m).padStart(1, '0')}:${String(s).padStart(2, '0')}.${String(cs).padStart(2, '0')}`;
  };
  const mono = 'JetBrains Mono, ui-monospace, SFMono-Regular, monospace';
  return /*#__PURE__*/React.createElement("div", {
    "data-omelette-chrome": true,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '8px 16px',
      background: 'rgba(20,20,20,0.92)',
      borderTop: '1px solid rgba(255,255,255,0.08)',
      width: '100%',
      maxWidth: 680,
      alignSelf: 'center',
      borderRadius: 8,
      color: '#f6f4ef',
      fontFamily: 'Inter, system-ui, sans-serif',
      userSelect: 'none',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    onClick: onReset,
    title: "Return to start (0)"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 2v10M12 2L5 7l7 5V2z",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinejoin: "round",
    strokeLinecap: "round"
  }))), /*#__PURE__*/React.createElement(IconButton, {
    onClick: onPlayPause,
    title: "Play/pause (space)"
  }, playing ? /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "2",
    width: "3",
    height: "10",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "8",
    y: "2",
    width: "3",
    height: "10",
    fill: "currentColor"
  })) : /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 2l9 5-9 5V2z",
    fill: "currentColor"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: mono,
      fontSize: 12,
      fontVariantNumeric: 'tabular-nums',
      width: 64,
      textAlign: 'right',
      color: '#f6f4ef'
    }
  }, fmt(time)), /*#__PURE__*/React.createElement("div", {
    ref: trackRef,
    onMouseMove: onTrackMove,
    onMouseLeave: onTrackLeave,
    onMouseDown: onTrackDown,
    style: {
      flex: 1,
      height: 22,
      position: 'relative',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      height: 4,
      background: 'rgba(255,255,255,0.12)',
      borderRadius: 2
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      width: `${pct}%`,
      height: 4,
      background: 'oklch(72% 0.12 250)',
      borderRadius: 2
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: `${pct}%`,
      top: '50%',
      width: 12,
      height: 12,
      marginLeft: -6,
      marginTop: -6,
      background: '#fff',
      borderRadius: 6,
      boxShadow: '0 2px 4px rgba(0,0,0,0.4)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: mono,
      fontSize: 12,
      fontVariantNumeric: 'tabular-nums',
      width: 64,
      textAlign: 'left',
      color: 'rgba(246,244,239,0.55)'
    }
  }, fmt(duration)), typeof VideoEncoder !== 'undefined' && /*#__PURE__*/React.createElement(IconButton, {
    title: "Export video",
    onClick: () => window.parent.postMessage({
      type: 'omelette:request-video-export'
    }, '*')
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M7 2v7m0 0L4 6m3 3l3-3M2 12h10",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))));
}
function IconButton({
  children,
  onClick,
  title
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    title: title,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: 28,
      height: 28,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: hover ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0.04)',
      border: '1px solid rgba(255,255,255,0.1)',
      borderRadius: 6,
      color: '#f6f4ef',
      cursor: 'pointer',
      padding: 0,
      transition: 'background 120ms'
    }
  }, children);
}

// ── VideoSprite ─────────────────────────────────────────────────────────────
// Renders a <video> that loops within [start,end] of its source at `speed`,
// kept in sync with the Stage's playhead. Carries the
// data-om-exportable-video-play-* attrs so video export can mix its audio.
//
//   <VideoSprite src="clip.mp4" start={2} end={5} speed={1}
//     style={{ width: 640, height: 360 }} />

function VideoSprite({
  src,
  start = 0,
  end,
  speed = 1,
  style,
  ...rest
}) {
  start = +start || 0;
  speed = +speed || 1;
  if (end != null) end = +end || undefined;
  const t = useTime();
  const ref = React.useRef(null);
  const span = Math.max(0.001, (end ?? start + 1) - start);
  React.useEffect(() => {
    const v = ref.current;
    if (!v || v.readyState < 1) return;
    const target = start + t * speed % span;
    if (Math.abs(v.currentTime - target) > 0.05) v.currentTime = target;
  }, [t, start, span, speed]);
  return /*#__PURE__*/React.createElement("video", _extends({
    ref: ref,
    src: src,
    muted: true,
    playsInline: true,
    preload: "auto",
    "data-om-exportable-video-play-start": start,
    "data-om-exportable-video-play-end": end ?? start + span,
    "data-om-exportable-video-play-speed": speed,
    style: {
      display: 'block',
      objectFit: 'cover',
      ...style
    }
  }, rest));
}
Object.assign(window, {
  Easing,
  interpolate,
  animate,
  clamp,
  TimelineContext,
  useTime,
  useTimeline,
  Sprite,
  SpriteContext,
  useSprite,
  TextSprite,
  ImageSprite,
  RectSprite,
  VideoSprite,
  Stage,
  PlaybackBar
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "showcase/animations.jsx", error: String((e && e.message) || e) }); }

// showcase/scenes.jsx
try { (() => {
// R3WORKED — "Stop losing enquiries" brand story
// Three scenes: 01 Lead capture, 02 Website uplift, 03 Review retrieval.
// Built on the animations.jsx timeline engine. Reads {Stage, Sprite,
// TextSprite, RectSprite, ImageSprite, useSprite, useTime, Easing,
// interpolate} from window (set by animations.jsx, loaded first).

const {
  Sprite,
  useSprite,
  Easing,
  interpolate
} = window;

/* ---------------------------------------------------------------- */
/*  Shared visual atoms                                              */
/* ---------------------------------------------------------------- */

function TitleCard({
  eyebrow,
  headline,
  sub
}) {
  const {
    localTime
  } = useSprite();
  const fade = interpolate([0, 0.45, 1.5, 2], [0, 1, 1, 0], Easing.easeOutCubic)(localTime);
  const rise = interpolate([0, 0.45], [16, 0], Easing.easeOutCubic)(localTime);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: 18,
      opacity: fade,
      transform: `translateY(${rise}px)`,
      background: "var(--r3-porcelain)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 700,
      fontSize: 20,
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      color: "var(--r3-coral-muted)"
    }
  }, eyebrow), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 700,
      fontSize: 64,
      letterSpacing: "-0.03em",
      color: "var(--r3-ink)",
      textAlign: "center",
      maxWidth: 900
    }
  }, headline));
}
function FlowLine({
  x1,
  y1,
  x2,
  y2,
  opacity = 0.4
}) {
  const cx = (x1 + x2) / 2;
  return /*#__PURE__*/React.createElement("svg", {
    style: {
      position: "absolute",
      inset: 0,
      overflow: "visible",
      pointerEvents: "none"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: `M${x1} ${y1} C ${cx} ${y1}, ${cx} ${y2}, ${x2} ${y2}`,
    stroke: "var(--r3-coral)",
    strokeOpacity: opacity,
    strokeWidth: 3,
    strokeDasharray: "7 9",
    fill: "none"
  }, /*#__PURE__*/React.createElement("animate", {
    attributeName: "stroke-dashoffset",
    from: "0",
    to: "-32",
    dur: "1s",
    repeatCount: "indefinite"
  })));
}
function StatusChip({
  x,
  y,
  status,
  color,
  label
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: x,
      top: y,
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      borderRadius: 999,
      padding: "8px 16px",
      fontFamily: "var(--font-sans)",
      fontSize: 13,
      fontWeight: 700,
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      color,
      border: `1.5px solid ${color}55`,
      background: `${color}1F`,
      opacity: status ? 1 : 0,
      transition: "opacity 300ms ease",
      whiteSpace: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: "50%",
      background: color
    }
  }), label);
}
function BrowserWindow({
  x,
  y,
  w,
  h,
  chrome = true,
  children,
  bg = "#fff"
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: x,
      top: y,
      width: w,
      height: h,
      borderRadius: 18,
      overflow: "hidden",
      background: bg,
      border: "1px solid rgba(22,22,22,0.1)",
      boxShadow: "0 30px 70px rgba(22,22,22,0.14)"
    }
  }, chrome ? /*#__PURE__*/React.createElement("div", {
    style: {
      height: 34,
      display: "flex",
      alignItems: "center",
      gap: 7,
      padding: "0 14px",
      borderBottom: "1px solid rgba(22,22,22,0.06)",
      background: "#fafafa"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 9,
      height: 9,
      borderRadius: "50%",
      background: "#e2b93b"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 9,
      height: 9,
      borderRadius: "50%",
      background: "#e2673b"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 9,
      height: 9,
      borderRadius: "50%",
      background: "#63b96a"
    }
  })) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: "100%",
      height: chrome ? h - 34 : h
    }
  }, children));
}
function PhoneShell({
  x,
  y,
  w = 220,
  h = 440,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: x,
      top: y,
      width: w,
      height: h,
      borderRadius: 34,
      background: "var(--r3-ink)",
      padding: 10,
      boxShadow: "0 30px 70px rgba(22,22,22,0.2)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: "100%",
      height: "100%",
      borderRadius: 26,
      background: "var(--r3-porcelain)",
      overflow: "hidden"
    }
  }, children));
}
function EngineChip({
  x,
  y,
  statusLabel,
  statusColor
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: x,
      top: y,
      width: 210,
      borderRadius: 20,
      background: "var(--r3-ink)",
      padding: "16px 18px",
      boxShadow: "6px 6px 0px var(--r3-coral-muted)"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-sans)",
      fontSize: 10,
      fontWeight: 700,
      letterSpacing: "0.2em",
      textTransform: "uppercase",
      color: "var(--r3-coral)"
    }
  }, "R3WORKED"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "4px 0 10px",
      fontFamily: "var(--font-sans)",
      fontSize: 13,
      fontWeight: 600,
      color: "var(--r3-porcelain)"
    }
  }, "Lead Rescue Engine"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      borderRadius: 999,
      padding: "5px 10px",
      fontFamily: "var(--font-sans)",
      fontSize: 10,
      fontWeight: 700,
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      color: statusColor,
      background: `${statusColor}22`
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: "50%",
      background: statusColor
    }
  }), statusLabel));
}

/* ---------------------------------------------------------------- */
/*  Scene 01 — Lead capture                                          */
/* ---------------------------------------------------------------- */

function Scene1Lead() {
  const {
    localTime
  } = useSprite();
  const sceneOpacity = interpolate([0, 0.5, 7.4, 8], [0, 1, 1, 0], Easing.linear)(localTime);
  const engineStatus = localTime < 3.2 ? {
    label: "Received",
    color: "var(--r3-coral)"
  } : localTime < 5.4 ? {
    label: "Routed",
    color: "var(--r3-status-live)"
  } : {
    label: "Logged",
    color: "var(--r3-status-live)"
  };
  const formChars = Math.floor(interpolate([1.2, 3.8], [0, 24], Easing.linear)(localTime));
  const formText = "Kitchen extension, BS6".slice(0, Math.max(0, formChars));
  const ringOpacity = interpolate([1.8, 2.2, 3.4, 3.8], [0, 1, 1, 0], Easing.linear)(localTime);
  const alertSlide = interpolate([5.2, 5.8], [40, 0], Easing.easeOutCubic)(localTime);
  const alertOpacity = interpolate([5.2, 5.7], [0, 1], Easing.easeOutCubic)(localTime);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      opacity: sceneOpacity,
      background: "var(--r3-porcelain)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "r3-grid-overlay",
    style: {
      position: "absolute"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 46,
      left: 90,
      fontFamily: "var(--font-sans)",
      fontWeight: 700,
      fontSize: 15,
      letterSpacing: "0.2em",
      textTransform: "uppercase",
      color: "var(--r3-coral-muted)",
      opacity: interpolate([0, 0.4], [0, 1])(localTime)
    }
  }, "Phase 01 \u2014 Catch every enquiry"), /*#__PURE__*/React.createElement(BrowserWindow, {
    x: 80,
    y: 160,
    w: 470,
    h: 320
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 26
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: "0.16em",
      textTransform: "uppercase",
      color: "var(--r3-coral)"
    }
  }, "Quick quote request"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "10px 0 18px",
      fontFamily: "var(--font-sans)",
      fontWeight: 700,
      fontSize: 22,
      color: "var(--r3-ink)"
    }
  }, "Describe the job"), /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 10,
      border: "1px solid rgba(22,22,22,0.12)",
      background: "#fff",
      padding: "14px 16px",
      minHeight: 26,
      fontFamily: "var(--font-sans)",
      fontSize: 15,
      color: "var(--r3-ink)"
    }
  }, formText, /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: localTime % 0.6 < 0.3 && localTime < 4 ? 1 : 0
    }
  }, "|")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20,
      display: "inline-flex",
      borderRadius: 999,
      padding: "10px 22px",
      fontFamily: "var(--font-sans)",
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      color: "#fff",
      background: "var(--r3-coral)",
      opacity: interpolate([3.9, 4.2], [0, 1])(localTime)
    }
  }, "Send enquiry"))), /*#__PURE__*/React.createElement(PhoneShell, {
    x: 610,
    y: 140,
    w: 210,
    h: 360
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100%",
      gap: 16,
      padding: "0 14px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 60,
      height: 60,
      borderRadius: "50%",
      background: "color-mix(in srgb, var(--r3-status-pending) 15%, transparent)",
      border: "2px solid var(--r3-status-pending)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      opacity: ringOpacity,
      transform: `scale(${1 + (1 - ringOpacity) * 0.3})`,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 24,
      color: "var(--r3-status-pending)"
    }
  }, "\u260E")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-sans)",
      fontWeight: 700,
      fontSize: 13,
      color: "var(--r3-ink)"
    }
  }, "Missed call"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 9,
      fontWeight: 700,
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      color: "var(--r3-coral)",
      border: "1px solid color-mix(in srgb, var(--r3-coral) 35%, transparent)",
      background: "color-mix(in srgb, var(--r3-coral) 10%, transparent)",
      borderRadius: 999,
      padding: "5px 10px",
      lineHeight: 1.4
    }
  }, "Voice answering", /*#__PURE__*/React.createElement("br", null), "coming soon"))), /*#__PURE__*/React.createElement(FlowLine, {
    x1: 550,
    y1: 310,
    x2: 655,
    y2: 620,
    opacity: 0.35
  }), /*#__PURE__*/React.createElement(FlowLine, {
    x1: 715,
    y1: 500,
    x2: 775,
    y2: 620,
    opacity: 0.35
  }), /*#__PURE__*/React.createElement(EngineChip, {
    x: 650,
    y: 620,
    statusLabel: engineStatus.label,
    statusColor: engineStatus.color
  }), /*#__PURE__*/React.createElement(FlowLine, {
    x1: 860,
    y1: 660,
    x2: 1240,
    y2: 340,
    opacity: 0.35
  }), /*#__PURE__*/React.createElement(PhoneShell, {
    x: 1210,
    y: 140,
    w: 210,
    h: 400
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 18
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "6px 0 14px",
      fontFamily: "var(--font-sans)",
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, "9:41"), /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 14,
      background: "#fff",
      border: "1px solid rgba(22,22,22,0.08)",
      boxShadow: "0 10px 24px rgba(22,22,22,0.08)",
      padding: 14,
      transform: `translateY(${alertSlide}px)`,
      opacity: alertOpacity
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 10,
      fontWeight: 700,
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      color: "var(--r3-status-live)"
    }
  }, "WhatsApp \xB7 R3WORKED"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "8px 0 0",
      fontFamily: "var(--font-sans)",
      fontSize: 13,
      fontWeight: 600,
      color: "var(--r3-ink)"
    }
  }, "New enquiry \u2014 kitchen extension quote. Respond within 5 min.")))));
}

/* ---------------------------------------------------------------- */
/*  Scene 02 — Website uplift                                        */
/* ---------------------------------------------------------------- */

function DatedHomepage() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "#e7e4de",
      padding: 24,
      fontFamily: "Georgia, serif"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 30,
      background: "#cfcbc2",
      marginBottom: 18,
      width: "40%"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 16,
      background: "#d8d4cb",
      marginBottom: 10,
      width: "70%"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 16,
      background: "#d8d4cb",
      marginBottom: 10,
      width: "55%"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 16,
      background: "#d8d4cb",
      marginBottom: 26,
      width: "62%"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 90,
      height: 26,
      background: "#b7b2a5"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 90,
      height: 26,
      background: "#b7b2a5"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 30,
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 60,
      background: "#d8d4cb"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 60,
      background: "#d8d4cb"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 60,
      background: "#d8d4cb"
    }
  })));
}
function ReworkedHomepage() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "var(--r3-porcelain)",
      padding: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "r3-grid-overlay",
    style: {
      position: "absolute"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "var(--font-sans)",
      fontSize: 10,
      fontWeight: 700,
      letterSpacing: "0.16em",
      textTransform: "uppercase",
      color: "var(--r3-coral-muted)"
    }
  }, "Collins Construction"), /*#__PURE__*/React.createElement("p", {
    style: {
      position: "relative",
      margin: "8px 0 6px",
      fontFamily: "var(--font-sans)",
      fontWeight: 700,
      fontSize: 30,
      lineHeight: 1.05,
      color: "var(--r3-ink)",
      letterSpacing: "-0.02em"
    }
  }, "Quality work,", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--r3-coral)"
    }
  }, "properly quoted.")), /*#__PURE__*/React.createElement("p", {
    style: {
      position: "relative",
      margin: "0 0 16px",
      maxWidth: 260,
      fontFamily: "var(--font-sans)",
      fontSize: 12,
      color: "var(--text-secondary)"
    }
  }, "Trusted local builders serving Greater Manchester. Free site visits, honest pricing."), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "inline-flex",
      borderRadius: 999,
      padding: "9px 20px",
      fontFamily: "var(--font-sans)",
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      color: "#fff",
      background: "var(--r3-coral)"
    }
  }, "Get a quote"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      right: 0,
      bottom: 0,
      width: "48%",
      height: "62%",
      borderRadius: "16px 0 0 0",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../assets/imagery/collins-after-hero.webp",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  })));
}
function Scene2Uplift() {
  const {
    localTime
  } = useSprite();
  const sceneOpacity = interpolate([0, 0.5, 7.4, 8], [0, 1, 1, 0], Easing.linear)(localTime);
  const wipe = interpolate([1.8, 5.2], [0, 100], Easing.easeInOutCubic)(localTime);
  const ctaPulse = 1 + Math.sin(Math.max(0, localTime - 5.6) * 3.2) * (localTime > 5.6 ? 0.05 : 0);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      opacity: sceneOpacity,
      background: "var(--r3-porcelain)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 46,
      left: 90,
      fontFamily: "var(--font-sans)",
      fontWeight: 700,
      fontSize: 15,
      letterSpacing: "0.2em",
      textTransform: "uppercase",
      color: "var(--r3-coral-muted)",
      opacity: interpolate([0, 0.4], [0, 1])(localTime)
    }
  }, "Phase 02 \u2014 A website that looks the part"), /*#__PURE__*/React.createElement(BrowserWindow, {
    x: 280,
    y: 140,
    w: 1040,
    h: 620,
    bg: "#e7e4de"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      clipPath: `inset(0 ${100 - wipe}% 0 0)`
    }
  }, /*#__PURE__*/React.createElement(ReworkedHomepage, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      clipPath: `inset(0 0 0 ${wipe}%)`
    }
  }, /*#__PURE__*/React.createElement(DatedHomepage, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 0,
      bottom: 0,
      left: `${wipe}%`,
      width: 3,
      background: "var(--r3-coral)",
      boxShadow: "0 0 16px rgba(217,107,79,0.5)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 280,
      top: 790,
      fontFamily: "var(--font-sans)",
      fontSize: 13,
      fontWeight: 600,
      color: "var(--text-secondary)",
      opacity: interpolate([5.6, 6.1], [0, 1])(localTime),
      transform: `scale(${ctaPulse})`
    }
  }, "Same business \u2014 clearer structure, stronger trust, a homepage that gives people a reason to enquire."));
}

/* ---------------------------------------------------------------- */
/*  Scene 03 — Review retrieval                                      */
/* ---------------------------------------------------------------- */

function ReviewCard({
  x,
  y,
  delay,
  initials,
  quote
}) {
  const {
    localTime
  } = useSprite();
  const t = localTime - delay;
  const rise = interpolate([0, 0.5], [24, 0], Easing.easeOutCubic)(t);
  const op = interpolate([0, 0.5], [0, 1], Easing.easeOutCubic)(t);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: x,
      top: y,
      width: 260,
      borderRadius: 14,
      background: "#fff",
      border: "1px solid rgba(22,22,22,0.08)",
      boxShadow: "0 10px 26px rgba(22,22,22,0.08)",
      padding: 16,
      opacity: op,
      transform: `translateY(${rise}px)`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 30,
      height: 30,
      borderRadius: "50%",
      background: "var(--r3-stone)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "var(--font-sans)",
      fontWeight: 700,
      fontSize: 11,
      color: "var(--r3-ink)"
    }
  }, initials), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#E2A93B",
      fontSize: 13,
      letterSpacing: 1
    }
  }, "\u2605\u2605\u2605\u2605\u2605")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-sans)",
      fontSize: 12,
      color: "var(--text-secondary)"
    }
  }, quote));
}
function Scene3Reviews() {
  const {
    localTime
  } = useSprite();
  const sceneOpacity = interpolate([0, 0.5, 7.4, 8], [0, 1, 1, 0], Easing.linear)(localTime);
  const msgSlide = interpolate([1.6, 2.2], [40, 0], Easing.easeOutCubic)(localTime);
  const msgOp = interpolate([1.6, 2.1], [0, 1], Easing.easeOutCubic)(localTime);
  const rating = interpolate([3.6, 6.8], [4.6, 4.9], Easing.easeOutCubic)(localTime).toFixed(1);
  const countUp = Math.floor(interpolate([3.6, 6.8], [0, 12], Easing.easeOutCubic)(localTime));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      opacity: sceneOpacity,
      background: "var(--r3-porcelain)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 46,
      left: 90,
      fontFamily: "var(--font-sans)",
      fontWeight: 700,
      fontSize: 15,
      letterSpacing: "0.2em",
      textTransform: "uppercase",
      color: "var(--r3-coral-muted)",
      opacity: interpolate([0, 0.4], [0, 1])(localTime)
    }
  }, "Phase 03 \u2014 Turn finished jobs into 5-star reviews"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 90,
      top: 150,
      width: 300,
      borderRadius: 20,
      background: "var(--r3-ink)",
      padding: 22,
      boxShadow: "6px 6px 0px var(--r3-coral-muted)",
      opacity: interpolate([0.3, 0.8], [0, 1])(localTime)
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 10,
      fontWeight: 700,
      letterSpacing: "0.16em",
      textTransform: "uppercase",
      color: "var(--r3-status-live)"
    }
  }, "Job complete"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "8px 0 0",
      fontFamily: "var(--font-sans)",
      fontWeight: 700,
      fontSize: 18,
      color: "var(--r3-porcelain)"
    }
  }, "Riverside Roofing"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "4px 0 0",
      fontFamily: "var(--font-sans)",
      fontSize: 12,
      color: "rgba(247,243,238,0.55)"
    }
  }, "Full re-roof \u2014 signed off today")), /*#__PURE__*/React.createElement(FlowLine, {
    x1: 390,
    y1: 220,
    x2: 520,
    y2: 220,
    opacity: 0.35
  }), /*#__PURE__*/React.createElement(PhoneShell, {
    x: 520,
    y: 100,
    w: 200,
    h: 400
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "6px 0 14px",
      fontFamily: "var(--font-sans)",
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, "9:41"), /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 14,
      background: "#fff",
      border: "1px solid rgba(22,22,22,0.08)",
      boxShadow: "0 10px 24px rgba(22,22,22,0.08)",
      padding: 14,
      transform: `translateY(${msgSlide}px)`,
      opacity: msgOp
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 10,
      fontWeight: 700,
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      color: "var(--r3-coral)"
    }
  }, "Riverside Roofing"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "8px 0 0",
      fontFamily: "var(--font-sans)",
      fontSize: 13,
      fontWeight: 600,
      color: "var(--r3-ink)"
    }
  }, "Thanks for choosing us! Mind leaving a quick Google review?")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 800,
      top: 150,
      borderRadius: 20,
      background: "#fff",
      border: "1px solid rgba(22,22,22,0.08)",
      boxShadow: "0 20px 50px rgba(22,22,22,0.08)",
      padding: "22px 28px",
      opacity: interpolate([3.2, 3.7], [0, 1])(localTime)
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 10,
      fontWeight: 700,
      letterSpacing: "0.16em",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, "Google reviews"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "6px 0 0",
      fontFamily: "var(--font-sans)",
      fontWeight: 700,
      fontSize: 40,
      color: "var(--r3-ink)",
      letterSpacing: "-0.02em"
    }
  }, rating, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#E2A93B",
      fontSize: 22
    }
  }, "\u2605")), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      marginTop: 8,
      borderRadius: 999,
      padding: "5px 12px",
      fontFamily: "var(--font-sans)",
      fontSize: 11,
      fontWeight: 700,
      color: "var(--r3-status-live)",
      background: "var(--r3-status-live-dim)"
    }
  }, "+", countUp, " new this month")), /*#__PURE__*/React.createElement(ReviewCard, {
    x: 1080,
    y: 150,
    delay: 4.2,
    initials: "JW",
    quote: "On time, tidy, and the quote matched the invoice."
  }), /*#__PURE__*/React.createElement(ReviewCard, {
    x: 1080,
    y: 330,
    delay: 4.7,
    initials: "AM",
    quote: "Sent photos before and after \u2014 really reassuring."
  }), /*#__PURE__*/React.createElement(ReviewCard, {
    x: 1080,
    y: 510,
    delay: 5.2,
    initials: "TS",
    quote: "Booked the quote in two minutes flat."
  }));
}

/* ---------------------------------------------------------------- */
/*  Outro                                                             */
/* ---------------------------------------------------------------- */

function Outro() {
  const {
    localTime
  } = useSprite();
  const op = interpolate([0, 0.6], [0, 1], Easing.easeOutCubic)(localTime);
  const rise = interpolate([0, 0.6], [14, 0], Easing.easeOutCubic)(localTime);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "var(--r3-ink)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: 20,
      opacity: op
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 600,
      fontSize: 44,
      textTransform: "uppercase",
      letterSpacing: "-0.06em",
      color: "var(--r3-porcelain)",
      transform: `translateY(${rise}px)`
    }
  }, "R", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--r3-coral)"
    }
  }, "3"), "WORKED"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 500,
      fontSize: 20,
      color: "rgba(247,243,238,0.7)",
      transform: `translateY(${rise}px)`
    }
  }, "Stop losing enquiries."));
}

/* ---------------------------------------------------------------- */
/*  Root                                                              */
/* ---------------------------------------------------------------- */

function LeadRescueStory() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Sprite, {
    start: 0,
    end: 1.9
  }, /*#__PURE__*/React.createElement(TitleCard, {
    eyebrow: "Phase 01",
    headline: "Catch every enquiry."
  })), /*#__PURE__*/React.createElement(Sprite, {
    start: 1.6,
    end: 9.6
  }, /*#__PURE__*/React.createElement(Scene1Lead, null)), /*#__PURE__*/React.createElement(Sprite, {
    start: 9.6,
    end: 11.5
  }, /*#__PURE__*/React.createElement(TitleCard, {
    eyebrow: "Phase 02",
    headline: "A website that looks the part."
  })), /*#__PURE__*/React.createElement(Sprite, {
    start: 11.2,
    end: 19.2
  }, /*#__PURE__*/React.createElement(Scene2Uplift, null)), /*#__PURE__*/React.createElement(Sprite, {
    start: 19.2,
    end: 21.1
  }, /*#__PURE__*/React.createElement(TitleCard, {
    eyebrow: "Phase 03",
    headline: "Turn finished jobs into 5-star reviews."
  })), /*#__PURE__*/React.createElement(Sprite, {
    start: 20.8,
    end: 28.8
  }, /*#__PURE__*/React.createElement(Scene3Reviews, null)), /*#__PURE__*/React.createElement(Sprite, {
    start: 28.8,
    end: 32
  }, /*#__PURE__*/React.createElement(Outro, null)));
}
window.LeadRescueStory = LeadRescueStory;
})(); } catch (e) { __ds_ns.__errors.push({ path: "showcase/scenes.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/RescueEngine.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* ------------------------------------------------------------------ */
/*  R3WORKED — New hero visual concept: "Lead Rescue Engine"           */
/*  Three enquiry sources feed a central routing engine, which fans    */
/*  out to three outcomes. Status cycles RECEIVED -> ROUTED -> LOGGED  */
/*  on a loop; flow lines pulse to show live routing. Missed-call      */
/*  voice answering is clearly marked COMING SOON — never shown live.  */
/* ------------------------------------------------------------------ */

const SOURCES = [{
  icon: "file-text",
  label: "Web form",
  sub: "Kitchen extension quote"
}, {
  icon: "phone-missed",
  label: "Missed call",
  sub: "Coming soon",
  soon: true
}, {
  icon: "message-square",
  label: "WhatsApp",
  sub: "Direct enquiry"
}];
const OUTCOMES = [{
  icon: "bell",
  label: "Alert sent",
  sub: "WhatsApp / email",
  tone: "coral"
}, {
  icon: "clipboard-check",
  label: "Lead logged",
  sub: "Dashboard",
  tone: "live"
}, {
  icon: "star",
  label: "Review queued",
  sub: "Post-job follow-up",
  tone: "live"
}];
const CYCLE = ["received", "routed", "logged"];
const CYCLE_LABEL = {
  received: "Received",
  routed: "Routed",
  logged: "Logged"
};
const CYCLE_COLOR = {
  received: "var(--r3-coral)",
  routed: "var(--r3-status-live)",
  logged: "var(--r3-status-live)"
};
function RescueEngine({
  Icon,
  StatusPill
}) {
  const [step, setStep] = React.useState(0);
  React.useEffect(() => {
    const id = setInterval(() => setStep(s => (s + 1) % CYCLE.length), 2200);
    return () => clearInterval(id);
  }, []);
  const status = CYCLE[step];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: "100%",
      maxWidth: 560,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("style", null, `
        @keyframes r3-flow { to { stroke-dashoffset: -24; } }
        @keyframes r3-pop-in { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes r3-engine-pulse { 0%,100% { box-shadow: 0 0 0 0 rgba(217,107,79,0.35); } 50% { box-shadow: 0 0 0 10px rgba(217,107,79,0); } }
        .r3-stagger { animation: r3-pop-in 700ms cubic-bezier(0.2,0.65,0.3,0.9) both; }
      `), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 10
    }
  }, SOURCES.map((s, i) => /*#__PURE__*/React.createElement(SourceChip, _extends({
    key: s.label
  }, s, {
    delay: i * 0.08,
    Icon: Icon
  })))), /*#__PURE__*/React.createElement(Connector, {
    direction: "down"
  }), /*#__PURE__*/React.createElement("div", {
    className: "r3-stagger",
    style: {
      animationDelay: "0.3s",
      position: "relative",
      borderRadius: 20,
      background: "var(--r3-ink)",
      border: "1px solid var(--r3-ink)",
      boxShadow: "var(--shadow-sticker-coral)",
      padding: "18px 20px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 10,
      fontWeight: 700,
      letterSpacing: "0.2em",
      textTransform: "uppercase",
      color: "var(--r3-coral)"
    }
  }, "Lead Rescue Engine"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "4px 0 0",
      fontWeight: 600,
      color: "var(--r3-porcelain)",
      fontSize: "0.95rem"
    }
  }, "Kitchen extension quote")), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "right"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 7,
      borderRadius: 999,
      padding: "6px 12px",
      fontSize: "0.62rem",
      fontWeight: 700,
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      color: CYCLE_COLOR[status],
      border: `1px solid color-mix(in srgb, ${CYCLE_COLOR[status]} 35%, transparent)`,
      background: `color-mix(in srgb, ${CYCLE_COLOR[status]} 12%, transparent)`,
      transition: "color 300ms ease"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: "50%",
      background: CYCLE_COLOR[status],
      animation: "r3-pulse 1.4s ease-in-out infinite"
    }
  }), CYCLE_LABEL[status]), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "6px 0 0",
      fontSize: "0.62rem",
      color: "rgba(247,243,238,0.35)",
      fontWeight: 600,
      letterSpacing: "0.08em"
    }
  }, "RESPONSE TARGET: 5 MIN")), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: -1,
      borderRadius: 20,
      animation: "r3-engine-pulse 2.2s ease-in-out infinite",
      pointerEvents: "none"
    }
  })), /*#__PURE__*/React.createElement(Connector, {
    direction: "down",
    fanOut: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 10
    }
  }, OUTCOMES.map((o, i) => /*#__PURE__*/React.createElement(OutcomeChip, _extends({
    key: o.label
  }, o, {
    delay: 0.55 + i * 0.1,
    Icon: Icon
  })))));
}
function Connector({
  fanOut = false
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: "100%",
    height: "34",
    viewBox: "0 0 300 34",
    preserveAspectRatio: "none",
    style: {
      display: "block",
      margin: "2px 0"
    },
    "aria-hidden": "true"
  }, [50, 150, 250].map(x => /*#__PURE__*/React.createElement("path", {
    key: x,
    d: fanOut ? `M150 0 L${x} 34` : `M${x} 0 L150 34`,
    stroke: "var(--r3-coral)",
    strokeOpacity: "0.35",
    strokeWidth: "2",
    strokeDasharray: "5 7",
    fill: "none",
    style: {
      animation: "r3-flow 1.1s linear infinite"
    }
  })));
}
function SourceChip({
  icon,
  label,
  sub,
  soon,
  delay,
  Icon
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "r3-stagger",
    style: {
      animationDelay: `${delay}s`,
      borderRadius: 14,
      border: "1px solid var(--border-hairline-soft)",
      background: "#fff",
      boxShadow: "var(--shadow-card-tight)",
      padding: "10px 10px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 6,
      textAlign: "center",
      position: "relative"
    }
  }, soon ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 6,
      right: 6,
      fontSize: "0.48rem",
      fontWeight: 700,
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      color: "var(--r3-status-pending)",
      background: "color-mix(in srgb, var(--r3-status-pending) 12%, transparent)",
      border: "1px solid color-mix(in srgb, var(--r3-status-pending) 30%, transparent)",
      borderRadius: 999,
      padding: "2px 6px"
    }
  }, "Soon") : null, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 30,
      height: 30,
      borderRadius: 9,
      background: "color-mix(in srgb, var(--r3-coral) 8%, transparent)",
      border: "1px solid color-mix(in srgb, var(--r3-coral) 15%, transparent)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 14,
    color: "var(--r3-coral)"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "0.7rem",
      fontWeight: 700,
      color: "var(--text-primary)"
    }
  }, label), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "0.6rem",
      color: "var(--text-muted)"
    }
  }, sub)));
}
function OutcomeChip({
  icon,
  label,
  sub,
  tone,
  delay,
  Icon
}) {
  const color = tone === "live" ? "var(--r3-status-live)" : "var(--r3-coral)";
  return /*#__PURE__*/React.createElement("div", {
    className: "r3-stagger",
    style: {
      animationDelay: `${delay}s`,
      borderRadius: 14,
      border: "1px solid var(--border-hairline-soft)",
      background: "#fff",
      boxShadow: "var(--shadow-card-tight)",
      padding: "10px 10px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 6,
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 30,
      height: 30,
      borderRadius: 9,
      background: `color-mix(in srgb, ${color} 8%, transparent)`,
      border: `1px solid color-mix(in srgb, ${color} 15%, transparent)`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 14,
    color: color
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "0.7rem",
      fontWeight: 700,
      color: "var(--text-primary)"
    }
  }, label), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "0.6rem",
      color: "var(--text-muted)"
    }
  }, sub)));
}
Object.assign(__ds_scope, { RescueEngine });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/RescueEngine.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/SectionsA.jsx
try { (() => {
/* Nav + current (production) hero + trust ticker — recreated from
   src/components/homepage/{HomepageNavbar,HomepageHero,TrustTicker}.tsx */

const NAV_LINKS = ["Lead Rescue", "Website Uplift", "Pricing", "Contact"];
function Nav({
  Wordmark,
  Button
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 50,
      background: "rgba(247,243,238,0.9)",
      backdropFilter: "blur(8px)",
      borderBottom: "1px solid var(--border-hairline-soft)",
      padding: "14px 40px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1344,
      margin: "0 auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    size: "1.15rem"
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: 24
    }
  }, NAV_LINKS.map(l => /*#__PURE__*/React.createElement("span", {
    key: l,
    style: {
      fontSize: "0.85rem",
      fontWeight: 500,
      color: "var(--text-secondary)"
    }
  }, l))), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm"
  }, "Stop losing enquiries")));
}
const LEAD_RESCUE_CARDS = [{
  icon: "file-text",
  title: "Website enquiry captured",
  body: "Clearer forms and quote paths catch the job before it drifts.",
  meta: "Web form"
}, {
  icon: "bell",
  title: "Instant alert sent",
  body: "WhatsApp and email notifications get the lead in front of you fast.",
  meta: "WhatsApp / email"
}, {
  icon: "clipboard-check",
  title: "Lead logged",
  body: "Every enquiry is recorded with the key details and next action.",
  meta: "Dashboard"
}, {
  icon: "star",
  title: "Review follow-up",
  body: "Completed jobs trigger feedback first, then a Google review request.",
  meta: "Post-job"
}];
function HeroCurrent({
  Button,
  Icon
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      overflow: "hidden",
      background: "var(--r3-porcelain)",
      padding: "56px 40px 80px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "r3-grid-overlay"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: "0 0 auto 0",
      height: 192,
      background: "radial-gradient(ellipse at top, rgba(217,107,79,0.12), transparent 64%)",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      zIndex: 1,
      maxWidth: 1344,
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "minmax(0,0.92fr) minmax(416px,1.08fr)",
      gap: 48,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 704
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "type-eyebrow",
    style: {
      color: "#B86B5C",
      margin: 0
    }
  }, "LEAD RESCUE FOR TRADES & LOCAL SERVICE BUSINESSES"), /*#__PURE__*/React.createElement("h1", {
    style: {
      marginTop: 20,
      marginBottom: 0,
      fontWeight: 700,
      fontSize: "5.4rem",
      lineHeight: 0.94,
      letterSpacing: "-0.055em",
      color: "var(--r3-ink)",
      maxWidth: "10ch"
    }
  }, "Stop losing enquiries."), /*#__PURE__*/React.createElement("p", {
    className: "type-support",
    style: {
      marginTop: 24,
      maxWidth: "38rem",
      color: "rgba(42,42,42,0.78)"
    }
  }, "R3WORKED captures website enquiries and missed calls, sends instant WhatsApp/email alerts, logs every lead, and helps turn completed jobs into more Google reviews."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32,
      display: "flex",
      gap: 14,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary"
  }, "Stop losing enquiries"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    iconRight: "arrow-right"
  }, "See how it works"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: -16,
      borderRadius: 36,
      border: "1px solid rgba(22,22,22,0.05)",
      background: "rgba(255,255,255,0.3)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: "1.65rem",
      border: "1px solid var(--r3-ink)",
      background: "var(--r3-ink)",
      padding: 20,
      boxShadow: "8px 8px 0px #B86B5C"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      borderBottom: "1px solid rgba(247,243,238,0.1)",
      paddingBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 10,
      fontWeight: 700,
      letterSpacing: "0.2em",
      textTransform: "uppercase",
      color: "var(--r3-coral)"
    }
  }, "Lead Rescue"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "4px 0 0",
      fontSize: "0.85rem",
      fontWeight: 600,
      color: "var(--r3-porcelain)"
    }
  }, "Enquiry control room")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      borderRadius: 999,
      border: "1px solid rgba(247,243,238,0.1)",
      background: "rgba(247,243,238,0.05)",
      padding: "6px 12px",
      fontSize: 10,
      fontWeight: 700,
      letterSpacing: "0.16em",
      textTransform: "uppercase",
      color: "rgba(247,243,238,0.64)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: "50%",
      background: "var(--r3-coral)"
    }
  }), "Routing")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      borderRadius: 16,
      border: "1px solid rgba(247,243,238,0.1)",
      background: "var(--r3-porcelain)",
      padding: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      gap: 16,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 10,
      fontWeight: 700,
      letterSpacing: "0.2em",
      textTransform: "uppercase",
      color: "var(--r3-coral)"
    }
  }, "New serious enquiry"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "8px 0 0",
      fontSize: "1.45rem",
      fontWeight: 700,
      letterSpacing: "-0.03em",
      color: "var(--r3-ink)"
    }
  }, "Kitchen extension quote"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "8px 0 0",
      maxWidth: "26rem",
      fontSize: "0.85rem",
      color: "rgba(42,42,42,0.58)"
    }
  }, "Source captured, owner alerted, lead logged, next step visible.")), /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 12,
      border: "1px solid rgba(22,22,22,0.08)",
      background: "#fff",
      padding: "12px 16px",
      textAlign: "right"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 10,
      fontWeight: 700,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color: "rgba(22,22,22,0.35)"
    }
  }, "Response target"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "4px 0 0",
      fontSize: "1.4rem",
      fontWeight: 700,
      letterSpacing: "-0.04em",
      color: "var(--r3-ink)"
    }
  }, "5 min"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20,
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 12
    }
  }, LEAD_RESCUE_CARDS.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.title,
    style: {
      borderRadius: 12,
      border: "1px solid rgba(22,22,22,0.07)",
      background: "#fff",
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 32,
      height: 32,
      borderRadius: 8,
      border: "1px solid rgba(217,107,79,0.12)",
      background: "rgba(217,107,79,0.08)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: c.icon,
    size: 15,
    color: "var(--r3-coral)"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      borderRadius: 999,
      background: "rgba(22,22,22,0.04)",
      padding: "4px 10px",
      fontSize: 9,
      fontWeight: 700,
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      color: "rgba(22,22,22,0.38)"
    }
  }, c.meta)), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: "0.92rem",
      fontWeight: 700,
      color: "var(--r3-ink)"
    }
  }, c.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "6px 0 0",
      fontSize: "0.78rem",
      color: "rgba(42,42,42,0.58)"
    }
  }, c.body))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      display: "grid",
      gridTemplateColumns: "auto 1fr",
      gap: 12,
      alignItems: "center",
      borderRadius: 16,
      border: "1px solid rgba(247,243,238,0.1)",
      background: "rgba(247,243,238,0.04)",
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 12,
      border: "1px solid rgba(217,107,79,0.2)",
      background: "rgba(217,107,79,0.1)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone-missed",
    size: 17,
    color: "var(--r3-coral)"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "0.85rem",
      fontWeight: 700,
      color: "var(--r3-porcelain)"
    }
  }, "Missed-call rescue"), /*#__PURE__*/React.createElement("span", {
    style: {
      borderRadius: 999,
      border: "1px solid rgba(217,107,79,0.25)",
      background: "rgba(217,107,79,0.1)",
      padding: "2px 8px",
      fontSize: 9,
      fontWeight: 700,
      letterSpacing: "0.15em",
      textTransform: "uppercase",
      color: "var(--r3-coral)"
    }
  }, "Coming soon")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "4px 0 0",
      fontSize: "0.78rem",
      color: "rgba(247,243,238,0.48)"
    }
  }, "AI voice answering for overflow and missed calls.")))))));
}
const TRUST_STATEMENTS = ["Missed forms become missed jobs", "Slow replies lose serious enquiries", "Every lead should be logged"];
function TrustTicker() {
  const [i, setI] = React.useState(0);
  React.useEffect(() => {
    const id = setInterval(() => setI(v => (v + 1) % TRUST_STATEMENTS.length), 3200);
    return () => clearInterval(id);
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--r3-porcelain-dim)",
      borderTop: "1px solid rgba(22,22,22,0.05)",
      borderBottom: "1px solid rgba(22,22,22,0.05)",
      padding: "36px 24px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 24,
      height: 1.5,
      background: "rgba(217,107,79,0.35)",
      margin: "0 auto 12px"
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "1.05rem",
      fontWeight: 600,
      textTransform: "uppercase",
      letterSpacing: "0.1em",
      color: "rgba(22,22,22,0.7)"
    }
  }, TRUST_STATEMENTS[i]));
}
const THREE_LAYERS = [{
  label: "01",
  title: "Website uplift",
  body: "Make your business look more trustworthy, more professional and easier for the right customer to act on."
}, {
  label: "02",
  title: "Enquiry capture",
  body: "Guide serious prospects toward the right actions with better calls-to-action, cleaner forms and clearer conversion paths."
}, {
  label: "03",
  title: "Follow-up system",
  body: "Acknowledge new enquiries instantly, notify the client, log the lead cleanly and create a more reliable path from first contact to booked work."
}];
function TheThree({
  PremiumCard,
  SectionHeading,
  Button
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--r3-porcelain)",
      padding: "88px 40px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1344,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 64,
      maxWidth: 672
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "The System",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "The ", /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--r3-coral)"
      }
    }, "3"), " in R", /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--r3-coral)"
      }
    }, "3"), "WORKED."),
    description: "Three practical layers that make your website look better, capture more enquiries, and help you stay on top of them."
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 24
    }
  }, THREE_LAYERS.map(l => /*#__PURE__*/React.createElement(PremiumCard, {
    key: l.label,
    hoverLift: true,
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "type-eyebrow",
    style: {
      color: "var(--r3-coral)",
      padding: "6px 16px",
      borderRadius: 999,
      border: "1px solid rgba(217,107,79,0.2)",
      background: "rgba(217,107,79,0.05)"
    }
  }, "Phase ", l.label), /*#__PURE__*/React.createElement("h3", {
    className: "type-h3",
    style: {
      marginTop: 24,
      marginBottom: 12
    }
  }, l.title), /*#__PURE__*/React.createElement("p", {
    className: "type-body-sm",
    style: {
      maxWidth: "31ch",
      color: "rgba(42,42,42,0.78)"
    }
  }, l.body), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm"
  }, "Read more")))))));
}
Object.assign(__ds_scope, { Nav, HeroCurrent, TrustTicker, TheThree });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/SectionsA.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/SectionsB.jsx
try { (() => {
/* Before/After showcase (simplified), enquiry capture, lead capture dispatch
   board, pricing, final CTA and footer — recreated from the corresponding
   src/components/homepage/*.tsx files. */

function BeforeAfter({
  SegmentedToggle
}) {
  const [tab, setTab] = React.useState("after");
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--r3-porcelain)",
      padding: "80px 40px 56px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1344,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "type-eyebrow",
    style: {
      color: "#B86B5C",
      margin: 0
    }
  }, "BEFORE / AFTER"), /*#__PURE__*/React.createElement("h2", {
    className: "type-h2",
    style: {
      marginTop: 24
    }
  }, "From dated and unclear", /*#__PURE__*/React.createElement("br", null), "to sharp and credible."), /*#__PURE__*/React.createElement("p", {
    className: "type-support",
    style: {
      marginTop: 24,
      maxWidth: "38rem",
      color: "rgba(42,42,42,0.8)"
    }
  }, "Same business. Better structure, better trust, and a homepage that gives people a stronger reason to stay and enquire."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40,
      borderRadius: 24,
      overflow: "hidden",
      border: "1px solid rgba(22,22,22,0.1)",
      boxShadow: "0 24px 64px rgba(22,22,22,0.1)",
      position: "relative",
      aspectRatio: "21/9",
      background: "#fff"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/imagery/collins-after-hero.webp",
    alt: "Collins Construction \u2014 rebuilt homepage",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      opacity: tab === "after" ? 1 : 0.28,
      filter: tab === "after" ? "none" : "grayscale(1)",
      transition: "opacity 500ms ease, filter 500ms ease"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 20,
      top: 20,
      borderRadius: 999,
      border: "1px solid rgba(22,22,22,0.18)",
      background: "rgba(255,255,255,0.88)",
      padding: "8px 16px",
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: "0.15em",
      textTransform: "uppercase"
    }
  }, tab === "after" ? "R3WORKED site" : "Pre-R3WORKED site")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32,
      display: "flex",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(SegmentedToggle, {
    value: tab,
    onChange: setTab,
    options: [{
      value: "before",
      label: "Before"
    }, {
      value: "after",
      label: "After"
    }]
  }))));
}
const CAPTURE_STEPS = [{
  icon: "mouse-pointer-click",
  n: "01",
  title: "Clear CTA placement",
  desc: "Prominent, intentional buttons placed where buying intent peaks."
}, {
  icon: "route",
  n: "02",
  title: "Shorter path to quote",
  desc: "Fewer clicks between interest and submission. No buried forms, no dead ends."
}, {
  icon: "clipboard-list",
  n: "03",
  title: "Better enquiry detail",
  desc: "Structured fields that capture what matters — project type, location, photos."
}, {
  icon: "user-check",
  n: "04",
  title: "Serious leads guided through",
  desc: "A qualifying flow that separates tyre-kickers from real prospects."
}];
function EnquiryCapture({
  Icon,
  SectionHeading
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--r3-ink)",
      padding: "88px 40px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1344,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 64,
      maxWidth: 768
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    dark: true,
    eyebrow: "Phase 02",
    title: "A clearer path to enquiry.",
    description: "We structure your website pages, calls-to-action and form flow so serious prospects know exactly what to do next."
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1.1fr",
      gap: 64
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 36
    }
  }, CAPTURE_STEPS.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.n,
    style: {
      display: "flex",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      borderRadius: 12,
      border: "1px solid rgba(217,107,79,0.15)",
      background: "rgba(217,107,79,0.08)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: s.icon,
    size: 16,
    color: "var(--r3-coral)"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      fontWeight: 700,
      letterSpacing: "0.2em",
      color: "rgba(217,107,79,0.5)"
    }
  }, s.n), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: "1.05rem",
      fontWeight: 600,
      color: "var(--r3-porcelain)"
    }
  }, s.title)), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "6px 0 0",
      fontSize: "0.85rem",
      color: "rgba(247,243,238,0.55)",
      maxWidth: "26rem"
    }
  }, s.desc))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 16,
      overflow: "hidden",
      border: "1px solid var(--r3-ink)",
      boxShadow: "6px 6px 0px #B86B5C",
      background: "var(--r3-porcelain)",
      padding: 28
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      fontWeight: 700,
      letterSpacing: "0.2em",
      color: "rgba(217,107,79,0.6)"
    }
  }, "Collins Construction"), /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: "6px 0 0",
      fontSize: "1.6rem",
      fontWeight: 700,
      color: "var(--r3-ink)"
    }
  }, "Quality work,", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--r3-coral)"
    }
  }, "properly quoted.")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "12px 0 20px",
      fontSize: "0.78rem",
      color: "rgba(22,22,22,0.45)",
      maxWidth: "28ch"
    }
  }, "Trusted local builders serving Greater Manchester. Free site visits, honest pricing."), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid rgba(22,22,22,0.08)",
      paddingTop: 20,
      display: "flex",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      borderRadius: 999,
      background: "var(--r3-coral)",
      color: "#fff",
      padding: "10px 20px",
      fontSize: 11,
      fontWeight: 700,
      textTransform: "uppercase",
      letterSpacing: "0.12em",
      textAlign: "center"
    }
  }, "Send Enquiry"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      borderRadius: 999,
      border: "1px solid rgba(22,22,22,0.12)",
      padding: "10px 20px",
      fontSize: 11,
      fontWeight: 700,
      textTransform: "uppercase",
      letterSpacing: "0.12em",
      textAlign: "center",
      color: "rgba(22,22,22,0.55)"
    }
  }, "Call Now"))))));
}
const OUTCOMES = [{
  icon: "send",
  label: "Confirmation sent",
  detail: "Prospect acknowledged"
}, {
  icon: "bell",
  label: "Client alerted",
  detail: "Notification delivered"
}, {
  icon: "clipboard-check",
  label: "Lead recorded",
  detail: "Logged and structured"
}, {
  icon: "arrow-right",
  label: "Follow-up ready",
  detail: "Next action visible"
}];
function LeadCapture({
  Icon,
  SectionHeading,
  SurfaceCard
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--r3-porcelain)",
      padding: "88px 40px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1344,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 64,
      maxWidth: 768
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Phase 03",
    title: "From enquiry to organised action.",
    description: "Once an enquiry comes in, we confirm receipt, notify the client, log the lead cleanly and create a more reliable path to booked work."
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 16,
      background: "linear-gradient(135deg, #EDE7DD, #E2D8CA)",
      border: "1px solid rgba(22,22,22,0.06)",
      padding: 28,
      maxWidth: 640,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement(SurfaceCard, {
    style: {
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 34,
      height: 34,
      borderRadius: "50%",
      background: "rgba(217,107,79,0.1)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "user",
    size: 15,
    color: "var(--r3-coral)"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontSize: "0.84rem",
      fontWeight: 600
    }
  }, "New Enquiry"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "0.68rem",
      color: "rgba(22,22,22,0.35)"
    }
  }, "Just now"))), /*#__PURE__*/React.createElement("span", {
    style: {
      borderRadius: 999,
      background: "rgba(217,107,79,0.08)",
      border: "1px solid rgba(217,107,79,0.12)",
      padding: "4px 10px",
      fontSize: "0.58rem",
      fontWeight: 700,
      textTransform: "uppercase",
      color: "var(--r3-coral)"
    }
  }, "Received"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 12
    }
  }, OUTCOMES.map(o => /*#__PURE__*/React.createElement(SurfaceCard, {
    key: o.label,
    tight: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 26,
      height: 26,
      borderRadius: 8,
      background: "rgba(217,107,79,0.06)",
      border: "1px solid rgba(217,107,79,0.1)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: o.icon,
    size: 13,
    color: "var(--r3-coral)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 16,
      height: 16,
      borderRadius: "50%",
      background: "rgba(46,125,91,0.12)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 9,
    color: "var(--r3-status-live)",
    strokeWidth: 3
  }))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "0.78rem",
      fontWeight: 600
    }
  }, o.label), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "2px 0 0",
      fontSize: "0.66rem",
      color: "rgba(22,22,22,0.4)"
    }
  }, o.detail)))))));
}
const PRIMARY_INCLUSIONS = ["Homepage-led rebuild with up to 5 key pages", "Copy refinement and structure cleanup", "Mobile optimisation", "CTA and form conversion improvements", "Enquiry capture setup", "SEO fundamentals"];
function Pricing({
  Button
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--r3-porcelain)",
      padding: "88px 40px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1344,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "type-eyebrow",
    style: {
      color: "#B86B5C",
      margin: 0
    }
  }, "The Offer"), /*#__PURE__*/React.createElement("h2", {
    className: "type-h2",
    style: {
      marginTop: 24,
      marginBottom: 40
    }
  }, "Clear pricing. No agency theatre."), /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 28,
      background: "var(--r3-ink)",
      padding: 56,
      boxShadow: "6px 6px 0px #B86B5C",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      bottom: -32,
      right: -8,
      fontSize: "12rem",
      fontWeight: 700,
      color: "rgba(247,243,238,0.02)",
      letterSpacing: "-0.06em"
    }
  }, "R3"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "grid",
      gridTemplateColumns: "1fr 1.2fr",
      gap: 56
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "type-eyebrow",
    style: {
      color: "var(--r3-coral)"
    }
  }, "Website Rebuild"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "24px 0 0",
      fontSize: "5rem",
      fontWeight: 700,
      color: "var(--r3-porcelain)",
      letterSpacing: "-0.04em",
      lineHeight: 0.9
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--r3-coral)"
    }
  }, "\xA3"), "1,250"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      marginTop: 12,
      fontSize: "0.72rem",
      fontWeight: 700,
      color: "rgba(247,243,238,0.3)",
      textTransform: "uppercase",
      letterSpacing: "0.18em"
    }
  }, "one-off"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "32px 0",
      fontSize: "0.9rem",
      color: "rgba(247,243,238,0.5)",
      maxWidth: "30rem"
    }
  }, "A homepage-led commercial rebuild designed to make your business look better, capture enquiries better, and convert more serious prospects."), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    iconRight: "arrow-right"
  }, "Start your rebuild")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      marginBottom: 24,
      fontSize: "0.62rem",
      fontWeight: 700,
      textTransform: "uppercase",
      letterSpacing: "0.2em",
      color: "rgba(247,243,238,0.2)"
    }
  }, "What's included"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 16
    }
  }, PRIMARY_INCLUSIONS.map(i => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      gap: 10,
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 6,
      height: 6,
      borderRadius: "50%",
      background: "var(--r3-coral)",
      marginTop: 8,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "0.88rem",
      color: "rgba(247,243,238,0.65)"
    }
  }, i)))))))));
}
function FinalCta({
  Button
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--r3-porcelain)",
      padding: "88px 40px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1344,
      margin: "0 auto",
      borderRadius: 40,
      background: "var(--r3-ink)",
      padding: "72px 48px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "type-eyebrow",
    style: {
      display: "inline-flex",
      color: "var(--r3-coral)",
      padding: "6px 16px",
      borderRadius: 999,
      border: "1px solid rgba(217,107,79,0.2)",
      background: "rgba(217,107,79,0.05)"
    }
  }, "Lead Rescue Review"), /*#__PURE__*/React.createElement("h2", {
    className: "type-h2",
    style: {
      color: "var(--r3-porcelain)",
      margin: "24px auto",
      maxWidth: "20ch"
    }
  }, "Find out where enquiries are leaking."), /*#__PURE__*/React.createElement("p", {
    className: "type-support",
    style: {
      color: "rgba(247,243,238,0.7)",
      maxWidth: "36rem",
      margin: "0 auto 40px"
    }
  }, "Send your current site and contact flow. We'll show where leads are being lost and what R3WORKED should catch first."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 16,
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost"
  }, "Start Lead Rescue review"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost-dark"
  }, "Contact R3WORKED"))));
}
function Footer({
  Wordmark
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      borderTop: "1px solid rgba(22,22,22,0.06)",
      background: "var(--r3-porcelain)",
      padding: "72px 40px 32px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1248
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    size: "1.4rem"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 16,
      maxWidth: 480,
      fontSize: "1rem",
      lineHeight: 2,
      color: "rgba(42,42,42,0.72)"
    }
  }, "Lead rescue for trades and local service businesses \u2014 capturing website enquiries, follow-ups and reviews in one cleaner system, with missed-call rescue coming soon."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 48,
      paddingTop: 24,
      borderTop: "1px solid rgba(22,22,22,0.06)",
      display: "flex",
      justifyContent: "space-between",
      fontSize: 11,
      textTransform: "uppercase",
      letterSpacing: "0.16em",
      color: "rgba(42,42,42,0.44)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 R3WORKED"), /*#__PURE__*/React.createElement("span", null, "R3WORKED is a trading name of Auric Consulting Limited."))));
}
Object.assign(__ds_scope, { BeforeAfter, EnquiryCapture, LeadCapture, Pricing, FinalCta, Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/SectionsB.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.DarkPanel = __ds_scope.DarkPanel;

__ds_ns.PremiumCard = __ds_scope.PremiumCard;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.SegmentedToggle = __ds_scope.SegmentedToggle;

__ds_ns.StatusPill = __ds_scope.StatusPill;

__ds_ns.IconTile = __ds_scope.IconTile;

__ds_ns.STATUS_NAMES = __ds_scope.STATUS_NAMES;

__ds_ns.SurfaceCard = __ds_scope.SurfaceCard;

__ds_ns.Wordmark = __ds_scope.Wordmark;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.ICON_NAMES = __ds_scope.ICON_NAMES;

__ds_ns.RescueEngine = __ds_scope.RescueEngine;

__ds_ns.Nav = __ds_scope.Nav;

__ds_ns.HeroCurrent = __ds_scope.HeroCurrent;

__ds_ns.TrustTicker = __ds_scope.TrustTicker;

__ds_ns.TheThree = __ds_scope.TheThree;

__ds_ns.BeforeAfter = __ds_scope.BeforeAfter;

__ds_ns.EnquiryCapture = __ds_scope.EnquiryCapture;

__ds_ns.LeadCapture = __ds_scope.LeadCapture;

__ds_ns.Pricing = __ds_scope.Pricing;

__ds_ns.FinalCta = __ds_scope.FinalCta;

__ds_ns.Footer = __ds_scope.Footer;

})();
