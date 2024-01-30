import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { db } from "@/firebase/config";
import {
  collection,
  query,
  where,
  getDocs,
  setDoc,
  doc,
} from "firebase/firestore";
import { NextResponse } from "next/server";
import StartingProfilePics, { coverImages } from "@/lib/ProfilePics";
import getRandomNumberInRange from "@/lib/GenerateRandom";
import { serverTimestamp } from "firebase/firestore";
import { extractUsername } from "@/lib/ExtractUsername";

export async function GET(request: Request) {
  console.log("inside success route for auth");
  const { getUser, getOrganization } = getKindeServerSession();
  const user = await getUser();

  if (!user || user == null || !user.id)
    throw new Error("something went wrong with authentication" + user);

  // if the user is new user  store it in the database
  const q = query(collection(db, "users"), where("userId", "==", user.id));

  const querySnapshot = await getDocs(q);

  if (querySnapshot.empty) {
    //there was no user found with this name
    // it means the user is registering for the first time

    let extractedUserName = extractUsername(user?.email as string);

    let userProfilePicture =
      "https://images.unsplash.com/photo-1668342482782-582a821eaa59?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    let userCoverPicture =
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    await setDoc(doc(db, "users", user.id), {
      userId: user.id,
      first_name: user.given_name,
      last_name: user.family_name,
      user_name: extractedUserName,
      user_email: user.email,
      user_bio: "sample staring bio for starting",
      user_location: "default Location",
      user_category: "Community",
      followers: 0,
      following: 0,
      is_verified: false,
      profile_picture: userProfilePicture,
      cover_picture: userCoverPicture,
      date_joined: serverTimestamp(),
    });
  }

  return NextResponse.redirect(new URL("/home", request.url));
}
