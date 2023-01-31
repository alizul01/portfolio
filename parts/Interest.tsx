import React from "react";
import { HiOutlineCode } from 'react-icons/hi';

export default function Interest() {
  return (
    <div className="flex justify-around items-center gap-4 bg-purple-700 text-purple-200 rounded-md w-fit px-2 py-2 mt-5 hover:scale-95 transition-all duration-30 cursor-pointer">
      <HiOutlineCode />
      <h2 className="text-sm md:text-base font-medium">Frontend Developer</h2>
    </div>
  );
}
