import React from "react";
import { socialMediaData } from "@/types/SocialMediaTypes";
import SocialMedia from "@/components/SocialMedia";

const Contact = () => {
  return (
    <div>
      <div className="w-auto flex flex-row gap-3 md:gap-4 justify-center items-center">
        {socialMediaData.map((item) => (
          <div key={item.name}>
            <SocialMedia name={item.name} icon={item.icon} url={item.url} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
