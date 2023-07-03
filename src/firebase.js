import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//     apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//     authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//     projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID ,
//     storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//     appId: process.env.NEXT_PUBLIC_FIREBASE__APP_ID,
//     measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASSUREMENT_ID
//   };
const firebaseConfig = {
  apiKey: "AIzaSyDsF3kwvAJm9PMjkktjp7LnqVNneDhOxdE",
  authDomain: "avian-chariot-391308.firebaseapp.com",
  projectId: "avian-chariot-391308",
  storageBucket: "avian-chariot-391308.appspot.com",
  messagingSenderId: "430434467442",
  appId: "1:430434467442:web:59c7608473cac01e77cceb",
  measurementId: "G-7Y0D8MN0JL"
};
const app = initializeApp(firebaseConfig);
