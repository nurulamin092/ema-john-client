// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBgqYFeOeNjNwwuAjkpo2Vd8dz7P3ON8IE",
    authDomain: "ema-jhon-simple-da602.firebaseapp.com",
    projectId: "ema-jhon-simple-da602",
    storageBucket: "ema-jhon-simple-da602.appspot.com",
    messagingSenderId: "176958849597",
    appId: "1:176958849597:web:843691674d094ec524a054"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;