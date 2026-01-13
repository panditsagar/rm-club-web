"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What is RM Club AI and how does it work?",
    answer:
      "RM Club AI is an advanced data analytics platform that helps businesses tackle data bottlenecks, streamline analysis, and make smarter decisions through automated insights and intuitive reporting.",
  },
  {
    question: "Which apps can I integrate?",
    answer:
      "RM Club AI supports 50+ integrations, including Slack, HubSpot, Zendesk, Salesforce, Google Workspace, WhatsApp, Zapier, and more.",
  },
  {
    question: "How does RM Club AI automate tasks?",
    answer:
      "Our platform uses intelligent agents to automate repetitive data entry, report generation, and notification workflows, freeing up your team to focus on strategic initiatives.",
  },
  {
    question: "Is my data secure with RM Club AI?",
    answer:
      "Yes, we prioritize security with enterprise-grade encryption, SOC 2 compliance, and regular security audits to ensure your data remains protected at all times.",
  },
  {
    question: "What kind of support do you offer?",
    answer:
      "We offer 24/7 customer support via chat and email, along with a comprehensive knowledge base and dedicated account managers for enterprise plans.",
  },
];

const ContactSection4 = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-[#080618] pt-20 pb-40 px-6 md:px-12 relative   z-20">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left Side */}
        <div className="flex flex-col items-start gap-8">
          <h2 className="text-5xl md:text-[4.5rem] text-white font-medium tracking-tight leading-[1] font-jakarta ml-20">
            Frequently <br /> asked <br /> questions
          </h2>
        </div>

        {/* Right Side: Accordion */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`group relative border border-white/10  p-6   hover:border-[#002FFF]/50 transition-all duration-300 cursor-pointer    
              }`}
              onClick={() => toggleAccordion(index)}
            >
              {/* Blue Corner Accents */}
              <div className="absolute -top-1 -left-1 w-2 h-2 bg-[#002FFF] z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#002FFF] z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-[#002FFF] z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-[#002FFF] z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="flex justify-between items-center bg-transparent relative z-10">
                <h3 className="text-lg md:text-xl text-white font-normal pr-8 font-switzer">
                  {faq.question}
                </h3>
                <span className="text-[#002FFF] text-3xl font-medium">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </div>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0, marginTop: 0 }}
                    animate={{ height: "auto", opacity: 1, marginTop: 16 }}
                    exit={{ height: 0, opacity: 0, marginTop: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden relative z-10"
                  >
                    <p className="text-gray-400 leading-[1.1] font-author font-normal text-lg">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 z-30 left-0 w-full h-[200px] bg-gradient-to-b from-[#080618] to-transparent translate-y-full pointer-events-none" />
    </section>
  );
};

export default ContactSection4;
