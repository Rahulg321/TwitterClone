"use server";

import { isUserAuthenticated, getCurrentLoggedInUser } from "@/lib/utils";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/firebase/config";
import { redirect } from "next/navigation";
import { collection, addDoc } from "firebase/firestore";
import { revalidatePath } from "next/cache";
import getFirebaseUser from "@/firebase/getUser";
import { v4 as uuidv4 } from "uuid";
import { updateDoc } from "firebase/firestore";

export async function addTweet(tweet_text: string | null) {
  // we first check if an authenticated is submitting a tweet
  await isUserAuthenticated();
  //   we also check if the user exists or not
  const user = await getCurrentLoggedInUser();
  if (!user) {
    console.log("there is no current user inside server action");
    redirect("/login");
  }

  const loggedInUser = await getFirebaseUser(user.id);

  //   if the tweet text is null for extra safety
  if (typeof tweet_text === null) {
    return {
      error: true,
      errorMessage: "please enter a valid text",
    };
  }

  let tweetId = uuidv4();
  let formattedDate = new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
  });

  try {
    // auto tweetId for each tweet
    const docRef = await setDoc(doc(db, "tweets", tweetId), {
      tweetId,
      userId: user.id,
      user_name: loggedInUser?.user_name,
      author_name: loggedInUser?.first_name,
      author_image: loggedInUser?.profile_picture,
      tweet_text,
      likes: 0,
      retweets: 0,
      // when a new tweet is created the comments are zero
      comment_count: 0,
      bookmark_count: 0,
      isVerified: loggedInUser?.is_verified,
      date_published: formattedDate,
    });
  } catch (e) {
    console.log(e);

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

export async function changeUserProfile(formData: FormData) {
  console.log("inside server action for change user profile");
  console.log(formData);

  const location = formData.get("location");
  const category = formData.get("category");
  const description = formData.get("description");
  const coverImg = formData.get("coverImg");
  const profileName = formData.get("profileName");
  const profilePic = formData.get("profilePic");
  const username = formData.get("username");

  await isUserAuthenticated();
  //   we also check if the user exists or not
  const user = await getCurrentLoggedInUser();
  if (!user) {
    console.log("there is no current user inside server action");
    redirect("/login");
  }

  const userRef = doc(db, "users", user.id);

  await updateDoc(userRef, {
    profile_picture: profilePic,
    user_location: location,
    user_category: category,
    user_bio: description,
    user_name: username,
    first_name: profileName,
    cover_picture: coverImg,
  });

  console.log("successfully updated document");

  redirect(`/${user.id}`);
}
