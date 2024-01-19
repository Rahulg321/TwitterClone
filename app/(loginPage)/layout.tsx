import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import clsx from "clsx";
import "@/app/globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Twitter/Login",
  description: "Login to X and get the latest news of the world",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-black text-gray-100">
      <body className={clsx(montserrat.className, "")}>
        <main className="">{children}</main>
      </body>
    </html>
  );
}
