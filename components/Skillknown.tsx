import React from "react";
import { motion } from "framer-motion";
import { Skill } from "../typings";
import { urlFor } from "../lib/sanity";

type Props = {
  skill:Skill;
  directionLeft?: boolean;
};

const Skill = ({skill, directionLeft }: Props) => {
  
  return (
    <div className="group relative flex cursor-pointer">
      <motion.div
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
      >
        <img
          src={urlFor(skill?.image).url()}
          alt=""
          height="1000"
          width="1000"
          className="rounded-full h-16 w-16 border
         border-gray-500 object-cover sm:w-24 sm:h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-200 ease-in-out"
        />
      </motion.div>

      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-16 w-16 sm:w-24 sm:h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <div className="text-lg sm:text-3xl font-bold text-black opacity-100">{skill.progress}%</div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
