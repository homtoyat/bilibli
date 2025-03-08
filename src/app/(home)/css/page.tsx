"use client";

import { motion } from "framer-motion";
export default function Motion() {
  return (
    <div className="">
      <motion.ol
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        animate={{ "--x": "100px", "--color": "#33dd33" }}
        initial={{ "--x": "0px", "--color": "#f39d03" }}
        transition={{
          duration: 1,
          repeatType: "reverse",
          repeat: Infinity,
        }}
        className="flex flex-col bg-amber-300 text-center text-black ring-4 ring-offset-8"
      >
        <li className="bg-accent text-[var(--color )] translate-x-[var(--x)]">
          1
        </li>
        <li className="translate-x-[var(--x)]">2</li>
      </motion.ol>
    </div>
  );
}
