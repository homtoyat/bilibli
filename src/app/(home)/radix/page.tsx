"use client";
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import { LoaderIcon, SunIcon } from "lucide-react";
import { FormEvent, useState } from "react";
import { Modal } from "./Modal";
const users = [
  { name: "john doe", job: "engineer", email: "johndoe@gmail.com" },
  { name: "ally doe", job: "engineer", email: "johndoe@gmail.com" },
  { name: "Rayj King", job: "Sales", email: "raj@fox.com" },
];
export default function Page() {
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
            return <ContactCard key={user.name} user={users[0]}></ContactCard>;
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
const ContactCard = ({
  user,
}: {
  user: { name?: string; job?: string; email?: string };
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      key={user.name}
      className="flex flex-col rounded-lg bg-white px-4 py-4 text-gray-400 shadow-lg"
    >
      <div className="relative flex flex-col items-start">
        <div className="flex w-full flex-col items-start justify-between">
          <p className="font-semibold text-gray-800">{user.name}</p>
          <p>{user.job}</p>
          <p>{user.email}</p>
        </div>
        <Modal open={open} onOpenChange={setOpen}>
          <Modal.Button>
            <SunIcon className="absolute top-0 right-0 cursor-pointer rounded text-black hover:bg-amber-500/30"></SunIcon>
          </Modal.Button>
          <Modal.Content title="Edit Contact tilte">
            <ContactFrom
              {...user}
              afterSave={() => setOpen(false)}
            ></ContactFrom>
          </Modal.Content>
          {/* <Modal.Button>
            <PencilLineIcon className="absolute top-0 right-0 cursor-pointer rounded text-black hover:bg-amber-500/30"></PencilLineIcon>
          </Modal.Button>
          <Modal.Content title="Edit Contract">
            <ContactFrom
              {...user}
              afterSave={() => setOpen(false)}
            ></ContactFrom>
          </Modal.Content> */}
        </Modal>
      </div>
    </div>
  );
};

const ContactFrom = ({ name, job, email, afterSave }: UserProps) => {
  const [saving] = useState(false);
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
          <Modal.Close className="hover:text-foreground/40 cursor-pointer px-4 py-2 outline-0">
            Cancel
          </Modal.Close>

          <button className="cursor-pointer rounded bg-green-400 px-4 py-2 text-white hover:bg-green-700">
            <LoaderIcon className="absolute animate-spin group-enabled:opacity-0 group-disabled:pointer-events-none"></LoaderIcon>
            <span className="group-disabled::opacity-0">Save</span>
          </button>
        </div>
      </fieldset>
    </form>
  );
};
