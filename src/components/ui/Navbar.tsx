"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import {
  NavbarLogoLink,
  NavbarPrimaryCta,
  NavbarVerticalSwitcher,
} from "./navbar-system";
import { useNavbarVisibility } from "./useNavbarVisibility";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isMedical = pathname === "/medical";
  const { isVisible, isAtTop } = useNavbarVisibility({
    topOffset: 28,
    hideAfter: 120,
    forceVisible: menuOpen,
  });
  const accentColor = isMedical ? "#8DE5D5" : "#FF6B6B";

  const scrollToAnchor = (id: "#features" | "#framework" | "#pricing") => {
    setMenuOpen(false);
    const target = document.querySelector(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[transform,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-[105%] opacity-0"
      )}
    >
      <div className="mx-auto mt-4 w-[95%] max-w-7xl">
        <div className="relative">
          <nav
            className={cn(
              "flex h-[70px] items-center justify-between rounded-full border px-5 text-peach backdrop-blur-xl transition-[background-color,border-color,box-shadow] duration-500 md:px-6",
              isAtTop
                ? "border-white/10 bg-[rgba(17,20,30,0.58)] shadow-[0_12px_26px_rgba(10,10,18,0.18)]"
                : "border-white/12 bg-[rgba(17,20,30,0.82)] shadow-[0_16px_34px_rgba(10,10,18,0.28)]"
            )}
          >
            <NavbarLogoLink
              theme="light"
              accentColor={accentColor}
              desktopLogoClassName="w-28 text-white lg:w-32"
              mobileMarkClassName="h-9 w-9"
            />

            <div className="hidden items-center gap-8 text-[13px] font-medium tracking-wide md:flex">
              <Link href="#features" className="transition-colors hover:text-peach">
                Features
              </Link>
              <Link href="#framework" className="transition-colors hover:text-peach">
                Framework
              </Link>
              <Link href="#pricing" className="transition-colors hover:text-peach">
                Pricing
              </Link>
            </div>

            <div className="hidden items-center gap-3 md:flex">
              <NavbarVerticalSwitcher
                activeVertical={isMedical ? "medical" : "restaurants"}
              />
              <NavbarPrimaryCta href="/book">Book Demo</NavbarPrimaryCta>
            </div>

            <div className="flex items-center gap-2 md:hidden">
              <NavbarPrimaryCta href="/book" className="min-h-10 px-4 py-2 text-sm">
                Book Demo
              </NavbarPrimaryCta>
              <button
                aria-label="Toggle navigation menu"
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen((prev) => !prev)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-peach transition-colors hover:bg-white/[0.08]"
              >
                {menuOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </nav>

          <div
            className={cn(
              "absolute inset-x-0 top-[calc(100%+0.7rem)] rounded-[1.5rem] border border-white/10 bg-[rgba(17,20,30,0.95)] p-3 text-peach shadow-[0_18px_36px_rgba(10,10,18,0.34)] backdrop-blur-xl transition-all duration-300 ease-out md:hidden",
              menuOpen
                ? "pointer-events-auto translate-y-0 opacity-100"
                : "pointer-events-none -translate-y-2 opacity-0"
            )}
          >
            <div className="mb-3">
              <NavbarVerticalSwitcher
                activeVertical={isMedical ? "medical" : "restaurants"}
                compact
                onNavigate={() => setMenuOpen(false)}
              />
            </div>

            <button
              onClick={() => scrollToAnchor("#features")}
              className="w-full rounded-xl px-3 py-2 text-left text-sm font-medium transition-colors hover:bg-white/[0.06]"
            >
              Features
            </button>
            <button
              onClick={() => scrollToAnchor("#framework")}
              className="w-full rounded-xl px-3 py-2 text-left text-sm font-medium transition-colors hover:bg-white/[0.06]"
            >
              Framework
            </button>
            <button
              onClick={() => scrollToAnchor("#pricing")}
              className="w-full rounded-xl px-3 py-2 text-left text-sm font-medium transition-colors hover:bg-white/[0.06]"
            >
              Pricing
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
