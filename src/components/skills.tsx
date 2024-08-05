"use client";
import { text } from "stream/consumers";
import { HoverEffect } from "./ui/card-hover-effect";
import { FaReact } from "react-icons/fa6";
import { color } from "framer-motion";
import {
  SiBootstrap,
  SiHtml5,
  SiIonic,
  SiJavascript,
  SiLaravel,
  SiNodedotjs,
  SiPhp,
  SiTailwindcss,
} from "react-icons/si";

export default function Skills() {
  const skills = [
    {
      text: "React",
      Icon: FaReact,
    },
    {
      text: "Nodejs",
      Icon: SiNodedotjs,
    },

    {
      text: "JavaScript",
      Icon: SiJavascript,
    },
    {
      text: "Tailwind",
      Icon: SiTailwindcss,
    },
    {
      text: "Bootstrap",
      Icon: SiBootstrap,
    },
    {
      text: "Ionic",
      Icon: SiIonic,
    },
    {
      text: "PHP",
      Icon: SiPhp,
    },
    {
      text: "Laravel",
      Icon: SiLaravel,
    },
  ];
  return (
    <div className="">
      <HoverEffect items={skills} />
    </div>
  );
}
