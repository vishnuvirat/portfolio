import React from "react";
import Typewriter from "typewriter-effect";
import BackgroundCircle from "./BackgroundCircle";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="flex items-center justify-center h-screen flex-col space-y-8 text-center overflow-hidden">
      <BackgroundCircle/>
      <Typewriter
        options={{
          strings: ["Hi! Iam Vishnu", "Code Blooded", "<But Loves To Code more/>"],
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  );
};

export default Hero;
