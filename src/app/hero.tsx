"use client";
import Skills from "@/components/skills";

import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { LiaLinkedin, LiaLinkedinIn } from "react-icons/lia";
import { BsLinkedin } from "react-icons/bs";
import { FiLinkedin } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { ImLinkedin } from "react-icons/im";
import { RxLinkedinLogo } from "react-icons/rx";
import { RiLinkedinBoxFill } from "react-icons/ri";
import { DiGithubFull } from "react-icons/di";
import { MdOutlineEmail } from "react-icons/md";

export default function Heropage() {
  return (
    <div className="flex items-center justify-between">
      <div className="">
        <HeroHighlight>
          <motion.h1
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: [20, -5, 0],
            }}
            transition={{
              duration: 0.5,
              ease: [0.4, 0.0, 0.2, 1],
            }}
            className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-200 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
          >
            {" "}
            <br />
            Olá 👋 <br />
            <Highlight className="text-white dark:text-white">
              {" "}
              Sou Matheus Migliani
            </Highlight>{" "}
            <Highlight className="text-white dark:text-white ">
              Fullstack Web Developer
            </Highlight>
          </motion.h1>{" "}
          <div className="text-center   ">
            <div className="gap-2 flex py-2 col-auto grid-cols-1 justify-center align-middle text-center  ">
              <FaGithub className="size-10   fill-white" />
              <FaLinkedin className="size-10   fill-white" />
              <FaLinkedin className="size-10   fill-white" />
              <FaLinkedin className="size-10   fill-white" />
            </div>
            <p className="text-2xl text-white">teste</p>
            
            <div className="gap-2 flex py-2 col-span-1 grid-cols-1 justify-center align-middle text-center">
              <Link href={"mailto:matheusmigliani@yahoo.com.br"}>
                <div className="text-1xl text-white">clica email a </div>
                <MdOutlineEmail className="size-10  fill-white" />
              </Link>{" "}
            </div>
          </div>
        </HeroHighlight>
      </div>

      <div className="flex gap-3 translate-x-8">
        <div className="">
          <div className="rounded-2xl">
            <Skills />
          </div>
        </div>
      </div>
    </div>
  );
}
