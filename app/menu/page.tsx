"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import StatsSection from "../components/StatsSection";


export default function MenuPage() {
  const router = useRouter();

  const handleDrinksClick = () => {
    router.push("/shop");
  };

  return (
    <div className="bg-white min-h-screen">
      <motion.header
        className="text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-black pt-9">Our Menu</h1>
        <p className="text-gray-500 mt-2">Discover our delicious offerings</p>
      </motion.header>

      <motion.section
        className="container mx-auto px-4 py-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="grid lg:grid-cols-2 gap-10">
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/images/Rectangle 8874 (1).png"
              alt="Starter Menu"
              width={500}
              height={400}
              className="rounded-lg"
            />
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-6 text-center pt-24">
              Starter Menu
            </h2>
            <ul className="space-y-4">
              <li className="flex flex-col items-center hover:text-[#FF9F0D]">
                <h5 className="font-semibold text-center">
                  Asian Grilled Chicken Skewers
                </h5>
                <span className="text-orange-500">$35</span>
                <p className="text-center mt-2">
                  Tender and juicy chicken skewers grilled to perfection, served
                  with a side of fresh vegetables and a tangy dipping sauce.
                </p>
              </li>
              <li className="flex flex-col items-center hover:text-[#FF9F0D]">
                <h5 className="font-semibold text-center">
                  Beetroot and Lentil Salad
                </h5>
                <span className="text-orange-500">$45</span>
                <p className="text-center mt-2">
                  A refreshing mix of beetroot, lentils, and fresh herbs, topped
                  with a zesty lemon dressing.
                </p>
              </li>
              <li className="flex flex-col items-center hover:text-[#FF9F0D]">
                <h5 className="font-semibold text-center">
                  Tomato-Basil Pizza Package
                </h5>
                <span className="text-orange-500">$55</span>
                <p className="text-center mt-2">
                  A classic pizza topped with ripe tomatoes, fresh basil, and a
                  blend of mozzarella cheese.
                </p>
              </li>
              <li className="flex flex-col items-center hover:text-[#FF9F0D]">
                <h5 className="font-semibold text-center">
                  Spicy Vegan Potato Curry
                </h5>
                <span className="text-orange-500">$40</span>
                <p className="text-center mt-2">
                  A flavorful vegan curry made with spicy potatoes and mixed
                  vegetables, served with steamed rice.
                </p>
              </li>
            </ul>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className="container mx-auto px-4 py-10"
        onClick={handleDrinksClick}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <div className="grid lg:grid-cols-2 gap-10">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold mb-6 text-center pt-24">
              Drinks
            </h2>
            <ul className="space-y-10">
              <li className="flex flex-col items-center hover:text-[#FF9F0D]">
                <h5 className="font-semibold text-center">Café Macchiato</h5>
                <span className="text-orange-500">$15</span>
                <p className="text-center mt-2">
                  Rich and smooth macchiato with a shot of espresso, topped with
                  a creamy froth.
                </p>
              </li>
              <li className="flex flex-col items-center hover:text-[#FF9F0D]">
                <h5 className="font-semibold text-center">
                  Agave Spirit Cappuccino
                </h5>
                <span className="text-orange-500">$20</span>
                <p className="text-center mt-2">
                  A twist on the classic cappuccino with a hint of agave
                  sweetness.
                </p>
              </li>
              <li className="flex flex-col items-center hover:text-[#FF9F0D]">
                <h5 className="font-semibold text-center">
                  Citrus Latte Cocktail
                </h5>
                <span className="text-orange-500">$18</span>
                <p className="text-center mt-2">
                  A refreshing latte with a hint of citrus, perfect for a summer
                  day.
                </p>
              </li>
              <li className="flex flex-col items-center hover:text-[#FF9F0D]">
                <h5 className="font-semibold text-center">
                  Tropical Basil Fruit Punch
                </h5>
                <span className="text-orange-500">$22</span>
                <p className="text-center mt-2">
                  A tropical fruit punch mixed with basil leaves, offering a
                  sweet and refreshing beverage.
                </p>
              </li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/images/unsplash_akwA-GPF710.png"
              alt="Drinks"
              width={500}
              height={400}
              className="rounded-lg"
            />
          </motion.div>
        </div>
      </motion.section>

      <StatsSection />
    
    </div>
  );
}













