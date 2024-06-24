// src/components/ContactUs.js

import React from 'react';

const ContactUs = () => {
  return (
    <div className="bg-[#f5f5f5] text-gray-900 p-6">
      <div>
        <img
          src="https://img.freepik.com/free-photo/contact-us-customer-support-enquiry-hotline-concept_53876-128047.jpg?t=st=1717051257~exp=1717054857~hmac=0a296e07b99c4a65f78e803145512d17f99b12eb9ff4b1065f1cc7727cb1f44b&w=1060"
          alt="Contact Us"
          className="w-full h-80 rounded-lg shadow-lg"
        />
      </div>
      <form className="max-w-lg mx-auto mt-10 bg-gray-50 p-8 rounded-lg shadow-md">
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Your name"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Your email"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            rows="5"
            placeholder="Your message"
          />
        </div>

        <button
          className="bg-[#1e3a8a] hover:bg-[#1e3a8a] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
