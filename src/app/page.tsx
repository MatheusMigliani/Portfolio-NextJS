"use client";
import Navbar from "@/components/navbar";
import Heropage from "./hero";
import { WavyBackground } from "@/components/ui/wavy-background";

import dynamic from "next/dynamic";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
const Skills = dynamic(() => import("@/components/skills"), {
  ssr: false, // Disable server-side rendering for this component
});

const CardData = dynamic(() => import("@/components/card-data"), {
  ssr: false, // Disable server-side rendering for this component
});

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
          <TextGenerateEffect
            className="text-white text-5xl text-center"
            words="Habilidades e"
          />
          <TextGenerateEffect
            className="text-5xl text-center text-purple-300"
            words="competências"
          />
          <div className="rounded-2xl translate-x-8">
            <Skills />
          </div>
        </div>
      </div>

      <div className="bg-black flex-wrap">
        <div className="">
          <div className="">
            <CardData />
          </div>
        </div>
      </div>
    </div>
  );
}
