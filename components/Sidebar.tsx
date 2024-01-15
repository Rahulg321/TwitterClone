import clsx from "clsx";
import React from "react";

type SidebarProps = {
  classname?: string;
};

const Sidebar = ({ classname }: SidebarProps) => {
  return <div className={clsx("border-r-2", classname)}>Sidebar</div>;
};

export default Sidebar;
