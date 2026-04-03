"use client";

import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function TeamHero() {
  return (
    <section className="relative w-full h-[50vh] min-h-[400px] md:h-[75vh] flex flex-col justify-end overflow-hidden bg-[#0a1118]">
      {/* --- BACKGROUND IMAGE & OVERLAY --- */}
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            opacity: { duration: 1.5, ease: "easeInOut" },
            scale: {
              duration: 20.0,
              ease: "linear",
              repeat: Infinity,
              repeatType: "mirror",
            },
          }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="/team.png"
            alt="RM Club Team"
            fill
            className="object-cover"
            priority
          />
          {/* Deep dark gradient exactly like the reference image (darker on left) */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#030712] via-[#030712]/80 to-transparent"></div>
        </motion.div>
      </AnimatePresence>

      {/* --- FOREGROUND CONTENT (On Top of Image) --- */}
      <div className="relative z-10 w-full px-6 md:px-16 lg:px-24 pb-12 md:pb-20">
        <div className="max-w-[1400px] mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col "
          >
            {/* Main Heading -> correctly layered over the Hero Background */}
            <h1 className="text-white text-5xl md:text-6xl lg:text-[3rem]  font-bold tracking-tight mb-6">
              Leadership Drives Sustainable Growth.
            </h1>

            {/* Dashed Divider exactly like reference image */}
            <div className="w-full   border-t border-dashed border-[#334155]/80 mb-4"></div>

            {/* Breadcrumb Navigation matching reference image */}
            <div className="flex items-center gap-3 text-sm md:text-base font-serif tracking-wide">
              <Link
                href="/"
                className="text-[#a8b1bd] hover:text-white transition-colors text-sm"
              >
                Home
              </Link>
              <span className="text-[#a8b1bd] text-lg">»</span>
              <span className="text-white ">Our Team</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
