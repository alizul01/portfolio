import React from "react";
import { BsCamera, BsCameraVideoFill, BsFillPaletteFill } from "react-icons/bs";
import { FaLaptopCode, FaReact } from "react-icons/fa";
import {
  SiTailwindcss,
  SiLaravel,
  SiNodedotjs,
  SiNextdotjs,
  SiTypescript,
  SiCplusplus,
  SiJava,
  SiFlutter,
  SiAdobephotoshop,
  SiAdobepremierepro,
  SiAdobeillustrator,
  SiFigma,
  SiAdobeaftereffects,
} from "react-icons/si";

export type SkillSet = {
  title: string;
  icon: React.ReactElement;
};

export type SkillsTypes = {
  icon: React.ReactElement;
  title: string;
  textBgColor: string;
  backgroundColor: string;
  SkillSet: SkillSet[];
};

export const SKILLS: SkillsTypes[] = [
  {
    icon: <FaLaptopCode />,
    title: "Full Stack Developer",
    textBgColor: "bg-blue-500",
    backgroundColor: "bg-blue-800",
    SkillSet: [
      {
        title: "React js",
        icon: <FaReact />,
      },
      {
        title: "TailwindCSS",
        icon: <SiTailwindcss />,
      },
      {
        title: "Laravel",
        icon: <SiLaravel />,
      },
      {
        title: "Node js",
        icon: <SiNodedotjs />,
      },
      {
        title: "Next js",
        icon: <SiNextdotjs />,
      },
      {
        title: "Typescript",
        icon: <SiTypescript />,
      },
      {
        title: "Java",
        icon: <SiJava />,
      },
      {
        title: "Flutter",
        icon: <SiFlutter />,
      },
      {
        title: "C++",
        icon: <SiCplusplus />,
      },
    ],
  },
  {
    icon: <BsFillPaletteFill />,
    title: "Creative Industry",
    textBgColor: "bg-orange-500",
    backgroundColor: "bg-orange-800",
    SkillSet: [
      {
        title: "Figma",
        icon: <SiFigma />,
      },
      {
        title: "Photoshop",
        icon: <SiAdobephotoshop />,
      },
      {
        title: "Premiere Pro",
        icon: <SiAdobepremierepro />,
      },
      {
        title: "Illustrator",
        icon: <SiAdobeillustrator />,
      },
      {
        title: "After Effects",
        icon: <SiAdobeaftereffects />,
      },
      {
        title: "Videography",
        icon: <BsCameraVideoFill />,
      },
      {
        title: "Photography",
        icon: <BsCamera />,
      }
    ],
  },
];
