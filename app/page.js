import Image from "next/image";

import HeroSection from "@/components/Herosection";
import SecondSection from "@/components/SecondSection";
import ThirdSection from "@/components/ThirdSection";
import FourthSection from "@/components/FourthSection";
import FifthSection from "@/components/FifthSection";
 export default function Home() {
  return (
    <>
      <HeroSection />
      {/* ================= CONTENT ================= */}
      <section className="content">
        <SecondSection />
        <ThirdSection />
        <FourthSection />
        <FifthSection />
      </section>
    </>
  );
}
