import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAsi9THkoEWkmiZN23p2XJAk0705P45fv8",
    authDomain: "agorasquare.firebaseapp.com",
    projectId: "agorasquare",
    storageBucket: "agorasquare.appspot.com",
    messagingSenderId: "1085282475585",
    appId: "1:1085282475585:web:b0ff52023acbd5afa5b0c0",
    measurementId: "G-CZ3N6L8XV3"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);