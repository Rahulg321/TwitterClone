import { Timestamp, serverTimestamp } from "firebase/firestore";

export enum CategoryUser {
  "Community",
  "Personal",
  "Business",
  "Enterprise",
}

export type User = {
  userId: string;
  first_name: string;
  last_name: string;
  user_name: string;
  user_email: string;
  user_bio: string;
  following: number;
  followers: number;
  is_verified: boolean;
  user_location: string;
  user_category: CategoryUser;
  profile_picture: string;
  cover_picture: string;
  date_joined: Timestamp;
};

export type Comment = {
  userId: string;
  userName: string;
  commentText: string;
  timestamp: Timestamp;
};

export type Tweet = {
  tweetId: string;
  userId: string;
  author_name: string;
  user_name: string;
  author_image: string;
  tweet_text: string;
  likes: number;
  retweets: number;
  comment_count: number;
  bookmark_count: number;
  isVerified: boolean;
  date_published: string;
  // comments: Record<string, Comment>;
};
