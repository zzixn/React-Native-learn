// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import 'firebase/auth';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLgrE06-JnxULuMKVAhZeGS6_shAijNdE",
  authDomain: "react-native-todo-app-8c284.firebaseapp.com",
  projectId: "react-native-todo-app-8c284",
  storageBucket: "react-native-todo-app-8c284.appspot.com",
  messagingSenderId: "1064745207627",
  appId: "1:1064745207627:web:654e682bbbf59eaadd8ace"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;