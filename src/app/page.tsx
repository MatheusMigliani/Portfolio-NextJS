"use client";
import Navbar from "@/components/navbar";
import Skills from "@/components/skills";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Vortex } from "@/components/ui/vortex";
import { HoverCard } from "@radix-ui/react-hover-card";
import Heropage from "./hero";
import { WavyBackground } from "@/components/ui/wavy-background";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";

export default function Home() {
  return (
    <div>
      <WavyBackground
        backgroundFill="black"
        containerClassName=" "
        className="  w-full h-full min-h-screen"
      >
        <div className=" w-full h-full min-h-screen">
          <div className="w-full h-full max-w-7xl mx-auto">
            <div>
              <Navbar />
            </div>
            <div className="">
              <Heropage />
            </div>
          </div>
        </div>
      </WavyBackground>
      <div className=" bg-black flex-1 w-full h-full flex flex-wrap ">
        <div className="  w-full h-full max-w-7xl mx-auto">
          <h1 className="text-white text-5xl text-center">
            Habilidades e competências
          </h1>
          <div className="rounded-2xl translate-x-8">
            <Skills />
          </div>
        </div>
      </div>

      <div className="bg-black flex-wrap col-auto grid-cols-1 flex ">
        <div className=" w-full h-full max-w-7xl mx-auto">
          <h1 className="text-white text-5xl text-center">Projetos</h1>
          <div className="gap-10 col-auto grid-cols-1 flex justify-center  rounded-2xl translate-x-8">
            <CardContainer className="roboto-var font-2xl  ">
              <CardBody className="	relative group/card bg-black dark:hover:shadow-2xl border-purple-400/[0.5] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                <CardItem
                  translateZ="50"
                  className="text-5xl font-bold text-white dark:text-white"
                >
                  Make things float in air
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-1xl  max-w-sm mt-2 dark:text-neutral-300 underline decoration-white decoration-solid"
                >
                  Hover over this card to unleash the power of CSS perspective
                </CardItem>
                <CardItem
                  translateZ="100"
                  rotateX={20}
                  rotateZ={-10}
                  className="w-full mt-4"
                >
                  <img src="./favicon.ico" alt="" className="bg-yellow-500" />
                </CardItem>
                <div className="flex justify-between items-center mt-20">
                  <CardItem
                    translateZ={20}
                    translateX={-40}
                    as="button"
                    className="bg-purple-400/[0.5] px-4 py-2 rounded-xl text-xs text-white font-normal dark:text-white"
                  >
                    Try now →
                  </CardItem>
                  <CardItem
                    translateZ={20}
                    translateX={40}
                    as="button"
                    className="px-4 py-2 rounded-xl bg-purple-400/[0.5] dark:bg-white dark:text-black text-white text-xs font-bold"
                  >
                    Sign up
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
            <CardContainer className="roboto-var font-2xl  ">
              <CardBody className="	relative group/card bg-black dark:hover:shadow-2xl border-purple-400/[0.5] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                <CardItem
                  translateZ="50"
                  className="text-5xl font-bold text-white dark:text-white"
                >
                  Make things float in air
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  Hover over this card to unleash the power of CSS perspective
                </CardItem>
                <CardItem
                  translateZ="100"
                  rotateX={20}
                  rotateZ={-10}
                  className="w-full mt-4"
                >
                  <img src="./favicon.ico" alt=""  className="bg-cyan-500"/>
                </CardItem>
                <div className="flex justify-between items-center mt-20">
                  <CardItem
                    translateZ={20}
                    translateX={-40}
                    as="button"
                    className="bg-purple-400/[0.5] px-4 py-2 rounded-xl text-xs text-white font-normal dark:text-white"
                  >
                    Try now →
                  </CardItem>
                  <CardItem
                    translateZ={20}
                    translateX={40}
                    as="button"
                    className="px-4 py-2 rounded-xl bg-purple-400/[0.5] dark:bg-white dark:text-black text-white text-xs font-bold"
                  >
                    Sign up
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
            <CardContainer className="roboto-var font-2xl  ">
              <CardBody className="	relative group/card bg-black dark:hover:shadow-2xl border-purple-400/[0.5] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                <CardItem
                  translateZ="50"
                  className="text-5xl font-bold text-white dark:text-white"
                >
                  Make things float in air
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  Hover over this card to unleash the power of CSS perspective
                </CardItem>
                <CardItem
                  translateZ="100"
                  rotateX={20}
                  rotateZ={-10}
                  className="w-full mt-4"
                >
                  <img src="./favicon.ico" alt=""  className="bg-white"/>
                </CardItem>
                <div className="flex justify-between items-center mt-20">
                  <CardItem
                    translateZ={20}
                    translateX={-40}
                    as="button"
                    className="bg-purple-400/[0.5] px-4 py-2 rounded-xl text-xs text-white font-normal dark:text-white"
                  >
                    Try now →
                  </CardItem>
                  <CardItem
                    translateZ={20}
                    translateX={40}
                    as="button"
                    className="px-4 py-2 rounded-xl bg-purple-400/[0.5] dark:bg-white dark:text-black text-white text-xs font-bold"
                  >
                    Sign up
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
            <CardContainer className="roboto-var font-2xl  ">
              <CardBody className="	relative group/card bg-black dark:hover:shadow-2xl border-purple-400/[0.5] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                <CardItem
                  translateZ="50"
                  className="text-5xl font-bold text-white dark:text-white"
                >
                  Make things float in air
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  Hover over this card to unleash the power of CSS perspective
                </CardItem>
                <CardItem
                  translateZ="100"
                  rotateX={20}
                  rotateZ={-10}
                  className="w-full mt-4"
                >
                  <img src="./favicon.ico" alt="" className="bg-purple-400/[0.5]" />
                </CardItem>
                <div className="flex justify-between items-center mt-20">
                  <CardItem
                    translateZ={20}
                    translateX={-40}
                    as="button"
                    className="bg-purple-400/[0.5] px-4 py-2 rounded-xl text-xs text-white font-normal dark:text-white"
                  >
                    Try now →
                  </CardItem>
                  <CardItem
                    translateZ={20}
                    translateX={40}
                    as="button"
                    className="px-4 py-2 rounded-xl bg-purple-400/[0.5] dark:bg-white dark:text-black text-white text-xs font-bold"
                  >
                    Sign up
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          </div>
          
        </div>
      </div>
    </div>
  );
}
