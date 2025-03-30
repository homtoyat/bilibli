"use client";
import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import {
  ArchiveIcon,
  Clock5,
  DownloadIcon,
  FanIcon,
  LucideLightbulb,
} from "lucide-react";
import { NavItemLink, VipItemHoverCard } from "./nav-item-link";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap  text-sm font-medium transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-xs ",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40",
        outline:
          "border border-input bg-background shadow-xs hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        portal:
          "hover:animate-updown bg-transparent text-white hover:no-underline bg-black/60",
        category:
          "hover:animate-updown bg-transparent text-neutral-600 hover:no-underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export const NavBar = ({
  className,
  variant,
  size,
  children,
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) => {
  return (
    <div className={cn(buttonVariants({ variant, size, className }))}>
      {children}
    </div>
  );
};

interface PortalNavBarInstanceProps {
  variant?: "portal" | "category";
}
export const NavBarContentLeft = ({
  variant = "portal",
}: PortalNavBarInstanceProps) => {
  return (
    <div className="flex">
      <NavItemLink variant={variant} className="hover:animate-updown" href="/">
        首页
      </NavItemLink>
      <NavItemLink variant={variant} className="hover:animate-updown" href="/">
        番剧
      </NavItemLink>
      <NavItemLink variant={variant} className="hover:animate-updown" href="/">
        直播
      </NavItemLink>
      <NavItemLink variant={variant} className="hover:animate-updown" href="/">
        会员购
      </NavItemLink>
      <NavItemLink variant={variant} className="hover:animate-updown" href="/">
        温画
      </NavItemLink>
      <NavItemLink variant={variant} className="hover:animate-updown" href="/">
        赛事
      </NavItemLink>
      <NavItemLink variant={variant} className="hover:animate-updown" href="/">
        <DownloadIcon></DownloadIcon>下载客户端
      </NavItemLink>
    </div>
  );
};

export const NavBarContentRight = ({
  variant = "portal",
}: PortalNavBarInstanceProps) => {
  return (
    <div className="mt-2 flex">
      <VipItemHoverCard variant={"portal"}></VipItemHoverCard>
      <NavItemLink
        variant={variant}
        className="hover:animate-updown flex flex-col"
        href="/"
      >
        <FanIcon
          className={cn("animate-wiggle", "flex items-center")}
        ></FanIcon>
        <span className="hidden lg:inline">动态</span>
      </NavItemLink>
      <NavItemLink
        variant={variant}
        className="hover:animate-updown flex flex-col"
        href="/"
      >
        <ArchiveIcon></ArchiveIcon>
        <span className="hidden lg:inline"> 收藏</span>
      </NavItemLink>
      <NavItemLink
        variant={variant}
        className="hover:animate-updown flex flex-col"
        href="/"
      >
        <Clock5></Clock5>
        <span className="hidden lg:inline"> 历史</span>
      </NavItemLink>
      <NavItemLink
        variant={variant}
        className="hover:animate-updown flex flex-col"
        href="/"
      >
        <LucideLightbulb className="hover:animate-updown"></LucideLightbulb>
        <span className="hidden lg:inline">创作中心</span>
      </NavItemLink>
    </div>
  );
};
