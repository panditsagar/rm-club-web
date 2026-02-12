"use client";

import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";

export default function ThirdSection() {
  return (
    <section className="relative z-30 w-full min-h-screen   flex flex-col justify-center    px-6 md:px-26">
      <div className="flex flex-col md:flex-row justify-between items-end mb-10 border-b border-gray-200 pb-6">
        <h1 className="  text-primary-dark text-4xl md:text-5xl lg:text-[2.5rem] tracking-tight leading-tight font-switzer font-normal">
          We envision a transformative decade ahead
        </h1>
      </div>
      <div className="max-w-[1400px] w-full flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
        {/* LEFT COLUMN - IMAGE CARDS STACK (Fixed Width) */}
        <div className="w-full lg:w-auto flex-none flex flex-col gap-5">
          {/* CARD 1: Annual Report */}
          <div className="relative w-full lg:w-[380px] h-[400px] group overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-shadow duration-300">
            <img
              src="/seven/corporate.png"
              alt="Annual Report"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90" />
          </div>

          {/* CARD 2: Rankings */}
          <div className="relative w-full lg:w-[380px] h-[400px] group overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-shadow duration-300">
            <img
              src="/seven/realestate.png"
              alt="Rankings"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90" />
          </div>

          {/* CARD 3: Sustainability (NEW) */}
          <div className="relative w-full lg:w-[380px] h-[400px] group overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-shadow duration-300">
            <img
              src="/seven/community.png"
              alt="Sustainability"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90" />
          </div>
        </div>

        {/* RIGHT COLUMN - RICH TEXT CONTENT (Flex Fill) */}
        <div className="flex-1 flex flex-col justify-start text-left pt-2">
          {/* Intro Text */}
          <h2 className="text-primary-dark text-2xl lg:text-3xl tracking-tight leading-[1.2] font-switzer font-normal mb-6  ">
            At RM Club, we believe infrastructure creates opportunity for
            everyone, improving access and sustaining
            our planet.
          </h2>

          <p className="text-base text-gray-600 leading-relaxed font-switzer font-normal  ">
            We’re committed to managing our business with the utmost
            responsibility and to always strive for better — be that reducing
            emissions, delivering social value or creating a welcoming
            workplace. We’re committed to managing our business with
            the upmost responsibility and to always strive for better — be
            that reducing emissions, delivering social value or creating a
            welcoming workplace. We understand both the urgency of the
            challenges facing our society and our responsibility to act in an
            impactful and enduring way. We’re leading the change towards a more
            sustainable and equitable future, partnering with those who want to
            make a positive difference in the world. We’re listening to
            clients and the communities we serve in order to improve lives and
            livelihoods, and to create sustainable legacies for generations to
            come. Thinking without limits is what keeps us at the
            vanguard. Ideas have no borders, and this ethos is embedded in our
            culture. The full scope of our global expertise is available to
            anyone who needs it, wherever they are based. We’re trusted advisors
            — planners, designers, engineers, consultants and program and
            construction managers — delivering professional services spanning
            cities, transportation, buildings, water, new energy, and the
            environment. Working throughout the project lifecycle, we’re one
            team driven by a common purpose to deliver a better world.
          </p>
          <p className="text-base text-gray-600 leading-relaxed font-switzer font-normal mb-12">
            Thinking without limits is what keeps us at the vanguard. Ideas have
            no borders, and this ethos is embedded in our culture. The full
            scope of our global expertise is available to anyone who needs it,
            wherever they are based. The full scope of our global expertise is
            available to anyone who needs it, wherever they are based.
            We’re trusted advisors — planners, designers, engineers, consultants
            and program and construction managers — delivering professional
            services spanning cities, transportation, buildings, water, new
            energy, and the environment. Working throughout the project
            lifecycle, we’re one team driven by a common purpose to deliver a
            better world.
          </p>

          {/* History Section */}
          <h3 className="ext-primary-dark text-2xl lg:text-3xl tracking-tight leading-[1.2] font-switzer font-normal  mb-4">
           The Story Behind Our Growth
          </h3>
          <p className="text-base text-gray-600 leading-relaxed font-switzer font-normal mb-12">
            RM Club launched when a handful of entrepreneurs from diverse
            industries shared a dream of creating an industry-leading ecosystem
            dedicated to delivering a better world. Since then, we have grown
            into a multi-faceted conglomerate acting in an impactful and
            enduring way. Thinking without limits is what keeps us at the
            vanguard. Ideas have no borders, and this ethos is embedded in our
            culture. The full scope of our global expertise is available to
            anyone who needs it, wherever they are based. The full scope of our
            global expertise is available to anyone who needs it,
            wherever they are based. We’re trusted advisors — planners,
            designers, engineers, consultants and program and construction
            managers — delivering professional services spanning cities,
            transportation, buildings, water, new energy, and the environment.
            
          </p>

          {/* Fast Facts Section */}
          <h3 className="ext-primary-dark text-2xl lg:text-3xl tracking-tight leading-[1.2] font-switzer font-normal mb-4">
            The essentials you should know before diving deeper.
          </h3>
          <p className="text-base text-gray-600 leading-relaxed font-switzer font-normal mb-12">
            Thinking without limits is what keeps us at the vanguard. Ideas have
            no borders, and this ethos is embedded in our culture. The full
            scope of our global expertise is available to anyone who needs it,
            wherever they are based. The full scope of our global expertise is
            available to anyone who needs it, wherever they are based.
            We’re trusted advisors — planners, designers, engineers, consultants
            and program and construction managers — delivering professional
            services spanning cities, transportation, buildings, water, new
            energy, and the environment. Working throughout the project
            lifecycle, we’re one team driven by a common purpose to deliver a
            better world.  Working throughout the project lifecycle, we’re one team driven by a
            common purpose to deliver a better world. Thinking without limits is
            what keeps us at the vanguard.  Working throughout the project lifecycle, we’re one team driven by a
            common purpose to deliver a better world. Thinking without limits is
            what keeps us at the vanguard.  Working throughout the project lifecycle, we’re one team driven by a
            common purpose to deliver a better world. Thinking without limits is
            what keeps us at the vanguard.
          </p>
        </div>
      </div>
    </section>
  );
}
