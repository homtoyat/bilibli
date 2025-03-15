// pages/index.tsx
"use client";
import { useState } from "react";

export default function HashCalculator() {
  const [hash, setHash] = useState<string>("");
  const [progress, setProgress] = useState<number>(0);

  // 计算文件的 SHA-256
  const calculateHash = async (file: File) => {
    const chunkSize = 4 * 1024 * 1024; // 分块大小（4MB）
    let offset = 0;
    const crypto = window.crypto.subtle;

    // 初始化哈希算法
    const hash = await crypto.digest("SHA-256", new Uint8Array());
    const buffer = await crypto.digest("SHA-256", new Uint8Array());
    let result = new Uint8Array(buffer);

    while (offset < file.size) {
      const chunk = file.slice(offset, offset + chunkSize);
      const reader = new FileReader();
      const arrayBuffer = await new Promise<ArrayBuffer>((resolve) => {
        reader.onload = (e) => resolve(e.target?.result as ArrayBuffer);
        reader.readAsArrayBuffer(chunk);
      });

      // 逐块更新哈希
      const chunkHash = await crypto.digest(
        "SHA-256",
        new Uint8Array(arrayBuffer),
      );
      result = new Uint8Array([...result, ...new Uint8Array(chunkHash)]);

      offset += chunkSize;
      setProgress(Math.round((offset / file.size) * 100));
    }

    // 生成最终哈希
    const finalHash = await crypto.digest("SHA-256", result);
    const hashArray = Array.from(new Uint8Array(finalHash));
    const hashHex = hashArray
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");
    setHash(hashHex);
  };

  // 选择文件
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) await calculateHash(file);
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      {progress > 0 && <p>进度: {progress}%</p>}
      {hash && <p>SHA-256: {hash}</p>}
    </div>
  );
}
