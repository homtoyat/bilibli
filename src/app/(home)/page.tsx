import { NavBar } from "@/modules/home/ui/components/nav-bar";
import React from "react";

export default function page() {
  return (
    <div className="max-w-[2560px]  h-lvh mx-auto ">
      <main className="w-full">
        <NavBar></NavBar>
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
