"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { BookTextIcon, Music4Icon, SmilePlusIcon, Upload } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import NavHoverCard from "./NavHoverCard";
export function NavHoverCardPost() {
  const [open, setOpen] = useState(false);
  return (
    <NavHoverCard.Context.Provider value={{ open, setOpen }}>
      <NavHoverCard>
        <NavHoverCard.Icon>
          <Link
            href={"/"}
            className={cn(
              "group flex flex-row items-center rounded-lg bg-pink-400 px-8",
              open && "bg-pink-500",
            )}
          >
            <Upload className="hover:animate-updown group-hover:animate-updown"></Upload>
            投稿
          </Link>
        </NavHoverCard.Icon>
        <NavHoverCard.Content align="end">
          <motion.ul
            animate={{ opacity: 1, y: 5 }}
            exit={{ opacity: 0, y: 0 }}
            initial={{ opacity: 0, y: 0 }}
            transition={{ type: "spring" }}
            className="flex flex-col rounded-md border-[1px] border-gray-100 bg-white text-sm tracking-tight"
          >
            <ul className="flex gap-4 px-4 py-2">
              {[
                { name: "专栏投稿", icon: BookTextIcon, id: 1 },
                { name: "音频投稿", icon: Music4Icon, id: 2 },
                { name: "表情投搞", icon: SmilePlusIcon, id: 3 },
              ].map((item) => {
                return (
                  <li
                    key={item.id}
                    className="hover:bg-accent text-md flex cursor-pointer flex-col items-center justify-center rounded py-2"
                  >
                    <Link href={"/"} className="flex flex-col items-center">
                      <item.icon className="block"></item.icon>
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </motion.ul>
        </NavHoverCard.Content>
      </NavHoverCard>
    </NavHoverCard.Context.Provider>
  );
}
