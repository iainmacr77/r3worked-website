import * as React from "react";

export interface SectionHeadingProps {
  eyebrow?: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  dark?: boolean;
  align?: "left" | "center";
  maxTitle?: string;
  maxDescription?: string;
}
