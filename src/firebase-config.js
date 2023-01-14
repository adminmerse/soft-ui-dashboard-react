import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB3oKp8wZLuNYc2xbLsiSEoJF9kVgIi250",
    authDomain: "merse-3eada.firebaseapp.com",
    projectId: "merse-3eada",
    storageBucket: "merse-3eada.appspot.com",
    messagingSenderId: "588194342988",
    appId: "1:588194342988:web:ebfc23c06b77ec9d16ece9",
    measurementId: "G-V1HR80D1CC"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);