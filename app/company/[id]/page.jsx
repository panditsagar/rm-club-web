"use client";

import React, { useState, useEffect } from "react";
 
import { useParams } from "next/navigation";
import { companiesData } from "@/lib/constants";
import HeroSection1 from "@/components/company-detail/HeroSection1";
import Section2 from "@/components/company-detail/Section2";
 

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
    <div>
      <HeroSection1 company={company} />
      {/* ================= CONTENT ================= */}
      <section className="content">
         <Section2  company={company}/>
      </section>
    </div>
  );
}
