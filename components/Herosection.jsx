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
    title: "Building Ventures That Last",
    description:
      "RM Club is a multi-venture ecosystem bringing together independent businesses across media, hospitality, travel, real estate, education, and commerce united by long-term thinking and shared governance.",
    image: "/contact.png",
    zoomDirection: "out",
  },
  {
    id: 2,
    title: "An Ecosystem, Not Just A Company",
    description:
      "Each RM Club venture operates independently while benefiting from collective experience, structured oversight, and a commitment to sustainable growth.",
    image: "/team.png",
    zoomDirection: "in",
  },
  {
    id: 3,
    title: "Rooted In Real-World Enterprises",
    description:
      "From local media and hospitality to travel and education initiatives, RM Club focuses on building practical, community-driven ventures designed for long-term value.",
    image: "/about.png",
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
            <h1 className="text-white text-4xl md:text-5xl lg:text-[3.5rem] font-medium font-serif leading-[1.1] mb-8 tracking-tight drop-shadow-lg">
              {slides[currentSlide].title}
            </h1>

            <p className="text-white text-lg md:text-xl leading-[1.6] max-w-2xl mb-10 opacity-90 font-normal drop-shadow-md">
              {slides[currentSlide].description}
            </p>

            {/* Custom Split-Pill CTA Button */}
            <Link
              href="/contact"
              className="group flex items-center gap-0.5 w-fit"
            >
              {/* Left Part: Text */}
              <div className="bg-[#3b82f6] text-white px-8 py-2.5 rounded-bl-3xl rounded-tr-2xl font-medium text-lg transition-all duration-300 group-hover:bg-[#2563eb]">
                Get in Touch
              </div>

              {/* Right Part: Arrow */}
              <div className="bg-[#3b82f6] text-white p-3.5 rounded-br-2xl rounded-tl-2xl transition-all duration-300 group-hover:bg-[#2563eb] flex items-center justify-center">
                <FaArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </Link>
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
