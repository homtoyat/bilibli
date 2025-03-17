"use client";
import { motion } from "framer-motion";
import { ChevronUp, LoaderPinwheelIcon, PlaneIcon } from "lucide-react";
import { useState } from "react";
export default function Page() {
  const [sent, setSent] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <motion.div className="flex h-screen w-screen justify-center gap-10 bg-green-700 pt-10 text-neutral-50">
      <div className="relative h-10 w-100 items-center gap-0">
        <motion.input
          className="inline-block w-100 rounded bg-neutral-200 outline-0"
          onClick={() => setSent((_sent) => !_sent)}
        ></motion.input>

        <motion.button
          style={{ color: sent ? "#ffff" : "#dc3a9e" }}
          className="absolute cursor-pointer"
          onClick={() => setSent((_sent) => !_sent)}
          layout
          animate={{
            top: 0,
            left: "100%",
            backgroundColor: "#fffff",
            borderRadius: "10px",
            scale: 4,
            transition: { duration: 3 },
          }}
          initial={{ top: 0, left: 0 }}
        >
          <motion.span layout className="block">
            <PlaneIcon></PlaneIcon>
          </motion.span>
        </motion.button>
      </div>

      <div className="relative size-fit">
        <motion.div
          layout
          className="flex h-[500px] w-[500px] flex-col items-center justify-center bg-neutral-600/50"
        >
          <motion.div
            layout
            className="flex items-center gap-8 rounded-2xl bg-neutral-800/80 p-12"
            style={{
              flexDirection: open ? "column" : "row",
              padding: open ? "20px" : "8px",
            }}
          >
            <motion.div
              layout
              style={{
                scale: open ? 1.9 : 1,
              }}
            >
              <LoaderPinwheelIcon className="animate-spin"></LoaderPinwheelIcon>
            </motion.div>
            <div className="flex flex-col">
              <motion.span
                layout
                style={{
                  fontSize: open ? "16px" : "8px",
                }}
              >
                Interstellar
              </motion.span>
              <motion.span layout>Hans Zimmer</motion.span>
            </div>
          </motion.div>
        </motion.div>
        <div className="absolute bottom-0.5 flex w-[500px] items-center justify-center">
          <button
            className="flex rounded-2xl bg-neutral-900/70 p-4 hover:bg-neutral-700/70"
            onClick={() => setOpen((__prev) => !__prev)}
          >
            Toggle
            <motion.div
              animate={open ? "up" : "down"}
              variants={{
                up: {
                  rotate: 0,
                },
                down: {
                  rotate: 180,
                },
              }}
            >
              <ChevronUp></ChevronUp>
            </motion.div>
          </button>
        </div>
      </div>
    </motion.div>
  );
}
