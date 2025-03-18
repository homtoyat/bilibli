import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import { ChevronRightIcon, LogOutIcon, UserIcon } from "lucide-react";
import { useState } from "react";
import { RecommendMenuEntry } from "./recommend-list";
export const MyAvatar = () => {
  const [enter, setEnter] = useState(false);
  const [] = useState(false);
  return (
    <motion.div
      variants={{
        enter: {},
        leave: {},
      }}
      className="relative flex items-center"
      animate={enter ? "enter" : "leave"}
      initial="leave"
      exit="leave"
      transition={{ type: "spring" }}
    >
      <motion.div
        key="1"
        className="absolute top-full left-1/2 mt-2 flex h-90 w-52 -translate-x-1/2 translate-y-5 flex-col rounded bg-white shadow"
        onMouseEnter={() => setEnter(true)}
        onMouseLeave={() => setEnter(false)}
        variants={{
          enter: { opacity: 1, y: 0 },
          leave: { opacity: 0, y: 10, transition: { duration: 0.5 } },
        }}
      >
        <div className="flex h-full w-full items-end">
          <div className="flex w-full cursor-pointer flex-col text-neutral-700">
            <div className="flex w-full justify-between p-2 hover:bg-neutral-700/10 hover:text-blue-400">
              <div className="flex">
                <UserIcon></UserIcon>个人中心
              </div>
              <ChevronRightIcon></ChevronRightIcon>
            </div>
          </div>
        </div>
        <RecommendMenuEntry></RecommendMenuEntry>
        <Separator className="w-full"></Separator>
        <div className="flex gap-4 px-2 py-2 hover:bg-neutral-300">
          <LogOutIcon></LogOutIcon>退出登录
        </div>
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
