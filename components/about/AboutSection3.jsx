"use client";
import React from "react";
import Image from "next/image";
import { FaChevronRight } from "react-icons/fa6";
import { motion } from "framer-motion";

const contentData = [
  {
    id: "vision",
    kicker: "Purpose-driven growth",
    title:
      "Building a unified ecosystem across diverse sectors and industries",
    description:
      "We envision RM Club as a structured network where independent ventures operate with clarity and long-term alignment. A future where growth is coordinated, sustainable, and guided by shared governance.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
    buttonLink: "#",
  },
  {
    id: "philosophy",
    kicker: "Strengthening the core",
    title:
      "Independence supported by structure, oversight, and shared direction",
    description:
      "At RM Club, we believe resilience comes from balance. Each venture preserves its identity while benefiting from operational discipline, strategic coordination, and long-term planning that reinforces stability.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop",
    buttonLink: "#",
  },
  {
    id: "mission",
    kicker: "Empowering the future",
    title:
      "Creating ventures that generate enduring economic and community value",
    description:
      "Our mission is to strengthen businesses through governance, accountability, and responsible expansion. We build ventures that are sustainable, aligned, and positioned for steady growth while contributing to communities.",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
    buttonLink: "#",
  },
];
const AboutSection3 = () => {
  return (
    <section className="w-full   py-20 px-5 md:px-0">
      <div className="max-w-[1300px] mx-auto flex flex-col gap-0">
        {/* HEADER - Matched to SecondSection.jsx */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 border-b border-gray-200 pb-6">
          <h1 className="text-primary-dark text-4xl md:text-5xl lg:text-[2.5rem] tracking-tight leading-tight font-switzer font-normal">
            Our Journey of Innovation
          </h1>

          {/* Optional Right Side (Can be empty or a CTA) */}
          <div className="hidden md:block">
            {/* Placeholder for alignment if needed, or remove */}
          </div>
        </div>
        {contentData.map((item, index) => {
          const isImageLeft = index % 2 === 0;

          return (
            <div
              key={item.id}
              className={` flex flex-col md:flex-row w-full min-h-[350px] cursor-pointer`}
            >
              {/* --- IMAGE SIDE --- */}
              <div
                className={`w-full md:w-1/2 relative h-[250px] md:h-auto overflow-hidden order-1 group ${
                  isImageLeft ? "md:order-1" : "md:order-2"
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 "
                />

                {/* --- HOVER NOTE OVERLAY (Styled like FourthSection Tooltip) --- */}
                <div className="absolute bottom-14 right-10 w-[280px] pointer-events-none z-20 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out hidden md:block">
                  <div className="relative bg-white border border-gray-200 p-6 text-left shadow-2xl">
                    <div className="absolute -top-2 left-4 w-4 h-4 bg-white border-t border-l border-gray-200 transform rotate-45"></div>

                    <h4 className="text-md font-medium text-primary-dark leading-tight  ">
                      {item.title}
                    </h4>
                  </div>
                </div>
              </div>

              {/* --- CONTENT SIDE --- */}
              <div
                className={`w-full md:w-1/2 p-8 group md:p-12 flex flex-col justify-center transition-colors duration-300 hover:bg-[#0054A6]/80   order-2 ${
                  isImageLeft ? "md:order-2" : "md:order-1"
                }`}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  {/* Kicker */}
                  <span className="block text-lg font-medium text-black/80 group-hover:text-white/90 mb-4 tracking-widest transition-colors duration-300">
                    {item.kicker}
                  </span>

                  {/* Description (Big Description) */}
                  <p className="text-xl md:text-2xl lg:text-[1.8rem] font-medium text-black group-hover:text-white leading-[1.4] mb-8 max-w-xl transition-colors duration-300">
                    {item.description}
                  </p>
                </motion.div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default AboutSection3;
