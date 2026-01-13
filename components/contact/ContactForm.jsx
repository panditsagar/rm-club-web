"use client";

import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add logic to handle form submission here
  };

  return (
    <div className="w-full max-w-2xl p-8 bg-white/5   border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] backdrop-blur-xl hover:border-white/20 transition-all duration-300">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-1">
            <label
              htmlFor="firstName"
              className="text-gray-300 text-md font-medium ml-1"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="Ex. John"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full bg-white/5 border border-white/10  px-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#2D68FF] focus:bg-white/10 transition-all duration-300"
              required
            />
          </div>
          <div className="flex flex-col gap-1">
            <label
              htmlFor="lastName"
              className="text-gray-300 text-md font-medium ml-1"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Ex. Doe"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full bg-white/5 border border-white/10   px-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#2D68FF] focus:bg-white/10 transition-all duration-300"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-1">
            <label
              htmlFor="email"
              className="text-gray-300 text-md font-medium ml-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="john@example.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-white/5 border border-white/10  px-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#2D68FF] focus:bg-white/10 transition-all duration-300"
              required
            />
          </div>
          <div className="flex flex-col gap-1">
            <label
              htmlFor="phone"
              className="text-gray-300 text-md font-medium ml-1"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="+1 (555) 000-0000"
              value={formData.phone}
              onChange={handleChange}
              className="w-full bg-white/5 border border-white/10   px-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#2D68FF] focus:bg-white/10 transition-all duration-300"
            />
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <label
            htmlFor="message"
            className="text-gray-300 text-md font-medium ml-1"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Tell us about your project..."
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="w-full bg-white/5 border border-white/10   px-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#2D68FF] focus:bg-white/10 transition-all duration-300 resize-none"
            required
          ></textarea>
        </div>

        <button
          className="
          relative
          inline-flex items-center gap-2
          w-full
          px-3 py-2.5
          bg-[#0A2549]
          text-[#1EA1F7]
         
          text-[1.4rem]
          text-center
            justify-center
          overflow-hidden
          cursor-pointer
          group
        "
        >
          <span className="relative z-10 text-center">Learn more</span>

          {/* SHIMMER OVERLAY */}
          <span
            className="
            absolute inset-0
            bg-gradient-to-r
            from-transparent
            via-white/15
          
            to-transparent
            -translate-x-full
            group-hover:translate-x-full
            transition-transform
            duration-700
            ease-in-out
          "
          />
        </button>

        <p className="text-center text-xs text-gray-500 mt-4">
          By submitting this form you agree to our{" "}
          <span className="text-[#2D68FF] hover:text-[#144EE3] underline cursor-pointer transition-colors">
            Privacy Policy
          </span>
        </p>
      </form>
    </div>
  );
};

export default ContactForm;
