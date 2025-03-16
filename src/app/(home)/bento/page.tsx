"use client";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef, useState } from "react";
const FadeIn = ({ children, ...param }) => {
  const ref = useRef(null);
  const [value, setValue] = useState(0);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0.4]);
  useMotionValueEvent(scrollYProgress, "change", (v) => setValue(v));
  return (
    <motion.div ref={ref} {...param} style={{ opacity }}>
      {children} :{value}
    </motion.div>
  );
};
export default function Page() {
  return (
    <div className="bg-neutral-500">
      <div className="h-screen w-screen bg-neutral-500"></div>
      <div className="flex h-140 justify-center gap-4">
        <FadeIn className="sticky top-0 left-0 flex h-50 w-full justify-center rounded-2xl bg-green-500/90">
          left content
        </FadeIn>
        <div className="flex w-400 flex-col items-center justify-center gap-4">
          <FadeIn className="w-full flex-1 rounded bg-neutral-100/20">
            top right
          </FadeIn>
          <FadeIn className="w-full flex-1 rounded-2xl bg-neutral-100/20">
            left right
          </FadeIn>
        </div>
      </div>
      cr
      <div className="w-seen h-screen bg-amber-300/70"></div>
    </div>
  );
}
