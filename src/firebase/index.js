import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC1N81TgytMs75mz9d8rqJ54gQF75mAqJc",
  authDomain: "my-app-9935a.firebaseapp.com",
  projectId: "my-app-9935a",
  storageBucket: "my-app-9935a.appspot.com",
  messagingSenderId: "316657439728",
  appId: "1:316657439728:web:3882088c159160ebc20335"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)