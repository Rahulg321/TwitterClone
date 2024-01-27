"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MdVerified } from "react-icons/md";
import TweetLikeButton from "./TweetLikeButton";
import RetweetButton from "./RetweetButton";
import CommentButton from "./CommentButton";
import { Timestamp } from "firebase/firestore";
import { GiNetworkBars } from "react-icons/gi";
import { LuUpload } from "react-icons/lu";
import { FaRegBookmark } from "react-icons/fa";
import BookmarkTweetButton from "./BookmarkTweetButton";
import ShareTweetButton from "./ShareTweetButton";

type TweetProps = {
  tweetId: string;
  isVerified: boolean;
  userName: string;
  tweetText: string;
  fullName: string;
  userImg: string;
  datePublished: string;
};

const Tweet = ({
  tweetId,
  userName,
  fullName,
  isVerified,
  tweetText,
  userImg,
  datePublished,
}: TweetProps) => {
  return (
    <div className=" border-b transition hover:bg-slate-800">
      <div className="px-4 pt-6">
        <Link href={`/${userName}/status/${tweetId}`}>
          <div
            className=""
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(50px, 10%) 1fr",
              gap: "0.5rem",
            }}
          >
            <div className="relative aspect-1">
              <Image
                src={userImg}
                alt="profile photo of a person"
                sizes="(min-width: 808px) 50vw, 100vw"
                fill
                className="rounded-full object-cover"
              />
            </div>
            <div className="">
              <div className="flex items-center">
                <span
                  className="cursor-pointer font-bold transition hover:underline"
                  aria-label="user-name"
                >
                  {fullName}
                </span>
                {isVerified ? (
                  <span className="ml-1 text-blue-500">
                    <MdVerified />
                  </span>
                ) : null}
                <span className="ml-2 text-xs font-semibold italic text-gray-600">
                  {userName} / {datePublished}
                </span>
              </div>
              <div className="text-pretty text-sm leading-snug tracking-wide md:text-base">
                <p>{tweetText}</p>
              </div>
            </div>
          </div>
        </Link>
        <div className="mt-2 flex items-center justify-between">
          <CommentButton />
          <RetweetButton />
          <TweetLikeButton />
          <GiNetworkBars className="text-lg text-slate-500" />
          <div className="flex items-center">
            <BookmarkTweetButton tweetId={"asdasd"} userId={"dsaasd"} />
            <ShareTweetButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
