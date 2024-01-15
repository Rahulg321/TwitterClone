import React from "react";
import { FaEarthAfrica } from "react-icons/fa6";
import { GrGallery } from "react-icons/gr";
import { MdOutlineGifBox } from "react-icons/md";
import { IoListSharp } from "react-icons/io5";
import { BsEmojiGrin } from "react-icons/bs";
import { GrScheduleNew } from "react-icons/gr";
import { FaLocationDot } from "react-icons/fa6";

const NewTweetForm = () => {
  return (
    <div className="mb-2">
      <div className=" px-10">
        <button className="rounded-lg border border-pink-500 px-4  text-pink-500 transition hover:bg-pink-800">
          Everyone
        </button>
        <textarea
          name=""
          id=""
          className="focus:none w-full resize-none bg-gray-900 px-4 py-2 placeholder:text-2xl focus:outline-none"
          placeholder="What is happening?"
        ></textarea>
        <div className="mb-3 flex items-center justify-start border-b-2 pb-2 text-pink-500 ">
          <div className="flex cursor-pointer items-center rounded-xl px-2 transition hover:bg-pink-800">
            <FaEarthAfrica />
            <span className="ml-2">Everyone can reply</span>
          </div>
        </div>
        <div className="mb-2 flex items-center justify-between">
          <div className="flex gap-4 text-xl text-pink-500">
            <GrGallery />
            <MdOutlineGifBox />
            <IoListSharp />
            <BsEmojiGrin />
            <GrScheduleNew />
            <FaLocationDot />
          </div>
          <button className="mb-2 rounded-xl bg-pink-500 px-6 py-2 transition hover:bg-pink-800">
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewTweetForm;
