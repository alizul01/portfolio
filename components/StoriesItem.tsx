import React from "react";
import Image from "next/image";
import Link from "next/link";
import { StoriesType } from "@/types/StoriesType";

const StoriesItem: React.FC<StoriesType> = ({name, description, images, alt, link}) => {
  return (
    <div
      className="bg-gray-800 max-w-[14rem] rounded-lg relative overflow-hidden"
    >
      <div className="p-2 flex flex-col justify-center items-start gap-3">
        <h6 className="text-gray-400 text-xs">
            {name}
        </h6>
        <p className="text-white text-sm">
          {description}
        </p>
        <div>
          <Image
            src={images}
            alt={alt}
            width={1080}
            height={1080}
            className="rounded-md"
          />
        </div>
      </div>
    </div>
  );
}

export default StoriesItem