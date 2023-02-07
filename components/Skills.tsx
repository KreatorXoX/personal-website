import React from "react";
import Skill from "./Skill";
type Props = {};

const Skills = (props: Props) => {
  return (
    <div className="h-screen flex flex-col md:flex-row max-w-full px-10 justify-center items-center mx-auto relative">
      <h3 className="absolute top-24 uppercase tracking-[14px] text-gray-400 md:text-2xl ">
        Skills
      </h3>

      <h3 className="absolute top-40 text-sm uppercase tracking-[10px] text-gray-500 ">
        Hover The Icons
      </h3>

      <div className="grid grid-cols-3 md:grid-cols-4 gap-8 mt-10 ">
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
    </div>
  );
};

export default Skills;
