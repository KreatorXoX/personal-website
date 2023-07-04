import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

import { PageInfo } from "@/typings";

import BackgroundShapes from "./BackgroundShapes";
import { urlForImage } from "@/sanity/lib/image";
import TypeWriter from "./TypeWriter";

type Props = {
  pageInfo: PageInfo;
};

const Hero = ({ pageInfo }: Props) => {
  return (
    <div className="h-screen relative text-center flex flex-col justify-center items-center overflow-hidden space-y-12">
      <div className="relative">
        <BackgroundShapes />

        {pageInfo?.heroImage && (
          <Image
            className="rounded-full h-52 w-52 mx-auto object-cover"
            width={100}
            height={100}
            quality={100}
            priority={true}
            alt="first-image"
            src={urlForImage(pageInfo?.heroImage)?.url()}
          />
        )}
      </div>
      <TypeWriter
        role={pageInfo?.role}
        words={pageInfo?.typewriterInfo.typeInfo}
      />

      <div className="z-30 flex flex-row gap-5 md:gap-10 px-3 text-slate-50">
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
