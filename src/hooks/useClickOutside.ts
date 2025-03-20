// hooks/useClickOutside.ts
import { RefObject, useEffect } from "react";

type Handler = (event: MouseEvent) => void;

export function useClickOutside<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T | null>,
  handler: Handler,
) {
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      const el = ref?.current;
      const activeElement = document.activeElement;
      if (!el) {
        handler(event);
      }
      // 核心逻辑：如果点击的是内部元素，或当前焦点在内部元素上，则不触发关闭
      else if (
        el.contains(event.target as Node) || // 点击的是内部元素
        el.contains(activeElement) // 当前焦点在内部元素上
      ) {
        return;
      }
      handler(event);
    };

    document.addEventListener("mousedown", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [ref, handler]);
}
