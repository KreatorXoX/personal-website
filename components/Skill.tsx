import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Skill } from "@/typings";
import { urlFor } from "@/sanity";

type Props = {
  lefty?: boolean;
  skill: Skill;
};

const Skill = ({ lefty, skill }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: lefty ? 100 : -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.5,
        type: "spring",
        damping: 20,
        stiffness: 50,
      }}
    >
      <div className="relative w-10 h-10 md:w-14 md:h-14 rounded-2xl text-white overflow-hidden cursor-pointer skill">
        <Image
          fill
          src={urlFor(skill?.skillImage).url()}
          alt="skills"
          className="absolute inset-0 w-full h-full flex justify-center items-center skill-front "
        />
        <div className="  absolute inset-0 w-full h-full flex flex-col justify-center items-center bg-[#202120] skill-back">
          {/* <MdStar color="yellow" />
          <MdStar color="yellow" />
          <MdStar color="yellow" />
          <MdStarHalf color="yellow" />
          <MdStarOutline color="yellow" /> */}
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-yellow-400 "
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
          {skill.masteryLevel}%
        </div>
      </div>
    </motion.div>
  );
};

export default Skill;
