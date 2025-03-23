"use client";

import { Basicbar } from "./basic-bar";
export const WhiteNavBar = () => {
  return (
    <div className="fixed z-30 mx-auto h-20 w-full max-w-[2560px] min-w-[1080px] overflow-hidden shadow-lg">
      <Basicbar className="bg-white" textColor="text-black"></Basicbar>
    </div>
  );
};
