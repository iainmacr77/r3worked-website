import Link from "next/link";
import { R3WorkedWordmark } from "@/components/homepage/R3WorkedWordmark";

const NAV_LINKS = [
  { href: "#the-3", label: "The 3" },
  { href: "#before-after-showcase", label: "Rework" },
  { href: "#pricing", label: "Pricing" },
  { href: "#final-cta", label: "Review" },
];

const LEGAL_LINKS = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms" },
  { href: "/cookies", label: "Cookie Policy" },
];

export function HomepageFooter() {
  return (
    <footer className="border-t border-[#161616]/6 bg-[#F7F3EE] px-6 pb-10 pt-20 md:px-10">
      <div className="mx-auto flex max-w-[78rem] flex-col gap-14">
        <div className="grid gap-12 md:grid-cols-[minmax(0,1.35fr)_minmax(0,0.65fr)_minmax(0,0.55fr)_minmax(0,0.55fr)] md:gap-10">
          <div className="max-w-md space-y-5">
            <R3WorkedWordmark className="text-[1.45rem]" />
            <p className="text-base leading-8 text-[#2A2A2A]/72">
              Premium website uplift for service businesses, built around
              cleaner enquiry capture and smarter follow-up behind the scenes.
            </p>
          </div>

          <div className="grid gap-3 text-sm">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#B86B5C]/80">
              Contact
            </p>
            <a
              href="mailto:hello@r3worked.co.uk"
              className="text-[#2A2A2A]/74 transition-colors hover:text-[#161616]"
            >
              hello@r3worked.co.uk
            </a>
            <a
              href="tel:+442000000000"
              className="text-[#2A2A2A]/74 transition-colors hover:text-[#161616]"
            >
              +44 (0)20 0000 0000
            </a>
            <p className="text-[13px] leading-6 text-[#2A2A2A]/58">
              WhatsApp available for quick questions.
            </p>
          </div>

          <div className="grid gap-3 text-sm">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#B86B5C]/80">
              Navigate
            </p>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#2A2A2A]/74 transition-colors hover:text-[#161616]"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="grid gap-3 text-sm">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#B86B5C]/80">
              Policies
            </p>
            {LEGAL_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#2A2A2A]/74 transition-colors hover:text-[#161616]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-[#161616]/6 pt-6 text-[11px] uppercase tracking-[0.16em] text-[#2A2A2A]/44 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} R3WORKED</p>
          <p className="normal-case tracking-normal text-[#2A2A2A]/46">
            Sharper website fronts for serious enquiries
          </p>
        </div>
      </div>
    </footer>
  );
}
