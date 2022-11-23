import React from "react";

type Props = {};

const ContactMe = (props: Props) => {
  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <div className="uppercase tracking-[20px] text-gray-500 top-24 absolute text-2xl">Contact</div>
      <div className="flex flex-col space-y-10">
        <div className="text-4xl font-semibold text-center">I Have got just what you need</div>
      </div>
    </div>
  );
};

export default ContactMe;
