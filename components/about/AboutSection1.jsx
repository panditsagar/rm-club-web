"use client";

import React, { useState, useEffect } from "react";
import Spline from "@splinetool/react-spline";
import { motion, AnimatePresence } from "framer-motion";

export default function App() {
  const words = [
    "industries",
    "the future",
    "humanity",
    "commerce",
    "possibility",
  ];
  const wordColors = ["#2D68FF"];

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
        {/* MOBILE IMAGE */}
        <div className="fixed inset-0 z-0 md:hidden">
          <img
            src="/bg.png"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        {/* SPLINE BACKGROUND */}
        <div className="fixed inset-0 pointer-events-none transition-opacity duration-150 ease-linear z-0 hidden md:block">
          <Spline scene="https://prod.spline.design/DBCGWGemx6OSZ2Xf/scene.splinecode" />
        </div>

        {/* CONTENT */}
        <div className="max-w-[1400px] mx-auto relative z-50 h-full flex flex-col justify-center mt-[-70px] sm:mt-[-30px] px-5 md:px-0">
          <h1
            className="font-jakarta  text-[2.1rem] md:text-7xl lg:text-[5.4rem] font-bold tracking-tight  leading-[1.1] sm:leading-none capitalize
 text-[#ECF5FF] max-w-5xl"
          >
            Every decade, new technologies emerge that redefine{" "}
            <div className="inline-block relative h-[1.1em] align-bottom overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={words[index]}
                  initial={{ y: "100%" }}
                  animate={{ y: "0%" }}
                  exit={{ y: "-100%" }}
                  transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
                  className="block"
                  style={{ color: wordColors }}
                >
                  {words[index]}
                </motion.span>
              </AnimatePresence>
            </div>
          </h1>

          <p className="mt-14 text-2xl md:text-[1.65rem] text-white max-w-sm leading-[1.1] tracking-wide font-normal">
            It is our mission to identify these innovations as they prepare to
            cross the chasm.
          </p>
        </div>
      </section>
    </>
  );
}
