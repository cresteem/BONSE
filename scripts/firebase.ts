import { initializeApp } from "firebase/app";
import {
  browserLocalPersistence,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { firebaseConfig } from "../secret/firebase-config";
import { setUserMeta, UserMeta } from "./utils";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export function trackAuth(callback: (userNotLogged: boolean) => void) {
  // Listen for authentication state changes
  onAuthStateChanged(auth, (user) => {
    if (!user) {
      /* remove local meta if user were sign out */
      setUserMeta({} as UserMeta);
      callback(true);
    }
  });
}

export function googleSSO() {
  const provider = new GoogleAuthProvider();

  auth
    .setPersistence(browserLocalPersistence)
    .then(() => signInWithPopup(auth, provider))
    .then((result) => {
      // The signed-in user info.
      const user = result.user;

      const meta = {
        name: user.displayName,
        email: user.email,
        profilePicture: user.photoURL,
        uid: user.uid,
      };

      setUserMeta(meta);
      location.assign("/");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      console.error(
        "Error during sign-in or setting persistence:",
        errorCode,
        errorMessage
      );
    });
}

export function googleSignOut() {
  signOut(auth)
    .then(() => {
      location.assign("/");
    })
    .catch(console.warn);
}
