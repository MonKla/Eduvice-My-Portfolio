import type { Metadata } from "next";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});


// TODO 1: เปลี่ยนชื่อและคำอธิบาย (แสดงบนแท็บเบราว์เซอร์และตอนแชร์ลิงก์)
export const metadata: Metadata = {
  title: "MonKla Portfolio",
  description: "My first website built with Next.js",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body className="bg-[#030712] text-slate-100 antialiased">{children}</body>
    </html>
  );
}
