"use client";

import React from "react";
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
    <section className="relative w-full overflow-hidden bg-white font-switzer h-screen flex flex-col justify-center">
        {/* Background Texture/Pattern */}
        <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
             <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        </div>
        
        {/* Abstract Corporate Shape */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-50 clip-path-polygon-[20%_0%,100%_0,100%_100%,0%_100%] z-0 hidden md:block"></div>

      {/* 2. MAIN CONTENT AREA */}
      <motion.div
        variants={containerVars}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full flex flex-col items-center px-6 text-center max-w-[1400px] mx-auto"
      >
        {/* Subtle Badge/Label */}
        <motion.div variants={itemVars} className="mb-8">
          <span className="px-4 py-2 rounded-sm bg-primary/10 text-primary font-bold text-xs uppercase tracking-[0.2em]">
            {company.tagline}
          </span>
        </motion.div>

        {/* HERO TITLE: Massive, Corporate Navy */}
        <motion.h1
          variants={itemVars}
          className="text-[3rem] md:text-8xl lg:text-[7rem] font-bold leading-[1.1] sm:leading-[1] capitalize text-primary-dark max-w-6xl"
        >
          {company.name}
        </motion.h1>

        {/* HEADLINE: The core message */}
        <motion.p
          variants={itemVars}
          className="mt-8 text-xl md:text-2xl lg:text-3xl text-gray-600 font-normal max-w-4xl leading-relaxed tracking-wide"
        >
          {company.hero.headline}
        </motion.p>

        {/* CTA BUTTON: Clean & Professional */}
        <motion.div variants={itemVars} className="mt-10">
          <button
             
            className="group relative px-10 py-4 bg-primary text-white font-bold rounded-sm overflow-hidden transition-all duration-300 cursor-pointer hover:bg-primary-dark"
          >
            <span className="relative z-10 flex items-center gap-2 text-md sm:text-lg">
              {company.hero.cta}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform"
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
          className=" flex flex-col items-center gap-3 mt-16"
        >
          <span className="text-gray-400 text-[0.7rem] uppercase tracking-[0.4em] rotate-0 font-bold">
            Scroll
          </span>
          <div className="w-px h-12 bg-gradient-to-b from-gray-300 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
