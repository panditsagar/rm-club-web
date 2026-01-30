"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ContactForm from "./ContactForm";

export default function App() {
  return (
    <>
      <section className="relative min-h-screen w-full overflow-hidden bg-white flex items-center">
            {/* MOBILE IMAGE */}
        <div className="fixed inset-0 z-0 md:hidden opacity-10">
          <img
            src="/bg.png"
            alt="Background"
            className="w-full h-full object-cover grayscale"
          />
        </div>

        {/* CONTENT */}
        <div className="max-w-[1400px] mx-auto relative z-50 w-full px-5 md:px-0 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mt-20 lg:mt-0">
          {/* Left Side: Text */}
          <div className="flex flex-col justify-start">
             {/* Small Kicker */}
            <div className="mb-6 flex items-center gap-2">
                <div className="h-[2px] w-10 bg-accent"></div>
                <span className="text-primary font-bold uppercase tracking-widest text-sm">Contact Us</span>
            </div>

            <h1 className="font-switzer text-[2.65rem] md:text-7xl lg:text-[5.4rem] font-bold mt-4 tracking-tight leading-[1.1] capitalize text-primary-dark">
              Chat with the team{" "}
            </h1>

            <p className="mt-8 text-lg md:text-[1.65rem] text-gray-600 max-w-lg leading-relaxed font-normal">
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
