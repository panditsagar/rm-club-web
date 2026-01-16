"use client";

import React, { useState, useEffect } from "react";

import { useParams } from "next/navigation";
import { companiesData } from "@/lib/constants";
import HeroSection1 from "@/components/company-detail/HeroSection1";
import Section2 from "@/components/company-detail/Section2";
import CTASection from "@/components/CTASection";

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
    <div className="bg-[#020108]">
      <HeroSection1 company={company} />
      {/* ================= CONTENT ================= */}
      <section className="relative z-20">
        <Section2 company={company} />
        <CTASection />
      </section>
    </div>
  );
}
