"use client";
import React, { useCallback, useEffect, useState } from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import MashedWords from "./MashedWords";

type Props = {
  role?: string;
  words?: string[];
};

const TypeWriter = ({ role, words }: Props) => {
  const [text] = useTypewriter({
    words: words
      ? words
      : ["Hello this is G.Gocer", "Not your average Programmer", "#KeepCoding"],
    loop: 1,
    delaySpeed: 2000,
    typeSpeed: 100,
    deleteSpeed: 30,
  });
  return (
    <div className="flex flex-col gap-5 w-full">
      <MashedWords role={role} />
      <h1 className="text-slate-50 text-3xl md:text-5xl font-semibold font-mono pb-3">
        <span className="rainbowText">{text}</span>
        <Cursor cursorColor="#5f388b" cursorBlinking={false} />
      </h1>
    </div>
  );
};

export default TypeWriter;
