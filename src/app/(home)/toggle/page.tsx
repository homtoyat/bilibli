"use client";

import { AnimatePresence, motion } from "framer-motion";
import { PlusCircleIcon } from "lucide-react";
import { useState } from "react";
export default function Motion() {
  const [visible, setVisible] = useState(false);
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <button
        className="bg-amber-600 hover:bg-amber-600/80"
        onClick={() => {
          setVisible(() => !visible);
        }}
      >
        toggle visibility
      </button>
      <AnimatePresence>
        {visible && (
          <motion.div
            variants={{
              open: { opacity: 1, y: "0px", scale: 1 },
              closed: { opacity: 0, y: "100px", scale: 0.9 },
            }}
            exit="closed"
            animate="open"
            initial="closed"
            className="relative h-80 w-80 gap-4 rounded-2xl bg-neutral-700/50 p-4"
          >
            <div className="relative h-[80%] w-full bg-amber-200">
              <motion.img
                src="banner.png"
                className="object-cover"
                variants={{
                  open: { opacity: 1, y: "0px", scale: 1 },
                  closed: { opacity: 0, y: "100px", scale: 0 },
                }}
              ></motion.img>
            </div>
            <div>BAMBI</div>
            <motion.button
              variants={{
                open: {
                  scale: [0.38, 1, 0.38],
                  rotate: "90deg",
                },
                closed: {
                  scale: [1.33, 10, 0.1],
                  rotate: "-90deg",
                },
              }}
              className="text-pin absolute top-4 right-4"
              transition={{ duration: 3 }}
            >
              <PlusCircleIcon className="rotate-45"></PlusCircleIcon>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
