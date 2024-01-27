"use client";

import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { useState } from "react";
import toast from "react-hot-toast";

type TweetLikeProps = {
  tweetLikeCount?: number;
};

const TweetLikeButton = ({ tweetLikeCount }: TweetLikeProps) => {
  const [clicked, setClicked] = useState(false);

  const likeClickHandler = () => {
    setClicked((prevState) => !prevState);
    toast("you just liked a post");
  };

  return (
    <div className="text-accent flex items-center">
      <div
        className=" cursor-pointer rounded-full p-2 text-lg transition hover:bg-blue-400 hover:text-blue-700 md:text-xl"
        onClick={likeClickHandler}
      >
        {clicked ? <FaHeart /> : <FaRegHeart />}
      </div>
      <span>{tweetLikeCount ? tweetLikeCount : 0}</span>
    </div>
  );
};

export default TweetLikeButton;
