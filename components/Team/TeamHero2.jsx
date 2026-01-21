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
    image:
      "https://cdn.prod.website-files.com/66c71da082e3d64d93782c96/66e082d93f5863de9d14b563_11.avif",
    bio: "Felix founded Hartmann Capital in 2018 at the age of 23, launching one of the earliest crypto hedge funds directly from his bedroom. Starting with around $200k, he scaled Hartmann Capital into a ~$50 million frontier tech investment firm. Initially making his mark as a multi-strategy digital asset manager, Felix repeatedly achieved top-3 industry rankings between 2020 and 2023.",
  },
  {
    id: 2,
    name: "Anand Dass",
    role: "Advisor",
    image:
      "https://cdn.prod.website-files.com/66c71da082e3d64d93782c96/66e0d2a334ed39eb3b3e3b72_1.avif",
    bio: "Anand brings years of strategic advisory experience in the emerging tech landscape...",
  },
  {
    id: 3,
    name: "Roberto Nickson",
    role: "Venture Partner",
    image:
      "https://cdn.prod.website-files.com/66c71da082e3d64d93782c96/66e07e91ae942b542da7cecb_9.avif",
    bio: "Roberto is a seasoned entrepreneur and creative director with a focus on web3 product design...",
  },
  {
    id: 4,
    name: "David Linden",
    role: "Head of Marketing",
    image:
      "https://cdn.prod.website-files.com/66c71da082e3d64d93782c96/66e082eab6867c80ab096e17_13.avif",
    bio: "David leads growth and communication strategies, ensuring the firm's vision reaches the frontier...",
  },
  {
    id: 5,
    name: "Felix Hartmann",
    role: "Managing Partner & CIO",
    image:
      "https://cdn.prod.website-files.com/66c71da082e3d64d93782c96/66e082d93f5863de9d14b563_11.avif",
    bio: "Felix founded Hartmann Capital in 2018 at the age of 23, launching one of the earliest crypto hedge funds directly from his bedroom. Starting with around $200k, he scaled Hartmann Capital into a ~$50 million frontier tech investment firm. Initially making his mark as a multi-strategy digital asset manager, Felix repeatedly achieved top-3 industry rankings between 2020 and 2023.",
  },
  {
    id: 6,
    name: "Anand Dass",
    role: "Advisor",
    image:
      "https://cdn.prod.website-files.com/66c71da082e3d64d93782c96/66e0d2a334ed39eb3b3e3b72_1.avif",
    bio: "Anand brings years of strategic advisory experience in the emerging tech landscape...",
  },
  {
    id: 7,
    name: "Roberto Nickson",
    role: "Venture Partner",
    image:
      "https://cdn.prod.website-files.com/66c71da082e3d64d93782c96/66e07e91ae942b542da7cecb_9.avif",
    bio: "Roberto is a seasoned entrepreneur and creative director with a focus on web3 product design...",
  },
  {
    id: 8,
    name: "David Linden",
    role: "Head of Marketing",
    image:
      "https://cdn.prod.website-files.com/66c71da082e3d64d93782c96/66e082eab6867c80ab096e17_13.avif",
    bio: "David leads growth and communication strategies, ensuring the firm's vision reaches the frontier...",
  },
  {
    id: 9,
    name: "Felix Hartmann",
    role: "Managing Partner & CIO",
    image:
      "https://cdn.prod.website-files.com/66c71da082e3d64d93782c96/66e082d93f5863de9d14b563_11.avif",
    bio: "Felix founded Hartmann Capital in 2018 at the age of 23, launching one of the earliest crypto hedge funds directly from his bedroom. Starting with around $200k, he scaled Hartmann Capital into a ~$50 million frontier tech investment firm. Initially making his mark as a multi-strategy digital asset manager, Felix repeatedly achieved top-3 industry rankings between 2020 and 2023.",
  },
  {
    id: 10,
    name: "Anand Dass",
    role: "Advisor",
    image:
      "https://cdn.prod.website-files.com/66c71da082e3d64d93782c96/66e0d2a334ed39eb3b3e3b72_1.avif",
    bio: "Anand brings years of strategic advisory experience in the emerging tech landscape...",
  },
  {
    id: 11,
    name: "Roberto Nickson",
    role: "Venture Partner",
    image:
      "https://cdn.prod.website-files.com/66c71da082e3d64d93782c96/66e07e91ae942b542da7cecb_9.avif",
    bio: "Roberto is a seasoned entrepreneur and creative director with a focus on web3 product design...",
  },
  {
    id: 12,
    name: "David Linden",
    role: "Head of Marketing",
    image:
      "https://cdn.prod.website-files.com/66c71da082e3d64d93782c96/66e082eab6867c80ab096e17_13.avif",
    bio: "David leads growth and communication strategies, ensuring the firm's vision reaches the frontier...",
  },
];

const CARD_WIDTH = 450;
const GAP = 38;

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
        marginTop: isOffset ? "80px" : "0px",
        transition: "margin-top 0.5s ease-in-out",
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
            {showInfo ? (
              <RiCloseLine size={18} />
            ) : (
              <RiInformationLine size={16} />
            )}
          </button>
        </div>

        {/* Diagonal Line Background (stays behind content) */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none z-10"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <line
            x1="0"
            y1="0"
            x2="100"
            y2="100"
            stroke="white"
            strokeOpacity="0.15"
            strokeWidth="0.2"
          />
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
          <p className="text-white/80 text-xl font-normal font-author">
            {member.role}
          </p>
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

// --- TeamSection ---
export default function TeamSection() {
  return (
    <section className="relative w-full bg-[#080618] pt-20 pb-30 overflow-x-clip text-white z-20">
      <div className="absolute top-0 z-50 left-0 w-full h-[150px] -translate-y-full bg-gradient-to-t from-[#080618] to-transparent pointer-events-none" />
    
      <div className="max-w-[1400px] mx-auto px-6 mb-16 flex justify-between items-end">
        <h2 className="text-start lg:text-[4.5rem] tracking-tight leading-none font-jakarta font-medium max-w-xl">
          Meet the Minds Behind Our Innovation
        </h2>
      </div>

      <div className="w-full max-w-[1600px] mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-[38px]">
          {teamMembers.map((member, i) => (
            <TeamCard key={member.id} member={member} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
