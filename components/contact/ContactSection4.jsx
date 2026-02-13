"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    question: "What is RM Club?",
    answer:
      "RM Club is a structured multi-venture ecosystem operating across media, hospitality, travel, real estate, commerce, education, and community initiatives. Each venture functions independently while aligning under a shared governance framework.",
  },
  {
    question: "How does RM Club operate?",
    answer:
      "RM Club follows a coordinated model where independent ventures maintain operational autonomy while benefiting from centralized oversight, strategic alignment, and long-term planning discipline.",
  },
  {
    question: "Is RM Club a holding company?",
    answer:
      "RM Club functions as an ecosystem platform rather than a traditional holding entity. It provides governance structure, strategic direction, and coordination across ventures while preserving independent leadership.",
  },
  {
    question: "Which sectors does RM Club operate in?",
    answer:
      "The ecosystem spans hospitality, media platforms, travel initiatives, real estate development, commerce operations, education programs, and community-driven ventures.",
  },
  {
    question: "Does RM Club support new ventures?",
    answer:
      "New initiatives may be considered when aligned with long-term ecosystem objectives, operational discipline, and sustainable growth principles.",
  },
  {
    question: "How can I collaborate with RM Club?",
    answer:
      "Partnership and collaboration inquiries can be submitted through the contact page. Opportunities are evaluated based on alignment with ecosystem strategy and governance standards.",
  },
  {
    question: "Is RM Club focused on long-term growth?",
    answer:
      "Yes. The ecosystem prioritizes structured expansion, financial prudence, and sustainable scaling over rapid short-term acceleration.",
  },
  {
    question: "Where can I learn more about individual ventures?",
    answer:
      "Detailed information about each initiative is available under the Our Ventures section, outlining leadership, operations, and sector focus.",
  },
];

const ContactSection4 = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="  pb-20 px-6 lg:px-26 relative z-20">
      <div className="max-w-[1400px] mx-auto">
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-[2.5rem] font-switzer font-normal text-gray-800 border-b border-gray-200 pb-4 mb-8">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-700 max-w-5xl leading-relaxed mb-12">
            Below are a list of our frequently asked questions that might help
            answer your query. If you can't find what you are looking for please
            contact us using the form above. Below are a list of our frequently
            asked questions that might help answer your query. If you can't find
            what you are looking for please contact us using the form above.
          </p>
        </div>

        {/* Accordion List */}
        <div className="flex flex-col gap-4 max-w-[900px]">
          {faqs.map((faq, index) => (
            <div key={index} className="w-full">
              {/* Accordion Header - Solid Blue Bar */}
              <button
                onClick={() => toggleAccordion(index)}
                className={`
                    w-full flex justify-between items-center 
                    p-5 md:p-6 
                    bg-[#0054A6] 
                    text-white 
                    text-left 
                    transition-all duration-300
                    hover:bg-[#004080]
                    font-bold text-lg md:text-xl font-switzer
                    ${activeIndex === index ? "rounded-t-sm" : "rounded-sm"}
                `}
              >
                <span>{faq.question}</span>
                <span className="ml-4 flex-shrink-0 text-white cursor-pointer">
                  {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                </span>
              </button>

              {/* Accordion Body */}
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden bg-[#E9EDEE] border-x border-b border-gray-200"
                  >
                    <div className="p-6 md:p-8 text-gray-700 leading-relaxed text-lg">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection4;
