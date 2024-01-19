import React from "react";
import Tweet from "@/components/Tweet";
import { getTweet } from "@/firebase/getTweet";
import { redirect } from "next/navigation";
import BackArrowProfilePage from "@/components/BackArrowProfilePage";
import TweetLikeButton from "@/components/TweetLikeButton";
import RetweetButton from "@/components/RetweetButton";
import CommentButton from "@/components/CommentButton";
import BookmarkTweetButton from "@/components/BookmarkTweetButton";
import ShareTweetButton from "@/components/ShareTweetButton";
import Image from "next/image";

const page = async ({
  params,
}: {
  params: { TweetId: string; uid: string };
}) => {
  const tweet = await getTweet(params.TweetId);
  if (!tweet) {
    console.log("could not find tweet");
    redirect("/home");
  }

  return (
    <div>
      <div className="flex items-center border-b-4 py-4">
        <BackArrowProfilePage />
        <span className="ml-6 text-2xl font-bold">Post</span>
      </div>
      <div className="">
        <div
          className="py-2"
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(50px, 10%) 1fr",
            gap: "0.5rem",
          }}
        >
          <div className="relative h-[40px]">
            <Image
              src={tweet.userImg}
              alt="image of tweet person"
              fill
              className="rounded-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className="cursor-pointer text-xl font-extrabold hover:underline">
              {tweet.fullName}
            </span>
            <span className="text-base italic text-gray-500">
              @{tweet.userName}
            </span>
          </div>
        </div>
        <span className="mt-2 block px-2">{tweet.tweetText}</span>

        <span className="text-base italic text-gray-500">
          {tweet.datePublished}
        </span>

        <div className="mt-2 flex items-center justify-between border-b-2 border-t-2 px-2 py-2">
          <CommentButton />
          <RetweetButton />
          <TweetLikeButton />
          <BookmarkTweetButton />
          <ShareTweetButton />
        </div>
      </div>
    </div>
  );
};

export default page;
