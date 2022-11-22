import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type Props = {};

const ExperienceCard = (props: Props) => {
  return (
    <div className="flex flex-col items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[700px] snap-center bg-[#292929]
     p-10 rounded-sm opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden ">
      <motion.div
        initial={{
          y: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.5,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
      >
        <Image
          className="rounded-full h-32 w-32 xl:w-[200px] xl:h-[200px] object-cover object-center"
          alt=""
          src="/vishnu.jpg"
          height="1000"
          width="1000"
        ></Image>
      </motion.div>
      <div className="px-0 md:px-10">
        <div className="text-4xl font-light">CEO of Vinod-sarees</div>
        <div className="font-bold text-2xl mt-1">Vishnu</div>
        <div className="">Tech used... will display icons</div>
        <div className="uppercase text-gray-300">
          Started Working... -Ended...
        </div>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
        </ul>
      </div>
    </div>
  );
};

export default ExperienceCard;
