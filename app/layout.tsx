import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import clsx from "clsx";
import RightSidebar from "@/components/RightSidebar";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Twitter Clone",
  description: "Media that powers the world",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-gray-900 text-gray-100">
      <body className={clsx(urbanist.className, "min-h-screen parent")}>
        <Sidebar classname="bg-pink-400 left" />
        <main className=" px-4 py-6">{children}</main>
        <RightSidebar classname=" bg-gray-500 right" />
      </body>
    </html>
  );
}
