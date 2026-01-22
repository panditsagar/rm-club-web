"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { RiInformationLine, RiTwitterXFill, RiCloseLine } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";

// --- TEAM DATA ---
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

// Triple the array to simulate true infinity (Prev, Current, Next sets)
const loopedMembers = [...teamMembers, ...teamMembers, ...teamMembers];

// Default Constants (Desktop)
const DESKTOP_CARD_WIDTH = 450;
const DESKTOP_GAP = 38;

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

function TeamCard({ member, index, cardWidth }) {
  const [showInfo, setShowInfo] = useState(false);
  
  // Zig-Zag logic: Applies to odd indexes on ALL devices
  const isOffset = index % 2 !== 0;

  return (
    <div
      style={{ 
        width: `${cardWidth}px`,
        // Zig Zag offset (80px) applies everywhere
        transform: isOffset ? "translateY(80px)" : "translateY(0px)",
        transition: "transform 0.5s ease-in-out, width 0.3s ease"
      }}
      className="flex flex-col shrink-0 select-none pointer-events-auto"
    >
      {/* Container with Blue Corner Markers */}
      <div className="relative aspect-square w-full border border-white/20 p-5 bg-[#080618] group">
        <div className="absolute -top-1 -left-1 w-2 h-2 bg-[#002FFF] z-50" />
        <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#002FFF] z-50" />
        <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-[#002FFF] z-50" />
        <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-[#002FFF] z-50" />
        
        {/* Info Toggle Button */}
        <div className="absolute top-4 right-4 z-50">
          <button 
            // Stop propagation to prevent drag from capturing the click
            onPointerDownCapture={(e) => e.stopPropagation()}
            onClick={(e) => {
              e.stopPropagation();
              setShowInfo(!showInfo);
            }}
            className="w-9 h-9 flex cursor-pointer items-center justify-center border border-white/20 bg-[#080618]/50 backdrop-blur-sm hover:bg-white/10 transition-colors"
          >
            {showInfo ? <RiCloseLine size={18} /> : <RiInformationLine size={16} />}
          </button>
        </div>

        {/* Diagonal Line Background */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none z-10"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <line x1="0" y1="0" x2="100" y2="100" stroke="white" strokeOpacity="0.15" strokeWidth="0.2" />
        </svg>

        {/* MAIN CONTENT AREA */}
        <div className="relative w-[71%] max-w-[320px] aspect-square z-30 overflow-hidden border border-white/20 bg-[#080618]">
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
                        className="w-full h-full p-4 flex flex-col justify-start overflow-y-auto scrollbar-hide cursor-text"
                        onPointerDownCapture={(e) => e.stopPropagation()} // Allow text selection without dragging
                    >
                        <p className="text-sm md:text-base leading-[1.1] text-white/90 font-light">
                            {member.bio}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>

        {/* Text Details */}
        <div className="mt-4 px-1 pointer-events-none">
          <h3 className="text-3xl md:text-4xl font-switzer">{member.name}</h3>
          <p className="text-white/80 text-lg md:text-xl font-normal font-author">{member.role}</p>
        </div>

        {/* Social Icons */}
        <div className="absolute bottom-4 right-4 flex gap-2 z-40 bg-[#080618]">
          <a href="#" onPointerDownCapture={(e) => e.stopPropagation()} className="w-9 h-9 flex items-center justify-center border border-white/20 hover:bg-white/5 transition-colors cursor-pointer">
            <RiTwitterXFill size={14} />
          </a>
          <a href="#" onPointerDownCapture={(e) => e.stopPropagation()} className="w-9 h-9 flex items-center justify-center border border-white/20 hover:bg-white/5 transition-colors cursor-pointer">
            <FaLinkedinIn size={14} />
          </a>
        </div>
      </div>
    </div>
  );
}

// --- TeamSection ---
export default function TeamSection() {
  const controls = useAnimation();
  const N = teamMembers.length;
  // Start in the middle set (index N)
  const [index, setIndex] = useState(N);
  const isTransitioning = useRef(false);

  // State for responsive calculations
  const [dimensions, setDimensions] = useState({
    cardWidth: DESKTOP_CARD_WIDTH,
    gap: DESKTOP_GAP,
    totalWidth: DESKTOP_CARD_WIDTH + DESKTOP_GAP,
    isMobile: false
  });

  // Calculate dimensions on resize
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      
      // Desktop Breakpoint
      if (width >= 1024) {
        setDimensions({
          cardWidth: DESKTOP_CARD_WIDTH,
          gap: DESKTOP_GAP,
          totalWidth: DESKTOP_CARD_WIDTH + DESKTOP_GAP,
          isMobile: false
        });
      } else {
        // Mobile/Tablet Logic
        const newGap = 20;
        // Ensure card isn't too small, max out at 400px
        const newCardWidth = Math.min(width - 48, 400); 
        
        setDimensions({
          cardWidth: newCardWidth,
          gap: newGap,
          totalWidth: newCardWidth + newGap,
          isMobile: true
        });
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Update position instantly when dimensions change (responsive snap)
  useEffect(() => {
    controls.set({ x: -index * dimensions.totalWidth });
  }, [dimensions.totalWidth]); // Only trigger on dimension change, index change handles itself

  const slideTo = useCallback(async (newIndex) => {
    if (isTransitioning.current) return;
    isTransitioning.current = true;

    // We animate to the target index first
    await controls.start({
      x: -newIndex * dimensions.totalWidth,
      transition: { duration: 0.5, ease: [0.32, 0.72, 0, 1] },
    });

    // Check boundaries for seamless loop interaction
    // "Middle Zone" is roughly index N to 2N - 1
    
    // If we moved past the end of the middle set (into the 3rd set)
    if (newIndex >= 2 * N) {
      // Calculate the equivalent index in the middle set
      // e.g., if N=4, we are at 8. Equivalent is 4.  (8 - 4 = 4)
      const resetsToIndex = newIndex - N; 
      await controls.set({ x: -resetsToIndex * dimensions.totalWidth });
      setIndex(resetsToIndex);
    } 
    // If we moved before the start of the middle set (into the 1st set)
    else if (newIndex < N) {
      // e.g. if N=4, we are at 3. Equivalent is 7 (3 + 4 = 7).
      const resetsToIndex = newIndex + N;
      await controls.set({ x: -resetsToIndex * dimensions.totalWidth });
      setIndex(resetsToIndex);
    } 
    else {
      // Just update regular index
      setIndex(newIndex);
    }

    isTransitioning.current = false;
  }, [controls, dimensions.totalWidth, N]);

  // Handle Drag End (Touch/Mouse Swipe)
  const handleDragEnd = (event, info) => {
    const { offset, velocity } = info;
    const swipeThreshold = 50; 
    
    // Strict "One Card" logic relying on direction
    if (offset.x < -swipeThreshold || velocity.x < -500) {
      slideTo(index + 1);
    } else if (offset.x > swipeThreshold || velocity.x > 500) {
      slideTo(index - 1);
    } else {
      slideTo(index);
    }
  };

  // Recalculate position when resizing
  useEffect(() => {
    controls.set({ x: -index * dimensions.totalWidth });
  }, [dimensions.totalWidth, index, controls]);

  // Dynamic constraints: strictly allow only 1 card movement
  const currentX = -index * dimensions.totalWidth;
  const minX = currentX - dimensions.totalWidth; // Allow moving LEFT (next card)
  const maxX = currentX + dimensions.totalWidth; // Allow moving RIGHT (prev card)

  return (
    <section className="relative w-full bg-[#080618] py-20 md:py-30 pb-32 md:pb-48 overflow-hidden text-white">
      {/* Header Container */}
      <div
        style={{ 
          maxWidth: dimensions.isMobile ? '100%' : `${DESKTOP_CARD_WIDTH * 3 + DESKTOP_GAP * 2}px` 
        }}
        className="mx-auto flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-16 px-6 md:px-4"
      >
        <h2 className="text-start text-[2.5rem] md:text-5xl lg:text-[4.0rem] tracking-tight leading-[1.1] font-jakarta font-medium max-w-xl mb-6 md:mb-0">Team</h2>

        <div className="flex gap-2 self-end md:self-auto">
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

      {/* Carousel Container */}
      <div 
        className="mx-auto overflow-visible px-6 md:px-0" 
        style={{ 
          width: dimensions.isMobile ? '100%' : `${DESKTOP_CARD_WIDTH * 3 + DESKTOP_GAP * 2}px` 
        }}
      >
        <motion.div
          drag="x"
          dragMomentum={false} 
          // Strictly constrain drag to current card +/- 1 width
          dragConstraints={{ left: minX, right: maxX }}
          dragElastic={0.05} // Very stiff compliance to constraints
          onDragEnd={handleDragEnd}
          animate={controls}
          initial={{ x: -N * dimensions.totalWidth }} // Initialize at middle set
          style={{ 
            gap: `${dimensions.gap}px`,
            cursor: "grab",
            touchAction: "pan-y" 
          }}
          whileTap={{ cursor: "grabbing" }}
          className="flex flex-nowrap items-start"
        >
          {loopedMembers.map((member, i) => (
            <TeamCard 
              key={`${member.id}-${i}`} 
              member={member} 
              index={i} 
              cardWidth={dimensions.cardWidth}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}