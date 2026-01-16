"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const ceoData = {
  name: "Sagar Pandit",
  title: " CEO & Founder of Rm Club",
  quote:
    "At Rm Club, we don’t just build websites and apps  we craft digital experiences that connect, inspire, and drive results. Every product we create is designed to make a meaningful impact.",
  imageUrl: "/sagar.png",
};

 

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

export default function TeamSection() {
  return (
    <section className="bg-[#080618] py-10 h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-10 ">
        {/* --- CEO Feature Section --- */}
        <div className="flex  items-center gap-25 justify-between">
          {/* Left Column: Quote */}
          <motion.div
            custom={0} // Stagger index
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeInUp}
            className="lg:col-span-1 w-1/3 text-gray-300 flex flex-col items-start gap-4"
          >
            <Image src="/comma.svg" alt="" width={0} height={0} sizes="100vw" className="h-14 w-auto" />
            <p className="text-2xl text-white font-medium leading-[1] font-author">
              {ceoData.quote}
            </p>
          </motion.div>

          {/* Middle Column: CEO Image */}
          <motion.div
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeInUp}
            className="relative w-1/3 lg:col-span-1 order-first lg:order-none"
          >
            <Image
              src={ceoData.imageUrl}
              alt={ceoData.name}
              width={400}
              height={500}
              className="mx-auto scale-120 [mask-image:linear-gradient(to_bottom,white_80%,transparent_100%)] [mask-repeat:no-repeat] [mask-size:100%_100%] bg-[#080618]"
            />
          </motion.div>

          {/* Right Column: CEO Name & Title */}
          <motion.div
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeInUp}
            className="lg:col-span-1 w-1/3 text-center lg:text-left"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-white font-jakarta">
              {ceoData.name}
            </h2>
            <p className="text-[#002FFF]  text-2xl font-[500] mt-4 font-author">
              {ceoData.title}
            </p>
          </motion.div>
        </div>

         
       
      </div>
    </section>
  );
}