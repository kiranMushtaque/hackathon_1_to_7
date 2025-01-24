






"use client";

import React from 'react';


import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import Image from "next/image";


const ContactPage = () => {
  return (
    <div className="bg-gray-50">
      {/* Header Section */}
      <header className="text-center py-12 bg-[#FF9F0D] text-white">
        <h1 className="text-4xl font-bold">Contact Foodtuck</h1>
        <p className="text-xl mt-2">We're here to assist you!</p>
      </header>

      {/* Contact Info Section */}
      <section className="container mx-auto px-4 py-16 mt-10">
        <div className="flex justify-center space-x-8">
          {/* Address */}
          <div className="flex flex-col items-center text-center">
            <FaMapMarkerAlt className="text-4xl text-[#FF9F0D]" />
            <h2 className="text-2xl font-bold mt-4">Visit Us</h2>
            <p className="mt-2 text-lg">1234 Foodtuck Resturant</p>
          </div>

          {/* Phone */}
          <div className="flex flex-col items-center text-center">
            <FaPhoneAlt className="text-4xl text-[#FF9F0D]" />
            <h2 className="text-2xl font-bold mt-4">Call Us</h2>
            <p className="mt-2 text-lg">+1 234 567 890</p>
          </div>

          {/* Email */}
          <div className="flex flex-col items-center text-center">
            <FaEnvelope className="text-4xl text-[#FF9F0D]" />
            <h2 className="text-2xl font-bold mt-4">Email Us</h2>
            <p className="mt-2 text-lg">contact@foodtuck.com</p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="container mx-auto px-4 py-16 mt-5">
        <h2 className="text-3xl font-bold text-center">Get In Touch</h2>
        <form className="max-w-lg mx-auto mt-8">
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-lg font-semibold">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                placeholder="Your Name"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-lg font-semibold">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                placeholder="Your Email"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-lg font-semibold">
                Message
              </label>
              <textarea
                id="message"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                rows={6}
                placeholder="Your Message"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 mt-6 bg-[#FF9F0D] text-white text-xl font-bold rounded-lg hover:bg-orange-600"
            >
              Send Message
            </button>
          </div>
        </form>
      </section>

      {/* Map Section */}
      <section className="container mx-auto px-4 py-16 mt-5">
        <h2 className="text-3xl font-bold text-center">Find Us On The Map</h2>
        <div className="mt-6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d34754.152730456095!2d74.35871270000001!3d31.5203685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919061fae8b63f7%3A0xf5cb0d089116343!2sLahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1611798492935!5m2!1sen!2sus"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
          ></iframe>
        </div>
      </section>

      
    </div>
  );
};

export default ContactPage;

