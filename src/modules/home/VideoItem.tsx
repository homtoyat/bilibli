import { DotIcon, MoreVertical } from "lucide-react";

export const VideoItem = ({ index }) => {
  return (
    <div
      key={index}
      className="flex h-60 w-full cursor-pointer flex-col justify-between rounded-2xl px-1 shadow-xs"
    >
      <img
        src={`/slider/${index % 3}.png`}
        className="h-[150px] rounded-lg object-cover object-top"
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
            躺平规划师<DotIcon></DotIcon>2-14
          </div>
        </div>
      </div>
    </div>
  );
};
