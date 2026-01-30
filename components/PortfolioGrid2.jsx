"use client";
import React, { useState, useEffect } from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { FaDove, FaMicrophone, FaShapes, FaSquare } from "react-icons/fa";
import Link from "next/link";

const PortfolioGrid = () => {
  // State to track which cell is hovered (0, 1, 2, 3) or null
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // State to track if we are on desktop to enable grid hover effects
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkIsDesktop = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    // Initial check
    checkIsDesktop();

    // Listener
    window.addEventListener("resize", checkIsDesktop);
    return () => window.removeEventListener("resize", checkIsDesktop);
  }, []);

  // Dynamic styles for the grid based on hovered index
  // Default: 1fr 1fr
  // Active col 0: 1.5fr 1fr
  // Active col 1: 1fr 1.5fr
  const getGridStyles = () => {
    // Disable dynamic grid sizing on mobile
    if (!isDesktop) return {};

    const base = "1fr 1fr";
    const expanded = "2fr 1fr";
    const shrunk = "1fr 2fr";

    // Mobile fallback (always 1fr) could be handled via media queries or JS,
    // but for now we focus on the requested desktop effect.
    // We will use inline styles for the grid-template properties transition.

    if (hoveredIndex === null)
      return { gridTemplateColumns: base, gridTemplateRows: base };

    return {
      gridTemplateColumns:
        hoveredIndex === 0 || hoveredIndex === 2 ? expanded : shrunk,
      gridTemplateRows:
        hoveredIndex === 0 || hoveredIndex === 1 ? expanded : shrunk,
    };
  };

  return (
    <section className="relative z-30 w-full bg-[#F5F7FA] font-switzer px-5  md:px-20 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 border border-b-0 border-gray-200">
        <div className="relative w-full aspect-square overflow-hidden hidden sm:block  cursor-pointer  md:border-t-0 border-b border-gray-200">
          {/* The Tunnel Effect */}
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Outer Lines (connecting corners) */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              style={{ strokeWidth: 0.8, stroke: "#E5E7EB" }}
            >
              <line x1="0" y1="0" x2="33%" y2="33%" />
              <line x1="100%" y1="0" x2="67%" y2="33%" />
              <line x1="0" y1="100%" x2="33%" y2="67%" />
              <line x1="100%" y1="100%" x2="67%" y2="67%" />
            </svg>

            {/* Inner Box */}
            <div className="relative w-1/2 h-1/2 group bg-[#F5F7FA] border border-gray-200 flex flex-col justify-between p-6   transition-colors duration-500">
              <div className="flex justify-between items-start text-primary">
                <span className="text-xl opacity-60">(28)</span>
                <BsArrowUpRight className="text-4xl transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>

              <div className="text-primary">
                <h3 className="text-xl md:text-5xl font-jakarta font-medium leading-[0.9] tracking-tight">
                  View our
                  <br />
                  portfolio
                </h3>
              </div>
            </div>
          </div>
        </div>
        {/* Left Side - Interactive Logo Grid */}
        <div
          className="grid grid-cols-2 h-auto md:h-auto transition-all duration-500 ease-out  border-l-0 md:border-l border-b border-gray-200"
          style={{
            ...getGridStyles(),
          }}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <LogoItem
            index={0}
            hoveredIndex={hoveredIndex}
            setHoveredIndex={setHoveredIndex}
            icon={<FaDove className="text-3xl mb-2" />}
            name="City View "
            href="/company/city-view"
          />
          <LogoItem
            index={1}
            hoveredIndex={hoveredIndex}
            setHoveredIndex={setHoveredIndex}
            icon={<FaMicrophone className="text-2xl mb-2" />}
            name="Beatz of Melody"
            href="/company/beatz-melody"
          />
          <LogoItem
            index={2}
            hoveredIndex={hoveredIndex}
            setHoveredIndex={setHoveredIndex}
            icon={<FaShapes className="text-2xl mb-2" />}
            name="Jawa Poonp"
            badge="Fund II" // Example badge
            href="/company/jawa-poonp"
          />

          <LogoItem
            index={3}
            hoveredIndex={hoveredIndex}
            setHoveredIndex={setHoveredIndex}
            icon={<FaSquare className="text-2xl mb-2" />}
            name="Reparkle"
            href="/company/reparkle"
          />
        </div>

        {/* Right Side - Tunnel / Perspective Link */}
      </div>
    </section>
  );
};

const LogoItem = ({
  icon,
  name,
  index,
  hoveredIndex,
  setHoveredIndex,
  badge,
  href,
}) => {
  const isHovered = hoveredIndex === index;
  // Determine borders based on index to replicate grid lines
  // 0: border-r border-b
  // 1: border-b
  // 2: border-r
  // 3: none
  const borderClasses = `
        ${index === 0 || index === 2 ? "border-r border-gray-200" : ""}
        ${index === 0 || index === 1 ? "border-b border-gray-200" : ""}
    `;

  return (
    <div
      className={`relative flex flex-col cursor-pointer items-center justify-center ${borderClasses} p-4 md:p-8 overflow-visible transition-all duration-300 group aspect-square md:aspect-auto`}
      onMouseEnter={() => setHoveredIndex(index)}
    >
      {/* Background Hover Highlight */}
      <div
        className={`absolute inset-0   transition-opacity duration-500 ease-out 
        
        }`}
      />

      {/* Content */}
      <div
        className={`relative z-10 flex flex-col items-center justify-center gap-3 text-primary transition-transform duration-500 ${
          isHovered ? "md:scale-110" : "scale-100"
        }`}
      >
        {icon}
        <span className="text-lg md:text-3xl font-semibold tracking-wide">
          {name}
        </span>
      </div>

      {/* Top Right Arrow (Visible on Hover) */}
      <div
        className={`absolute top-4 right-4 text-primary transition-all duration-300 ${
          isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
        }`}
      >
        <Link href={href || "#"}>
          <BsArrowUpRight className="text-4xl" />
        </Link>
      </div>
    </div>
  );
};

export default PortfolioGrid;
