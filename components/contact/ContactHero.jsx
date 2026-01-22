"use client";

import React, { useState, useEffect } from "react";
import Spline from "@splinetool/react-spline";
import { motion, AnimatePresence } from "framer-motion";
import ContactForm from "./ContactForm";

export default function App() {
  return (
    <>
      <section className="relative min-h-screen w-full overflow-hidden bg-[#080618] flex items-center">
            {/* MOBILE IMAGE */}
        <div className="fixed inset-0 z-0 md:hidden">
          <img
            src="/bg.png"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        {/* SPLINE BACKGROUND */}
        <div className="fixed inset-0 pointer-events-none transition-opacity duration-150 ease-linear z-0 hidden md:block">
          <Spline scene="https://prod.spline.design/DBCGWGemx6OSZ2Xf/scene.splinecode" />
        </div>

        {/* CONTENT */}
        <div className="max-w-[1400px] mx-auto relative z-50 w-full px-5 md:px-0 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mt-20 lg:mt-0">
          {/* Left Side: Text */}
          <div className="flex flex-col justify-start">
            <h1 className="font-jakarta text-[2.65rem] md:text-7xl lg:text-[5.4rem] font-bold mt-16 sm:-mt-16 tracking-tight leading-none capitalize text-[#ECF5FF]">
              Chat with the team{" "}
            </h1>

            <p className="mt-14 text-lg md:text-[1.65rem] text-white max-w-lg leading-[1.1] tracking-wide font-normal">
              RM Club AI helps you tackle data bottlenecks, streamline analysis,
              and make smarter decisions with ease.
            </p>
          </div>

          {/* Right Side: Form */}
       <div className="flex justify-center lg:justify-end w-full relative z-[60]">
  <ContactForm />
</div>

        </div>
      </section>
    </>
  );
}
