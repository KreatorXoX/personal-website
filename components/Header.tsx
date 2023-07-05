import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Social } from "@/typings";
import {
  SiCodewars,
  SiLeetcode,
  SiGithub,
  SiAngellist,
  SiChainlink,
} from "react-icons/si";
import { AiOutlineMail } from "react-icons/ai";
import HeroButton from "./HeroButton";

type Props = {
  socials: Social[];
};

const Header = ({ socials }: Props) => {
  return (
    <header className="sticky wideShort:static top-0 z-20 flex flex-row justify-between max-w-7xl px-10 py-3 mx-auto items-center wideShort:snap-center">
      <div>
        <Link href="#hero">
          <HeroButton />
        </Link>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0, rotateZ: 180 }}
        animate={{ opacity: 1, scale: 1, rotateZ: 0 }}
        transition={{ duration: 1.25, delay: 3 }}
        className="flex flex-row gap-5 md:gap-10 items-center"
      >
        {socials?.map((social) => (
          <Link href={`${social.socialUrl}`} key={`${social._id}`}>
            {social.socialName === "Github" ? (
              <SiGithub className="text-2xl md:text-3xl text-slate-200 hover:text-gray-400 transition-colors duration-200" />
            ) : social.socialName === "CodeWars" ? (
              <SiCodewars className="text-2xl md:text-3xl text-slate-200 hover:text-gray-400 transition-colors duration-200" />
            ) : social.socialName === "AngelCo" ? (
              <SiAngellist className="text-2xl md:text-3xl text-slate-200 hover:text-gray-400 transition-colors duration-200" />
            ) : social.socialName === "LeetCode" ? (
              <SiLeetcode className="text-2xl md:text-3xl text-slate-200 hover:text-gray-400 transition-colors duration-200" />
            ) : (
              <SiChainlink className="text-2xl md:text-3xl text-slate-200 hover:text-gray-400 transition-colors duration-200" />
            )}
          </Link>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0, x: 200 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 1.25, delay: 3 }}
      >
        <Link href="#contact" className="flex flex-col gap-2 items-center">
          <AiOutlineMail className="text-2xl md:text-3xl text-slate-200 hover:text-gray-400 transition-colors duration-200" />
          <p className="uppercase hidden md:inline-flex text-sm text-slate-200 ">
            get in touch
          </p>
        </Link>
      </motion.div>
    </header>
  );
};

export default Header;
