import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Skill } from "../pages/api/typings";

type Props = {
  skill:Skill;
  directionLeft?: boolean;
};

const Skill = ({skill, directionLeft }: Props) => {
  console.log("im vishnu");
  
  console.log(skill);
  
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
        <Image
          src="/vishnu.jpg"
          alt=""
          height="1000"
          width="1000"
          className="rounded-full h-24 w-24 border
         border-gray-500 object-cover md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-200 ease-in-out"
        />
      </motion.div>

      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <div className="text-3xl font-bold text-black opacity-100">{skill.progress}%</div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
