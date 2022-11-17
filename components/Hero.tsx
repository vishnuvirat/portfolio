import React from "react";
import Typewriter from "typewriter-effect";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div>
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
