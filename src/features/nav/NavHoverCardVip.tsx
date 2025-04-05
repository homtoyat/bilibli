"use client";

import { motion } from "framer-motion";
import { CrownIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import NavHoverCard from "./NavHoverCard";
export function NavHoverCardVip() {
  const [open, setOpen] = useState(false);
  return (
    <NavHoverCard.Context.Provider value={{ open, setOpen }}>
      <NavHoverCard>
        <NavHoverCard.Icon>
          <Link href={"/"} className="group flex flex-col items-center">
            <CrownIcon className="hover:animate-updown group-hover:animate-updown"></CrownIcon>
            大会员
          </Link>
        </NavHoverCard.Icon>
        <NavHoverCard.Content>
          <motion.ul
            animate={{ opacity: 1, y: 5 }}
            exit={{ opacity: 0, y: 0 }}
            initial={{ opacity: 0, y: 0 }}
            transition={{ type: "spring" }}
            className="flex flex-col overflow-hidden rounded-md border-[1px] border-gray-100 bg-white text-sm tracking-tight"
          >
            {["我的消息", "系统消息", "收到的赞", "回复我的", "@我的"].map(
              (item) => {
                return (
                  <li
                    key={item}
                    className="hover:bg-accent text-md cursor-pointer py-1 pr-12 pl-4"
                  >
                    <Link href={"/"}>{item}</Link>
                  </li>
                );
              },
            )}
          </motion.ul>
        </NavHoverCard.Content>
      </NavHoverCard>
    </NavHoverCard.Context.Provider>
  );
}
