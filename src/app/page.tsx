import Navbar from "@/components/navbar";
import Skills from "@/components/skills";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Vortex } from "@/components/ui/vortex";
import { HoverCard } from "@radix-ui/react-hover-card";
import Heropage from "./hero";
import { WavyBackground } from "@/components/ui/wavy-background";

export default function Home() {
  return (
    <WavyBackground
      backgroundFill="black"
      containerClassName=" "
      className="  w-full h-full min-h-screen"
    >
      <div className=" w-full h-full min-h-screen">
        <div className="w-full h-full max-w-7xl mx-auto">
          <Navbar />
          <Heropage />
        </div>
      </div>
    </WavyBackground>
  );
}
{
  /* <div className="min-h-screen">
        <div className="text-2xl bg-slate-700 text-red-600 font-bold grid-cols-8 grid ">
          <TextGenerateEffect
            className="text-2xl text-red-600 font-bold "
            words="Olá, meu nome é "
          />
        </div>
        <div className=" bg-green-700 grid grid-cols-4 gap-4 ">
          <Skills />
        </div>
      </div> */
}
{
}
