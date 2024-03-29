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
    <div className="sticky top-0 sm:p-1 lg:p-4 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center ">
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
              style={{ height: 50, width: 50 }}
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
