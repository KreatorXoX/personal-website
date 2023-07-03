import React from "react";
import { motion } from "framer-motion";
type Props = {};

const BackgroundShapes = (props: Props) => {
  return (
    <div className="absolute top-[25%] right-[50%] left-[50%]">
      <div>
        <div className="relative flex justify-center items-center  mt-14">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 0.75, 0.5, 0, 0.2],
              scale: [0.25, 0.5, 1.2, 0.5, 0.25, 1],
            }}
            transition={{ duration: 3 }}
            className="animate-pulse absolute rounded-full h-[25rem] w-[25rem] border border-[#a7a15a] border-dashed"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 0.75, 0.5, 0, 0.15],
              scale: [0.25, 0.5, 1.2, 0.5, 0.25, 0],
            }}
            transition={{ duration: 3 }}
            className="absolute rounded-full h-[32rem] w-[32rem] border border-[#48864d]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 0.75, 0.5, 0, 0.75],
              scale: [0.25, 0.5, 1.2, 0.5, 0.25, 1],
            }}
            transition={{ duration: 3 }}
            className="animate-pulse absolute rounded-full  h-[39rem] w-[39rem] border border-[#5f388b] border-dashed"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 0.75, 0.5, 0, 0.15],
              scale: [0.25, 0.5, 1.2, 0.5, 0.25, 0],
            }}
            transition={{ duration: 3 }}
            className="absolute rounded-full h-[46rem] w-[46rem] border border-[#a5494f]"
          />
        </div>
      </div>
    </div>
  );
};

export default BackgroundShapes;
