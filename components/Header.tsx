import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import { Socials } from "../typings";

type Props = {
  socials: Socials[];
};

const Header = ({ socials }: Props) => {
  
  return (
    <div className="border-2 border-red-700 sticky top-0 sm:p-1 lg:p-4 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center ">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="border-2 border-white  flex flex-row items-center"
      >
        <>
        {socials.map((social) => (
          <SocialIcon
          className="h-6 w-6"
            key={social._id}
            url={social.url}
            fgColor="gray"
            bgColor="transparent"
          />
        ))}
        </>
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >

        <Link href="#contact">
          <SocialIcon
            url="https://mail.google.com/mail/u/0/#inbox"
            fgColor="gray"
            bgColor="transparent"
          />
          <div className="border-2 border-red-500 hidden md:inline-flex text-sm items-center text-gray-400 capitalize">
            Get in touch
          </div>
        </Link>
      </motion.div>
    </div>
  );
};

export default Header;
