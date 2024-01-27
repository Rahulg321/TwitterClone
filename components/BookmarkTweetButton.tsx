"use client";

import React from "react";
import { useState } from "react";
import { FaRegBookmark } from "react-icons/fa6";
import { FaBookmark } from "react-icons/fa";
import toast from "react-hot-toast";

type BookmarkProps = {
  tweetId: string;
  userId: string;
  tweetBookmarkCount?: number;
};

const BookmarkTweetButton = ({
  tweetId,
  userId,
  tweetBookmarkCount,
}: BookmarkProps) => {
  const [clicked, setClicked] = useState(false);

  const bookMarkClickHandler = () => {
    console.log("clicked on bookmark");

    if (!clicked) {
      toast("successfully addded bookmark");
    }
    setClicked((prevState) => !prevState);
  };

  return (
    <div
      className="text-accent flex
    items-center"
    >
      <div
        onClick={bookMarkClickHandler}
        className="cursor-pointer rounded-full p-2 hover:bg-slate-700"
      >
        {clicked ? (
          <FaBookmark className=" text-lg md:text-xl" />
        ) : (
          <FaRegBookmark className=" text-lg md:text-xl" />
        )}
      </div>
      <span>{tweetBookmarkCount ? tweetBookmarkCount : 0}</span>
    </div>
  );
};

export default BookmarkTweetButton;
