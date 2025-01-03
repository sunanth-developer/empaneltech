// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvG8TYLEYzqM67HsANnjVB_yuYIw4iIF4",
  authDomain: "project-96c5e.firebaseapp.com",
  projectId: "project-96c5e",
  storageBucket: "project-96c5e.firebasestorage.app",
  messagingSenderId: "814939668216",
  appId: "1:814939668216:web:5f8a8c50d0f5f6a2b4850d",
  measurementId: "G-72BMVDF0K4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };