import Image from "next/image";

import HeroSection from "@/components/Herosection";
import SecondSection from "@/components/SecondSection";
import ImpactGallery from "@/components/ImpactGallery";
import ThirdSection from "@/components/ThirdSection";
import FourthSection from "@/components/FourthSection";
 import SixSection from "@/components/SixSection";
import SevenSection from "@/components/SevenSection";
import CTASection from "@/components/CTASection";
 import PortfolioGrid2 from "@/components/PortfolioGrid2";

import InfoCardsSection from "@/components/InfoCardsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <InfoCardsSection />
      {/* ================= CONTENT ================= */}
      <section className="content">
        <SecondSection />
        <ImpactGallery />
        <ThirdSection />
        <FourthSection />
       
        <PortfolioGrid2 />
        
        <SixSection />
        <SevenSection />
        <CTASection />
      </section>
    </>
  );
}
