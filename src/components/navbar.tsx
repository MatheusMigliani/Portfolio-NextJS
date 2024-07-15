import Link from "next/link";
import React from "react";
import { SiGithub, SiLinkedin } from "react-icons/si";

export default function Navbar() {
  const socials = [
    {
      Link: "https://www.linkedin.com/in/matheus-migliani/",
      Label: "LinkedIn",
      Icon: SiLinkedin,
    },
    {
      Link: "https://github.com/MatheusMigliani",
      Label: "Github",
      Icon: SiGithub,
    },
  ];

  return (
    <nav className="py-10 flex justify-between items-center ">
      <h1 className="text-2xl font-bold underline underline-offset-8 text-white decoration-blue-500 hover:scale-125 transition-all">
        Matheus Migliani
      </h1>
      <div className="flex items-center gap-5">
        {socials.map((social, index) => {
          const Icon = social.Icon;
          return (
            <Link href={social.Link} key={index} aria-label={social.Label}>
              <Icon className="w-8 h-8 hover:scale-125 transition-all fill-white " />
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
