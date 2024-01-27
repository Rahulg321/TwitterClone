import clsx from "clsx";
import React from "react";
import { IoMdAdd } from "react-icons/io";

type FixedIconProps = {
  className?: string;
};

const NewTweetFixedIcon = ({ className }: FixedIconProps) => {
  return (
    <div
      className={clsx("bg-primary z-10 rounded-full p-2 text-4xl ", className)}
    >
      <IoMdAdd />
    </div>
  );
};

export default NewTweetFixedIcon;
