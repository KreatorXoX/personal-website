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

type Props = {
  socials: Social[];
};

const Header = ({ socials }: Props) => {
  return (
    <header className="sticky top-0 z-20 flex flex-row justify-between max-w-7xl px-10 py-6 mx-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0, rotateZ: 180 }}
        animate={{ opacity: 1, scale: 1, rotateZ: 0 }}
        transition={{ duration: 1.25, delay: 3 }}
        className="flex flex-row gap-5 items-center"
      >
        {socials?.map((social) => (
          <Link href={`${social.socialUrl}`} key={`${social._id}`}>
            {social.socialName === "Github" ? (
              <SiGithub
                className="text-xl md:text-3xl"
                color="rgb(156 163 175)"
              />
            ) : social.socialName === "CodeWars" ? (
              <SiCodewars
                className="text-xl md:text-3xl"
                color="rgb(156 163 175)"
              />
            ) : social.socialName === "AngelCo" ? (
              <SiAngellist
                className="text-xl md:text-3xl"
                color="rgb(156 163 175)"
              />
            ) : social.socialName === "LeetCode" ? (
              <SiLeetcode
                className="text-xl md:text-3xl"
                color="rgb(156 163 175)"
              />
            ) : (
              <SiChainlink
                className="text-xl md:text-3xl"
                color="rgb(156 163 175)"
              />
            )}
          </Link>
        ))}
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
          <AiOutlineMail
            className="text-xl md:text-3xl"
            color="rgb(156 163 175)"
          />
          <p className="uppercase hidden md:inline-flex text-sm text-gray-400 ">
            get in touch
          </p>
        </Link>
      </motion.div>
    </header>
  );
};

export default Header;
