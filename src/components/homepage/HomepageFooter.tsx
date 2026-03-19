import Link from "next/link";
import { R3WorkedWordmark } from "@/components/homepage/R3WorkedWordmark";

const FOOTER_LINKS = [
  { href: "#hero", label: "Top" },
  { href: "#the-3", label: "The 3" },
  { href: "#before-after-showcase", label: "Rework" },
  { href: "#final-cta", label: "Review" },
];

export function HomepageFooter() {
  return (
    <footer className="border-t border-[#161616]/6 bg-[#F7F3EE] px-6 pb-10 pt-20 md:px-10">
      <div className="mx-auto flex max-w-[78rem] flex-col gap-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-md space-y-5">
            <R3WorkedWordmark className="text-[1.45rem]" />
            <p className="text-base leading-8 text-[#2A2A2A]/72">
              Premium website uplift for service businesses, built around
              cleaner enquiry capture and smarter follow-up behind the scenes.
            </p>
          </div>

          <div className="grid gap-3 text-sm">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#B86B5C]/80">
              Navigate
            </p>
            {FOOTER_LINKS.map((link) => (
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
          <p>Sharper website fronts for serious enquiries</p>
        </div>
      </div>
    </footer>
  );
}
