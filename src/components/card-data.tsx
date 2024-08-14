import React from "react";
import { CardItem } from "./ui/3d-card";
import Image from "next/image";
import { FaCss3, FaHtml5, FaJs, FaLaravel } from "react-icons/fa6";
import { TbBrandMysql } from "react-icons/tb";
import { BsBootstrapFill } from "react-icons/bs";
import { PinContainer } from "./ui/3d-pin";
import { FaLocationArrow } from "react-icons/fa";
import { link } from "fs";
import { TextGenerateEffect } from "./ui/text-generate-effect";

export default function CardData() {
  /* const cardData = [
    {
      title: "Projeto Telecall",
      icons: [FaLaravel, FaHtml5, FaCss3, FaJs, BsBootstrapFill, TbBrandMysql],
      subtitle: "Projeto de desenvolvimento Full-Stack",
      description:
        "Desenvolvi um projeto Full-Stack utilizando Laravel (PHP) para criar um site com páginas interconectadas, responsivo e alinhado às necessidades da empresa para o desafio da faculdade. No front-end, usei HTML, CSS e Bootstrap 5, integrando APIs como Viacep e SweetAlert. No back-end, implementei um sistema completo com login, painel administrativo (CRUD), recuperação e troca de senha, além de mensagens customizadas para melhorar a experiência do usuário.",
      paragraph:
        "No back-end, implementei um sistema completo com login, painel administrativo (CRUD), recuperação e troca de senha, além de mensagens customizadas para melhorar a experiência do usuário.",
      image: {
        src: "/cartao-sem-mao-v1-1024x990.png",
        alt: "Logo telecall",
        className: "",
      },
      buttons: [
        {
          text: "Try now →",
          translateX: -40,
          className:
            "bg-purple-400/[0.5] px-4 py-2 rounded-xl text-xs text-white font-normal dark:text-white",
        },
        {
          text: "Sign up",
          translateX: 40,
          className:
            "px-4 py-2 rounded-xl bg-purple-400/[0.5] dark:bg-white dark:text-black text-white text-xs font-bold",
        },
      ],
    },
    {
      title: "projeto 2",
      subtitle: "Projeto de desenvolvimento Full-Stack",
      description:
        "Desenvolvi um projeto Full-Stack utilizando Laravel (PHP) para criar um site com páginas interconectadas, responsivo e alinhado às necessidades da empresa para o desafio da faculdade. No front-end, usei HTML, CSS e Bootstrap 5, integrando APIs como Viacep e SweetAlert.",
      paragraph:
        "No back-end, implementei um sistema completo com login, painel administrativo (CRUD), recuperação e troca de senha, além de mensagens customizadas para melhorar a experiência do usuário.",
      image: {
        src: "/favicon.ico",
        alt: "",
        className: "bg-cyan-500",
      },
      buttons: [
        {
          text: "Try now →",
          translateX: -40,
          className:
            "bg-purple-400/[0.5] px-4 py-2 rounded-xl text-xs text-white font-normal dark:text-white",
        },
        {
          text: "Sign up",
          translateX: 40,
          className:
            "px-4 py-2 rounded-xl bg-purple-400/[0.5] dark:bg-white dark:text-black text-white text-xs font-bold",
        },
      ],
    },
    {
      title: "projeto 3",
      subtitle: "Projeto de desenvolvimento Full-Stack",
      description:
        "Hover over this card to unleash the power of CSS perspective",
      image: {
        src: "/favicon.ico",
        alt: "",
        className: "bg-white",
      },
      buttons: [
        {
          text: "Try now →",
          translateX: -40,
          className:
            "bg-purple-400/[0.5] px-4 py-2 rounded-xl text-xs text-white font-normal dark:text-white",
        },
        {
          text: "Sign up",
          translateX: 40,
          className:
            "px-4 py-2 rounded-xl bg-purple-400/[0.5] dark:bg-white dark:text-black text-white text-xs font-bold",
        },
      ],
    },
    {
      title: "projeto 4",
      subtitle: "Projeto de desenvolvimento Full-Stack",
      description:
        "Hover over this card to unleash the power of CSS perspective",
      image: {
        src: "/favicon.ico",
        alt: "",
        className: "bg-cyan-500 justify-center items-center",
      },
      buttons: [
        {
          text: "Visitar o site →",
          translateX: -40,
          className:
            "bg-purple-400/[0.5] px-4 py-2 rounded-xl text-xs text-white font-normal dark:text-white",
        },
        {
          text: "Sign up",
          translateX: 40,
          className:
            "px-4 py-2 rounded-xl bg-purple-400/[0.5] dark:bg-white dark:text-black text-white text-xs font-bold",
        },
      ],
    },
    // Add more card objects here as needed
  ]; */

  const projects = [
    {
      id: 1,
      title: "Projeto Telecall",
      des: "Desenvolvi um projeto Full-Stack utilizando Laravel (PHP) para criar um site com páginas interconectadas, responsivo e alinhado às necessidades da empresa para o desafio da faculdade. No front-end, usei HTML, CSS e Bootstrap 5, integrando APIs como Viacep e SweetAlert. No back-end, implementei um sistema completo com login, painel administrativo (CRUD), recuperação e troca de senha, além de mensagens customizadas para melhorar a experiência do usuário.",
      img: "/image (2).png",
      iconLists: [
        { icon: FaHtml5, color: "text-orange-500" },
        { icon: FaCss3, color: "text-blue-500" },
        { icon: BsBootstrapFill, color: "text-purple-900" },
        { icon: FaJs, color: "text-yellow-500" },
        { icon: FaLaravel, color: "text-red-500" },
        { icon: TbBrandMysql, color: "text-blue-600" },
      ],
      link: "https://github.com/MatheusMigliani/telecall-laravel",
    },
    {
      id: 2,
      title: "p2",
      des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
      img: "/p1.svg",
      iconLists: [
        { icon: FaLaravel, color: "text-red-500" },
        { icon: FaHtml5, color: "text-orange-500" },
        { icon: FaCss3, color: "text-blue-500" },
        { icon: FaJs, color: "text-yellow-500" },
        { icon: BsBootstrapFill, color: "text-purple-500" },
        { icon: TbBrandMysql, color: "text-blue-600" },
      ],
      link: "/ui..com",
    },
    {
      id: 3,
      title: "AI Image SaaS -  Application",
      des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
      img: "/p1.svg",
      iconLists: [
        { icon: FaLaravel, color: "text-red-500" },
        { icon: FaHtml5, color: "text-orange-500" },
        { icon: FaCss3, color: "text-blue-500" },
        { icon: FaJs, color: "text-yellow-500" },
        { icon: BsBootstrapFill, color: "text-purple-500" },
        { icon: TbBrandMysql, color: "text-blue-600" },
      ],
      link: "/ui.aiimg.com",
    },
    {
      id: 4,
      title: "Animated Apple  3D Website",
      des: "Recreated the Apple iPhone 15 Pro website, combining  animations and Three.js 3D effects..",
      img: "/p1.svg",
      iconLists: [
        { icon: FaLaravel, color: "text-red-500" },
        { icon: FaHtml5, color: "text-orange-500" },
        { icon: FaCss3, color: "text-blue-500" },
        { icon: FaJs, color: "text-yellow-500" },
        { icon: BsBootstrapFill, color: "text-purple-500" },
        { icon: TbBrandMysql, color: "text-blue-600" },
      ],
      link: "/ui.apple.com",
    },
  ];

  return (
    <div className="py-20">
      <TextGenerateEffect
        className="text-white text-5xl text-center"
        words="Meus"
      />
      <TextGenerateEffect
        className="text-5xl text-center text-purple-300"
        words="projetos"
      />
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
          >
            <PinContainer title={item.title} href={item.link}>
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <Image src="/bg.png" alt="bgimg" width={464} height={300} />
                </div>
                <Image
                  width={464}
                  height={300}
                  src={item.img}
                  alt="cover"
                  className="z-10 absolute bottom-1 rounded-lg rotate-6 w-auto h-60 "
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((iconObj, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <iconObj.icon className={`w-5 h-5 ${iconObj.color}`} />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <p
                    className="flex lg:text-xl md:text-xs text-sm "
                    style={{ color: "#CBACF9" }}
                  >
                    Clique para ir até o projeto
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
}
{
  /* <div className="flex space-x-3">

                {card.icons?.map((Icon, iconIdx) => (
                  <Icon key={iconIdx} className="text-4xl" />
                ))}
              </div> */
}
