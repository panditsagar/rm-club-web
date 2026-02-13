"use client";

import React from "react";
import { FaShieldAlt } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";
import { FaRegCommentDots } from "react-icons/fa";
import { FaAngleDoubleRight } from "react-icons/fa";

const services = [
  {
    id: 1,
    title: "Ecosystem Governance",
    description:
      "A structured oversight framework that aligns independent ventures through shared standards, accountability, and long-term strategic coordination.",
    icon: FaShieldAlt,
    cta: "Explore Governance",
  },
  {
    id: 2,
    title: "Strategic Expansion",
    description:
      "Disciplined sector diversification across media, hospitality, travel, commerce, education, and community platforms with sustainable growth focus.",
    icon: FaChartLine,
    cta: "View Growth Strategy",
  },
  {
    id: 3,
    title: "Operational Excellence",
    description:
      "Centralized systems, performance monitoring, and cross-venture collaboration designed to strengthen efficiency and long-term stability.",
    icon: FaRegCommentDots,
    cta: "See Our Framework",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-10  ">
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

              <h3 className="text-3xl  font-normal text-primary-dark mb-6 font-switzer leading-tight">
                {service.title}
              </h3>

              <p className="text-gray-500 text-md leading-relaxed mb-8 font-medium">
                {service.description}
              </p>

              <a
                href="#"
                className="mt-auto inline-flex items-center text-sm font-bold text-primary uppercase tracking-wider hover:text-primary-dark transition-colors border-b-2 border-transparent hover:border-primary pb-1"
               >
                {service.cta} 
                <FaAngleDoubleRight size={14} className="ml-2 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
