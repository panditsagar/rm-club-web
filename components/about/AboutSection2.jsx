"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6"; // Standard arrow

const timelineData = [
  {
    year: "2021",
    title: "Ecosystem Vision Formed",
    description:
      "Entrepreneurs across media, hospitality, commerce, and community initiatives aligned around a shared governance model to build a structured multi-venture ecosystem.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2940&auto=format&fit=crop",
  },
  {
    year: "2022",
    title: "Foundational Ventures Launched",
    description:
      "Initial ventures including Jansanket and City View Restaurant began operations, establishing operational discipline and centralized oversight standards.",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2940&auto=format&fit=crop",
  },
  {
    year: "2023",
    title: "Sector Diversification",
    description:
      "Expansion into travel (RM Trek), commerce (RM Shop), and music platforms strengthened the ecosystem’s multi-sector footprint.",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2940&auto=format&fit=crop",
  },
  {
    year: "2024",
    title: "Governance & Structure Consolidation",
    description:
      "Implementation of standardized reporting systems, financial controls, and performance frameworks across independent ventures.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940&auto=format&fit=crop",
  },
  {
    year: "2025",
    title: "Ecosystem Strengthening",
    description:
      "Operational integration enhanced collaboration between ventures while preserving autonomy through a disciplined governance structure.",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2940&auto=format&fit=crop",
  },
  {
    year: "2026",
    title: "Measured Expansion & Long-Term Positioning",
    description:
      "Focused on sustainable scaling, cross-sector coordination, and long-term strategic alignment rather than rapid, unsustainable growth.",
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
        <h2 className="text-primary-dark text-4xl md:text-[2.5rem] font-switzer font-normal mb-10 tracking-tight  border-b border-gray-200 pb-6">
          Here's How We Got Started
        </h2>

        {/* TIMELINE CONTAINER */}
        <div ref={containerRef} className="relative">
          {/* Central Line (Desktop) / Left Line (Mobile) */}
          <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-[1px] bg-gray-200 block">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-primary relative"
            >
              {/* Moving Dot */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-4 h-4 z-20 bg-primary rounded-full border-2 border-white shadow-md"></div>
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
    [0, 1],
  );
  const dotOpacity = useTransform(
    progress,
    [threshold - 0.01, threshold + 0.05],
    [0, 1],
  );

  return (
    <motion.div
      style={{ y, scale }}
      className={`flex flex-col md:flex-row items-center justify-center gap-30 relative pl-10 md:pl-0 ${
        isEve ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      {/* Static Dot */}
      <motion.div
        style={{ scale: dotScale, opacity: dotOpacity }}
        className="absolute left-[0.85rem] md:left-1/2 transform -translate-x-1/2 w-4 h-4 z-10 block bg-primary rounded-full border-2 border-white shadow-sm"
      ></motion.div>

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
      <div className={`w-full md:w-[35%] text-left md:text-left`}>
        <h2 className="font-switzer text-sm md:text-2xl font-bold tracking-wide leading-none uppercase text-primary mb-2">
          {item.year}
        </h2>
        <h3 className="font-switzer text-2xl md:text-4xl font-medium font-serif     text-primary-dark mb-3">
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
