import React from "react";
import NewTweetForm from "@/components/NewTweetForm";
import Tweet from "@/components/Tweet";
import { getAllTweets } from "@/firebase/getAllTweets";
import NewTweetFixedIcon from "@/components/NewTweetFixedIcon";

const page = async () => {
  const tweets = await getAllTweets();

  return (
    <div className="">
      <div className="border-b-2">
        <NewTweetForm />
      </div>

      <NewTweetFixedIcon className="fixed bottom-20 right-8 md:hidden" />
      {tweets.map((tweet) => (
        <Tweet
          key={tweet.tweetId}
          tweetId={tweet.tweetId}
          isVerified={tweet.isVerified}
          userName={tweet.user_name}
          tweetText={tweet.tweet_text}
          fullName={tweet.author_name}
          userImg={tweet.author_image}
          datePublished={tweet.date_published}
        />
      ))}
      {tweets.map((tweet) => (
        <Tweet
          key={tweet.tweetId}
          tweetId={tweet.tweetId}
          isVerified={tweet.isVerified}
          userName={tweet.user_name}
          tweetText={tweet.tweet_text}
          fullName={tweet.author_name}
          userImg={tweet.author_image}
          datePublished={tweet.date_published}
        />
      ))}
      {tweets.map((tweet) => (
        <Tweet
          key={tweet.tweetId}
          tweetId={tweet.tweetId}
          isVerified={tweet.isVerified}
          userName={tweet.user_name}
          tweetText={tweet.tweet_text}
          fullName={tweet.author_name}
          userImg={tweet.author_image}
          datePublished={tweet.date_published}
        />
      ))}
    </div>
  );
};

export default page;
