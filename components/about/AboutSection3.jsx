"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const cards = [
  {
    id: "vision",
    subtitle: "// Future Outlook",
    title: (
      <>
        Redefining the{" "}
        <span className="italic text-gray-400">digital horizon</span>.
      </>
    ),
    sideBadge: (
      <>
        Innovation
        <br />
        Strategy
        <br />
        Growth
      </>
    ),
    middleText: (
      <>
        We envision a world where{" "}
        <span className="text-white font-semibold">technology</span> and
        humanity converge seamlessly. A future where digital tools aren't just
        utilities, but{" "}
        <span className="text-[#2D68FF] font-medium">
          extensions of human creativity
        </span>
        .
      </>
    ),
    footerText: "Fostering a new era of innovation and connection.",
    buttonText: "View Vision",
  },
  {
    id: "about",
    subtitle: "// Core Philosophy",
    title: (
      <>
        We don't just build
        <span className="italic text-gray-400"> software.</span>{" "}
      </>
    ),
    sideBadge: (
      <>
        Based in London
        <br />
        Global Reach
        <br />
        Est. MMXXIV
      </>
    ),
    middleText: (
      <>
        At <span className="text-white font-semibold">RM Club</span>, we believe
        the future belongs to those who dare to blend{" "}
        <span className="text-[#8C4DFF] font-medium">human intuition</span> with
        computational precision. Our journey started with a single question:
        <span className="text-white">
          {" "}
          "How can we make technology feel less like a tool and more like an
          extension of the self?"
        </span>
      </>
    ),
    footerText:
      "Through rigorous testing and a relentless pursuit of perfection, we have crafted an ecosystem that empowers creators.",
    buttonText: "Learn More",
  },
  {
    id: "mission",
    subtitle: "// Strategic Goal",
    title: (
      <>
        Empowering the{" "}
        <span className="italic text-gray-400">next generation</span>.
      </>
    ),
    sideBadge: (
      <>
        Empowerment
        <br />
        Tools
        <br />
        Impact
      </>
    ),
    middleText: (
      <>
        Our mission is to arm{" "}
        <span className="text-white font-semibold">creators</span>, thinkers,
        and dreamers with the tools they need to shape the future. We are
        building the{" "}
        <span className="text-[#1EA1F7] font-medium">foundation</span> for
        tomorrow.
      </>
    ),
    footerText: "Crafting ecosystems that empower true digital ownership.",
    buttonText: "View Mission",
  },
];

const AboutSection3 = () => {
  const [activeIndex, setActiveIndex] = useState(1); // Default to 'About Us' (index 1)
  const [isMobile, setIsMobile] = useState(false);
  const [hasEntered, setHasEntered] = useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      // Using 1024px (lg) as the breakpoint to switch from Stack to Carousel
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleCardClick = (index) => {
    // Only allow rotation logic on desktop
    if (!isMobile) {
      setActiveIndex(index);
    }
  };

  const getCardProps = (index) => {
    // If mobile, return neutral props to disable 3D effects
    if (isMobile) {
      return {
        zIndex: 1,
        x: 0,
        y: 0,
        z: 0,
        scale: 1,
        opacity: 1,
        rotate: 0,
        rotateY: 0,
        filter: "blur(0px)",
      };
    }

    // --- DESKTOP LOGIC (Unchanged) ---
    // efficient circular distance
    // 0: Center, 1: Right, 2: Left (in a 3-item circle relative to active)
    const position = (index - activeIndex + 3) % 3;
    const xOffset = 200; 

    if (!hasEntered) {
      // Entrance State
      if (position === 0)
        return {
          zIndex: 30,
          x: 0,
          y: 100,
          scale: 0.8,
          opacity: 0,
          rotate: 0,
          rotateY: 0,
          filter: "blur(10px)",
        };
      if (position === 1)
        return {
          zIndex: 10,
          x: "50vw",
          y: 0,
          scale: 0.8,
          opacity: 0,
          rotate: 10,
          rotateY: 45,
          filter: "blur(5px)",
        };
      if (position === 2)
        return {
          zIndex: 10,
          x: "-50vw",
          y: 0,
          scale: 0.8,
          opacity: 0,
          rotate: -10,
          rotateY: -45,
          filter: "blur(5px)",
        };
    }

    // Normal State with 3D effect
    if (position === 0) {
      return {
        zIndex: 30,
        x: 0,
        y: 0,
        z: 0,
        scale: 1,
        opacity: 1,
        rotate: 0,
        rotateY: 0, // Face forward
        filter: "blur(0px)",
      };
    } else if (position === 1) {
      return {
        zIndex: 10,
        x: xOffset,
        y: 0,
        z: -100, // Push back
        scale: 1,
        opacity: 0.6,
        rotate: 0,
        rotateY: -45, // Face inward to center (right card faces left)
        filter: "blur(2px)",
      };
    } else {
      // position === 2 (Left)
      return {
        zIndex: 10,
        x: -xOffset,
        y: 0,
        z: -100, // Push back
        scale: 1,
        opacity: 0.6,
        rotate: 0,
        rotateY: 45, // Face inward to center (left card faces right)
        filter: "blur(2px)",
      };
    }
  };

  return (
    <section className="relative w-full bg-[#080618]   px-5 min-h-screen flex flex-col items-center justify-center z-20">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#2D68FF] opacity-[0.03] rounded-full blur-[100px] pointer-events-none" />

      {/* Header Section */}
      <div className="w-full max-w-[1400px] mx-auto overflow-x-clip py-10 flex flex-col items-center">
        {/* Responsive Text Size */}
        <h1 className="max-w-2xl ml-auto text-white text-end text-4xl md:text-6xl lg:text-[4.5rem] tracking-tight leading-none font-jakarta font-medium">
          We envision a transformative decade ahead
        </h1>

        {/* Card Container */}
        <div className="w-full flex justify-center py-10">
          <motion.div
            // Mobile: Auto height, Flex Column. Desktop: Fixed Height, Block/Relative.
            className={`
              relative w-full max-w-[650px] flex items-center justify-center
              ${isMobile ? "h-auto flex-col gap-8" : "h-[700px]"}
            `}
            // Only apply perspective on Desktop
            style={{ perspective: isMobile ? "none" : "1000px" }}
            onViewportEnter={() => setHasEntered(true)}
            viewport={{ amount: 0.3, once: true }}
          >
            {cards.map((card, index) => {
              const props = getCardProps(index);
              const isActive = index === activeIndex;

              return (
                <motion.div
                  key={card.id}
                  onClick={() => handleCardClick(index)}
                  initial={false}
                  // Animate props: On mobile, these will resolve to neutral values
                  animate={{
                    zIndex: props.zIndex,
                    x: props.x,
                    y: props.y,
                    z: props.z,
                    scale: props.scale,
                    opacity: props.opacity,
                    rotate: props.rotate,
                    rotateY: props.rotateY,
                    filter: props.filter,
                  }}
                  transition={{
                    duration: hasEntered ? 0.8 : 1.2,
                    ease: "easeOut",
                    delay: hasEntered ? 0 : 0.2,
                  }}
                  // Mobile: Relative positioning to stack. Desktop: Absolute to overlap/carousel.
                  className={`
                    w-full md:w-[550px]
                    bg-[#0E0C1F]   p-8 md:p-10 border border-[#2D68FF]/60 shadow-2xl overflow-hidden
                    ${isMobile ? "relative h-auto min-h-[450px]" : "absolute h-[600px] cursor-pointer"}
                    ${isActive || isMobile ? "pointer-events-auto" : "pointer-events-auto"}
                  `}
                >
                  {/* Background Decorative Text */}
                  <div className="absolute top-10 right-[-20px] opacity-[0.03] select-none pointer-events-none">
                    <h4 className="text-[8rem] md:text-[12rem] font-bold leading-none">RM</h4>
                  </div>

                  <div className="relative z-10 flex flex-col h-full justify-between gap-6 md:gap-0">
                    {/* TOP SECTION */}
                    <div className="flex flex-col md:flex-row justify-between items-start gap-4 md:gap-8 mb-4 md:mb-8">
                      <div className="max-w-[450px]">
                        <p className="text-[#2D68FF] font-mono text-xs md:text-sm tracking-[0.3em] uppercase mb-2">
                          {card.subtitle}
                        </p>
                        <h3 className="text-3xl md:text-4xl font-switzer font-medium text-white leading-[1] tracking-tight">
                          {card.title}
                        </h3>
                      </div>

                      {/* Side Badge */}
                      <div className="hidden md:block border-l border-white/10 pl-6 py-2">
                        <p className="text-white/40 text-xs uppercase tracking-widest leading-loose">
                          {card.sideBadge}
                        </p>
                      </div>
                    </div>

                    {/* MIDDLE SECTION */}
                    <div className="mb-4 md:mb-8">
                      <p className="text-lg md:text-2xl text-gray-300 leading-[1.3] md:leading-[1.2] font-light">
                        {card.middleText}
                      </p>
                    </div>

                    {/* BOTTOM SECTION */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-end">
                      <div className="space-y-4">
                        <p className="text-sm text-gray-500 max-w-[280px] leading-relaxed">
                          {card.footerText}
                        </p>
                        {/* Decorative dashes */}
                        <div className="flex gap-2">
                          <div className="h-1 w-8 bg-[#2D68FF]" />
                          <div className="h-1 w-2 bg-white/20" />
                          <div className="h-1 w-2 bg-white/20" />
                        </div>
                      </div>

                      <button
                        className="
                                relative
                                inline-flex items-center gap-2
                                w-fit
                                px-3 py-2.5
                                bg-[#0A2549]
                                text-[#1EA1F7]
                                text-[1.1rem]
                                overflow-hidden
                                cursor-pointer
                                group
                                "
                      >
                        <span className="relative z-10">{card.buttonText}</span>
                        <span className=" ">
                          <FaArrowRight size={14} className="relative z-10" />
                        </span>
                        {/* SHIMMER OVERLAY */}
                        <span
                          className="
                                    absolute inset-0
                                    bg-gradient-to-r
                                    from-transparent
                                    via-white/15
                                    to-transparent
                                    -translate-x-full
                                    group-hover:translate-x-full
                                    transition-transform
                                    duration-700
                                    ease-in-out
                                    "
                        />
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection3;