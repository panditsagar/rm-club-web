"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Card = ({ i, title, description, src, progress, range, targetScale }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0 "
    >
      <motion.div
        style={{
          scale,
          backgroundColor: "#fff", 
          top: `calc(5vh + ${i * 25}px)`,
        }}
        className="flex flex-col relative -top-[15%] h-[500px] w-full max-w-5xl p-5 sm:p-14 origin-top border border-gray-200 shadow-2xl rounded-sm"
      >
        <div className="flex flex-col md:flex-row h-full gap-10 relative z-10">
          {/* Text Content */}
          <div className="w-full md:w-[40%] flex flex-col justify-center gap-6">
            <h2
              className="text-2xl sm:text-4xl font-bold font-switzer text-primary-dark leading-tight"
            >
              {title}
            </h2>
            <p className="text-lg text-gray-600 font-normal leading-relaxed">
              {description}
            </p>
          </div>

          {/* Image Content */}
          <div className="w-full md:w-[60%] relative h-full rounded-sm overflow-hidden bg-gray-100">
            <motion.div
              className="w-full h-full relative"
              style={{ scale: imageScale }}
            >
              {src ? (
                <img
                  src={src}
                  alt="image"
                  className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
                />
              ) : (
                <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">
                  No Image Available
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default function Section2({ company }) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  if (!company || !company.features) return null;

  return (
    <div
      ref={container}
      className="relative mt-[10vh] mb-[4vh] sm:mb-[20vh] px-5 bg-white"
    >
      {/* Top Gradient Blend Removed */}
      <h2 className="text-end text-[2.5rem] lg:text-[4.5rem] tracking-tight leading-none font-switzer font-bold sm:mr-20 max-w-lg m-auto text-primary-dark mb-20">
        Our Core Value Offerings
      </h2>
      {company.features.map((feature, i) => {
        const targetScale = 1 - (company.features.length - i) * 0.05;

        return (
          <Card
            key={i}
            i={i}
            title={feature.title}
            description={feature.description}
            src={feature.image}
            progress={scrollYProgress}
            range={[i * 0.25, 1]}
            targetScale={targetScale}
          />
        );
      })}
    </div>
  );
}
