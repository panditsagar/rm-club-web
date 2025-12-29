"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
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

export default function FifthSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="relative w-full bg-[#ECF5FF] py-20 overflow-hidden text-[#002FFF]">
      {/* HEADER */}
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-end mb-20 px-4  gap-8">
        <h2 className="  text-start lg:text-[4.5rem] tracking-tight leading-none font-switzer max-w-2xl">
          Founders that <br /> believe in us
        </h2>

        {/* NAVIGATION BUTTONS */}
        <div className="flex gap-2">
          <button
            onClick={handlePrev}
            className="group relative overflow-hidden w-12 h-12 flex items-center justify-center border border-[#002FFF]/20 text-[#002FFF] rounded-sm cursor-pointer z-50 transition-all"
          >
            <span className="absolute inset-0 bg-[#002FFF]/10 translate-x-full group-hover:translate-x-0 transition-transform duration-400 ease-out" />
            <span className="relative z-10  transition-colors duration-300">
              <IoIosArrowBack size={24} />
            </span>
          </button>

          <button
            onClick={handleNext}
            className="group relative overflow-hidden w-12 h-12 flex items-center justify-center border border-[#002FFF]/20 text-[#002FFF] rounded-sm cursor-pointer z-50 transition-all"
          >
            <span className="absolute inset-0 bg-[#002FFF]/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-400 ease-out" />
            <span className="relative z-10  transition-colors duration-300">
              <IoIosArrowForward size={24} />
            </span>
          </button>
        </div>
      </div>

      {/* CAROUSEL */}
      <div className="w-full relative h-[600px] md:h-[480px] flex items-center justify-center">
        {testimonials.map((data, index) => {
          let offset =
            (index - currentIndex + testimonials.length) % testimonials.length;

          if (offset > testimonials.length / 2) {
            offset -= testimonials.length;
          }

          let xPos = "0%";
          let scale = 0.8;
          let opacity = 0;
          let zIndex = 0;

          if (offset === 0) {
            xPos = "0%";
            scale = 1;
            opacity = 1;
            zIndex = 10;
          } else if (offset === 1) {
            // Increased xPos from 95% to 110% to create a gap
            xPos = "103%";
            scale = 0.85;
            opacity = 0.7;
            zIndex = 5;
          } else if (offset === -1) {
            // Increased xPos from -95% to -110% to create a gap
            xPos = "-103%";
            scale = 0.85;
            opacity = 0.7;
            zIndex = 5;
          } else {
            xPos = "0%";
            scale = 0.8;
            opacity = 0;
            zIndex = 0;
          }

          return (
            <motion.div
              key={data.id}
              initial={false}
              animate={{
                x: xPos,
                scale: scale,
                opacity: opacity,
                zIndex: zIndex,
              }}
              transition={{ duration: 0.65, ease: "easeInOut" }}
              // Reduced width from md:w-[70%] to md:w-[65%] to decrease card size
              className="absolute w-[85%] md:w-[70%] max-w-[1100px] h-full"
              style={{ pointerEvents: offset === 0 ? "auto" : "none" }}
            >
              <div className="w-full h-full border border-[#002FFF] p-8 md:p-10 flex flex-col md:flex-row gap-12 items-center bg-[#ECF5FF] relative transition-shadow duration-300">
                {/* LEFT: FOUNDER IMAGE WITH TECH FRAME */}
                <div className="relative shrink-0 w-[280px] h-[320px] md:w-[320px] md:h-[380px] flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    viewBox="0 0 371 442"
                    fill="none"
                    className="quote__image-svg absolute inset-0 w-full h-full"
                  >
                    <rect width="371" height="442" fill="#E6F0FF" />
                    <path
                      d="M1 441L370 1"
                      stroke="currentColor"
                      vectorEffect="non-scaling-stroke"
                    />
                    <path
                      d="M370 441L1 1"
                      stroke="currentColor"
                      vectorEffect="non-scaling-stroke"
                    />
                    <path
                      d="M8.35356 334.354L8.50001 334.207L8.50001 334L8.5 108L8.5 107.793L8.35354 107.646L0.499999 99.7929L0.500008 0.499998L370.5 0.50003L370.5 99.7929L362.646 107.646L362.5 107.793L362.5 108L362.5 334L362.5 334.207L362.646 334.354L370.5 342.207L370.5 441.5L0.49997 441.5L0.499978 342.207L8.35356 334.354Z"
                      stroke="currentColor"
                      vectorEffect="non-scaling-stroke"
                    />
                  </svg>
                  <CornerAccents />
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] h-[260px] md:w-[234px] md:h-[280px] overflow-hidden border border-[#002FFF] z-10">
                    <img
                      src={data.image}
                      alt={data.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* RIGHT: CONTENT */}
                <div className="flex-1 flex flex-col justify-between h-full py-4 text-[#002FFF]">
                  <div className="relative">
                    <p className="text-lg md:text-2xl leading-[1.1] font-author font-normal">
                      “{data.quote}”
                    </p>
                  </div>

                  <div className="mt-8 flex items-end justify-between border-b border-[#002FFF]/20 pb-4">
                    <div>
                      <h3 className="text-3xl font-switzer font-medium">
                        {data.name}
                      </h3>
                      <p className="text-[#002FFF]/60 text-lg uppercase tracking-wider mt-1 font-medium">
                        {data.title}
                      </p>
                    </div>

                    <div className="h-8">
                      {data.companyLogo ? (
                        <img
                          src={data.companyLogo}
                          alt="logo"
                          className="h-full object-contain grayscale opacity-80"
                        />
                      ) : (
                        <span className="text-xl font-bold font-switzer uppercase tracking-widest opacity-80">
                          DRESSX
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="   flex    justify-center items-center md:items-end  py-10 ">
        <p className="   lg:text-[0.98rem] tracking-tight leading-none font-author  text-center max-w-xl">
          These opinions represent the view of certain founders and may not be
          representative of the views of all founders or investors. No
          compensation was provided for such opinions.
        </p>
      </div>
    </section>
  );
}
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
