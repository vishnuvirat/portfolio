import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import { Experience } from "../typings";

type Props = {
  experiences:Experience[]
};

function WorkExperience({ experiences }: Props) {
  

  return (
    <div className="h-screen flex flex-col relative overflow-hidden text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="text-sm sm:text-2xl text-gray-500 sm:text-gray-500 lg:text-gray-500 absolute top-24 uppercase tracking-[20px]"
      >
        <div className="">Experience</div>
      </motion.div>

      <div className="flex w-full space-x-5 p-10 snap-x snap-mandatory overflow-x-scroll scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {experiences?.map(experience => (
          <ExperienceCard key={experience._id} experience={experience} />
        ))}
      </div>
    </div>
  );
}

export default WorkExperience;
