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

  console.log({ open });
  return (
    <HoverCard.Root
      openDelay={100}
      closeDelay={200}
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
}: {
  children: React.ReactNode;
  align?: "end" | "center" | "start" | undefined;
}) {
  const { open } = useContext(NavHoverCardContext);
  return (
    <AnimatePresence>
      {open && (
        <HoverCard.Portal forceMount>
          <HoverCard.Content align={align} sideOffset={0} side="bottom" asChild>
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
