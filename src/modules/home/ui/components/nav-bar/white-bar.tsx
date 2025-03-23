"use client";
import { useRef } from "react";

import { useScroll, useTransform } from "framer-motion";
import { Basicbar } from "./basic-bar";
export const WhiteNavBar = () => {
  const navBar = useRef(null);
  const { scrollY } = useScroll({ target: navBar });
  const scaleY = useTransform(scrollY, [0, 25, 26, 40], [0, 0, 1, 1]);
  return (
    <div className="fixed z-30 mx-auto h-20 w-full max-w-[2560px] min-w-[1080px] overflow-hidden shadow-lg">
      <Basicbar className="bg-white" textColor="text-black"></Basicbar>
    </div>
  );
};
