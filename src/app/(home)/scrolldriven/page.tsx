"use client";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef, useState } from "react";
export default function Page() {
  const ref = useRef(null);
  const [x] = useState(0);
  const [y, setY] = useState(0);
  const { scrollY, scrollYProgress } = useScroll();
  // useMotionValueEvent(scrollX, "change", (x) => {
  //   debugger;
  //   setX(x);
  // });
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
  useMotionValueEvent(scrollY, "change", (y) => {
    setY(y);
  });
  return (
    <div className="w-screen">
      <div className="h-screen w-screen">{x}</div>
      <motion.div
        style={{ scaleX: useSpring(scaleX) }}
        className="fixed top-0 mx-auto flex w-full origin-left justify-center bg-amber-300"
      >
        {y}
      </motion.div>
      <motion.div
        ref={ref}
        viewport={{ amount: 0.5 }}
        className="flex flex-nowrap gap-4 overflow-x-auto"
        whileInView="visible"
        initial="hidden"
        animate="hidden"
        variants={{
          visible: {
            transition: { staggerChildren: 0.4 },
          },
          hidden: {
            transition: {
              staggerChildren: 0.4,
              staggerDirection: -1,
            },
          },
        }}
      >
        <motion.div
          variants={{
            visible: {
              opacity: 1,
              x: 0,
            },
            hidden: {
              opacity: 0,
              x: -100,
            },
          }}
          transition={{ duration: 1 }}
          className="h-100 w-100 rounded-2xl bg-amber-300"
        >
          {`y:${y}`}
        </motion.div>
        <motion.div
          variants={{
            visible: {
              opacity: 1,
              x: 0,
            },
            hidden: {
              opacity: 0,
              x: -100,
            },
          }}
          transition={{ duration: 1 }}
          className="h-100 w-100 rounded-2xl bg-amber-300"
        ></motion.div>
        <motion.div
          variants={{
            visible: {
              opacity: 1,
              backgroundColor: "#990033",
              scaleX: 1,
              x: 0,
            },
            hidden: {
              opacity: 0,
              backgroundColor: "#999999",
              scaleX: 0,
              x: -100,
            },
          }}
          transition={{ duration: 1 }}
          className="h-100 w-240 origin-left rounded-2xl"
        ></motion.div>
      </motion.div>
      <div className="h-screen">d</div>
    </div>
  );
}
