import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
export default function Layout({ children }: Props) {
  return <div className="bg-primary-foreground w-screen">{children}</div>;
}
