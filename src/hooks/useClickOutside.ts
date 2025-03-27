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
      if (
        (el && el.contains(event.target as Node)) ||
        el?.contains(activeElement)
      ) {
        console.log({ target: event.target });
      } else {
        handler(event);
      }
    };
    document.addEventListener("mousedown", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [ref, handler]);
}
