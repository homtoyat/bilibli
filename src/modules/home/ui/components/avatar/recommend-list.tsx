import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronRightIcon,
  MenuSquare,
  StarIcon,
  TableIcon,
  VideoIcon,
  Wallet2Icon,
} from "lucide-react";
export const RecommendList = ({ className, show }) => {
  if (!show) {
    return;
  }
  return (
    <AnimatePresence>
      {show && (
        <motion.div className={className}>
          <motion.ul
            className="rounded-md bg-neutral-50 p-2 shadow"
            variants={{
              show: {
                transition: {
                  duration: 0.1,
                  staggerChildren: 0.1,
                  type: "spring",
                },
              },
              hidden: { transition: { duration: 0.1, staggerChildren: -0.1 } },
            }}
            animate={show ? "show" : "hidden"}
            initial="hidden"
            transition={{ type: "spring" }}
          >
            <motion.li
              variants={{
                show: { opacity: 1, x: 0 },
                hidden: { opacity: 0, x: 20 },
              }}
              className="flex rounded bg-neutral-50 p-2 text-neutral-700 hover:bg-neutral-200 hover:text-neutral-900"
            >
              <VideoIcon></VideoIcon>直播中心
            </motion.li>
            <motion.li
              variants={{
                show: { opacity: 1, x: 0 },
                hidden: { opacity: 0, x: 20 },
              }}
              className="flex rounded bg-neutral-50 p-2 text-neutral-700 hover:bg-neutral-200 hover:text-neutral-900"
            >
              <TableIcon></TableIcon>我的课程
            </motion.li>
            <motion.li
              variants={{
                show: { opacity: 1, x: 0 },
                hidden: { opacity: 0, x: 20 },
              }}
              className="flex rounded bg-neutral-50 p-2 text-neutral-700 hover:bg-neutral-200 hover:text-neutral-900"
            >
              <Wallet2Icon></Wallet2Icon>B站钱包
            </motion.li>
            <motion.li
              variants={{
                show: { opacity: 1, x: 0 },
                hidden: { opacity: 0, x: 20 },
              }}
              className="flex rounded bg-neutral-50 p-2 text-neutral-700 hover:bg-neutral-200 hover:text-neutral-900"
            >
              <MenuSquare></MenuSquare>订单中心
            </motion.li>
          </motion.ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const RecommendMenuEntry = ({
  showRecommend: show,
  setShowRecommend: setShow,
}) => {
  return (
    <motion.div
      className="relative flex w-full justify-between p-2 hover:bg-neutral-700/10 hover:text-blue-400"
      onMouseEnter={() => {
        setShow(true);
      }}
      onMouseLeave={() => {
        setShow(false);
      }}
      variants={{ show: {}, hidden: {} }}
      transition={{ duration: 1, staggerChildren: 1 }}
      animate={show ? "show" : "hidden"}
      initial="hidden"
    >
      <motion.div className="flex w-full justify-between">
        <div className="flex">
          <StarIcon></StarIcon>推荐服务
        </div>
        <ChevronRightIcon></ChevronRightIcon>
      </motion.div>

      <RecommendList
        show={show}
        className={"absolute top-0 right-0 translate-x-full -translate-y-1/2"}
      ></RecommendList>
    </motion.div>
  );
};
