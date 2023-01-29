import React from "react";
import { SiCodewars, SiLeetcode, SiGithub, SiAngellist } from "react-icons/si";
import { AiOutlineMail } from "react-icons/ai";
import { motion } from "framer-motion";
import Link from "next/link";
type Props = {};

const Header = (props: Props) => {
  return (
    <header className="sticky top-0 z-20 flex flex-row justify-between max-w-7xl px-10 py-6 mx-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0, rotateZ: 180 }}
        animate={{ opacity: 1, scale: 1, rotateZ: 0 }}
        transition={{ duration: 1.25, delay: 3 }}
        className="flex flex-row gap-5 items-center"
      >
        <Link href="https://github.com/KreatorXoX">
          <SiGithub size={"2rem"} color="rgb(156 163 175)" />
        </Link>
        <Link href="https://angel.co/u/gorkem-gocer">
          <SiAngellist size={"2rem"} color="rgb(156 163 175)" />
        </Link>
        <Link href="https://www.codewars.com/users/Kreatorxox">
          <SiCodewars size={"2rem"} color="rgb(156 163 175)" />
        </Link>
        <Link href="https://leetcode.com/kreatorxox/">
          <SiLeetcode size={"2rem"} color="rgb(156 163 175)" />
        </Link>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0, x: 200 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 1.25, delay: 3 }}
      >
        <Link
          href="mailto:gorkemgocer7@gmail.com"
          className="flex flex-row gap-2 items-center"
        >
          <AiOutlineMail size={"2rem"} color="rgb(156 163 175)" />
          <p className="uppercase hidden md:inline-flex text-sm text-gray-400 ">
            get in touch
          </p>
        </Link>
      </motion.div>
    </header>
  );
};

export default Header;
