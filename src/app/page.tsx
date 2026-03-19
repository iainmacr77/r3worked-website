import type { Metadata } from "next";
import { HomepageNavbar } from "@/components/homepage/HomepageNavbar";
import { HomepageHero } from "@/components/homepage/HomepageHero";
import { TheThreeInR3Worked } from "@/components/homepage/TheThreeInR3Worked";
import { BeforeAfterShowcase } from "@/components/homepage/BeforeAfterShowcase";
import { LeadCaptureLayer } from "@/components/homepage/LeadCaptureLayer";
import { PreviewExamples } from "@/components/homepage/PreviewExamples";
import { FinalCta } from "@/components/homepage/FinalCta";
import { HomepageFooter } from "@/components/homepage/HomepageFooter";
import { createSiteMetadata } from "@/lib/site-metadata";

export const metadata: Metadata = createSiteMetadata({
  title: "R3WORKED | Website Uplift, Lead Capture, Smarter Follow-Up",
  description:
    "R3WORKED helps service businesses turn dated digital fronts into sharper websites with clearer enquiries, better lead handling, and cleaner follow-up.",
});

export default function HomePage() {
  return (
    <main className="flex min-h-screen w-full flex-col bg-[#F7F3EE] text-[#161616] scroll-smooth">
      <HomepageNavbar />
      <HomepageHero />
      <TheThreeInR3Worked />
      <BeforeAfterShowcase />
      <LeadCaptureLayer />
      <PreviewExamples />
      <FinalCta />
      <HomepageFooter />
    </main>
  );
}
