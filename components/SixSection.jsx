"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { RiInformationLine, RiTwitterXFill, RiCloseLine } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";

// --- TEAM DATA ---
// Added 'bio' field to the data
const teamMembers = [
  { 
    id: 1, 
    name: "Felix Hartmann", 
    role: "Managing Partner & CIO", 
    image: "https://cdn.prod.website-files.com/66c71da082e3d64d93782c96/66e082d93f5863de9d14b563_11.avif",
    bio: "Felix founded Hartmann Capital in 2018 at the age of 23, launching one of the earliest crypto hedge funds directly from his bedroom. Starting with around $200k, he scaled Hartmann Capital into a ~$50 million frontier tech investment firm. Initially making his mark as a multi-strategy digital asset manager, Felix repeatedly achieved top-3 industry rankings between 2020 and 2023."
  },
  { id: 2, name: "Anand Dass", role: "Advisor", image: "https://cdn.prod.website-files.com/66c71da082e3d64d93782c96/66e0d2a334ed39eb3b3e3b72_1.avif", bio: "Anand brings years of strategic advisory experience in the emerging tech landscape..." },
  { id: 3, name: "Roberto Nickson", role: "Venture Partner", image: "https://cdn.prod.website-files.com/66c71da082e3d64d93782c96/66e07e91ae942b542da7cecb_9.avif", bio: "Roberto is a seasoned entrepreneur and creative director with a focus on web3 product design..." },
  { id: 4, name: "David Linden", role: "Head of Marketing", image: "https://cdn.prod.website-files.com/66c71da082e3d64d93782c96/66e082eab6867c80ab096e17_13.avif", bio: "David leads growth and communication strategies, ensuring the firm's vision reaches the frontier..." },
];

const loopedMembers = [...teamMembers, ...teamMembers];
const CARD_WIDTH = 450;
const GAP = 38;
const TOTAL_WIDTH = CARD_WIDTH + GAP;

// --- PIXEL TRANSITION WRAPPER (Unchanged) ---
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
      pixel.style.animationDuration = `${duration * 2}s`;
      grid.appendChild(pixel);
    }
  }, []);

  const handleHover = (active) => {
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
      className="pixel-transition-container w-full h-full"
      onMouseEnter={() => handleHover(true)}
      onMouseLeave={() => handleHover(false)}
    >
      <div className="pixel-grid" ref={gridRef} />
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-opacity duration-0"
        style={{ opacity: isHovered ? 0 : 1 }}
      />
      <div 
        className="absolute inset-0 flex items-center justify-center transition-opacity duration-0"
        style={{ opacity: isHovered ? 1 : 0 }}
      >
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      </div>
    </div>
  );
}

function TeamCard({ member, index }) {
  const [showInfo, setShowInfo] = useState(false);
  const isOffset = index % 2 !== 0;

  return (
    <div
      style={{ 
        width: `${CARD_WIDTH}px`,
        transform: isOffset ? "translateY(80px)" : "translateY(0px)",
        transition: "transform 0.5s ease-in-out"
      }}
      className="flex flex-col cursor-pointer shrink-0"
    >
      {/* Container with Blue Corner Markers */}
      <div className="relative aspect-square w-full border border-white/20 p-5 bg-[#080618]">
        <div className="absolute -top-1 -left-1 w-2 h-2 bg-[#002FFF] z-50" />
        <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#002FFF] z-50" />
        <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-[#002FFF] z-50" />
        <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-[#002FFF] z-50" />
        
        {/* Info Toggle Button */}
        <div className="absolute top-4 right-4 z-50">
          <button 
            onClick={() => setShowInfo(!showInfo)}
            className="w-9 h-9 flex cursor-pointer items-center justify-center border border-white/20 bg-[#080618]/50 backdrop-blur-sm hover:bg-white/10 transition-colors"
          >
            {showInfo ? <RiCloseLine size={18} /> : <RiInformationLine size={16} />}
          </button>
        </div>

        {/* Diagonal Line Background (stays behind content) */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none z-10"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <line x1="0" y1="0" x2="100" y2="100" stroke="white" strokeOpacity="0.15" strokeWidth="0.2" />
        </svg>

        {/* MAIN CONTENT AREA (Image or Paragraph) */}
        <div className="relative w-[320px] h-[320px] z-30 overflow-hidden border border-white/20 bg-[#080618]">
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
                        className="w-full h-full p-4 flex flex-col justify-start overflow-y-auto scrollbar-hide"
                    >
                        <p className="text-sm md:text-base leading-[1.1] text-white/90 font-light">
                            {member.bio}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>

        {/* Text Details */}
        <div className="mt-4 px-1">
          <h3 className="text-4xl font-switzer">{member.name}</h3>
          <p className="text-white/80 text-xl font-normal font-author">{member.role}</p>
        </div>

        {/* Social Icons */}
        <div className="absolute bottom-4 right-4 flex gap-2 z-40 bg-[#080618]">
          <div className="w-9 h-9 flex items-center justify-center border border-white/20 hover:bg-white/5 transition-colors">
            <RiTwitterXFill size={14} />
          </div>
          <div className="w-9 h-9 flex items-center justify-center border border-white/20 hover:bg-white/5 transition-colors">
            <FaLinkedinIn size={14} />
          </div>
        </div>
      </div>
    </div>
  );
}

// --- TeamSection (Unchanged) ---
export default function TeamSection() {
  const controls = useAnimation();
  const [index, setIndex] = useState(0);
  const isTransitioning = useRef(false);

  const slideTo = useCallback(async (newIndex) => {
    if (isTransitioning.current) return;
    isTransitioning.current = true;

    await controls.start({
      x: -newIndex * TOTAL_WIDTH,
      transition: { duration: 0.8, ease: [0.32, 0.72, 0, 1] },
    });

    let finalIndex = newIndex;
    if (newIndex >= teamMembers.length) {
      await controls.set({ x: 0 });
      finalIndex = 0;
    } else if (newIndex < 0) {
      const lastIndex = teamMembers.length - 1;
      await controls.set({ x: -lastIndex * TOTAL_WIDTH });
      finalIndex = lastIndex;
    }

    setIndex(finalIndex);
    isTransitioning.current = false;
  }, [controls]);

  return (
    <section className="relative w-full bg-[#080618] py-30 pb-48 overflow-hidden text-white">
      <div
        style={{ maxWidth: `${CARD_WIDTH * 3 + GAP * 2}px` }}
        className="mx-auto flex justify-between items-end mb-16 px-4"
      >
        <h2 className="text-start lg:text-[4.5rem] tracking-tight leading-none font-jakarta font-medium">Team</h2>

        <div className="flex gap-2">
          <button onClick={() => slideTo(index - 1)} className="group relative cursor-pointer overflow-hidden w-12 h-12 flex items-center justify-center border border-[#002FFF]/20 text-[#002FFF] rounded-sm z-50">
            <span className="absolute inset-0 bg-[#002FFF]/10 translate-x-full group-hover:translate-x-0 transition-transform duration-400 ease-out" />
            <IoIosArrowBack size={24} className="relative z-10" />
          </button>
          <button onClick={() => slideTo(index + 1)} className="group relative cursor-pointer overflow-hidden w-12 h-12 flex items-center justify-center border border-[#002FFF]/20 text-[#002FFF] rounded-sm z-50">
            <span className="absolute inset-0 bg-[#002FFF]/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-400 ease-out" />
            <IoIosArrowForward size={24} className="relative z-10" />
          </button>
        </div>
      </div>

      <div className="mx-auto overflow-visible" style={{ width: `${CARD_WIDTH * 3 + GAP * 2}px` }}>
        <motion.div
          animate={controls}
          initial={{ x: 0 }}
          style={{ gap: `${GAP}px` }}
          className="flex flex-nowrap items-start"
        >
          {loopedMembers.map((member, i) => (
            <TeamCard key={`${member.id}-${i}`} member={member} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}