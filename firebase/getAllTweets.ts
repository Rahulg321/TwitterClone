import { Tweet } from "@/app/types";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./config";

export async function getAllTweets(): Promise<Tweet[]> {
  let tweets: Tweet[] = [];

  const querySnapshot = await getDocs(collection(db, "tweets"));
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    let tweet = {
      ...doc.data(),
      tweetId: doc.id,
    };

    tweets.push(tweet as Tweet);
  });

  return tweets;
}
