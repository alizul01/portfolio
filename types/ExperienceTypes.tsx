import React from "react";
import { AiFillVideoCamera, AiOutlineLaptop } from "react-icons/ai";
import { HiAcademicCap, HiCode, HiDeviceMobile } from "react-icons/hi";

export type ExperienceCompany = {
  company: string;
  ExperienceData: ExperienceTypes[];
  color: string;
};

export type ExperienceTypes = {
  title: string;
  company: string;
  time: string;
  description: string;
  isLatest: boolean;
  icon: React.ReactElement;
};

export const EXPERIENCE: ExperienceCompany[] = [
  {
    company: "Workshop Riset Informatika",
    ExperienceData: [
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
        time: "July 2022 - Present",
        description:
          "Content Creator is a field that I have been involved in for more than 4 years, at this time I was given the mandate to become a content creator in the creative workshop & informatics research team. Currently I have succeeded in creating marketing content related to early access and hacktoberfest events!",
        icon: <AiFillVideoCamera />,
        isLatest: false,
      },
    ],
    color: "bg-red-600 text-red-200 border-red-400"
  },
  {
    company: "Freelance",
    ExperienceData: [
      {
        title: "Freelancer",
        company: "Freelance",
        time: "July 2018 - Present",
        description:
          "As a  freelancer i am responsible to create a videography, video editing, website for client, and also responsible to manage the website that i have created. Oftenly i use Adobe Premiere Pro and After Effect for video editing. But for web development i often use  NextJS or Laravel as a framework to create a website.",
        isLatest: false,
        icon: <AiOutlineLaptop />,
      },
    ],
    color: "bg-blue-700 text-blue-200 border-blue-400"
  },
  {
    company: "Polinema Mengajar",
    ExperienceData: [
      {
        title: "Head of Media Information",
        company: "Polinema Mengajar",
        time: "August 2022 - Present",
        description:
          "Becoming a head of the media and information division was a new challenge for me, before I worked as a volunteer and now I am an administrator in a teaching polynema. Of course I need to learn a lot and re-evaluate what my team and I have done, my team and I have succeeded in making creative things at this time.",
        icon: <HiAcademicCap />,
        isLatest: false,
      },
    ],
    color: "bg-green-700 text-green-200 border-green-400"
  },
  {
    company: "Ngalup.co",
    ExperienceData: [
      {
        title: "Content Creator",
        company: "Ngalup.co",
        time: "March 2022 - July 2022",
        description:
          "As a Video Content Manager, I am responsible for creating engaging and creative videos for Tik Tok and Instagram Reels. I manage the entire video production process, from pre-production to post-production, and am involved in conceptualizing and executing video ideas for events such as Ngalup.",
        icon: <HiDeviceMobile />,
        isLatest: false,
      },
    ],
    color: "bg-purple-700 text-purple-200 border-purple-400"
  },
];
