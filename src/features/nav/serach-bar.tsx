"use client";
import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { SearchIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap  text-sm font-medium transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: " text-primary-foreground shadow-xs ",
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
        default: "h-9 px-4 has-[>svg]:px-3",
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

export const SearchBar = ({
  className,
  variant,
  size,
  children,
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) => {
  const [active, setActive] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const eventHandler = (event: MouseEvent) => {
      const el = ref?.current;
      if (el && el.contains(event.target as Node)) {
        setActive(true);
      } else {
        setActive(false);
      }
    };
    window.addEventListener("mousedown", eventHandler);
    return () => {
      window.removeEventListener("mousedown", eventHandler);
    };
  }, [ref]);

  return (
    <div className={cn(buttonVariants({ variant, size, className }))}>
      <div
        className={cn(
          "group flex h-8 w-full flex-col self-start rounded bg-white/80 px-2 shadow-lg hover:bg-white/100",
          active && "h-80",
        )}
        ref={ref}
      >
        <div className="flex w-full self-start">
          <input
            className="my-1 h-6 w-full rounded px-2 text-neutral-700 outline-0 focus:bg-neutral-300/50"
            onClick={() => {
              setActive(() => true);
              console.log({ active });
            }}
          ></input>
          <button className="h-8 rounded-r-md px-2">
            <SearchIcon className="text-black"></SearchIcon>
          </button>
        </div>
        <div
          className={cn("hidden w-full text-neutral-700", active && "block")}
        >
          <SearchHistory></SearchHistory>
        </div>
      </div>
    </div>
  );
};

export const SearchHistory = () => {
  return (
    <div className="flex flex-col justify-center gap-4">
      <SearchHistoryTitle></SearchHistoryTitle>
      <SearchHistoryList></SearchHistoryList>
    </div>
  );
};

export const SearchHistoryTitle = () => {
  return (
    <div className="flex items-center justify-between">
      <h1 className="cursor-pointer">搜索历史</h1>
      <button className="cursor-pointer text-neutral-400 hover:text-sky-400">
        清空
      </button>
    </div>
  );
};

export const SearchHistoryList = () => {
  return (
    <div className="flex flex-col justify-between">
      <h1 className="cursor-text font-semibold">bilibili热搜</h1>
      <div className="grid grid-cols-2">
        {[
          "13名中国公民在缅甸地南腔北调右在安德森安德森",
          "枯安德森 安德森 3  3 ",
          "233大在在在 ",
          "2332大",
        ].map((item, index) => {
          return (
            <div
              key={index}
              className="flex cursor-pointer px-2 py-2 hover:bg-neutral-400/30"
            >
              <span className="inline-block pr-2">{index + 1}</span>
              <span className="inline-block w-120 truncate">{item}</span>
              <span className="inline-block rounded bg-red-400/80 px-1 py-1 text-xs text-white">
                热
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
