"use client";
import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";

export default function HeroSection1({ company }) {
  // Fallback image if company.hero.image doesn't exist
  // Using the first feature image or a default placeholder
 

  return (
    <section className="relative w-full flex flex-col">
      <div className="relative w-full h-[50vh] md:h-[70vh] overflow-hidden">
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              opacity: { duration: 1.5, ease: "easeInOut" },
              scale: {
                duration: 20.0, // Slow, continuous zoom (Ken Burns)
                ease: "linear",
                repeat: Infinity,
                repeatType: "mirror",
              },
            }}
            className="absolute inset-0 z-0 bg-gray-200"
          >
            <Image
              src="/about.png" // Fallback image for company hero
              alt="Company Hero"
              fill
              className="object-cover"
              priority
            />
            {/* Optional Subtle Overlay to ensure image doesn't clash if it has white parts */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
          </motion.div>
        </AnimatePresence>
      </div>
      {/* --- TOP SECTION: CONTENT --- */}
      <div className="w-full bg-[#ffffff] text-[#0054A6]  pt-10 px-6 lg:px-25 flex flex-col justify-end  ">
        <div className="max-w-[1600px] mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-primary-dark text-5xl md:text-6xl lg:text-[3.5rem] font-medium font-serif leading-[1.1] mb-4 tracking-tight">
              {company?.name}
            </h1>

            {/* Optional Headline Description if needed in this growing header */}
            {company?.hero?.headline && (
              <p className="text-gray-600 text-lg md:text-xl max-w-2xl leading-relaxed  ">
                {company.hero.headline}
              </p>
            )}

            {/* CTA Button (Optional in this layout, but kept for function) */}
            {/* 
            {company?.hero?.cta && (
              <button className="group relative px-6 py-3 bg-primary hover:bg-primary-dark text-white transition-all duration-300 rounded-full flex items-center gap-2">
                <span className="text-sm font-medium tracking-wide uppercase">
                  {company.hero.cta}
                </span>
                <FaArrowRight className="w-3 h-3 transform group-hover:translate-x-1 transition-transform" />
              </button>
            )}
            */}
          </motion.div>
        </div>
      </div>

      {/* --- BOTTOM SECTION: IMAGE --- */}
    </section>
  );
}
