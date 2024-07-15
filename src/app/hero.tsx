import Skills from "@/components/skills";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Link from "next/link";
import React from "react";

export default function Heropage() {
  return (
    <div className="min-h-[60vh] flex items-center justify-between">
      <div className="">
        <TextGenerateEffect words="Olá 👋 Sou Matheus Migliani " />
        <h1 className="text-white">linguiça</h1>
        <p className="text-white">teste</p>
        <Link href={"mailto:matheusmigliani@yahoo.com.br"}>
          <div className="text-white">clica email </div>
        </Link>{" "}
      </div>

      <div className="flex gap-3 translate-x-8">
        <div className="">
          <div className="rounded-2xl">
            <Skills />
          </div>
        </div>
      </div>
    </div>
  );
}
