"use client";
import ProjectItem from "@/components/ProjectItem";
import React from "react";
import { PROJECT } from "@/types/ProjectType";

const Project: React.FC = () => {
  return (
    <div className="mx-6">
      <h1 className="heading underline decoration-lime-600 hover:decoration-lime-400">
        Project
      </h1>
      <div className="flex flex-col md:flex-row gap-6 md:gap-3 justify-center items-center">
        {PROJECT.map((item, key) => (
          <ProjectItem
            image={item.image}
            link={item.link}
            title={item.title}
            key={key}
          />
        ))}
      </div>
    </div>
  );
};

export default Project;
