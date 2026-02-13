"use client";

import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactHero() {
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
            className="absolute inset-0 z-0 bg-gray-100"
          >
            {/* Using an existing valid hero image */}
            <Image
              src="/contact.png"
              alt="Contact Us"
              fill
              className="object-cover"
              priority
            />
            {/* Subtle Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
          </motion.div>
        </AnimatePresence>
      </div>
      {/* --- TOP SECTION: CONTENT --- */}
      <div className="w-full bg-[#ffffff] text-[#0054A6]  pt-10 px-6 lg:px-25 flex flex-col justify-end  ">
        <div className="max-w-[1400px] mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6"
          >
            {/* Main Heading */}
            <h1 className="text-primary-dark text-4xl md:text-6xl lg:text-[3.5rem] font-medium font-serif leading-[1.1] tracking-tight  ">
              Connect With the RM Club Ecosystem.
            </h1>

            <p className="text-gray-600 text-lg md:text-xl max-w-2xl leading-relaxed font-normal">
              For partnerships or venture inquiries, contact our team.
            </p>
          </motion.div>
        </div>
      </div>

      {/* --- BOTTOM SECTION: IMAGE --- */}
    </section>
  );
}
