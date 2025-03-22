"use client";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
} from "framer-motion";
import { useRef, useState } from "react";
export default function Page() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [x, setX] = useState(0);
  const ref = useRef(null);
  const { scrollXProgress, scrollX } = useScroll({
    container: ref,
  });
  const scaleX = useSpring(scrollXProgress);
  useMotionValueEvent(scrollX, "change", (x) => setX(x));
  return (
    <motion.div className="flex min-h-screen w-[100vw] items-center justify-center text-amber-300">
      <motion.div
        ref={ref}
        className="flex w-[500px] flex-row gap-4 overflow-scroll"
      >
        <div className="h-10 w-200 min-w-100 flex-1/2 bg-neutral-700"></div>
        <div className="h-10 w-200 min-w-100 bg-neutral-700">d</div>
        <div className="h-10 w-200 min-w-100 bg-neutral-700"></div>
        <div className="h-10 w-200 min-w-100 bg-neutral-700"></div>
        <div className="h-10 w-200 min-w-100 bg-neutral-700"></div>
      </motion.div>
      <motion.div
        className="fixed top-0 left-0 h-4 w-full origin-left bg-black"
        style={{ scaleX }}
      ></motion.div>
      <div>{scrollXProgress.get()}</div>
    </motion.div>
  );
}
