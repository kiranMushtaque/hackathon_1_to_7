import React from "react";
import Image from "next/image";
export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white py-10 mt-24">
      {/* Container */}
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Support Section */}
          <div>
            <h2 className="text-2xl font-bold text-[#ff9f0d] mb-4">
              Need Our Support?
            </h2>
            <p className="text-sm mb-6">
              Don’t wait! Reach out to us for support or to make a smart and
              logical decision.
            </p>
            <button className="bg-[#ff9f0d] text-white px-6 py-2 rounded-md">
              Subscribe Now
            </button>
          </div>

          {/* About Us Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="text-sm mb-4">
              We provide dependable, safe, and professional chauffeured car
              services across major cities worldwide.
            </p>
            <h4 className="text-md font-semibold mb-2">Opening Hours</h4>
            <p className="text-sm">Mon - Sat: 8.00 AM - 6.00 PM</p>
            <p className="text-sm">Sunday: Closed</p>
          </div>

          {/* Recent Posts Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Recent Posts</h3>
            <ul className="space-y-6">
              <li className="flex items-center">
                <Image
                  src="/images/tikka.png"
                  alt="Post Thumbnail"
                  width={80}
                  height={80}
                  className=" rounded-full mr-4"
                />
                <div>
                  <p className="font-semibold text-sm">
                    Is fast food good for your body?
                  </p>
                  <p className="text-gray-400 text-xs">February 28, 2022</p>
                </div>
              </li>
              <li className="flex items-center">
                <Image
                  src="/images/tikka.png"
                  alt="Post Thumbnail"
                  width={80}
                  height={80}
                  className=" rounded-full mr-4"
                />
                <div>
                  <p className="font-semibold text-sm">
                    Change your food habits with organic food
                  </p>
                  <p className="text-gray-400 text-xs">February 28, 2022</p>
                </div>
              </li>
              <li className="flex items-center">
                <Image
                  src="/images/tikka.png"
                  alt="Post Thumbnail"
                  width={80}
                  height={80}
                  className=" rounded-full mr-4"
                />
                <div>
                  <p className="font-semibold text-sm">
                    Do you like fast food in your life?
                  </p>
                  <p className="text-gray-400 text-xs">February 28, 2022</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/* Bottom Section */}
        <div className="bg-gray-500 mt-10   flex flex-col lg:flex-row justify-between items-center text-sm w-full">
          <p className="text-white">
            Copyright © 2022 by Ayeman. All Rights Reserved.
          </p>
          <div className=" flex space-x-4 mt-4 lg:mt-0">
            <a
              href="#"
              className="text-[#ff9f0d] hover:text-white hover:bg-[#ff9f0d] p-2 rounded-md"
            >
              Facebook
            </a>
            <a
              href="#"
              className="text-[#ff9f0d] hover:text-white hover:bg-[#ff9f0d] p-2 rounded-md"
            >
              Twitter
            </a>
            <a
              href="#"
              className="text-[#ff9f0d] hover:text-white hover:bg-[#ff9f0d] p-2 rounded-md"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
