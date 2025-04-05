"use client";
import * as HoverCard from "@radix-ui/react-hover-card";

export default function NestedHoverDemo() {
  return (
    <HoverCard.Root openDelay={300} closeDelay={200}>
      {/* 外层 HoverCard */}
      <HoverCard.Trigger className="trigger">
        悬停我显示外层卡片
      </HoverCard.Trigger>

      <HoverCard.Portal>
        <HoverCard.Content
          className="outer-content"
          sideOffset={5}
          avoidCollisions={false} // 允许嵌套内容溢出
        >
          {/* 外层卡片内容 */}
          <div className="rounded-lg bg-white p-4 shadow-lg">
            <h3>外层卡片标题</h3>
            <p>继续悬停下方文字显示内层卡片：</p>

            {/* 内层 HoverCard */}
            <HoverCard.Root openDelay={200} closeDelay={100}>
              <HoverCard.Trigger
                className="inner-trigger"
                onMouseDown={(e) => e.stopPropagation()} // 阻止事件冒泡
              >
                <span className="text-blue-500 hover:underline">
                  悬停此处显示内层卡片
                </span>
              </HoverCard.Trigger>

              <HoverCard.Portal>
                <HoverCard.Content
                  className="inner-content"
                  sideOffset={10}
                  side="right" // 内层卡片显示在右侧
                  align="start"
                >
                  <div className="rounded-lg bg-white p-4 shadow-lg">
                    内层卡片内容
                  </div>
                </HoverCard.Content>
              </HoverCard.Portal>
            </HoverCard.Root>
          </div>
        </HoverCard.Content>
      </HoverCard.Portal>
    </HoverCard.Root>
  );
}
