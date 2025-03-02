import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}
export const MenuItem = ({ children, className = "" }: Props) => {
  return (
    <div
      className={cn(
        "text-sm font-semibold  text-white pt-4 flex hover:cursor-pointer  transition-all hover:text-neutral-300 ",
        className
      )}
    >
      {children}
    </div>
  );
};
