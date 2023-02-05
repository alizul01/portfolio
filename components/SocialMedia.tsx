import React from "react";
import Link from "next/link";
import { AiFillInstagram } from "react-icons/ai";
import { SocialMediaTypes } from "@/types/SocialMediaTypes";

const SocialMedia: React.FC<SocialMediaTypes> = ({ icon, url }) => {
  return (
    <div className="hover:bg-surface-200 p-2 rounded-md text-2xl md:text-3xl transition-all duration-300 ease-in-out text-white">
      <Link
        target={"_blank"}
        href={url}
      >
        {icon}
      </Link>
    </div>
  );
};

export default SocialMedia;
