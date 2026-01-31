"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaCheckCircle,
  FaExclamationCircle,
  FaPaperPlane,
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
    <div className="w-full bg-[#E9EDEE]   border border-gray-100 p-6 sm:p-10 lg:p-10 relative overflow-hidden">
      <div className="mb-8 text-center md:text-left">
        <h2 className="text-3xl font-serif font-bold text-primary-dark mb-2">
          Send us a Message
        </h2>
        <p className="text-gray-500">
          We'd love to hear from you. Fill out the form below.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="flex flex-col gap-4">
            <label
              htmlFor="firstName"
              className="text-primary-dark text-sm font-medium ml-1"
            >
              First Name*
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="John"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full bg-gray-50 border border-gray-200 px-4 py-3.5 text-gray-800   focus:outline-none focus:border-primary focus:ring-1 focus:ring-[#0054A6] transition-all duration-300 placeholder:text-gray-400"
              required
            />
          </div>
          <div className="flex flex-col gap-4">
            <label
              htmlFor="lastName"
              className="text-primary-dark text-sm font-medium ml-1"
            >
              Last Name*
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Doe"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full bg-gray-50 border border-gray-200 px-4 py-3.5 text-gray-800   focus:outline-none focus:border-primary focus:ring-1 focus:ring-[#0054A6] transition-all duration-300 placeholder:text-gray-400"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="flex flex-col gap-4">
            <label
              htmlFor="email"
              className="text-primary-dark text-sm font-medium ml-1"
            >
              Email Address*
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="john@example.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-gray-50 border border-gray-200 px-4 py-3.5 text-gray-800   focus:outline-none focus:border-primary focus:ring-1 focus:ring-[#0054A6] transition-all duration-300 placeholder:text-gray-400"
              required
            />
          </div>
          <div className="flex flex-col gap-4">
            <label
              htmlFor="phone"
              className="text-primary-dark text-sm font-medium ml-1"
            >
              Phone Number*
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="+1 (555) 000-0000"
              value={formData.phone}
              onChange={handleChange}
              className="w-full bg-gray-50 border border-gray-200 px-4 py-3.5 text-gray-800  focus:outline-none focus:border-primary focus:ring-1 focus:ring-[#0054A6] transition-all duration-300 placeholder:text-gray-400"
            />
          </div>
        </div>

        <div className="flex flex-col gap-4 mb-8">
          <label
            htmlFor="message"
            className="text-primary-dark text-sm font-medium ml-1"
          >
            Message*
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Tell us about your project or inquiry..."
            value={formData.message}
            onChange={handleChange}
            rows="5"
            className="w-full bg-gray-50 border border-gray-200 px-4 py-3.5 text-gray-800  focus:outline-none focus:border-primary focus:ring-1 focus:ring-[#0054A6] transition-all duration-300 resize-none placeholder:text-gray-400"
            required
          ></textarea>
        </div>

        {/* FEEDBACK MESSAGES */}
        <AnimatePresence mode="wait">
          {status === "success" && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mb-6 p-4 bg-green-50 border border-green-200   flex items-center gap-3 text-green-700"
            >
              <FaCheckCircle className="shrink-0" />
              <p className="text-sm font-medium">
                Message sent successfully! We'll get back to you shortly.
              </p>
            </motion.div>
          )}

          {status === "error" && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mb-6 p-4 bg-red-50 border border-red-200   flex items-center gap-3 text-red-700"
            >
              <FaExclamationCircle className="shrink-0" />
              <p className="text-sm font-medium">{errorMessage}</p>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          disabled={status === "submitting" || status === "success"}
          className={`
            relative w-full px-6 py-4  font-bold text-lg uppercase tracking-wider
            flex items-center justify-center gap-2 overflow-hidden group transition-all duration-300 cursor-pointer
            ${
              status === "success"
                ? "bg-green-600 text-white cursor-default"
                : "  text-[#0054A6] hover:text-white hover:bg-[#0054A6]  border border-[#0054A6]  "
            }
            ${status === "submitting" ? "opacity-80 cursor-wait" : ""}
          `}
        >
          {status === "submitting" ? (
            <>
              <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
              <span>Sending...</span>
            </>
          ) : status === "success" ? (
            <>
              <FaCheckCircle /> Sent
            </>
          ) : (
            <>
              <span>Send Message</span>
              <FaPaperPlane className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </>
          )}
        </button>

        <p className="text-center text-sm text-gray-400 mt-6 font-switzer">
          By submitting this form you agree to our{" "}
          <span className="text-primary hover:text-primary-dark underline cursor-pointer transition-colors font-medium">
            Privacy Policy
          </span>
        </p>
      </form>
    </div>
  );
};

export default ContactForm;
