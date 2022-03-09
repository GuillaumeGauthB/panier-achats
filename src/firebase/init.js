import firebaseConfig from './config.js';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

// Initialize Firebase
export const instanceFirebase = initializeApp(firebaseConfig);

//  Initialiser Firestore
export const bdFirestore = getFirestore();