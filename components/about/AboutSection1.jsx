"use client";

import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function AboutSection1() {
  return (
    <section className="relative h-[100vh] w-full overflow-hidden px-10 bg-black">
      {/* --- BACKGROUND LAYER --- */}
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            opacity: { duration: 2.0, ease: "easeInOut" },
            scale: {
              duration: 20.0, // Slow, continuous zoom
              ease: "linear",
              repeat: Infinity,
              repeatType: "mirror", // Zoom Out (1.2 -> 1), then In (1 -> 1.2)
            },
          }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="/about.png" // Using the same hero image for consistency or a related one
            alt="About Our Vision"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
        </motion.div>
      </AnimatePresence>

      {/* --- CONTENT LAYER --- */}
      <div className="relative z-10 size-full max-w-[1600px] mx-auto px-6 lg:px-12 flex flex-col justify-center h-full pb-16 md:pb-0  ">
        {/* LEFT: Text Content */}
        <div className="w-full md:w-3/4 lg:w-2/3 pl-0 md:pl-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Kicker removed as per user request */}

            <h1 className="text-white text-4xl md:text-5xl lg:text-[3.5rem] font-medium font-serif leading-[1.1] mb-8 tracking-tight drop-shadow-lg">
              Building an Ecosystem Designed to Endure.
            </h1>

            <p className="text-white text-lg md:text-xl leading-[1.6] max-w-4xl mb-10 opacity-90 font-normal drop-shadow-md">
              RM Club is a structured network of independent ventures operating
              across hospitality, media, real estate, education, commerce, and
              investment. We combine entrepreneurial autonomy with disciplined
              governance to create sustainable, long-term growth.
            </p>
            <div className="group flex items-center gap-0.5 w-fit">
              {/* Left Part: Text */}
              <div className="bg-[#3b82f6] text-white px-8 py-2.5 rounded-bl-2xl rounded-tr-2xl font-medium text-lg transition-all duration-300 group-hover:bg-[#2563eb]">
                View Our Ventures
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
