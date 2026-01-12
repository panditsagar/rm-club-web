"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";

const options = [
  {
    id: 1,
    title: "Use your existing script",
    description:
      "Copy and paste your current script and let Voxr reformat it in a way that is easy for your assistant to follow.",
  },
  {
    id: 2,
    title: "Use a proven template from Voxr",
    description:
      "Select a proven template, give Voxr some basic context, and have AI customize it for your business.",
  },
];

const ScriptGenerationSection = () => {
  return (
    <section className="relative w-full bg-[#080618] pb-40 px-6 min-h-screen flex flex-col items-center justify-center z-20">
      {/* Bottom Gradient Blend - Extends DOWN overlapping next section */}
      <div className="absolute bottom-0 z-50 left-0 w-full h-[150px] translate-y-full bg-gradient-to-b from-[#080618] to-transparent pointer-events-none" />

       
      {/* Content Wrapper to prevent horizontal scroll from animations */}
      <div className="w-full max-w-[1400px] mx-auto overflow-x-clip py-10 flex flex-col items-center">
        <div className="max-w-7xl mx-auto text-center relative z-20  ">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2
              className="font-switzer text-5xl md:text-7xl lg:text-[4rem] font-normal tracking-tight leading-none capitalize
    text-[#ECF5FF] max-w-5xl"
            >
              Our Driving Force
            </h2>
            <p className="text-lg md:text-[1.65rem] text-white max-w-2xl leading-[1.2] tracking-wide font-normal mx-auto mt-6">
              Building the foundation for the next generation of digital
              experiences.
            </p>
          </motion.div>
        </div>

        {/* Stacked Card Container */}
        <div className="relative w-full max-w-[650px] flex items-center justify-center pt-20">
          {/* LEFT DECORATIVE CARD */}
          <motion.div
            initial={{ opacity: 0, x: -500, rotate: -25, scale: 0.9 }}
            whileInView={{ opacity: 0.4, x: -100, rotate: -8, scale: 0.95 }}
            viewport={{ once: true }}
            transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="absolute w-full h-[600px]   rounded-[30px] border border-[#2D68FF] z-0 "
          />

          {/* RIGHT DECORATIVE CARD */}
          <motion.div
            initial={{ opacity: 0, x: 500, rotate: 25, scale: 0.9 }}
            whileInView={{ opacity: 0.4, x: 100, rotate: 8, scale: 0.95 }}
            viewport={{ once: true }}
            transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="absolute w-full h-[600px]   rounded-[30px]    border border-[#2D68FF] z-0 "
          />

          {/* MAIN INTERACTIVE CARD */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full bg-[#0E0C1F] rounded-[30px] p-8 md:p-10  border border-[#2D68FF]/80  shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-20 overflow-hidden"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-10 font-switzer leading-tight max-w-md">
              What defines the RM Club experience? What defines the RM Club
              experience?
            </h3>

            <div className="space-y-5">
              {options.map((option) => (
                <motion.div
                  key={option.id}
                  whileHover={{
                    scale: 1.02,
                    backgroundColor: "rgba(255,255,255,0.05)",
                  }}
                  className="group p-6 rounded-2xl border border-white/5 bg-white/[0.02] transition-all duration-300 cursor-pointer"
                >
                  <h4 className="text-xl font-bold text-white mb-2 group-hover:text-[#2D68FF] transition-colors">
                    {option.title}
                  </h4>
                  <p className="text-gray-400 leading-relaxed text-[15px]">
                    {option.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="mt-12">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-5 rounded-2xl bg-gradient-to-r from-[#2D68FF] to-[#8C4DFF] text-white font-bold text-xl shadow-[0_10px_30px_rgba(45,104,255,0.3)] hover:shadow-[0_10px_40px_rgba(45,104,255,0.5)] transition-all duration-300"
              >
                Join the Movement
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ScriptGenerationSection;
