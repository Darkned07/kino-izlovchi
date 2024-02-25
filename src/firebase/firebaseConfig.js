// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAHagiohXS4WRxRZb6e_WPF1vALbee_fUE",
  authDomain: "kino-izlovchi.firebaseapp.com",
  projectId: "kino-izlovchi",
  storageBucket: "kino-izlovchi.appspot.com",
  messagingSenderId: "1075921541020",
  appId: "1:1075921541020:web:37246e1b6edb5e3cb9da59",
  measurementId: "G-MVZWVBBDRT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);

export { auth, googleProvider };
