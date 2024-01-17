import React from "react";
import Image from "next/image";
import { MdVerified } from "react-icons/md";

type TweetProps = {
  isVerified: boolean;
  userName: string;
  tweetText: string;
  userId: string;
  datePublished: Date;
};

const Tweet = ({
  userId,
  userName,
  isVerified,
  tweetText,
  datePublished,
}: TweetProps) => {
  const formattedDate = datePublished.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
  return (
    <div className=" border-b transition hover:bg-slate-700">
      <div className="px-4 py-6">
        <div
          className=""
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(70px, 10%) 1fr",
            gap: "0.25rem",
          }}
        >
          <div className="relative h-[70px]">
            <Image
              src={
                "https://plus.unsplash.com/premium_photo-1701083369038-fed213841140?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
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
                {userName}
              </span>
              {isVerified ? (
                <span className="ml-1 text-blue-500">
                  <MdVerified />
                </span>
              ) : null}
              <span className="ml-2 font-semibold italic text-gray-600">
                {userId} / {formattedDate}
              </span>
            </div>
            <div className="text-pretty leading-snug tracking-wide">
              <p>{tweetText}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
