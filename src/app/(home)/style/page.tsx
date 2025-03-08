"use client";
import { motion, useMotionValue } from "framer-motion";
export default function Motion() {
  const scale = useMotionValue(3.2);
  return (
    <div className="flex h-dvh flex-col items-center justify-center bg-neutral-100">
      <div className="h-48 w-24 overflow-hidden rounded-2xl bg-yellow-800 text-white">
        <div className="fade-out relative overflow-hidden">
          <motion.div
            className="text-8 fade-out inset-1 flex h-23 origin-top-left flex-wrap text-6xl tracking-wide break-all text-white"
            style={{
              scale,
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
