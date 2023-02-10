import React from "react";
import { motion } from "framer-motion";
import { MdStar, MdStarOutline, MdStarHalf } from "react-icons/md";
import Image from "next/image";
type Props = {
  lefty?: boolean;
};

const Skill = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: props.lefty ? 200 : -200 }}
      whileInView={{ opacity: [0, 0.25, 0.5, 1], x: 0 }}
      transition={{
        duration: 0.75,
        type: "spring",
        damping: 8,
        stiffness: 70,
        delay: 0.5,
      }}
    >
      <div className="relative w-14 h-14 md:w-20 md:h-20 rounded-2xl text-white overflow-hidden cursor-pointer skill">
        <Image
          fill
          src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
          alt="skills"
          className="absolute inset-0 w-full h-full flex justify-center items-center skill-front"
        />
        <div className="absolute inset-0 w-full h-full flex justify-center items-center bg-[#202120] skill-back">
          <MdStar color="yellow" />
          <MdStar color="yellow" />
          <MdStar color="yellow" />
          <MdStarHalf color="yellow" />
          <MdStarOutline color="yellow" />
        </div>
      </div>
    </motion.div>
  );
};

export default Skill;
