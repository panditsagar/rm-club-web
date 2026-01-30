"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function App() {
  const words = ["tomorrow", "creation", "growth", "clarity", "legacy"];

  const wordColors = [ "#0054A6"]; 

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000); // Changes word every 3 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <section className="relative h-[80vh] w-full overflow-hidden bg-white text-primary-dark">
        {/* Background Texture/Pattern */}
        <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
             <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        </div>

        <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-50 clip-path-polygon-[20%_0%,100%_0,100%_100%,0%_100%] z-0 hidden md:block"></div>

        {/* CONTENT */}
        <div className="max-w-[1400px] mx-auto relative z-50 h-full flex flex-col justify-center px-5 md:px-0">
          <h1
            className="font-switzer text-[2.35rem] md:text-7xl lg:text-[5.2rem] font-bold max-w-7xl tracking-tight leading-[1.1] capitalize
 text-primary-dark"
          >
            Every Step Forward Begins With the Team That Builds the Future of{" "}

            <div className="inline-block relative h-[1.1em] align-bottom overflow-hidden text-primary">
              <AnimatePresence mode="wait">
                <motion.span
                  key={words[index]}
                  initial={{ y: "100%" }}
                  animate={{ y: "0%" }}
                  exit={{ y: "-100%" }}
                  transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
                  className="block"
                >
                  {words[index]}
                </motion.span>
              </AnimatePresence>
            </div>
          </h1>

          <p className="mt-8 text-xl md:text-[1.65rem] text-gray-600 leading-relaxed font-normal max-w-3xl">
            A collective of researchers, builders, and operators turning signals into scalable outcomes.
          </p>
        </div>
      </section>
    </>
  );
}
