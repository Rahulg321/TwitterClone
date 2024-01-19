import clsx from "clsx";
import React from "react";
import { FaRetweet } from "react-icons/fa";

const RetweetButton = () => {
  return (
    <div className="cursor-pointer rounded-full p-2 text-lg text-slate-500 transition hover:bg-blue-400 hover:text-blue-700">
      <FaRetweet />
    </div>
  );
};

export default RetweetButton;
