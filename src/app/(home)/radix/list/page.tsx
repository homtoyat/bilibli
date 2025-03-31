"use client";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { AnimatePresence, motion, useAnimationControls } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";
export default function Page() {
  const [open, setOpen] = useState(false);
  const controls = useAnimationControls();
  async function closeMenu() {
    await controls.start("closed");
    setOpen(false);
  }
  useEffect(() => {
    if (open) {
      controls.start({ opacity: 0, backgroundColor: "green" });
      console.log(new Date());
    }
  }, [controls, open]);

  return (
    <div className="h-screen w-screen">
      <DropdownMenu.Root open={open} onOpenChange={setOpen}>
        <DropdownMenu.Trigger className="rounded bg-amber-800 select-none">
          hello apple
        </DropdownMenu.Trigger>
        <AnimatePresence>
          {open && (
            <DropdownMenu.Portal forceMount>
              <DropdownMenu.Content
                className="flex w-[100px] origin-top-left scale-200 flex-col rounded border-0 bg-neutral-500"
                align="start"
                asChild
              >
                <motion.div
                  initial={{ opacity: 1 }}
                  animate={controls}
                  transition={{ duration: 0.3 }}
                  exit={{ opacity: 0 }}
                  variants={{
                    open: { opacity: 1 },
                    closed: { opacity: 0, scale: 3 },
                  }}
                >
                  <Item closeMenu={closeMenu}>dddd</Item>

                  <Item closeMenu={closeMenu}>ddddhell</Item>
                </motion.div>
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          )}
        </AnimatePresence>
      </DropdownMenu.Root>
    </div>
  );
}

function Item({
  children,
  onSelect = () => {},
  closeMenu = async () => {},
}: {
  children: ReactNode;
  onSelect?: () => void;
  closeMenu?: () => void;
}) {
  const controls = useAnimationControls();
  return (
    <DropdownMenu.Item
      className="border-none text-slate-900 hover:border-0 hover:bg-sky-300 focus-visible:outline-0"
      onSelect={async (e) => {
        e.preventDefault();
        await controls.start({
          backgroundColor: "#FFF",
          color: "#000",
          transition: { duration: 0.3 },
        });
        await controls.start({
          backgroundColor: "#38bdf8",
          color: "#fff",
          transition: { duration: 0.3 },
        });
        await closeMenu();
        onSelect();
      }}
      asChild
    >
      <motion.div initial={{ x: 100 }} animate={controls}>
        {children}
      </motion.div>
    </DropdownMenu.Item>
  );
}
