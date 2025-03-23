"use client";

import { motion } from "framer-motion";
import { Basicbar } from "./basic-bar";
export const NavBar = () => {
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
