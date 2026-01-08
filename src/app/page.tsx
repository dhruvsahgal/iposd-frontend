import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { Tools } from "@/components/sections/Tools";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Providers } from "@/components/sections/Providers";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Tools />
      <HowItWorks />
      <Providers />
      <Testimonials />
      <CTA />
    </>
  );
}
