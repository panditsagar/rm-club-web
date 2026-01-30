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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://api.rmclub.co/api/website-queries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!data.success) throw new Error(data.message);

      // success UI
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="w-full max-w-2xl p-5 sm:p-8 bg-white border border-gray-200 shadow-xl">
      <form onSubmit={handleSubmit} className=" ">
        <div className="grid grid-cols-1 md:grid-cols-2  gap-5 mb-5">
          <div className="flex flex-col gap-1">
            <label
              htmlFor="firstName"
              className="text-primary-dark text-sm font-bold ml-1 font-switzer"
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
              className="w-full bg-gray-50 border border-gray-200 px-4 py-3 text-primary-dark placeholder-gray-400 focus:outline-none focus:border-primary focus:bg-white transition-all duration-300 rounded-sm"
              required
            />
          </div>
          <div className="flex flex-col gap-1">
            <label
              htmlFor="lastName"
              className="text-primary-dark text-sm font-bold ml-1 font-switzer"
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
              className="w-full bg-gray-50 border border-gray-200 px-4 py-3 text-primary-dark placeholder-gray-400 focus:outline-none focus:border-primary focus:bg-white transition-all duration-300 rounded-sm"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
          <div className="flex flex-col gap-1">
            <label
              htmlFor="email"
              className="text-primary-dark text-sm font-bold ml-1 font-switzer"
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
              className="w-full bg-gray-50 border border-gray-200 px-4 py-3 text-primary-dark placeholder-gray-400 focus:outline-none focus:border-primary focus:bg-white transition-all duration-300 rounded-sm"
              required
            />
          </div>
          <div className="flex flex-col gap-1">
            <label
              htmlFor="phone"
              className="text-primary-dark text-sm font-bold ml-1 font-switzer"
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
              className="w-full bg-gray-50 border border-gray-200 px-4 py-3 text-primary-dark placeholder-gray-400 focus:outline-none focus:border-primary focus:bg-white transition-all duration-300 rounded-sm"
            />
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <label
            htmlFor="message"
            className="text-primary-dark text-sm font-bold ml-1 font-switzer"
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
            className="w-full bg-gray-50 border border-gray-200 px-4 py-3 text-primary-dark placeholder-gray-400 focus:outline-none focus:border-primary focus:bg-white transition-all duration-300 resize-none rounded-sm"
            required
          ></textarea>
        </div>

        <button
          className="
          relative
          inline-flex items-center gap-2
          w-full
          px-6 py-4
          bg-primary
          text-white
          font-bold
          text-lg
          text-center
            justify-center
          overflow-hidden
          cursor-pointer
          group
          mt-8
          rounded-sm
          hover:bg-primary-dark
          transition-colors
        "
        >
          <span className="relative z-10 text-center uppercase tracking-wider">Send Message</span>
        </button>

        <p className="text-center text-sm text-gray-500 mt-6 font-switzer">
          By submitting this form you agree to our{" "}
          <span className="text-primary hover:text-primary-dark underline cursor-pointer transition-colors font-bold">
            Privacy Policy
          </span>
        </p>
      </form>
    </div>
  );
};

export default ContactForm;
