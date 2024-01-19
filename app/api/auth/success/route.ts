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

export async function GET() {
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

    await setDoc(doc(db, "users", user.id), {
      first_name: user.given_name,
      last_name: user.family_name,
      userId: user.id,
      user_email: user.email,
      profile_picture: user.picture,
    });
  }

  return NextResponse.redirect("http://localhost:3000/home");
}
