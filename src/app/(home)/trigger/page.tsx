"use client";
import { motion } from "framer-motion";
export default function Page() {
  return (
    <motion.div className="flex h-[300vh] w-full flex-col items-center justify-center bg-neutral-800">
      <motion.div
        className="h-40 w-40"
        variants={{
          visible: {
            backgroundColor: "#ff0000",
            borderRadius: "25%",
            scale: 3,
          },
          hidden: {
            backgroundColor: "#00ffdd",
            borderRadius: "50%",
            scale: 1,
          },
        }}
        initial="hidden"
        animate="hidden"
        whileInView="visible"
        viewport={{ amount: "some" }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="h-8 w-8"
          variants={{
            visible: { backgroundColor: "#00f" },
            hidden: {
              backgroundColor: "#0f0",
            },
          }}
        ></motion.div>
      </motion.div>
    </motion.div>
  );
}
