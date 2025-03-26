"use client";

import { Basicbar } from "./basic-bar";
export const WhiteNavBar = () => {
  return (
    <div className="fixed z-30 mx-auto h-fit w-full max-w-[2560px] min-w-[1080px] shadow-lg">
      <Basicbar className="bg-white pb-4" textColor="text-black"></Basicbar>
    </div>
  );
};
