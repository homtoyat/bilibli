"use client";
import React, { useRef, useState } from "react";
import { MenuItem } from "../menu-item";
import { SearchBar } from "../search-bar";

import {
  ArrowDown,
  BookAudioIcon,
  BookTextIcon,
  ChevronDown,
  ClockIcon,
  CrownIcon,
  DownloadCloudIcon,
  DownloadIcon,
  FanIcon,
  FileMusicIcon,
  HardDriveDownload,
  LucideLightbulb,
  MailIcon,
  SmileIcon,
  StarsIcon,
  UploadIcon,
  VideoIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import Image from "next/image";
import avatar from "@/../public/avatar.png";
import banner from "@/../public/banner.png";
import logo from "@/../public/logo.png";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Separator } from "@radix-ui/react-context-menu";
import Link from "next/link";
import styles from "./index.module.css";
export const NavBar = () => {
  const [avatarActive, setAvatarActive] = useState(false);
  return (
    <div className="flex items-center relative   group min-w-[1024px] h-fit">
      <Image
        src={banner}
        alt={"banner"}
        className=" absolute -z-40 group-hover:scale-110 transition-all duration-2000"
      ></Image>
      <Link href={"/abcs"}>
        <Image
          src={logo}
          alt={"lgo"}
          width={80}
          className={cn(
            "absolute -bottom-1/2 left-32 scale-140 top-14 opacity-50 hover:opacity-100 cursor-pointer transition-all duration-700"
          )}
        ></Image>
      </Link>

      <div className="flex gap-2 items-center px-4">
        <MenuItem>
          <div className=" flex items-center">
            <p>首页</p>
            <ChevronDown
              className="hover:rotate-180 transition-all duration-700 "
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
      <div className="flex gap-4  px-4 items-center py-2">
        <div className="relative group">
          <Avatar
            className={cn(
              "bg-red-300 size-12 group transition-all duration-500 ring-2 ring-neutral-100"
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
              <div className="flex flex-col relative items-center group overflow-hidden ">
                <CrownIcon></CrownIcon>
                <span className="hidden lg:inline">大会员</span>
              </div>
            </HoverCardTrigger>
            <HoverCardContent
              className="w-90  mx-0 py-4"
              sideOffset={5}
              alignOffset={100}
              align="center"
            >
              <div className="flex flex-col gap-2  text-lg ">
                <div className="hover:bg-neutral-200 text-neutral-500 transition-all mx-2  rounded  p-2">
                  回复我的
                </div>
                <div className="hover:bg-neutral-200 text-neutral-500 transition-all mx-2  rounded  p-2">
                  @我的
                </div>
                <div className="hover:bg-neutral-200 text-neutral-500 transition-all mx-2  rounded flex  justify-between items-center  p-2">
                  <p className="inline-block">我的消息</p>
                  <div className="rounded-full w-2 h-2 bg-red-500"></div>
                </div>
                <div className="hover:bg-neutral-200 text-neutral-500 transition-all mx-2  rounded  p-2">
                  系统消息
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        </MenuItem>
        <MenuItem>
          <div className="flex flex-col relative items-center">
            <div className="absolute top-0 right-0 size-2 rounded-full bg-red-600 translate-x-1"></div>
            <MailIcon></MailIcon>

            <span className="hidden lg:inline"> 消息</span>
          </div>
        </MenuItem>
        <MenuItem>
          <div className="flex flex-col justify-center group">
            <div>
              <FanIcon
                className={cn("animate-wiggle", " flex items-center")}
              ></FanIcon>
            </div>

            <span className="hidden lg:inline"> 动态</span>
          </div>
        </MenuItem>
        <MenuItem>
          <div className={cn("flex flex-col justify-center items-center ")}>
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
              className="w-90 animate-accordion-down"
              sideOffset={5}
              alignOffset={100}
              align="center"
            >
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
