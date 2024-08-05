
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import EmailButton from "@/components/ui/tailwindcss-buttons";
import { FaFileAlt } from "react-icons/fa";

export default function Heropage() {
  return (
    <div className="flex flex-wrap items-center justify-center">
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
            className="text-1xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-200 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
          >
            Olá 👋 <br />
            <Highlight className="text-white dark:text-white">
              {" "}
              Sou Matheus Migliani
            </Highlight>{" "}
            <br />
            <Highlight className="text-white dark:text-white ">
              Fullstack Web Developer
            </Highlight>
          </motion.h1>{" "}
          <div className="text-center   ">
            <p className="text-2xl text-white">
              Meu Currículo e Redes Sociais{" "}
            </p>
            <div className=" gap-2 flex py-2 col-auto grid-cols-1 justify-center align-middle text-center  ">
              <FaFileAlt className="size-10 cursor-pointer hover:scale-110 transition-all fill-white" />
              <FaGithub className="size-10 cursor-pointer  hover:scale-110 transition-all fill-white" />
              <FaLinkedin className="cursor-pointer size-10 hover:scale-110 hover:fill-blue-500 transition-all  fill-white" />
            </div>

            <div className="hover:scale-105 transition-all space-y-10 space-x-10 py-2">
              <Link href={"mailto:matheusmigliani@yahoo.com.br"}>
                <EmailButton />
              </Link>{" "}
            </div>
          </div>
        </HeroHighlight>
      </div>
    </div>
  );
}
