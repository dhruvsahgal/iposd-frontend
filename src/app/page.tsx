import { HeroSection } from "@/components/sections/HeroSection";
import { ProductShowcase } from "@/components/sections/ProductShowcase";
import { FeaturesGrid } from "@/components/sections/FeaturesGrid";
import { StatsSection } from "@/components/sections/StatsSection";
import { CTASection } from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProductShowcase />
      <FeaturesGrid />
      <StatsSection />
      <CTASection />
    </>
  );
}
