"use client";
import React, { useEffect, useState } from "react";
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

  // Dynamic styles for the grid based on hovered index (Desktop only)
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
    <section className="relative z-30 w-full bg-[#ECF5FF] font-switzer px-5 pt-10 md:px-20 md:pt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 border border-b-0 border-[#002FFF]/60">
        {/* Left Side - Interactive Logo Grid */}
        <div
          className="grid grid-cols-2 h-auto md:h-auto transition-all duration-500 ease-out border-r-0 md:border-r border-[#002FFF]/60"
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
            name="Reparkle"
            href="/company/reparkle"
          />
          <LogoItem
            index={1}
            hoveredIndex={hoveredIndex}
            setHoveredIndex={setHoveredIndex}
            icon={<FaMicrophone className="text-2xl mb-2" />}
            name="RM trek"
          />
          <LogoItem
            index={2}
            hoveredIndex={hoveredIndex}
            setHoveredIndex={setHoveredIndex}
            icon={<FaShapes className="text-2xl mb-2" />}
            name="Jansanket"
            badge="Fund II" // Example badge
          />
          <LogoItem
            index={3}
            hoveredIndex={hoveredIndex}
            setHoveredIndex={setHoveredIndex}
            icon={<FaSquare className="text-2xl mb-2" />}
            name="IPDC"
            href="/company/ipdc"
          />
        </div>

        {/* Right Side - Tunnel / Perspective Link */}
        <div className="relative w-full aspect-square overflow-hidden cursor-pointer group  border-t md:border-t-0 border-[#002FFF]/60">
          {/* 1. Background Image Layer */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://cdn.prod.website-files.com/66c31377d57fee80e2d1cf4d/66c839455cd3d844d5574bfd_pp-bg.webp"
              alt="Abstract Portfolio Background"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />

            {/* ECF5FF overlay */}
            <div className="absolute inset-0 bg-[#ECF5FF]/60" />
          </div>

          {/* 2. The Tunnel/Grid Effect (Lines) */}
          <div className="absolute inset-0 flex items-start justify-start m-6 z-10">
            {/* 3. The Inner Box (Now Transparent) */}
            <div className="relative w-1/2 h-1/2 md:w-1/2 md:h-1/2 border border-[#002FFF]/40 flex flex-col justify-between p-5  transition-all duration-700 bg-white/5 backdrop-blur-[2px] group-hover:bg-white/10">
              {/* Top Section: Number and Arrow */}
              <div className="flex justify-between items-start text-[#002FFF]">
                <span className="text-sm md:text-xl font-medium opacity-70">
                  (28)
                </span>
                <BsArrowUpRight className="text-2xl md:text-5xl transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>

              {/* Bottom Section: Typography */}
              <div className="text-[#002FFF]">
                <h3 className="text-3xl md:text-6xl font-jakarta font-medium leading-[0.86] tracking-tight">
                  Our
                  <br />
                  portfolio
                </h3>
              </div>

              {/* Corner Decorators (Hover Effect) */}
              <div className="absolute -top-1 -left-1 w-2 h-2 bg-[#002FFF] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#002FFF] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-[#002FFF] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-[#002FFF] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>
        </div>
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
        ${index === 0 || index === 2 ? "border-r border-[#002FFF]/60" : ""}
        ${index === 0 || index === 1 ? "border-b border-[#002FFF]/60" : ""}
    `;

  return (
    <div
      className={`relative flex flex-col cursor-pointer items-center justify-center ${borderClasses} p-4 md:p-8 overflow-visible transition-all duration-300 group aspect-square md:aspect-auto`}
      onMouseEnter={() => setHoveredIndex(index)}
    >
      {/* Background Hover Highlight */}
      <div
        className={`absolute inset-0 bg-[#E3EDFF] transition-opacity duration-500 ease-out ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Content */}
      <div
        className={`relative z-10 flex flex-col items-center justify-center gap-3 text-[#002FFF] transition-transform duration-500 ${
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
        className={`absolute top-4 right-4 text-[#002FFF] transition-all duration-300 ${
          isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
        }`}
      >
        <Link href={href || "#"}>
          <BsArrowUpRight className="text-4xl" />
        </Link>
      </div>
      <div className="absolute -top-1 -left-1 w-2 h-2 bg-[#002FFF] z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#002FFF] z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-[#002FFF] z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-[#002FFF] z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      {/* Bottom Left Badge 'Fund II' (Visible on Hover if badge prop exists or just generic logic) */}
      {badge && (
        <div
          className={`absolute bottom-4 left-4 transition-all duration-300 ${
            isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          }`}
        >
          <span className="text-sm font-medium text-[#002FFF] bg-[#002FFF]/10 px-2 py-1.5 ">
            {badge}
          </span>
        </div>
      )}

      {/* If no badge prop, we can show a placeholder or nothing. The image showed 'Fund II', adding it for all for demo or specific ones is fine. 
                Applying 'Fund II' to the one with the badge prop passed above (nunu.ai). 
                If user wants it on all, we can untoggle this logic.
            */}
      <div
        className={`absolute bottom-4 left-4 transition-all duration-300 ${
          isHovered && !badge
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-2"
        }`}
      >
        {/* Optional: Generic badge for others if needed, using badge prop for explicit ones */}
        {!badge && (
          <span className="text-sm font-medium text-[#002FFF] bg-[#002FFF]/10 px-2 py-1.5  ">
            Fund I
          </span>
        )}
      </div>

      {/* Blue corner accents on active ?? (from previous image) - Keeping clean for now as per latest image */}
    </div>
  );
};

export default PortfolioGrid;
