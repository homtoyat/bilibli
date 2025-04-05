"use client";
import { AnimatePresence } from "framer-motion";
import { HoverCard } from "radix-ui";
import { createContext, Dispatch, SetStateAction, useContext } from "react";
const NavHoverCardContext = createContext<{
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}>({
  open: false,
  setOpen: () => {},
});
export default function NavHoverCard({
  children,
}: {
  children: React.ReactNode;
}) {
  const { open, setOpen } = useContext(NavHoverCardContext);
  return (
    <HoverCard.Root
      openDelay={100}
      closeDelay={100}
      open={open}
      onOpenChange={setOpen}
    >
      {children}
    </HoverCard.Root>
  );
}

function NavHoverCardIcon({ children }: { children: React.ReactNode }) {
  return <HoverCard.Trigger asChild>{children}</HoverCard.Trigger>;
}

function NavHoverContent({
  children,
  align = "center",
  sideOffset = 0,
}: {
  children: React.ReactNode;
  align?: "end" | "center" | "start" | undefined;
  sideOffset?: number;
}) {
  const { open } = useContext(NavHoverCardContext);
  console.log({ open });
  if (!open) {
    return null;
  }
  return (
    <AnimatePresence>
      {open && (
        <HoverCard.Portal forceMount>
          <HoverCard.Content
            align={align}
            sideOffset={sideOffset}
            side="bottom"
            asChild
          >
            {children}
          </HoverCard.Content>
        </HoverCard.Portal>
      )}
    </AnimatePresence>
  );
}
NavHoverCard.Icon = NavHoverCardIcon;
NavHoverCard.Content = NavHoverContent;
NavHoverCard.Context = NavHoverCardContext;
