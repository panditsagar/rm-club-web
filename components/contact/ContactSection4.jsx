"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

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
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-white pb-20 px-6 lg:px-26 relative z-20">
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
