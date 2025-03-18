import { motion } from "framer-motion";
import {
  ChevronRightIcon,
  MenuSquare,
  StarIcon,
  TableIcon,
  VideoIcon,
  Wallet2Icon,
} from "lucide-react";
import { useState } from "react";
export const RecommendList = ({ className, show, setShow }) => {
  if (!show) {
    return;
  }
  return (
    <div>
      <motion.div className={className}>
        <ul className="bg-neutral-50 p-2 shadow">
          <li className="flex rounded bg-neutral-50 p-2 text-neutral-700 hover:bg-neutral-200 hover:text-neutral-900">
            <VideoIcon></VideoIcon>直播中心
          </li>
          <li className="flex rounded bg-neutral-50 p-2 text-neutral-700 hover:bg-neutral-200 hover:text-neutral-900">
            <TableIcon></TableIcon>我的课程
          </li>
          <li className="flex rounded bg-neutral-50 p-2 text-neutral-700 hover:bg-neutral-200 hover:text-neutral-900">
            <Wallet2Icon></Wallet2Icon>B站钱包
          </li>
          <li className="flex rounded bg-neutral-50 p-2 text-neutral-700 hover:bg-neutral-200 hover:text-neutral-900">
            <MenuSquare></MenuSquare>订单中心
          </li>
        </ul>
      </motion.div>
    </div>
  );
};

export const RecommendMenuEntry = ({ className }) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div
        className="relative flex w-full justify-between p-2 hover:bg-neutral-700/10 hover:text-blue-400"
        onMouseEnter={() => {
          setShow(true);
        }}
        onMouseLeave={() => {
          setShow(true);
        }}
      >
        <div className="flex w-full justify-between">
          <div className="flex">
            <StarIcon></StarIcon>推荐服务
          </div>
          <ChevronRightIcon></ChevronRightIcon>
        </div>

        <RecommendList
          show={show}
          className={"absolute top-0 right-0 translate-x-full -translate-y-1/2"}
          setShow={setShow}
        ></RecommendList>
      </div>
    </>
  );
};
