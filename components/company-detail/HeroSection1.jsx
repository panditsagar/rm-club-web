"use client";

import React from "react";
import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";

export default function App({ company }) {
  // Animation Variants
  const containerVars = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVars = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="relative   w-full overflow-hidden bg-[#080618] font-jakarta">
        <div className="fixed inset-0 z-0 md:hidden">
          <img
            src="/bg.png"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
      {/* 1. HIGH-END SPLINE BACKGROUND */}
      <div className="fixed inset-0 pointer-events-none transition-opacity duration-150 ease-linear z-0 hidden md:block">
        <Spline scene="https://prod.spline.design/DBCGWGemx6OSZ2Xf/scene.splinecode" />
        {/* Dark Vignette Overlay to make text pop */}
       </div>

      {/* 2. MAIN CONTENT AREA */}
      <motion.div
        variants={containerVars}
        initial="hidden"
        animate="visible"
        className="relative z-10 h-full flex flex-col mt-20  items-center px-6 text-center"
      >
        {/* Subtle Badge/Label */}
        <motion.div variants={itemVars} className="mb-6">
          <span className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-[0.8rem] uppercase tracking-[0.3em] text-white/60">
            {company.tagline}
          </span>
        </motion.div>

        {/* HERO TITLE: Massive, Gradient, Bold */}
        <motion.h1
          variants={itemVars}
          className="text-6xl md:text-8xl lg:text-[6rem]   font-bold   leading-[1] capitalize
            text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/40 max-w-6xl"
        >
          {company.name}
        </motion.h1>

        {/* HEADLINE: The core message */}
        <motion.p
          variants={itemVars}
          className="mt-6 text-xl md:text-2xl lg:text-3xl text-white/80 font-author font-light max-w-3xl leading-snug tracking-wide"
        >
          {company.hero.headline}
        </motion.p>

        {/* CTA BUTTON: Interactive and Glowy */}
        <motion.div variants={itemVars} className="mt-6">
          <button
            style={{ "--theme-color": company.themeColor || "#1EA1F7" }}
            className="group relative px-10 py-4 bg-white text-black font-bold rounded-full overflow-hidden transition-all duration-300  cursor-pointer"
          >
            <span className="relative z-10 flex items-center gap-2 text-lg">
              {company.hero.cta}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </span>
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className=" flex flex-col items-center gap-3 mt-10"
        >
          <span className="text-white/30 text-[0.7rem] uppercase tracking-[0.4em] rotate-0">
            Scroll
          </span>
          <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent" />
        </motion.div>
      </motion.div>

    
    </section>
  );
}
