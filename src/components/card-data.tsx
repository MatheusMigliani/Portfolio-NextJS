import React from "react";
import { CardContainer, CardBody, CardItem } from "./ui/3d-card";
import Image from "next/image";
import { SiPhp } from "react-icons/si";
import { icons, iconsList } from "@tabler/icons-react";
import {
  FaCode,
  FaCss3,
  FaDatabase,
  FaHtml5,
  FaJs,
  FaLaravel,
} from "react-icons/fa6";
import { TbBrandMysql } from "react-icons/tb";
import { BsBootstrapFill } from "react-icons/bs";

export default function CardData() {
  const cardData = [
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
        alt: "Picture of the author",
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
      title: "Make things float in air",
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
      title: "Make things float in air",
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
      title: "Make things float in air",
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
  ];
  return (
    <div className="flex-1 w-full h-full flex flex-wrap justify-center gap-8">
      {cardData.map((card, idx) => (
        <CardContainer
          key={idx}
          className="roboto-var font-2xl w-full sm:w-[30rem]"
        >
          <CardBody className="relative group/card bg-black dark:hover:shadow-2xl border-purple-400/[0.5] w-full h-auto rounded-xl p-6 border">
            <CardItem
              translateZ="50"
              className="text-2xl space-y-2 font-bold text-white dark:text-white"
            >
              {card.title}
              <div className="flex space-x-3">
                {/* Container for multiple icons */}
                {card.icons?.map((Icon, iconIdx) => (
                  <Icon key={iconIdx} className="text-4xl" />
                ))}
              </div>
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-400 text-1xl max-w-sm mt-2 dark:text-neutral-300 "
            >
              {card.subtitle}
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-200 font-medium text-sm max-w-sm mt-2 dark:text-neutral-300 "
            >
              {card.description}
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-200 font-medium text-sm max-w-sm mt-2 dark:text-neutral-300 "
            >
              {card.paragraph}
            </CardItem>
            <CardItem
              translateZ="100"
              rotateX={20}
              rotateZ={-10}
              className="w-full mt-4"
            >
              <div className="flex justify-center items-center align-middle">
                <Image
                  src={card.image.src}
                  width={350}
                  height={250}
                  alt={card.image.alt}
                  className={card.image.className}
                />
              </div>
            </CardItem>
            <div className="flex justify-between items-center mt-20">
              {card.buttons.map((button, buttonIdx) => (
                <CardItem
                  key={buttonIdx}
                  translateZ={20}
                  translateX={button.translateX}
                  as="button"
                  className={button.className}
                >
                  {button.text}
                </CardItem>
              ))}
            </div>
          </CardBody>
        </CardContainer>
      ))}
    </div>
  );
}
