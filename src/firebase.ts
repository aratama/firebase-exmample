import { initializeApp } from "firebase/app";
import "firebase/auth";
import { enableMultiTabIndexedDbPersistence, getFirestore } from "firebase/firestore";
import { firebaseConfig } from "./firebase-config";

export const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app);

// Detect which I'm on server-side or clicnt-side
// https://stackoverflow.com/questions/49411796/how-do-i-detect-whether-i-am-on-server-on-client-in-next-js
if (typeof window !== "undefined") {
  enableMultiTabIndexedDbPersistence(firestore).catch((err) => {
    console.warn("error in enableMultiTabIndexedDbPersistence:", err.code);
  });
}
