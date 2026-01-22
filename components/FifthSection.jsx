"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, useAnimation } from "framer-motion";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const testimonials = [
  {
    id: 1,
    name: "Daria Shapovalova",
    title: "Founder, DRESSX",
    companyLogo:
      "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    quote:
      "It has been a pleasure working with Hartmann Capital since day one when the fund first invested in DressX. We greatly appreciate being part of their portfolio, as it has allowed us to connect with other remarkable companies. The fund does an excellent job organizing valuable ideas and forge significant connections.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Alex Rivera",
    title: "CEO, NexaTech",
    companyLogo: "",
    quote:
      "Hartmann Capital’s strategic guidance was pivotal during our Series A. Their deep understanding of the Web3 landscape helped us navigate complex market cycles and position ourselves as leaders in the decentralized identity space.",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Sarah Chen",
    title: "Co-Founder, Orbital",
    companyLogo: "",
    quote:
      "The team goes above and beyond just providing capital. They are effectively an extension of our core team, offering recruiting support, technical feedback, and introductions to key partners that expedited our roadmap by months.",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "James Wilson",
    title: "Director, BlockFlow",
    companyLogo: "",
    quote:
      "We value investors who truly understand the tech. Hartmann Capital isn't just following trends; they are thesis-driven and have the conviction to back ambitious founders building the infrastructure of tomorrow.",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1000&auto=format&fit=crop",
  },
];

// Triple buffer for true infinite loop
const loopedTestimonials = [...testimonials, ...testimonials, ...testimonials];

function CornerAccents() {
  return (
    <>
      <div className="absolute -top-1 -left-1 w-2 h-2 bg-[#002FFF]" />
      <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#002FFF]" />
      <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-[#002FFF]" />
      <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-[#002FFF]" />
    </>
  );
}

function TestimonialCard({ data, isActive, isNeighbor, cardWidth }) {
  // Visual logic: Active is 1.0 scale/opacity, Neighbor is smaller/faded
  // Others are even more faded/smaller (optional, but keeping consistent with "opacity 0" from original is good if far away)
  
  let scale = 0.8;
  let opacity = 0.3; // Faded for non-neighbors
  let zIndex = 0;
  let pointerEvents = "none";

  if (isActive) {
    scale = 1;
    opacity = 1;
    zIndex = 10;
    pointerEvents = "auto";
  } else if (isNeighbor) {
    scale = 0.85;
    opacity = 0.7;
    zIndex = 5;
  }

  return (
    <motion.div
      animate={{ scale, opacity, zIndex }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="shrink-0 relative h-full flex items-center justify-center transition-shadow duration-300"
      style={{ 
        width: cardWidth,
        pointerEvents 
      }}
    >
      <div className="w-full h-full border border-[#002FFF] p-6 md:p-10 flex flex-col md:flex-row gap-6 md:gap-12 items-center bg-[#ECF5FF] relative">
        {/* LEFT: FOUNDER IMAGE WITH TECH FRAME */}
        <div className="relative shrink-0 w-[240px] h-[280px] md:w-[320px] md:h-[380px] flex items-center justify-center mt-4 md:mt-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            viewBox="0 0 371 442"
            fill="none"
            className="quote__image-svg absolute inset-0 w-full h-full"
          >
            <rect width="371" height="442" fill="#E6F0FF" />
            <path d="M1 441L370 1" stroke="currentColor" vectorEffect="non-scaling-stroke" />
            <path d="M370 441L1 1" stroke="currentColor" vectorEffect="non-scaling-stroke" />
            <path
              d="M8.35356 334.354L8.50001 334.207L8.50001 334L8.5 108L8.5 107.793L8.35354 107.646L0.499999 99.7929L0.500008 0.499998L370.5 0.50003L370.5 99.7929L362.646 107.646L362.5 107.793L362.5 108L362.5 334L362.5 334.207L362.646 334.354L370.5 342.207L370.5 441.5L0.49997 441.5L0.499978 342.207L8.35356 334.354Z"
              stroke="currentColor"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
          <CornerAccents />
          
          {/* Scaled image container */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[170px] h-[200px] md:w-[234px] md:h-[280px] overflow-hidden border border-[#002FFF] z-10">
            <img
              src={data.image}
              alt={data.name}
              draggable={false}
              className="w-full h-full object-cover select-none"
            />
          </div>
        </div>

        {/* RIGHT: CONTENT */}
        <div className="flex-1 flex flex-col justify-between h-full py-2 md:py-4 text-[#002FFF] w-full text-center md:text-left">
          <div className="relative overflow-visible flex-grow md:flex-grow-0 max-h-[200px] md:max-h-none pr-2 md:pr-0 pointer-events-none">
            <p className="text-lg md:text-2xl leading-[1.3] md:leading-[1.1] font-author font-normal">
              “{data.quote}”
            </p>
          </div>

          <div className="mt-4 md:mt-8 flex flex-col md:flex-row items-center md:items-end justify-between border-b border-[#002FFF]/20 pb-4 gap-4 md:gap-0">
            <div>
              <h3 className="text-2xl md:text-3xl font-switzer font-medium">
                {data.name}
              </h3>
              <p className="text-[#002FFF]/60 text-base md:text-lg uppercase tracking-wider mt-1 font-medium">
                {data.title}
              </p>
            </div>

            <div className="h-6 md:h-8">
              {data.companyLogo ? (
                <img
                  src={data.companyLogo}
                  alt="logo"
                  draggable={false}
                  className="h-full object-contain grayscale opacity-80 select-none"
                />
              ) : (
                <span className="text-lg md:text-xl font-bold font-switzer uppercase tracking-widest opacity-80 select-none">
                  DRESSX
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function FifthSection() {
  const controls = useAnimation();
  const N = testimonials.length;
  const [index, setIndex] = useState(N); // Start in middle set
  const isTransitioning = useRef(false);
  const containerRef = useRef(null);

  // Default dimensions
  const [dimensions, setDimensions] = useState({
    cardWidth: 800,
    gap: 40,
    totalWidth: 840,
    centerOffset: 0
  });

  // Calculate dimensions responsive to viewport
  const updateDimensions = useCallback(() => {
    if (!containerRef.current) return;
    
    const width = window.innerWidth;
    const isDesktop = width >= 768;
    
    const containerW = containerRef.current.offsetWidth;
    
    let targetCardWidth;
    if (isDesktop) {
        targetCardWidth = Math.min(containerW * 0.7, 1100);
    } else {
        targetCardWidth = containerW * 0.9;
    }
    
    const targetGap = targetCardWidth * 0.03; 

    const totalWidth = targetCardWidth + targetGap;
    
    // Calculate offset to center the active card
    const centerOffset = (containerW - targetCardWidth) / 2;

    setDimensions({
      cardWidth: targetCardWidth,
      gap: targetGap,
      totalWidth,
      centerOffset
    });
  }, []);

  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, [updateDimensions]);

  // Sync position securely on dimension change
  useEffect(() => {
    controls.set({ x: dimensions.centerOffset - index * dimensions.totalWidth });
  }, [dimensions, index, controls]);

  // Reset lock when user starts interacting
  const handleDragStart = () => {
    isTransitioning.current = true;
  };

  const slideTo = useCallback(async (newIndex) => {
    if (isTransitioning.current) return;
    isTransitioning.current = true;

    try {
        await controls.start({
            x: dimensions.centerOffset - newIndex * dimensions.totalWidth,
            transition: { duration: 0.65, ease: "easeInOut" },
        });

        // Loop Logic
        if (newIndex >= 2 * N) {
            const resetsToIndex = newIndex - N;
            await controls.set({ x: dimensions.centerOffset - resetsToIndex * dimensions.totalWidth });
            setIndex(resetsToIndex);
        }
        else if (newIndex < N) {
            const resetsToIndex = newIndex + N;
            await controls.set({ x: dimensions.centerOffset - resetsToIndex * dimensions.totalWidth });
            setIndex(resetsToIndex);
        }
        else {
            setIndex(newIndex);
        }

    } catch (err) {
        console.log("Animation interrupted", err);
    } finally {
        isTransitioning.current = false;
    }
  }, [controls, dimensions, N]);

  const handleDragEnd = (event, info) => {
    // Release manual lock because drag detected
    isTransitioning.current = false;

    const { offset, velocity } = info;
    const swipeThreshold = 50;

    if (offset.x < -swipeThreshold || velocity.x < -500) {
      slideTo(index + 1);
    } else if (offset.x > swipeThreshold || velocity.x > 500) {
      slideTo(index - 1);
    } else {
      slideTo(index);
    }
  };

  // Dynamic constraints
  const currentX = dimensions.centerOffset - index * dimensions.totalWidth;
  const minX = currentX - dimensions.totalWidth; // Move left -> index+1
  const maxX = currentX + dimensions.totalWidth; // Move right -> index-1

  return (
    <section className="relative w-full bg-[#ECF5FF] py-12 pt-20 md:py-20 overflow-hidden text-[#002FFF] select-none">
      {/* HEADER */}
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-end mb-4 md:mb-20 px-4 gap-6 md:gap-8">
        <h2 className="text-start text-4xl md:text-[4.5rem] tracking-tight leading-[1.1] md:leading-none font-jakarta font-medium max-w-2xl">
          Founders that <br /> believe in us
        </h2>

        {/* NAVIGATION BUTTONS */}
        <div className="flex gap-2 self-end md:self-auto">
          <button
            onClick={() => slideTo(index - 1)}
            className="group relative overflow-hidden w-10 h-10 md:w-12 md:h-12 flex items-center justify-center border border-[#002FFF]/20 text-[#002FFF] rounded-sm cursor-pointer z-50 transition-all"
          >
            <span className="absolute inset-0 bg-[#002FFF]/10 translate-x-full group-hover:translate-x-0 transition-transform duration-400 ease-out" />
            <span className="relative z-10 transition-colors duration-300">
              <IoIosArrowBack size={20} className="md:w-6 md:h-6" />
            </span>
          </button>

          <button
            onClick={() => slideTo(index + 1)}
            className="group relative overflow-hidden w-10 h-10 md:w-12 md:h-12 flex items-center justify-center border border-[#002FFF]/20 text-[#002FFF] rounded-sm cursor-pointer z-50 transition-all"
          >
            <span className="absolute inset-0 bg-[#002FFF]/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-400 ease-out" />
            <span className="relative z-10 transition-colors duration-300">
              <IoIosArrowForward size={20} className="md:w-6 md:h-6" />
            </span>
          </button>
        </div>
      </div>

      {/* CAROUSEL TRACK */}
      <div 
        ref={containerRef}
        className="w-full relative h-[750px] md:h-[480px] flex items-center overflow-hidden"
      >
        <motion.div
           drag="x"
           onDragStart={handleDragStart}
           dragMomentum={false}
           dragConstraints={{ left: minX, right: maxX }}
           dragElastic={0.05}
           onDragEnd={handleDragEnd}
           animate={controls}
           initial={{ x: dimensions.centerOffset - N * dimensions.totalWidth }}
           style={{ 
             display: "flex",
             gap: `${dimensions.gap}px`,
             cursor: "grab",
             touchAction: "pan-y"
           }}
           whileTap={{ cursor: "grabbing" }}
        >
           {loopedTestimonials.map((data, i) => (
             <TestimonialCard 
                key={`${data.id}-${i}`}
                data={data}
                cardWidth={dimensions.cardWidth}
                isActive={i === index}
                isNeighbor={Math.abs(i - index) === 1}
             />
           ))}
        </motion.div>
      </div>

      <div className="flex justify-center items-center md:items-end py-10 px-4">
        <p className="text-sm md:text-[0.98rem] tracking-tight leading-normal md:leading-none font-author text-center max-w-xl text-[#002FFF]/80">
          These opinions represent the view of certain founders and may not be
          representative of the views of all founders or investors. No
          compensation was provided for such opinions.
        </p>
      </div>
    </section>
  );
}