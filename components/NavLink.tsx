"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

type NavlinkProps = {
  linkIcon: React.ReactElement;
  linkText: string;
  linkHref: string;
};

const NavLink = ({ linkIcon, linkText, linkHref }: NavlinkProps) => {
  const pathname = usePathname();

  return (
    <Link href={linkHref}>
      <div
        className={clsx(
          "mt-2 cursor-pointer items-center justify-between rounded-3xl px-4 py-2 transition hover:bg-slate-800 xl:flex xl:justify-start",
          {
            "bg-slate-800": linkHref === pathname,
          },
        )}
      >
        <div className="text-3xl">{linkIcon}</div>
        <div className="ml-4 hidden text-xl xl:block  ">{linkText}</div>
      </div>
    </Link>
  );
};

export default NavLink;
