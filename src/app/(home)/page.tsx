"use client";
import { SubCategory } from "@/modules/home/SubCategory";
import { NavBar } from "@/modules/home/ui/components/nav-bar";
import { motion } from "framer-motion";
export default function Page() {
  return (
    <div className="bg-wh mx-auto h-lvh max-w-[2560px]">
      <motion.main className="w-full">
        <NavBar></NavBar>
        <div className="g-neutral-50/30 top-120 h-[330vh] w-full px-24">
          <div className="h-full w-full">
            <SubCategory></SubCategory>
          </div>
        </div>
      </motion.main>

      <footer className="row-start-3 flex flex-wrap items-center justify-center gap-6"></footer>
    </div>
  );
}
