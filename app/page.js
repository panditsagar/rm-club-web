import Image from "next/image";

import HeroSection from "@/components/Herosection";
import SecondSection from "@/components/SecondSection";
export default function Home() {
  return (
    <>
      <HeroSection />
      {/* ================= CONTENT ================= */}
      <section className="content">
        <SecondSection />
      </section>
    </>
  );
}
