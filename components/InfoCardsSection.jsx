"use client";
import React from "react";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa6";

const InfoCardsSection = () => {
 const cards = [
  {
    id: 1,
    title: "Our Ventures",
    description:
      "Discover the independent businesses operating within the RM Club ecosystem across media, hospitality, travel, real estate, education, and commerce.",
    link: "/ventures",
    bgColor: "bg-[#002B4D]",
  },
  {
    id: 2,
    title: "How We Operate",
    description:
      "Each venture functions independently while benefiting from shared governance, structured oversight, and long-term strategic alignment.",
    link: "/about",
    bgColor: "bg-[#003366]",
  },
  {
    id: 3,
    title: "Long-Term Vision",
    description:
      "RM Club focuses on sustainable growth, responsible expansion, and building real-world enterprises designed to create lasting value.",
    link: "/vision",
    bgColor: "bg-[#002244]",
  },
];

  return (
    <section className="w-full grid grid-cols-1 md:grid-cols-3 ">
      {cards.map((card) => (
        <div
          key={card.id}
          className={`${card.bgColor} px-8 py-16 md:px-12 md:py-20 flex flex-col  justify-between min-h-[300px] transition-colors duration-300 hover:brightness-110`}
        >
          <div>
            <h2 className="text-white text-3xl font-serif font-medium mb-6">
              {card.title}
            </h2>
            <p className="text-white/80 text-lg leading-relaxed   font-sans">
              {card.description}
            </p>
          </div>

          
        </div>
      ))}
    </section>
  );
};

export default InfoCardsSection;
