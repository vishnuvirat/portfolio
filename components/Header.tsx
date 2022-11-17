import React from "react";
import { SocialIcon } from "react-social-icons";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center ">
      <div className="flex flex-row items-center">
        <SocialIcon
          url="https://twitter.com/jaketrent"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://twitter.com/jaketrent"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://twitter.com/jaketrent"
          fgColor="gray"
          bgColor="transparent"
        />
      </div>
      <div className="flex flex-row items-center">
        <SocialIcon
          url="https://twitter.com/jaketrent"
          fgColor="gray"
          bgColor="transparent"
        />
        <div className="hidden md:inline-flex text-sm items-center text-gray-400 capitalize">
          Get in touch
        </div>
      </div>
    </div>
  );
};

export default Header;
