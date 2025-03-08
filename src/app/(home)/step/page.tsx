"use client";
import { motion } from "framer-motion";
export default function Motion() {
  return (
    <div className="flex h-dvh flex-col items-center justify-center bg-neutral-100">
      <div className="h-48 w-24 rounded-2xl bg-yellow-800">
        <motion.div
          className="text-8 fade-out inset-1 flex h-23 flex-wrap overflow-hidden text-6xl tracking-wide break-all"
          animate={{ opacity: [0, 1, 0] }}
          transition={{
            repeat: Infinity,
            repeatDelay: 1,
          }}
        >
          responsesive
        </motion.div>
        <p>make your animiation work on all devices</p>
      </div>
    </div>
  );
}
