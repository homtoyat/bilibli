"use client";
import { Skeleton } from "@/components/ui/skeleton";
import {
  NavBar,
  NavBarContentLeft,
  NavBarContentRight,
} from "@/features/nav/nav-bar";
import { SearchBar } from "@/features/nav/serach-bar";
import { Carousel } from "@/modules/home/Carousel";
import { SubCategory } from "@/modules/home/SubCategory";
import { VideoItem } from "@/modules/home/VideoItem";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";
export default function Page() {
  const { scrollYProgress } = useScroll({});
  const [progressState, setP] = useState(0);
  const videoContainer = useRef<HTMLDivElement>(null);
  useMotionValueEvent(scrollYProgress, "change", (_p) => setP(_p));
  const [isLoading, setIsLoading] = useState(false);

  const [items, setItems] = useState([{ id: 1, text: "初始项" }]);

  // 监听滚动事件
  useEffect(() => {
    // debugger;
    // 带防抖的滚动处理函数
    const handleScroll = async (latestValue: number) => {
      console.log({ latestValue });
      if (isLoading || latestValue < 0.9) {
        setIsLoading(false);
        return;
      }

      setIsLoading(true);
      const list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(() => {
        return { id: Math.random() * 1000, text: `${new Date()}` };
      });
      const sleepfunc = new Promise((r) => setTimeout(r, 2000));
      await sleepfunc;
      console.log(new Date());
      setItems((__prevhandleScroll) => [...__prevhandleScroll, ...list]);

      setIsLoading(false);
      scrollYProgress.set(0); // 重置进度值触发更新
    };
    if (isLoading) {
      console.log("正在加载中。。。");
      return;
    }
    handleScroll(progressState);
  }, [isLoading, progressState]);
  return (
    <div className="container mx-auto bg-white">
      <NavBar className="z-0 flex h-43 w-full items-start justify-between bg-[url(/banner.png)]">
        <NavBarContentLeft></NavBarContentLeft>
        <SearchBar className="z-100 mt-2 w-full lg:w-100"></SearchBar>
        <NavBarContentRight></NavBarContentRight>
      </NavBar>

      <motion.main className="z-30">
        <div className="g-neutral-50/30 top-120 min-h-screen w-full px-24">
          <div className="relative h-full w-full">
            <SubCategory></SubCategory>
            <div className="grid grid-cols-5 gap-4 pt-4" ref={videoContainer}>
              <div className="col-span-2 row-span-2 overflow-clip rounded-xl shadow">
                <Carousel
                  items={["slider/1.png", "slider/2.png", "slider/0.png"]}
                ></Carousel>
              </div>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((i) => {
                return (
                  <div key={i}>
                    <VideoItem index={i}></VideoItem>
                  </div>
                );
              })}

              {items.map((item, i) => (
                <div key={i}>
                  <VideoItem index={i}></VideoItem>
                </div>
              ))}
              {isLoading &&
                [0, 1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-h-full flex h-60 flex-col justify-between"
                  >
                    <Skeleton className="h-[150px] w-full"></Skeleton>
                    <div className="flex h-[60px] flex-col gap-4">
                      <Skeleton className="h-[30px]"></Skeleton>
                      <Skeleton className="h-[15px]"></Skeleton>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>

        {/* <Carousel></Carousel> */}
      </motion.main>
      <footer className="row-start-3 flex flex-wrap items-center justify-center gap-6"></footer>
    </div>
  );
}
