import { AboutSection } from "@/components/AboutSection";
import { CTASection } from "@/components/CTA";
import { HeroSection } from "@/components/HeroSection";
import { InvestmentProducts } from "@/components/InvetsmentProducts";
import { ProcessSection } from "@/components/ProcessSection";
import { TestimonialsSection } from "@/components/Testimonials";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <InvestmentProducts />
      <ProcessSection />
      <TestimonialsSection />
      <CTASection />
    </main>
  );
}
