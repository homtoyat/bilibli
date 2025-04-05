"use client";
import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import TrendTab from "../history/TrendTab";
import NavHoverCard from "./NavHoverCard";
export function NavHoverCardHistory() {
  const [open, setOpen] = useState(false);
  return (
    <NavHoverCard.Context.Provider value={{ open, setOpen }}>
      <NavHoverCard>
        <NavHoverCard.Icon>
          <Link href={"/"} className="group flex flex-col items-center">
            <Clock className="hover:animate-updown group-hover:animate-updown"></Clock>
            历史
          </Link>
        </NavHoverCard.Icon>
        <NavHoverCard.Content>
          <motion.div
            className="broder-[1px] rounded border-gray-100 bg-white text-sm tracking-tight"
            animate={{ opacity: 1, y: 5 }}
            initial={{ opacity: 0, y: 0 }}
            transition={{ type: "spring" }}
          >
            <TrendTab></TrendTab>
          </motion.div>
        </NavHoverCard.Content>
      </NavHoverCard>
    </NavHoverCard.Context.Provider>
  );
}
