"use client";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
} from "framer-motion";
import { useState } from "react";
export default function Page() {
  const [x, setX] = useState(0);
  const { scrollYProgress, scrollXProgress, scrollX, scrollY } = useScroll();
  const scaleX = useSpring(scrollXProgress);
  useMotionValueEvent(scrollX, "change", (x) => setX(x));
  return (
    <motion.div className="flex min-h-screen w-[300vw] items-center justify-center text-amber-300">
      Page
      <motion.div className="fixed top-3 left-0">{x}</motion.div>
      <motion.div
        className="fixed top-0 left-0 h-4 w-full origin-left bg-amber-700"
        style={{ scaleX }}
      ></motion.div>
    </motion.div>
  );
}
