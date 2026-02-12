"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6"; // Standard arrow

const timelineData = [
  {
    year: "2021",
    title: "Foundation Laid",
    description:
      "Developed the initial proof-of-concept models and secured pre-seed funding to assemble a world-class engineering team.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2940&auto=format&fit=crop",
  },
  {
    year: "2022",
    title: "Alpha Development",
    description:
      "Refined the LLM engine, conducting extensive internal testing and establishing strategic partnerships with data providers.",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2940&auto=format&fit=crop",
  },
  {
    year: "2023",
    title: "Prototype Launch",
    description:
      "Conceived Fusion AI, assembled the founding team, built the core LLM engine, and released an alpha prototype to early testers.",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    year: "2024",
    title: "Closed Beta",
    description:
      "Opened a closed beta, added 50+ app integrations, launched our no-code workflow builder, and honed the user experience.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    year: "2025",
    title: "Public Launch",
    description:
      "Official public launch with 200+ customers onboarded, $3M+ in cost savings realized, and enterprise-grade features rolled out.",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    year: "2026",
    title: "Global Expansion",
    description:
      "Expanding global reach, introducing autonomous agents, and setting new benchmarks for AI-driven enterprise productivity.",
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2940&auto=format&fit=crop",
  },
];

const AboutSection2 = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const smoothProgress = scrollYProgress;
  const lineHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="relative w-full   py-10 pb-30">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        
      


        {/* TIMELINE CONTAINER */}
        <div ref={containerRef} className="relative">
             {/* Central Line (Desktop) / Left Line (Mobile) */}
             <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-[1px] bg-gray-200 block">
                <motion.div
                    style={{ height: lineHeight }}
                    className="w-full bg-primary relative"
                >
                    {/* Moving Dot */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-4 h-4 z-20 bg-primary rounded-full border-2 border-white shadow-md">
                    </div>
                </motion.div>
            </div>

            <div className="space-y-8 py-8">
                {timelineData.map((item, index) => (
                    <TimelineItem
                    key={index}
                    item={item}
                    index={index}
                    progress={smoothProgress}
                    total={timelineData.length}
                    />
                ))}
            </div>
        </div>

      </div>
    </section>
  );
};

const TimelineItem = ({ item, index, progress, total }) => {
  const isEve = index % 2 === 0;
  const threshold = (index + 0.5) / total;
  const revealStart = threshold - 0.2;
  const revealEnd = threshold + 0.1;

   const y = useTransform(progress, [revealStart, revealEnd], [50, 0]);
  const scale = useTransform(progress, [revealStart, revealEnd], [0.8, 1]);

  const dotScale = useTransform(
    progress,
    [threshold - 0.01, threshold + 0.05],
    [0, 1]
  );
  const dotOpacity = useTransform(
    progress,
    [threshold - 0.01, threshold + 0.05],
    [0, 1]
  );

  return (
    <motion.div
      style={{  y, scale }}
      className={`flex flex-col md:flex-row items-center justify-center gap-30 relative pl-10 md:pl-0 ${
        isEve ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      {/* Static Dot */}
      <motion.div
        style={{ scale: dotScale, opacity: dotOpacity }}
        className="absolute left-[0.85rem] md:left-1/2 transform -translate-x-1/2 w-4 h-4 z-10 block bg-primary rounded-full border-2 border-white shadow-sm"
      >
      </motion.div>

      {/* Image Content */}
      <div
        className={`w-full md:w-[35%] ${
          isEve ? "text-right" : "text-left"
        } mb-8 md:mb-0`}
      >
        <div className="relative aspect-video overflow-hidden shadow-lg group">
          <Image
            src={item.image}
            alt={`Timeline ${item.year}`}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
           {/* Gradient Overlay for better text separation if needed, or consistent style */}
          <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
        </div>
      </div>

      {/* Text Content */}
      <div
        className={`w-full md:w-[35%] text-left md:text-left`}
      >
        <h2 className="font-switzer text-sm md:text-base font-bold tracking-wide leading-none uppercase text-primary mb-2">
          {item.year}
        </h2>
        <h3 className="font-switzer text-2xl md:text-3xl font-semibold tracking-tight leading-[1.1] text-primary-dark mb-3">
          {item.title}
        </h3>
        <p className="text-base text-gray-500 leading-relaxed font-normal">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
};

export default AboutSection2;
