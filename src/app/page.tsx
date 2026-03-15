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
  title: "Hey Lola | One Voice Layer for the Real World",
  description:
    "Lola answers naturally, captures intent, routes exceptions, and moves bookings, questions, and service requests into the right business flow — starting with restaurants and clinics.",
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
