import React from "react";
import Typewriter from "typewriter-effect";
import BackgroundCircle from "./BackgroundCircle";
import Link from "next/link";
import { PageInfo } from "../typings";
import { urlFor } from "../lib/sanity";

type HeroProps = {
  pageInfo: PageInfo;
};

const Hero = ({pageInfo}: HeroProps) => {
  return (
    <div className="flex items-center justify-center h-screen flex-col space-y-8 text-center overflow-hidden">
      <BackgroundCircle />
      <img
        className="relative rounded-full mx-auto object-cover h-32 w-32"
        src={urlFor(pageInfo?.heroImage).url()}
        height="500"
        width="500"
        alt=""
      />

      <div className="z-20">
        <div className="text-sm uppercase tracking-[15px] text-gray-500 pb-2">
          {pageInfo?.role}
        </div>
        <div className="text-4xl lg:text-6xl font-semibold tracking-wide">
          <Typewriter
            options={{
              strings: [
                `Hi! I'm ${pageInfo?.name}`,
                "Code Blooded",
                "But Loves To Code more",
              ],
              autoStart: true,
              loop: true,
              delay: 100,
            }}
          />
        </div>
        <div className="pt-5">
          <Link href="#about">
            <button className="herobutton">About</button>
          </Link>
          <Link href="#experience">
            <button className="herobutton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="herobutton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="herobutton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
