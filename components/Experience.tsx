import React from "react";
import { motion } from "framer-motion";
import SliderCard from "./SliderCard";

type Props = {};

const Experience = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.75 }}
      className="h-screen flex flex-col md:flex-row max-w-full px-10 justify-center items-center mx-auto relative overflow-hidden"
    >
      <h3 className="absolute top-24 uppercase tracking-[14px] text-gray-400 md:text-2xl ">
        Experience
      </h3>
      <div className=" w-full flex flex-row overflow-x-scroll space-x-16 snap-x snap-mandatory">
        <SliderCard />
        <SliderCard />
        <SliderCard />
        <SliderCard />
        <SliderCard />
      </div>
    </motion.div>
  );
};

export default Experience;
