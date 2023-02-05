import React from "react";
import Image from "next/image";
import Banner from "@/components/Banner";
import { BsBoxArrowUpRight } from "react-icons/bs";
import Link from "next/link";
import { MdVerified } from "react-icons/md";

export default function Header() {
  return (
    <div>
      <div className="relative mb-14 md:mb-20">
        <Image
          src={"/img/myava.png"}
          alt="Ali Zulfikar"
          width={1080}
          height={1080}
          className="rounded-full absolute -bottom-10 md:-bottom-14 w-20 md:w-28 mx-4 border-4 border-black bg-slate-800 flex justify-center items-center"
        />
        <Banner />
      </div>
      <div className="mx-6 flex flex-col md:flex-row gap-5 justify-between">
        <div>
          <span className="flex flex-row gap-3 justify-start items-center">
            <h1 className="text-xl md:text-2xl font-bold">
              Muhammad Ali Zulfikar
            </h1>
            <MdVerified className="text-xl text-blue-300" />
          </span>
          <h3 className="text-sm md:text-base font-medium text-gray-500">
            @alizul01
          </h3>
        </div>
        <div className="flex flex-row md:flex-col justify-between  md:justify-start items-start md:items-end gap-2">
          <div id="resume">
            <Link
              href="/resume"
              className="cursor-pointer text-sm md:text-base font-semibold flex flex-row gap-2 items-center hover:underline decoration-slate-300"
            >
              Resume <BsBoxArrowUpRight className="text-xs" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
