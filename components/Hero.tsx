import React, { useState, useEffect, useCallback } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import BackgroundShapes from "./BackgroundShapes";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let iterations = -40;

const Hero = (props: Props) => {
  const [originalText, setOriginalText] =
    useState<string>("Software Developer");
  const [mashedWords, setMashedWords] = useState<string>("");

  const mashWords = useCallback(
    (text: string): string => {
      return text
        .split("")
        .map((letter, idx) => {
          if (idx < iterations) {
            return originalText[idx];
          }
          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");
    },
    [originalText]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      iterations += 1;
      setMashedWords(mashWords(originalText));
      if (iterations >= originalText.length) clearInterval(interval);
    }, 100);

    return () => clearInterval(interval);
  }, [mashWords, originalText]);

  let initialText = "";
  const [text] = useTypewriter({
    words: [
      "Hi, The Name's Gorkem !",
      "Guy who loves cooking.js",
      "chess.ts, coffee.cs",
      "and <Coding/> the MOST !",
      "#KeepCoding",
    ],
    loop: 1,
    delaySpeed: 3000,
    typeSpeed: 100,
    deleteSpeed: 30,
  });

  return (
    <div className="h-screen relative text-center flex flex-col justify-center items-center overflow-hidden space-y-5">
      <BackgroundShapes />

      <Image
        className="rounded-full relative h-52 w-52 mx-auto object-cover"
        width={208}
        height={208}
        alt="first-image"
        src="https://res.cloudinary.com/dinhhwb9x/image/upload/v1674925424/DSC_0574_bruhxz.jpg"
      />
      <div className="flex flex-col gap-4">
        <h2 className="text-sm md:text-lg uppercase text-gray-400 py-3 tracking-[11px] md:tracking-[20px]">
          {mashedWords}
        </h2>

        <h1 className="text-white text-3xl md:text-5xl font-semibold font-mono pb-3">
          <span>{text}</span>
          <Cursor cursorColor="#CF2400" />
        </h1>
      </div>
      <div className="z-30 flex flex-row gap-5 md:gap-10 px-3">
        <Link href="#about">
          <button className="hero-button">About</button>
        </Link>
        <Link href="#skills">
          <button className="hero-button">Skills</button>
        </Link>
        <Link href="#projects">
          <button className="hero-button">Projects</button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
