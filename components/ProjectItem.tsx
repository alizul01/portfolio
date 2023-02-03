import React from "react";
import Image from "next/image";
import { ProjectType } from "@/types/ProjectType";

const ProjectItem: React.FC<ProjectType> = ({ image, link, title }) => {
  const [isHover, setIsHover] = React.useState(false);
  return (
    <div
      className="w-64 max-h-44 flex relative justify-center items-center rounded-lg overflow-hidden cursor-pointer"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div
        className={[
          "overflow-hidden w-full h-full",
          isHover && "scale-110",
          "transition-all duration-500 ease-in-out",
        ].join(" ")}
      >
        <Image src={image} alt="myava" width={1080} height={1080} />
      </div>
      <div className="absolute h-full w-full bg-gradient-to-t from-black to-bg-black/30">
        <div className="h-full w-full flex justify-center items-end pb-4 text-center px-2">
          <h1 className="text-white text-lg font-bold">{title}</h1>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
