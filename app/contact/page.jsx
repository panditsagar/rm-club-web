import React from "react";
import ContactHero from "@/components/contact/ContactHero";
import TeamHero2 from "@/components/Team/TeamHero2";
import CTASection from "@/components/CTASection";
import ContactSection3 from "@/components/contact/ContactSection3";
import ContactSection4 from "@/components/contact/ContactSection4";
const page = () => {
  return (
    <div>
      <ContactHero />
      {/* ================= CONTENT ================= */}
      <section className="content">
        <ContactSection3 />
<ContactSection4 />
        <CTASection />
        
      </section>
    </div>
  );
};

export default page;
