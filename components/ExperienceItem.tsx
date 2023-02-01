"use client";
import { ExperienceTypes } from "@/types/ExperienceTypes";
import React from "react";

const ExperienceItem: React.FC<ExperienceTypes> = ({
  company,
  description,
  icon,
  time,
  title,
  isLatest,
}) => {
  const [readMore, setReadMore] = React.useState(false);
  return (
    <div>
      <li className="mb-10 ml-6">
        <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-8 ring-gray-900 bg-indigo-900">
          {icon}
        </span>
        <h3 className="flex flex-col md:flex-row md:gap-3  items-start mb-1 text-lg font-semibold text-gray-900 dark:text-white">
          <span>{title}</span>
          {isLatest && (
            <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
              Latest
            </span>
          )}
        </h3>
        <div className="flex flex-col md:flex-row gap-2 items-start md:items-center mb-2">
          <h6 className="text-sm">{company}</h6>
          <div className="hidden md:block w-0.5 h-0.5 bg-gray-300 rounded-full"></div>
          <time className="text-sm font-normal leading-none text-gray-400">
            {time}
          </time>
        </div>
        <p className={ "mb-4 text-base font-normal text-gray-500 dark:text-gray-400"}>
          <span className={readMore ? "line-clamp-none" : "line-clamp-2"}>
            {description}
          </span>{" "}
          <a
            className="cursor-pointer text-slate-300 hover:underline"
            onClick={() => setReadMore(!readMore)}
          >
            {readMore ? "Read Less" : "Read More"}
          </a>
        </p>
      </li>
    </div>
  );
};

export default ExperienceItem;
