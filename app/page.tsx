import Announcement from "./components/Announcement";
import HeroSection from "./components/HeroSection";
import MarqueBrand from "./components/MarqueBrand";
import ServicesSection from "./components/ServicesSection";
import PortfolioSection from "./components/PortfolioSection";
import CaraKerja from "./components/CaraKerja";
import PricingSection from "./components/PricingSection";
import Testimonials from "./components/Testimonials";
import Faq from "./components/faq";
import FinalCta from "./components/FinalCTA";

export default function Home() {
  return (
    <>
      <Announcement />
      <HeroSection />
      <MarqueBrand />
      <ServicesSection />
      <PortfolioSection />
      <CaraKerja />
      <PricingSection />
      <Testimonials />
      <Faq />
      <FinalCta />
    </>
  );
}
