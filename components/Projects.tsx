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
      className="h-screen flex flex-col md:flex-row max-w-7xl w-full overflow-x-hidden px-10 justify-center items-center mx-auto relative overflow-y-scroll"
    >
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
