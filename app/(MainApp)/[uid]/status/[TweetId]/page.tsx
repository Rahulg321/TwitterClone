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
import CommentReplyForm from "@/components/CommentReplyForm";
import getFirebaseUser from "@/firebase/getUser";
import { getCurrentLoggedInUser } from "@/lib/utils";

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

  const currentUser = await getCurrentLoggedInUser();

  if (!currentUser) {
    console.log("please login to make a comment to a tweet");
    redirect("/login");
  }

  const firebaseUser = await getFirebaseUser(currentUser?.id);
  if (!firebaseUser) {
    console.log("could not find firebase user in tweet component");
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
          <div className="relative aspect-1">
            <Image
              src={tweet.author_image}
              alt="image of tweet person"
              fill
              className="rounded-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className="cursor-pointer text-xl font-extrabold hover:underline">
              {tweet.author_name}
            </span>
            <span className="text-base italic text-gray-500">
              @{tweet.user_name}
            </span>
          </div>
        </div>
        <span className="mt-2 block px-2">{tweet.tweet_text}</span>

        <span className="text-base italic text-gray-500">
          {tweet.date_published}
        </span>

        <div className="mt-2 flex items-center justify-between border-b-2 border-t-2 px-2 py-2">
          <CommentButton />
          <RetweetButton />
          <TweetLikeButton />
          <BookmarkTweetButton tweetId={tweet.tweetId} userId={tweet.userId} />
          <ShareTweetButton />
        </div>
      </div>
      <CommentReplyForm
        userName={firebaseUser?.user_name as string}
        userProfilePicture={firebaseUser?.profile_picture as string}
      />
      view all tweet comments here
    </div>
  );
};

export default page;
