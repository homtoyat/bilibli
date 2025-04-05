import { cn } from "@/lib/utils";
import * as RadixTabs from "@radix-ui/react-tabs";
import { motion } from "framer-motion";
import { TextQuoteIcon, VideoIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
export default function TrendTab() {
  const [tabId, setTabId] = useState("tab1");
  console.log({ tabId });
  return (
    <RadixTabs.Root
      value={tabId}
      onValueChange={setTabId}
      className="w-100 overflow-hidden rounded"
    >
      <RadixTabs.List asChild className="w-50">
        <motion.ul className="flex w-full">
          <motion.li className="relative h-12 flex-1">
            <RadixTabs.Trigger value="tab1" asChild>
              <button
                className={cn(
                  "font-md relative h-12 w-full cursor-pointer bg-gray-50 py-2 text-lg hover:bg-white active:text-sky-500",
                  tabId === "tab1" && "bg-transparent",
                )}
              >
                视频
              </button>
            </RadixTabs.Trigger>
            {tabId === "tab1" ? (
              <motion.div
                layoutId="underline"
                id="underline"
                className="absolute -bottom-[2px] left-0 h-[2px] w-full bg-sky-400"
              />
            ) : null}
          </motion.li>
          <motion.li className="relative h-12 flex-1">
            <RadixTabs.Trigger value="tab2" asChild>
              <button
                className={cn(
                  "font-md relative h-12 w-full cursor-pointer bg-gray-50 py-2 text-lg",
                  tabId === "tab2" && "bg-transparent",
                )}
              >
                直播
              </button>
            </RadixTabs.Trigger>
            {tabId === "tab2" ? (
              <motion.div
                layoutId="underline"
                id="underline"
                className="absolute -bottom-[2px] left-0 h-[2px] w-full bg-sky-400"
              ></motion.div>
            ) : null}
          </motion.li>
          <motion.li className="relative h-12 flex-1">
            <RadixTabs.Trigger value="tab3" asChild>
              <button
                className={cn(
                  "font-md before-content-[''] relative mx-auto h-12 w-full cursor-pointer items-center bg-gray-50 py-2 text-lg",
                  tabId === "tab3" && "bg-transparent",
                )}
              >
                专栏
              </button>
            </RadixTabs.Trigger>
            {tabId === "tab3" ? (
              <motion.div
                layoutId="underline"
                id="underline"
                className="absolute -bottom-[2px] left-0 h-[2px] w-full bg-sky-400"
              />
            ) : null}
          </motion.li>
        </motion.ul>
      </RadixTabs.List>
      <RadixTabs.Content value="tab1" className="h-100 w-full overflow-scroll">
        <h1 className="px-2 py-2 text-lg font-bold">今天</h1>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => {
          return (
            <Link
              href={"/video"}
              key={i}
              className="grid cursor-pointer grid-cols-2 gap-2 px-2 py-2 hover:bg-gray-200/50"
            >
              <img
                src={`/slider/${i % 3}.png`}
                alt="/sider/1.png"
                className="columns-1 rounded-xl"
              />
              <div className="flex columns-1 flex-col">
                <h3 className="line-clamp-2 font-semibold text-neutral-800">
                  新来的小狗：这个家没有一个对手你就说信不信我吗。不信就算了
                </h3>
                <h4 className="text-neutral-500">up:乡园站仔</h4>
                <div className="flex items-center gap-2 text-neutral-500">
                  <VideoIcon></VideoIcon> 14.2万
                  <TextQuoteIcon></TextQuoteIcon> 265
                </div>
              </div>
            </Link>
          );
        })}
      </RadixTabs.Content>
      <RadixTabs.Content value="tab2" className="h-100 w-100">
        <p className="Text">tabs2</p>
        <fieldset className="Fieldset">
          <label className="Label" htmlFor="name">
            Name hellor world
          </label>
          <input className="Input" id="name" defaultValue="Pedro Duarte" />
        </fieldset>
      </RadixTabs.Content>
      <RadixTabs.Content
        value="tab3"
        className={cn("h-100 w-100", tabId === "tab3" && "bg-white")}
      >
        <p className="Text">tabs3</p>
        <fieldset className="Fieldset">
          <label className="Label" htmlFor="name">
            Name hellor world333
          </label>
          <input className="Input" id="name" defaultValue="Pedro Duarte" />
        </fieldset>
      </RadixTabs.Content>
    </RadixTabs.Root>
  );
}
