"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
export default function Motion() {
  const sliderValue = useMotionValue(50);
  const scaleValue = useMotionValue(1);
  const opacity = useTransform(sliderValue, [0, 100], [0, 1]);
  const scale = useSpring(scaleValue, {});
  function onRangechange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = parseFloat(e.target.value);
    console.log(value);
    sliderValue.set(value);
    scaleValue.set(value / 10);
  }

  return (
    <div className="flex h-dvh flex-col items-center justify-center bg-neutral-100">
      <div className="flex h-48 w-full flex-col items-center justify-center text-black">
        <input
          type="range"
          onChange={onRangechange}
          defaultValue={50}
          className="border-0 bg-amber-600 outline-0"
        ></input>
        <motion.div
          dragConstraints={{ left: 100, right: 0 }}
          style={{ opacity, scale }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="mt-20 border text-black"
        >
          sakfldsja
        </motion.div>
      </div>
    </div>
  );
}
