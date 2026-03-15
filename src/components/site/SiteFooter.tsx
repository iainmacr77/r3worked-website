import Link from "next/link";
import { Logo } from "@/components/ui/Logo";

const FOOTER_LINK_GROUPS = [
  {
    title: "Explore",
    links: [
      { href: "/restaurants", label: "Restaurants" },
      { href: "/medical", label: "Medical" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/news", label: "News" },
      { href: "/book", label: "Book Demo" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="w-full border-t border-ink/[0.06] bg-[#FAFAF8] px-6 pb-12 pt-20 text-ink md:px-16">
      <div className="mx-auto mb-16 flex max-w-7xl flex-col items-start justify-between gap-16 md:flex-row md:items-start">
        <div className="flex max-w-sm flex-col gap-6">
          <Logo theme="dark" className="w-32" accentColor="#FF6B6B" />
          <p className="font-outfit text-sm leading-relaxed text-charcoal/52">
            One voice layer for real-world operations, live today in restaurants
            and medical.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-12 font-outfit text-sm">
          {FOOTER_LINK_GROUPS.map((group) => (
            <div key={group.title} className="flex flex-col gap-4">
              <h4 className="font-jetbrains text-[10px] uppercase tracking-[0.18em] text-charcoal/35">
                {group.title}
              </h4>
              {group.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-charcoal/65 transition-colors hover:text-ink"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-ink/[0.06] pt-8 font-jetbrains text-[10px] tracking-[0.1em] text-charcoal/30 md:flex-row">
        <p>
          © {new Date().getFullYear()} Hey Lola Technologies. All rights
          reserved.
        </p>
        <p>Cape Town, South Africa</p>
      </div>
    </footer>
  );
}
