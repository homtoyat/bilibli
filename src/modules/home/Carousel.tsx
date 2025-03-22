import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

interface Props {
  items: string[];
}
export function Carousel({ items }: Props) {
  const [[page, dir], setPage] = useState([0, 0]); // [当前页, 滑动方向]
  const [isAnimating, setIsAnimating] = useState(false);
  const paginate = (newDir: number) => {
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
          onAnimationStartCapture={() => {
            if (isAnimating) {
              return;
            } else {
              setIsAnimating(true);
            }
          }}
          onAnimationEndCapture={() => setIsAnimating(false)}
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
        className="absolute top-1/2 left-4 -translate-y-1/2 rounded-full bg-white/30 p-2"
      >
        ←
      </button>
      <button
        onClick={() => paginate(1)}
        className="absolute top-1/2 right-4 -translate-y-1/2 rounded-full bg-white/30 p-2"
      >
        →
      </button>
    </div>
  );
}
