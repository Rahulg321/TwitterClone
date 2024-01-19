import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "../globals.css";
import Sidebar from "@/components/Sidebar";
import clsx from "clsx";
import RightSidebar from "@/components/RightSidebar";
import { Toaster } from "react-hot-toast";

const urbanist = Montserrat({ subsets: ["latin"] });

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
    <html lang="en" className="bg-gray-950 text-gray-100">
      <body className={clsx(urbanist.className, "parent min-h-screen")}>
        <Sidebar classname="" />
        <main className="">{children}</main>
        <RightSidebar classname="" />
        <Toaster position="bottom-center" />
      </body>
    </html>
  );
}
