// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCW9WO8q33ymzo5p1HHzQSUzQ94LE2Jppg",
  authDomain: "web-dev-learning-course.firebaseapp.com",
  projectId: "web-dev-learning-course",
  storageBucket: "web-dev-learning-course.appspot.com",
  messagingSenderId: "511592073630",
  appId: "1:511592073630:web:3da73ee9bda2ba7350ee8f"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 export default app;