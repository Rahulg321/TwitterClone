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
import NewTweetModal from "./Modals/NewTweetModal";

type SidebarProps = {
  classname?: string;
};

const Sidebar = ({ classname }: SidebarProps) => {
  return (
    <div className={clsx("border-r-2 py-4 pl-24 pr-12", classname)}>
      <div className="sticky top-2">
        <div className="mb-4 ml-4 text-4xl">
          <FaXTwitter />
        </div>
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
        <NewTweetModal />
      </div>
    </div>
  );
};

export default Sidebar;
