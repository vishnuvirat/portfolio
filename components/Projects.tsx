import React from "react";
import Image from "next/image";

type Props = {};

const Projects = (props: Props) => {
  const projects = [1, 2, 3, 4, 5];
  return (
    <>
      <div className="h-screen relative flex flex-col overflow-hidden text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
        <div className="absolute tracking-[20px] uppercase top-24 text-gray-500 text-2xl">
          Projects
        </div>
        <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
          {projects.map((project, i) => (
            <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
              <Image src="/vishnu.jpg" alt="" width="200" height="200" />
              <div className="text-4xl font-sans font-semibold">
                <div>Case Study {i + 1} of 0: UPS Clone </div>
              </div>
              <div>
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                used in laying out print, graphic or web designs. The passage is
                attributed to an unknown typesetter in the 15th century who is
                thought to have scrambled parts of Cicero's De Finibus Bonorum
                et Malorum for use in a type specimen book.
              </div>
            </div>
          ))}
        </div>
        <div className="w-full absolute top-[30%] bg-[#F7AB0A] left-0 h-[500px] -skew-y-12 opacity-10"></div>
      </div>
    </>
  );
};

export default Projects;
