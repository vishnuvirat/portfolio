import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

type Props = {};

const ContactMe = (props: Props) => {
  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center md:space-x-10">
      <div className="uppercase tracking-[20px] text-gray-500 top-24 absolute text-2xl">
        Contact
      </div>
      <div className="flex flex-col space-y-10">
        <div className="text-4xl font-semibold text-center">
          I Have got just what you need
        </div>
      </div>
      <div className="space-y-10">
        <div className="flex items-center space-x-5 justify-center">
          <PhoneIcon className=" text-[#F7AB0A] h-7 w-7 animate-pluse " />
          <div className="text-2xl">+91 7995803197</div>
        </div>
        <div className="flex items-center space-x-5 justify-center">
          <EnvelopeIcon className="animate-pluse text-[#F7AB0A] h-7 w-7 " />
          <div className="text-2xl">vishnuchiluveri5@gmail.com</div>
        </div>
        <div className="flex items-center space-x-5 justify-center">
          <MapPinIcon className="animate-pluse text-[#F7AB0A] h-7 w-7 " />
          <div className="text-2xl">123 Ibrahimpatnam</div>
        </div>
      </div>

      <div className="flex flex-col w-fit mx-auto space-y-2">
        <div className="flex space-x-2">
          <input placeholder="Name" className="ContactInput" type="text" />
          <input placeholder="Email"  className="ContactInput" type="text" />
        </div>
        <input className="ContactInput" type="text" />
        <textarea className="ContactInput"/>
        <button className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg">Submit</button>
      </div>
    </div>
  );
};

export default ContactMe;