import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Skill } from "@/typings";
import { urlForImage } from "@/sanity/lib/image";

type Props = {
  lefty?: boolean;
  skill: Skill;
};

const Skill = ({ lefty, skill }: Props) => {
  return (
    <motion.div
      className="rounded-full"
      initial={{ opacity: 0, x: lefty ? 100 : -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.5,
        type: "spring",
        damping: 20,
        stiffness: 50,
      }}
    >
      <div
        className="relative bg-gray-700 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-2xl text-slate-200 overflow-hidden cursor-pointer skill wideShort:w-9 wideShort:h-9
        wideShort:text-xs
      "
      >
        <div className="fixed w-full h-full">
          <Image
            fill
            sizes="100"
            src={urlForImage(skill?.skillImage).url()}
            alt="skills"
            className="absolute inset-0 p-2 w-full h-full flex justify-center items-center skill-front "
          />
        </div>
        <div className="bg-gray-700 border-none outline-none absolute inset-0 w-full h-full flex flex-col justify-center items-center skill-back">
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
