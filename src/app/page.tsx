import { Navbar } from "@/components/ui/Navbar";
import { Hero } from "@/components/ui/Hero";
import { FeaturesDashboard } from "@/components/ui/FeaturesDashboard";
import { Philosophy } from "@/components/ui/Philosophy";
import { TheFramework } from "@/components/ui/TheFramework";
import { Pricing } from "@/components/ui/Pricing";
import { Footer } from "@/components/ui/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col bg-ink scroll-smooth">
      <Navbar />
      <Hero />
      <FeaturesDashboard />
      <Philosophy />
      <TheFramework />
      <Pricing />
      <Footer />
    </main>
  );
}
