import React from "react";
import NewTweetForm from "@/components/NewTweetForm";
import Tweet from "@/components/Tweet";
import { getAllTweets } from "@/firebase/getAllTweets";

const page = async () => {
  const tweets = await getAllTweets();
  console.log("tweets", tweets);

  return (
    <>
      <div className="border-b-2">
        <NewTweetForm />
      </div>
      {tweets.map((tweet) => (
        <Tweet
          key={tweet.userId}
          tweetId={tweet.tweetId}
          isVerified={tweet.isVerified}
          userName={tweet.userName}
          tweetText={tweet.tweetText}
          fullName={tweet.fullName}
          userImg={tweet.userImg}
          datePublished={tweet.datePublished}
        />
      ))}
    </>
  );
};

export default page;
