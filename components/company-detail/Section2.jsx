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
      className="h-screen flex items-center justify-center sticky top-0"
    >
      <motion.div
        style={{
          scale,
          top: `calc(5vh + ${i * 25}px)`,
        }}
        className="flex flex-col relative -top-[15%] h-[530px] w-full max-w-6xl p-8 sm:p-14 origin-top     bg-[#E9EDEE] overflow-hidden"
      >
        <div className="flex flex-col md:flex-row h-full gap-12 relative z-10">
          {/* Text Content */}
          <div className="w-full md:w-[45%] flex flex-col justify-center gap-8">
            <h2 className="text-3xl sm:text-5xl font-serif font-medium text-[#0054A6] leading-[1.1] tracking-tight">
              {title}
            </h2>
            <p className="text-xl text-gray-700 font-sans font-normal leading-relaxed">
              {description}
            </p>
          </div>

          {/* Image Content */}
          <div className="w-full md:w-[55%] relative h-full  overflow-hidden bg-gray-100">
            <motion.div
              className="w-full h-full relative"
              style={{ scale: imageScale }}
            >
              {src ? (
                <img
                  src={src}
                  alt={title}
                  className="object-cover w-full h-full   transition-all duration-700 ease-in-out"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm uppercase tracking-widest">
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
    <div ref={container} className=" relative pb-20 px-5  ">
      <div className="max-w-[1300px] mx-auto flex flex-col gap-0">
      

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
    </div>
  );
}
