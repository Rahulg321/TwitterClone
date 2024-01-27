"use client";

import React, { useState } from "react";
import { FaEarthAfrica } from "react-icons/fa6";
import { GrGallery } from "react-icons/gr";
import { MdOutlineGifBox } from "react-icons/md";
import { IoListSharp } from "react-icons/io5";
import { BsEmojiGrin } from "react-icons/bs";
import { GrScheduleNew } from "react-icons/gr";
import { FaLocationDot } from "react-icons/fa6";
import { useRef, useEffect } from "react";
import { addTweet } from "@/app/actions";
import toast from "react-hot-toast";

const NewTweetForm = () => {
  const [loading, setLoading] = useState(false);
  const tweetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (tweetRef.current) {
      tweetRef.current.textContent = "What is happening?";
    }
  }, []);

  const submitTweet = async () => {
    // manage loading states since we are in a client component and we are not using the built in form
    setLoading(true);

    if (tweetRef.current) {
      const tweetText = tweetRef.current.textContent;
      const response = await addTweet(tweetText);
      if (response.error) {
        toast.error(response.errorMessage);
      }

      if (response.success) {
        toast.success(response.successMessage);
      }
    }

    setLoading(false);
  };

  return (
    <div className="mb-2 hidden max-w-[65ch] md:block">
      <div className="mt-6 px-10">
        <button className="text-primary border-primary rounded-lg border  px-4 transition hover:scale-110">
          Everyone
        </button>

        {/* <span className="mt-2 block text-xl italic text-gray-400">
          Make a new Tweet
        </span> */}
        <div
          contentEditable
          className="resize- my-4 block w-full text-2xl text-gray-400 focus:outline-none"
          ref={tweetRef}
        />

        <div className="text-primary mb-3 flex items-center justify-start border-b-2 pb-2">
          <div className="border-primary flex cursor-pointer items-center rounded-xl border px-2 transition hover:scale-110">
            <FaEarthAfrica />
            <span className="ml-2">Everyone can reply</span>
          </div>
        </div>
        <div className="mb-2 flex items-center justify-between">
          <div className="text-primary flex gap-4 text-xl">
            <GrGallery />
            <MdOutlineGifBox />
            <IoListSharp />
            <BsEmojiGrin />
            <GrScheduleNew />
            <FaLocationDot />
          </div>
          <button
            className="bg-primary mb-2 rounded-xl px-6 py-2 transition hover:scale-110"
            onClick={submitTweet}
          >
            {loading ? "Submitting Tweet" : "Post"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewTweetForm;
