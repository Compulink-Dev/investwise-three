import About from "@/components/AboutSection";
import CTA from "@/components/CTA";
import { HeroSection } from "@/components/HeroSection";
import InvestmentProducts from "@/components/InvetsmentProducts";
import Process from "@/components/ProcessSection";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <About />
      <InvestmentProducts />
      <Process />
      <Testimonials />
      <CTA />
    </main>
  );
}
