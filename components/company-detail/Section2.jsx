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
          backgroundColor: "#080618", // Fallback
          top: `calc(5vh + ${i * 25}px)`,
        }}
        className="flex flex-col relative -top-[15%] h-[500px] w-full max-w-5xl   p-10 origin-top border border-white/20    "
      >
        <div className="absolute -top-1 -left-1 w-2 h-2 bg-[#002FFF] z-50" />
        <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#002FFF] z-50" />
        <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-[#002FFF] z-50" />
        <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-[#002FFF] z-50" />

        <div className="flex flex-col md:flex-row h-full gap-10 relative z-10">
          {/* Text Content */}
          <div className="w-full md:w-[40%] flex flex-col justify-center gap-6">
            <h2
              className="text-4xl font-bold font-jakarta text-white leading-tight"
              style={{ textShadow: "0 0 20px rgba(255,255,255,0.1)" }}
            >
              {title}
            </h2>
            <p className="text-lg text-white/70 font-light leading-relaxed">
              {description}
            </p>
          </div>

          {/* Image Content */}
          <div className="w-full md:w-[60%] relative h-full rounded-xl overflow-hidden bg-black/50">
            <motion.div
              className="w-full h-full relative"
              style={{ scale: imageScale }}
            >
              {src ? (
                <img
                  src={src}
                  alt="image"
                  className="object-cover w-full h-full"
                />
              ) : (
                <div className="w-full h-full bg-neutral-800 flex items-center justify-center text-white/20">
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
    <div ref={container} className="relative mt-[20vh] mb-[20vh] ">
      <div className="absolute top-0 z-50 left-0 w-full h-[200px] -translate-y-full bg-gradient-to-t from-[#080618] to-transparent pointer-events-none" />
      <h2 className="text-end lg:text-[4.5rem] tracking-tight leading-none font-jakarta font-medium mr-20 max-w-lg m-auto">
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
