"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
export default function Motion() {
  const index0 = 0;
  const index1 = 1;
  const index2 = 2;
  const index3 = 3;
  const [index, setIndex] = useState(-1);
  return (
    <div className="">
      <button
        className="bg-amber-400 p-4"
        onClick={() => {
          setIndex(() => (index + 1) % 2);
        }}
      ></button>
      <AnimatePresence>
        <motion.div
          animate={`active_${index}`}
          initial="inactive"
          whileHover={["hoverActive", `active_0`]}
        >
          <motion.header className="flex items-center justify-center gap-4">
            <motion.div
              variants={{
                active_0: {
                  filter: "grayscale(0)",
                  border: "1px solid red",
                  scale: 1.9,
                },
              }}
              initial={{ filter: "grayscale(1)", scale: 1 }}
              className="-mx-4 h-20 w-20 overflow-auto rounded-full bg-amber-100"
            >
              <motion.img
                src="avatar.png"
                alt=""
                className="h-full w-full object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ filter: "grayscale(100)", scale: 1 }}
              variants={{
                active_1: { filter: "grayscale(0)", scale: 1.9 },
              }}
              className="-mx-4 h-20 w-20 overflow-auto rounded-full bg-amber-100 ring-2 ring-blue-700"
            >
              <motion.img
                src="logo.png"
                alt=""
                className="h-full w-full object-cover"
              />
            </motion.div>
          </motion.header>
          <motion.div key="32323" className="relative flex">
            <motion.blockquote
              className="absolute"
              initial={{ opacity: 0 }}
              variants={{
                active_0: {
                  scale: 1.9,
                  backgroundColor: "#33ddff",
                  opacity: 1,
                },
                hoverActive: {
                  scale: 3,
                  rotate: 360,
                },
              }}
            >
              dslakfjsadflkdlksafjladskfk klasdfjdsasdasdfklj
            </motion.blockquote>

            <motion.blockquote
              className="absolute"
              variants={{
                active_1: {
                  scale: 1.9,
                  backgroundColor: "#019dff",
                  opacity: 1,
                  top: 40,
                },
                inactive: { opacity: 0.4, top: 10 },
              }}
            >
              dslakfjsadflkdlksafjladskfk 你vbnkbsk
            </motion.blockquote>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
