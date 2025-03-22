"use client";
import { Carousel } from "@/modules/home/Carousel";
import { SubCategory } from "@/modules/home/SubCategory";
import { NavBar } from "@/modules/home/ui/components/nav-bar";
import { motion } from "framer-motion";
import { DotIcon, MoreVertical } from "lucide-react";
export default function Page() {
  return (
    <div className="bg-wh min-w[1080px] mx-auto h-lvh max-w-[2560px]">
      <motion.main className="w-full">
        <NavBar></NavBar>
        <div className="g-neutral-50/30 top-120 h-[330vh] w-full px-24">
          <div className="relative h-full w-full">
            <SubCategory></SubCategory>
            <div className="grid grid-cols-5 gap-4 pt-4">
              <div className="col-span-2 row-span-2 overflow-hidden rounded bg-amber-200 shadow">
                <Carousel
                  items={["slider/1.png", "slider/2.png", "slider/0.png"]}
                ></Carousel>
              </div>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((i) => {
                return (
                  <div
                    key={i}
                    className="flex h-45 w-full cursor-pointer flex-col justify-between rounded-2xl px-1 shadow-xs"
                  >
                    <img
                      src={`/slider/${i % 3}.png`}
                      className="h-[130px] rounded-lg object-cover object-top"
                    ></img>
                    <div>
                      <div className="flex justify-between">
                        <span className="inline-block font-extrabold">
                          多少人巴不得大学生就业难
                        </span>
                        <button className="cursor-pointer">
                          <MoreVertical className="size-4 text-xs text-neutral-400 hover:text-neutral-500"></MoreVertical>
                        </button>
                      </div>
                      <div className="group flex cursor-pointer items-center gap-2 pb-1">
                        <span className="rounded-md bg-amber-100 text-amber-400 group-hover:text-blue-500">
                          2万点赞
                        </span>
                        <div className="flex text-sm text-neutral-400 group-hover:text-blue-500">
                          躺平规划师<DotIcon></DotIcon> 2-14
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* <Carousel></Carousel> */}
      </motion.main>

      <footer className="row-start-3 flex flex-wrap items-center justify-center gap-6"></footer>
    </div>
  );
}
