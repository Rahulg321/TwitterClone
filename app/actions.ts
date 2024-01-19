"use server";

import toast from "react-hot-toast";
import { isUserAuthenticated, getCurrentLoggedInUser } from "@/lib/utils";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/firebase/config";
import { redirect } from "next/navigation";
import { collection, addDoc } from "firebase/firestore";
import { extractUsername } from "@/lib/ExtractUsername";
import { revalidatePath } from "next/cache";

export async function addTweet(tweetText: string | null) {
  // we first check if an authenticated is submitting a tweet
  await isUserAuthenticated();
  //   we also check if the user exists or not
  const user = await getCurrentLoggedInUser();
  if (!user) {
    redirect("/login");
  }

  console.log("current user is", user);

  let tweetProfilePic = "";

  // if the current user does not have a profile pic
  if (!user.picture) {
    tweetProfilePic =
      "https://images.unsplash.com/photo-1705582033498-e7384d494759?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  } else {
    tweetProfilePic = user.picture;
  }

  let username;
  if (user.email) {
    username = extractUsername(user.email);
  }

  let fullName = "";

  if (user && user.given_name) {
    fullName =
      user.given_name + (user.family_name ? " " + user.family_name : "");
  }
  const today = new Date();
  const month = today.toLocaleString("default", { month: "short" }); // Month is 0-indexed
  const date = String(today.getDate()).padStart(2, "0");

  //   if the tweet text is null for extra safety
  if (typeof tweetText === null) {
    toast.error("please enter some text for a tweet");
    return {
      error: true,
      errorMessage: "please enter a valid text",
    };
  }
  try {
    // auto tweetId for each tweet
    const docRef = await addDoc(collection(db, "tweets"), {
      userId: user.id,
      userName: username,
      fullName,
      userEmail: user.email,
      userImg: tweetProfilePic,
      tweetText,
      datePublished: `${date}-${month}`,
      likes: 0,
      retweets: 0,
      isVerified: true,
      timestamp: serverTimestamp(),
    });
  } catch (e) {
    return {
      error: true,
      errorMessage: "could not add document, please try again later",
    };
  }
  revalidatePath("/home");
  return {
    success: true,
    successMessage: "successfully received the tweet",
  };
}
