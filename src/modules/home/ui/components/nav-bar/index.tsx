"use client";
import { useRef } from "react";

import { motion, useScroll, useTransform } from "framer-motion";
import { Basicbar } from "./basic-bar";
export const NavBar = () => {
  const navBar = useRef(null);
  const { scrollY } = useScroll({ target: navBar });
  const scaleY = useTransform(scrollY, [0, 25, 26, 40], [0, 0, 1, 1]);
  return (
    <>
      <motion.div>
        <Basicbar
          className="h-fit bg-[url(/banner.png)]"
          textColor="text-white"
        ></Basicbar>
      </motion.div>
    </>
  );
};
