"use client";
import { motion } from "framer-motion";
export default function Page() {
  return (
    <motion.div
      style={{
        width: 300,
        height: 300,
        backgroundColor: "#88ffdd",
        margin: "1000px auto",
      }}
      initial="hidden"
      whileInView="inView"
      variants={{
        inView: {
          opacity: 1,
          scale: 1,
          transition: { duration: 2, staggerChildren: 0.4 },
        },
        hidden: {
          opacity: 0,
          transition: {
            duration: 1,
            staggerChildren: 0.4,
            staggerDirection: -1,
          },
        },
      }}
      viewport={{ amount: 1 }}
    >
      <div className="flex w-full gap-4">
        <motion.div
          className="h-33 flex-1 bg-yellow-300"
          variants={{
            inView: {
              opacity: 1,
              scale: 1,
            },
            hidden: {
              opacity: 0,
              scale: 1,
            },
          }}
        ></motion.div>
        <motion.div
          className="h-33 flex-2 bg-yellow-300"
          variants={{
            inView: {
              opacity: 1,
              scale: 1,
            },
            hidden: {
              opacity: 0,
              scale: 1,
            },
          }}
        ></motion.div>
        <motion.div
          className="h-33 flex-3 bg-yellow-300"
          variants={{
            inView: {
              opacity: 1,
              scale: 1,
            },
            hidden: {
              opacity: 0,
              scale: 1,
            },
          }}
        ></motion.div>
      </div>
    </motion.div>
  );
}
