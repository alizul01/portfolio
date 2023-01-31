import React from "react";
import Link from "next/link";
import { AiFillInstagram } from "react-icons/ai";
import { SocialMediaTypes } from '../types/SocialMediaTypes';

const SocialMedia: React.FC<SocialMediaTypes>  = ({icon, url}) => {
  return (
    <div>
      <Link target={"_blank"} href={url}>
        <span className="rounded-full text-2xl md:text-3xl transition-all duration-300 ease-in-out">
            {icon}
        </span>
      </Link>
    </div>
  );
}

export default SocialMedia;