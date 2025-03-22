import {
  BookIcon,
  FileBadgeIcon,
  FlagIcon,
  LucideFlame,
  Music3Icon,
  SlidersHorizontalIcon,
  VideoIcon,
} from "lucide-react";

export const SubCategory = () => {
  return (
    <div className="mt-4 grid w-full min-w-[1024px] grid-cols-10">
      <div className="col-span-1 flex items-center justify-center">
        <div className="flex items-center justify-center gap-4">
          <div className="flex flex-col items-center">
            <img
              src="/banner.png"
              className="animate-wiggle size-12 rounded-full object-cover object-center" // ✅ 关键类
              alt="Cover Demo"
            />
            <span>动态</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex size-12 items-center justify-center rounded-full bg-red-300">
              <LucideFlame className="size-10 -rotate-y-180 text-white"></LucideFlame>
            </div>
            <span className="inline-block">热门</span>
          </div>
        </div>
      </div>
      <div className="col-span-7 flex h-fit flex-wrap gap-4 border-r-2">
        {[
          "翻剧",
          "国创",
          "综艺",
          "动画",
          "鬼畜",
          "舞蹈",
          "娱乐",
          "科技数码",
          "美食",
          "汽车",
          "体育运动",
          "vlog",
          "电影",
          "电视剧",
          "纪录片",
          "游戏",
          "音乐",
          "影视",
          "知识",
          "小剧场",
          "时间美妆",
          "动物",
        ].map((item) => {
          return (
            <span
              key={item}
              className="h-fit w-20 cursor-pointer rounded-lg bg-neutral-100 px-2 py-2 text-center text-neutral-600 ring-neutral-400/30 duration-700 hover:bg-neutral-300"
            >
              {item}
            </span>
          );
        })}
      </div>
      <div className="col-span-2 grid grid-cols-3 place-items-center gap-0 text-neutral-700/90">
        <div className="flex cursor-pointer gap-1 font-semibold hover:text-blue-400">
          <BookIcon></BookIcon>专栏
        </div>
        <div className="flex cursor-pointer gap-1 font-semibold hover:text-blue-400">
          <FileBadgeIcon></FileBadgeIcon>活动
        </div>
        <div className="flex cursor-pointer gap-1 font-semibold hover:text-blue-400">
          <VideoIcon></VideoIcon>社区
        </div>
        <div className="flex cursor-pointer gap-1 font-semibold hover:text-blue-400">
          <Music3Icon></Music3Icon> 直播
        </div>
        <div className="flex cursor-pointer gap-1 font-semibold hover:text-blue-400">
          <FlagIcon></FlagIcon> 课堂
        </div>
        <div className="flex cursor-pointer gap-1 font-semibold hover:text-blue-400">
          <SlidersHorizontalIcon></SlidersHorizontalIcon> 热榜
        </div>
      </div>
    </div>
  );
};
