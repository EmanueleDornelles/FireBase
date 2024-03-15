import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDFxSneq1JNkVijW2dOdMhqYPp4wuLqIU8",
  authDomain: "aula-66365.firebaseapp.com",
  projectId: "aula-66365",
  storageBucket: "aula-66365.appspot.com",
  messagingSenderId: "196120076906",
  appId: "1:196120076906:web:278c33185cf7bf6ff46013"
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH =getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);