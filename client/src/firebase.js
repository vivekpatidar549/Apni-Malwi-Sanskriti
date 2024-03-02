// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "apna-malwa.firebaseapp.com",
  projectId: "apna-malwa",
  storageBucket: "apna-malwa.appspot.com",
  messagingSenderId: "1029615766235",
  appId: "1:1029615766235:web:fae0e843987c73c2fc9afe"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
