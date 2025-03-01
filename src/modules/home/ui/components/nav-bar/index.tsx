"use client";
import React, { useRef, useState } from "react";
import { MenuItem } from "../menu-item";
import { SearchBar } from "../search-bar";

import {
  BookAudioIcon,
  BookDown,
  BookTextIcon,
  CalendarIcon,
  ClockIcon,
  CrownIcon,
  FanIcon,
  FileMusicIcon,
  LucideLightbulb,
  MailIcon,
  MoonIcon,
  SmileIcon,
  StarsIcon,
  UploadIcon,
  VideoIcon,
  VideotapeIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import avatar from "@/../public/avatar.png";
import banner from "@/../public/banner.png";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { cn } from "@/lib/utils";

export const NavBar = () => {
  const [avatarActive, setAvatarActive] = useState(false);
  return (
    <div className="flex items-center relative   group min-w-[1024px] ">
      <Image
        src={banner}
        alt={"banner"}
        className=" absolute -z-40 group-hover:scale-110 transition-all duration-2000"
      ></Image>
      <div className="flex gap-2 items-center px-4">
        <MenuItem>首页</MenuItem>
        <MenuItem>番剧</MenuItem>
        <MenuItem>游戏中心</MenuItem>
        <MenuItem>会员购</MenuItem>
        <MenuItem>漫画</MenuItem>
        <MenuItem>赛事</MenuItem>
        <MenuItem>下载客户端</MenuItem>
      </div>
      <div className="flex-1">
        <SearchBar></SearchBar>
      </div>
      <div className="flex gap-4  px-4 items-center">
        <div className="relative group">
          <Avatar
            className={cn(
              "bg-red-300 size-14 group transition-all duration-500"
            )}
            onMouseEnter={() => {
              setAvatarActive(true);
            }}
          >
            <Image src={avatar} alt={"avatar"}></Image>
          </Avatar>
        </div>

        <MenuItem>
          <div className="flex flex-col relative items-center">
            <div className="absolute top-0 right-0 size-2 rounded-full bg-red-600 translate-x-1"></div>
            <CrownIcon></CrownIcon>
            <span className="hidden lg:inline">大会员</span>
          </div>
        </MenuItem>
        <MenuItem>
          <div className="flex flex-col relative items-center">
            <div className="absolute top-0 right-0 size-2 rounded-full bg-red-600 translate-x-1"></div>
            <MailIcon></MailIcon>

            <span className="hidden lg:inline"> 消息</span>
          </div>
        </MenuItem>
        <MenuItem>
          <div className="flex flex-col justify-center ">
            <FanIcon></FanIcon>

            <span className="hidden lg:inline"> 动态</span>
          </div>
        </MenuItem>
        <MenuItem>
          <div className="flex flex-col justify-center items-center">
            <StarsIcon></StarsIcon>

            <span className="hidden lg:inline"> 收藏</span>
          </div>
        </MenuItem>
        <MenuItem>
          <div className="flex flex-col justify-center items-center">
            <ClockIcon></ClockIcon>

            <span className="hidden lg:inline"> 历史</span>
          </div>
        </MenuItem>
        <MenuItem>
          <div className="flex flex-col justify-center items-center">
            <LucideLightbulb></LucideLightbulb>

            <span className="hidden lg:inline">创作中心</span>
          </div>
        </MenuItem>
        <MenuItem>
          <HoverCard>
            <HoverCardTrigger asChild>
              <Button variant="destructive" className="bg-pink-500">
                <UploadIcon></UploadIcon>投稿
              </Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-90" sideOffset={5} alignOffset={100}>
              <div className="flex justify-between text-neutral-500">
                <div className="flex flex-col items-center justify-center text-xs p-2 hover:bg-neutral-300 hover:rounded-lg">
                  <BookAudioIcon></BookAudioIcon>
                  专栏投搞
                </div>
                <div className="flex flex-col items-center justify-center text-xs p-2 hover:bg-neutral-300 hover:rounded-lg">
                  <FileMusicIcon></FileMusicIcon>
                  音频投搞
                </div>
                <div className="flex flex-col items-center justify-center text-xs p-2 hover:bg-neutral-300 hover:rounded-lg">
                  <SmileIcon></SmileIcon>
                  贴纸投搞
                </div>
                <div className="flex flex-col items-center justify-center text-xs p-2 hover:bg-neutral-300 hover:rounded-lg">
                  <VideoIcon></VideoIcon>
                  视频投搞
                </div>
                <div className="flex flex-col items-center justify-center text-xs p-2 hover:bg-neutral-300 hover:rounded-lg">
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
