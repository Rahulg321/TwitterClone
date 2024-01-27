import React from "react";
import { FaRegComment } from "react-icons/fa";

type CommentButtonProps = {
  tweetCommentCount?: number;
};

const CommentButton = ({ tweetCommentCount }: CommentButtonProps) => {
  return (
    <div className="text-accent flex items-center ">
      <div className="cursor-pointer rounded-full p-2 text-lg transition hover:bg-blue-400 hover:text-blue-700 md:text-xl">
        <FaRegComment />
      </div>
      <span>{tweetCommentCount ? tweetCommentCount : 0}</span>
    </div>
  );
};

export default CommentButton;
