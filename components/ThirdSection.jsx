"use client";

import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";

export default function ThirdSection() {
  return (
    <section className="relative z-30 w-full min-h-screen flex flex-col justify-center px-6 md:px-26 pt-10">
      <div className="flex flex-col md:flex-row justify-between items-end mb-10 border-b border-gray-200 pb-6">
        <h1 className="text-[#0f172a] text-4xl md:text-5xl font-bold tracking-tight">
          Building an Enduring Ecosystem
        </h1>
      </div>

      <div className="max-w-[1400px] w-full flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
        {/* LEFT COLUMN - IMAGE CARDS STACK */}
        <div className="w-full lg:w-auto flex-none flex flex-col gap-5">
          <div className="relative w-full lg:w-[380px] h-[400px] group overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-shadow duration-300">
            <img
              src="/seven/corporate.png"
              alt="Ecosystem Overview"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90" />
          </div>

          <div className="relative w-full lg:w-[380px] h-[400px] group overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-shadow duration-300">
            <img
              src="/seven/realestate.png"
              alt="Real Estate & Enterprise"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90" />
          </div>

          <div className="relative w-full lg:w-[380px] h-[400px] group overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-shadow duration-300">
            <img
              src="/seven/community.png"
              alt="Community Initiatives"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90" />
          </div>
        </div>

        {/* RIGHT COLUMN - CONTENT */}
        <div className="flex-1 flex flex-col justify-start text-left pt-2">
          <h2 className="text-primary-dark text-2xl lg:text-3xl tracking-tight leading-[1.2] font-switzer font-normal mb-6">
            At RM Club, we believe structured collaboration creates long-term
            opportunity strengthening enterprises, supporting communities, and
            building stability across sectors.
          </h2>

          <p className="text-base text-gray-600 leading-relaxed font-switzer font-normal">
            RM Club operates as a coordinated multi-venture ecosystem spanning
            media, hospitality, travel, real estate, education, and commerce.
            Each initiative within the ecosystem maintains its own leadership
            and operational independence, while aligning with shared governance
            principles that ensure clarity, accountability, and strategic
            discipline. Our commitment is not to short-term acceleration, but to
            sustainable growth that strengthens foundations over time.
          </p>

          <p className="text-base text-gray-600 leading-relaxed font-switzer font-normal mb-12">
            We approach development with responsibility and measured intent.
            Every venture is evaluated not only on commercial performance, but
            also on its structural resilience, operational maturity, and
            long-term relevance. Rather than pursuing rapid expansion, we
            prioritize durability, responsible decision-making, and ecosystem
            stability. Through disciplined coordination and practical execution,
            RM Club aims to create enterprises that remain adaptable and
            community-rooted in a changing environment.
          </p>
          <h3 className="text-primary-dark text-2xl lg:text-3xl tracking-tight leading-[1.2] font-switzer font-normal mb-4">
            The Story Behind Our Growth
          </h3>

          <p className="text-base text-gray-600 leading-relaxed font-switzer font-normal mb-6">
            RM Club began when entrepreneurs from diverse industries recognized
            the value of structured collaboration. Instead of building isolated
            ventures, they chose to create an ecosystem that would preserve
            independence while strengthening coordination. Early growth focused
            on reinforcing operational discipline and aligning long-term
            objectives before expanding into additional sectors. This measured
            approach allowed the ecosystem to mature organically, ensuring that
            each initiative contributed meaningfully to the broader structure.
            Rather than scaling rapidly, RM Club prioritized clarity in
            governance, stability in execution, and resilience in operations.
            Foundations were strengthened before new initiatives were
            introduced, creating a stable base for sustainable expansion.
          </p>

          <p className="text-base text-gray-600 leading-relaxed font-switzer font-normal mb-6">
            As the ecosystem expanded across media, hospitality, travel, real
            estate, education, and commerce, the balance between autonomy and
            shared governance became the defining strength of the model. Each
            venture retained its entrepreneurial identity while benefiting from
            coordinated oversight and long-term strategic alignment. Growth has
            remained deliberate and disciplined — guided by real demand,
            responsible planning, and ecosystem cohesion rather than short-lived
            momentum. RM Club continues to evolve through thoughtful expansion,
            ensuring that every new initiative strengthens both its own
            foundation and the broader network it becomes part of.
          </p>

          <h3 className="text-primary-dark text-2xl lg:text-3xl tracking-tight leading-[1.2] font-switzer font-normal mb-4">
            What Defines RM Club
          </h3>

          <p className="text-base text-gray-600 leading-relaxed font-switzer font-normal mb-6">
            RM Club is defined by structure, independence, and long-term
            discipline. Each venture within the ecosystem operates with
            autonomous leadership, ensuring entrepreneurial focus and
            operational agility. At the same time, shared governance principles
            provide alignment, accountability, and coordinated direction across
            the broader network.
          </p>

          <p className="text-base text-gray-600 leading-relaxed font-switzer font-normal mb-6">
            Strategic clarity remains central to how we function. Decisions are
            guided by measured planning rather than momentum, and expansion is
            approached responsibly rather than reactively. This balance between
            independence and coordination allows RM Club to remain adaptable
            while maintaining structural stability.
          </p>

          <p className="text-base text-gray-600 leading-relaxed font-switzer font-normal mb-6">
            We emphasize long-term value creation over short-term acceleration.
            Ventures are evaluated not only for commercial performance, but also
            for operational strength, community relevance, and ecosystem
            contribution. Sustainable growth, financial prudence, and
            disciplined execution form the foundation of our decision-making.
            Ultimately, RM Club is defined by its ability to combine
            entrepreneurial initiative with institutional oversight fostering
            innovation while preserving stability. Through this balanced
            framework, the ecosystem continues to evolve in a deliberate,
            responsible, and enduring manner.
          </p>
        </div>
      </div>
    </section>
  );
}
