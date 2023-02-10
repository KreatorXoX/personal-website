import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";
type Props = {};

const Skills = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.75 }}
      className="h-screen flex flex-col md:flex-row max-w-7xl px-10 justify-center items-center mx-auto relative"
    >
      <h3 className="absolute top-24 uppercase tracking-[14px] text-gray-400 md:text-2xl ">
        Skills
      </h3>

      <h3 className="absolute top-40 text-sm uppercase tracking-[10px] text-gray-500 ">
        Hover The Icons
      </h3>

      <div className="grid grid-cols-3 md:grid-cols-4 gap-8 mt-12">
        <Skill lefty />
        <Skill lefty />
        <Skill lefty />
        <Skill lefty />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill lefty />
        <Skill lefty />
        <Skill lefty />
        <Skill lefty />
      </div>
    </motion.div>
  );
};

export default Skills;
