// index.jsx
import { Popover } from "radix-ui";

const PopoverDemo = () => (
  <Popover.Root>
    <Popover.Trigger asChild>More info</Popover.Trigger>
    <Popover.Portal>
      <Popover.Content>
        Some more info…
        <Popover.Arrow />
      </Popover.Content>
    </Popover.Portal>
  </Popover.Root>
);

export default PopoverDemo;
