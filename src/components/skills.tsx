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
      color: "cyan",  
      colornumber: "400",
    },
    {
      text: "Nodejs",
      Icon: SiNodedotjs,
      color: "lime",
      colornumber: "500",
    },

    {
      text: "JavaScript",
      Icon: SiJavascript,
      color: "yellow",
      colornumber: "500",
    },
    {
      text: "Tailwind",
      Icon: SiTailwindcss,
      color: "cyan",
      colornumber: "400",
    },
    {
      text: "Bootstrap",
      Icon: SiBootstrap,
      color: "#553c7b",
      colornumber: "800",
    },
    {
      text: "Ionic",
      Icon: SiIonic,
      color: "#498aff",
      colornumber: "800",
    },
    {
      text: "PHP",
      Icon: SiPhp,
      color: "#787cb5",
      colornumber: "500",
    },
    {
      text: "Laravel",
      Icon: SiLaravel,
      color: "red",
      colornumber: "500",
    },
  ];
  return (
    <div className="">
      <HoverEffect items={skills} />
    </div>
  );
}
