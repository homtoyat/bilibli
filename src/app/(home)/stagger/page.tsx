"use client";
import { AnimatePresence, motion } from "framer-motion";
import { MenuIcon } from "lucide-react";
import { useState } from "react";
const menuItems = ["home", "about", "contact", "services"];
export default function Motion() {
  const [open, setOpen] = useState(false);
  return (
    <AnimatePresence>
      <motion.div
        className="w-16 bg-amber-400 shadow-2xl"
        animate={open ? "open" : "closed"}
        initial="closed"
        variants={{
          open: {
            width: "10rem",
            transition: {
              staggerChildren: 0.4,
              staggerDirection: 1,
            },
          },
          closed: {
            width: "4rem",
            rotate: 360,
            transition: {
              staggerChildren: 0.1,
              staggerDirection: -1,
              duration: 0.4,
            },
          },
        }}
      >
        <button
          className="rounded-2xl bg-amber-400 p-4 hover:cursor-pointer active:bg-amber-300/50"
          onClick={() => {
            setOpen(() => !open);
          }}
        >
          <MenuIcon></MenuIcon>
        </button>

        <div className="flex min-h-screen w-full flex-col items-start bg-amber-400">
          {menuItems.map((item) => (
            <AnimatePresence key={item}>
              <div>
                {/* {open && (
                  <motion.div
                    className="flex h-16 w-full items-center justify-center"
                    variants={{
                      open: { opacity: 1, x: 0 },
                      closed: { opacity: 0, x: 100 },
                    }}
                  >
                    <Clock10Icon></Clock10Icon>
                  </motion.div>
                )} */}
                <motion.div
                  className="flex h-16 w-full items-center justify-center px-8"
                  variants={{
                    open: { opacity: 1, x: 0 },
                    closed: { opacity: 0, x: -20 },
                  }}
                >
                  {item}
                </motion.div>
              </div>
            </AnimatePresence>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
