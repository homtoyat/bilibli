import { Avatar as RadixAvatar } from "radix-ui";
export default function Avatar() {
  return (
    <RadixAvatar.Root>
      <RadixAvatar.Image
        className="h-8 w-8 rounded-full ring-[2px]"
        src="/avatar.png"
        alt="Avatar"
      />
      <RadixAvatar.Fallback
        className="flex size-8 items-center justify-center rounded-full bg-red-300/100 text-white ring-1 ring-white"
        asChild
      >
        <div>HT</div>
      </RadixAvatar.Fallback>
    </RadixAvatar.Root>
  );
}
