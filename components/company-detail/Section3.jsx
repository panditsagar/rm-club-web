"use client";

import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";

export default function ThirdSection({company}) {
  return (
    <section className="relative z-30 w-full min-h-screen  flex flex-col justify-center  pt-20  px-6 md:px-26">
      <div className="flex flex-col md:flex-row justify-between items-end mb-10 border-b border-gray-200 pb-6">
        <h1 className="  text-primary-dark text-4xl md:text-5xl lg:text-[2.5rem] tracking-tight leading-tight font-switzer font-normal">
          We envision a transformative decade ahead
        </h1>
      </div>
      <div className="max-w-[1400px] w-full flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
        {/* LEFT COLUMN - IMAGE CARDS STACK (Fixed Width) */}

        {/* RIGHT COLUMN - RICH TEXT CONTENT (Flex Fill) */}
        <div className="flex-1 flex flex-col justify-start text-left ">
          {/* Intro Text */}
          <h2 className="text-primary-dark text-2xl lg:text-3xl tracking-tight leading-[1.2] font-switzer font-normal mb-6  ">
            At RM Club, we believe infrastructure creates opportunity for
            everyone, improving access and sustaining our planet.
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
            lifecycle.  
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
          <p className="text-base text-gray-600 leading-relaxed font-switzer font-normal">
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
            better world. Working throughout the project lifecycle, we’re one
            team driven by a common purpose to deliver a better world. Thinking
            without limits is what keeps us at the vanguard. Working throughout
            the project lifecycle, we’re one team driven by a common purpose to
            deliver a better world. Thinking without limits is what keeps us at
            the vanguard. Working throughout the project lifecycle, we’re one
            team driven by a common purpose to deliver a better world. Thinking
            without limits is what keeps us at the vanguard.
          </p>
        </div>

        <div className="w-full lg:w-[360px] flex-none flex flex-col gap-6">
          
          {/* CARD 1: IMAGE CARD (Using first feature image or fallback) */}
          <div className="bg-white  overflow-hiddengroup">
             <div className="relative h-[430px] w-full overflow-hidden">
               <img
                 src={company?.features?.[0]?.image || "/seven/corporate.png"}
                 alt="Feature Highlight"
                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
               />
             </div>
          </div>

          {/* CARD 2: CONTENT CARD (Our Global Solutions) */}
          <div className="bg-[#E9EDEE] p-8  ">
             <h3 className="text-primary-dark text-xl font-switzer font-bold mb-4">
               Our global {company?.tagline || "Energy"} solutions
             </h3>
             <p className="text-gray-600 text-md leading-relaxed mb-6">
               project lifecycle from advisory and design to implementation, operations and maintenance. Our comprehensive expertise covers every stage of the project lifecycle from advisory and design to implementation, operations and maintenance.
             </p>
             <button className="flex items-center gap-2 text-primary font-bold text-sm tracking-wide hover:gap-3 transition-all">
               Explore <FaArrowRight className="w-4 h-4 text-primary" />
             </button>
          </div>

          {/* CARD 3: CTA CARD (Speak to our team) */}
          <div className="bg-[#E9EDEE] p-8 ">
             <h3 className="text-primary-dark text-xl font-switzer font-bold mb-4">
               Speak to our {company?.tagline || "Energy"} team
             </h3>
             <p className="text-gray-600 text-md leading-relaxed mb-6">
              advisory and design to implementation, operations and maintenance. Get the advice you need, for the {company?.tagline || "energy"} solutions of the future. Inquire today to find out how we can help.
             </p>
             <div className="flex justify-between items-center">
                 <button className="text-primary font-bold text-sm tracking-wide hover:text-primary-dark transition-colors">
                   Contact us
                 </button>
                 <div className="w-8 h-8 rounded-full border-2 border-primary flex items-center justify-center text-primary">
                    <FaArrowRight className="w-4 h-4" />
                 </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
