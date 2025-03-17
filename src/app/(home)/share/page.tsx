"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
export default function Page() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <AnimatePresence>
      <div className="flex justify-center">
        <ul className="flex w-fit cursor-pointer justify-center gap-4 bg-neutral-800 p-8 text-white">
          <li className="relative p-4" onClick={() => setActiveIndex(0)}>
            {activeIndex == 0 && (
              <>
                <motion.span
                  className="absolute inset-0 cursor-pointer rounded-md bg-neutral-100/50"
                  layoutId="slide"
                ></motion.span>
                <motion.span
                  className="absolute bottom-0 left-0 z-20 h-4 w-full translate-y-full cursor-pointer rounded-md bg-green-500"
                  layoutId="slide2"
                  animate={{ transition: { type: "spring" } }}
                ></motion.span>
              </>
            )}
            <a href="#">hello</a>
          </li>
          <li className="relative p-4" onClick={() => setActiveIndex(1)}>
            {activeIndex == 1 && (
              <>
                <motion.span
                  className="absolute inset-0 cursor-pointer rounded-md bg-neutral-100/50"
                  layoutId="slide"
                ></motion.span>
                <motion.span
                  className="absolute bottom-0 left-0 z-20 h-4 w-full translate-y-full cursor-pointer rounded-md bg-green-500"
                  layoutId="slide2"
                  animate={{ transition: { type: "spring" } }}
                ></motion.span>
              </>
            )}
            <a href="#">world</a>
          </li>
          <li className="relative p-4" onClick={() => setActiveIndex(2)}>
            {activeIndex == 2 && (
              <>
                <motion.span
                  className="absolute inset-0 cursor-pointer rounded-md bg-neutral-100/50"
                  layoutId="slide"
                ></motion.span>
                <motion.span
                  className="absolute bottom-0 left-0 z-20 h-4 w-full translate-y-full cursor-pointer rounded-md bg-green-500"
                  layoutId="slide2"
                  animate={{ transition: { type: "spring" } }}
                ></motion.span>
              </>
            )}
            <a href="#">Kafka</a>
          </li>
        </ul>
      </div>
    </AnimatePresence>
  );
}
