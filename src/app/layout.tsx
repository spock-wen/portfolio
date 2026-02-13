import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "文国荣 - 资深全栈开发/技术专家",
  description: "12年工作经验，精通Web前后端、Android系统、桌面应用开发，擅长设计跨端协同的复杂系统架构。",
};

import { Background } from "@/components/Background";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="dark">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-slate-950 text-slate-200 font-sans selection:bg-cyan-500/30 selection:text-cyan-200`}
      >
        <Background />
        {children}
      </body>
    </html>
  );
}
