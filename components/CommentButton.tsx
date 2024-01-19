import React from "react";
import { FaRegComment } from "react-icons/fa";

const CommentButton = () => {
  return (
    <div className="cursor-pointer rounded-full p-2 text-lg text-slate-500 transition hover:bg-blue-400 hover:text-blue-700">
      <FaRegComment />
    </div>
  );
};

export default CommentButton;
