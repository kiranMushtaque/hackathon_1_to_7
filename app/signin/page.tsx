"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { FiArrowRight, FiTruck, FiHeart, FiCheckCircle } from "react-icons/fi";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { SignedIn, SignedOut, useClerk } from "@clerk/nextjs";


const SignInButton = dynamic(
  () => import("@clerk/nextjs").then((mod) => mod.SignInButton),
  { ssr: false }
);
const SignUpButton = dynamic(
  () => import("@clerk/nextjs").then((mod) => mod.SignUpButton),
  { ssr: false }
);
const SignOutButton = dynamic(
  () => import("@clerk/nextjs").then((mod) => mod.SignOutButton),
  { ssr: false }
);

export default function Home() {
  const [isTruckHovered, setIsTruckHovered] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const { signOut, user } = useClerk();

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

 
  useEffect(() => {
    if (user) {
      router.push("/shop"); 
    }
  }, [user, router]);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-orange-500 flex items-center justify-center">
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <FiTruck className="text-white text-6xl" />
        </motion.div>
      </div>
    );
  }

  const handleSignOut = async () => {
    await signOut();
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-500 to-amber-500 relative overflow-hidden">
      <motion.div
        className="absolute w-96 h-96 rounded-full bg-amber-200 opacity-20 blur-3xl top-1/4 left-1/4"
        animate={{ scale: [1, 1.1, 1], rotate: [0, 180, 360] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute w-64 h-64 rounded-full bg-white opacity-10 blur-2xl bottom-1/4 right-1/4"
        animate={{ scale: [1, 1.2, 1], rotate: [360, 180, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="flex flex-col items-center justify-center min-h-screen px-4 py-12 relative z-10">
        <motion.div
          className="w-full max-w-6xl mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex items-center justify-between backdrop-blur-sm bg-white/5 rounded-2xl p-4">
            <span className="text-white font-bold text-2xl tracking-wide flex items-center gap-2">
              <FiTruck
                className={`transition-transform duration-300 ${isTruckHovered ? "rotate-12" : ""}`}
                onMouseEnter={() => setIsTruckHovered(true)}
                onMouseLeave={() => setIsTruckHovered(false)}
              />
              FoodTuck
            </span>
            <div className="flex items-center gap-4">
              <SignedOut>
                <div className="flex gap-2">
                  <SignInButton>
                    <button className="text-sm text-white hover:underline">
                      Sign In
                    </button>
                  </SignInButton>
                  <SignUpButton>
                    <button className="bg-white text-orange-600 px-6 py-2 rounded-full font-semibold text-sm shadow-lg hover:shadow-xl transition-all">
                      Get Started
                    </button>
                  </SignUpButton>
                </div>
              </SignedOut>
              <SignedIn>
                <button
                  onClick={handleSignOut}
                  className="text-sm text-white hover:underline"
                >
                  Sign Out
                </button>
              </SignedIn>
            </div>
          </div>
        </motion.div>

        <motion.div className="flex flex-col items-center text-center w-full max-w-4xl">
          <motion.div className="mb-8">
            <FiHeart className="text-red-500 text-6xl mb-4 animate-bounce" />
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4 leading-tight">
              Crafted with{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-200 to-white">
                Love
              </span>
              ,<br />
              Delivered with{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-amber-200">
                Care
              </span>
              .
            </h1>
          </motion.div>

          <motion.p className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl">
            Experience the joy of delicious, handcrafted meals delivered right
            to your doorstep.
          </motion.p>

          <motion.div className="relative w-full">
            <SignedOut>
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <SignInButton>
                  <button className="bg-white text-orange-600 px-12 py-5 rounded-full font-bold text-xl flex items-center gap-3 shadow-2xl hover:shadow-3xl transition-all">
                    <span>Sign In</span>
                    <FiArrowRight />
                  </button>
                </SignInButton>
                <SignUpButton>
                  <button className="bg-amber-200 text-orange-700 px-12 py-5 rounded-full font-bold text-xl flex items-center gap-3 shadow-2xl hover:shadow-3xl transition-all">
                    <span>Sign Up</span>
                    <FiCheckCircle />
                  </button>
                </SignUpButton>
              </div>
            </SignedOut>

            <SignedIn>
              <motion.div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl shadow-xl w-full">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Welcome Back Foodie! 🎉
                </h2>
                <p className="text-white/80 mb-6">
                  Ready for another delicious experience?
                </p>
                <div className="mt-6">
                  <button
                    onClick={handleSignOut}
                    className="bg-white text-orange-600 px-12 py-5 rounded-full font-bold text-xl flex items-center gap-3"
                  >
                    <span>Sign Out</span>
                    <FiArrowRight />
                  </button>
                </div>
              </motion.div>
            </SignedIn>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
