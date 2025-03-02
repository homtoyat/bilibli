"use client";
import { useState } from "react";
import { MenuItem } from "../menu-item";
import { SearchBar } from "../search-bar";

import avatar from "@/../public/avatar.png";
import banner from "@/../public/banner.png";
import logo from "@/../public/logo.png";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { cn } from "@/lib/utils";
import { Separator } from "@radix-ui/react-context-menu";
import {
  BookAudioIcon,
  BookTextIcon,
  ChevronDown,
  ClockIcon,
  CrownIcon,
  DownloadIcon,
  FanIcon,
  FileMusicIcon,
  LucideLightbulb,
  MailIcon,
  SmileIcon,
  StarsIcon,
  UploadIcon,
  VideoIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
export const NavBar = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [avatarActive, setAvatarActive] = useState(false);
  return (
    <div className="group relative flex h-fit min-w-[1024px] items-center">
      <Image
        src={banner}
        alt={"banner"}
        className="absolute -z-40 transition-all duration-2000 group-hover:scale-110"
      ></Image>
      <Link href={"/abcs"}>
        <Image
          src={logo}
          alt={"lgo"}
          width={80}
          className={cn(
            "absolute top-14 -bottom-1/2 left-32 scale-140 cursor-pointer opacity-50 transition-all duration-700 hover:opacity-100",
          )}
        ></Image>
      </Link>

      <div className="flex items-center gap-2 px-4">
        <MenuItem>
          <div className="flex items-center">
            <p>首页</p>
            <ChevronDown
              className="transition-all duration-700 hover:rotate-180"
              size={20}
            ></ChevronDown>
          </div>
        </MenuItem>
        <MenuItem>番剧</MenuItem>
        <MenuItem>游戏中心</MenuItem>
        <MenuItem>会员购</MenuItem>
        <MenuItem>漫画</MenuItem>
        <MenuItem>赛事</MenuItem>
        <MenuItem className="flex flex-row items-center justify-center">
          <DownloadIcon className="size-4 hover:animate-bounce"></DownloadIcon>
          下载客户端
        </MenuItem>
      </div>
      <div className="flex-1">
        <SearchBar></SearchBar>
      </div>
      <div className="flex items-center gap-4 px-4 py-2">
        <div className="group relative">
          <Avatar
            className={cn(
              "group size-12 bg-red-300 ring-2 ring-neutral-100 transition-all duration-500",
            )}
            onMouseEnter={() => {
              setAvatarActive(true);
            }}
          >
            <Image src={avatar} alt={"avatar"}></Image>
          </Avatar>
        </div>

        <MenuItem>
          <div className="flex flex-col">
            <div className=""></div>
            <Separator></Separator>
          </div>

          <HoverCard openDelay={50} closeDelay={100}>
            <HoverCardTrigger asChild>
              <div className="group relative flex flex-col items-center overflow-hidden">
                <CrownIcon></CrownIcon>
                <span className="hidden lg:inline">大会员</span>
              </div>
            </HoverCardTrigger>
            <HoverCardContent
              className="mx-0 w-90 py-4"
              sideOffset={5}
              alignOffset={100}
              align="center"
            >
              <div className="flex flex-col gap-2 text-lg">
                <div className="mx-2 rounded p-2 text-neutral-500 transition-all hover:bg-neutral-200">
                  回复我的
                </div>
                <div className="mx-2 rounded p-2 text-neutral-500 transition-all hover:bg-neutral-200">
                  @我的
                </div>
                <div className="mx-2 flex items-center justify-between rounded p-2 text-neutral-500 transition-all hover:bg-neutral-200">
                  <p className="inline-block">我的消息</p>
                  <div className="h-2 w-2 rounded-full bg-red-500"></div>
                </div>
                <div className="mx-2 rounded p-2 text-neutral-500 transition-all hover:bg-neutral-200">
                  系统消息
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        </MenuItem>
        <MenuItem>
          <div className="relative flex flex-col items-center">
            <div className="absolute top-0 right-0 size-2 translate-x-1 rounded-full bg-red-600"></div>
            <MailIcon></MailIcon>

            <span className="hidden lg:inline"> 消息</span>
          </div>
        </MenuItem>
        <MenuItem>
          <div className="group flex flex-col justify-center">
            <div>
              <FanIcon
                className={cn("animate-wiggle", "flex items-center")}
              ></FanIcon>
            </div>

            <span className="hidden lg:inline"> 动态</span>
          </div>
        </MenuItem>
        <MenuItem>
          <div className={cn("flex flex-col items-center justify-center")}>
            <StarsIcon></StarsIcon>

            <span className="hidden lg:inline"> 收藏</span>
          </div>
        </MenuItem>
        <MenuItem>
          <div className="flex flex-col items-center justify-center">
            <ClockIcon></ClockIcon>

            <span className="hidden lg:inline"> 历史</span>
          </div>
        </MenuItem>
        <MenuItem>
          <div className="flex flex-col items-center justify-center">
            <LucideLightbulb></LucideLightbulb>

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
                <UploadIcon></UploadIcon>投稿
              </Button>
            </HoverCardTrigger>
            <HoverCardContent
              className="animate-accordion-down w-90"
              sideOffset={5}
              alignOffset={100}
              align="center"
            >
              <div className="flex justify-between text-neutral-500">
                <div className="flex flex-col items-center justify-center p-2 text-xs hover:rounded-lg hover:bg-neutral-300">
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
  );
};
