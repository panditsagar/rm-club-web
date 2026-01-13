import React from "react";
import TeamHero from "@/components/Team/TeamHero";
import TeamHero2 from "@/components/Team/TeamHero2";
import CTASection from "@/components/CTASection";
const page = () => {
  return (
    <div>
      <TeamHero />
      {/* ================= CONTENT ================= */}
      <section className="content">
        <TeamHero2 />

        <CTASection />
      </section>
    </div>
  );
};

export default page;
