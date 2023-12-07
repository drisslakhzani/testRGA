import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDJowq5fdSfcLnySBu1wgC7_ipgsKORHBY",
  authDomain: "reservationrgabuilding.firebaseapp.com",
  projectId: "reservationrgabuilding",
  storageBucket: "reservationrgabuilding.appspot.com",
  messagingSenderId: "508645162467",
  appId: "1:508645162467:web:88d6cb7397a7bea9abf4d6",
  measurementId: "G-T3SRYW2XJE"
};


export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth=getAuth(app) 
export const database=getFirestore(app)