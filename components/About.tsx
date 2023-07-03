import React from "react";
import { motion } from "framer-motion";
import { Image } from "@/typings";
import { urlForImage } from "@/sanity/lib/image";

type Props = {
  image: Image;
  about: string;
};

const About = ({ image, about }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.75 }}
      className="flex flex-col justify-center gap-5 md:flex-row relative text-center md:text-left max-w-7xl px-8 mx-auto items-center h-screen md:gap-10"
    >
      <h3 className="absolute top-24 uppercase tracking-[12px] text-slate-200 md:text-2xl">
        About
      </h3>

      {image && (
        <motion.img
          className="mt-10 sm:mt-0 w-40 h-40 object-cover rounded-full md:rounded-md md:w-72 md:h-[500px] xl:w-[500px] xl:h-[600px]"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.25 }}
          alt="second-image"
          src={urlForImage(image).url()}
        />
      )}

      <div className="sm:space-y-10">
        <h4 className="sm:text-4xl font-semibold text-slate-200">
          Little{" "}
          <span className="italic font-mono text-2xl sm:text-6xl text-[#CF2400] underline underline-offset-8">
            about
          </span>{" "}
          Me
        </h4>
        <p className="pt-5 text-xs md:text-lg text-slate-200">{about}</p>
      </div>
    </motion.div>
  );
};

export default About;
