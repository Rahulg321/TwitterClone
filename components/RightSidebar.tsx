import clsx from "clsx";
import React from "react";
import Trending from "./Trending";
import ShowMore from "./ShowMore";

type RightSidebarProps = {
  classname?: string;
};

const RightSidebar = ({ classname }: RightSidebarProps) => {
  return (
    <div className={clsx("border-l-2 py-4 pl-4 pr-20", classname)}>
      <input
        type="text"
        placeholder="search"
        className="w-full rounded-xl  bg-slate-800 px-8 py-4 text-base caret-pink-500 shadow-sm focus:border-2 focus:border-pink-500 focus:outline-none focus:ring-1"
      />
      <div className="mb-8 mt-6 text-balance rounded-xl bg-slate-800 px-2 py-4">
        <h4 className="text-xl font-bold">Subscribe to Premium</h4>

        <p className="my-4">
          Subscribe to unlock new features and if eligible, receive a share of
          ads revenue.
        </p>
        <button className="rounded-lg bg-pink-600 px-4 py-2 transition hover:bg-pink-800 hover:text-slate-50">
          Subscribe
        </button>
      </div>

      <div className="sticky top-0 rounded-xl bg-slate-800  pt-4">
        <h4 className="ml-2 text-xl font-extrabold">Whats happening?</h4>

        <div>
          <Trending
            title="React"
            category="Technology"
            numberOfPosts="1,314 posts"
          />
          <Trending
            title="Alex Pierra"
            category="Entertainment: Fighting"
            numberOfPosts="14.4K posts"
          />
          <Trending
            title="Top Gun"
            category="Entertainment"
            numberOfPosts="100K posts"
          />
        </div>
        <ShowMore />
      </div>
    </div>
  );
};

export default RightSidebar;
