import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
export const MyAvatar = () => {
  const [enter, setEnter] = useState(false);
  const [enterDetail, setEnterDetail] = useState(false);
  return (
    <AnimatePresence>
      <motion.div
        variants={{
          enter: {},
          leave: {},
        }}
        className="relative flex items-center"
      >
        <motion.div
          onMouseEnter={() => {
            setEnter(true);
          }}
          onMouseLeave={() => {
            setEnter(false);
          }}
          animate={enter ? "enter" : "leave"}
          initial="leave"
          exit="leave"
          transition={{ type: "spring" }}
        >
          <motion.img
            src="/avatar.png"
            className="size-10 rounded-full ring-2 ring-neutral-50"
            alt={"avatar"}
            variants={{
              enter: {
                y: "20px",
                x: "-15px",
                scale: 2,
              },
              leave: {
                y: "0px",
                scale: 1,
                x: "0px",
              },
            }}
          ></motion.img>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
