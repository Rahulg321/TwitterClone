import { Tweet, User } from "@/app/types";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./config";

export default async function getAllUsers(): Promise<User[]> {
  let users: User[] = [];

  const querySnapshot = await getDocs(collection(db, "users"));
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    let user = {
      ...doc.data(),
      userId: doc.id,
    };

    users.push(user as User);
  });

  return users;
}
