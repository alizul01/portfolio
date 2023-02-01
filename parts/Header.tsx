import React from "react";
import Image from "next/image";
import Banner from "@/parts/Banner";
import { AiFillInstagram } from "react-icons/ai";
import { BsBoxArrowUpRight } from "react-icons/bs";
import Link from "next/link";
import { socialMediaData } from "../types/SocialMediaTypes";
import SocialMedia from "../components/SocialMedia";

export default function Header() {
  return (
    <div>
      <div className="relative mb-14 md:mb-20">
        <Image
          src={"/img/favicon.jpg"}
          alt="Ali Zulfikar"
          width={1080}
          height={1080}
          className="rounded-full absolute -bottom-10 md:-bottom-14 w-20 md:w-28 mx-4 border-4 border-black"
        />
        <Banner />
      </div>
      <div className="mx-6 flex flex-col md:flex-row gap-5 justify-between">
        <div>
          <h1 className="text-xl md:text-2xl font-bold">
            Muhammad Ali Zulfikar
          </h1>
          <h3 className="text-sm md:text-base font-medium text-gray-500">
            @alizul01
          </h3>
        </div>
        <div className="flex flex-row md:flex-col justify-between  md:justify-start items-start md:items-end gap-2">
          <div className="w-auto flex flex-row gap-3 md:gap-4">
            {socialMediaData.map((item) => (
              <div key={item.name}>
                <SocialMedia name={item.name} icon={item.icon} url={item.url} />
              </div>
            ))}
          </div>
          <div id="resume">
            <Link
              href="/resume"
              className="cursor-pointer text-sm md:text-base font-semibold flex flex-row gap-2 items-center"
            >
              Resume <BsBoxArrowUpRight className="text-xs" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
