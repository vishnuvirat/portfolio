import React from "react";
import Typewriter from "typewriter-effect";
import BackgroundCircle from "./BackgroundCircle";
import Image from "next/image";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="flex items-center justify-center h-screen flex-col space-y-8 text-center overflow-hidden">
      <BackgroundCircle />
      <Image
        className="relative rounded-full mx-auto object-cover h-32 w-32"
        src="/vishnu.jpg"
        height="500"
        width="500"
        alt=""
      />

      <div className="text-sm uppercase tracking-[15px] text-gray-500 pb-2 ">Software Engineer</div>
      <div className="text-4xl lg:text-6xl font-semibold tracking-wide">
        <Typewriter
          options={{
            strings: [
              "Hi! Iam Vishnu",
              "Code Blooded",
              "But Loves To Code more",
            ],
            autoStart: true,
            loop: true,
            delay: 100
          }}
        />
      </div>
    </div>
  );
};

export default Hero;
