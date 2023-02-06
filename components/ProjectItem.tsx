import React from "react";
import Image from "next/image";
import { ProjectType } from "@/types/ProjectType";
import Link from "next/link";

const ProjectItem: React.FC<ProjectType> = ({ image, link, title }) => {
  const [isHover, setIsHover] = React.useState(false);
  return (
    <div>
      <Link
        href={link}
        target="_blank"
        className="w-full md:w-[14rem] h-44 md:h-36 flex relative justify-center items-center rounded-lg overflow-hidden cursor-pointer border-0"
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
          <Image src={image} alt={title} width={1920} height={1080} className="border-0 overflow-hidden" />
        </div>
        <div className="absolute h-full w-full bg-gradient-to-t from-black to-bg-black/30">
          <div className="h-full w-full flex justify-center items-end pb-2 text-center px-2">
            <h1 className="text-white text-base font-bold">{title}</h1>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProjectItem;
