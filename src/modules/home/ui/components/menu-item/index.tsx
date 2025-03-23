import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}
export const MenuItem = ({ children, className = "text-white" }: Props) => {
  return (
    <div
      className={cn(
        "flex pt-4 text-sm font-semibold transition-all hover:cursor-pointer",
        className,
      )}
    >
      {children}
    </div>
  );
};
