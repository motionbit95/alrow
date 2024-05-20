// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNl0L1FHGvIDQfMKzCDgioDrkoRF7vVeY",
  authDomain: "alrow-m.firebaseapp.com",
  projectId: "alrow-m",
  storageBucket: "alrow-m.appspot.com",
  messagingSenderId: "222395378800",
  appId: "1:222395378800:web:f8b1d8df98737417e918b5",
  measurementId: "G-BBLYW8CLHH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
const analytics = getAnalytics(app);
