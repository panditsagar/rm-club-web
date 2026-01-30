"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaArrowRight, FaPlay } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";

// Using the user's realistic uploaded images + high quality generated ones
const slides = [
  {
    id: 1,
    category: "Innovation",
    title: "A Leap Into History",
    description:
      "Bringing together the best people, ideas and technical expertise, we partner with clients to turn ambitions into action. engineering solutions that respect and coexist with our environment.",
    image: "/hero/hero1.jpg", // Realistic Indian Rocket Launch
    cta: "See Our Innovation",
    zoomDirection: "out",
  },
  {
    id: 2,
    category: "Sustainability",
    title: "Harmony With Nature",
    description:
      "Creating eco-conscious engineering solutions that respect and coexist with our environment. Bringing together the best people, ideas and technical expertise.  ",
    image: "/hero/wetlands.png", // Realistic Wetlands with Flamingos
    cta: "Our Sustainability Goals",
    zoomDirection: "in",
  },
  {
    id: 3,
    category: "Urban Planning",
    title: "Green Infrastructure",
    description:
      "Reimagining urban spaces where modern architecture and nature thrive in perfect balance. Bringing together the best people, ideas and technical expertise. ",
    image: "/hero/green_city.png", // Realistic Indian Smart City
    cta: "View Projects",
    zoomDirection: "out",
  },
];

export default function Herosection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000); // Slower cycle for Ken Burns effect
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[100vh] w-full overflow-hidden px-10 bg-black">
      {/* --- BACKGROUND LAYER --- */}
      <AnimatePresence>
        <motion.div
          key={slides[currentSlide].id}
          initial={{
            opacity: 0,
            scale: slides[currentSlide].zoomDirection === "in" ? 1 : 1.2,
          }}
          animate={{
            opacity: 1,
            scale: slides[currentSlide].zoomDirection === "in" ? 1.2 : 1,
          }}
          exit={{ opacity: 0 }}
          transition={{
            opacity: { duration: 2.0, ease: "easeInOut" },
            scale: { duration: 8.0, ease: "linear" },
          }}
          className="absolute inset-0 z-0"
        >
          <Image
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            fill
            className="object-cover"
            priority
          />
          {/* Cinema Grade Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
         </motion.div>
      </AnimatePresence>

      {/* --- MAIN CONTENT LAYER --- */}
      <div className="relative z-10 size-full max-w-[1600px] mx-auto px-6 lg:px-12 flex flex-col justify-center h-full pb-16 md:pb-0">
        {/* LEFT: Text Content */}
        <div className="w-full md:w-3/4 lg:w-2/3 pl-0 md:pl-10">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h1 className="text-white text-5xl md:text-6xl lg:text-[4rem] font-medium font-serif leading-[1.1] mb-10 tracking-tight drop-shadow-lg">
              {slides[currentSlide].title}
            </h1>

            <p className="text-white text-lg md:text-3xl leading-[1.4] max-w-3xl mb-10 opacity-90 font-normal drop-shadow-md">
              {slides[currentSlide].description}
            </p>

            {/* Simple CTA if needed, kept minimal */}
            {/* <div className="flex items-center gap-6"> ... </div> */}
          </motion.div>
        </div>

       

        {/* NAVIGATION DOTS (Simpler) */}
        <div className="absolute bottom-10 right-10 flex gap-3 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 w-2 rounded-full transition-all duration-300 ${currentSlide === index ? "bg-white scale-125" : "bg-white/40 hover:bg-white/60"}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
