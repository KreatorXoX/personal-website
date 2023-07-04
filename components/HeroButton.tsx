import React from "react";

type Props = {};

const HeroButton = (props: Props) => {
  return (
    <div
      className="text-2xl w-10 h-10 md:w-[6.125rem] rounded-full  bg-slate-50 text-blue-600 mx-auto flex items-center justify-center
    hover:bg-[#48864d] border-none outline-none cursor-pointer hover:text-slate-50 transition-all duration-500 
    "
    >
      <span>𝔊𝔤</span>
    </div>
  );
};

export default HeroButton;
