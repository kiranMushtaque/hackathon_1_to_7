







"use client"
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { useState, useEffect } from "react";

const StatsSection = () => {
  const [animatedStats, setAnimatedStats] = useState([
    {
      value: 0,
      target: 420,
      label: "Professional Chefs",
      icon: "/images/Group (1).png",
    },
    {
      value: 0,
      target: 320,
      label: "Items Of Food",
      icon: "/images/Group (4).png",
    },
    {
      value: 0,
      target: 30,
      label: "Years Of Experienced",
      icon: "/images/Group (2).png",
    },
    {
      value: 0,
      target: 220,
      label: "Happy Customers",
      icon: "/images/Group (3).png",
    },
  ]);

  useEffect(() => {
    const animateStats = animatedStats.map((stat) => {
      let currentValue = 0;
      const step = stat.target / 100;

      const interval = setInterval(() => {
        currentValue += step;
        if (currentValue >= stat.target) {
          clearInterval(interval);
          currentValue = stat.target;
        }

        setAnimatedStats((prev) =>
          prev.map((s) =>
            s.label === stat.label
              ? { ...s, value: Math.round(currentValue) }
              : s
          )
        );
      }, 20);

      return () => clearInterval(interval);
    });

    return () => animateStats.forEach((cleanup) => cleanup());
  }, []);

  const imageVariants: Variants = {
    initial: {
      opacity: 0,
      scale: 0.5,
      rotate: -10,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10,
      },
    },
    animate: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10,
      },
    },
    hover: {
      scale: 1.1,
      rotate: [-5, 5, -5, 0],
      transition: {
        duration: 0.5,
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  };

  const textVariants: Variants = {
    initial: {
      opacity: 0,
      y: 50,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 10,
      },
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 10,
      },
    },
    hover: {
      scale: 1.05,
      color: "#FBBF24",
      transition: {
        type: "spring",
        stiffness: 300,
      },
    },
  };

  return (
    <section className="relative bg-black text-white py-16 mt-14 overflow-hidden">
      <Image
        src="/images/unsplash_bpPTlXWTOvg@2x.png"
        alt="Wallpaper"
        width={1920}
        height={469}
        className="absolute inset-0 w-full h-full opacity-20 object-cover"
      />
      <div className="relative container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          {animatedStats.map((stat, index) => (
            <motion.div
              key={index}
              className="space-y-4 p-4 rounded-xl"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 15px rgba(255,255,255,0.2)",
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                variants={imageVariants}
                initial="initial"
                animate="animate"
                whileHover="hover"
                className="flex justify-center items-center"
              >
                <Image
                  src={stat.icon}
                  alt={stat.label}
                  width={120}
                  height={120}
                  className="mx-auto w-32 h-32 object-contain"
                />
              </motion.div>

              <motion.h3
                variants={textVariants}
                initial="initial"
                animate="animate"
                whileHover="hover"
                className="text-4xl font-bold text-white"
              >
                {stat.value}
                {stat.label === "Years Of Experienced" ? "+" : ""}
              </motion.h3>

              <motion.p
                variants={textVariants}
                initial="initial"
                animate="animate"
                whileHover="hover"
                className="text-gray-300 text-sm"
              >
                {stat.label}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;