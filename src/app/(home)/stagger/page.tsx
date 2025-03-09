"use client";
import { AnimatePresence, motion } from "framer-motion";
import { HomeIcon, MenuIcon } from "lucide-react";
import { useState } from "react";
const menuItems = ["home", "about", "contact", "services"];
export default function Motion() {
  const [open, setOpen] = useState(false);
  return (
    <AnimatePresence>
      <button
        className="rounded-2xl bg-amber-400 p-4 hover:cursor-pointer active:bg-amber-300/50"
        onClick={() => {
          setOpen(() => !open);
        }}
      >
        <MenuIcon></MenuIcon>
      </button>
      <motion.div
        className="w-16 bg-amber-400 shadow-2xl"
        animate={open ? "open" : "closed"}
        initial="closed"
        variants={{
          open: {
            width: "10rem",
            transition: { staggerChildren: 0.1 },
          },
          closed: {
            width: "0",
            transition: {},
          },
        }}
      >
        <div className="flex min-h-screen w-full flex-col items-start bg-amber-400">
          {menuItems.map((item) => (
            <AnimatePresence key={item}>
              <div className="flex items-center justify-center gap-4 px-4">
                <motion.div
                  className="flex h-16 w-full"
                  variants={{
                    open: { opacity: 1, x: 0, display: "flex" },
                    closed: { opacity: 0, x: -20, display: "none" },
                  }}
                >
                  <HomeIcon className="block"></HomeIcon> {item}
                </motion.div>
              </div>
            </AnimatePresence>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
