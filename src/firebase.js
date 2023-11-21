// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnVBJVAxNOmCnybjppXl5j91au5HqfnCs",
  authDomain: "portfoliok-3ca7d.firebaseapp.com",
  projectId: "portfoliok-3ca7d",
  storageBucket: "portfoliok-3ca7d.appspot.com",
  messagingSenderId: "1077921546898",
  appId: "1:1077921546898:web:55052da107fed417d15c4b",
  measurementId: "G-1HVXK8VHRJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);