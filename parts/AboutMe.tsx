"use client";
import React from "react";
export default function AboutMe() {
  const [readMore, setReadMore] = React.useState(false);
  return (
    <div className="mx-6">
      <h1 className="heading decoration-teal-600 underline hover:decoration-teal-300">
        About Me
      </h1>
      <p className="text-sm md:text-base font-medium leading-6">
        <span className={readMore ? "line-clamp-none" : "line-clamp-3"}>
          Hi, Great to see you here! My name is Muhammad Ali Zulfikar , i came
          from Malang. I&apos;m a{" "}
          <span className="underline decoration-red-300">
            front-end web developer
          </span>{" "}
          and content creator. Currently studying Computer Science at{" "}
          <span className="underline decoration-blue-600">
            State Polytechnic of Malang.
          </span>
        </span>{" "}
        <a
          className="cursor-pointer text-slate-300 hover:underline md:hidden"
          onClick={() => setReadMore(!readMore)}
        >
          {readMore ? "Read Less" : "Read More"}
        </a>
      </p>
    </div>
  );
}
