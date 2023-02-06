import { SkillsTypes } from "@/types/SkillsTypes";
import React from "react";
import { AiFillHtml5 } from "react-icons/ai";
import { FaReact, FaCodeBranch } from "react-icons/fa";

const SkillsItem: React.FC<SkillsTypes> = ({
  title,
  textBgColor,
  icon,
  backgroundColor,
  SkillSet,
}) => {
  return (
    <>
      <ol className="relative border-l border-gray-700 ml-4 cursor-default">
        <li className="mb-10 ml-6">
          <span
            className={[
              "absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-8  dark:ring-gray-900 text-sm",
              backgroundColor,
            ].join(" ")}
          >
            {icon}
          </span>
          <h1 className="text-bold text-lg flex flex-row gap-2 items-center">
            {title}
          </h1>
          <div className="flex flex-col gap-3 mt-3">
            <div
              className={[
                "w-full p-2 rounded-lg flex flex-col gap-4",
                backgroundColor,
              ].join(" ")}
            >
              <div className="flex flex-row gap-2 flex-wrap">
                {SkillSet.map((skill, index) => (
                  <span
                    key={index}
                    className={[
                      "p-1 rounded-lg items-center flex flex-row gap-2 px-2 py-1 md:px-3 md:py-2 justify-around hover:bg-gray-400 hover:scale-95 transition-all duration-300 ease-in-out",
                      textBgColor,
                    ].join(" ")}
                  >
                    {skill.icon}
                    <p className="text-xs md:text-sm">{skill.title}</p>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </li>
      </ol>
    </>
  );
};

export default SkillsItem;
