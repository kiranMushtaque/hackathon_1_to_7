"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Resturant from "./components/resturant";
import StatsSection from "./components/StatsSection";
import MenuAndChefSection from "./components/menuchefsection";
import Index from "./components";
import BlogPosts from "./components/blogpost";

const foodEmojis = ["🍔", "🍕", "🍜", "🍣", "🍪", "🍩", "🍖", "🥗"];

const FloatingEmoji = ({ emoji, index }: { emoji: string; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{
        opacity: [0, 1, 0],
        y: [-20, -120],
        x: Math.sin(index) * 50,
      }}
      transition={{
        duration: 2,
        delay: index * 0.2,
        repeat: Infinity,
        repeatDelay: 1,
      }}
      className="text-2xl absolute bottom-0"
      style={{ left: `${(index / foodEmojis.length) * 100}%` }}
    >
      {emoji}
    </motion.div>
  );
};

const Page = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    setTimeout(() => {
      setIsLoading(false); 
      setShowPopup(true); 
    }, 2000); 
  }, []);

  const handleClosePopup = () => {
    setShowPopup(false); 
  };

  return (
    <div>
     
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex justify-center items-center z-[9999]"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/70 backdrop-blur-md"
              onClick={handleClosePopup}
            />

            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0.5, y: 100 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: -100 }}
              transition={{
                type: "spring",
                damping: 20,
                stiffness: 100,
              }}
              className="relative max-w-4xl w-full mx-4 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-black to-orange-900/20 rounded-3xl" />
              <div className="absolute inset-0 bg-black/50 backdrop-blur-sm rounded-3xl" />

              <div className="relative p-8 rounded-3xl">
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleClosePopup}
                  className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg z-10 hover:from-orange-600 hover:to-orange-700 transition-all duration-300"
                >
                  ✕
                </motion.button>

                {/* Welcome Text */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-center mb-8 relative"
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.02, 1],
                      rotate: [0, 1, -1, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                  >
                    <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
                      Welcome to{" "}
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">
                        FoodTuck Restaurant
                      </span>
                    </h2>
                  </motion.div>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-xl text-gray-300"
                  >
                    Discover the Art of Fine Dining
                  </motion.p>
                </motion.div>

                {/* Main Image */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="relative rounded-2xl overflow-hidden shadow-2xl"
                >
                  <Image
                    src="/images/Black Modern Burger Promotion Banner Landscape.png"
                    alt="Welcome Banner"
                    width={700}
                    height={300}
                    className="rounded-2xl transform transition-transform duration-700 hover:scale-105"
                  />

                  {/* Shine Effect */}
                  <motion.div
                    initial={{ x: "-100%" }}
                    animate={{ x: "200%" }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatDelay: 0.5,
                    }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                  />
                </motion.div>

                {/* Floating Food Emojis */}
                <div className="relative h-20 mt-6 overflow-hidden">
                  {foodEmojis.map((emoji, index) => (
                    <FloatingEmoji key={index} emoji={emoji} index={index} />
                  ))}
                </div>

                {/* Call to Action */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="text-center mt-6"
                >
                  <p className="text-gray-300 text-lg mb-4">
                    Experience culinary excellence like never before
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300"
                    onClick={handleClosePopup}
                  >
                    Start Exploring
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Resturant />
        <section className="bg-black flex justify-center items-center">
          <div className="w-full max-w-7xl px-4">
            <Image
              src="/images/About us.png"
              alt="About Us"
              width={1024}
              height={768}
              className="w-full"
            />
          </div>
        </section>
        <section className="bg-black text-white py-8 md:py-16">
          <StatsSection />
          <MenuAndChefSection />
          <Index />
          <BlogPosts />
        </section>
      </motion.div>
    </div>
  );
};

export default Page;
