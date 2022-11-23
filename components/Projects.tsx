import React from "react";
import Image from "next/image";

type Props = {};

const Projects = (props: Props) => {
  const projects = [1, 2, 3, 4, 5];
  return (
    <>
      <div className="h-screen relative flex flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
        <div className="absolute tracking-[20px] uppercase top-24 text-gray-500 ">
          Projects
        </div>
        <div className="w-full absolute top-[30%] bg-[#F7AB0A] left-0 h-[500px] -skew-y-12 opacity-10"></div>
        {projects.map((projects) => {
          <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
            <Image src="/vishnu.jpg" alt="" />
            <div>
              <div>Case Study 1 of 3: UPS Clone </div>
            </div>
          </div>;
        })}
      </div>
    </>
  );
};

export default Projects;
