import * as React from "react";

export interface IconProps {
  /** Icon name — see ICON_NAMES export for the full curated list (lucide-compatible). */
  name:
    | "arrow-right"
    | "bell"
    | "check"
    | "x"
    | "menu"
    | "send"
    | "user"
    | "map-pin"
    | "briefcase"
    | "chevron-down"
    | "camera"
    | "phone"
    | "phone-missed"
    | "message-square"
    | "star"
    | "clipboard-check"
    | "clipboard-list"
    | "file-text"
    | "route"
    | "user-check"
    | "mouse-pointer-click"
    | "check-circle"
    | "arrow-up-right"
    | "plus";
  /** Pixel size (square). Default 18. */
  size?: number;
  /** Stroke width. Default 2. */
  strokeWidth?: number;
  /** Stroke color — defaults to currentColor so it inherits text color. */
  color?: string;
  className?: string;
}
