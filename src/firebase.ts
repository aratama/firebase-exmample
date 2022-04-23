import { initializeApp } from "firebase/app";
import {} from "firebase/auth";
import { enableIndexedDbPersistence, getFirestore } from "firebase/firestore";
import { firebaseConfig } from "./firebase-config";

export const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app);

if (typeof window !== "undefined") {
  enableIndexedDbPersistence(firestore).catch((err) => {
    if (err.code == "failed-precondition") {
      // Multiple tabs open, persistence can only be enabled
      // in one tab at a a time.
      // ...
      console.warn("failed-precondition");
    } else if (err.code == "unimplemented") {
      // The current browser does not support all of the
      // features required to enable persistence
      // ...
      console.warn("unimplemented");
    } else {
      console.warn("something happen");
    }
  });
}
