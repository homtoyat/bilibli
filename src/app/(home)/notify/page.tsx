"use client";
import { Separator } from "@/components/ui/separator";
import { AnimatePresence, motion } from "framer-motion";
import { BellDotIcon, BellOffIcon } from "lucide-react";
import { useState } from "react";
const list = [
  "new modle about responsive added",
  "passowrd reset",
  "when outside for a walk",
];
export default function Motion() {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative h-screen w-60 bg-neutral-900 py-4 text-neutral-50">
      <button
        className="flex cursor-pointer gap-4 hover:animate-pulse"
        onMouseEnter={() => {
          setOpen(() => true);
        }}
        onMouseLeave={() => {
          setOpen(false);
        }}
      >
        {open && <BellDotIcon></BellDotIcon>}
        {!open && <BellOffIcon></BellOffIcon>}
        <span>Showing:Desktop</span>
      </button>
      <AnimatePresence>
        <motion.div
          exit="closed"
          className="inline-block"
          onMouseLeave={() => {
            setOpen(false);
          }}
          onMouseEnter={() => {
            setOpen(true);
          }}
          animate={open ? "open" : "closed"}
        >
          <div className="h-8 bg-transparent"></div>
          <motion.div
            className="h-fit w-fit overflow-hidden rounded-xl border-t-[30px] border-t-amber-500 bg-neutral-300 py-1 max-md:translate-y-[var(--y)] md:translate-x-[var(--x)]"
            variants={{
              open: {
                "--x": "0",
                opacity: 1,
                "--y": "0%",
              },
              closed: {
                "--x": "-100%",
                opacity: 0,
                "--y": "10%",
                transition: {
                  staggerChildren: 0.4,
                },
              },
            }}
          >
            <header className="px-4 font-bold text-black">
              {" "}
              Notifications
            </header>
            <Separator></Separator>
            {list.map((item) => (
              <motion.div
                key={item}
                className="px-4 text-black hover:bg-amber-300"
              >
                {item}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
