import React from 'react'
import Image from "next/image";
import { motion } from "framer-motion";

type Props = {}

const About = (props: Props) => {
  return (
    <div className='h-screen flex flex-col md:flex-row relative text-center md:text-left max-w-7xl mx-auto justify-evenly px-10 items-center'>
      <div className='tracking-[20px] text-gray-500 text-2xl absolute top-24 uppercase'>About</div>
      <motion.div><Image src="./vishnu.jpg" alt='' height="500" width="500"></Image></motion.div>
      <div></div>
    </div>
  )
}

export default About