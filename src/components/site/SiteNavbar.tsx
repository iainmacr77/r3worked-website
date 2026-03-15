"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { NavbarLogoLink, NavbarPrimaryCta } from "@/components/ui/navbar-system";
import { useNavbarVisibility } from "@/components/ui/useNavbarVisibility";

type SiteNavbarProps = {
  tone?: "light" | "dark";
};

const NAV_LINKS = [
  { href: "/restaurants", label: "Restaurants" },
  { href: "/medical", label: "Medical" },
  { href: "/news", label: "News" },
];

function isLinkActive(pathname: string, href: string) {
  if (href === "/news") {
    return pathname === "/news" || pathname.startsWith("/news/");
  }

  return pathname === href;
}

export function SiteNavbar({ tone = "light" }: SiteNavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const { isVisible, isAtTop } = useNavbarVisibility({
    topOffset: 24,
    hideAfter: 120,
    forceVisible: menuOpen,
  });

  const topToneIsDark = tone === "dark" && isAtTop;
  const logoTheme = topToneIsDark ? "light" : "dark";
  const navTextClass = topToneIsDark ? "text-peach/68" : "text-charcoal/68";
  const navHoverClass = topToneIsDark ? "hover:text-white" : "hover:text-ink";
  const navActiveClass = topToneIsDark ? "text-white" : "text-ink";
  const activeRuleClass = topToneIsDark ? "bg-white/60" : "bg-ink/58";
  const mobilePanelClass = topToneIsDark
    ? "border-white/10 bg-[rgba(17,20,30,0.92)] text-peach"
    : "border-ink/[0.06] bg-[#FAFAF8]/95 text-ink";
  const mobileItemClass = topToneIsDark
    ? "text-peach/82 hover:bg-white/[0.05] hover:text-white"
    : "text-charcoal/80 hover:bg-black/[0.03] hover:text-ink";
  const mobileActiveClass = topToneIsDark
    ? "bg-white/[0.08] text-white"
    : "bg-black/[0.045] text-ink";

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[transform,background-color,box-shadow,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
        isVisible ? "translate-y-0" : "-translate-y-[105%]",
        !isAtTop ? "shell-glass-nav" : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6 md:px-10">
        <NavbarLogoLink
          theme={logoTheme}
          accentColor="#FF6B6B"
          desktopLogoClassName={cn(
            "w-28 lg:w-32",
            topToneIsDark ? "text-white" : "text-ink"
          )}
          mobileMarkClassName="h-9 w-9"
        />

        <nav className="hidden items-center gap-8 text-[13px] font-medium tracking-wide md:flex">
          {NAV_LINKS.map((link) => {
            const active = isLinkActive(pathname, link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "relative py-2 transition-colors",
                  navTextClass,
                  navHoverClass,
                  active && navActiveClass
                )}
              >
                {link.label}
                {active ? (
                  <span
                    className={cn(
                      "absolute inset-x-0 -bottom-0.5 h-px rounded-full",
                      activeRuleClass
                    )}
                  />
                ) : null}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <NavbarPrimaryCta href="/book">Book Demo</NavbarPrimaryCta>
        </div>

        <button
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
          className={cn(
            "inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors md:hidden",
            topToneIsDark
              ? "text-white hover:bg-white/[0.06]"
              : "text-ink hover:bg-black/[0.04]"
          )}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <div
        className={cn(
          "absolute inset-x-0 top-[72px] backdrop-blur-xl px-6 pb-6 pt-2 transition-all duration-200 md:hidden",
          mobilePanelClass,
          menuOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        )}
      >
        {NAV_LINKS.map((link) => {
          const active = isLinkActive(pathname, link.href);

          return (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              aria-current={active ? "page" : undefined}
              className={cn(
                "block rounded-xl px-3 py-3 text-sm font-medium transition-colors",
                mobileItemClass,
                active && mobileActiveClass
              )}
            >
              {link.label}
            </Link>
          );
        })}
        <NavbarPrimaryCta
          href="/book"
          onClick={() => setMenuOpen(false)}
          className="mt-3 flex w-full justify-center text-sm"
        >
          Book Demo
        </NavbarPrimaryCta>
      </div>
    </header>
  );
}
