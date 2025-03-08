"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
export default function Motion() {
  const [visible, setVisible] = useState(true);
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
            exit={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0 }}
            className="h-20 w-20 rounded-2xl bg-neutral-700/50 p-4"
          >
            dddd happy
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
