// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0eY-ZgglCxf5s9MgUaRAxSj-AV3ypScU",
  authDomain: "chatnchatapp.firebaseapp.com",
  projectId: "chatnchatapp",
  storageBucket: "chatnchatapp.appspot.com",
  messagingSenderId: "403861545203",
  appId: "1:403861545203:web:cbbdb6861bc304d91b5786",
  measurementId: "G-LMYQ4HWN2Z",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
const analytics = getAnalytics(app);
