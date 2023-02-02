import React from "react";
import { motion } from "framer-motion";
import SliderCard from "./SliderCard";
import Carousel from "./Carousel";
type Props = {};

const Skills = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.75 }}
      className="h-screen flex flex-col md:flex-row max-w-full px-10 justify-evenly items-center mx-auto relative overflow-y-scroll"
    >
      <h3 className="absolute top-24 uppercase tracking-[14px] text-gray-400 md:text-2xl ">
        Skills
      </h3>
      <div className=" w-full flex flex-row snap-x snap-mandatory">
        <Carousel />
      </div>
    </motion.div>
  );
};

export default Skills;
