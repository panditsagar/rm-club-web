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
        "Explore the markets in which we operate to see where we are turning clients’ ambitions into action.",
      cta: "Discover",
      link: "/markets",
      bgColor: "bg-[#002B4D]", // Slightly lighter/darker than primary-dark for depth
    },
    {
      id: 2,
      title: "Careers",
      description:
        "Browse our current vacancies and see where a career at RM Club could take you.",
      cta: "Search",
      link: "/careers",
      bgColor: "bg-[#003366]", // The core primary-dark
    },
    {
      id: 3,
      title: "Offices",
      description:
        "We have offices in different locations. Find one near you.",
      cta: "Our offices",
      link: "/offices",
      bgColor: "bg-[#002244]", // Darker shade for depth/gradient feel
    },
  ];

  return (
    <section className="w-full grid grid-cols-1 md:grid-cols-3">
      {cards.map((card) => (
        <div
          key={card.id}
          className={`${card.bgColor} px-8 py-16 md:px-12 md:py-20 flex flex-col justify-between min-h-[300px] transition-colors duration-300 hover:brightness-110`}
        >
          <div>
            <h2 className="text-white text-3xl font-serif font-medium mb-6">
              {card.title}
            </h2>
            <p className="text-white/80 text-lg leading-relaxed mb-10 font-sans">
              {card.description}
            </p>
          </div>

          <div>
            <Link
              href={card.link}
              className="inline-flex items-center gap-2 px-6 py-2 border border-white rounded-full text-white text-sm font-semibold tracking-wide   hover:text-primary-dark transition-all duration-300 group"
            >
              {card.cta}
              <FaChevronRight className="text-xs transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
};

export default InfoCardsSection;
