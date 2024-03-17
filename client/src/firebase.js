// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mernblog-331ad.firebaseapp.com",
  projectId: "mernblog-331ad",
  storageBucket: "mernblog-331ad.appspot.com",
  messagingSenderId: "418915971524",
  appId: "1:418915971524:web:9142752b16c00851683491"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);