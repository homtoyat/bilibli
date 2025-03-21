"use client";
import { motion } from "framer-motion";
export default function Motion() {
  return (
    <div className="flex h-dvh flex-col items-center justify-center bg-neutral-100">
      <div className="h-48 w-24 overflow-hidden rounded-2xl bg-yellow-800 text-white">
        <div className="fade-out relative overflow-hidden">
          <motion.div
            className="text-8 fade-out inset-1 flex h-23 origin-top-left flex-wrap text-6xl tracking-wide break-all text-white"
            animate={{
              opacity: [0, 1, 0.3],

              scaleX: [1, 3, 5, 6],
              scaleY: [1, 1, 1, 5],
            }}
            transition={{
              repeat: Infinity,
              repeatDelay: 1,
              duration: 3,

              repeatType: "reverse",
            }}
          >
            responsesive
          </motion.div>
          <div className="bg-gra absolute inset-0 h-full w-full bg-gradient-to-b from-transparent to-yellow-800"></div>
        </div>

        <p>make your animiation work on all devices</p>
      </div>
    </div>
  );
}
