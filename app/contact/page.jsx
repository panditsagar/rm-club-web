import React from "react";
import ContactHero from "@/components/contact/ContactHero";
import ContactConnectSection from "@/components/contact/ContactConnectSection";
import ContactFormSection from "@/components/contact/ContactFormSection";
import ContactMapSection from "@/components/contact/ContactMapSection";
import OfficeLocationsSection from "@/components/contact/OfficeLocationsSection";
import CTASection from "@/components/CTASection";
 const page = () => {
  return (
    <div>
      <ContactHero />
      <ContactConnectSection />
      <ContactFormSection />
      <ContactMapSection />
      <OfficeLocationsSection />
      {/* ================= CONTENT ================= */}
      <section className="content">
        <CTASection />
      </section>
    </div>
  );
};

export default page;
