import type { Metadata } from "next";
import { HomepageNavbar } from "@/components/homepage/HomepageNavbar";
import { HomepageHero } from "@/components/homepage/HomepageHero";
import { ChooseYourWorld } from "@/components/homepage/ChooseYourWorld";
import { HowLolaWorks } from "@/components/homepage/HowLolaWorks";
import { OperationalValue } from "@/components/homepage/OperationalValue";
import { BroaderVision } from "@/components/homepage/BroaderVision";
import { LatestNews } from "@/components/homepage/LatestNews";
import { HomepageFooter } from "@/components/homepage/HomepageFooter";

export const metadata: Metadata = {
  title: "Hey Lola | One Voice Layer for Real-World Operations",
  description:
    "Lola answers naturally, captures demand, routes exceptions, and moves service requests into the right business flow, with restaurants and medical live today.",
};

export default function HomePage() {
  return (
    <main className="flex min-h-screen w-full flex-col bg-ink scroll-smooth">
      <HomepageNavbar />
      <HomepageHero />
      <ChooseYourWorld />
      <HowLolaWorks />
      <OperationalValue />
      <BroaderVision />
      <LatestNews />
      <HomepageFooter />
    </main>
  );
}
