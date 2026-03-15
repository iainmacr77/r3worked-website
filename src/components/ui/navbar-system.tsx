"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { BrandMark, Logo } from "./Logo";

type NavbarLogoLinkProps = {
  theme: "light" | "dark";
  accentColor: string;
  desktopLogoClassName?: string;
  mobileMarkClassName?: string;
};

type NavbarPrimaryCtaProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

type NavbarVerticalSwitcherProps = {
  activeVertical: "restaurants" | "medical";
  compact?: boolean;
  onNavigate?: () => void;
};

export function NavbarLogoLink({
  theme,
  accentColor,
  desktopLogoClassName,
  mobileMarkClassName = "h-9 w-9",
}: NavbarLogoLinkProps) {
  return (
    <Link href="/" className="flex-shrink-0">
      <div className="hidden md:block">
        <Logo
          theme={theme}
          className={desktopLogoClassName}
          accentColor={accentColor}
        />
      </div>
      <div className="md:hidden">
        <BrandMark className={mobileMarkClassName} />
      </div>
    </Link>
  );
}

export function NavbarPrimaryCta({
  href,
  children,
  className,
  onClick,
}: NavbarPrimaryCtaProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "group relative inline-flex min-h-11 items-center justify-center overflow-hidden rounded-full border border-coral/55 bg-[linear-gradient(135deg,#FF6B6B_0%,#F0716B_100%)] px-5 py-2.5 text-[13px] font-semibold tracking-[0.04em] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_10px_22px_rgba(231,127,116,0.22)] transition-[transform,box-shadow,border-color,background-color] duration-300 hover:-translate-y-0.5 hover:border-coral/70 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.26),0_14px_28px_rgba(231,127,116,0.28)] active:translate-y-0 active:scale-[0.98]",
        className
      )}
    >
      <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(105deg,rgba(255,255,255,0)_28%,rgba(255,255,255,0.28)_50%,rgba(255,255,255,0)_72%)] translate-x-[-120%] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-[120%]" />
      <span className="relative z-10">{children}</span>
    </Link>
  );
}

export function NavbarVerticalSwitcher({
  activeVertical,
  compact = false,
  onNavigate,
}: NavbarVerticalSwitcherProps) {
  const baseText = compact ? "text-[11px]" : "text-xs";

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] p-1 font-medium backdrop-blur-sm",
        baseText
      )}
    >
      <Link
        href="/restaurants"
        onClick={onNavigate}
        className={cn(
          "rounded-full px-3 py-1.5 transition-[background-color,color,box-shadow] duration-300",
          activeVertical === "restaurants"
            ? "bg-coral text-white shadow-[0_8px_20px_rgba(231,127,116,0.24)]"
            : "text-peach/82 hover:text-peach"
        )}
      >
        Restaurants
      </Link>
      <Link
        href="/medical"
        onClick={onNavigate}
        className={cn(
          "rounded-full px-3 py-1.5 transition-[background-color,color,box-shadow] duration-300",
          activeVertical === "medical"
            ? "bg-[#8DE5D5] text-ink shadow-[0_8px_20px_rgba(141,229,213,0.22)]"
            : "text-peach/82 hover:text-peach"
        )}
      >
        Medical
      </Link>
    </div>
  );
}
