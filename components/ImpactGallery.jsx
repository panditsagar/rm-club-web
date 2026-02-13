"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaExternalLinkAlt } from "react-icons/fa";

const ImpactCard = ({ title, description, image }) => {
  return (
    <div className="group relative w-full overflow-hidden h-[400px] md:h-[500px]   shadow-lg">
      {/* Background Image */}
      <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      {/* Overlay - Gradient from bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90 transition-opacity duration-300"></div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 w-full p-8 md:p-10 flex flex-col items-start justify-end h-full">
        <h3 className="text-3xl md:text-3xl text-white font-switzer font-bold mb-3 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
          {title}
        </h3>

        <p className="text-gray-200 text-lg md:text-lg font-normal leading-[1.2] mb-6 max-w-lg opacity-90 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100 hidden md:block">
          {description}
        </p>

        <p className="text-gray-200 text-sm md:text-base font-normal leading-relaxed mb-6 max-w-lg opacity-90 md:hidden block">
          {description}
        </p>
      </div>
    </div>
  );
};

export default function ImpactGallery() {
  return (
    <section className=" py-20 px-6 md:px-12 lg:px-26  ">
      <div className="max-w-[1500px] mx-auto  ">
        {/* --- SECTION 1: SOCIAL IMPACT (2 Column) --- */}
        <div className="mb-20">
          <h2 className="text-primary-dark text-4xl md:text-[2.5rem] font-switzer font-normal mb-10 tracking-tight  border-b border-gray-200 pb-6">
            Community & Welfare
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ImpactCard
              title="Education & Learning"
              description="Through Jawa Poonp, RM Club supports community-based learning initiatives focused on foundational education and rural access."
              image="/impact/education.png"
              isExternal={true}
            />
            <ImpactCard
              title="Community Support"
              description="We encourage locally driven welfare efforts that strengthen families, promote awareness, and contribute to long-term community stability."
              image="/impact/health.png"
              isExternal={true}
            />
          </div>
        </div>

        {/* --- SECTION 2: CORPORATE EXCELLENCE (Mix Grid) --- */}
        <div>
          <h2 className="text-primary-dark text-4xl md:text-[2.5rem] font-switzer font-normal mb-10 tracking-tight  border-b border-gray-200 pb-6">
            Ecosystem Strength
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Large Featured Card */}
            <div className="md:col-span-2">
              <ImpactCard
                title="Multi-Sector Operations"
                description="RM Club operates independent ventures across media, hospitality, travel, real estate, education, and commerce coordinated through a shared long-term framework."
                image="/impact/energy.png"
              />
            </div>

            {/* Smaller Card */}
            <div className="md:col-span-1">
              <ImpactCard
                title="Independent Leadership"
                description="Each venture within RM Club maintains its own leadership while aligning with shared governance principles."
                image="/impact/diversity.png"
              />
            </div>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            {/* Smaller Card */}
            <div className="md:col-span-1">
              <ImpactCard
                title="Responsible Growth"
                description="We prioritize structured expansion, operational clarity, and sustainability across all RM Club ventures."
                image="/impact/diversity.png"
              />
            </div>
            {/* Large Featured Card */}
            <div className="md:col-span-2">
              <ImpactCard
                title="Long-Term Value Creation"
                description="RM Club focuses on building durable enterprises rooted in real demand and community relevance rather than short-term acceleration."
                image="/impact/energy.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
