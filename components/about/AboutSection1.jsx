"use client";

import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

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
                 repeatType: "mirror" // Zoom Out (1.2 -> 1), then In (1 -> 1.2)
               }
           }}
           className="absolute inset-0 z-0"
        >
          <Image
            src="/hero/hero1.jpg" // Using the same hero image for consistency or a related one
            alt="About Our Vision"
            fill
            className="object-cover"
            priority
          />
          {/* Cinema Grade Gradient Overlay (Same as Home) */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30"></div>
        </motion.div>
      </AnimatePresence>

      {/* --- CONTENT LAYER --- */}
      <div className="relative z-10 size-full max-w-[1600px] mx-auto px-6 lg:px-12 flex flex-col justify-center h-full pb-16 md:pb-0 mt-10">
        
        {/* LEFT: Text Content */}
        <div className="w-full md:w-3/4 lg:w-2/3 pl-0 md:pl-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Kicker removed as per user request */}
        
            <h1 className="text-white text-5xl md:text-6xl lg:text-[4rem] font-medium font-serif leading-[1] mb-10 tracking-tight drop-shadow-lg">
                Redefining the Future of Innovation.
            </h1>

            <p className="text-white text-lg md:text-3xl leading-[1.4] max-w-3xl mb-10 opacity-90 font-normal drop-shadow-md">
               New technologies emerge that reshape humanity. It is our mission to identify these innovations as they prepare to cross the chasm and turn ambition into action.
            </p>

           
             
          </motion.div>
        </div>
 
      </div>
    </section>
  );
}
