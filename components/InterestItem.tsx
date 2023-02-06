import React from "react";
import { InterestedTypes } from '@/types/InterestedTypes';

const InterestItem: React.FC<InterestedTypes> = ({color, icon, title}) => {
  return (
    <div className={["flex justify-around items-center gap-4 rounded-lg w-fit px-2 py-2  hover:scale-95 transition-all duration-30 cursor-pointer", color].join(" ")}>
      {icon}
      <h2 className="text-sm md:text-base font-medium">{title}</h2>
    </div>
  );
}

export default InterestItem;