import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import { Socials } from "../pages/api/typings";

type Props = {
  socials: Socials[];
};

const Header = ({ socials }: Props) => {
  console.log('socials', socials);
  
  return (
    <div className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center ">
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
        className="flex flex-row items-center"
      >
        <>
        {socials.map((social) => (
          <SocialIcon
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
          <div className="hidden md:inline-flex text-sm items-center text-gray-400 capitalize">
            Get in touch
          </div>
        </Link>
      </motion.div>
    </div>
  );
};

export default Header;
