import { doc, getDoc } from "firebase/firestore";
import { db } from "./config";
import { Tweet } from "@/app/types";

export const getTweet = async (tweetId: string) => {
  const docRef = doc(db, "tweets", tweetId);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    let foundTweet = {
      ...(docSnap.data() as Tweet),
    };

    return foundTweet;
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
  }
};
