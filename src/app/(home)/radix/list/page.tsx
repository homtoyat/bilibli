"use client";

import { useAnimationControls } from "framer-motion";
import { useEffect, useState } from "react";
import Dropdown from "./Dropdown";
export default function Page() {
  const [text, setText] = useState("select an item");
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
      <Dropdown>
        <Dropdown.Button>😊</Dropdown.Button>
        <Dropdown.Menu>
          <Dropdown.Item
            onSelect={() => {
              setText("hello ");
            }}
          >
            hello{" "}
          </Dropdown.Item>
          <Dropdown.Item
            onSelect={() => {
              setText("world ");
            }}
          >
            world
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <div className="top-20 pt-30">{text}</div>
      {/* <DropdownMenu.Root open={open} onOpenChange={setOpen}>
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
      </DropdownMenu.Root> */}
    </div>
  );
}
