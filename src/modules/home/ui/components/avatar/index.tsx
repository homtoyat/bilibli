import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import { LogOutIcon } from "lucide-react";
import { useState } from "react";
import { RecommendMenuEntry } from "./recommend-list";
export const MyAvatar = () => {
  const [enter, setEnter] = useState(false);
  const [showRecommend, setShowRecommend] = useState(false);
  const [] = useState(false);
  return (
    <motion.div
      variants={{
        enter: {},
        leave: {},
      }}
      className="relative flex flex-col items-center justify-end"
      animate={enter ? "enter" : "leave"}
      initial="leave"
      exit="leave"
      transition={{ type: "spring" }}
    >
      <motion.div
        className="absolute top-full left-1/2 mt-2 flex h-90 w-52 -translate-x-1/2 translate-y-5 flex-col justify-end rounded bg-white shadow"
        onMouseEnter={() => setEnter(true)}
        onMouseLeave={() => setEnter(false)}
        variants={{
          enter: { opacity: 1, y: 0 },
          leave: { opacity: 0, y: 20 },
        }}
        animate={enter ? "enter" : "leave"}
        initial="leave"
        transition={{ staggerChildren: 0.1, duration: 0.5 }}
      >
        <motion.div
          variants={{
            enter: { opacity: 1, x: 0 },
            leave: { opacity: 0, x: 20 },
          }}
        >
          <RecommendMenuEntry
            showRecommend={showRecommend}
            setShowRecommend={setShowRecommend}
          ></RecommendMenuEntry>
        </motion.div>
        <motion.div
          variants={{
            enter: { opacity: 1, x: 0 },
            leave: { opacity: 0, x: 20 },
          }}
        >
          <RecommendMenuEntry
            showRecommend={showRecommend}
            setShowRecommend={setShowRecommend}
          ></RecommendMenuEntry>
        </motion.div>
        <motion.div
          variants={{
            enter: { opacity: 1, x: 0 },
            leave: { opacity: 0, x: 0 },
          }}
        >
          <Separator className="w-full"></Separator>
        </motion.div>
        <motion.div
          className="flex gap-4 px-2 py-2 hover:bg-neutral-300"
          variants={{
            enter: { opacity: 1, x: 0 },
            leave: { opacity: 0, x: 20 },
          }}
        >
          <LogOutIcon></LogOutIcon>退出登录
        </motion.div>
      </motion.div>

      <motion.div
        onMouseEnter={() => {
          setEnter(true);
        }}
        onMouseLeave={() => {
          setEnter(false);
        }}
      >
        <motion.img
          src="/avatar.png"
          className="size-10 rounded-full ring-2 ring-neutral-50"
          alt={"avatar"}
          variants={{
            enter: {
              y: "40px",
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
  );
};
