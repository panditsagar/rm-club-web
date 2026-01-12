import React from "react";
import AboutSection1 from "@/components/about/AboutSection1";
import AboutSection2 from "@/components/about/AboutSection2";
import AboutSection3 from "@/components/about/AboutSection3";
import CTASection from "@/components/CTASection";
import FourthSection from "@/components/FourthSection";
const page = () => {
  return (
    <div>
      <AboutSection1 />
      {/* ================= CONTENT ================= */}
      <section className="content">
        <AboutSection2 />
        <FourthSection/>
        <AboutSection3 />
        <CTASection/>
      </section>
    </div>
  );
};

export default page;
