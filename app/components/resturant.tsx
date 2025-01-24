








import React from 'react';



import Image from "next/image";
// import { Button } from "@/components/ui/button";
import { Button } from "components/ui/button";


export default function HomePage(): JSX.Element {
  return (
    <header className="relative bg-black text-white shadow-md pt-36 w-full h-screen">
     
      <Image
        src="/images/unsplash_qom5MPOER-I.png"
        alt="wallpaper"
        fill
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      />

      <div className="container mx-auto flex flex-col items-center space-y-6 relative z-10 px-4 md:px-0 h-full">
        {/* Hero Section */}
        <div className="flex justify-end w-full relative group">
          <Image
            src="/images/Image.png"
            alt="banner"
            width={878}
            height={670}
            className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
          />
        </div>

        <Image
          src="/images/Its Quick & Amusing!.png"
          alt="banner"
          width={249}
          height={40}
          className="absolute z-10 left-6 md:left-64 top-[8.5rem] md:top-[8.5rem] transition-opacity duration-500"
        />

        <h1 className="text-4xl md:text-6xl text-white absolute z-10 left-6 md:left-64 top-[11rem] md:top-[11rem] font-semibold font-inter leading-tight transition-transform duration-500 hover:scale-105">
          <span className="text-[#FF9F0D]">Th</span>
          <span className="text-white">e</span> Art of speed <br /> food Quality
        </h1>

        <div className="absolute z-0 top-[20rem] left-6 md:left-64 space-y-4 md:space-y-6">
          <p className="text-[14px] md:text-[16px] text-white font-normal">
            A restaurant is a place where people enjoy delicious
            <br />
            food and great service in a comfortable setting.
          </p>
          <div className="relative">
            <Button className="text-[#E0DFDF] text-[14px] md:text-[16px] bg-[#FF9F0D] rounded-full w-full h-12 md:w-48 md:h-14 absolute z-10 mt-8 right-6 md:right-44 hover:bg-white hover:text-[#FF9F0D] transition-transform duration-300 hover:scale-105">
              See Menu
            </Button>
          </div>
        </div>

        {/* Social Icons */}
        <Image
          src="/images/Group 1000002057.png"
          alt="social"
          width={25}
          height={492}
          className="absolute z-10 left-6 md:left-52 top-0 mt-20 transition-transform duration-300 hover:scale-105"
        />
      </div>
    </header>
  );
}
