import React from "react";
import { INTEREST } from "@/types/InterestedTypes";
import InterestItem from "../components/InterestItem";

const Interest: React.FC = () => {
  return (
    <div className="mx-6">
      <h1 className="heading decoration-emerald-700 hover:decoration-emerald-500">
        My Interest
      </h1>
      <div className="flex flex-row flex-wrap gap-3">
        {INTEREST.map((item) => (
          <InterestItem
            color={item.color}
            icon={item.icon}
            title={item.title}
            key={item.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Interest;
