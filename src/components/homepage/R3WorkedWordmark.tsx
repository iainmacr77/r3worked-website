import { cn } from "@/lib/utils";

type R3WorkedWordmarkProps = {
  className?: string;
  accentClassName?: string;
};

export function R3WorkedWordmark({
  className,
  accentClassName,
}: R3WorkedWordmarkProps) {
  return (
    <span
      aria-label="R3WORKED"
      className={cn(
        "inline-flex items-baseline font-semibold uppercase tracking-[-0.075em] text-[#161616]",
        className
      )}
    >
      <span>R</span>
      <span className={cn("text-[#D96B4F]", accentClassName)}>3</span>
      <span>WORKED</span>
    </span>
  );
}
