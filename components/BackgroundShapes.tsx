import React from "react";
import { motion } from "framer-motion";
type Props = {};

const BackgroundShapes = (props: Props) => {
  return (
    <div className="absolute top-[35%]">
      {/* <motion.div
        initial={{ opacity: 0.25 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 1.75 }}
      >
        <div className="animate-ping relative flex justify-start items-center">
          <div className="absolute rounded-full h-[15rem] w-[15rem] border border-[#9400D3]" />
          <div className="absolute rounded-full h-[20rem] w-[20rem] border border-[#0000FF]" />
          <div className="absolute rounded-full h-[25rem] w-[25rem] border border-[#00FF00]" />
          <div className="absolute rounded-full h-[30rem] w-[30rem] border border-[#FFFF00]" />
          <div className="absolute rounded-full h-[35rem] w-[35rem] border border-[#FF7F00]" />
          <div className="absolute rounded-full h-[40rem] w-[40rem] border border-[#FF0000]" />
        </div>
        <div className="animate-ping relative flex justify-end items-center">
          <div className="absolute rounded-full h-[15rem] w-[15rem] border border-[#9400D3]" />
          <div className="absolute rounded-full h-[20rem] w-[20rem] border border-[#0000FF]" />
          <div className="absolute rounded-full h-[25rem] w-[25rem] border border-[#00FF00]" />
          <div className="absolute rounded-full h-[30rem] w-[30rem] border border-[#FFFF00]" />
          <div className="absolute rounded-full h-[35rem] w-[35rem] border border-[#FF7F00]" />
          <div className="absolute rounded-full h-[40rem] w-[40rem] border border-[#FF0000]" />
        </div>
      </motion.div> */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: [0, 1, 0.5, 1, 0, 0.1, 0.15],
          scale: [0.5, 1, 0.75, 2, 0, 0, 0, 1],
        }}
        transition={{ duration: 3 }}
      >
        <div className="relative flex justify-center items-center  mt-14">
          <div className="absolute rounded-full h-[25rem] w-[25rem] border border-[#262726]" />
          <div className="absolute rounded-full h-[32rem] w-[32rem] border border-[#262726]" />
          <div className="animate-pulse absolute rounded-full h-[39rem] w-[39rem] border border-[#FF7F00] border-dashed" />
          <div className="absolute rounded-full h-[46rem] w-[46rem] border border-[#262726]" />
        </div>
      </motion.div>
    </div>
  );
};

export default BackgroundShapes;
