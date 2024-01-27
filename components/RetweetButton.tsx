"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import React from "react";
import { FaRetweet } from "react-icons/fa";
import clsx from "clsx";

type RetweetButtonProps = {
  retweetCount?: number;
};

const RetweetButton = ({ retweetCount }: RetweetButtonProps) => {
  const [clicked, setClicked] = useState(false);

  const retweetClickHandler = () => {
    setClicked((prevState) => !prevState);
    toast("you retweeted a post");
  };

  return (
    <div className="text-accent flex items-center">
      <div
        className={clsx(
          " cursor-pointer rounded-full p-2 text-lg transition hover:bg-green-300 hover:text-green-700 md:text-xl",
          {
            "text-green-500": clicked,
          },
        )}
        onClick={retweetClickHandler}
      >
        <FaRetweet />
      </div>
      <span>{retweetCount ? retweetCount : 0}</span>
    </div>
  );
};

export default RetweetButton;
