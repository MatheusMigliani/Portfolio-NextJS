import React from "react";
import { CardContainer, CardBody, CardItem } from "./ui/3d-card";
import Image from "next/image";

export default function CardData() {
  const cardData = [
    {
      title: "Make things float in air",
      description:
        "Hover over this card to unleash the power of CSS perspective",
      image: {
        src: "/favicon.ico",
        alt: "Picture of the author",
        className: "bg-yellow-500",
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
      description:
        "Hover over this card to unleash the power of CSS perspective",
      image: {
        src: "./favicon.ico",
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
      description:
        "Hover over this card to unleash the power of CSS perspective",
      image: {
        src: "./favicon.ico",
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
      description:
        "Hover over this card to unleash the power of CSS perspective",
      image: {
        src: "./favicon.ico",
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
    // Add more card objects here as needed
  ];
  return (
    <div className="bg-black flex-wrap col-auto grid-cols-1 flex">
      <div className="w-full h-full max-w-7xl mx-auto">
        <div className="gap-10 col-auto grid-cols-1 flex justify-center rounded-2xl translate-x-8">
          {cardData.map((card, idx) => (
            <CardContainer key={idx} className="roboto-var font-2xl">
              <CardBody className="relative group/card bg-black dark:hover:shadow-2xl border-purple-400/[0.5] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                <CardItem
                  translateZ="50"
                  className="text-5xl font-bold text-white dark:text-white"
                >
                  {card.title}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-1xl max-w-sm mt-2 dark:text-neutral-300 underline decoration-white decoration-solid"
                >
                  {card.description}
                </CardItem>
                <CardItem
                  translateZ="100"
                  rotateX={20}
                  rotateZ={-10}
                  className="w-full mt-4"
                >
                  <Image
                    src="/favicon.ico"
                    width={500}
                    height={500}
                    alt="Picture of the author"
                    className="bg-yellow-500"
                  />
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
      </div>
    </div>
  );
}
