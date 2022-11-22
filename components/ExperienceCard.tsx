import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type Props = {};

const ExperienceCard = (props: Props) => {
  return (
    <div>
      <motion.div>
        <Image
          className="rounded-full h-32 w-32 xl:w-[200px] xl:h-[200px] object-cover object-center"
          alt=""
          src="/vishnu.jpg"
          height="1000"
          width="1000"
        ></Image>
      </motion.div>
    </div>
  );
};

export default ExperienceCard;
