import React from "react";
import { motion } from "framer-motion";
import Skill from "../components/Skillknown"
import {Skill as SkillType} from "../typings"

type Props = {
  skills:SkillType[];
};

const Skills = ({skills}: Props) => {  
  return (
    <div className="h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="tracking-[20px] text-gray-500 text-lg sm:text-2xl absolute top-24 uppercase"
      >
        Skills
      </motion.div>
      <div className="text-xs sm:text-sm absolute top-36 uppercase text-gray-500 tracking-[3px]">
        Hover over a skill for currency profiency
      </div>
      <div className="grid grid-cols-4 gap-6">
        {skills?.slice(0, skills.length / 2).map((skill) => (<Skill key={skill._id} skill={skill} />))}
        {skills?.slice(skills.length / 2, skills.length).map((skill) => (<Skill key={skill._id} skill={skill} directionLeft />))}
        
      </div>
    </div>
  );
};

export default Skills;
