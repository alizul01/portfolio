"use client";
import StoriesItem from "@/components/StoriesItem";
import React from "react";
import { STORIES } from "../types/StoriesType";

export default function Featured() {
  return (
    <div className="mx-6">
      <h1 className="heading decoration-rose-600 underline hover:decoration-rose-300">
        Stories
      </h1>
      <div className="flex flex-col md:flex-row gap-3 flex-wrap items-center">
        {STORIES.map((item, index) => (
          <StoriesItem
            link={item.link}
            alt={item.alt}
            description={item.description}
            images={item.images}
            name={item.name}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}
