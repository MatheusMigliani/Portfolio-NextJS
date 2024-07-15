import Navbar from "@/components/navbar";
import Skills from "@/components/skills";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Vortex } from "@/components/ui/vortex";
import { HoverCard } from "@radix-ui/react-hover-card";
import Heropage from "./hero";

export default function Home() {
  return (
    <Vortex
      baseHue={175}
      rangeY={400}
      backgroundColor="black"
      containerClassName=" "
      className=" mx-auto w-full h-full min-h-screen"
    >
      <div className="min-h-screen">
        <div className="max-w-7xl mx-auto">
          <Navbar />
          <Heropage />
        </div>
      </div>
    </Vortex>
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
