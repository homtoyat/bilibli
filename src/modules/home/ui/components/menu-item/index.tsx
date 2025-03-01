import React from "react";

interface Props {
  children: React.ReactNode;
}
export const MenuItem = ({ children }: Props) => {
  return (
    <div className="text-sm font-semibold  text-white pt-4 flex ">
      {children}
    </div>
  );
};
