"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaCheckCircle,
  FaExclamationCircle,
} from "react-icons/fa";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("idle"); // idle, submitting, success, error
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const res = await fetch("https://api.rmclub.co/api/website-queries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!data.success) throw new Error(data.message);

      // Success
      setStatus("success");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });

      // Reset status after 3 seconds
      setTimeout(() => setStatus("idle"), 5000);
    } catch (err) {
      console.error(err);
      setStatus("error");
      setErrorMessage(err.message || "Something went wrong. Please try again.");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <div className="w-full h-full flex flex-col pt-12 md:pt-10 pb-0">
      
      {/* Top Header Row */}
      <div className="flex justify-between items-start w-full px-8 md:px-12 mb-10">
        <div className="flex items-center gap-2 text-white/90 uppercase tracking-[0.15em] text-sm font-medium">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="13 17 18 12 13 7"></polyline>
            <polyline points="6 17 11 12 6 7"></polyline>
          </svg>
          <span className="pt-0.5">Contact Us</span>
        </div>
        
      </div>

      <div className="mb-10 text-left px-8 md:px-12">
        <h2 className="text-[38px] md:text-[44px] font-bold text-white mb-2 leading-[1.2] tracking-tight">
          Have Questions?<br />
          Get In Touch!
        </h2>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col flex-1 relative z-10 w-full mt-2">
        <div className="px-8 md:px-12 flex flex-col gap-4 mb-6">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full bg-transparent border border-white/60 px-4 py-4 text-white focus:outline-none focus:border-white transition-all duration-300 placeholder:text-white/80"
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full bg-transparent border border-white/60 px-4 py-4 text-white focus:outline-none focus:border-white transition-all duration-300 placeholder:text-white/80"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-transparent border border-white/60 px-4 py-4 text-white focus:outline-none focus:border-white transition-all duration-300 placeholder:text-white/80"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number / Subject"
              value={formData.phone}
              onChange={handleChange}
              className="w-full bg-transparent border border-white/60 px-4 py-4 text-white focus:outline-none focus:border-white transition-all duration-300 placeholder:text-white/80"
            />
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full bg-transparent border border-white/60 px-4 py-4 text-white focus:outline-none focus:border-white transition-all duration-300 resize-none placeholder:text-white/80"
              required
            ></textarea>

            {/* Checkbox */}
            <div className="flex items-center gap-3 mt-1 mb-2">
               <input type="checkbox" required className="w-4 h-4 cursor-pointer accent-[#5B55FA] bg-white border-none" />
               <p className="text-[14px] font-medium text-white">I agree that my submitted data is being collected and stored.</p>
            </div>
        </div>

        {/* FEEDBACK MESSAGES */}
        <div className="px-8 md:px-12">
            <AnimatePresence mode="wait">
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mb-6 p-4 bg-white/20 border border-white/40 text-white flex items-center gap-3"
                >
                  <FaCheckCircle className="shrink-0" />
                  <p className="text-sm font-medium">Message sent successfully!</p>
                </motion.div>
              )}

              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mb-6 p-4 bg-red-500/20 border border-red-500/40 text-white flex items-center gap-3"
                >
                  <FaExclamationCircle className="shrink-0" />
                  <p className="text-sm font-medium">{errorMessage}</p>
                </motion.div>
              )}
            </AnimatePresence>
        </div>

        {/* Spacer to push button to absolute bottom */}
        <div className="flex-1"></div>

        {/* Submit Button touching the very bottom! */}
        <button
          disabled={status === "submitting" || status === "success"}
          className={`
            w-full py-4.5 px-8 md:px-12 font-semibold text-[16px] cursor-pointer text-white flex items-center justify-between transition-colors
            ${
              status === "success"
                ? "bg-green-500 cursor-default"
                : "bg-[#5B55FA] hover:bg-[#4E48D6]"
            }
            ${status === "submitting" ? "opacity-80 cursor-wait" : ""}
          `}
        >
          {status === "submitting" ? (
            <span className="flex items-center gap-2">
              <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
              <span>Sending...</span>
            </span>
          ) : status === "success" ? (
             <span className="flex items-center gap-2">
               <FaCheckCircle /> <span className="pt-0.5">Sent Successfully</span>
             </span>
          ) : (
            <>
              <span className="pt-0.5 tracking-wide">Send Message</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
