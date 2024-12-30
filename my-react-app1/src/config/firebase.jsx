// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// 匯入firebase
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA1-UTwBNBxd7NED9Mm6i4fqcdWe9LlD-8",
    authDomain: "react-auth-3af12.firebaseapp.com",
    projectId: "react-auth-3af12",
    storageBucket: "react-auth-3af12.firebasestorage.app",
    messagingSenderId: "230484321226",
    appId: "1:230484321226:web:07ae4fbd68c1abe8da6533"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// 匯出firebase
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();