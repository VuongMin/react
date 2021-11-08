// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNguk7pf2QRlinKRYjncmbwG27FJyJNjk",
  authDomain: "totoshop-1605e.firebaseapp.com",
  projectId: "totoshop-1605e",
  storageBucket: "totoshop-1605e.appspot.com",
  messagingSenderId: "302913160034",
  appId: "1:302913160034:web:86b689acd671fc1fe8a23b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export {app}