import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
type Props = {};

const SliderCard = (props: Props) => {
  return (
    <article
      className="bg-[#202120] py-5 text-white w-[350px] md:w-[450px] xl:w-[700px] flex flex-shrink-0 flex-col items-center rounded-lg space-y-6 snap-center
    opacity-50 hover:opacity-100 cursor-pointer transition-opacity duration-400 h-[600px] overflow-y-scroll
    "
    >
      <motion.img
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.75 }}
        className=" h-32 w-32 md:h-36 md:w-36 xl:h-40 xl:w-40 mt-4 rounded-full object-cover object-center"
        src="https://res.cloudinary.com/dinhhwb9x/image/upload/v1675098548/busLogo_asm9hj.png"
      />
      <div className="px-0 md:px-8 space-y-4 text-left">
        <h4 className="text-3xl font-bold tracking-[10px]">Developer</h4>
        <p className="text-lg italic text-gray-400">Experience Company</p>
        <div className="flex flex-row gap-5 justify-start">
          <Image
            className="w-6 h-6 rounded object-cover"
            width={100}
            height={100}
            src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
            alt="tech"
          />
          <Image
            className="w-6 h-6 rounded object-cover"
            width={100}
            height={100}
            src="https://cdn-icons-png.flaticon.com/512/174/174854.png"
            alt="tech"
          />
          <Image
            className="w-6 h-6 rounded object-cover"
            width={100}
            height={100}
            src="https://cdn-icons-png.flaticon.com/512/732/732190.png"
            alt="tech"
          />
        </div>
        <p>
          Start :{" "}
          <span className="tracking-widest italic font-semibold underline underline-offset-4">
            {" "}
            Sept 2021
          </span>{" "}
          - End :
          <span className="tracking-widest italic font-semibold underline underline-offset-4">
            {" "}
            Mar 2022
          </span>
        </p>
        <ul className="list-disc space-y-6 ml-4">
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
            consequatur?
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
            placeat repellendus voluptatum expedita eligendi odit.
          </li>
          <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati.
          </li>
        </ul>
      </div>
    </article>
  );
};

export default SliderCard;
