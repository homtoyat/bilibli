"use client";
import { useInView } from "framer-motion";
import { sha256 } from "js-sha256";
import { useEffect, useRef } from "react";
export default function Page() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.9 });
  const hash = sha256.create();
  const reader = new FileReader();
  useEffect(() => {
    if (isInView) {
      alert("ddd");
    }
    return () => {};
  }, [isInView]);

  return (
    <div className="flex h-[300vh] w-full flex-col items-center justify-center bg-neutral-800">
      <div className="fixed top-0 text-white"></div>
      <div className="h-screen"></div>
      <div className="text-5xl" ref={ref}>
        📷
      </div>

      <div className="h-screen"></div>
    </div>
  );
}
