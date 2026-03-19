import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type HomepageSectionShellProps = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
  dark?: boolean;
  className?: string;
};

export function HomepageSectionShell({
  id,
  eyebrow,
  title,
  description,
  children,
  dark = false,
  className,
}: HomepageSectionShellProps) {
  return (
    <section
      id={id}
      className={cn(
        "px-6 py-24 md:px-10 md:py-32",
        dark ? "bg-[#161616] text-[#F7F3EE]" : "bg-[#F7F3EE] text-[#161616]",
        className
      )}
    >
      <div className="mx-auto flex max-w-[78rem] flex-col gap-12">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-end">
          <div className="space-y-4">
            <p
              className={cn(
                "text-[11px] font-semibold uppercase tracking-[0.22em]",
                dark ? "text-[#E7DED2]/64" : "text-[#7E3F35]/72"
              )}
            >
              {eyebrow}
            </p>
            <h2 className="max-w-[12ch] text-4xl font-semibold tracking-[-0.045em] md:text-5xl">
              {title}
            </h2>
          </div>

          <p
            className={cn(
              "max-w-[42rem] text-base leading-8 md:text-lg",
              dark ? "text-[#F7F3EE]/68" : "text-[#2A2A2A]/72"
            )}
          >
            {description}
          </p>
        </div>

        {children}
      </div>
    </section>
  );
}
