import * as RadixDropdownMenu from "@radix-ui/react-dropdown-menu";
import { AnimatePresence, motion, useAnimationControls } from "framer-motion";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

const DropDownContext = createContext<{
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}>({
  open: false,
  setOpen: () => {},
});
const DropDownMenuContext = createContext({ closeMnu: () => {} });
export default function Dropdown({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <DropDownContext.Provider value={{ open: open, setOpen: setOpen }}>
      <RadixDropdownMenu.Root open={open} onOpenChange={setOpen}>
        {children}
      </RadixDropdownMenu.Root>
    </DropDownContext.Provider>
  );
}
function DropDownButton({ children }: { children: ReactNode }) {
  return (
    <RadixDropdownMenu.Trigger className="rounded bg-amber-800 select-none">
      {children}
    </RadixDropdownMenu.Trigger>
  );
}

function DropDownMenu({ children }: { children: ReactNode }) {
  const { open, setOpen } = useContext(DropDownContext);
  const controls = useAnimationControls();
  async function closeMenu() {
    await controls.start("closed");
    setOpen(false);
  }
  useEffect(() => {
    if (open) {
      controls.start({
        opacity: 0,
        backgroundColor: "green",
        transition: { duration: 3 },
      });
      console.log(new Date());
    }
  }, [controls, open]);
  return (
    <DropDownMenuContext.Provider value={{ closeMenu }}>
      <AnimatePresence>
        {open && (
          <RadixDropdownMenu.Portal forceMount>
            <RadixDropdownMenu.Content
              className="flex w-[100px] origin-top-left scale-200 flex-col rounded border-0 bg-neutral-500"
              align="start"
              asChild
            >
              <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: 1, backgroundColor: "red" }}
                transition={{ duration: 0.3 }}
                exit={{ opacity: 0 }}
                variants={{
                  open: { opacity: 1 },
                  closed: { opacity: 0, scale: 3 },
                }}
              >
                {children}
              </motion.div>
            </RadixDropdownMenu.Content>
          </RadixDropdownMenu.Portal>
        )}
      </AnimatePresence>
    </DropDownMenuContext.Provider>
  );
}

function DropDownMenuItem({
  children,
  onSelect = () => {},
}: {
  children: ReactNode;
  onSelect?: () => void;
}) {
  const controls = useAnimationControls();
  const { closeMenu } = useContext(DropDownMenuContext);
  return (
    <RadixDropdownMenu.Item
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
    </RadixDropdownMenu.Item>
  );
}

Dropdown.Button = DropDownButton;

Dropdown.Menu = DropDownMenu;
Dropdown.Item = DropDownMenuItem;
