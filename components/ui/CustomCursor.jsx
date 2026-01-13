"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  // Use MotionValues correctly to avoid re-renders on mousemove
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring animation for the trailing ring
  // Reducing stiffness slightly for a more "fluid/smooth" feel, raising damping to prevent jitter
  const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 }; 
  const smoothX = useSpring(mouseX, smoothOptions);
  const smoothY = useSpring(mouseY, smoothOptions);

  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.tagName === "H1" || 
        target.tagName === "H2" ||
        target.closest("button") ||
        target.closest("a") ||
        target.closest("h1") || 
        target.closest("h2") ||
        target.classList.contains("cursor-pointer") ||
        window.getComputedStyle(target).cursor === "pointer"
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      <style jsx global>{`
        * {
            cursor: none !important;
        }
      `}</style>
      
      {/* Main Cursor (Small Dot) - Follows instantly (using raw MotionValue or very tight spring) */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{
             x: mouseX, 
             y: mouseY,
             translateX: "-50%",
             translateY: "-50%"
        }}
        animate={{
          scale: isHovered ? 0 : 1, 
        }}
        transition={{ duration: 0.2 }}
      />

      {/* Trailing Cursor (Ring) - Follows with smooth spring physics */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-white rounded-full pointer-events-none z-[9998] mix-blend-difference"
        style={{
            x: smoothX,
            y: smoothY,
            translateX: "-50%",
            translateY: "-50%"
        }}
        animate={{
          scale: isHovered ? 2.5 : 1,
          backgroundColor: isHovered ? "rgba(255, 255, 255, 1)" : "transparent",
        }}
        transition={{
            scale: { duration: 0.2 },
            backgroundColor: { duration: 0.2 }
        }}
      />
    </>
  );
}
