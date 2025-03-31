import * as Dialog from "@radix-ui/react-dialog";
import { XIcon } from "lucide-react";
import { ReactNode } from "react";

export const Modal = ({
  open,
  onOpenChange,
  children,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: ReactNode;
}) => {
  return (
    <div>
      <Dialog.Root open={open} onOpenChange={onOpenChange}>
        {children}
      </Dialog.Root>
    </div>
  );
};
function ModalContent({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 bg-black/30 data-[state=closed]:animate-[dialog-content-hidden_100ms] data-[state=open]:animate-[dialog-content-show_100ms]"></Dialog.Overlay>
      <Dialog.DialogContent className="fixed top-1/2 left-1/2 w-100 -translate-1/2 rounded-2xl bg-neutral-50 p-8 text-gray-800 shadow-lg data-[state=closed]:animate-[dialog-content-hidden_500ms] data-[state=open]:animate-[dialog-content-show_500ms]">
        <Dialog.DialogTitle className="text-lg font-semibold">
          {title}
        </Dialog.DialogTitle>
        <Dialog.Close className="absolute top-1 right-1 cursor-pointer rounded-full p-1 hover:bg-black/40 hover:text-white">
          <XIcon></XIcon>
        </Dialog.Close>
        <Dialog.DialogDescription className="py-3 text-black/80">
          你是谁主
        </Dialog.DialogDescription>
        {children}
      </Dialog.DialogContent>
    </Dialog.Portal>
  );
}

Modal.Button = Dialog.Trigger;
Modal.Content = ModalContent;
Modal.Close = Dialog.Close;
