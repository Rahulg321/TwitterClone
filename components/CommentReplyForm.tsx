"use client";

import React from "react";
import { useRef, useState } from "react";
import { BsEmojiGrin } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { GrGallery, GrScheduleNew } from "react-icons/gr";
import { IoListSharp } from "react-icons/io5";
import { MdOutlineGifBox } from "react-icons/md";
import Image from "next/image";

type CommentReplyFormProps = {
  userName: string;
  userProfilePicture: string;
};

const CommentReplyForm = ({
  userName,
  userProfilePicture,
}: CommentReplyFormProps) => {
  const commentRef = useRef(null);

  return (
    <div>
      <div className="flex justify-start px-2 py-4">
        <div className="relative aspect-1 h-[3.5rem]">
          <Image
            src={userProfilePicture as string}
            alt={`profile picture of ${userName}`}
            fill
            className="rounded-full border object-cover"
          />
        </div>
        <div className="ml-4 flex flex-1 flex-col justify-around">
          <div
            contentEditable
            className="text-accent mb-6 mt-3 max-w-[65ch] border-none  text-base font-semibold focus:outline-none md:text-2xl"
            ref={commentRef}
          >
            Post your reply
          </div>
          <div className="flex  justify-between">
            <div className="text-primary flex gap-4 text-base md:text-xl">
              <GrGallery />
              <MdOutlineGifBox />
              <IoListSharp />
              <BsEmojiGrin />
              <GrScheduleNew />
            </div>
            <div>
              <button className="bg-primary rounded-xl px-4 py-2 transition hover:scale-110 hover:shadow-md">
                Reply
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentReplyForm;
