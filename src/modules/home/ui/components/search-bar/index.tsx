"use client";
import { cn } from "@/lib/utils";
import { SearchIcon } from "lucide-react";
import { useState } from "react";
export const SearchBar = () => {
  const [active, setActive] = useState(false);
  return (
    <div className="relative flex h-8 flex-3 flex-col p-2">
      <div
        className={cn(
          "group absolute left-0 w-full bg-transparent pt-2",
          active && "h-100 rounded bg-white shadow-sm",
        )}
      >
        <div
          className={cn(
            "bg-transparent",
            active && "px-2 pb-0.5 hover:bg-neutral-100/60",
          )}
        >
          <input
            className="hover:bg-natural-100 z-10 h-8 w-full rounded bg-neutral-400/30 px-4 outline-none hover:bg-neutral-400/10"
            onClick={() => setActive(true)}
          ></input>
          <SearchIcon className="absolute top-3 right-3"></SearchIcon>
        </div>

        <div
          onMouseEnter={() => setActive(true)}
          onMouseLeave={() => setActive(false)}
          onClick={() => setActive(true)}
          className="flex-1"
        ></div>
      </div>
    </div>
  );
};
