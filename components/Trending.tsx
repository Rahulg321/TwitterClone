import React from "react";

type TrendingProps = {
  title: string;
  category: string;
  numberOfPosts: string;
};

const Trending = ({ title, category, numberOfPosts }: TrendingProps) => {
  return (
    <div className="my-4 cursor-pointer px-4 py-2 transition hover:bg-slate-700">
      <span className="text-sm text-gray-500">{category}</span>
      <p>{title}</p>
      <span className="text-sm italic text-gray-500">{numberOfPosts}</span>
    </div>
  );
};

export default Trending;
