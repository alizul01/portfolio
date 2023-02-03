import React from "react";
import Image from "next/image";
import Link from "next/link";
import { StoriesType } from "@/types/StoriesType";

const StoriesItem: React.FC<StoriesType> = ({name, description, images, alt, link}) => {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      className="bg-gray-600 max-w-[14rem] rounded-lg relative overflow-hidden"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {hover && (
        <div className="absolute w-full h-full transition-all bg-black/40 flex justify-center items-center">
          <Link
            href={link}
            className="px-3 py-2 bg-gray-500 cursor-pointer rounded-md"
          >
            Read more
          </Link>
        </div>
      )}
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