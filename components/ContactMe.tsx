import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

const ContactMe = (props: Props) => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (FormData) => {
    window.location.href = `mailto:vishnuviratkohli5@gmail.com?subject=${FormData.subject}&body=Hi, my name is ${FormData.name} ${FormData.message} (${FormData.email})`;
  };

  return (
    <div className="border-2 border-white h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center md:space-x-10">
      <div className="border-2 border-white uppercase tracking-[20px] text-gray-500 top-24 absolute text-2xl">
        Contact
      </div>
      <div className="border-2 border-white flex flex-col space-y-10">
        <div className="text-4xl font-semibold text-center">
          I Have got just what you need
        </div>
      </div>
      <form className="border-2 border-white" onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-10 py-10">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className=" text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <div className="text-2xl">+91 7995803197</div>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="animate-pulse text-[#F7AB0A] h-7 w-7 " />
            <div className="text-2xl">vishnuchiluveri5@gmail.com</div>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="animate-pulse text-[#F7AB0A] h-7 w-7 " />
            <div className="text-2xl">123 Ibrahimpatnam</div>
          </div>
        </div>
        <div className="flex flex-col w-fit mx-auto space-y-2">
          <div className="flex space-x-2">
            <input
              {...register("name")}
              placeholder="Name"
              className="ContactInput"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="ContactInput"
              type="email"
            />
          </div>
          <input
            {...register("subject")}
            placeholder="Subject"
            className="ContactInput"
            type="text"
          />
          <textarea
            {...register("message")}
            placeholder="Message..."
            className="ContactInput"
          />
          <button
            type="submit"
            className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactMe;
