"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
export default function Page() {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.1 });
  return (
    <div>
      <div className="h-screen">d</div>
      <motion.div
        ref={ref}
        className="flex gap-4"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
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
          className="h-100 flex-1 rounded-2xl bg-amber-300"
        ></motion.div>
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
          className="h-100 flex-1 rounded-2xl bg-amber-300"
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
          className="h-100 flex-1 origin-left rounded-2xl"
        ></motion.div>
      </motion.div>
      <div className="h-screen">d</div>
    </div>
  );
}
