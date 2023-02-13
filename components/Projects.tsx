import React from "react";
import { motion } from "framer-motion";
import { Project } from "@/typings";
import { useCarousel } from "../context/carousel-ctx";
import Carousel from "./Carousel";

type Props = {
  projects: Project[];
};

const Projects = ({ projects }: Props) => {
  const idx = useCarousel((state) => state.selectedIdx);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.75 }}
      className="h-screen flex flex-col md:flex-row w-full overflow-hidden px-10 justify-center items-center mx-auto relative"
    >
      <div className="w-full absolute top-[35%] bg-[#1d2a19] left-0 h-[300px] skew-y-12 -z-20"></div>
      <div className="w-full absolute top-[35%] bg-[#1d2a19] left-0 h-[300px] -skew-y-12 -z-20"></div>
      <h3 className="absolute top-24 uppercase tracking-[14px] text-gray-400 md:text-2xl ">
        Projects
      </h3>
      <h5 className="absolute top-36 text-gray-400">
        {idx + 1} out of {projects.length}
      </h5>
      <div className="w-full flex flex-row snap-x snap-mandatory mt-6 sm:mt-0">
        <Carousel projects={projects} />
      </div>
    </motion.div>
  );
};

export default Projects;
