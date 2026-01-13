"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      // Check if target is clickable (button, link, or specific class)
      const target = e.target;
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.tagName === "H1" || // Add transform for Headings
        target.tagName === "H2" ||
        target.closest("button") ||
        target.closest("a") ||
        target.closest("h1") || // Check for parents
        target.closest("h2") ||
        target.classList.contains("cursor-pointer") ||
        // Check for specific interactive elements in your codebase if any
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
  }, []);

  return (
    <>
      <style jsx global>{`
        * {
            cursor: none !important;
        }
      `}</style>
      
      {/* Main Cursor (Small Dot) */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
          scale: isHovered ? 0 : 1, // Hide dot on hover if we expand the ring, or adjust as needed
        }}
        transition={{
          type: "tween",
          duration: 0, // Instant follow
        }}
      />

      {/* Trailing Cursor (Ring) */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-white rounded-full pointer-events-none z-[9998] mix-blend-difference"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovered ? 2.5 : 1,
          backgroundColor: isHovered ? "rgba(255, 255, 255, 1)" : "transparent",
        }}
        transition={{
            type: "spring",
            stiffness: 800, // Increased from 150 for much faster follow
            damping: 35,    // Increased damping to prevent excessive wiggle
            mass: 0.5
        }}
      >
        {/* Optional: Add text or icon inside when hovered if desired */}
        {isHovered && (
             <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                className="w-full h-full flex items-center justify-center"
             >
                {/* <span className="text-[4px] text-black font-bold uppercase tracking-widest">View</span> */}
             </motion.div>
        )}
      </motion.div>
    </>
  );
}
