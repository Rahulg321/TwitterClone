import clsx from "clsx";
import React from "react";

type RightSidebarProps = {
  classname?: string;
};

const RightSidebar = ({ classname }: RightSidebarProps) => {
  return <div className={clsx("border-l-2", classname)}>RightSidebar</div>;
};

export default RightSidebar;
