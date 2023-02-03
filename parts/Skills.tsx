import React from "react";
import { AiFillHtml5 } from "react-icons/ai";
import { FaCodeBranch, FaReact } from "react-icons/fa";
import SkillsItem from '@/components/SkillsItem';
import { SKILLS } from '@/types/SkillsTypes';

export default function Skills() {
  return (
    <div className="mx-6">
      <h1 className="heading underline decoration-orange-600 hover:decoration-orange-400">Skills</h1>
      {SKILLS.map((skill, index) => (
        <SkillsItem SkillSet={skill.SkillSet} backgroundColor={skill.backgroundColor} icon={skill.icon} textBgColor={skill.textBgColor} title={skill.title} key={index} />
      ))}
    </div>
  );
}
