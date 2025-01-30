import React from "react";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-white">
      <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold text-orange-500 mb-4">
        404
      </h1>
      <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-4">
        Oops! Looks like something went wrong
      </h2>
      <p className="text-center text-gray-600 mb-6">
        Page cannot be found! We’ll have it figured out in no time.
        <br />
        Meanwhile, check out these fresh ideas:
      </p>
      <Link href="/">
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md font-bold">
          Go to Home
        </button>
      </Link>
    </div>
  );
}
