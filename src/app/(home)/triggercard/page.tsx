"use client";
import { motion } from "framer-motion";
export default function Page() {
  return (
    <motion.div className="flex h-[300vh] w-full flex-col items-center justify-center bg-neutral-800">
      <motion.div
        className="flex gap-4"
        whileInView="visible"
        initial="hidden"
        animate="hidden"
        viewport={{ amount: 1 }}
        variants={{
          visible: {
            transition: { staggerChildren: 0.1, type: "spring" },
            opacity: 1,
          },
          hidden: {
            transition: {
              staggerChildren: 0.1,
              staggerDirection: -1,
              type: "spring",
            },
          },
        }}
      >
        {[0, 1, 2, 3, 4].map((item) => (
          <motion.div
            key={item}
            className="h-30 w-30 bg-green-500/30"
            variants={{
              visible: {
                opacity: 1,
                scale: 1,
                x: 10,
              },
              hidden: {
                opacity: 0,
                scale: 1,
                x: -150,
              },
            }}
          ></motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
