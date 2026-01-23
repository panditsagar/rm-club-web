"use client";

import Image from "next/image";
import { motion } from "framer-motion";

 
 

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
  return (
    <section className="bg-[#080618] py-20 lg:py-10 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 md:px-10 w-full">
        {/* --- CEO Feature Section --- */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-25 justify-between">
          {/* Left Column: Quote */}
          <motion.div
            custom={0} // Stagger index
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeInUp}
            className="w-full lg:w-1/3 text-gray-300 flex flex-col items-center lg:items-start gap-4 text-center lg:text-left order-2 lg:order-none"
          >
            <Image src="/comma.svg" alt="" width={0} height={0} sizes="100vw" className="h-10 w-auto lg:h-14 lg:w-auto" />
            <p className="text-xl lg:text-2xl text-white font-medium leading-[1.2] lg:leading-[1] font-author">
              {company.founder.quote}
            </p>
          </motion.div>

          {/* Middle Column: CEO Image */}
          <motion.div
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeInUp}
            className="relative w-full max-w-[400px] lg:w-1/3 order-1 lg:order-none"
          >
            <Image
              src={company.founder.imageUrl}
              alt={company.founder.name}
              width={400}
              height={500}
              className="mx-auto scale-100 lg:scale-120 [mask-image:linear-gradient(to_bottom,white_80%,transparent_100%)] [mask-repeat:no-repeat] [mask-size:100%_100%] bg-[#080618]"
            />
          </motion.div>

          {/* Right Column: CEO Name & Title */}
          <motion.div
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeInUp}
            className="w-full lg:w-1/3 text-center lg:text-left order-3 lg:order-none"
          >
            <h2 className="text-3xl lg:text-5xl font-extrabold text-white font-jakarta">
              {company.founder.name}
            </h2>
            <p className="text-[#002FFF] text-xl lg:text-2xl font-[500] mt-2 lg:mt-4 font-author">
              {company.founder.title}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}