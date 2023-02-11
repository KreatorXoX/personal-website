import React from "react";
import { motion } from "framer-motion";
import Carousel from "./Carousel";
type Props = {};

const Projects = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.75 }}
      className="h-screen flex flex-col md:flex-row w-full overflow-x-hidden px-10 justify-center items-center mx-auto relative overflow-y-scroll"
    >
      <div className="w-full absolute top-[35%] bg-[#1d2a19] left-0 h-[300px] skew-y-12 -z-20"></div>
      <div className="w-full absolute top-[35%] bg-[#1d2a19] left-0 h-[300px] -skew-y-12 -z-20"></div>
      <h3 className="absolute top-24 uppercase tracking-[14px] text-gray-400 md:text-2xl ">
        Projects
      </h3>
      <div className="w-full flex flex-row snap-x snap-mandatory">
        <Carousel />
      </div>
    </motion.div>
  );
};

export default Projects;
