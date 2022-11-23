import React from "react";

type Props = {};

const Projects = (props: Props) => {
  return (
    <>
      <div className="h-screen relative flex flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
        <div className="absolute tracking-[20px] uppercase top-24 text-gray-500 ">
          Projects
        </div>
      </div>
    </>
  );
};

export default Projects;
