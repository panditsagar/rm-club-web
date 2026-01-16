"use client";

import React, { useState, useEffect } from "react";
import Spline from "@splinetool/react-spline";
import { motion, AnimatePresence } from "framer-motion";
import { companiesData } from "@/lib/constants"; // adjust path if needed

export default function App({ company }) {
 

  return (
    <>
      <section className="relative h-screen w-full overflow-hidden bg-[#080618]">
        {/* SPLINE BACKGROUND */}
        <div className="fixed inset-0 pointer-events-none transition-opacity duration-150 ease-linear z-0">
          <Spline scene="https://prod.spline.design/DBCGWGemx6OSZ2Xf/scene.splinecode" />
        </div>

        {/* CONTENT */}
        <div className="max-w-[1400px] mx-auto relative z-50 h-full flex flex-col justify-center items-center mt-[-100px] px-6">
          <h1
            className="font-jakarta text-5xl md:text-7xl lg:text-[5.2rem] font-bold max-w-7xl tracking-tight leading-none capitalize
 text-[#ECF5FF]  "
          >
            {company.name}
          </h1>

          <p className="mt-10 text-lg md:text-[1.65rem] text-white  leading-[1.1] tracking-wide font-normal">
            {company.tagline}
          </p>
        </div>
      </section>
    </>
  );
}
