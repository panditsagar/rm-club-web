"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [logoState, setLogoState] = useState("blue"); // 'blue' | 'white'

  useEffect(() => {
    // 1. Start with Blue Logo
    // 2. After 1200ms, switch to White Logo (smooth crossfade)
    const logoTimer = setTimeout(() => {
      setLogoState("white");
    }, 1200);

    // 3. After 2400ms, fade out the White Logo
    const logoExitTimer = setTimeout(() => {
      setLogoState("exit"); // New state to hide logo
    }, 2400);

    // 4. After 3200ms, finish loading (Background fade)
    const totalTimer = setTimeout(() => {
      setIsLoading(false);
    }, 3200);

    return () => {
      clearTimeout(logoTimer);
      clearTimeout(logoExitTimer);
      clearTimeout(totalTimer);
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
            key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
          className="fixed inset-0 z-[5000] flex items-center justify-center bg-[#080618] pointer-events-none"
        >
          <div className="relative w-32 h-32 md:w-48 md:h-48 flex items-center justify-center pointer-events-auto">
            <AnimatePresence>
              {logoState === "blue" && (
                <motion.div
                  key="blue-logo"
                  initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <Image
                    src="/logo2.png"
                    alt="RM Club Blue Logo"
                    fill
                    className="object-contain"
                    priority
                  />
                </motion.div>
              )}
              {logoState === "white" && (
                <motion.div
                  key="white-logo"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, scale: 0.95, filter: "blur(5px)" }} // Fade out with slight shrink
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <Image
                    src="/logo1.png"
                    alt="RM Club White Logo"
                    fill
                    className="object-contain"
                    priority
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
    
          
      )}
    </AnimatePresence>
  );
}
