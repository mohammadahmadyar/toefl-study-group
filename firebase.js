import { initializeApp } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js";


const firebaseConfig = {
    apiKey: "AIzaSyAJIg1Lvma2XazPEjt-LH2caIBjGCosJMk",
    authDomain: "toefl-study-group.firebaseapp.com",
    projectId: "toefl-study-group",
    storageBucket: "toefl-study-group.firebasestorage.app",
    messagingSenderId: "424046849270",
    appId: "1:424046849270:web:c9087ddccb5eff667e50d7"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export {
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
};