import React from "react";
import Link from "next/link";

type NavlinkProps = {
  linkIcon: React.ReactElement;
  linkText: string;
  linkHref: string;
};

const NavLink = ({ linkIcon, linkText, linkHref }: NavlinkProps) => {
  return (
    <Link href={linkHref}>
      <div className="mt-2 flex cursor-pointer items-center justify-start rounded-3xl px-4 py-2 transition hover:bg-slate-800">
        <div className="text-3xl">{linkIcon}</div>
        <div className="ml-4 text-2xl">{linkText}</div>
      </div>
    </Link>
  );
};

export default NavLink;
