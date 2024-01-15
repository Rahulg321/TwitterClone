import clsx from "clsx";
import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import NavLink from "./NavLink";
import { FaHome } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { FaBell } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { IoLogoPlaystation } from "react-icons/io";
import { LiaClipboardListSolid } from "react-icons/lia";
import { BsPeopleFill } from "react-icons/bs";
import { IoPersonCircleSharp } from "react-icons/io5";
import { CiSettings } from "react-icons/ci";

type SidebarProps = {
  classname?: string;
};

const Sidebar = ({ classname }: SidebarProps) => {
  return (
    <div className={clsx("border-r-2 py-4 pl-24 pr-12", classname)}>
      <div className="mb-4 ml-4 text-4xl">
        <FaXTwitter />
      </div>
      <div>
        <NavLink linkIcon={<FaHome />} linkHref="/home" linkText="Home" />
        <NavLink
          linkIcon={<IoSearch />}
          linkHref="/explore"
          linkText="Explore"
        />
        <NavLink
          linkIcon={<FaBell />}
          linkHref="/notifications"
          linkText="Notifications"
        />
        <NavLink
          linkIcon={<IoMail />}
          linkHref="/messages"
          linkText="Messages"
        />
        <NavLink
          linkIcon={<IoLogoPlaystation />}
          linkHref="/grok"
          linkText="Grok"
        />
        <NavLink
          linkIcon={<LiaClipboardListSolid />}
          linkHref="/lists"
          linkText="Lists"
        />
        <NavLink
          linkIcon={<BsPeopleFill />}
          linkHref="/communities"
          linkText="Communities"
        />
        <NavLink
          linkIcon={<FaXTwitter />}
          linkHref="/premium"
          linkText="Premium"
        />
        <NavLink
          linkIcon={<IoPersonCircleSharp />}
          linkHref="/rg5353070"
          linkText="Profile"
        />
        <NavLink linkIcon={<CiSettings />} linkHref="/blog" linkText="More" />
      </div>
      <button className="mt-4 w-full rounded-xl bg-pink-600 px-8 py-4 transition hover:bg-pink-800">
        Post
      </button>
    </div>
  );
};

export default Sidebar;
