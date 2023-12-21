// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-d627d.firebaseapp.com",
  projectId: "mern-estate-d627d",
  storageBucket: "mern-estate-d627d.appspot.com",
  messagingSenderId: "53484364574",
  appId: "1:53484364574:web:9964552ecd2d1bfc131f0f",
  measurementId: "G-575Z6PCBKT"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);