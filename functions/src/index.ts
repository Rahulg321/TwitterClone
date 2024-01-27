import * as admin from "firebase-admin";
import { onDocumentUpdated } from "firebase-functions/v2/firestore";

admin.initializeApp();

exports.updateUserProfile = onDocumentUpdated(
  "/users/{userID}",
  async (event) => {
    const userID = event.params.userID;
    const firestore = admin.firestore();
    const docRef = admin
      .firestore()
      .collection("tweets")
      .where("userId", "==", userID);
    const batch = firestore.batch();

    const updatedData = event.data?.after.data();
    const previousData = event.data?.before.data();

    if (!updatedData) {
      return null;
    }

    if (!previousData) {
      return null;
    }

    if (
      updatedData.first_name == previousData.first_name &&
      (updatedData.profile_picture == previousData.profile_picture &&
        updatedData.user_name) == previousData.user_name
    ) {
      return null;
    }

    const documentSnapshot = await docRef.get();

    documentSnapshot.forEach((doc) => {
      const updatedProperties = {
        ...doc.data(),
        author_name: updatedData.first_name,
        author_image: updatedData.profile_picture,
        user_name: updatedData.user_name,
      };
      batch.update(doc.ref, updatedProperties);
    });

    return batch
      .commit()
      .catch((err) =>
        console.log("inside cloud function for updating user profile", err),
      );
  },
);
