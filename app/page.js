import Image from "next/image";

import HeroSection from "@/components/Herosection";
import SecondSection from "@/components/SecondSection";
import ThirdSection from "@/components/ThirdSection";
import FourthSection from "@/components/FourthSection";
import FifthSection from "@/components/FifthSection";
import SixSection from "@/components/SixSection";
import SevenSection from "@/components/SevenSection";
import CTASection from "@/components/CTASection";
import PortfolioGrid1 from "@/components/PortfolioGrid1";
import PortfolioGrid2 from "@/components/PortfolioGrid2";

export default function Home() {
  return (
    <>
      <HeroSection />
      {/* ================= CONTENT ================= */}
      <section className="content">
        <SecondSection />
        <ThirdSection />
        <FourthSection />
        <PortfolioGrid1 />
        <PortfolioGrid2 />
        <FifthSection />
        <SixSection />
        <SevenSection />
        <CTASection />
      </section>
    </>
  );
}
