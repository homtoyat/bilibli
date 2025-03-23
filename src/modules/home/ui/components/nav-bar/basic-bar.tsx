"use client";
import { MenuItem } from "../menu-item";
import { SearchBar } from "../search-bar";

import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import {
  BookAudioIcon,
  BookTextIcon,
  ClockIcon,
  CrownIcon,
  DownloadIcon,
  FanIcon,
  FileMusicIcon,
  LucideLightbulb,
  SmileIcon,
  StarsIcon,
  UploadIcon,
  VideoIcon,
} from "lucide-react";
import { MyAvatar } from "../avatar";
import { MailBoxWithDropdown } from "../mailbox";
interface Props {
  className?: string;
  textColor?: string;
}
export const Basicbar = ({
  className,
  textColor = "text-neutral-900",
}: Props) => {
  return (
    <>
      <motion.div
        className={cn(
          className,
          textColor,
          "group relative z-100 flex h-32 min-w-[1024px] bg-cover bg-center",
        )}
      >
        <div className="flex h-16 w-full items-center">
          <div className="flex gap-2 px-4">
            <MenuItem>
              <motion.div className="flex" ref={null}>
                <p className={cn("hover:animate-updown", textColor)}>首页</p>
              </motion.div>
            </MenuItem>
            <MenuItem className={cn("hover:animate-updown", textColor)}>
              番剧
            </MenuItem>
            <MenuItem className="hover:animate-updown">游戏中心</MenuItem>
            <MenuItem className="hover:animate-updown">会员购</MenuItem>
            <MenuItem className="hover:animate-updown">漫画</MenuItem>
            <MenuItem className="hover:animate-updown">赛事</MenuItem>
            <MenuItem className="r hover:animate-updown flex flex-row justify-center">
              <DownloadIcon className="size-4"></DownloadIcon>
              下载客户端
            </MenuItem>
          </div>
          <div className="flex-3">
            <SearchBar></SearchBar>
          </div>
          <div className="flex gap-4 px-4 py-2">
            <MyAvatar></MyAvatar>
            <MenuItem>
              <div
                className={cn(
                  "group relative flex flex-col items-center overflow-hidden",
                  textColor,
                )}
              >
                <CrownIcon></CrownIcon>
                <span className={cn("hidden lg:inline")}>大会员</span>
              </div>
            </MenuItem>

            <MailBoxWithDropdown textColor={textColor}></MailBoxWithDropdown>

            <MenuItem>
              <div className={cn("group relative flex flex-col", textColor)}>
                <FanIcon
                  className={cn("animate-wiggle", "flex items-center")}
                ></FanIcon>
                <span className="hidden lg:inline"> 动态</span>
                <div className="absolute top-0 right-0 flex w-fit -translate-y-1/2 items-center justify-center rounded-full bg-red-600 text-white">
                  50
                </div>
              </div>
            </MenuItem>
            <MenuItem>
              <div className={cn("group relative flex flex-col", textColor)}>
                <StarsIcon className="hover:animate-updown"></StarsIcon>

                <span className="hidden lg:inline"> 收藏</span>
              </div>
            </MenuItem>
            <MenuItem>
              <div className={cn("group relative flex flex-col", textColor)}>
                <ClockIcon className="hover:animate-updown"></ClockIcon>

                <span className="hidden lg:inline"> 历史</span>
              </div>
            </MenuItem>
            <MenuItem>
              <div className={cn("group relative flex flex-col", textColor)}>
                <LucideLightbulb className="hover:animate-updown"></LucideLightbulb>
                <span className="hidden lg:inline">创作中心</span>
              </div>
            </MenuItem>
            <MenuItem>
              <HoverCard openDelay={50} closeDelay={100}>
                <HoverCardTrigger asChild>
                  <Button
                    variant="destructive"
                    className="bg-pink-500 hover:cursor-pointer"
                  >
                    <UploadIcon className="hover:animate-updown"></UploadIcon>
                    投稿
                  </Button>
                </HoverCardTrigger>
                <HoverCardContent
                  className="animate-accordion-down w-90"
                  sideOffset={5}
                  alignOffset={100}
                  align="center"
                >
                  <div className="flex justify-between text-black">
                    <div className="txet-black flex flex-col items-center justify-center p-2 text-xs hover:rounded-lg hover:bg-neutral-300">
                      <BookAudioIcon></BookAudioIcon>
                      专栏投搞
                    </div>
                    <div className="flex flex-col items-center justify-center p-2 text-xs hover:rounded-lg hover:bg-neutral-300">
                      <FileMusicIcon></FileMusicIcon>
                      音频投搞
                    </div>
                    <div className="flex flex-col items-center justify-center p-2 text-xs hover:rounded-lg hover:bg-neutral-300">
                      <SmileIcon></SmileIcon>
                      贴纸投搞
                    </div>
                    <div className="flex flex-col items-center justify-center p-2 text-xs hover:rounded-lg hover:bg-neutral-300">
                      <VideoIcon></VideoIcon>
                      视频投搞
                    </div>
                    <div className="flex flex-col items-center justify-center p-2 text-xs hover:rounded-lg hover:bg-neutral-300">
                      <BookTextIcon></BookTextIcon>
                      投搞管理
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </MenuItem>
          </div>
        </div>
      </motion.div>
    </>
  );
};
