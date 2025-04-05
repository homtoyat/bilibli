import { AnimatePresence, motion } from "framer-motion";
import { DotIcon, MoreVertical } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
interface Props {
  index: number;
}
export const VideoItem = ({ index }: Props) => {
  const [previewVideo, setPreviewVideo] = useState(false);
  let timer: NodeJS.Timeout;
  return (
    <Link
      key={index}
      className="flex h-60 w-full cursor-pointer flex-col justify-between rounded-2xl px-1 shadow-xs"
      href={"/video"}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <div
        className="group relative h-[150px] overflow-hidden"
        onMouseEnter={() =>
          (timer = setTimeout(() => {
            setPreviewVideo(true);
          }, 500))
        }
        onMouseLeave={() => {
          clearTimeout(timer);
          setPreviewVideo(false);
        }}
      >
        <AnimatePresence initial={false}>
          {!previewVideo && (
            <motion.img
              animate={!previewVideo ? "show" : "hide"}
              exit="hide"
              initial="hide"
              variants={{
                show: { opacity: 1, y: 0 },
                hide: { opacity: 0, y: 30 },
              }}
              transition={{ duration: 0.1 }}
              src={`/slider/${index % 3}.png`}
              className="h-[150px] rounded-lg object-cover object-top"
            ></motion.img>
          )}
          {previewVideo && (
            <motion.video
              className="absolute inset-0"
              muted
              preload="metadata"
              autoPlay={true}
              animate={previewVideo ? "show" : "hide"}
              variants={{
                show: { opacity: 1, y: 0 },
                hide: { opacity: 0, y: 0 },
              }}
              exit="hide"
              initial="hide"
              transition={{ duration: 0.1 }}
            >
              <source
                src="demo.mp4"
                type="video/mp4"
                className="size-full rounded"
              ></source>
            </motion.video>
          )}
        </AnimatePresence>
      </div>

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
    </Link>
  );
};
