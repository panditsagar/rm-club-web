"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const timelineData = [
  {
    year: "2021",
    title: "Foundation Laid",
    description:
      " developed the initial proof-of-concept models and secured pre-seed funding to assemble a world-class engineering team.",
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
    <div
      ref={containerRef}
      className="relative bg-[#080618] pb-20 pt-0 sm:pt-20 px-5 z-20"
    >
      {/* Top Gradient Blend */}
      <div className="absolute top-0 z-50 left-0 w-full h-[150px] -translate-y-full bg-gradient-to-t from-[#080618] to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        {/* Central Line (Desktop) / Left Line (Mobile) */}
        {/* RESPONSIVE CHANGE: Changed 'hidden md:block' to 'block' and added 'left-4 md:left-1/2' */}
        <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-[1px] bg-gray-800 block">
          <motion.div
            style={{ height: lineHeight }}
            className="w-full bg-gradient-to-b from-blue-500 via-purple-500 to-transparent relative"
          >
            {/* Moving Dot */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-5 h-5 z-20">
              <img src="/dot.avif" alt="" />
            </div>
          </motion.div>
        </div>

        <div className="space-y-24">
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
  );
};

const TimelineItem = ({ item, index, progress, total }) => {
  const isEve = index % 2 === 0;

  // Calculate threshold for this item
  const threshold = (index + 0.5) / total;

  // WIDER RANGES for smoother reveal
  const revealStart = threshold - 0.2;
  const revealEnd = threshold + 0.1;

  const opacity = useTransform(progress, [revealStart, revealEnd], [0, 1]);
  const y = useTransform(progress, [revealStart, revealEnd], [50, 0]);
  const scale = useTransform(progress, [revealStart, revealEnd], [0.8, 1]);

  // Static dot logic
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
      style={{ opacity, y, scale }}
      // RESPONSIVE CHANGE: Added 'pl-12 md:pl-0' to push content right on mobile to clear the line
      className={`flex flex-col md:flex-row items-center justify-between relative pl-10 md:pl-0 ${
        isEve ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      {/* Static Dot (Milestone) */}
      {/* RESPONSIVE CHANGE: Changed 'hidden md:block' to 'block' and 'left-4 md:left-1/2' to match line */}
      <motion.div
        style={{ scale: dotScale, opacity: dotOpacity }}
        className="absolute left-3 md:left-1/2 transform -translate-x-1/2 w-5 h-5 z-10 block"
      >
        <img src="/dot.avif" alt="" />
      </motion.div>

      {/* Image Content */}
      <div
        className={`w-full md:w-5/12 ${
          isEve ? "md:pr-12" : "md:pl-12"
        } mb-8 md:mb-0`}
      >
        <div className="relative aspect-video   overflow-hidden shadow-2xl group">
          <Image
            src={item.image}
            alt={`Timeline ${item.year}`}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
        </div>
      </div>

      {/* Text Content */}
      <div
        className={`w-full md:w-5/12 ${
          isEve ? "md:pl-12" : "md:pr-12"
        } text-left md:text-left`} // RESPONSIVE CHANGE: Force text-left on mobile for cleaner line look
      >
        <h2
          className="font-switzer text-xl md:text-7xl lg:text-[1.6rem] font-normal tracking-tight leading-none capitalize
 text-[#2D68FF] max-w-5xl mb-2"
        >
          {item.year}
        </h2>
        <h2
          className="font-switzer text-3xl md:text-7xl lg:text-[2.8rem] font-normal tracking-tight leading-none capitalize
 text-[#ECF5FF] max-w-5xl"
        >
          {item.title}
        </h2>
        <p className=" text-lg md:text-[1.4rem] text-white max-w-sm leading-[1] tracking-wide font-normal mt-2">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
};

export default AboutSection2;