// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDo1CEt04KdSbGUxRFwXEz-tf5hX3Cve1A",
  authDomain: "ocla-d3b70.firebaseapp.com",
  projectId: "ocla-d3b70",
  storageBucket: "ocla-d3b70.appspot.com", // <-- FIXED
  messagingSenderId: "415009592605",
  appId: "1:415009592605:web:2214ba5c884624ca90bdf4",
  measurementId: "G-GL584CE8BR"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;