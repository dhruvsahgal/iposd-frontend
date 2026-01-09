import { HeroSection } from "@/components/hero-section"
import { FeaturesGrid } from "@/components/features-grid"
import { ProductShowcase } from "@/components/product-showcase"
import { StatsSection } from "@/components/stats-section"
import { CTASection } from "@/components/cta-section"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ProductShowcase />
      <FeaturesGrid />
      <StatsSection />
      <CTASection />
      <Footer />
    </div>
  )
}
