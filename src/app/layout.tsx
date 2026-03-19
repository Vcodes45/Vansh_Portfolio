import type { Metadata } from "next";
import { Syne, DM_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const syne = Syne({ subsets: ["latin"], weight: ["400","600","700","800"], variable: "--font-syne" });
const dmMono = DM_Mono({ subsets: ["latin"], weight: ["300","400"], style: ["normal","italic"], variable: "--font-dm-mono" });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["300","400","500","600"], variable: "--font-jakarta" });

export const metadata: Metadata = {
  title: "Vansh Sharma — Full Stack Developer",
  description: "Aspiring Full Stack Web Developer & ML Enthusiast. Building with React, Next.js and machine learning.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${syne.variable} ${dmMono.variable} ${jakarta.variable} noise`}>
        {children}
      </body>
    </html>
  );
}
