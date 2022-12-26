import React from "react";
// import Image from "next/image";
import { motion } from "framer-motion";
import { Experience } from "../typings";
import { urlFor } from "../lib/sanity";

type Props = {
  experience: Experience;
};

const ExperienceCard = ({ experience }: Props) => {

  return (
    <div
      className="flex flex-col items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[700px] snap-center bg-[#292929]
     p-10 rounded-sm opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden "
    >
      <motion.div
        initial={{
          x: -100,
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
        <img
          className="rounded-full h-20 w-20 sm:h-32 sm:w-32 xl:w-[200px] xl:h-[200px] object-cover object-center"
          alt=""
          src={urlFor(experience?.companyImage).url()}
          height="1000"
          width="1000"
        ></img>
      </motion.div>
      <div className="px-0 md:px-10">
        <div className=" text-lg sm:text-4xl font-light">{experience?.jobTitle}</div>
        <div className="text-lg font-bold sm:text-2xl mt-1">{experience?.company}</div>
        <div className="flex space-x-2 my-2">
          {experience.technologies.map((technology) => (
            <img
              key={technology._id}
              className=" h-6 w-6 rounded-full sm:h-10 sm:w-10 sm:rounded-full"
              src={urlFor(technology?.image).url()}
            ></img>
          ))}
        </div>
        <div className="text-xs sm:text-xl uppercase text-gray-300">
          {new Date(experience.datestarted).toDateString()} -
          {experience.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience.dateEnded).toDateString()}
        </div>
        <ul className="w-56 sm:w-full list-disc space-y-4 ml-5 h-56 text-sm sm:text-lg pr-5 max-h-96 overflow-y-scroll scrollbar-thin scrollbar-track-black scrollbar-thumb-[#F7AB0A]/80">
          {experience.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceCard;
