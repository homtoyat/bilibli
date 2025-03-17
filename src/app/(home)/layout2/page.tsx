"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
export default function Page() {
  const [sent, setSent] = useState(false);
  const [open, setOpen] = useState(true);

  return (
    <AnimatePresence>
      <div className="relative flex origin-bottom justify-center bg-neutral-400">
        <motion.div layout className="flex flex-col bg-white p-20">
          {open && (
            <motion.div
              variants={{ visible: {}, hidden: {} }}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{ staggerChildren: 0.1 }}
            >
              <motion.div className="mb-8 grid w-[600px] min-w-[600px] grid-cols-2 gap-4 *:rounded-2xl">
                {["Google", "Amzon", "alibaba", "facebook"].map((item) => {
                  return (
                    <motion.div
                      key={item}
                      variants={{
                        visible: { opacity: 1, y: 0 },
                        hidden: {
                          opacity: 0,
                          y: 20,
                        },
                      }}
                    >
                      {item}
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          )}
          <motion.button
            layout
            className="absolute bottom-0 w-16 rounded-2xl bg-neutral-500 p-4"
            onClick={() => {
              setOpen((prev) => !prev);
            }}
          >
            dd
          </motion.button>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
