"use client";

import React, { useState, useEffect } from "react";
import Spline from "@splinetool/react-spline";
import { motion, AnimatePresence } from "framer-motion";
import ContactForm from "./ContactForm";

export default function App() {
  return (
    <>
      <section className="relative min-h-screen w-full overflow-hidden bg-[#080618] flex items-center">
        {/* SPLINE BACKGROUND */}
        <div className="fixed inset-0 pointer-events-none transition-opacity duration-150 ease-linear z-0">
          <Spline scene="https://prod.spline.design/DBCGWGemx6OSZ2Xf/scene.splinecode" />
        </div>

        {/* CONTENT */}
        <div className="max-w-[1400px] mx-auto relative z-50 w-full px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mt-20 lg:mt-0">
          {/* Left Side: Text */}
          <div className="flex flex-col justify-start">
            <h1 className="font-jakarta text-5xl md:text-7xl lg:text-[5.4rem] font-bold mt-[-40px] tracking-tight leading-none capitalize text-[#ECF5FF]">
              Chat with the team{" "}
            </h1>

            <p className="mt-14 text-lg md:text-[1.65rem] text-white max-w-lg leading-[1.1] tracking-wide font-normal">
              RM Club AI helps you tackle data bottlenecks, streamline analysis,
              and make smarter decisions with ease.
            </p>
          </div>

          {/* Right Side: Form */}
          <div className="flex justify-center lg:justify-end w-full">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
