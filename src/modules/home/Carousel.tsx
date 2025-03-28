import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";

interface Props {
  items: string[];
}
export function Carousel({ items }: Props) {
  const [[page, dir], setPage] = useState([0, 0]); // [当前页, 滑动方向]
  const animating = useRef(false);
  const paginate = async (newDir: number) => {
    if (animating.current) {
      return;
    }
    setPage(([_page]) => [(_page + newDir + 3) % 3, newDir]);
  };

  return (
    <div className="relative h-full w-full">
      <AnimatePresence initial={false} custom={dir}>
        <motion.div
          key={page}
          custom={dir} // 传递滑动方向
          initial={{ x: dir > 0 ? "100%" : "-100%", opacity: 1 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: dir > 0 ? "-100%" : "100%", opacity: 1 }}
          className="absolute h-full w-full"
          transition={{ type: "tween", duration: 0.3 }}
          onAnimationComplete={(definition) => {
            console.log("完成的动画定义:", definition);
            // 输出：{ x: 100, opacity: 1 }
            animating.current = false;
          }}
          onAnimationStart={() => {
            animating.current = true;
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={items[page % items.length]}
            className="h-full w-full object-cover"
            alt="ddd"
          />
        </motion.div>
      </AnimatePresence>

      {/* 导航按钮 */}
      <button
        onClick={() => paginate(-1)}
        className="absolute top-1/2 left-4 -translate-y-1/2 cursor-pointer rounded-full bg-white/30 p-2 active:bg-white/60"
      >
        <ChevronLeft></ChevronLeft>
      </button>
      <button
        onClick={() => paginate(1)}
        className="absolute top-1/2 right-4 -translate-y-1/2 cursor-pointer rounded-full bg-white/30 p-2 active:bg-white/60"
      >
        <ChevronRight></ChevronRight>
      </button>
    </div>
  );
}
