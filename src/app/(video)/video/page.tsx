"use client";
import { WhiteNavBar } from "@/modules/home/ui/components/nav-bar/white-bar";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronDown,
  ChevronRight,
  CircleSlashIcon,
  MailIcon,
  MoreVerticalIcon,
  PlaySquareIcon,
  Plug,
  PlusIcon,
  TextIcon,
  TvIcon,
} from "lucide-react";
import { useState } from "react";

export default function Page() {
  const [showSubsetList, setShowSubsetList] = useState(false);
  return (
    <div className="relative h-fit min-h-screen w-screen bg-neutral-200/50">
      <div className="flex w-screen justify-center">
        <WhiteNavBar></WhiteNavBar>

        <div className="relative top-20 h-[3000px] w-full max-w-[2560px] min-w-[1080px] bg-white shadow">
          <div className="flex w-full gap-4 px-26 py-8">
            <div className="min-h-[2048px] w-7/10">
              <div>
                <div className="text-primary font-extrabold">
                  金丝猴下山找村民要食物，吃花生米吃得津津有味，狗子的反应亮了
                </div>
                <div className="flex gap-8 text-xs text-neutral-500">
                  <div className="flex items-center gap-1">
                    <PlaySquareIcon className="w-4"></PlaySquareIcon>3.2万
                  </div>
                  <div className="flex items-center gap-1">
                    <TextIcon></TextIcon>54
                  </div>
                  <span className="flex items-center">2025-03-03 09:30:00</span>
                  <div className="flex items-center gap-1">
                    <CircleSlashIcon className="size-4 text-red-500"></CircleSlashIcon>
                    未经作者授权，禁止转载
                  </div>
                </div>
              </div>
              <div className="flex aspect-video w-full flex-col bg-green-300 text-xs font-bold tracking-tight text-neutral-500">
                <video src="d.mp4"></video>
                <div className="flex items-center justify-between gap-4 bg-white py-2 pl-2">
                  <div className="flex items-center gap-4">
                    <span className="bg-neutral-50/0">
                      3338人正在看，已装填478条弹幕
                    </span>
                    <button>
                      <TvIcon></TvIcon>
                    </button>
                  </div>
                  <div className="flex justify-center">
                    <div className="flex flex-1 justify-end">
                      <div className="overflow-hideen grid h-10 w-full flex-1 grid-cols-9 place-items-start self-end rounded-full bg-transparent">
                        <div className="col-start-1 col-end-2 flex h-full w-full cursor-pointer items-center justify-end rounded-l-lg bg-neutral-200/0 hover:text-sky-400">
                          <span className="flex h-full w-8 items-center rounded-l-lg border-b-2 bg-neutral-200/80 p-2 underline">
                            A
                          </span>
                        </div>
                        <input
                          placeholder="已关闭弹幕"
                          className="col-start-2 col-end-8 h-full w-full border-0 bg-neutral-200/80 outline-0"
                        ></input>
                        <button className="col-start-8 col-end-8 flex h-full w-full cursor-pointer items-center bg-neutral-200/80 text-xs tracking-tighter text-neutral-500 hover:text-sky-400">
                          弹幕礼仪
                          <ChevronRight className="size-3"></ChevronRight>
                        </button>
                        <button className="col-start-9 h-full w-full cursor-pointer rounded-r-lg bg-sky-500 px-4 text-sm font-bold text-white">
                          发送
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tex-xs top-30 h-[190px] w-full bg-amber-300"></div>
            </div>

            <div className="flex min-h-[2048px] flex-col justify-between">
              <div className="sticky -top-130">
                <div className="gap-2 py-4">
                  <div className="flex size-10 items-center justify-center rounded-full bg-amber-600 bg-[url(/banner.png)] text-white">
                    HT
                  </div>
                  <div className="flex flex-col gap-[2px]">
                    <div className="flex gap-2">
                      <div className="font-bold text-red-400">通盘刘妙手</div>
                      <div className="flex items-center gap-1 text-xs font-bold text-neutral-500">
                        <MailIcon className="size-3"></MailIcon>发消息
                      </div>
                    </div>
                    <div className="font-mono text-xs text-neutral-400">
                      商务微信：Amber201306 （添加时请说明具体来意！）
                    </div>
                    <div className="flex justify-between pr-4">
                      <button className="flex items-center gap-[1px] rounded border border-red-500 px-2 py-1 text-xs text-red-500 outline-0">
                        <Plug className="size-4"></Plug>充电
                      </button>
                      <button className="flex items-center rounded bg-sky-500 p-1 px-12 text-xs text-white">
                        <PlusIcon className="size-3"></PlusIcon>关注 115.6万
                      </button>
                    </div>
                  </div>
                </div>
                <motion.div
                  className=""
                  variants={{
                    rollup: {},
                    drilldown: {},
                  }}
                  animate={showSubsetList ? "drilldown" : "rollup"}
                  initial="rollup"
                >
                  <motion.div className="flex w-full justify-between rounded-md bg-neutral-300/30 px-2 py-2">
                    <div className="flex">
                      <div
                        className="cursor-pointer hover:text-sky-400"
                        onClick={() => {
                          setShowSubsetList((__prev) => !__prev);
                        }}
                      >
                        弹幕列表
                      </div>
                      <div className="cursor-pointer hover:text-sky-400">
                        <MoreVerticalIcon></MoreVerticalIcon>
                      </div>
                    </div>
                    <motion.div
                      layout
                      className="group flex flex-1 cursor-pointer justify-end"
                      variants={{
                        rollup: {},
                        drilldown: {},
                      }}
                      onClick={() => {
                        setShowSubsetList((__prev) => !__prev);
                      }}
                    >
                      <motion.div
                        variants={{
                          rollup: { rotate: 0 },
                          drilldown: { rotate: 180 },
                        }}
                        className="cursor-pointer"
                      >
                        <ChevronDown></ChevronDown>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                  <motion.div
                    className="overflow-y-auto pr-2"
                    variants={{
                      rollup: { height: 0 },
                      drilldown: { height: 200 },
                    }}
                    transition={{ duration: 0.1, staggerChildren: 0.05 }}
                  >
                    <div className="flex text-neutral-500/50">
                      <div className="flex-1">时间</div>
                      <div className="flex flex-6 justify-center">弹幕内容</div>
                      <div className="flex-2">发送时间</div>
                    </div>
                    <div className="flex flex-col gap-2">
                      {[
                        "老太太说得很6666",
                        "你在说什么啊，笑死人了😊2",
                        "我的天啊啊噜3",
                        "死老太波是疯狂了吗54",
                        "老太太说得很66666",
                        "你在说什么啊，笑死人了😊7",
                        "我的天啊啊噜8",
                        "死老太波是疯狂了吗9",
                        "老太太说得很666610",
                        "你在说什么啊，笑死人了😊11",
                        "我的天啊啊噜12",
                        "死老太波是疯狂了吗13",
                      ].map((item) => {
                        return (
                          <motion.div
                            key={item}
                            variants={{
                              rollup: { x: -40, opacity: 0 },
                              drilldown: { x: 0, opacity: 1 },
                            }}
                          >
                            <div className="flex gap-8 text-neutral-700">
                              <div className="flex">00:05</div>
                              <div className="w-[39px] flex-1 justify-start truncate">
                                {item}
                              </div>
                              <div className="flex justify-end">21:31:05</div>
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </motion.div>
                  <AnimatePresence>
                    {showSubsetList && (
                      <motion.div
                        variants={{
                          rollup: { height: 0 },
                          drilldown: { height: 100 },
                        }}
                      >
                        <div className="cursor-pointer rounded bg-neutral-200/50 px-4 py-2 text-center text-xs text-neutral-700/50 hover:bg-neutral-200/80 hover:text-neutral-700/90">
                          查看历史弹幕
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>
              <div className="h-[1000px] bg-transparent"> </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
