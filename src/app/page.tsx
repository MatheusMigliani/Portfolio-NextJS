import Navbar from "@/components/navbar";
import Skills from "@/components/skills";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Vortex } from "@/components/ui/vortex";
import { HoverCard } from "@radix-ui/react-hover-card";
import Heropage from "./hero";
import { WavyBackground } from "@/components/ui/wavy-background";

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
      <div className="bg-black ">
        <div className="  w-full h-full max-w-7xl mx-auto">
          <h1 className="text-white text-5xl text-center">
            Tecnologias que ja utilizei
          </h1>
          <div className="rounded-2xl translate-x-8">
            <Skills />
          </div>
        </div>
      </div>
    </div>
  );
}
