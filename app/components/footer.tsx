"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function Footer() {
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = () => {
    setIsSubscribed(true);
  };

  return (
    <footer className="bg-gray-900 text-white py-10 mt-24">
      {/* Container */}
      <div className="container mx-auto px-6">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Support Section */}
          <div>
            <h2 className="text-2xl font-bold text-orange-500 mb-4">
              Need Our Support?
            </h2>
            <p className="text-sm mb-6">
              Don’t wait! Reach out to us for support or to make a smart and
              logical decision.
            </p>
            <button
              onClick={handleSubscribe}
              disabled={isSubscribed}
              className={`${
                isSubscribed
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-orange-500 hover:bg-orange-600"
              } text-white px-6 py-2 rounded-md transition-colors duration-300`}
            >
              {isSubscribed ? "Subscribed" : "Subscribe Now"}
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
            <p className="text-sm">Mon - Sat: 8:00 AM - 6:00 PM</p>
            <p className="text-sm">Sunday: Closed</p>
          </div>

          {/* Recent Posts Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Recent Posts</h3>
            <ul className="space-y-6">
              {[
                {
                  title: "Is fast food good for your body?",
                  date: "February 28, 2022",
                  imgSrc: "/images/tikka.png",
                },
                {
                  title: "Change your food habits with organic food",
                  date: "February 28, 2022",
                  imgSrc: "/images/tikka.png",
                },
                {
                  title: "Do you like fast food in your life?",
                  date: "February 28, 2022",
                  imgSrc: "/images/tikka.png",
                },
              ].map((post, index) => (
                <li key={index} className="flex items-center">
                  <Image
                    src={post.imgSrc}
                    alt="Post Thumbnail"
                    width={64}
                    height={64}
                    className="rounded-full mr-4 object-cover"
                  />
                  <div>
                    <p className="font-semibold text-sm hover:text-orange-500 transition-colors duration-300">
                      {post.title}
                    </p>
                    <p className="text-gray-400 text-xs">{post.date}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="bg-gray-700 mt-10 flex flex-col lg:flex-row justify-between items-center text-sm w-full p-4 rounded">
          <p className="text-white">&copy; 2022 Ayeman. All Rights Reserved.</p>
          <div className="flex space-x-4 mt-4 lg:mt-0">
            {[
              { name: "Facebook", href: "#", icon: "facebook" },
              { name: "Twitter", href: "#", icon: "twitter" },
              { name: "Instagram", href: "#", icon: "instagram" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="flex items-center text-orange-500 hover:text-white hover:bg-orange-500 p-2 rounded-md transition-colors duration-300"
                aria-label={social.name}
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {social.icon === "facebook" && (
                    <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.325v21.351C0 23.4.6 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.466.099 2.797.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.764v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.4 24 24 23.4 24 22.675V1.325C24 .6 23.4 0 22.675 0z" />
                  )}
                  {social.icon === "twitter" && (
                    <path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724 9.864 9.864 0 0 1-3.127 1.195 4.916 4.916 0 0 0-8.38 4.482A13.944 13.944 0 0 1 1.671 3.149a4.916 4.916 0 0 0 1.523 6.574 4.902 4.902 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 0 1-2.224.084 4.918 4.918 0 0 0 4.588 3.417A9.867 9.867 0 0 1 0 19.54a13.94 13.94 0 0 0 7.548 2.212c9.057 0 14.01-7.496 14.01-13.986 0-.21-.005-.423-.014-.634A10.012 10.012 0 0 0 24 4.557z" />
                  )}
                  {social.icon === "instagram" && (
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.31.975.976 1.248 2.243 1.31 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.31 3.608-.976.975-2.243 1.248-3.608 1.31-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.31-.975-.976-1.248-2.243-1.31-3.608C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.31-3.608.976-.976 2.243-1.248 3.608-1.31C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.775.131 4.633.43 3.678 1.385 2.722 2.34 2.423 3.481 2.364 4.758 2.305 6.038 2.292 6.447 2.292 12s.013 5.962.072 7.242c.059 1.277.358 2.419 1.313 3.374.955.955 2.097 1.254 3.374 1.313 1.28.059 1.689.072 7.242.072s5.962-.013 7.242-.072c1.277-.059 2.419-.358 3.374-1.313.955-.955 1.254-2.097 1.313-3.374.059-1.28.072-1.689.072-7.242s-.013-5.962-.072-7.242c-.059-1.277-.358-2.419-1.313-3.374C19.661.43 18.519.131 17.242.072 15.962.013 15.553 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" />
                  )}
                </svg>
                <span className="sr-only">{social.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
