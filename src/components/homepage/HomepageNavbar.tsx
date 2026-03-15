"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { NavbarLogoLink, NavbarPrimaryCta } from "../ui/navbar-system";
import { useNavbarVisibility } from "../ui/useNavbarVisibility";

export function HomepageNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isVisible, isAtTop } = useNavbarVisibility({
    topOffset: 24,
    hideAfter: 120,
    forceVisible: menuOpen,
  });

  const links = [
    { href: "/restaurants", label: "Restaurants" },
    { href: "/medical", label: "Medical" },
    { href: "/news", label: "News" },
  ];

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[transform,background-color,box-shadow,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
        isVisible ? "translate-y-0" : "-translate-y-[105%]",
        !isAtTop
          ? "shell-glass-nav"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6 md:px-10">
        {/* Logo */}
        <NavbarLogoLink
          theme="dark"
          accentColor="#FF6B6B"
          desktopLogoClassName="w-28 text-ink lg:w-32"
          mobileMarkClassName="h-9 w-9"
        />

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-8 text-[13px] font-medium tracking-wide text-charcoal/70 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 md:flex">
          <NavbarPrimaryCta href="/book">Book Demo</NavbarPrimaryCta>
        </div>

        {/* Mobile menu toggle */}
        <button
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full text-ink md:hidden"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      <div
        className={cn(
          "absolute inset-x-0 top-[72px] border-b border-ink/[0.06] bg-[#FAFAF8]/95 backdrop-blur-xl px-6 pb-6 pt-2 transition-all duration-200 md:hidden",
          menuOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        )}
      >
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className="block py-3 text-sm font-medium text-charcoal/80 transition-colors hover:text-ink"
          >
            {link.label}
          </Link>
        ))}
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
