// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAX_Fva2o8oyJEk1kkpVk111efmuLiYJd4",
  authDomain: "bingeflix-01.firebaseapp.com",
  projectId: "bingeflix-01",
  storageBucket: "bingeflix-01.firebasestorage.app",
  messagingSenderId: "772562697988",
  appId: "1:772562697988:web:0ec42bc87cd9798cf69a51",
  measurementId: "G-CRPLCZDDKJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);