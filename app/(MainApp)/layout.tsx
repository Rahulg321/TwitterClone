import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "../globals.css";
import Sidebar from "@/components/Sidebar";
import clsx from "clsx";
import RightSidebar from "@/components/RightSidebar";
import { Toaster } from "react-hot-toast";
import Header from "@/components/Header";

const montserrat = Montserrat({ subsets: ["latin"] });

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
      <body className={clsx(montserrat.className, "min-h-screen")}>
        <div className="parent ">
          <Sidebar classname="left" />
          <main className="feed border-r-2">{children}</main>
          <RightSidebar classname="right" />
        </div>

        <Toaster position="bottom-center" />
      </body>
    </html>
  );
}
