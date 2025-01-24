"use client";

// import React from "react";
import React from 'react';

import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="main-container w-[630px] h-[342px] text-[0px] rounded-[6px] relative mx-auto my-0">
      <span className="block h-[104px] font-['Helvetica'] text-[96px] font-bold leading-[104px] text-[#ff9f0d] relative text-left whitespace-nowrap z-[2] mt-0 mr-0 mb-0 ml-[235px]">
        404
      </span>
      <span className="block h-[40px] font-['Helvetica'] text-[32px] font-bold leading-[40px] text-[#333333] relative text-left whitespace-nowrap mt-[32px] mr-0 mb-0 ml-0">
        Oops! Looks like something went wrong
      </span>
      <span className="flex w-[490px] h-[52px] justify-center items-start font-['Inter'] text-[18px] font-normal leading-[26px] text-[#4f4f4f] relative text-center overflow-hidden z-[1] mt-[24px] mr-0 mb-0 ml-[70px]">
        Page cannot be found! We’ll have it figured out in no time.
        <br />
        Meanwhile, check out these fresh ideas:
      </span>
      <Link href="/">
        <button className="flex w-[197px] pt-[16px] pr-[48px] pb-[16px] pl-[48px] gap-[10px] justify-center items-center flex-nowrap bg-[#ff9f0d] rounded-[6px] border-none relative z-[3] pointer mt-[32px] mr-0 mb-0 ml-[217px]">
          <span className="h-[26px] shrink-0 basis-auto font-['Helvetica'] text-[18px] font-bold leading-[26px] text-[#fff] relative text-left whitespace-nowrap z-[4]">
            Go to Home
          </span>
        </button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
