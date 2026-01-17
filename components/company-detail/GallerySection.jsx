"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";

const tags = [
  "AI Chat Assistant",
  "Flower planting",
  "Data Integration",
  "Workflow Builder",
  "Visual Media Creator"
];

const positions = [
  { top: "17%", left: "15%", rotate: -5 },   // Top Left
  { top: "50%", left: "10%", rotate: 5 },    // Mid Left
  { top: "83%", left: "15%", rotate: -8 },   // Bot Left
  { top: "51%", left: "88%", rotate: -7 },   // Mid Right (Moved down/right)
  { top: "85%", left: "85%", rotate: 3 },    // Bot Right
  { top: "15%", left: "50%", rotate: 6 },    // Top Center
  { top: "90%", left: "50%", rotate: -6 },   // Bot Center
];

export default function GallerySection({ company }) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  // 0. SMOOTH SCROLL PROGRESS
  // Using a spring makes the values "follow" the scroll with momentum, killing jitter
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // 1. SCATTER ANIMATION
  // Input: [0, 0.4] -> First 40% of scroll is for scattering
  const scatterScale = useTransform(smoothProgress, [0, 0.3], [1, 0.6]); 
  
  // 2. TEXT REVEAL ANIMATION
  // Input: [0.6, 0.9] -> Text fades in
  const textOpacity = useTransform(smoothProgress, [0.6, 0.8], [0, 1]);
  const textScale = useTransform(smoothProgress, [0.6, 0.8], [0.8, 1]);
  // Removed galleryOpacity fade out, images stay visible

  if (!company?.gallery) return null;

  // Ensure we have enough images by repeating
  const allImages = [...company.gallery, ...company.gallery, ...company.gallery].slice(0, 8);
  const centerImage = allImages[0];
  const surroundingImages = allImages.slice(1);

  return (
    <section ref={container} className="relative h-[300vh] bg-[#080618] pb-40">
       {/* Bottom Gradient Blend */}
       <div className="absolute bottom-0 z-40 left-0 w-full h-[200px] bg-gradient-to-b from-[#080618] to-transparent translate-y-full pointer-events-none" />

      <div className="sticky top-0 h-screen w-full   flex items-center justify-center">
        
        {/* --- SCATTERED IMAGES --- */}
        <motion.div className="absolute inset-0 w-full h-full">
           {/* Center Image (The anchor) - Moves to top-right corner */}
           <motion.div
            style={{ 
                scale: useTransform(smoothProgress, [0, 0.3], [1.5, 0.8]), // Scaled down to match others (400px * 0.6 ~= 240px)
                top: useTransform(smoothProgress, [0, 0.3], ["50%", "20%"]), 
                left: useTransform(smoothProgress, [0, 0.3], ["50%", "85%"]), 
                x: "-50%",
                y: "-58%",
                zIndex: 20
            }}
            className="absolute w-[280px] h-[300px] md:w-[280px] md:h-[300px] rounded-2xl overflow-hidden shadow-2xl"
           >
             <img src={centerImage} alt="Main" className="w-full h-full object-cover" />
           </motion.div>

           {/* Surrounding Images */}
           {surroundingImages.map((src, i) => {
             const pos = positions[i % positions.length];
             
             // Calculate target positions based on scroll
             // Start at center (50%, 50%), move to pos.top/left
             const targetTop = pos.top;
             const targetLeft = pos.left;
             
             const top = useTransform(smoothProgress, [0, 0.4], ["50%", targetTop]);
             const left = useTransform(smoothProgress, [0, 0.4], ["50%", targetLeft]);
             const x = useTransform(smoothProgress, [0, 0.4], ["-50%", "-50%"]);
             const y = useTransform(smoothProgress, [0, 0.4], ["-50%", "-50%"]);
             const rotate = useTransform(smoothProgress, [0, 0.4], [0, pos.rotate]);
             const scale = useTransform(smoothProgress, [0, 0.4], [0.5, 0.8]); // Start small behind

             return (
               <motion.div
                 key={i}
                 style={{ top, left, x, y, rotate, scale, zIndex: 10 }}
                 className="absolute w-[200px] h-[200px] md:w-[280px] md:h-[280px] rounded-2xl overflow-hidden shadow-lg bg-neutral-900 border border-white/10"
               >
                 <img src={src} alt={`Gallery ${i}`} className="w-full h-full object-cover opacity-80" />
                 
                 {/* Tag/Tooltip - Only show near end of scatter */}
                 <motion.div 
                    style={{ opacity: useTransform(smoothProgress, [0.3, 0.4], [0, 1]) }}
                    className={`absolute ${i % 2 === 0 ? '-top-10' : '-bottom-10'} left-1/2 -translate-x-1/2 px-4 py-2 bg-[#002FFF] text-white text-sm font-bold rounded-lg whitespace-nowrap z-30`}
                 >
                    {tags[i % tags.length]} 
                 </motion.div>
               </motion.div>
             );
           })}
        </motion.div>


         {/* --- FINAL TEXT OVERLAY --- */}
         <motion.div 
            style={{ opacity: textOpacity, scale: textScale, zIndex: 50 }}
            className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none text-center px-4 mt-10"
         >
            <h2 className="text-5xl lg:text-[3.2rem]  tracking-tight leading-none font-jakarta font-bold italic text-white mb-6   drop-shadow-2xl">
              From Idea To <br /> Impact
              
             
            </h2>
            <p className="text-white/80 max-w-xl text-lg md:text-xl font-light mb-10 drop-shadow-lg font-author leading-[1]">
               Snapshots from our events, team energy, and the work we’re proud of
            </p>
            
         
         </motion.div>

      </div>
    </section>
  );
}
