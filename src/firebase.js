// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCRXGhC4zZjbswTBjYQ6hvMlUshMgpEBhQ",
  authDomain: "login-auth-49d40.firebaseapp.com",
  projectId: "login-auth-49d40",
  storageBucket: "login-auth-49d40.firebasestorage.app",
  messagingSenderId: "1037786411658",
  appId: "1:1037786411658:web:3d1007fdd7bfe406fdf373"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
export { app, auth, RecaptchaVerifier, signInWithPhoneNumber };

