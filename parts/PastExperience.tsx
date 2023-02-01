import React from "react";
import Image from "next/image";
import { EXPERIENCE } from '../types/ExperienceTypes';
import ExperienceItem from '../components/ExperienceItem';

export default function PastExperience() {
  return (
    <div className="mx-6 flex flex-col gap-6">
      <div className="heading decoration-blue-600 hover:decoration-blue-500">
        Past Experience
      </div>
      <div>
        <ol className="relative border-l border-gray-700 ml-6">
          {EXPERIENCE.map((item, index) => (
            <ExperienceItem company={item.company} description={item.description} icon={item.icon} time={item.time} title={item.title} key={index} isLatest={item.isLatest} />
          ))}
        </ol>
      </div>
    </div>
  );
}
