import React from "react";
import { motion } from "framer-motion";
import { Project } from "../typings";
import { urlFor } from "../lib/sanity";
import { SocialIcon } from "react-social-icons";

type Props = {
  projects: Project[];
};

const Projects = ({ projects }: Props) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="h-screen relative flex flex-col overflow-hidden text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0 "
      >
        <div className="absolute tracking-[20px] uppercase top-24 text-gray-500 text-lg sm:text-2xl">
          Projects
        </div>
        <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
          {projects?.map((project, i) => (
            <div
              key={project._id}
              className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
            >
              <motion.div
                initial={{ y: -300, opacity: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
              >
                <img
                  className="w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 xl:w-[500px] xl:h-[500px]"
                  src={urlFor(project?.image).url()}
                  alt=""
                  width="500"
                  height="500"
                />
              </motion.div>
              <div className="border-2 border-white text-lg sm:text-2xl lg:text-4xl font-sans font-semibold">
                <div className="flex">
                  Case Study {i + 1} of 0: {project?.title}
                  <div>
                    <SocialIcon
                      url={project.linkToBuild}
                      fgColor="gray"
                      bgColor="transparent"
                    />
                  </div>
                </div>

                <div className="border-2 border-green-800 flex items-center space-x-2 justify-center p-2 ">
                  {project?.technologies.map((technology) => (
                    <img
                      className="h-4 w-4 sm:h-6 sm:w-6 lg:h-10 lg:w-10"
                      key={technology._id}
                      src={urlFor(technology.image).url()}
                    />
                  ))}
                </div>
              </div>
              <div className=" text-sm sm:text-lg text-center md:text-left">
                {project?.summary}
              </div>
            </div>
          ))}
        </div>
        <div className="w-full absolute top-[30%] bg-[#F7AB0A] left-0 h-[500px] -skew-y-12 opacity-10"></div>
      </motion.div>
    </>
  );
};

export default Projects;
