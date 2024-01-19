import React from "react";
import { FaRegHeart } from "react-icons/fa";

const TweetLikeButton = () => {
  return (
    <div className="cursor-pointer rounded-full p-2 text-lg text-slate-500 transition hover:bg-blue-400 hover:text-blue-700">
      <FaRegHeart />
    </div>
  );
};

export default TweetLikeButton;
