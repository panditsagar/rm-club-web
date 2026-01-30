"use client";
import React from "react";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa6";

const InfoCardsSection = () => {
  const cards = [
    {
      id: 1,
      title: "Markets",
      description:
        "Explore the markets in which we operate to see where we are turning clients’ ambitions into action.  career at RM Club could take you.",
      
      link: "/markets",
      bgColor: "bg-[#002B4D]", // Slightly lighter/darker than primary-dark for depth
    },
    {
      id: 2,
      title: "Careers",
      description:
        "Browse our current vacancies and see where a career at RM Club could take you.  career at RM Club could take you.",
   
      link: "/careers",
      bgColor: "bg-[#003366]", // The core primary-dark
    },
    {
      id: 3,
      title: "Offices",
      description:
        "We have offices in different locations. Find one near you.  career at RM Club could take you.",
       
      link: "/offices",
      bgColor: "bg-[#002244]", // Darker shade for depth/gradient feel
    },
  ];

  return (
    <section className="w-full grid grid-cols-1 md:grid-cols-3 ">
      {cards.map((card) => (
        <div
          key={card.id}
          className={`${card.bgColor} px-8 py-16 md:px-12 md:py-26 flex flex-col  justify-between min-h-[300px] transition-colors duration-300 hover:brightness-110`}
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
