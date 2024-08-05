import { cn } from "@/lib/utils";
import { AnimatePresence, motion, color } from "framer-motion";
import { useState } from "react";
import { IconType } from "react-icons";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    text: string;
    Icon: IconType;
    color: string;
    colornumber: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-2 align-middle md:grid-cols-3  lg:grid-cols-4  py-10 ",
        className
      )}
    >
      {items.map((item, idx) => {
        const Icon = item.Icon;
        const color = `fill-${item.color}-${item.colornumber}`;
      

        return (
          <div
            key={idx}
            className="relative group  block p-2 h-full w-full"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full shadow-md border-cyan-500 bg-gray-400/[0.2] block dark:bg-purple-500/[0.8]   rounded-2xl"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>
            <div className="px-10 w-full h-full shadow-lg align-middle blue   border-purple-400/[0.5] border-2 cursor-pointer rounded-md   bg-zinc-900 group-hover:border-purple-500 relative z-20 transition-all duration-500">
              <div className="align-middle shadow-lg  py-10 z-50 relative space-y-5 ">
                <Icon className={`w-8 h-8 mx-auto ${color} `} />
                <p className="align-middle text-xl font-semibold antialiased justify-center  text-center text-white">
                  <div className="flex align-middle justify-center text-center">
                    {item.text}
                  </div>
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
