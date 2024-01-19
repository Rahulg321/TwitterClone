import { Timestamp, serverTimestamp } from "firebase/firestore";

export type Comment = {
  userId: string;
  userName: string;
  commentText: string;
  timestamp: Timestamp;
};

export type Tweet = {
  tweetId: string;
  userId: string;
  fullName: string;
  userName: string;
  userImg: string;
  userEmail: string;
  tweetText: string;
  datePublished: string;
  likes: number;
  retweets: number;
  isVerified: boolean;
  timestamp: Timestamp;
  // comments: Record<string, Comment>;
};
