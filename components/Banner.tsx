import React from "react";

export default function Banner() {
  return (
    <div className="h-28 md:h-44 overflow-hidden rounded-b-lg bg-gray-800 text-black flex justify-center items-center hover:bg-gray-700 transition duration-500 ease-in-out cursor-pointer active:bg-gray-900 flex-col group-active">
      <h4 className="text-xs md:text-lg font-bold bg-gradient-to-r from-red-300 to-orange-200 bg-clip-text text-transparent">
        Welcome to my
      </h4>
      <h1 className="text-base md:text-xl font-bold bg-gradient-to-r from-red-300 to-orange-200 bg-clip-text text-transparent">
        Portfolio Pages.
      </h1>
      <span className="absolute bottom-2 text-xs font-bold bg-gradient-to-l from-red-300 to-orange-200 bg-clip-text text-transparent">
        Hold me
      </span>
    </div>
  );
}
