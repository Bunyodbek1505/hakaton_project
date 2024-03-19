
// firebase-config.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAXfBo8FgD5UkswrTdAACkzgz3O4Ft6-04",
  authDomain: "hackerrankregisterlogin.firebaseapp.com",
  projectId: "hackerrankregisterlogin",
  storageBucket: "hackerrankregisterlogin.appspot.com",
  messagingSenderId: "47781787377",
  appId: "1:47781787377:web:acdf2f2ebcaa7cb3885b50",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Get authentication instance

export { auth };