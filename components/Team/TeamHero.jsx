"use client";

import React, { useState, useEffect } from "react";
import Spline from "@splinetool/react-spline";
import { motion, AnimatePresence } from "framer-motion";

export default function App() {
  const words = ["tomorrow", "creation", "growth", "clarity", "legacy"];

  const wordColors = ["#E38E2B", "#2D68FF"];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000); // Changes word every 3 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <section className="relative h-screen w-full overflow-hidden bg-[#080618]">
        {/* SPLINE BACKGROUND */}
        <div className="fixed inset-0 pointer-events-none transition-opacity duration-150 ease-linear z-0 hidden md:block">
          <Spline scene="https://prod.spline.design/DBCGWGemx6OSZ2Xf/scene.splinecode" />
        </div>

        {/* CONTENT */}
        <div className="max-w-[1400px] mx-auto relative z-50 h-full flex flex-col justify-center mt-[-30px] px-6">
          <h1
            className="font-jakarta text-5xl md:text-7xl lg:text-[5.2rem] font-bold max-w-7xl tracking-tight leading-none capitalize
 text-[#ECF5FF]  "
          >
            Every Step Forward Begins With the Team That Builds the Future of{" "}

            <div className="inline-block relative h-[1.1em] align-bottom overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={words[index]}
                  initial={{ y: "100%" }}
                  animate={{ y: "0%" }}
                  exit={{ y: "-100%" }}
                  transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
                  className="block"
                  style={{ color: wordColors[index % wordColors.length] }}
                >
                  {words[index]}
                </motion.span>
              </AnimatePresence>
            </div>
          </h1>

          <p className="mt-14 text-lg md:text-[1.65rem] text-white  leading-[1.1] tracking-wide font-normal">
            A collective of researchers, builders, and operators turning signals into scalable outcomes.
          </p>
        </div>
      </section>
    </>
  );
}
