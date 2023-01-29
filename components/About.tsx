import React from "react";
import { motion } from "framer-motion";

type Props = {};

const About = (props: Props) => {
  return (
    <div className="flex flex-col justify-evenly md:flex-row relative text-center md:text-left max-w-7xl px-8 mx-auto items-center h-screen gap-10">
      <h3 className="absolute top-24 uppercase tracking-[1.5rem] text-gray-400 text-2xl">
        About
      </h3>

      <motion.img
        className="flex-shrink-0 mt-[5rem] w-60 h-60 object-cover rounded-full md:rounded-md md:w-72 md:h-[500px] xl:w-[500px] xl:h-[600px]"
        initial={{ x: -300, opacity: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.25 }}
        alt="second-image"
        src="https://res.cloudinary.com/dinhhwb9x/image/upload/v1674925424/DSC_0574_bruhxz.jpg"
      />

      <div className="space-y-10">
        <h4 className="text-4xl font-semibold text-white">
          Little{" "}
          <span className="italic font-mono text-6xl text-[#CF2400] underline underline-offset-8">
            about
          </span>{" "}
          Me
        </h4>
        <p className="pt-5 text-gray-400">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui eligendi
          aliquam, quidem dolorum porro illum beatae saepe sunt, iure aspernatur
          blanditiis ea totam neque nam laudantium excepturi est mollitia.
          Ipsum? Quia maiores quod a eos voluptatum. Facilis aliquam ipsa dicta
          corporis consequuntur dolor, tenetur mollitia illo maxime
          necessitatibus facere neque nam laudantium excepturi est mollitia.
          Ipsum? Quia maiores quod a eos voluptatum. Facilis aliquam ipsa dicta
          corporis consequuntur dolor, tenetur mollitia illo maxime
          necessitatibus facere
        </p>
      </div>
    </div>
  );
};

export default About;
