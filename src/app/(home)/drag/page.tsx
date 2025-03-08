"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
export default function Motion() {
  const x = useMotionValue(0);
  const scale = useTransform(x, [-100, 0, 100], [1, 1, 3.5]);
  const borderRadius = useTransform(x, [-100, 0, 100], ["0%", "25%", "50%"]);
  const backgroundColor = useTransform(
    x,
    [-100, 0, 100],
    ["#33cd3f", "#ff00dd", "#e13d0f"],
  );
  return (
    <div className="flex h-dvh flex-col items-center justify-center bg-neutral-100">
      <div className="flex h-48 w-full flex-col items-center justify-center text-black">
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          style={{ x, scale, borderRadius, backgroundColor }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="size-40 border bg-amber-300 text-black ring-4 ring-pink-500 ring-offset-8"
        >
          sakfldsja
        </motion.div>
      </div>
    </div>
  );
}
