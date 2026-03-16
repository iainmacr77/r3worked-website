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

  const isHomepage = tone === "light" && pathname === "/";
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
        !isAtTop
          ? "shell-glass-nav"
          : isHomepage
            ? "bg-[linear-gradient(180deg,rgba(250,250,248,0.92)_0%,rgba(250,250,248,0.56)_58%,rgba(250,250,248,0)_100%)] backdrop-blur-[8px]"
            : "bg-transparent"
      )}
    >
      <div
        className={cn(
          "mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6 md:px-10",
          isHomepage && "h-[76px] max-w-[78rem] md:px-8 lg:px-10"
        )}
      >
        <NavbarLogoLink
          theme={logoTheme}
          accentColor="#FF6B6B"
          desktopLogoClassName={cn(
            "w-28 lg:w-32",
            isHomepage && "lg:w-[8.4rem]",
            topToneIsDark ? "text-white" : "text-ink"
          )}
          mobileMarkClassName="h-9 w-9"
        />

        <nav
          className={cn(
            "hidden items-center text-[13px] font-medium tracking-wide md:flex",
            isHomepage ? "gap-7" : "gap-8"
          )}
        >
          {NAV_LINKS.map((link) => {
            const active = isLinkActive(pathname, link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "relative rounded-full py-2 transition-[color,background-color] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral/18 focus-visible:ring-offset-2",
                  isHomepage ? "px-2.5" : "px-0",
                  isHomepage && !active && !topToneIsDark && "hover:bg-black/[0.028]",
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

        <div
          className={cn(
            "hidden items-center gap-3 md:flex",
            isHomepage && "pl-2"
          )}
        >
          <NavbarPrimaryCta
            href="/book"
            variant={isHomepage ? "shell" : "solid"}
            className={cn(
              isHomepage &&
                "min-h-[42px] px-5 text-[12.5px] tracking-[0.06em] focus-visible:ring-offset-[#FAFAF8]"
            )}
          >
            Book Demo
          </NavbarPrimaryCta>
        </div>

        <button
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
          className={cn(
            "inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors md:hidden",
            topToneIsDark
              ? "text-white hover:bg-white/[0.06]"
              : "text-ink hover:bg-black/[0.04]",
            isHomepage &&
              "border border-ink/[0.06] bg-white/48 shadow-[inset_0_1px_0_rgba(255,255,255,0.72),0_6px_16px_rgba(47,36,26,0.05)] backdrop-blur-sm"
          )}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <div
        className={cn(
          "absolute inset-x-0 top-[72px] backdrop-blur-xl px-6 pb-6 pt-2 transition-all duration-200 md:hidden",
          mobilePanelClass,
          isHomepage &&
            "rounded-b-[1.5rem] border-x border-b border-ink/[0.06] bg-[#FAFAF8]/92 shadow-[0_16px_34px_rgba(35,28,22,0.07)]",
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
                isHomepage && !active && "hover:bg-black/[0.03]",
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
          variant={isHomepage ? "shell" : "solid"}
          className={cn(
            "mt-3 flex w-full justify-center text-sm",
            isHomepage && "min-h-[42px] tracking-[0.06em] focus-visible:ring-offset-[#FAFAF8]"
          )}
        >
          Book Demo
        </NavbarPrimaryCta>
      </div>
    </header>
  );
}
