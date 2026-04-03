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
      className="h-screen flex items-center justify-center sticky top-30"
    >
      <motion.div
        style={{
          
           
        }}
        className="flex flex-col relative -top-[10%] h-[600px] w-full   rounded-[20px] overflow-hidden"
      >
        {/* Background Image filling the entire card area */}
        <div className="absolute inset-0 z-0 bg-gray-200">
          <motion.div
            className="w-full h-full relative"
            
          >
            {src ? (
              <img
                src={src}
                alt={title}
                className="object-cover w-full h-full"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm uppercase tracking-widest bg-gray-100">
                No Image Available
              </div>
            )}
          </motion.div>
        </div>

        {/* Floating White Content Card */}
        <div className="absolute top-10 left-10 bottom-10 md:top-16 md:left-16 md:bottom-16 w-[90%] md:w-[450px] bg-white rounded-[20px] flex flex-col justify-between p-10 z-10 ">
          <div>
            {/* Logo / Icon */}
            <div className="mb-14 text-[#4F55F1]">
              <svg width="44" height="44" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round">
                <path d="M12 16l12 -8l12 8v16l-12 8l-12 -8v-16z" />
                <path d="M12 16l12 8l12 -8" />
                <path d="M24 24v16" />
              </svg>
            </div>

            <h2 className="text-[32px] sm:text-[40px] font-bold text-[#0f172a] leading-[1.1] tracking-tight mb-5">
              {title}
            </h2>
            <p className="text-[15px] sm:text-[16px] text-[#64748b] font-normal leading-relaxed pr-4">
              {description}
            </p>
          </div>

          <div className="mt-8">
            <div className="w-full border-b border-gray-300 mb-6"></div>
            <a href="#" className="flex items-center gap-2 text-[#0f172a] font-semibold text-[18px] hover:text-[#4F55F1] transition-colors group">
              Learn More
              <svg className="transition-transform group-hover:translate-x-1 text-[#4F55F1]" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default function PortfolioGrid2() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  // Sample data - replace with actual company data if available
  const company = {
    features: [
      {
        title: "Real-time Analytics",
        description: "AI-powered insights that optimize performance and uncover new opportunities.",
        image: "/contact.png"
      },
      {
        title: "Automated Workflows",
        description: "Streamline your processes with our automated workflow solutions.",
        image: "/about.png"
      },
      {
        title: "Intelligent Customer Support",
        description: "Provide exceptional customer service with our AI-driven support solutions.",
        image: "/team.png"
      },
      {
        title: " Predictive Maintenance",
        description: "Anticipate and prevent equipment failures with our predictive maintenance solutions.",
        image: "/form.jpg"
      },
      {
        title: " AI-Powered Personalization",
        description: " Deliver personalized experiences to your customers with our AI-powered personalization tools.",
        image: "/contact.png"
      },
      {
        title: "Edge AI Solutions",
        description: "Bring AI capabilities to the edge with our cutting-edge edge AI solutions.",
        image: "/about.png"
      },
      {
        title: "AI-Driven Cybersecurity",
        description: "Protect your assets with our AI-powered cybersecurity solutions.",
        image: "/team.png"
      },
    ]
  };

  if (!company || !company.features) return null;

  return (
    <div ref={container} className="relative  px-26">
      <div className="max-w-[1400px] mx-auto flex flex-col gap-0">
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
