// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAl4DWVZmRQUJt9LQhDQomVS_BudMyixnc",
    authDomain: "thabang-xyz.firebaseapp.com",
    projectId: "thabang-xyz",
    storageBucket: "thabang-xyz.appspot.com",
    messagingSenderId: "646927697951",
    appId: "1:646927697951:web:0a583c11f6131b5a822d2a",
    measurementId: "G-QTFJ6351ZM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);