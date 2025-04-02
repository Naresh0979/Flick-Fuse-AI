// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "flick-fuse.firebaseapp.com",
  projectId: "flick-fuse",
  storageBucket: "flick-fuse.firebasestorage.app",
  messagingSenderId: "670722670892",
  appId: "1:670722670892:web:6ac50cde2c75573c806c89"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
