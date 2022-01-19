// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyCneV7wI3_bMDNKt3gdVhNRNXDJ1xpjhJw",
  authDomain: "instagram-e4745.firebaseapp.com",
  projectId: "instagram-e4745",
  storageBucket: "instagram-e4745.appspot.com",
  messagingSenderId: "26178870486",
  appId: "1:26178870486:web:f8b752798ffb4bdbed3d77",
};

// Initialize Firebase
// eslint-disable-next-line no-unused-vars
const app = initializeApp(firebaseConfig);

export const db = getFirestore();
