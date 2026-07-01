import * as React from "react";

export interface WordmarkProps {
  /** Font-size (controls overall mark size, e.g. "1.1rem" nav vs "1.45rem" footer). */
  size?: string;
  className?: string;
  style?: React.CSSProperties;
}
