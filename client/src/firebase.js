// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCEeEjYNicJ4PAsTTCJ559_UcuT2ea3X4w",
  authDomain: "singup-68104.firebaseapp.com",
  projectId: "singup-68104",
  storageBucket: "singup-68104.appspot.com",
  messagingSenderId: "514344586977",
  appId: "1:514344586977:web:76cba345e9c4c9168431a0",
  measurementId: "G-YC4LY9M0K3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);