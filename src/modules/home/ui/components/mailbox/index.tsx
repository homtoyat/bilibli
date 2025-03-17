"use client";
import { AnimatePresence, motion } from "framer-motion";
import { MailIcon } from "lucide-react";
import { useState } from "react";
import { MenuItem } from "../menu-item";
const MsgDetail = ({ active, setActive }) => {
  return (
    <AnimatePresence>
      {active && (
        <motion.div
          className="absolute bottom-0 left-0 h-50 -translate-x-1/2 translate-y-[calc(105%)] rounded-md bg-white text-neutral-500 shadow-2xl"
          variants={{
            active: { opacity: 1, y: 0 },
            inactive: {
              opacity: 0,
              y: -5,
              transition: { staggerChildren: -1, duration: 0.5 },
            },
          }}
          animate={active ? "active" : "inactive"}
          exit="inactive"
          initial="inactive"
          onMouseLeave={() => setActive(false)}
          onMouseEnter={() => setActive(true)}
        >
          <motion.ul className="flex size-35 flex-col items-center overflow-ellipsis">
            <motion.li className="flex w-full items-center justify-center px-4 py-2 hover:bg-neutral-300">
              <span>回复我的</span>
            </motion.li>
            <motion.li className="flex w-full items-center justify-center px-4 py-2 hover:bg-neutral-300">
              <span>@我的</span>
            </motion.li>
            <motion.li className="flex w-full items-center justify-center px-4 py-2 hover:bg-neutral-300">
              <span>收到的赞</span>
            </motion.li>
            <motion.li className="flex w-full items-center justify-center px-4 py-2 hover:bg-neutral-300">
              <span>系统消息</span>
            </motion.li>
            <motion.li className="flex w-full items-center justify-center px-4 py-2 hover:bg-neutral-300">
              <span>我的消息</span>
            </motion.li>
          </motion.ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
const MailBoxWithDropdown = () => {
  const [active, setActive] = useState(true);
  return (
    <MenuItem>
      <div
        className="group relative flex flex-col items-center"
        onClick={() => setActive(true)}
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
      >
        <div className="absolute top-0 right-0 size-2 translate-x-1 rounded-full bg-red-600"></div>
        <MailIcon className="group-hover:animate-updown"></MailIcon>
        <span className="hidden lg:inline">消息</span>
        <MsgDetail active={active} setActive={setActive}></MsgDetail>
      </div>
    </MenuItem>
  );
};
export { MailBoxWithDropdown, MsgDetail };
