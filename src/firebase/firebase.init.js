// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyB6RcqdymlLNXtBbtJCmR1tMWl9FiCtNL0",
  authDomain: "notice-board-4dbdd.firebaseapp.com",
  projectId: "notice-board-4dbdd",
  storageBucket: "notice-board-4dbdd.firebasestorage.app",
  messagingSenderId: "31351026264",
  appId: "1:31351026264:web:37f643ea24407cdb1b902d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);