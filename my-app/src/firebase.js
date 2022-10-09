// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChG2vfRXlY8qSU9_1u9ZKGvVdmuLGAhuA",
  authDomain: "my-app-e9103.firebaseapp.com",
  projectId: "my-app-e9103",
  storageBucket: "my-app-e9103.appspot.com",
  messagingSenderId: "846542634804",
  appId: "1:846542634804:web:fdbfbe3db384c10560af61"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);




export const auth = getAuth(app);

export default app;