import { doc, getDoc } from "firebase/firestore";
import { db } from "./config";
import { User } from "@/app/types";

const getFirebaseUser = async (userId: string) => {
  const docRef = doc(db, "users", userId);

  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    let foundUser = {
      ...(docSnap.data() as User),
    };

    return foundUser;
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!, could not find firebase user");
  }
};

export default getFirebaseUser;
