"use client";

import React, { useState, useEffect } from "react";

import { useParams } from "next/navigation";
import { companiesData } from "@/lib/constants";
import HeroSection1 from "@/components/company-detail/HeroSection1";
import Section2 from "@/components/company-detail/Section2";
import CTASection from "@/components/CTASection";
import Section3 from "@/components/company-detail/Section3";
import FounderSection from "@/components/company-detail/FounderSection";
import GallerySection from "@/components/company-detail/GallerySection";

export default function App() {
  const { id } = useParams();

  const company = companiesData.find((c) => c.id === id);

  if (!company) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        Company not found
      </div>
    );
  }

  return (
    <div >
      <HeroSection1 company={company} />
      {/* ================= CONTENT ================= */}
      <section className="relative z-20 bg-[#080618]">
        <Section2 company={company}  />
        <Section3 company={company} />
        <FounderSection company={company} />
        <GallerySection company={company} />
      </section>
         <CTASection />
    </div>
  );
}
