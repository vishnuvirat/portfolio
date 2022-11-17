import React from "react";

type Props = {};

const BackgroundCircle = (props: Props) => {
  return (
    <div className="relative flex items-center justify-center">
      <div className="absolute border border-[#333333] rounded-full h-[200px] w-[200px] animate-ping mt-52"></div>
      <div className=" absolute border border-[#333333]  rounded-full h-[300px] w-[300px]  mt-52"></div>
      <div className=" absolute border border-[#333333] rounded-full h-[500px] w-[500px] mt-52"></div>
      <div className=" absolute border border-[#333333] rounded-full h-[650px] w-[650px] mt-52 animate-pulse"></div>
      <div className="absolute border border-[#333333] rounded-full h-[800px] w-[800px] mt-52"></div>
    </div>
  );
};

export default BackgroundCircle;
