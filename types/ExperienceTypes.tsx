import React from "react";
import { AiFillVideoCamera } from "react-icons/ai";
import { HiCode } from "react-icons/hi";
export type ExperienceTypes = {
  title: string;
  company: string;
  time: string;
  description: string;
  isLatest: boolean;
  icon: React.ReactElement;
};

export const EXPERIENCE: ExperienceTypes[] = [
  {
    title: "Head of Web Developer Division",
    company: "Workshop Riset Informatika",
    time: "January 2023 - Present",
    description:
      "Being a Head of Web Developer Division at Workshop Riset Informatika, I am responsible to managing the web developer division, and also responsible to manage the web developer team.",
    isLatest: true,
    icon: <HiCode />,
  },
  {
    title: "Content Creator",
    company: "Workshop Riset Informatika",
    time: "January 2023 - Present",
    description:
      "Content Creator is a field that I have been involved in for more than 4 years, at this time I was given the mandate to become a content creator in the creative workshop & informatics research team. Currently I have succeeded in creating marketing content related to early access and hacktoberfest events!",
    icon: <AiFillVideoCamera />,
    isLatest: false,
  },
];
