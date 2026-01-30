"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 1,
      ease: "easeOut",
    },
  }),
};

export default function TeamSection({ company }) {
  if (!company?.founder) return null;

  return (
    <section className="bg-white py-12 lg:py-16">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* --- Left Column: Image (5 cols) --- */}
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="lg:col-span-4 w-full relative"
          >
             <div className="relative aspect-[4/8] w-full max-h-[450px] overflow-hidden shadow-lg bg-gray-100 mx-auto">
                <Image
                  src={company.founder.imageUrl}
                  alt={company.founder.name}
                  fill
                  className="object-cover object-top"
                />
             </div>
          </motion.div>

          {/* --- Right Column: Message (7 cols) --- */}
          <motion.div
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="lg:col-span-8 flex flex-col justify-center  pt-2"
          >
          

             {/* Opening Quote */}
             <div className="mb-4">
                <FaQuoteLeft className="text-primary text-4xl lg:text-5xl opacity-100" />
             </div>

             {/* Message Text */}
             <p className="text-lg lg:text-xl text-gray-700 leading-relaxed font-normal font-switzer mb-6 lg:mb-8">
               {company.founder.quote}
             </p>

             {/* Bottom Row: Name + Closing Quote */}
             <div className="flex justify-between mt-auto">
                <div>
                   <h3 className="text-xl lg:text-2xl font-bold text-primary-dark font-switzer mb-2">
                     {company.founder.name}
                   </h3>
                   <p className="text-gray-700 text-base lg:text-lg  font-normal font-switzer">
                     {company.founder.title}
                   </p>
                </div>

                <div className="hidden md:block">
                   <FaQuoteRight className="text-primary text-4xl lg:text-5xl opacity-100" />
                </div>
             </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
