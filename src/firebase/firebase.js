import firebase from "firebase/app";
import { initializeApp } from "firebase/app";
import "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOCROlOMkl0U3uSFobmcUa4Rq02MTp9Ks",
  authDomain: "netflix-cab38.firebaseapp.com",
  projectId: "netflix-cab38",
  storageBucket: "netflix-cab38.appspot.com",
  messagingSenderId: "58876262193",
  appId: "1:58876262193:web:0546322ce08e477010e210",
};

firebase = initializeApp(firebaseConfig);
export const auth = firebase.auth();
