"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";
import { RiInformationLine, RiTwitterXFill, RiCloseLine } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";

// --- TEAM DATA ---
const teamMembers = [
  {
    id: 1,
    name: "Felix Hartmann",
    role: "Managing Partner & CIO",
    image: "/team/prakash.webp",
    bio: "Felix founded Hartmann Capital in 2018 at the age of 23, launching one of the earliest crypto hedge funds directly from his bedroom. Starting with around $200k, he scaled Hartmann Capital into a ~$50 million frontier tech investment firm. Initially making his mark as a multi-strategy digital asset manager, Felix repeatedly achieved top-3 industry rankings between 2020 and 2023.",
  },
  {
    id: 2,
    name: "David Linden",
    role: "Head of Marketing",
    image: "/team/vijayman.webp",
    bio: "David leads growth and communication strategies, ensuring the firm's vision reaches the frontier...",
  },
  {
    id: 3,
    name: "Roberto Nickson",
    role: "Venture Partner",
    image: "/team/sanjay.webp",
    bio: "Roberto is a seasoned entrepreneur and creative director with a focus on web3 product design...",
  },
];

// --- PIXEL TRANSITION WRAPPER ---
function PixelImage({ src, alt }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const gridRef = useRef(null);
  const gridSize = 10;
  const duration = 0.4;

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;
    grid.innerHTML = "";
    grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

    for (let i = 0; i < gridSize * gridSize; i++) {
      const pixel = document.createElement("div");
      pixel.classList.add("pixel-unit");
      // Use clean gray for pixel animation instead of transparent/dark
      pixel.style.backgroundColor = "#f3f4f6";
      pixel.style.animationDuration = `${duration * 2}s`;
      grid.appendChild(pixel);
    }
  }, []);

  const handleHover = (active) => {
    // Only animate hover on non-touch devices to avoid stuck states on mobile
    if (window.matchMedia("(hover: none)").matches) return;

    if (isAnimating || active === isHovered) return;
    setIsAnimating(true);

    const pixels = gridRef.current.querySelectorAll(".pixel-unit");
    pixels.forEach((pixel) => {
      pixel.style.animationDelay = `${Math.random() * duration}s`;
      pixel.classList.remove("animate");
      void pixel.offsetWidth;
      pixel.classList.add("animate");
    });

    setTimeout(() => {
      setIsHovered(active);
      setTimeout(() => setIsAnimating(false), duration * 1000);
    }, duration * 1000);
  };

  return (
    <div
      className="pixel-transition-container w-full h-full bg-gray-100"
      onMouseEnter={() => handleHover(true)}
      onMouseLeave={() => handleHover(false)}
    >
      <div className="pixel-grid" ref={gridRef} />
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-opacity duration-0  "
        style={{ opacity: isHovered ? 0 : 1 }}
      />
      <div
        className="absolute inset-0 flex items-center justify-center transition-opacity duration-0"
        style={{ opacity: isHovered ? 1 : 0 }}
      >
        <img src={src} alt={alt} className="w-full h-full object-cover  " />
      </div>
    </div>
  );
}

function TeamCard({ member, index }) {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className="flex flex-col cursor-pointer w-full group">
      {/* Container with Blue Corner Markers */}
      <div className="relative aspect-square w-full border border-gray-200 p-5 bg-white   duration-300">
        {/* Info Toggle Button */}
        <div className="absolute top-4 right-4 z-50">
          <button
            onClick={() => setShowInfo(!showInfo)}
            className="w-9 h-9 flex cursor-pointer items-center text-[#0054A6] justify-center border border-gray-200 bg-white   hover:bg-gray-50 text-alert transition-colors"
          >
            {showInfo ? (
              <RiCloseLine size={18} />
            ) : (
              <RiInformationLine size={16} />
            )}
          </button>
        </div>

        {/* MAIN CONTENT AREA (Image or Paragraph) */}
        {/* Changed from fixed width to max-width for responsiveness */}
        <div className="relative w-full max-w-[220px] sm:max-w-[320px] aspect-square z-30 overflow-hidden border border-gray-200 bg-gray-50">
          <AnimatePresence mode="wait">
            {!showInfo ? (
              <motion.div
                key="image"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="w-full h-full"
              >
                <PixelImage src={member.image} alt={member.name} />
              </motion.div>
            ) : (
              <motion.div
                key="bio"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="w-full h-full p-4 flex flex-col justify-start overflow-y-auto scrollbar-hide bg-[#0054A6]/80"
              >
                <p className="text-sm md:text-base leading-[1.4] text-white font-normal">
                  {member.bio}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Text Details */}
        <div className="mt-4 px-1">
          <h3 className="text-3xl   font-switzer font-medium text-primary-dark">
            {member.name}
          </h3>
          <p className="text-primary text-lg md:text-xl font-normal font-switzer">
            {member.role}
          </p>
        </div>

        {/* Social Icons */}
        <div className="absolute bottom-4 right-4 flex gap-2 z-40 bg-white pl-2 pt-2">
          <div className="w-9 h-9 flex items-center justify-center border border-gray-200 text-primary hover:text-primary hover:border-primary transition-colors">
            <RiTwitterXFill size={14} />
          </div>
          <div className="w-9 h-9 flex items-center justify-center border border-gray-200 text-primary hover:text-primary hover:border-primary transition-colors">
            <FaLinkedinIn size={14} />
          </div>
        </div>
      </div>
    </div>
  );
}

// --- TeamSection ---
export default function TeamSection() {
  // Display only the first 3 members
   

  return (
    <section className="relative w-full   py-10 pt-20  overflow-hidden text-primary-dark">
      {/* Header Container */}
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-16 px-6 md:px-10">
        <h2 className="text-start text-3xl md:text-5xl lg:text-[2.5rem] tracking-tight leading-tight font-switzer font-normal max-w-xl mb-6 md:mb-0">
          Our Team
        </h2>

        <div className="flex gap-2 self-start md:self-auto">
          <Link href="/team">
            <button
              className="
                relative
                inline-flex items-center gap-2
                px-6 py-3
                bg-transparent
                text-primary-dark
                text-sm font-bold uppercase tracking-wider
                border border-gray-200
                hover:border-primary
                hover:bg-primary hover:text-black
                transition-all duration-300
                cursor-pointer
                group
              "
            >
              <span>See All</span>
              <FaArrowRight
                size={12}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </Link>
        </div>
      </div>

      {/* Grid Container */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
          {teamMembers.map((member, i) => (
            <TeamCard key={member.id} member={member} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
