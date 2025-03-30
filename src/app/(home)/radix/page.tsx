"use client";
import * as Dialog from "@radix-ui/react-dialog";
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import { LoaderIcon, PencilLineIcon, XIcon } from "lucide-react";
import { FormEvent, useState } from "react";
const users = [
  { name: "john doe", job: "engineer", email: "johndoe@gmail.com" },
  { name: "ally doe", job: "engineer", email: "johndoe@gmail.com" },
  { name: "Rayj King", job: "Sales", email: "raj@fox.com" },
];
export default function RadixPage() {
  const [show, setShow] = useState(false);

  return (
    <Theme
      accentColor="pink"
      appearance="light"
      radius="full"
      className="w-full text-center"
    >
      <div className="py-10">
        <div className="mx-auto max-w-sm space-y-4 rounded-lg bg-gray-200 p-4">
          {users.map((user) => {
            return <ContactCard key={user.name} user={user}></ContactCard>;
          })}
        </div>
      </div>
    </Theme>
  );
}
interface UserProps {
  name?: string;
  job?: string;
  email?: string;
  afterSave: () => void;
}
export const ContactCard = ({ user }: { user: UserProps }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      key={user.name}
      className="flex flex-col rounded-lg bg-white px-4 py-4 text-gray-400 shadow-lg"
    >
      <div className="flex flex-col items-start">
        <div className="flex w-full items-center justify-between">
          <p className="font-semibold text-gray-800">{user.name}</p>
          <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.DialogTrigger>
              <PencilLineIcon className="cursor-pointer rounded text-black hover:bg-amber-500/30"></PencilLineIcon>
            </Dialog.DialogTrigger>
            <Dialog.DialogPortal>
              <Dialog.Overlay className="fixed inset-0 bg-black/30 data-[state=closed]:animate-[dialog-content-hidden_100ms] data-[state=open]:animate-[dialog-content-show_100ms]"></Dialog.Overlay>
              <Dialog.DialogContent className="fixed top-1/2 left-1/2 w-100 -translate-1/2 rounded-2xl bg-neutral-50 p-8 text-gray-800 shadow-lg data-[state=closed]:animate-[dialog-content-hidden_500ms] data-[state=open]:animate-[dialog-content-show_500ms]">
                <Dialog.DialogTitle className="text-lg font-semibold">
                  Edit contact
                </Dialog.DialogTitle>
                <Dialog.Close className="absolute top-1 right-1 cursor-pointer rounded-full p-1 hover:bg-black/40 hover:text-white">
                  <XIcon></XIcon>
                </Dialog.Close>
                <Dialog.DialogDescription className="py-3 text-black/80">
                  你是谁主
                </Dialog.DialogDescription>
                <ContactFrom
                  {...user}
                  afterSave={() => setOpen(false)}
                ></ContactFrom>
              </Dialog.DialogContent>
            </Dialog.DialogPortal>
          </Dialog.Root>
        </div>
        <p>{user.job}</p>
        <p>{user.email}</p>
      </div>
    </div>
  );
};

export const ContactFrom = ({ name, job, email, afterSave }: UserProps) => {
  const [saving, setSaving] = useState(false);
  return (
    <form
      onSubmit={async (e: FormEvent<HTMLFormElement>) => {
        console.log({ e });
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.currentTarget));
        console.log({ data });
        await new Promise((r) => {
          setTimeout(r, 300);
        });
        afterSave();
      }}
    >
      <fieldset disabled={saving} className="group">
        <div className="size-full">
          <input name="name" value={name} onChange={() => {}}></input>
          <input name="email" value={email} onChange={() => {}}></input>
          <input name="job" value={job} onChange={() => {}}></input>
        </div>
        <div className="flex justify-end py-2">
          <button className="hover:text-foreground/40 cursor-pointer px-4 py-2 outline-0">
            Cancel
          </button>

          <button className="cursor-pointer rounded bg-green-400 px-4 py-2 text-white hover:bg-green-700">
            <LoaderIcon className="absolute animate-spin group-enabled:opacity-0 group-disabled:pointer-events-none"></LoaderIcon>
            <span className="group-disabled::opacity-0">Save</span>
          </button>
        </div>
      </fieldset>
    </form>
  );
};
