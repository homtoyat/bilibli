"use client";
import { motion } from "framer-motion";
export default function Motion() {
  return (
    <div className="flex h-dvh flex-col items-center justify-center bg-red-300">
      <motion.div className="text-neutral-200">
        <motion.button
          className="rounded-2xl bg-black p-3"
          initial={{ backgroundColor: "#00f", opacity: 0.8 }}
          animate={{
            scale: [2, 0.5, 3, 4, 0.1],
            rotate: [0, 90, -90, 90, -90],
            borderRadius: [0, 90, 20, 10, 0],

            y: "-50%",
            x: "100%",
            opacity: 0.3,
          }}
          transition={{
            repeat: Infinity,
            repeatDelay: 0.5,
            ease: "easeInOut",
            repeatType: "reverse",
            duration: 5,
            times: [0, 0.1, 0.13, 0.4, 1],
          }}
        >
          hell world!!!
        </motion.button>
      </motion.div>
      <motion.button
        className="mt-20 size-20 bg-amber-200 focus:outline-4 focus:outline-rose-500"
        whileHover={{ scale: 2 }}
        transition={{ type: "spring" }}
        whileFocus={{ scale: 2.54 }}
        whileTap={{ scale: 1 }}
        whileDrag={{ left: "100px" }}
      ></motion.button>
    </div>
  );
}
