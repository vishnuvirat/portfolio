import React from "react";
// import Image from "next/image";
import { motion } from "framer-motion";
import { Experience } from "../pages/api/typings";
import { urlFor } from "../pages/api/sanity";

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
        <img
          className="rounded-full h-32 w-32 xl:w-[200px] xl:h-[200px] object-cover object-center"
          alt=""
          src={urlFor(experience?.companyImage).url()}
          height="1000"
          width="1000"
        ></img>
      </motion.div>
      <div className="px-0 md:px-10">
        <div className="text-4xl font-light">CEO of Vinod-sarees</div>
        <div className="font-bold text-2xl mt-1">Vishnu</div>
        <div className="flex space-x-2 my-2">
          {experience.technologies.map((technology) => (
            <img
              key={technology._id}
              className="h-10 w-10 rounded-full"
              src={urlFor(technology?.image).url()}
            ></img>
          ))}
        </div>
        <div className="uppercase text-gray-300">
          {new Date(experience.datestarted).toDateString()} -
          {experience.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience.dateEnded).toDateString()}
        </div>
        <ul className="list-disc space-y-4 ml-5 text-lg pr-5 max-h-96 overflow-y-scroll scrollbar-thin scrollbar-track-black scrollbar-thumb-[#F7AB0A]/80">
          {experience.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceCard;
