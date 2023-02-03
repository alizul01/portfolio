import React from "react";
import Image from "next/image";
import { EXPERIENCE } from "@/types/ExperienceTypes";
import ExperienceItem from "@/components/ExperienceItem";

export default function PastExperience() {
  return (
    <div className="mx-6 flex flex-col gap-6">
      <div className="heading decoration-blue-600 hover:decoration-blue-400">
        Past Experience
      </div>
      <div>
        <ol>
          {EXPERIENCE.map((item, index) => (
            <li key={index} className="flex flex-col gap-4">
              <div
                className={`items-center justify-between py-2 px-3 rounded-lg shadow-sm sm:flex w-fit ${item.color}`}
              >
                <h1 className="font-bold text-base">{item.company}</h1>
              </div>
              <ol className="relative border-l border-gray-700 ml-6 mb-6">
                {item.ExperienceData.map((experience, keyIndex) => (
                  <ExperienceItem
                    company={experience.company}
                    description={experience.description}
                    icon={experience.icon}
                    isLatest={experience.isLatest}
                    time={experience.time}
                    title={experience.title}
                    key={keyIndex}
                  />
                ))}
              </ol>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
