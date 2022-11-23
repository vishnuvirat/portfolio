import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type Props = {
  directionLeft?: boolean;
};

const Skill = ({ directionLeft }: Props) => {
  return (
    <div>
      <motion.div
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="group relative flex cursor-pointer"
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
    </div>
  );
};

export default Skill;
