import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from "react-icons/ai";
import { SiYoutube } from "react-icons/si";

export type SocialMediaTypes = {
  name: string;
  url: string;
  icon: React.ReactElement;
};

export const socialMediaData: SocialMediaTypes[] = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/alizulfikar/",
    icon: <AiFillLinkedin />,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/alizul01/",
    icon: <AiFillInstagram />,
  },
  {
    name: "Twitter",
    url: "https://twitter.com/panggilajazul",
    icon: <AiFillTwitterCircle />,
  },
  {
    name: "GitHub",
    url: "https://www.github.com/alizul01",
    icon: <AiFillGithub />,
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/c/@AlizulYT",
    icon: <SiYoutube />,
  }
];
