"use client";

import React from "react";
import ContactForm from "./ContactForm";

export default function ContactFormSection() {
  return (
    <section className="relative w-full py-20 lg:py-28 px-6">
      <div className="max-w-[1400px] mx-auto w-full flex justify-center">
        <div className="w-full max-w-4xl">
           <ContactForm />
        </div>
      </div>
    </section>
  );
}
