// src/components/About.js

import React from 'react';
import { FaBullseye, FaLightbulb } from 'react-icons/fa';

const About = () => {
  return (
    <div className="bg-[#f5f5f5] text-gray-800">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className=" text-6xl text-[#1e3a8a] font-semibold tracking-wide uppercase">
            About Us
          </h2>
        </div>

        <div className="mt-10 flex flex-col lg:flex-row items-center lg:items-start bg-white p-6 rounded shadow">
          <div className="lg:w-1/2">
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Welcome to Hewlett Printer Solution
            </p>
            <p className="mt-4 text-xl text-gray-500">
              At Hewlett Printer Solution, we are dedicated to providing the
              best printing solutions for all your needs. Our products are
              designed to deliver high performance, reliability, and efficiency
              to help you achieve professional results every time.
            </p>
          </div>

          <div className="mt-10 lg:mt-0 lg:ml-10 flex justify-center lg:w-1/2">
            <img
              className="rounded-lg shadow-lg max-w-xs sm:max-w-md md:max-w-lg"
              src="https://img.freepik.com/free-photo/creative-people-working-office_23-2147656715.jpg?t=st=1717068354~exp=1717071954~hmac=e0864779ded485398ede66957f449af2d6cf63cbe1684b983845cd4078ed425d&w=826"
              alt="Creative people working in office"
            />
          </div>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <div className="relative bg-gray-50 p-6 rounded-lg shadow-md">
              <dt className="flex items-center">
                <FaBullseye className="h-6 w-6 text-[#1e3a8a]" />
                <p className="ml-4 text-lg leading-6 font-medium text-gray-900">
                  Our Mission
                </p>
              </dt>
              <dd className="mt-2 text-base text-gray-500">
                Our mission is to provide innovative printing solutions that
                enhance productivity and creativity for businesses and
                individuals alike.
              </dd>
            </div>

            <div className="relative bg-gray-50 p-6 rounded-lg shadow-md">
              <dt className="flex items-center">
                <FaLightbulb className="h-6 w-6 text-[#1e3a8a]" />
                <p className="ml-4 text-lg leading-6 font-medium text-gray-900">
                  Our Vision
                </p>
              </dt>
              <dd className="mt-2 text-base text-gray-500">
                We envision a world where our cutting-edge printing technology
                empowers people to bring their ideas to life effortlessly and
                efficiently.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default About;
