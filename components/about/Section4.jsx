"use client";

import React from "react";
import { FaShieldAlt } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";
import { FaRegCommentDots } from "react-icons/fa";
import { FaAngleDoubleRight } from "react-icons/fa";

const services = [
  {
    id: 1,
    title: "Insurance",
    description:
      "Comprehensive coverage plans designed to protect your assets, health, and loved ones against unforeseen risks.",
    icon: FaShieldAlt,
  },
  {
    id: 2,
    title: "Investment",
    description:
      "Strategic investment solutions and portfolio management tailored to grow your wealth and achieve financial goals.",
    icon: FaChartLine,
  },
  {
    id: 3,
    title: "Consultation",
    description:
      "Expert financial advice and personalized consultation sessions to guide you through complex financial decisions.",
    icon: FaRegCommentDots,
  },
];

export default function ServicesSection() {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-[1300px] mx-auto px-6">
    
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
          {services.map((service) => (
            <div
              key={service.id}
              className="px-6 py-8 md:px-10 flex flex-col items-start text-left group"
            >
              <div className="mb-8 p-0 transition-transform duration-300 group-hover:scale-110">
                <service.icon
                  strokeWidth={1.5}
                  size={42}
                  className="text-primary"
                />
              </div>

              <h3 className="text-3xl md:text-4xl font-normal text-primary-dark mb-6 font-switzer leading-tight">
                {service.title}
              </h3>

              <p className="text-gray-500 text-lg leading-relaxed mb-8 font-medium">
                {service.description}
              </p>

              <a
                href="#"
                className="mt-auto inline-flex items-center text-sm font-bold text-primary uppercase tracking-wider hover:text-primary-dark transition-colors border-b-2 border-transparent hover:border-primary pb-1"
               >
                Learn More
                <FaAngleDoubleRight size={14} className="ml-2 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
