import React from "react";
import { motion } from "framer-motion";
import { Skill } from "@/typings";
import SkillItem from "./Skill";

type Props = {
  skills: Skill[];
};

const Skills = ({ skills }: Props) => {
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

      <h3 className="absolute top-36 text-sm uppercase tracking-[10px] text-gray-500 ">
        Hover The Icons
      </h3>

      <div className="grid grid-cols-4 gap-10 md:gap-20 mt-12">
        {skills?.map((skill, idx) => (
          <SkillItem key={skill._id} lefty={idx % 2 === 0} skill={skill} />
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
