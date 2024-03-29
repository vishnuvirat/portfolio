import React from "react";
import { motion } from "framer-motion";
import { PageInfo } from "../typings";
import { urlFor } from "../lib/sanity";
// import Link from "next/link";

type Props = {
  pageInfo: PageInfo;
};

const About = ({ pageInfo }: Props) => {
  return (
    <div className="h-screen flex flex-col md:flex-row relative text-center md:text-left max-w-7xl mx-auto justify-evenly px-10 items-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="tracking-[20px] text-gray-500 text-lg sm:text-2xl absolute top-24 uppercase"
      >
        About
      </motion.div>

      <motion.div
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.5,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{ once: true }}
      >
        <img
          className="-mb-20 md:mb-0 flex-shrink-0 w-32 h-32 sm:w-52 sm:h-52 rounded-full object-cover md:rounded-full md:w-40 md:h-40 xl:rounded-none xl:w-[350px] xl:h-[350px]"
          src={urlFor(pageInfo?.profilePic).url()}
          alt=""
          height="1000"
          width="1000"
        ></img>
      </motion.div>
      <div className="space-y-10 px-0 md:px-10">
        <div className="text-2xl font-semibold md:text-3xl xl:text-5xl">
          Here is a Little Background
        </div>
        <div className="text-sm md:max-w-7xl md:mx-auto max-h-44 overflow-y-scroll scrollbar-thin scrollbar-track-black scrollbar-thumb-[#F7AB0A]/80 ">
          {pageInfo?.backgroundInformation}
        </div>
      </div>
    </div>
  );
};

export default About;
