"use client";
import React from "react";
import Link from "next/link";
import { HONORS } from '../types/HonorType';
import HonorsItem from '../components/HonorsItem';

export default function Honors() {
  return (
    <section>
      <h1 className="heading underline decoration-purple-600 hover:decoration-purple-400">Honors</h1>
      <div className="flex flex-col md:flex-row gap-3 flex-wrap justify-center items-center">
        {HONORS.map((item, index) => (
          <HonorsItem key={index} description={item.description} link={item.link} title={item.title} />
        ))}
      </div>
    </section>
  );
}
