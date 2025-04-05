"use client";

import { BookIcon, ChevronRight } from "lucide-react";
import * as motion from "motion/react-client";
import Link from "next/link";
import { HoverCard as RadixHoverCard } from "radix-ui";
import { useState } from "react";
import Avatar from "../avatar/Avatar";
import NavHoverCard from "./NavHoverCard";

export function NavHoverCardAvatar() {
  const [open, setOpen] = useState(false);
  return (
    <NavHoverCard.Context.Provider value={{ open, setOpen }}>
      <NavHoverCard>
        <NavHoverCard.Icon>
          <motion.div
            animate={open ? "open" : "closed"}
            variants={{
              open: { scale: 1.6, y: 25 },
              closed: { scale: 1, y: 0 },
            }}
            className="z-10"
          >
            <Link href={""} className="curorsor-pointer">
              <Avatar></Avatar>
            </Link>
          </motion.div>
        </NavHoverCard.Icon>
        <NavHoverCard.Content sideOffset={-30} align={"center"}>
          <motion.ul
            animate={{ opacity: 1, y: 5 }}
            initial={{ opacity: 0, y: 0 }}
            transition={{ type: "spring" }}
            className="flex w-60 flex-col overflow-hidden rounded-md border-[1px] border-gray-100 bg-white px-4 py-2 text-sm tracking-tight"
          >
            {["个人中心", "投搞管理", "推荐服务"].map((item) => {
              return (
                <li
                  key={item}
                  className="hover:bg-accent text-md cursor-pointer rounded py-1 pl-4"
                >
                  <RadixHoverCard.Root openDelay={100} closeDelay={100}>
                    <RadixHoverCard.Trigger asChild>
                      <div className="flex w-full items-center justify-between">
                        <span className="inline-block">{item}</span>
                        <ChevronRight></ChevronRight>
                      </div>
                    </RadixHoverCard.Trigger>

                    <RadixHoverCard.Portal>
                      <RadixHoverCard.Content
                        sideOffset={10}
                        align={"center"}
                        side="right"
                        asChild
                      >
                        <div className="size-fit rounded border-[1px] border-neutral-200 bg-neutral-50">
                          <ul className="flex flex-col gap-2 py-2">
                            {[
                              "直播中心",
                              "我的课程",
                              "B站服务",
                              "订单中心",
                            ].map((e) => {
                              return (
                                <li key={e}>
                                  <Link
                                    href="/video"
                                    className="flex cursor-pointer px-4 text-neutral-700 hover:bg-neutral-200"
                                  >
                                    <BookIcon></BookIcon> <span>{e}</span>
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      </RadixHoverCard.Content>
                    </RadixHoverCard.Portal>
                  </RadixHoverCard.Root>
                </li>
              );
            })}
          </motion.ul>
        </NavHoverCard.Content>
      </NavHoverCard>
    </NavHoverCard.Context.Provider>
  );
}
