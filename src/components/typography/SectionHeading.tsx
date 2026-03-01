import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: ReactNode;
  title: ReactNode;
  subtitle?: ReactNode;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  eyebrowClassName?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  className,
  titleClassName,
  subtitleClassName,
  eyebrowClassName,
}: SectionHeadingProps) {
  return (
    <div className={cn("section-heading-stack", className)}>
      {eyebrow ? (
        <span className={cn("type-eyebrow text-coral", eyebrowClassName)}>
          {eyebrow}
        </span>
      ) : null}
      <h2 className={cn("type-h2 text-ink", titleClassName)}>{title}</h2>
      {subtitle ? (
        <p className={cn("type-subhead text-charcoal", subtitleClassName)}>
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
