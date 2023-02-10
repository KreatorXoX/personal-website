import React from "react";
import Image from "next/image";

type Props = {};

const HeroButton = (props: Props) => {
  return (
    <div
      className=" text-2xl w-12 h-12 rounded-full bg-[orange]/20 text-green-200 mx-auto flex items-center justify-center
    hover:bg-[orange]/40 cursor-pointer filter grayscale hover:grayscale-0 transition-colors duration-300
    "
    >
      𝔊𝔤
    </div>
  );
};

export default HeroButton;
