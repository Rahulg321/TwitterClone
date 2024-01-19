import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCH2wSByNkjV_oUyYr2et5neLXM-u7mnsg",
  authDomain: "twitter-clone-7a927.firebaseapp.com",
  projectId: "twitter-clone-7a927",
  storageBucket: "twitter-clone-7a927.appspot.com",
  messagingSenderId: "688003868698",
  appId: "1:688003868698:web:8c76f98de6a099937fc9a3",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
