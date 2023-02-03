import React from "react";
import Link from "next/link";
import { HonorType } from "@/types/HonorType";

const HonorsItem: React.FC<HonorType> = ({ title, description, link }) => {
  const [readMore, setReadMore] = React.useState(false);
  return (
    <div className="max-w-sm p-6 border rounded-lg shadow bg-zinc-800 border-zinc-700 hover:ring-2 hover:ring-zinc-600 transition-all ease-in-out duration-300 cursor-default">
      <h5 className="mb-2 text-lg font-bold text-white">{title}</h5>
      <div
        className={
          "mb-4 text-base font-normal text-gray-500 dark:text-gray-400"
        }
      >
        <div className={readMore ? "line-clamp-none" : "line-clamp-2"}>
          {description}
        </div>{" "}
        <p
          className="cursor-pointer text-slate-300 hover:underline"
          onClick={() => setReadMore(!readMore)}
        >
          {readMore ? "Read Less" : "Read More"}
        </p>
      </div>
      <Link
        href={link}
        className="inline-flex items-center text-purple-500 hover:underline"
      >
        See more
        <svg
          className="w-5 h-5 ml-2"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
          <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
        </svg>
      </Link>
    </div>
  );
};

export default HonorsItem;
