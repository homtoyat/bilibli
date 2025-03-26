"use client";
import { cn } from "@/lib/utils";
import { WhiteNavBar } from "@/modules/home/ui/components/nav-bar/white-bar";
import { AnimatePresence, motion } from "framer-motion";
import {
  AtSign,
  BookIcon,
  ChevronDown,
  ChevronRight,
  CircleSlashIcon,
  FileVideoIcon,
  ImageIcon,
  MailIcon,
  MenuIcon,
  MoreVertical,
  MoreVerticalIcon,
  NotebookPenIcon,
  PlaySquareIcon,
  Plug,
  PlusIcon,
  Share2Icon,
  SmileIcon,
  StarIcon,
  TextIcon,
  ThumbsDownIcon,
  ThumbsUpIcon,
  TriangleAlertIcon,
  TvIcon,
  VideoIcon,
} from "lucide-react";
import { useState } from "react";

export default function Page() {
  const [showSubsetList, setShowSubsetList] = useState(false);
  const [star, setStar] = useState({ star: false, count: 123 });
  const [autoPlay, setAutoPlay] = useState(false);
  return (
    <div className="relative h-fit min-h-screen w-screen bg-neutral-200/50">
      <div className="flex w-screen justify-center">
        <div className="z-100">
          <WhiteNavBar></WhiteNavBar>
        </div>

        <div className="relative top-20 h-[3000px] w-full max-w-[2560px] min-w-[1080px] bg-white">
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
              <div className="flex aspect-video w-full flex-col bg-neutral-50 text-xs font-bold tracking-tight text-neutral-500">
                <video src="d.mp4"></video>
                <div className="flex items-center justify-between gap-4 overflow-hidden rounded bg-white px-2 py-2 shadow-md">
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
                <div className="tex-xs flex w-full cursor-pointer justify-between rounded px-4 py-4 shadow">
                  <div className="flex gap-8">
                    <div
                      className="flex items-center gap-1"
                      onClick={() =>
                        setStar((_prev) => ({
                          star: !_prev.star,
                          count: _prev.star ? _prev.count - 1 : _prev.count + 1,
                        }))
                      }
                    >
                      <StarIcon
                        className={cn(
                          star.star ? "text-yellow-500" : "text-neutral-600",
                        )}
                      ></StarIcon>
                      <span className="text-sm font-bold">{star.count}</span>
                    </div>

                    <div
                      className="flex items-center gap-1"
                      onClick={() =>
                        setStar((_prev) => ({
                          star: !_prev.star,
                          count: _prev.star ? _prev.count - 1 : _prev.count + 1,
                        }))
                      }
                    >
                      <Share2Icon className="text-neutral-600"></Share2Icon>
                      <span className="text-sm font-bold">393</span>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex items-center gap-1 text-neutral-500/50 hover:text-sky-400">
                      <TriangleAlertIcon></TriangleAlertIcon>搞件投诉
                    </div>
                    <div className="flex items-center gap-1 text-neutral-500/50 hover:text-sky-400">
                      <NotebookPenIcon></NotebookPenIcon>记笔记
                    </div>
                    <div className="hover:text-sky-400">
                      <MoreVertical></MoreVertical>
                    </div>
                  </div>
                </div>
                <div className="flex w-full flex-col gap-2 py-4 pt-6 shadow-xs">
                  <span className="block text-xl font-semibold tracking-wide text-black">
                    含1年游泳指导-自由泳课程【重量版】
                  </span>
                  <div className="flex items-center gap-8 text-sm font-medium">
                    <span className="flex items-center gap-2">
                      <FileVideoIcon></FileVideoIcon> 18.6万
                    </span>
                    <span>已完结 · 共104课时 有效期1年</span>
                  </div>
                  <span className="font-medium text-neutral-500/80">
                    体系化的教学视频，清晰的分解步骤，更重要的是群内指导~
                  </span>
                </div>
                <div className="bg-neutral-50 px-2 shadow">
                  <div className="flex items-center justify-between py-4">
                    <span className="text-lg text-black">发布者</span>
                    <button className="bg-muted flex items-center gap-1 rounded-xs px-2 py-1 text-neutral-500/60 hover:cursor-pointer">
                      <MenuIcon></MenuIcon>已关注
                    </button>
                  </div>
                  <div className="flex gap-2 py-2">
                    <img
                      src="/slider/2.png"
                      className="size-14 rounded-full object-cover"
                    ></img>
                    <div className="flex flex-col gap-2">
                      <span className="text-lg">梦觉教游泳</span>
                      <span>梦觉</span>
                      <span>游泳一级运动员</span>
                      <span>有多年教学经验</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-neutral-50 px-2 pt-8 shadow-lg">
                <div className="flex items-center gap-10">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-semibold">评论 </span>{" "}
                    <span className="text-neutral-400">3528</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="cursor-pointer hover:text-sky-400">
                      最热
                    </span>
                    |
                    <span className="cursor-pointer hover:text-sky-400">
                      最新
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-2 py-4">
                  <img
                    src="/slider/0.png"
                    alt=""
                    className="size-14 rounded-full"
                  />
                  <div className="flex-1">
                    <input
                      className="h-12 w-full flex-1 rounded-xl border-1 border-neutral-200 px-4 outline-0 hover:bg-white"
                      placeholder="宫廷玉液酒，评论走一走"
                    ></input>
                    <div className="mt-2 flex w-full justify-between">
                      <div className="flex gap-2 pt-2 text-xl text-neutral-500">
                        <SmileIcon className="cursor-pointer hover:text-sky-400"></SmileIcon>
                        <AtSign className="cursor-pointer hover:text-sky-400"></AtSign>
                        <ImageIcon className="cursor-pointer hover:text-sky-400"></ImageIcon>

                        <div className="flex cursor-pointer items-center px-10">
                          <div className="inline-flex items-center">
                            <label className="relative flex cursor-pointer items-center">
                              <input
                                type="checkbox"
                                className="peer h-5 w-5 cursor-pointer appearance-none rounded border border-slate-300 shadow transition-all checked:border-sky-400 checked:bg-sky-400 hover:shadow-md"
                                id="check1"
                              />
                              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform text-white opacity-0 peer-checked:opacity-100">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-3.5 w-3.5"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                  stroke="currentColor"
                                  strokeWidth="1"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clipRule="evenodd"
                                  ></path>
                                </svg>
                              </span>
                            </label>
                          </div>
                          <div className="text-xs">同时转发到我的动态</div>
                        </div>
                      </div>
                      <button className="cursor-pointer rounded bg-sky-400 px-2 py-1 text-sm font-semibold text-white hover:bg-sky-500">
                        发布
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white">
                {[
                  33, 1, 2, 3, 3, 24, 24, 24, 243, 345, 234, 23, 234, 324, 234,
                  1231, 2345, 34325, 23, 1333, 3333,
                ].map((comment, index) => {
                  return (
                    <div key={index} className="flex items-start gap-4 pt-4">
                      <div className="">
                        <img
                          src="slider/2.png"
                          alt="png"
                          className="size-12 rounded-full"
                        />
                      </div>
                      <div className="flex flex-1 flex-col gap-4">
                        <h3 className="flex gap-1">
                          君崽
                          <span className="bg-fuchsia-500 tracking-tighter text-white">
                            Lv2
                          </span>
                        </h3>
                        <span className="text-sm">
                          我感觉我有机导师，看不懂质谱[笑哭]
                          让学生一帧一帧地找目标产物峰，靠非共价作用力的基团去凑质谱峰，而且高分辨质谱小数点第一位还不对[大哭][大哭]
                        </span>
                        <div className="flex items-center gap-8 text-sm font-light text-neutral-500">
                          <span>2025-03-25 19:14 </span>
                          <span className="flex items-center gap-1 hover:text-sky-500">
                            <ThumbsUpIcon></ThumbsUpIcon> 55
                          </span>
                          <span className="flex items-center hover:text-sky-500">
                            <ThumbsDownIcon></ThumbsDownIcon>
                          </span>
                          <span className="flex items-center hover:text-sky-500">
                            回复
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="flex min-h-[2048px] flex-col items-stretch">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
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
                  </div>
                </div>
                <div className="flex justify-between pr-4">
                  <button className="flex cursor-pointer items-center gap-[1px] rounded border border-red-500 px-2 py-1 text-xs text-red-500 outline-0 hover:bg-red-500 hover:text-white">
                    <Plug className="size-4"></Plug>充电
                  </button>
                  <button className="flex cursor-pointer items-center rounded bg-sky-500 p-1 px-12 text-xs text-white hover:bg-sky-600">
                    <PlusIcon className="size-3"></PlusIcon>关注 115.6万
                  </button>
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
                      rollup: {
                        height: 0,
                        transition: { duration: 0.1, staggerChildren: -0.05 },
                      },
                      drilldown: {
                        height: 200,
                        transition: { duration: 0.1, staggerChildren: 0.05 },
                      },
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
              <div className="sticky -top-240 h-[10px] bg-transparent">
                <div className="flex items-center justify-between">
                  <span>接下来播放</span>
                  <div>
                    <span className="flex items-center gap-4 p-4 text-neutral-400">
                      自动播放
                      <motion.button
                        className="relative h-4 w-8 cursor-pointer rounded-full border-none ring-0"
                        variants={{
                          pause: {
                            backgroundColor: "rgba(156, 156, 156, 1)",
                            boxShadow: "0px 0px 0px 4px rgba(156, 156, 156, 1)",
                          },
                          play: {
                            backgroundColor: "rgba(50, 163, 255, 1)",
                            boxShadow: "0px 0px 0px 4px rgba(50, 163, 255, 1)",
                          },
                        }}
                        animate={autoPlay ? "play" : "pause"}
                        initial="pause"
                        transition={{ type: "tween", duration: 0 }}
                        onClick={() => setAutoPlay((__prev) => !__prev)}
                      >
                        <motion.div
                          className="absolute top-1/2 size-4 -translate-y-1/2 rounded-full bg-white"
                          variants={{
                            pause: {
                              left: "0%",
                              translateX: 0,
                              transition: { duration: 0.2 },
                            },
                            play: {
                              left: "100%",
                              translateX: "-100%",
                              transition: { duration: 0.2 },
                            },
                          }}
                        ></motion.div>
                      </motion.button>
                    </span>
                  </div>
                </div>
                <div className="flex w-full flex-col gap-4">
                  {[2, 32, 323, 23, 23231, 2, 323, 234, 567, 8, 96, 6].map(
                    (item, index) => {
                      return (
                        <div key={index} className="flex gap-2">
                          <div className="">
                            <img
                              src="/slider/1.png"
                              className="aspect-video w-44 rounded-lg"
                            ></img>
                          </div>
                          <div className="w-full flex-1 rounded">
                            <h1 className="line-clamp-2 w-[200px]">
                              女子讲述自己16年花400万买了两套房现在2套只能卖150万
                            </h1>
                            <div className="flex gap-1 text-sm text-neutral-500">
                              <span className="border-neutral-500">UP</span>
                              社会小田up
                            </div>
                            <div className="flex text-sm">
                              <div className="flex items-center gap-1 text-sm text-neutral-500">
                                <VideoIcon size={16} />
                                3.7万
                              </div>
                              <div className="flex items-center gap-1 text-sm text-neutral-500">
                                <BookIcon size={16} />
                                22
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    },
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
