import clsx from "clsx";
import React from "react";
import Trending from "./Trending";
import ShowMore from "./ShowMore";
import { FaSearch } from "react-icons/fa";

type RightSidebarProps = {
  classname?: string;
};

const RightSidebar = ({ classname }: RightSidebarProps) => {
  return (
    <div className={clsx(" border-l-2 py-4 pl-4 lg:pr-4 xl:pr-14", classname)}>
      <div className="focus-within:text-primary relative flex items-center  text-gray-400">
        <div className="absolute ml-4">
          <FaSearch className="" />
        </div>
        <input
          type="text"
          placeholder="search"
          autoComplete="off"
          className="focus:ring-primary bg-static rounded-2xl border-none py-2 pl-10 pr-3 font-semibold placeholder:text-gray-400 focus:ring-2"
        />
      </div>
      <div className="bg-static mb-8 mt-6 text-balance rounded-xl px-2 py-4">
        <h4 className="text-xl font-bold">Subscribe to Premium</h4>

        <p className="my-4">
          Subscribe to unlock new features and if eligible, receive a share of
          ads revenue.
        </p>
        <button className="bg-primary rounded-lg px-4 py-2 transition hover:scale-110 hover:text-slate-50">
          Subscribe
        </button>
      </div>

      <div className="bg-static sticky top-0 rounded-xl pt-4">
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
