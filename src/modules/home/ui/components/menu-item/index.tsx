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
        "flex pt-4 text-sm font-semibold text-white transition-all hover:cursor-pointer",
        className,
      )}
    >
      {children}
    </div>
  );
};
